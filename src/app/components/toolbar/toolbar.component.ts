import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { AboutMeComponent } from '../about-me/about-me.component'
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  constructor(private location: Location, public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  goBack(): void {
    this.location.back();
  }

  openAboutMe(): void {
    this.dialog.open(AboutMeComponent);
  }
}
