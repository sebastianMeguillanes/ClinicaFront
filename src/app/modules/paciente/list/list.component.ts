import { Component, OnInit } from '@angular/core';
import { PacienteService } from '../paciente.service';

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
  pacientes: any[] = [];
  filtroNombre = '';
  constructor(private pacienteService: PacienteService) {}

  ngOnInit() {
    this.getPacientes();
  }

  filtrarPorNombre() {
    this.pacientes = this.pacientes.filter(
      (paciente) =>
        paciente.nombre.toLowerCase().includes(this.filtroNombre.toLowerCase())
    );
  }

  updatePages() {
    if (this.pacientes.length > 0) {
      this.totalPages = Math.ceil(this.pacientes.length / this.itemsPerPage);
      this.pages = Array.from({ length: this.totalPages }, (_, i) => i + 1);
    }
  }

  setCurrentPage(page: number) {
    this.currentPage = page;
  }
  
  getCurrentPageItems() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.pacientes.slice(startIndex, endIndex);
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
  getPacientes() {
    this.pacienteService.getAllPacientes().subscribe((data: any) => {
      this.pacientes = data.map((paciente: { fecha_nacimiento: string | number | Date; }) => {
        paciente.fecha_nacimiento = new Date(paciente.fecha_nacimiento).toLocaleDateString('en-GB');
        return paciente;
      });
      this.updatePages()
    });
  }
  
  reiniciarFiltro() {
    this.filtroNombre = '';
    this.getPacientes(); // Volver a cargar la lista original
  }
}
