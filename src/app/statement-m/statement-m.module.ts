import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { StatementMRoutingModule } from './statement-m-routing.module';
import { StatementHomeComponent } from './statement-home/statement-home.component';
import { StatementDetailComponent } from './statement-detail/statement-detail.component';
import { CardDetailComponent } from './card-detail/card-detail.component';


// PrimeNG 
import { StepsModule } from 'primeng/steps';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { InputMaskModule } from 'primeng/inputmask';
import { DropdownModule } from 'primeng/dropdown';


@NgModule({
  declarations: [
    StatementHomeComponent,
    StatementDetailComponent,
    CardDetailComponent
  ],
  imports: [
    CommonModule,
    StatementMRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    StepsModule,
    CardModule,
    ButtonModule,
    InputTextModule,
    InputMaskModule,
    CheckboxModule,
    DropdownModule
  ]
})
export class StatementMModule { }
