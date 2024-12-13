import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroProtectComponent } from './protect.component';

describe('HeroProtectComponent', () => {
  let component: HeroProtectComponent;
  let fixture: ComponentFixture<HeroProtectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroProtectComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeroProtectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
