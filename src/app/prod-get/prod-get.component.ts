import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProdModel } from '../ProdModel';
import { ProdService } from '../prod.service';

@Component({
  selector: 'app-prod-get',
  templateUrl: './prod-get.component.html',
  styleUrls: ['./prod-get.component.css']
})
export class ProdGetComponent implements OnInit {
  prods: ProdModel[];
  constructor(private prodService: ProdService, private router: Router) { }

  ngOnInit() {
    this.getProducts();
  }
  // Find all products
  getProducts(): void {
    this.prodService.productFind().subscribe(data => {
      this.prods = data;
    });
  }
  // Delete the selected products
  deleteProduct(product: ProdModel) {
    this.prodService.productDelete({_id: product._id});
  }
  // Update the selected product, not considering property _id
  // Product Information is saved as localStorage to be used in the navigated page
  updateProduct(product: ProdModel) {
    localStorage.removeItem('product');
    delete product._id;
    localStorage.setItem('product', JSON.stringify(product));
    this.router.navigate(['prod-edit']);
  }
}
