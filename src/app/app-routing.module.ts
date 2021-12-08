import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CharactersComponent } from './pages/characters/characters.component';
import { HomeComponent } from './pages/home/home.component';
import { StudentsComponent } from './pages/students/students.component';
import { TeachersComponent } from './pages/teachers/teachers.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: 'students',
        component: StudentsComponent,
      },
      {
        path: 'characters',
        component: CharactersComponent,
      },
      {
        path: 'teachers',
        component: TeachersComponent,
      },
    ],
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
