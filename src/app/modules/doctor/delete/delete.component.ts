import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DoctorService } from '../doctor.service';

@Component({
  selector: 'app-delete',
  templateUrl: '../create/create.component.html',
  styleUrls: ['../create/create.component.scss'],
})
export class DeleteComponent implements OnInit {
  doctores: any[] = [];
  doctorData: any = {
    nombre: '',
    apellido: '',
    celular: '',
    direccion: '',
    documento_identidad: '',
    sexo: 'Masculino', // Valor predeterminado
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
    const doctorId = this.route.snapshot.params['id'];
    this.doctorService.deleteDoctor(doctorId).subscribe((response: any) => {
      this.router.navigate(['/doctor/list']);
    });
  }
  onSubmit(){
    
  }

  goBack() {
    this.router.navigate(['/doctor/list']); // Volver atrás sin guardar cambios
  }
}
