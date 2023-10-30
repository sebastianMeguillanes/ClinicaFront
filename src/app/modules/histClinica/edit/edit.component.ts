import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HistClinicaService } from '../histClinica.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent implements OnInit {
  histClinicaData: any = {
    radiografias: ''
  };

  constructor(
    private histClinicaService: HistClinicaService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const histClinicaId = this.route.snapshot.params['id'];

    this.histClinicaService.getHistClinicaById(histClinicaId).subscribe((response: any) => {
      this.histClinicaData = response;
    });
  }

  onSubmit() {
    const histClinicaId = this.route.snapshot.params['id'];
    this.histClinicaService.updateHistClinica(histClinicaId, this.histClinicaData).subscribe((response: any) => {
      this.router.navigate(['/histClinica/list']);
    });
  }

  goBack() {
    this.router.navigate(['/histClinica/list']);
  }
}
