import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { first } from 'rxjs/operators';
import { Order } from '../_models/order';
import { OrdersService } from '../_services/orders.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
})
export class OrdersComponent implements OnInit {
  public orders!: Order[];
  public displayedColumns: string[] = [
    'name',
    'status',
    'createdAt',
    'boxesCount',
  ];
  public dataSource = new MatTableDataSource<Order>();
  public statuses = ['Open', 'Closed', 'In transit'];
  public form = new FormGroup({
    status: new FormControl(),
  });

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(private ordersService: OrdersService) {}

  public ngOnInit() {
    this.dataSource.paginator = this.paginator;

    this.ordersService
      .getAll()
      .pipe(first())
      .subscribe(
        (orders) => (
          (this.orders = orders), (this.dataSource.data = orders as Order[])
        )
      );
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
