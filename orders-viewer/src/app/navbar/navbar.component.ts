import { Component } from '@angular/core';
import { User } from '../_models/user';
import { AccountService } from '../_services/account.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  user: User;

  constructor(private accountService: AccountService) {
      this.accountService.user.subscribe(x => this.user = x);
  }


  logout() {
    this.accountService.logout();
}
}
