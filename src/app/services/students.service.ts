import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class StudentsService {
  constructor(private http: HttpClient) {}
  getAllStudents() {
    return this.http.get<Product[]>(
      'http://hp-api.herokuapp.com/api/characters/students'
    );
  }
}
