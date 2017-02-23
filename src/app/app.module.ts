import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { ReciptBookComponent } from './recipt-book.component';
import { HeaderComponent } from './header.component';
import { HomeComponent } from './home.component';

import { DropdownDirective } from './dropdown.directive';
import { RecipeService } from './recipes/recipe.service';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { routing } from './app.routing';

@NgModule({
  declarations: [
    ReciptBookComponent,
    HeaderComponent,  
    DropdownDirective,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    routing
  ],
  providers: [ShoppingListService, RecipeService],
  bootstrap: [ReciptBookComponent]
})
export class AppModule { }
