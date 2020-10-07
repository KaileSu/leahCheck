import { Component, OnInit } from '@angular/core';
import { ProdService } from '../prod.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prod-edit',
  templateUrl: './prod-edit.component.html',
  styleUrls: ['./prod-edit.component.css']
})
export class ProdEditComponent implements OnInit {
  prodOrigin = JSON.parse(localStorage.getItem('product'));
  prod = JSON.parse(localStorage.getItem('product'));
  constructor(private prodService: ProdService, private router: Router) { }

  ngOnInit() { }

  editfunc() {
    this.prodService.productUpdate(this.prodOrigin, this.prod).subscribe(data => {
      console.log(data);
      this.router.navigate(['']);
    });
  }
}
