import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-receta',
  templateUrl: './receta.page.html',
  styleUrls: ['./receta.page.scss'],
})
export class RecetaPage implements OnInit {

 
  recetaId?: string | null;
  chracter!: any;

  constructor(private http: HttpClient, private activatedRoute: ActivatedRoute) {
    
    }

  ngOnInit() {
    this.recetaId = this.activatedRoute.snapshot.paramMap.get("idMeal")
    this.http
      .get("www.themealdb.com/api/json/v1/1/lookup.php?i" + this.recetaId)
      .subscribe(res => this.chracter = res)  }

  }


