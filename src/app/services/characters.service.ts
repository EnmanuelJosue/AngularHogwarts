import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product.model';
@Injectable({
  providedIn: 'root',
})
export class CharactersService {
  constructor(private http: HttpClient) {}

  getAllCharactersRavenclaw() {
    return this.http.get<Product[]>(
      'https://hp-api.herokuapp.com/api/characters/house/ravenclaw'
    );
  }
  getAllCharactersSlytherin() {
    return this.http.get<Product[]>(
      'https://hp-api.herokuapp.com/api/characters/house/slytherin'
    );
  }
  getAllCharactersGryffindor() {
    return this.http.get<Product[]>(
      'https://hp-api.herokuapp.com/api/characters/house/gryffindor'
    );
  }
  getAllCharactersHufflepuff() {
    return this.http.get<Product[]>(
      'https://hp-api.herokuapp.com/api/characters/house/hufflepuff'
    );
  }
}
