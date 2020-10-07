import { Component, OnInit } from '@angular/core';
import { ProdService } from '../prod.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-prod-add',
  templateUrl: './prod-add.component.html',
  styleUrls: ['./prod-add.component.css']
})
export class ProdAddComponent implements OnInit {
  prodOrigin = JSON.parse(localStorage.getItem('product'));
  prod = JSON.parse(localStorage.getItem('product'));
  
  constructor(private prodService: ProdService, private router: Router, private formBuilder: FormBuilder) { }

  addForm: FormGroup;
  submitted = false;

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      _id: [],
      username: ['', Validators.required],
      email: ['', Validators.required],
      type: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    this.submitted = true;

    if(this.addForm.valid) {
      this.prodService.productInsert(this.addForm.value).subscribe(data => {
        console.log(data);
        this.router.navigate(['']);
      });
    }
  }

  // Get the form short name to access the form fields
  get f() { return this.addForm.controls; }

  // insertfunc() {
  //   this.prodService.productUpdate(this.prodOrigin, this.prod).subscribe(data => {
  //     console.log(data);
  //     this.router.navigate(['']);
  //   });
  // }
}
