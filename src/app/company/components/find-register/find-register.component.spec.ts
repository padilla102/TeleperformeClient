import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindRegisterComponent } from './find-register.component';

describe('FindRegisterComponent', () => {
  let component: FindRegisterComponent;
  let fixture: ComponentFixture<FindRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindRegisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FindRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
