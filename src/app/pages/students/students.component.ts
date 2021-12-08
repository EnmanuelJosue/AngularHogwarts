import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { StudentsService } from 'src/app/services/students.service';
import { Product } from 'src/app/models/product.model';
@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss'],
})
export class StudentsComponent implements OnInit {
  newStudent: FormGroup;
  dataLocal: any;
  mostrar = false;
  products: Product[] = [
    {
      name: '',
      patronus: '',
      dateOfBirth: '',
      image: '',
    },
  ];
  constructor(
    private formBuilder: FormBuilder,
    private studentsService: StudentsService
  ) {
    this.newStudent = this.formBuilder.group({
      name: new FormControl(''),
      patronus: new FormControl(''),
      age: new FormControl(''),
    });
  }
  solicitud() {
    this.dataLocal = localStorage.getItem('FormData');
    this.mostrar = true;
  }
  sendStudent() {
    console.log(this.newStudent.value);
    localStorage.setItem('FormData', JSON.stringify(this.newStudent.value));
    this.solicitud();
  }
  listStudents() {
    this.studentsService.getAllStudents().subscribe((data) => {
      this.products = data;
    });
  }
  ngOnInit(): void {}
}
