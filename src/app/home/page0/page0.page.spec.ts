import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Page0Page } from './page0.page';

describe('Page0Page', () => {
  let component: Page0Page;
  let fixture: ComponentFixture<Page0Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Page0Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
