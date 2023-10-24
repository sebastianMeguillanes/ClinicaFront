import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../doctor.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  doctores: any[] = [];

  constructor(private doctorService: DoctorService) {}

  ngOnInit() {
    this.getDoctor();
  }

  getDoctor() {
    this.doctorService.getAllDoctores().subscribe((data: any) => {
      this.doctores = data;
      console.log(data);
    });
  }
}
