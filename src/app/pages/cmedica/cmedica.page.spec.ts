import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CmedicaPage } from './cmedica.page';

describe('CmedicaPage', () => {
  let component: CmedicaPage;
  let fixture: ComponentFixture<CmedicaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CmedicaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
