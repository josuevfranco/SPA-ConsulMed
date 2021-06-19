import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogpacComponent } from './logpac.component';

describe('LogpacComponent', () => {
  let component: LogpacComponent;
  let fixture: ComponentFixture<LogpacComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogpacComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogpacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
