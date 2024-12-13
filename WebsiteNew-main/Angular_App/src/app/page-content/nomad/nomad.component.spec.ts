import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NOMADComponent } from './nomad.component';

describe('NOMADComponent', () => {
  let component: NOMADComponent;
  let fixture: ComponentFixture<NOMADComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NOMADComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NOMADComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
