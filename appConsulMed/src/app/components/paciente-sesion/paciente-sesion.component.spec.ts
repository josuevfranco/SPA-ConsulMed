import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacienteSesionComponent } from './paciente-sesion.component';

describe('PacienteSesionComponent', () => {
  let component: PacienteSesionComponent;
  let fixture: ComponentFixture<PacienteSesionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PacienteSesionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PacienteSesionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
