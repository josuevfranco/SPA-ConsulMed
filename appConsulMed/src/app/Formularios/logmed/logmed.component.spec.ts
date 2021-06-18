import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogmedComponent } from './logmed.component';

describe('LogmedComponent', () => {
  let component: LogmedComponent;
  let fixture: ComponentFixture<LogmedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogmedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogmedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
