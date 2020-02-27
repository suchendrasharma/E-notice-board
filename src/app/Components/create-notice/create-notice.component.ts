import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {AdminService} from '../../services/admin.service';
import {MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-create-notice',
  providers: [AdminService],
  templateUrl: './create-notice.component.html',
  styleUrls: ['./create-notice.component.css']
})
export class CreateNoticeComponent implements OnInit {

  controls = {
    type: new FormControl(null, [Validators.required]),
    question: new FormControl(null, [Validators.required]),
    options: this.builder.array([
      this.createOption(),
      this.createOption(),
      this.createOption(),
      this.createOption(),
    ])
  };
  form = this.builder.group(this.controls);

  constructor(private adminService: AdminService,
    private builder: FormBuilder,
    private dialogRef: MatDialogRef<CreateNoticeComponent>) { }

  ngOnInit() {
  }

  createOption(): FormGroup {
    return this.builder.group({
      title: new FormControl(null, [Validators.required]),
      is_correct: new FormControl(false, [Validators.required])
    });
  }

  get formData() { return this.form.get('options') as FormArray; }
  createQuestion() {
    if (this.form.invalid) {
      return;
    }
    const data = this.form.value;

    this.adminService.createQuestion(data)
      .subscribe(res => {
        this.dialogRef.close();
        // this.router.(['/candidate']);
      });
    }

}
