import { Component, OnInit } from '@angular/core';
import { HistClinicaService } from '../histClinica.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  histClinicas: any[] = [
  ];

  constructor(private histClinicaService: HistClinicaService) {}

  ngOnInit() {
    this.getHistClinica();
  }

  getHistClinica() {
    this.histClinicaService.getAllHistClinica().subscribe((data: any) => {
      this.histClinicas = data;
    });
  }
  }
