import { Component, OnInit } from '@angular/core';
import { CharactersService } from 'src/app/services/characters.service';
import { Product } from 'src/app/models/product.model';
@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss'],
})
export class CharactersComponent implements OnInit {
  constructor(private characterService: CharactersService) {}
  mostrar = false;
  products: Product[] = [
    {
      name: '',
      patronus: '',
      dateOfBirth: '',
      image: '',
    },
  ];
  ngOnInit(): void {}
  ravenclaw() {
    this.characterService.getAllCharactersRavenclaw().subscribe((data) => {
      this.products = data;
    });
    this.mostrar = true;
  }
  gryffindor() {
    this.characterService.getAllCharactersGryffindor().subscribe((data) => {
      this.products = data;
    });
    this.mostrar = true;
  }
  hufflepuff() {
    this.characterService.getAllCharactersHufflepuff().subscribe((data) => {
      this.products = data;
    });
    this.mostrar = true;
  }
  slytherin() {
    this.characterService.getAllCharactersSlytherin().subscribe((data) => {
      this.products = data;
    });
    this.mostrar = true;
  }
}
