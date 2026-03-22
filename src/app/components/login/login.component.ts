import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { TitleService } from '../../service/title.service';
import { FormKey } from '../../shared/enums/form-key';
import { InputType } from '../../shared/enums/input-type';
import { AppRoute } from '../../shared/enums/app-route';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatButtonModule, MatIconModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  private readonly fb = inject(FormBuilder);
  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);
  private readonly titleService = inject(TitleService);

  public errorMessage = '';
  public showPassword = false;
  public readonly FormKey = FormKey;
  public readonly InputType = InputType;
  public readonly AppRoute = AppRoute;

  public loginForm = this.fb.group({
    [FormKey.Username]: ['', [Validators.required]],
    [FormKey.Password]: ['', [Validators.required]]
  });

  constructor() {
    this.titleService.setTitle('Login');
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const controls = this.loginForm.value;
      const success = this.authService.login(
        controls[FormKey.Username]!, 
        controls[FormKey.Password]!
      );
      
      if (success) {
        this.router.navigate([AppRoute.Continents]);
      } else {
        this.errorMessage = 'Invalid username or password (hint: admin/admin)';
      }
    }
  }

  handleLogoClick(): void {
    this.router.navigate([AppRoute.Continents]);
  }

  togglePassword(): void {
    this.showPassword = !this.showPassword;
  }
}
