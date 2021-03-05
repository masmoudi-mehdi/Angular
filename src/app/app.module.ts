import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { SecondAssignmentComponent } from './second-assignment/second-assignment.component';
import { ThirdAssignmentComponent } from './third-assignment/third-assignment.component';
import { RecipeProjectComponent } from './recipe-project/recipe-project.component';
import { HeaderComponent } from './recipe-project/header/header.component';
import { RecipesComponent } from './recipe-project/recipes/recipes.component';
import { RecipeListComponent } from './recipe-project/recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipe-project/recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipe-project/recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './recipe-project/shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './recipe-project/shopping-list/shopping-edit/shopping-edit.component';
import { BindingAppComponent } from './databinding-start/binding-app/binding-app.component';
import { CockpitComponent } from './databinding-start/cockpit/cockpit.component';
import { ServerElementComponent } from './databinding-start/server-element/server-element.component';
import { ForthAssignmentComponent } from './fourthAssignment/forth-assignment/forth-assignment.component';
import { EvenComponent } from './fourthAssignment/even/even.component';
import { GameControlComponent } from './fourthAssignment/game-control/game-control.component';
import { OddComponent } from './fourthAssignment/odd/odd.component';
import { FirstExerciseComponent } from './chap7/first-exercise/first-exercise.component';
import { BasicHighlightDirective } from './chap7/first-exercise/basic-highlight/basic-highlight.directive';
import { BetterHighlightDirective } from './chap7/first-exercise/better-highlight/better-highlight.directive';
import { UnlessDirective } from './chap7/unless.directive';
import { DropdownDirective } from './recipe-project/shared/dropdown.directive';
import { Cahp8AppComponent } from './chap8/cahp8-app/cahp8-app.component';
import { AccountComponent } from './chap8/account/account/account.component';
import { NewAccountComponent } from './chap8/new-account/new-account/new-account.component';
import { loggingServices } from './chap8/logging.service';
import { AccountsService } from './chap8/accounts.service';




@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    WarningAlertComponent,
    SuccessAlertComponent,
    SecondAssignmentComponent,
    ThirdAssignmentComponent,
    RecipeProjectComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    BindingAppComponent,
    CockpitComponent,
    ServerElementComponent,
    ForthAssignmentComponent,
    EvenComponent,
    GameControlComponent,
    OddComponent,
    FirstExerciseComponent,
    BasicHighlightDirective,
    BetterHighlightDirective,
    UnlessDirective,
    DropdownDirective,
    Cahp8AppComponent,
    AccountComponent,
    NewAccountComponent,

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [AccountsService,loggingServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
