import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OlvidaPassPage } from './olvida-pass.page';

describe('OlvidaPassPage', () => {
  let component: OlvidaPassPage;
  let fixture: ComponentFixture<OlvidaPassPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(OlvidaPassPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
