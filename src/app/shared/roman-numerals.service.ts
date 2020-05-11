import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RomanNumeralsService {

  constructor() { }
  number1(): string { return 'I' }
  number5(): string { return 'V' }
  number10(): string { return 'X' }
  number50(): string { return 'L' }
  number100(): string { return 'C' }
  number500(): string { return 'D' }
  number1000(): string { return 'M' }
  romanUnit(number: number) {
    switch (number) {
      case 1:
        return this.number1()
      case 4:
        return this.number1() + this.number5()
      case 5:
        return this.number5()
      case 9:
        return this.number1() + this.number10()
      default:
        return this.romanUnit(number - 1) + this.number1()
    }
  }
  romanTens(number: number) {
    switch (number) {
      case 10:
        return this.number10()
      case 40:
        return this.number10() + this.number50()
      case 50:
        return this.number50()
      case 90:
        return this.number10() + this.number100()
      default:
        return this.romanTens(number - 10) + this.number10()
    }
  }
  romanHundreds(number: number) {
    switch (number) {
      case 100:
        return this.number100()
      case 400:
        return this.number100() + this.number500()
      case 500:
        return this.number500()
      case 900:
        return this.number100() + this.number1000()
      default:
        return this.romanHundreds(number - 100) + this.number100()
    }

  }

  romanNumber(number: number): string {
    if (number > 1000) {
      return "Solo se admiten valores entre 1 y 1000"
    }
    if (number === 1000) {
      return this.number1000()
    }

    let unidades = number % 10
    let decenas = (number % 100) - (number % 100) % 10
    let centenas = number - (number % 100);
    let romanUnidades = ""
    let romanDecenas = ""
    let romanCentenas = ""
    if (unidades !== 0) {
      romanUnidades = this.romanUnit(unidades)
    }
    if (decenas !== 0) {
      romanDecenas = this.romanTens(decenas)
    }
    if (centenas !== 0) {
      romanCentenas = this.romanHundreds(centenas)
    }
    return romanCentenas + romanDecenas + romanUnidades

  }
}
