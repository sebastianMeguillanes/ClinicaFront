import { Component, OnInit } from '@angular/core';
import { HistClinicaService } from '../histClinica.service';
import { ActivatedRoute } from '@angular/router';

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
  histClinicas: any[] = [];

  constructor(private histClinicaService: HistClinicaService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const pacienteId = this.route.snapshot.params['id'];
    this.histClinicaService.getHistClinicaById(pacienteId).subscribe((response: any) => {
      this.histClinicas = response;
      this.updatePages();
    });
  }

  updatePages() {
    if (Array.isArray(this.histClinicas) && this.histClinicas.length > 0) {
      this.totalPages = Math.ceil(this.histClinicas.length / this.itemsPerPage);
      this.pages = Array.from({ length: this.totalPages }, (_, i) => i + 1);
    }
  }

  setCurrentPage(page: number) {
    this.currentPage = page;
  }

  getCurrentPageItems() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.histClinicas.slice(startIndex, endIndex);
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

}
