import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../../shared/services/auth.service';
import { CommonModule } from '@angular/common';
import { log } from 'console';

@Component({
  selector: 'app-confirm-email',
  imports: [CommonModule],
  templateUrl: './confirm-email.component.html',
  styleUrl: './confirm-email.component.scss',
})
export class ConfirmEmailComponent implements OnInit {
  userId: string | null = null;
  code: string | null = null;
  message: string = '';
  isLoading = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.userId = this.route.snapshot.queryParamMap.get('userId');
    // this.code = this.route.snapshot.queryParamMap.get('code');
    this.code =
      this.route.snapshot.queryParamMap.get('code') ||
      this.route.snapshot.queryParamMap.get('Code');

    console.log(this.userId, this.code);

    if (this.userId && this.code) {
      this.authService.confirmEmail(this.userId, this.code).subscribe({
        next: () => {
          this.message = 'تم تأكيد حسابك بنجاح! سيتم توجيهك الآن...';
          this.isLoading = false;

          setTimeout(() => {
            const isDoctor = localStorage.getItem('isDoctor') === 'true';

            if (isDoctor) {
              this.router.navigate(['/auth/auth/complete']);
            } else {
              this.router.navigate(['/auth/auth/login']);
            }

            // ممكن تمسحيه بعد التوجيه لو مش هتحتاجيه تاني
            localStorage.removeItem('isDoctor');
          }, 3000);
        },
        error: (error) => {
          this.message = 'حدث خطأ أثناء تأكيد الحساب. تأكد من صحة الرابط.';
          console.error(error);
          this.isLoading = false;
        },
      });
    } else {
      this.message = 'رابط التأكيد غير صالح.';
    }
  }
}
