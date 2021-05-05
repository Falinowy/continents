import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent {

  constructor(public dialogRef: MatDialogRef<AboutMeComponent>) { }

  closeAboutMe(): void {
    this.dialogRef.close();
  }
}
