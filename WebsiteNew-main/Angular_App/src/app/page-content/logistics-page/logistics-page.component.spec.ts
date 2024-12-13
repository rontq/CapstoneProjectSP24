import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogisticsPageComponent } from './logistics-page.component';

describe('LogisticsPageComponent', () => {
  let component: LogisticsPageComponent;
  let fixture: ComponentFixture<LogisticsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LogisticsPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LogisticsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
