import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainVComponent } from './main-v.component';

describe('MainVComponent', () => {
  let component: MainVComponent;
  let fixture: ComponentFixture<MainVComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainVComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
