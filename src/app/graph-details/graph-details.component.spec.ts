import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphDetailsComponent } from './graph-details.component';

describe('GraphDetailsComponent', () => {
  let component: GraphDetailsComponent;
  let fixture: ComponentFixture<GraphDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraphDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraphDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
