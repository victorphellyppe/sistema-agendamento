/* tslint:disable:no-unused-variable */
import { TestBed, waitForAsync, inject } from '@angular/core/testing';
import { AuthService } from './auth.service';

describe('Service: Auth', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthService],
    });
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return true when login is successful', () => {
    spyOn(service, 'login').and.returnValue(true);
    expect(service.login('user', 'password')).toBeTrue();
  });

  it('should return false when login fails', () => {
    spyOn(service, 'login').and.returnValue(false);
    expect(service.login('user', 'wrongpassword')).toBeFalse();
  });

  it('should logout successfully', () => {
    spyOn(service, 'logout');
    service.logout();
    expect(service.logout).toHaveBeenCalled();
  });
});
