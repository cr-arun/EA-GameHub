import { ViewEncapsulation } from '@angular/core';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-post-dialog',
  templateUrl: './post-dialog.component.html',
  styleUrls: ['./post-dialog.component.css'],
})
export class PostDialogComponent {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<PostDialogComponent>
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      description: ['', Validators.required],
      image: [null, Validators.required],
    });
  }

  submitForm(): void {
    // Handle form submission logic here
    console.log(this.form.value);
  }
  onCancelClick(): void {
    this.dialogRef.close();
  }
}