import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { receitasM } from 'src/app/shared/model/receitas.model';
import { ReceitasService } from 'src/app/shared/service/receitas.service';
import { CadFormDialogComponent } from './cad-form-dialog/cad-form-dialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public CadReceitas: receitasM[] | undefined;

  constructor(public dialog: MatDialog,

    private services: ReceitasService) { }

    addCad(): void {

      const dialogRef = this.dialog.open(CadFormDialogComponent, {
        width: '400px',
      });

      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');

      });
    }



  ngOnInit(): void {
    this.services.listReceitas()
    .subscribe(dados => this.CadReceitas = dados);
  }

}
