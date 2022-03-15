import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { Order } from '../_models/order';

const ELEMENT_DATA: Order[] = [
  {
    id: 1,
    name: 'Zamówienie 1/21',
    status: 'Closed',
    createdAt: '10/01/2021',
    boxesCount: 4,
  },
  {
    id: 2,
    name: 'Zamówienie 2/21',
    status: 'Closed',
    createdAt: '15/01/2021',
    boxesCount: 2,
  },
  {
    id: 3,
    name: 'Zamówienie 3/21',
    status: 'Closed',
    createdAt: '10/02/2021',
    boxesCount: 1,
  },
  {
    id: 4,
    name: 'Zamówienie 4/21',
    status: 'Closed',
    createdAt: '02/03/2021',
    boxesCount: 2,
  },
  {
    id: 5,
    name: 'Zamówienie 5/21',
    status: 'Closed',
    createdAt: '21/04/2021',
    boxesCount: 1,
  },
  {
    id: 6,
    name: 'Zamówienie 6/21',
    status: 'Closed',
    createdAt: '20/05/2021',
    boxesCount: 1,
  },
  {
    id: 7,
    name: 'Zamówienie 7/21',
    status: 'Closed',
    createdAt: '02/08/2021',
    boxesCount: 3,
  },
  {
    id: 8,
    name: 'Zamówienie 8/21',
    status: 'Closed',
    createdAt: '30/09/2021',
    boxesCount: 1,
  },
  {
    id: 9,
    name: 'Zamówienie 9/21',
    status: 'In transit',
    createdAt: '02/09/2021',
    boxesCount: 2,
  },
  {
    id: 10,
    name: 'Zamówienie 10/21',
    status: 'In transit',
    createdAt: '10/11/2021',
    boxesCount: 1,
  },
  {
    id: 11,
    name: 'Zamówienie 1/22',
    status: 'In transit',
    createdAt: '10/01/2022',
    boxesCount: 4,
  },
  {
    id: 12,
    name: 'Zamówienie 2/22',
    status: 'In transit',
    createdAt: '11/01/2022',
    boxesCount: 1,
  },
  {
    id: 13,
    name: 'Zamówienie 3/22',
    status: 'In transit',
    createdAt: '11/01/2022',
    boxesCount: 3,
  },
  {
    id: 14,
    name: 'Zamówienie 4/22',
    status: 'Open',
    createdAt: '12/02/2022',
    boxesCount: 5,
  },
  {
    id: 15,
    name: 'Zamówienie 5/22',
    status: 'Open',
    createdAt: '14/02/2021',
    boxesCount: 1,
  },
  {
    id: 16,
    name: 'Zamówienie 6/22',
    status: 'Open',
    createdAt: '15/02.20222',
    boxesCount: 2,
  },
  {
    id: 17,
    name: 'Zamówienie 7/22',
    status: 'Open',
    createdAt: '15/02.20222',
    boxesCount: 2,
  },
];

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
})
export class OrdersComponent implements OnInit {
  displayedColumns: string[] = ['name', 'status', 'createdAt', 'boxesCount'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  statuses = ['Open', 'Closed', 'In transit'];
  form = new FormGroup({
    status: new FormControl(),
  });

  isChecked(field: string, value: string) {
    const control = this.form.get(field);
    return control && control.value && control.value.indexOf(value) >= 0;
  }
  change(list: any[], field: string, value: string, isChecked: boolean) {
    const control = this.form.get(field);
    const oldValue = control ? control.value || [] : [];
    if (control) {
      if (!isChecked) {
        const newValue = oldValue.filter((x: string) => x != value);
        control.setValue(newValue.length > 0 ? newValue : null);
      } else {
        const newValue = list.filter(
          (x) => oldValue.indexOf(x) >= 0 || x == value
        );
        control.setValue(newValue);
      }
    }
  }

  ngOnInit() {
    this.dataSource.filterPredicate = (
      data: Order,
      filter: string
    ): boolean => {
      const obj = JSON.parse(filter);
      let find: boolean = obj.status;

      return obj.status
        ? (find = find && obj.status.indexOf(data.status) >= 0)
        : true;
    };

    this.form.valueChanges.subscribe((res) => {
      this.dataSource.filter = JSON.stringify(res);
    });
  }
}
