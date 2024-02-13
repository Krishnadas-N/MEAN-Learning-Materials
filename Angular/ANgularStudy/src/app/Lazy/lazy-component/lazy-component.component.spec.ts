import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyComponentComponent } from './lazy-component.component';

describe('LazyComponentComponent', () => {
  let component: LazyComponentComponent;
  let fixture: ComponentFixture<LazyComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LazyComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LazyComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
