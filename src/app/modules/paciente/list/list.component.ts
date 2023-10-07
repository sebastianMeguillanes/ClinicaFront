import { Component, OnInit } from '@angular/core';
import { PacienteService } from '../paciente.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  pacientes: any[] = [];

  constructor(private pacienteService: PacienteService) {}

  ngOnInit() {
    this.getPacientes();
  }

  getPacientes() {
    this.pacienteService.getAllPacientes().subscribe((data: any) => {
      this.pacientes = data;
    });
  }
}
