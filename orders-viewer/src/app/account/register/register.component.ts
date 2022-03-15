import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { AccountService } from 'src/app/_services/account.service';
import { SnackBarService } from 'src/app/_services/snack-bar.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  registerForm: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    password: new FormControl(''),
  });

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private accountService: AccountService,
    private snackBarService: SnackBarService
  ) {}

  register() {
    this.accountService
      .register(this.registerForm.value)
      .pipe(first())
      .subscribe({
        next: () => {
          this.router.navigate(['../login'], { relativeTo: this.route });
        },
        error: (error) => {
          console.log(error);
          this.snackBarService.openSnackBar(error);
        },
      });
  }
}
