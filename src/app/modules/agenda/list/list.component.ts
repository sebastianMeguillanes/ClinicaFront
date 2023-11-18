import { Component, OnInit } from '@angular/core';
import { AgendaService } from '../agenda.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  agendas: any[] = [
  ];

  constructor(private agendaService: AgendaService) {}

  ngOnInit() {
    this.getAgendas();
  }

  getAgendas() {
    this.agendaService.getAllAgenda().subscribe((data: any) => {
      this.agendas = data;
    });
  }
  }
