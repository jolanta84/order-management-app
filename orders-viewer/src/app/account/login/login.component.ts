import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { AccountService } from 'src/app/_services/account.service';
import { SnackBarService } from 'src/app/_services/snack-bar.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
 ;
  loginForm: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private accountService: AccountService,
    private snackBarService: SnackBarService
  ) {}

  ngOninit(){

  }
  get f() {
    return this.loginForm.controls;
  }

  onSubmit() {
  
    this.accountService
      .login(this.f.email.value, this.f.password.value)
      .pipe(first())
      .subscribe({
        next: () => {
          this.router.navigate(['../orders'], { relativeTo: this.route });
        },
        error: (error) => {
          console.log(error);
          this.snackBarService.openSnackBar(error);
        },
      });
  }
}
