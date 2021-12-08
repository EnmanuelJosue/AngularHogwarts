import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class TeachersService {
  constructor(private http: HttpClient) {}
  getAllTeachers() {
    return this.http.get<Product[]>(
      'http://hp-api.herokuapp.com/api/characters/staff'
    );
  }
}
