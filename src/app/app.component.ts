import { Component } from '@angular/core';
import {MatTab, MatTabGroup} from '@angular/material/tabs';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [
    MatTabGroup,
    MatTab,
    NgForOf
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  tabs = ['location', 'location1', 'location2', 'location', 'location1', 'location2'];

}
