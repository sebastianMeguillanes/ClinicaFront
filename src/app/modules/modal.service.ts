import { Injectable } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Injectable({
  providedIn: 'root',
})
export class ModalService {

  bsModalRef: BsModalRef | undefined;

  constructor(private modalService: BsModalService) {}

  openModal(component: any, config: any = {}) {
    this.bsModalRef = this.modalService.show(component, config);
  }

  closeModal() {
    if (this.bsModalRef) {
    this.bsModalRef.hide();
    }
  }
}
