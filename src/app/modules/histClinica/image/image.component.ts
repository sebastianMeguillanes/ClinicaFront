import { Component, OnInit } from '@angular/core';
import { HistClinicaService } from '../histClinica.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss'],
})
export class ImageComponent implements OnInit {
  histClinicas: any[] = [];
  constructor(private histClinicaService: HistClinicaService, private route: ActivatedRoute) {}

ngOnInit(): void {
    const histClinicaId = this.route.snapshot.paramMap.get('id');
    this.histClinicaService.getRadiografia(histClinicaId).subscribe((url: string) => {
        this.radiografiaUrl = url;
}

}