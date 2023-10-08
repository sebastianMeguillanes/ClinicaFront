import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PacienteService } from '../paciente.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent implements OnInit {
  pacienteData: any = {
  nombre: '',
  apellido: '',
  celular: '',
  direccion: '',
  documento_identidad: '',
  sexo: 'M',
  fecha_nacimiento: '',
  enfermedad_base: '',
  };

  constructor(
    private pacienteService: PacienteService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const pacienteId =this.route.snapshot.params['id'];
    console.log(pacienteId);

    console.log(this.pacienteData);
    this.pacienteService.getPacienteById(pacienteId).subscribe((response: any) => {
      this.pacienteData = response;
    });
  }

  onSubmit() {
    const pacienteId = this.route.snapshot.params['id'];
    this.pacienteService.updatePaciente(pacienteId, this.pacienteData).subscribe((response: any) => {
      this.router.navigate(['/paciente/list']);
    });

  }

  goBack() {
    this.router.navigate(['/paciente/list']);
  }
}
