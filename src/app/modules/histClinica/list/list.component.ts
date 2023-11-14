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
   this.histClinicas = data;
    });
  }
}


