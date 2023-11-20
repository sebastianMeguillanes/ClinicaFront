// list.component.ts
import { Component, OnInit } from '@angular/core';
import { AgendaService } from '../agenda.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  agendas: any[] = [];
  p: number = 1; // Página actual
  itemsPerPage: number = 5;

  constructor(private agendaService: AgendaService) {}

  ngOnInit() {
    this.getAgendas();
  }

  getAgendas() {
    this.agendaService.getAllAgenda().subscribe((data: any) => {
      this.agendas = data;
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
