import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyetsComponent } from './proyets.component';

describe('ProyetsComponent', () => {
  let component: ProyetsComponent;
  let fixture: ComponentFixture<ProyetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProyetsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProyetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
