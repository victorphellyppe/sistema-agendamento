import { TestBed } from '@angular/core/testing';
import { ConsultationContactComponent } from './consultation-contact.component';

describe('ConsultationContactComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultationContactComponent],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(ConsultationContactComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
