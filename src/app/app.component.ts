import { Component } from '@angular/core';
import {MatTab, MatTabGroup} from '@angular/material/tabs';
import {NgForOf} from '@angular/common';
import {FilesListComponent} from './files-list/files-list.component';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {AuthComponent} from './auth/auth.component';

@Component({
  selector: 'app-root',
  imports: [
    MatTabGroup,
    MatTab,
    NgForOf,
    FilesListComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  tabs = ['Общее пространство', 'Пространство1', 'Моё', 'Лето2020', 'Анапа'];
  files = [['asd.txt', 'dadte.txt', 'file1.txt', 'file2.txt', 'asd.txt', 'd222222222222222222adte.txt', 'file1.txt', 'file2.txt', 'asd.txt', 'dadte.txt', 'file1.txt', 'file2.txt'], ['file1.txt', 'file2.txt'],];

  constructor(private dialog: MatDialog) {
  }

  onAccountClick() {
    const dialogRef = this.dialog.open(AuthComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // do something
      }
    });
  }
}
