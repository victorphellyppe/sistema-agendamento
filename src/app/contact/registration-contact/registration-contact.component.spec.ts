import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { RegistrationContactComponent } from './registration-contact.component';
import { ContactService } from '../../services/contact.service';

describe('RegistrationContactComponent', () => {
  let component: RegistrationContactComponent;
  let fixture: ComponentFixture<RegistrationContactComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [RegistrationContactComponent],
      providers: [FormBuilder, ContactService],
    });

    fixture = TestBed.createComponent(RegistrationContactComponent);
    component = fixture.componentInstance; // Agora 'component' está corretamente referenciado
    fixture.detectChanges(); // Garante que o componente e a sua estrutura sejam detectados
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(RegistrationContactComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it('should render the form with name, phone, email, and favorite fields', () => {
    const nameInput = fixture.debugElement.query(By.css('#nome')).nativeElement;
    const phoneInput = fixture.debugElement.query(
      By.css('#telefone')
    ).nativeElement;
    const emailInput = fixture.debugElement.query(
      By.css('#email')
    ).nativeElement;
    const favoriteSpan = fixture.debugElement.query(
      By.css('#favorite')
    ).nativeElement;

    expect(nameInput).toBeTruthy();
    expect(phoneInput).toBeTruthy();
    expect(emailInput).toBeTruthy();
    expect(favoriteSpan).toBeTruthy();
  });

  it('should update the form control when user types in the name field', () => {
    const nameInput = fixture.debugElement.query(By.css('#nome')).nativeElement;
    nameInput.value = 'Victor Phellyppe';
    nameInput.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    expect(component.registrationContact.get('name')?.value).toBe(
      'Victor Phellyppe'
    );
  });

  it('should update the email field with vitinifal@gmail.com', () => {
    component.updateEmail('vitinifal@gmail.com');
    fixture.detectChanges();

    const emailControl = component.registrationContact.get('email');
    expect(emailControl?.value).toBe('vitinifal@gmail.com');
  });

  it('should format the phone number when user types in the phone field', () => {
    const phoneInput = fixture.nativeElement.querySelector('input');
    phoneInput.value = '82988260479';
    phoneInput.dispatchEvent(new Event('input'));

    fixture.detectChanges();

    expect(phoneInput.value).toBe('(82) 988260479');
  });

  it('should toggle the favorite star when clicked', () => {
    const favoriteStar = fixture.debugElement.query(
      By.css('#favorite')
    ).nativeElement;

    expect(favoriteStar.textContent).toBe('☆');

    favoriteStar.click();
    fixture.detectChanges();
    expect(favoriteStar.textContent).toBe('⭐');

    favoriteStar.click();
    fixture.detectChanges();
    expect(favoriteStar.textContent).toBe('☆');
  });

  it('should call onSubmit when form is submitted', () => {
    spyOn(component, 'onSubmit');

    const form = fixture.debugElement.query(By.css('form')).nativeElement;

    form.submit();
    fixture.detectChanges();

    expect(component.onSubmit).toHaveBeenCalled();
  });
});
