import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AgendaService } from '../agenda.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent {
  agendaData: any = {

  };

  constructor(private agendaService: AgendaService, private router: Router) {}

  
}

