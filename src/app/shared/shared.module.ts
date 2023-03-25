import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent, ToolbarComponent } from './components';

const COMPONENTS = [
  ToolbarComponent,
  ButtonComponent
];




@NgModule({
  declarations: [
    ...COMPONENTS
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ...COMPONENTS
  ]
})
export class SharedModule { }
