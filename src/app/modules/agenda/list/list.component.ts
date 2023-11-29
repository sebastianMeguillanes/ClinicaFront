// list.component.ts
import { Component, OnInit } from '@angular/core';
import { AgendaService } from '../agenda.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  currentPage: number = 1;
  itemsPerPage: number = 10;
  pages: number[] = [];
  totalPages: number = 0;
  agendas: any[] = [];
  
  constructor(private agendaService: AgendaService) {}

  ngOnInit() {
    this.getAgendas();
  }

  updatePages() {
    if (this.agendas.length > 0) {
      this.totalPages = Math.ceil(this.agendas.length / this.itemsPerPage);
      this.pages = Array.from({ length: this.totalPages }, (_, i) => i + 1);
    }
  }

  setCurrentPage(page: number) {
    this.currentPage = page;
  }

  getCurrentPageItems() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.agendas.slice(startIndex, endIndex);
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

  getAgendas() {
    this.agendaService.getAllAgenda().subscribe((data: any) => {
      this.agendas = data;
      this.updatePages()
    });
   
  }

  // Agrega confirmación antes de eliminar
  deleteAgenda(id: number) {
    const confirmDelete = window.confirm('¿Seguro que quieres eliminar esta agenda?');
    if (confirmDelete) {
      // Lógica de eliminación aquí
    }
  }
}
