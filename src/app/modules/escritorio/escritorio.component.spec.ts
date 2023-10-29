import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EscritorioComponent } from './escritorio.component';

describe('EscritorioComponent', () => {
  let component: EscritorioComponent;
  let fixture: ComponentFixture<EscritorioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EscritorioComponent]
    });
    fixture = TestBed.createComponent(EscritorioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});