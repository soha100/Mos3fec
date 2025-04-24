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
@Component({
  selector: 'app-doctor-profile-complete',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './doctor-profile-complete.component.html',
  styleUrl: './doctor-profile-complete.component.scss',
})
export class DoctorProfileCompleteComponent {
  completeForm: FormGroup;
  isLoading = false;
  error: string | null = null;
  showPassword = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.completeForm = this.fb.group({
      LicenseNumber: ['', [Validators.required]],
      AboutMe: ['', [Validators.required]],
    });
  }

  onSubmit() {
    if (this.completeForm.valid) {
      this.isLoading = true;
      this.error = null;

      this.authService.signup(this.completeForm.value).subscribe({
        next: (response) => {
          this.isLoading = false;
          console.log(response);
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
}
