import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TratamientoService } from '../tratamiento.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent implements OnInit {
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

    this.tratamientoService.getTratamientoById(tratamientoId).subscribe((response: any) => {
      console.log("response")
      this.tratamientoData = response;
    });
  }

  onSubmit() {
    const tratamientoId = this.route.snapshot.params['id'];
    this.tratamientoService.updateTratamiento(tratamientoId, this.tratamientoData).subscribe((response: any) => {
      this.router.navigate(['/tratamiento/list']);
    });
  }

  goBack() {
    this.router.navigate(['/tratamiento/list']);
  }
}
