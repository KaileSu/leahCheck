import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { ProdModel } from './ProdModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdService {
  url = 'http://localhost:3000/';
  constructor(private http: HttpClient) { }
  // Insert a product
  productInsert(prod) {
    console.log(prod);
    return this.http.post(this.url + 'productInsert', prod);
  }
  // Find all products, and return a promise of all products
  productFind() {
    return this.http.get<ProdModel[]>(this.url + 'productFind');
  }
  // Update products with proQuery and set prodUpdate, returning a promise
  productUpdate(prodQuery, prodUpdate) {
    const queryUpdate = {query: prodQuery, update: prodUpdate};
    return this.http.post(this.url + 'productUpdate', queryUpdate);
  }
  // Delete a product
  productDelete(prod) {
    console.log(prod);
    return this.http.post(this.url + 'productDelete', prod);
  }
};
