import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-escritorio',
  templateUrl: './escritorio.component.html',
  styleUrls: ['./escritorio.component.scss']
})
export class EscritorioComponent {
  constructor(private router: Router) {}
}
