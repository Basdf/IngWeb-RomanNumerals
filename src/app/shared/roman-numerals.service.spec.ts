import { TestBed } from '@angular/core/testing';

import { RomanNumeralsService } from './roman-numerals.service';

describe('RomanNumeralsService', () => {
  let service: RomanNumeralsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RomanNumeralsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
describe('RomanNumerals Base Cases', () => {
  let service: RomanNumeralsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RomanNumeralsService);
  });

  it('Convert the number 1', () => {
    expect(service.number1()).toEqual('I');
  });

  it('Convert the number 5', () => {
    expect(service.number5()).toEqual('V');
  });

  it('Convert the number 10', () => {
    expect(service.number10()).toEqual('X');
  });

  it('Convert the number 50', () => {
    expect(service.number50()).toEqual('L');
  });

  it('Convert the number 100', () => {
    expect(service.number100()).toEqual('C');
  });

  it('Convert the number 500', () => {
    expect(service.number500()).toEqual('D');
  });

  it('Convert the number 1000', () => {
    expect(service.number1000()).toEqual('M');
  });
});
describe('RomanNumerals Importan Cases', () => {
  let service: RomanNumeralsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RomanNumeralsService);
  });
  it('Convert the number 4', () => {
    expect(service.romanNumber(4)).toEqual('IV');
  });
  it('Convert the number 9', () => {
    expect(service.romanNumber(9)).toEqual('IX');
  });
  it('Convert the number 49', () => {
    expect(service.romanNumber(49)).toEqual('XLIX');
  });
  it('Convert the number 99', () => {
    expect(service.romanNumber(99)).toEqual('XCIX');
  });
  it('Convert the number 499', () => {
    expect(service.romanNumber(499)).toEqual('CDXCIX');
  });
  it('Convert the number 999', () => {
    expect(service.romanNumber(999)).toEqual('CMXCIX');
  });
});
describe('RomanNumerals Random Cases', () => {
  let service: RomanNumeralsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RomanNumeralsService);
  });
  it('Convert the number 110', () => {
    expect(service.romanNumber(110)).toEqual('CX');
  });
  it('Convert the number 489', () => {
    expect(service.romanNumber(489)).toEqual('CDLXXXIX');
  });
  it('Convert the number 208', () => {
    expect(service.romanNumber(208)).toEqual('CCVIII');
  });
  it('Convert the number 239', () => {
    expect(service.romanNumber(239)).toEqual('CCXXXIX');
  });
  it('Convert the number 995', () => {
    expect(service.romanNumber(995)).toEqual('CMXCV');
  });
  it('Convert the number 545', () => {
    expect(service.romanNumber(545)).toEqual('DXLV');
  });
  it('Convert the number 246', () => {
    expect(service.romanNumber(246)).toEqual('CCXLVI');
  });
  it('Convert the number 612', () => {
    expect(service.romanNumber(612)).toEqual('DCXII');
  });
  it('Convert the number 888', () => {
    expect(service.romanNumber(888)).toEqual('DCCCLXXXVIII');
  });
  it('Convert the number 86', () => {
    expect(service.romanNumber(86)).toEqual('LXXXVI');
  });
  it('Convert the number 638', () => {
    expect(service.romanNumber(638)).toEqual('DCXXXVIII');
  });
  it('Convert the number 529', () => {
    expect(service.romanNumber(529)).toEqual('DXXIX');
  });
  it('Convert the number 430', () => {
    expect(service.romanNumber(430)).toEqual('CDXXX');
  });
  it('Convert the number 342', () => {
    expect(service.romanNumber(342)).toEqual('CCCXLII');
  });
  it('Convert the number 833', () => {
    expect(service.romanNumber(833)).toEqual('DCCCXXXIII');
  });
  it('Convert the number 79', () => {
    expect(service.romanNumber(79)).toEqual('LXXIX');
  });
  it('Convert the number 747', () => {
    expect(service.romanNumber(747)).toEqual('DCCXLVII');
  });
  it('Convert the number 402', () => {
    expect(service.romanNumber(402)).toEqual('CDII');
  });
  it('Convert the number 514', () => {
    expect(service.romanNumber(514)).toEqual('DXIV');
  });
  it('Convert the number 210', () => {
    expect(service.romanNumber(210)).toEqual('CCX');
  });
});
