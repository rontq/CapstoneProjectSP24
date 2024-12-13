import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TertiaOptioComponent } from './tertia-optio.component';

describe('TertiaOptioComponent', () => {
  let component: TertiaOptioComponent;
  let fixture: ComponentFixture<TertiaOptioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TertiaOptioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TertiaOptioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
