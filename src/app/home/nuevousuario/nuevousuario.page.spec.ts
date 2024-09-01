import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NuevousuarioPage } from './nuevousuario.page';

describe('NuevousuarioPage', () => {
  let component: NuevousuarioPage;
  let fixture: ComponentFixture<NuevousuarioPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevousuarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
