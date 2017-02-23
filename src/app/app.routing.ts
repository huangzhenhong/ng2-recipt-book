import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';

const APP_ROUTES: Routes =[
    { path: '', component: HomeComponent},
    { path: 'recipes', loadChildren:'./recipes/recipe.module#RecipeModule' },
    { path: 'shopping-list', loadChildren:'./shopping-list/shopping-list.module#ShoppingListModule' }
];

export const routing = RouterModule.forRoot(APP_ROUTES); 