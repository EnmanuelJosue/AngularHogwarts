import { Component, OnInit } from '@angular/core';
import { TeachersService } from 'src/app/services/teachers.service';
import { Product } from 'src/app/models/product.model';
@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.scss'],
})
export class TeachersComponent implements OnInit {
  constructor(private teachersService: TeachersService) {}
  mostrar = false;
  products: Product[] = [
    {
      name: '',
      patronus: '',
      dateOfBirth: '',
      image: '',
    },
  ];
  teachers() {
    this.teachersService.getAllTeachers().subscribe((data) => {
      this.products = data;
    });
    this.mostrar = true;
  }
  ngOnInit(): void {}
}
