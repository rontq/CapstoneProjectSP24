import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GovernmentDefenseComponent } from './government-defense.component';

describe('GovernmentDefenseComponent', () => {
  let component: GovernmentDefenseComponent;
  let fixture: ComponentFixture<GovernmentDefenseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GovernmentDefenseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GovernmentDefenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
