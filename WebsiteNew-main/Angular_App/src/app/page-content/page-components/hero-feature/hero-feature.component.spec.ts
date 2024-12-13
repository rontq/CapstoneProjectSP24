import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroFeatureComponent } from './hero-feature.component';

describe('HeroFeatureComponent', () => {
  let component: HeroFeatureComponent;
  let fixture: ComponentFixture<HeroFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroFeatureComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeroFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
