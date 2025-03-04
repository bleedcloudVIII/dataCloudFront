import {Component, Input} from '@angular/core';
import {MatTab} from '@angular/material/tabs';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-files-list',
  imports: [
    NgForOf
  ],
  templateUrl: './files-list.component.html',
  styleUrl: './files-list.component.scss'
})
export class FilesListComponent {
  @Input() files!: string[];

  constructor() {
  }

  onAddClick() {
    console.log('adas');
  }

  onFileClick(name: string) {
    // TODO NE RABOTAET
  }

}
