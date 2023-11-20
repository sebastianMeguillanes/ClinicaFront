import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent implements OnInit {
    usuarioData: any = {
        tipo: '',
        cantidad_sesion: ''
  };

  constructor(
    private usuarioService: UsuarioService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const usuarioId = this.route.snapshot.params['id'];

    this.usuarioService.getUsuarioById(usuarioId).subscribe((response: any) => {
      console.log("response")
      this.usuarioData = response;
    });
  }

  onSubmit() {
    const usuarioId = this.route.snapshot.params['id'];
    this.usuarioService.updateUsuario(usuarioId, this.usuarioData).subscribe((response: any) => {
      this.router.navigate(['/usuario/list']);
    });
  }

  goBack() {
    this.router.navigate(['/usuario/list']);
  }
}
