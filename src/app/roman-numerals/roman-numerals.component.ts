import { RomanNumeralsService } from './../shared/roman-numerals.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-roman-numerals',
  templateUrl: './roman-numerals.component.html',
  styleUrls: ['./roman-numerals.component.css']
})
export class RomanNumeralsComponent implements OnInit {
  numero: any = {}

  constructor(private romanNumberService: RomanNumeralsService) { }

  ngOnInit(): void {
  }
  TranformarNumero() {
    if (parseInt(this.numero.arabigo)) {
      this.numero.romano = this.romanNumberService.romanNumber(parseInt(this.numero.arabigo))
    } else {
      this.numero.romano = ""
    }
  }

}
