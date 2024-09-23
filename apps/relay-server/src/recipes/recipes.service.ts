import { Injectable } from '@nestjs/common';
import { NewRecipeInput } from './dto/new-recipe.input';
import { RecipesArgs } from './dto/recipes.args';
import { Recipe } from './models/recipe.model';

const recipes: Recipe[] = [
  {id: crypto.randomUUID(), title: 'Borsh', creationDate: new Date(), ingredients: [], completed: false},
  {id: crypto.randomUUID(), title: 'Varenuku', creationDate: new Date(), ingredients: [], completed: false},
  {id: crypto.randomUUID(), title: 'Uzvar', creationDate: new Date(), ingredients: [], completed: false},
]

@Injectable()
export class RecipesService {
  /**
   * MOCK
   * Put some real business logic here
   * Left for demonstration purposes
   */

  async create(data: NewRecipeInput): Promise<Recipe> {
    const temp = {id: crypto.randomUUID(), title: data.title, creationDate: new Date(), ingredients: [], completed: false};
    recipes.push(temp);

    console.log('recipes');
    console.log(recipes);
    return temp;
  }

  async findOneById(id: string): Promise<Recipe> {
    return {} as any;
  }

  async findAll(recipesArgs: RecipesArgs): Promise<Recipe[]> {
    return recipes;
  }

  async remove(id: string): Promise<boolean> {
    return true;
  }
}
