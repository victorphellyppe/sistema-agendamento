import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'brPhone',
})
export class BrPhonePipe implements PipeTransform {
  transform(value: string | null): string | null {
    if (!value || !this.isValidPhone(value)) {
      return null;
    }
    return this.formatPhone(value);
  }

  private isValidPhone(phone: string): boolean {
    const phoneRegex = /^[0-9]{10,11}$/;
    return phoneRegex.test(phone);
  }

  private formatPhone(phone: string): string {
    return phone;
  }
}
