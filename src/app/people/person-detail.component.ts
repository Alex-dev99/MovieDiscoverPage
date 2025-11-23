import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { PeopleService } from '../services/people.service';

@Component({
  selector: 'app-person-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.css']
})
export class PersonDetailComponent implements OnInit {
  person: any = null;
  loading = false;
  error = '';

  constructor(private route: ActivatedRoute, private peopleService: PeopleService) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.loadDetail(id);
    }
  }

  loadDetail(id: number) {
    this.loading = true;
    this.peopleService.getPersonDetail(id).subscribe({
      next: (res) => {
        this.person = res;
        this.loading = false;
      },
      error: (err) => {
        console.error(err);
        this.error = 'Error al cargar detalle del actor';
        this.loading = false;
      }
    });
  }
}
