import { Component, Inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

import { InputType } from '../../../shared/enums/input-type';

type FieldKey<T> = Extract<keyof T, string>;

export interface FormField<T extends Record<string, unknown> = Record<string, unknown>> {
  key: FieldKey<T>;
  label: string;
  type?: InputType;
  required?: boolean;
}

export interface FormDialogData<T extends Record<string, unknown> = Record<string, unknown>> {
  title: string;
  fields: FormField<T>[];
  submitLabel: string;
}

@Component({
  selector: 'app-form-dialog',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatDialogModule, MatButtonModule],
  templateUrl: './form-dialog.component.html',
  styleUrls: ['./form-dialog.component.scss']
})
export class FormDialogComponent implements OnInit {
  public form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<FormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: FormDialogData
  ) {}

  ngOnInit(): void {
    const group: any = {};
    this.data.fields.forEach(field => {
      group[field.key] = ['', field.required ? [Validators.required] : []];
    });
    this.form = this.fb.group(group);
  }

  submit(): void {
    if (this.form.valid) {
      this.dialogRef.close(this.form.value);
    }
  }
}
