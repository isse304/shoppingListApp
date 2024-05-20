import { EventEmitter, Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
@Injectable()
export class RecipesService {

    recipeSelected = new EventEmitter<Recipe>();
    private recipes: Recipe[] = [
        new Recipe('Malawax', "Feast Your Eyes", "https://hips.hearstapps.com/hmg-prod/images/crepes-index-64347419e3c7a.jpg", [new Ingredient("flour", 1),
        new Ingredient("eggs", 2), new Ingredient("sugar", 3)
        ])
        , new Recipe('Canjero', "Are you Hungry? I know I am", "https://hips.hearstapps.com/hmg-prod/images/crepes-index-64347419e3c7a.jpg", [new Ingredient("flour", 1),
        new Ingredient("eggs", 3), new Ingredient("sugar", 2), new Ingredient("yeast", 1)
        ])];


    constructor(private shoppingListService: ShoppingListService) { }
    getRecipes() {
        return this.recipes.slice();
    }
    addIngToShoppingList(ingredients: Ingredient[]) {
        this.shoppingListService.addIngredients(ingredients);
    }

    getRecipe(index: number){
        return this.recipes[index];
    }
} 