import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EFComponent } from './ef.component';

describe('EFComponent', () => {
  let component: EFComponent;
  let fixture: ComponentFixture<EFComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EFComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
