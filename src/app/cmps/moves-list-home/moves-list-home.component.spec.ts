import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovesListHomeComponent } from './moves-list-home.component';

describe('MovesListHomeComponent', () => {
  let component: MovesListHomeComponent;
  let fixture: ComponentFixture<MovesListHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovesListHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovesListHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
