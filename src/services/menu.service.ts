import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Menu } from 'src/model/menu';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private http: HttpClient ) { }

  getMenu(){
    return this.http.get<Menu[]>("./assets/configuraciones/menu.json");
  }

}
