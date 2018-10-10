import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProcessOrderFormComponent } from './process-order-form/process-order-form.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ProcessOrderFormComponent],
  exports: [ProcessOrderFormComponent]
})
export class OrdersModule { }
