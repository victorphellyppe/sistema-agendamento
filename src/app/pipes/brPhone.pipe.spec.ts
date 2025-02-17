import { BrPhonePipe } from './brPhone.pipe';

describe('BrPhonePipe', () => {
  let pipe: BrPhonePipe;

  beforeEach(() => {
    pipe = new BrPhonePipe();
  });

  it('should return the original value if it is a valid phone number', () => {
    const validPhone = '1234567890';
    expect(pipe.transform(validPhone)).toEqual(validPhone);
  });

  it('should return null if the phone number is invalid', () => {
    const invalidPhone = '';
    expect(pipe.transform(invalidPhone)).toBeNull();
  });
});
