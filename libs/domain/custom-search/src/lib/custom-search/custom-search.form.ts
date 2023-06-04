import { AbValidators } from '@ab/form';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { CourseForm } from '../course/course.form';
import { Resource } from '../models/resource';

@Component({
  selector: 'ab-custom-search',
  templateUrl: './custom-search.form.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomSearchForm implements OnInit {
  @Output() send = new EventEmitter<Resource>();
  @ViewChild(CourseForm, { static: true }) courseSubForm!: CourseForm;
  form!: FormGroup;
  searchOptions: string[] = ['Option 1', 'Option 2', 'Option 3'];
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group(
      {
        name: new FormControl('', [
          Validators.required,
          Validators.minLength(2),
        ]),
        language: new FormControl('', [
          Validators.minLength(2),
        ]),
        course: this.courseSubForm.buildForm(),
        nResults: new FormControl(10, []),
        confirmResults: new FormControl(10, []),
      },
      {
        validators: [AbValidators.confirmed('nResults', 'confirmResults')],
        updateOn: 'blur',
      }
    );
  }
  onSubmit() {
    const newResource = { ...this.form.value };
    this.send.next(newResource);
  }
  hasErrorToShow(formControlName: string) {
    const control = this.form.controls[formControlName];
    return control.touched && control.invalid;
  }
  getErrorMessage(formControlName: string) {
    const control = this.form.controls[formControlName];
    return JSON.stringify(control.errors);
  }
}