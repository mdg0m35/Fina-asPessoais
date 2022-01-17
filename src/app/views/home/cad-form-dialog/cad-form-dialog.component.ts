import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-cad-form-dialog',
  templateUrl: './cad-form-dialog.component.html',
  styleUrls: ['./cad-form-dialog.component.css']
})
export class CadFormDialogComponent implements OnInit {
  public cadForm: FormGroup | undefined;

  constructor(
  private fb: FormBuilder,
    public dialogRef: MatDialogRef<CadFormDialogComponent>,
  ) { }

  ngOnInit(): void {
    this.cadForm = this.fb.group({
      valor:['',[Validators.required]],
      dataReceb:['',[Validators.required]],
      dataReceEspe:['',[Validators.required]],
      descricao:['',[Validators.required]],
      tipoReceita:['',[Validators.required]]
  });
}

  cancelar(): void {
    this.dialogRef.close();
  }

}
