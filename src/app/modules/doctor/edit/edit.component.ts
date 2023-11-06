import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DoctorService } from '../doctor.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent implements OnInit {
  doctorData: any = {
    nombre: '',
    apellido: '',
    celular: '',
    direccion: '',
    documento_identidad: '',
    sexo: 'M',
    id_persona: '',
    fecha_nacimiento: '',
    especialidad: '',
    universidad:'',
    licencia_medica:''
  };

  constructor(
    private doctorService: DoctorService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const doctorId =this.route.snapshot.params['id'];


    this.doctorService.getDoctorById(doctorId).subscribe((response: any) => {
      this.doctorData = response;
      this.doctorData.fecha_nacimiento = new Date(this.doctorData.fecha_nacimiento).toISOString().split('T')[0];
    });
  }

  onSubmit() {
    const doctorId = this.route.snapshot.params['id'];
    this.doctorService.updateDoctor(doctorId, this.doctorData).subscribe((response: any) => {
      this.router.navigate(['/doctor/list']);
    });

  }

  goBack() {
    this.router.navigate(['/doctor/list']);
  }
}
