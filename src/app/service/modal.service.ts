import { inject, Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { FormDialogComponent, FormDialogData } from '../components/shared/form-dialog/form-dialog.component';
import { MessageDialogComponent, MessageDialogData } from '../components/shared/message-dialog/message-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private readonly dialog = inject(MatDialog);

  openForm<T extends Record<string, unknown>>(
    config: FormDialogData<T>,
    width: string = '450px'
  ): Observable<T | null> {
    const dialogRef = this.dialog.open(FormDialogComponent, {
      data: config,
      width
    });

    return dialogRef.afterClosed() as Observable<T | null>;
  }

  showMessage(config: MessageDialogData, width: string = '400px'): Observable<void> {
    const dialogRef = this.dialog.open(MessageDialogComponent, {
      data: config,
      width
    });

    return dialogRef.afterClosed();
  }
}
