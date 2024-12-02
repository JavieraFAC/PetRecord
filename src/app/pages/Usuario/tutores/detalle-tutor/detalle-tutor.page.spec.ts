import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetalleTutorPage } from './detalle-tutor.page';

describe('DetalleTutorPage', () => {
  let component: DetalleTutorPage;
  let fixture: ComponentFixture<DetalleTutorPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleTutorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
