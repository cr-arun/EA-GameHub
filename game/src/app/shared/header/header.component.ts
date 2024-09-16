import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { PostDialogComponent } from '../post-dialog/post-dialog.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  constructor(private dialog: MatDialog, private router: Router) {}

  openFormDialog() {
    const dialogRef = this.dialog.open(PostDialogComponent, {
      width: '400px', // Adjust the width as needed
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed', result);
    });
  }
  navigateTo(route: string) {
    console.log('click' + route);
    this.router.navigate([route]);
  }
}