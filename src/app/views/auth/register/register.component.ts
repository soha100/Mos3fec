import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../shared/services/auth.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule, CommonModule, RouterModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  signupForm: FormGroup;
  successMessage = '';
  errorMessage = '';
  isLoading = false;
  error: string | null = null;
  showPassword = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.signupForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      isDoctor: [null, Validators.required],
      // acceptTerms: [false, Validators.requiredTrue],
    });
  }

  onSubmit() {
    if (this.signupForm.valid) {
      this.isLoading = true;
      this.error = null;
      console.log(this.signupForm.value);
      this.authService.signup(this.signupForm.value).subscribe({
        next: () => {
          this.successMessage =
            'Registration successful! Please check your email for verification.';
          this.errorMessage = '';
          this.isLoading = false;
          // console.log(response);
          if (this.signupForm.get('isDoctor')?.value) {
            this.router.navigate(['/auth/auth/confirm-email']);

            // this.router.navigate(['/auth/auth/complete']);
          } else {
            // توجيه المريض إلى الصفحة الرئيسية
            // this.router.navigate(['/auth/auth/login']);
            this.router.navigate(['/auth/auth/confirm-email']);
            //   queryParams: { email: this.signupForm.value.email },
            // });
          }
          localStorage.setItem('isDoctor', this.signupForm.value.isDoctor);
        },
        error: (error) => {
          console.log(error.errors);
          this.isLoading = false;
        },
      });
    }
  }

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  setUserType(isDoctor: boolean) {
    this.signupForm.patchValue({ isDoctor });
  }
}
