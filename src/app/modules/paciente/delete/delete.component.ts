import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PacienteService } from '../paciente.service';

@Component({
  selector: 'app-delete',
  templateUrl: '../create/create.component.html',
  styleUrls: ['../create/create.component.scss'],
})
export class DeleteComponent implements OnInit {
  pacientes: any[] = [];
  pacienteData: any = {
    nombre: '',
    apellido: '',
    celular: '',
    direccion: '',
    documento_identidad: '',
    sexo: 'M',
    id_persona: '',
    fecha_nacimiento: '',
    enfermedad_base: '',
  };

  constructor(
    private pacienteService: PacienteService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    //window.alert()
    const pacienteId = this.route.snapshot.params['id'];
    // window.alert(pacienteId)
    this.pacienteService.deletePaciente(pacienteId).subscribe((response: any) => {
      
    });
    
    this.goBack();
    //this.recargarPagina();
    //this.realizarAccionYRecargar();
  }

  onSubmit() {
    const pacienteId = this.route.snapshot.params['id'];
    this.pacienteData.fecha_nacimiento = new Date(this.pacienteData.fecha_nacimiento).toISOString().split('T')[0];
    this.pacienteService.updatePaciente(pacienteId, this.pacienteData).subscribe((response: any) => {
      this.router.navigate(['/paciente/list']);
    });
  }

  // recargarPagina() {
  //   // Recargar la página solo si no se ha recargado antes
  //   if (!localStorage.getItem('paginaRecargada')) {
  //     localStorage.setItem('paginaRecargada', 'true');
  //     window.location.reload();
  //   }
  // }


  goBack() {
      this.router.navigate(['/paciente/list']);
  }
}
