import { TestBed } from '@angular/core/testing';
import { SolutionFeatureComponent } from './solution.component';

describe('SolutionFeatureComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SolutionFeatureComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(SolutionFeatureComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'hero' title`, () => {
    const fixture = TestBed.createComponent(SolutionFeatureComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('hero');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(SolutionFeatureComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, hero');
  });
});

