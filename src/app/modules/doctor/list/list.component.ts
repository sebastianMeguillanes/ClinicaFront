import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../doctor.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  currentPage: number = 1;
  itemsPerPage: number = 5;
  pages: number[] = [];
  totalPages: number = 0;
  doctores: any[] = [];

  constructor(private doctorService: DoctorService) {}

  ngOnInit() {
    this.getDoctor();
  }

  updatePages() {
    if (this.doctores.length > 0) {
      this.totalPages = Math.ceil(this.doctores.length / this.itemsPerPage);
      this.pages = Array.from({ length: this.totalPages }, (_, i) => i + 1);
    }
  }

  setCurrentPage(page: number) {
    this.currentPage = page;
  }

  getCurrentPageItems() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.doctores.slice(startIndex, endIndex);
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }

  getDoctor() {
    this.doctorService.getAllDoctores().subscribe((data: any) => {
      this.doctores = data.map((doctor: { fecha_nacimiento: string | number | Date; }) => {
        doctor.fecha_nacimiento = new Date(doctor.fecha_nacimiento).toLocaleDateString('en-GB');
        return doctor;
      });
      this.updatePages()
    });
  }
}
