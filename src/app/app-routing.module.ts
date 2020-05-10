import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RomanNumeralsComponent } from './roman-numerals/roman-numerals.component';



const routes: Routes = [
  { path: '', redirectTo: '/RomanNumerals', pathMatch: 'full' },
  {
    path: 'RomanNumerals',
    component: RomanNumeralsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
