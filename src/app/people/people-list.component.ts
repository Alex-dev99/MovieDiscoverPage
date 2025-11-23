import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeopleService, Person } from '../services/people.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-people-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent implements OnInit {
  people: Person[] = [];
  loading = false;
  error = '';

  constructor(private peopleService: PeopleService) {}

  ngOnInit(): void {
    this.loadPeople();
  }

  loadPeople(): void {
    this.loading = true;
    this.peopleService.getPopularPeople().subscribe({
      next: (res) => {
        this.people = res.results;
        this.loading = false;
      },
      error: (err) => {
        console.error(err);
        this.error = 'Error al cargar actores';
        this.loading = false;
      }
    });
  }
}
