import {Component} from '@angular/core';
import {MatDialog} from '@angular/material';
import {SpyingDialogComponent} from '../spying-dialog';

@Component({
  selector: 'app-spying',
  templateUrl: './spying.component.html',
  styleUrls: ['./spying.component.scss']
})
export class SpyingComponent {
  constructor(private matDialog: MatDialog) {

  }

  openDialog() {
    this.matDialog.open(SpyingDialogComponent);
  }
}
