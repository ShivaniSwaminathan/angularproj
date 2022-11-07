import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatStepperModule} from '@angular/material/stepper';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import{MatPaginatorModule} from '@angular/material/paginator';
import{MatButtonModule} from '@angular/material/button';
import{MatFormFieldModule} from '@angular/material/form-field';
import{MatDialogModule} from '@angular/material/dialog';
import{MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatCardModule,
    MatStepperModule,
    MatIconModule,
    MatToolbarModule,
    MatPaginatorModule,
    MatButtonModule,
    MatFormFieldModule,
    MatDialogModule,
    MatInputModule,
    FormsModule,
    
  ],
  exports:[MatCardModule,
    MatStepperModule,
    MatIconModule,
    MatToolbarModule,
    MatPaginatorModule,
    MatButtonModule,
    MatFormFieldModule,
    MatDialogModule,
    MatInputModule,
    FormsModule,
    
  ]
})
export class MaterialDesignModule { }
