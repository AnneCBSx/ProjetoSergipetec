import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public dialog: MatDialog) {}
  title = 'ProjetoSergipetec';
  nome='abv'


   onClick() {
console.log(this.nome);
  }
  acaoPrimaria(){}
}
