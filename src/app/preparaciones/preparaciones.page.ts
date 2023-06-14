import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { MealsEntity } from '../mealEntity';

@Component({
  selector: 'app-preparaciones',
  templateUrl: './preparaciones.page.html',
  styleUrls: ['./preparaciones.page.scss'],
})
export class PreparacionesPage implements OnInit {
  preparaciones: MealsEntity[] = [];

  constructor(private storage: Storage) { }

  async ngOnInit() {
    await this.storage.create();
    console.log(await this.storage.get('chracter'))
    const storedData = await this.storage.get('chracter');
    console.log(storedData)
 
    storedData.forEach((data: any) => this.createMealsEntity(data));

    console.log(this.preparaciones);
  }

  private createMealsEntity(data: any) {
    const mealsEntity: MealsEntity =  new  MealsEntityImpl();
    mealsEntity.strMeal = data.strMeal;
    mealsEntity.strMealThumb = data.strMealThumb;
    mealsEntity.idMeal = data.idMeal;
    mealsEntity.strInstructions = data.strInstructions;
    this.preparaciones.push(mealsEntity);
  }
}


class MealsEntityImpl implements MealsEntity {
  strSource: string = "";
  strImageSource?: null | undefined;
  strCreativeCommonsConfirmed?: null | undefined;
  dateModified?: null | undefined;
  idMeal: string = "";
  strMeal: string = "";
  strDrinkAlternate: null = null;
  strCategory: string = "";
  strArea: string = "";
  strInstructions: string = "";
  strMealThumb: string = "";
  strTags: string = "";
  strYoutube: string = "";
  strIngredient1: string = "";
  strIngredient2: string = "";
  strIngredient3: string = "";
  strIngredient4: string = "";
  strIngredient5: string = "";
  strIngredient6: string = "";
  strIngredient7: string = "";
  strIngredient8: string = "";
  strIngredient9: string = "";
  strIngredient10: string = "";
  strIngredient11: string = "";
  strIngredient12: string = "";
  strIngredient13: string = "";
  strIngredient14: string = "";
  strIngredient15: string = "";
  strIngredient16: string = "";
  strIngredient17: string = "";
  strIngredient18: string = "";
  strIngredient19: string = "";
  strIngredient20: string = "";
  strMeasure1: string = "";
  strMeasure2: string = "";
  strMeasure3: string = "";
  strMeasure4: string = "";
  strMeasure5: string = "";
  strMeasure6: string = "";
  strMeasure7: string = "";
  strMeasure8: string = "";
  strMeasure9: string = "";
  strMeasure10: string = "";
  strMeasure11: string = "";
  strMeasure12: string = "";
  strMeasure13: string = "";
  strMeasure14: string = "";
  strMeasure15: string = "";
  strMeasure16: string = "";
  strMeasure17: string = "";
  strMeasure18: string = "";
  strMeasure19: string = "";
  strMeasure20: string = "";
}
