import { Component, OnInit } from '@angular/core';
import { TratamientoService } from '../tratamiento.service';

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
  tratamientos: any[] = [
  ];

  constructor(private tratamientoService: TratamientoService) {}

  ngOnInit() {
    this.getTratamientos();
  }

  updatePages() {
    if (this.tratamientos.length > 0) {
      this.totalPages = Math.ceil(this.tratamientos.length / this.itemsPerPage);
      this.pages = Array.from({ length: this.totalPages }, (_, i) => i + 1);
    }
  }

  setCurrentPage(page: number) {
    this.currentPage = page;
  }

  getCurrentPageItems() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.tratamientos.slice(startIndex, endIndex);
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

  getTratamientos() {
    this.tratamientoService.getAllTratamientos().subscribe((data: any) => {
      this.tratamientos = data;
      this.updatePages();
    });
  }

  deleteTratamiento(id: number) {
    const confirmDelete = window.confirm('¿Seguro que quieres eliminar este tratamiento?');
    if (confirmDelete) {
      // Lógica de eliminación aquí
    }
  }
  }
