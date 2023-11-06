import { Component, OnInit } from '@angular/core';
import { HistClinicaService } from '../histClinica.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  histClinicas: any[] = [];
  constructor(private histClinicaService: HistClinicaService, private route: ActivatedRoute) {}

  
ngOnInit(): void {
  const pacienteId = this.route.snapshot.params['id'];
  this.histClinicaService.getHistClinicaById(pacienteId).subscribe((response: any) => {
    this.histClinicas = response;
    
  });
}

getHistClinica() {
  this.histClinicaService.getAllHistClinica().subscribe((data: any) => {
    this.histClinicas = data.map((histClinica: { fecha_registro: string | number | Date; }) => {
      histClinica.fecha_registro = new Date(histClinica.fecha_registro).toLocaleDateString('en-GB');
      return histClinica;
    });
  });
}


}

  /*ngOnInit() {
    const pacienteId = this.route.snapshot.params['id'];
    this.route.paramMap.subscribe((params) => {
      this.pacienteId = +this.params.get('id'); // Convierte a número el ID del paciente
      this.getHistClinicaByPacienteId();
    

    this.histClinicaService.getHistClinicaById(pacienteId).subscribe((response: any) => {
      this.pacienteData = response;
  });
  }

  getHistClinicaByPacienteId() {
  const pacienteId = this.route.snapshot.params['id'];
  this.histClinicaService.getHistClinicaByPacienteId(pacienteId).subscribe((data: any) => {
    this.histClinicas = data;
    });
  }
  */

