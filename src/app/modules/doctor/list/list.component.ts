import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../doctor.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  doctores: any[] = [];

  constructor(private DoctorService: DoctorService) {}

  ngOnInit() {
    this.getOneDoctor();
  }

  getOneDoctor() {
    this.DoctorService.getAllDoctores().subscribe((data: any) => {
      this.doctores = data;
    });
  }
}
