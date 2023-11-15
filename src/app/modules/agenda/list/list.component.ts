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
    
  }
}