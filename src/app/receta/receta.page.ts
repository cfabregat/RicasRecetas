import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute, Router } from "@angular/router";
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-receta',
  templateUrl: './receta.page.html',
  styleUrls: ['./receta.page.scss'],
})
export class RecetaPage implements OnInit {

 
  recetaId!: any[];
  chracter!: any;

  constructor(public fb: FormBuilder, private router:Router, private http:HttpClient) {

    }

  ngOnInit() {
    this.http.get<any>('https://www.themealdb.com/api/json/v1/1/lookup.php?i' + this.recetaId)
      .subscribe(data => {
          this.chracter = data ;
     })

     /*.subscribe((res) => {
          this.chracter = res;
     */
    }
  }