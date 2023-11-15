import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AgendaService } from '../agenda.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent implements OnInit {
    agendaData: any = {

  };

  constructor(
    private agendaService: AgendaService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    
  }
}
  