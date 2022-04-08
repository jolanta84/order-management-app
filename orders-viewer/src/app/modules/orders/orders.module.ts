import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersComponent } from './orders.component';
import { MaterialModule } from '../../shared/material.module';
import { OrdersRoutingModule } from './orders-routing.module';

@NgModule({
  declarations: [OrdersComponent],
  imports: [CommonModule, MaterialModule, OrdersRoutingModule],
})
export class OrdersModule {}
