import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PreparacionesPage } from './preparaciones.page';

describe('PreparacionesPage', () => {
  let component: PreparacionesPage;
  let fixture: ComponentFixture<PreparacionesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PreparacionesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
