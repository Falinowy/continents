import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AboutMeComponent>) { }

  ngOnInit(): void {
  }

  closeAboutMe(): void {
    this.dialogRef.close();
  }
}
