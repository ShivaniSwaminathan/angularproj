import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewComponent } from './view/view.component';
import { LoginComponent } from './login/login.component';
import { SearchComponent } from './search/search.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import { HomepageComponent } from './homepage/homepage.component';
import { FormsModule } from '@angular/forms';
import {MatStepperModule} from '@angular/material/stepper';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import{MatPaginatorModule} from '@angular/material/paginator';
import{MatButtonModule} from '@angular/material/button';
import{MatFormFieldModule} from '@angular/material/form-field';
import{MatDialogModule} from '@angular/material/dialog';
import{MatInputModule} from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    ViewComponent,
    LoginComponent,
    SearchComponent,
    HomepageComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    FormsModule,
    MatStepperModule,
    MatIconModule,
    MatToolbarModule,
    MatPaginatorModule,
    MatButtonModule,
    MatFormFieldModule,
    MatDialogModule,
    MatInputModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
