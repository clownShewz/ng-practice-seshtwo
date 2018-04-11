import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';
import { validateConfig } from '@angular/router/src/config';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  cities: string[] = ['Baltimore', 'Olney', 'Rockville', 'Columbia'];
  form: FormGroup;
  // firstName = new FormControl('', Validators.required);

  constructor(private fb: FormBuilder) {

  }

  createForm() {
    this.form = this.fb.group({
      'firstName': ['', Validators.required],
      'lastName': ['', Validators.required], // array notaion - no need for the separate declaration
      'street': ['', Validators.required],
      'city': ['']
    });
  }

 onSubmit() {
   console.log('form submitted')
   console.log(this.form);
   alert(JSON.stringify(this.form));
 }

  ngOnInit() {

  }

}
