import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { MessageType } from '../../../shared/enums/message-type';

export interface MessageDialogData {
  title: string;
  message: string;
  icon?: string;
  confirmLabel?: string;
  type?: MessageType;
}

@Component({
  selector: 'app-message-dialog',
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatButtonModule, MatIconModule],
  templateUrl: './message-dialog.component.html',
  styleUrls: ['./message-dialog.component.scss']
})
export class MessageDialogComponent {
  public readonly data: MessageDialogData = inject(MAT_DIALOG_DATA);
  public readonly dialogRef = inject(MatDialogRef<MessageDialogComponent>);

  close(): void {
    this.dialogRef.close();
  }
}
