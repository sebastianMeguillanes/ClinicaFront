import { Component, OnInit } from '@angular/core';
import { TratamientoService } from '../tratamiento.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  tratamientos: any[] = [
  ];

  constructor(private tratamientoService: TratamientoService) {}

  ngOnInit() {
    this.getTratamientos();
  }

  getTratamientos() {
    this.tratamientoService.getAllTratamientos().subscribe((data: any) => {
      this.tratamientos = data;
    });
  }
  }
