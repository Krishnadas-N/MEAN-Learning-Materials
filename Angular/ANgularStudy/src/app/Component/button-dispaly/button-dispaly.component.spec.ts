import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonDispalyComponent } from './button-dispaly.component';

describe('ButtonDispalyComponent', () => {
  let component: ButtonDispalyComponent;
  let fixture: ComponentFixture<ButtonDispalyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ButtonDispalyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ButtonDispalyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
