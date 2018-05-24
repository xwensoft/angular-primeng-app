import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InputTextModule } from 'primeng/primeng';
import { ButtonModule } from 'primeng/primeng';
import { ConfirmDialogModule } from 'primeng/primeng';
import { MenubarModule } from 'primeng/primeng';

import { WorkspaceRoutingModule } from './workspace-routing.module';
import { HomeComponent } from './home/home.component';
import { TestComponent } from './test/test.component';

@NgModule({
  imports: [
    CommonModule,
    InputTextModule,
    ButtonModule,
    ConfirmDialogModule,
    MenubarModule,
    WorkspaceRoutingModule
  ],
  declarations: [
    HomeComponent,
    TestComponent
  ]
})
export class WorkspaceModule { }
