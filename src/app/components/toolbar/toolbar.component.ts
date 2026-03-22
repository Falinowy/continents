import { Component, inject } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { AboutMeComponent } from '../about-me/about-me.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../service/auth.service';
import { TitleService } from '../../service/title.service';
import { ModalService } from '../../service/modal.service';
import { MessageType } from '../../shared/enums/message-type';
import { AppRoute } from '../../shared/enums/app-route';

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [CommonModule, MatToolbarModule, MatButtonModule, MatIconModule, MatDialogModule],
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
  host: {
    'style': 'display: block; width: 100%;'
  }
})
export class ToolbarComponent {
  private readonly location = inject(Location);
  private readonly router = inject(Router);
  public readonly dialog = inject(MatDialog);
  private readonly modalService = inject(ModalService);
  private readonly titleService = inject(TitleService);
  public readonly authService = inject(AuthService);

  public title = this.titleService.title;

  goBack(): void {
    this.location.back();
  }

  goHome(): void {
    this.router.navigate([AppRoute.Continents]);
  }

  openAboutMe(): void {
    this.dialog.open(AboutMeComponent, {
      panelClass: 'about-me-dialog'
    });
  }

  handleAuth(): void {
    if (this.authService.isLoggedIn()) {
      this.authService.logout();
      this.modalService.showMessage({
        title: 'Logged Out',
        message: 'You have been successfully logged out.',
        type: MessageType.Success,
        icon: 'logout'
      }).subscribe(() => {
        this.router.navigate([AppRoute.Continents]);
      });
    } else {
      this.router.navigate([AppRoute.Login]);
    }
  }
}
