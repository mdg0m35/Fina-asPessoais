import { receitasM, criarReceitas } from './../../../shared/model/receitas.model';
import { ReceitasService } from './../../../shared/service/receitas.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-receitas-list',
  templateUrl: './receitas-list.component.html',
  styleUrls: ['./receitas-list.component.css'],

})
export class ReceitasListComponent implements OnInit {

  listReceitas: receitasM[] | undefined;
  cadReceitas:criarReceitas[] | undefined;





  constructor(

    private services: ReceitasService
    ) {}





  ngOnInit(): void {

      this.services.listReceitas()
    .subscribe(dados => this.listReceitas = dados);
  }





  }


