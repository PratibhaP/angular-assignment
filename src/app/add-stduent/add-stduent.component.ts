import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { RestService } from '../rest.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-add-stduent',
  templateUrl: './add-stduent.component.html',
  styleUrls: ['./add-stduent.component.scss']
})
export class AddStduentComponent implements OnInit {

  stduentForm!: FormGroup;
  titleAlert: string = 'This field is required';
  post: any = '';

  constructor(private formBuilder: FormBuilder,
    private restService : RestService,
    private router: Router) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.stduentForm = this.formBuilder.group({
      'score': ['', Validators.required],
      'name': ['', Validators.required],
      'address': ['', Validators.required],
      'age': ['', Validators.required],
      'details': ['', Validators.required]
    });
  }


  onSubmit(post:any) {
    if (this.stduentForm.valid) {
      this.restService.createStudent(this.stduentForm.value).subscribe(
        (response:any)=>
        {
          this.router.navigate(["students"]);    
        },
        (error:any) => console.error(error)
      )
    }
  }

}
