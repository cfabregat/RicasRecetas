import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Menu2Page } from './menu2.page';

describe('Menu2Page', () => {
  let component: Menu2Page;
  let fixture: ComponentFixture<Menu2Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Menu2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
