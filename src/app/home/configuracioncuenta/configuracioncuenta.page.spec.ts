import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConfiguracioncuentaPage } from './configuracioncuenta.page';

describe('ConfiguracioncuentaPage', () => {
  let component: ConfiguracioncuentaPage;
  let fixture: ComponentFixture<ConfiguracioncuentaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfiguracioncuentaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
