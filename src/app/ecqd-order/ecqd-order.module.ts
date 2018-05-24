import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InputTextModule } from 'primeng/primeng';
import { ButtonModule } from 'primeng/primeng';
import { ConfirmDialogModule } from 'primeng/primeng';

import { EcqdOrderRoutingModule } from './ecqd-order-routing.module';
import { ListComponent } from './list/list.component';

@NgModule({
  imports: [
    CommonModule,
    EcqdOrderRoutingModule,
    InputTextModule,
    ButtonModule,
    ConfirmDialogModule
  ],
  declarations: [ListComponent]
})
export class EcqdOrderModule { }
