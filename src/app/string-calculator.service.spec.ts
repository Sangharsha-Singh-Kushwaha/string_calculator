import { TestBed } from '@angular/core/testing';

import { StringCalculatorService } from './string-calculator.service';

describe('StringCalculatorService', () => {
  let service: StringCalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StringCalculatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return 0 for an empty string', () => {
    expect(service.add('')).toEqual(0);
  });

  it('should return 0 for an empty string with mutliple space', () => {
    expect(service.add('                 ')).toEqual(0);
  });

  it('should return the number itself when only one number is provided', () => {
    expect(service.add('1')).toEqual(1);
    expect(service.add('100')).toEqual(100);
  });

  it('should return the sum of two numbers', () => {
    expect(service.add('1,2')).toEqual(3);
    expect(service.add('10,20')).toEqual(30);
  });

  it('should handle newlines between numbers and return the sum of numbers in string', () => {
    expect(service.add('1\n2,3')).toEqual(6);
  });

  it('should handle different delimiters and return the sum of numbers in string', () => {
    expect(service.add('//;\n1;2')).toEqual(3);
  });

  it('should throw an error when a negative number is provided', () => {
    expect(() => service.add('1,-2')).toThrowError('negatives not allowed: -2');
  });

  it('should throw an error when multiple negative numbers are provided', () => {
    expect(() => service.add('1,-2,-3')).toThrowError('negatives not allowed: -2, -3');
  });

  it('should ignore numbers greater than 1000 and return the sum of numbers in string less than 1001', () => {
    expect(service.add('2,1001')).toEqual(2);
  });

  it('should handle delimiters of any length and return the sum of numbers in string', () => {
    expect(service.add('//[***]\n1***2***3')).toEqual(6);
  });

  it('should handle multiple delimiters and return the sum of numbers in string', () => {
    expect(service.add('//[*][%]\n1*2%3')).toEqual(6);
  });

  it('should handle multiple delimiters with length longer than one char and return the sum of numbers in string', () => {
    expect(service.add('//[***][%%%][;;;;;;]\n1***2%%%3')).toEqual(6);
  });
});
