import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;    // object created...
    expect(app).toBeTruthy();           // app created successfully..
  });

  it(`should have as title 'angular-testing'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('angular-testing');
    expect(app.names.length).toEqual(4);
    expect(app.names[0]).toEqual("Ravi");
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();      // update the content in view. 
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.p1').textContent).toContain('Welcome to Angular Testing');
  });


});
