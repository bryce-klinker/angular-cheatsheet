import {Component} from '@angular/core';
import {MatDialogRef} from '@angular/material';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-recipes-dialog',
  templateUrl: './add-recipe-dialog.component.html',
  styleUrls: ['./add-recipe-dialog.component.scss']
})
export class AddRecipeDialogComponent {
  form = this.formBuilder.group({
    name: ['']
  });

  constructor(private formBuilder: FormBuilder,
              private matDialogRef: MatDialogRef<AddRecipeDialogComponent>) {
  }

  submit() {
    this.matDialogRef.close(this.form.getRawValue());
  }
}
