import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultationContactComponent } from './consultation-contact.component';

describe('ConsultationContactComponent', () => {
  let component: ConsultationContactComponent;
  let fixture: ComponentFixture<ConsultationContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultationContactComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultationContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
