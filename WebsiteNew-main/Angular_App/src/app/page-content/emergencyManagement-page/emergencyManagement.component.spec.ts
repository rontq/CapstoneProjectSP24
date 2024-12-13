import { TestBed } from '@angular/core/testing';
import { EmergencyManagementPage } from './emergencyManagement.component';

describe('EmergencyManagementPage', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmergencyManagementPage],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(EmergencyManagementPage);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'hero' title`, () => {
    const fixture = TestBed.createComponent(EmergencyManagementPage);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('hero');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(EmergencyManagementPage);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, hero');
  });
});

