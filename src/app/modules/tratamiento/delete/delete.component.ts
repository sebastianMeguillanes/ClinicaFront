import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TratamientoService } from '../tratamiento.service';

@Component({
  selector: 'app-delete',
  templateUrl: '../create/create.component.html',
  styleUrls: ['../create/create.component.scss'],
})
export class DeleteComponent implements OnInit {
  tratamientos: any[] = [];
  tratamientoData: any = {
    tipo: '',
    cantidad_sesion: ''
  };

  constructor(
    private tratamientoService: TratamientoService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const tratamientoId = this.route.snapshot.params['id'];
    this.tratamientoService.deleteTratamiento(tratamientoId).subscribe((response: any) => {
      this.router.navigate(['/tratamiento/list']);
    });
  }
  onSubmit(){
    
  }

  goBack() {
    this.router.navigate(['/tratamiento/list']); // Volver atrás sin guardar cambios
  }
}
