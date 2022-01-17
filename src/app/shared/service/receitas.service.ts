import { criarReceitas, receitasM } from './../model/receitas.model';
import { HttpClient, HttpClientModule, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, take } from 'rxjs';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReceitasService {

  private readonly apiUrl = "http://localhost:8080/api/receitas";

    httpOptions = {
      headers: new HttpHeaders({
          'content-Type': 'application/json'
        })
    };


  constructor(
   private httpclient: HttpClient
    ) { }

   listReceitas(){
     return this.httpclient.get<receitasM[]>(this.apiUrl)
     .pipe(
       tap(console.log)
     );
   }

   criar(cria: any){
     return this.httpclient.post(this.apiUrl,cria).pipe(take(1));
   }

   public postCad(cad:any):Observable<receitasM>{
     return this.httpclient.post<any>(this.apiUrl,cad,this.httpOptions);
   }

}
