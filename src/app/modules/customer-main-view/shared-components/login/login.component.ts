import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  form!: FormGroup;
    loading = false;
    submitted = false;

    constructor(
      private formBuilder: FormBuilder,
      private route: ActivatedRoute,
      private router: Router,
  ) { }

  ngOnInit() {
      this.form = this.formBuilder.group({
          firstName: ['', Validators.required],
          lastName: ['', Validators.required],
          username: ['', Validators.required],
          password: ['', [Validators.required, Validators.minLength(6)]]
      });
  }

  // convenience getter for easy access to form fields
  get f() { return this.form.controls; }

  onSubmit() {
      this.submitted = true;

      // reset alerts on submit
      // this.alertService.clear();

      // stop here if form is invalid
      if (this.form.invalid) {
          return;
      }

      // this.loading = true;
      //         next: () => {
      //             this.alertService.success('Registration successful', { keepAfterRouteChange: true });
      //             this.router.navigate(['../login'], { relativeTo: this.route });
      //         },
      //         error: (error: any) => {
      //             this.alertService.error(error);
      //             this.loading = false;
      //         }
      //     });
  }
}
