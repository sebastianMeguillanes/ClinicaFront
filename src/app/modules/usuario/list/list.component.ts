import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../usuario.service';

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
  usuarios: any[] = [
  ];

  constructor(private usuarioService: UsuarioService) {}

  ngOnInit() {
    this.getUsuarios();
  }

  updatePages() {
    if (this.usuarios.length > 0) {
      this.totalPages = Math.ceil(this.usuarios.length / this.itemsPerPage);
      this.pages = Array.from({ length: this.totalPages }, (_, i) => i + 1);
    }
  }

  setCurrentPage(page: number) {
    this.currentPage = page;
  }

  getCurrentPageItems() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.usuarios.slice(startIndex, endIndex);
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

  getUsuarios() {
    this.usuarioService.getAllUsuario().subscribe((data: any) => {
      this.usuarios = data;
      this.updatePages();  
    });
  }
  }
