import { delay } from 'rxjs/operators';
import { of } from 'rxjs';
import { AppService } from './app.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed, async, tick, fakeAsync, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'demong'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('demong');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges(); //only when testing ui html components
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to demong!');
  });

  it('should call getPostDetails and get response as empty array', fakeAsync(()=>{
    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.debugElement.componentInstance;
    const service = fixture.debugElement.injector.get(AppService);

    //spyOn(service,"getPosts").and.callFake(() => of([]));
    spyOn(service,"getPosts").and.callFake(() => {
      return of([]).pipe(delay(100));
    });

    component.getPostDetails();
    tick(100);
    expect(component.postDetails).toEqual([]);
  }));

  it('should call getPostDetails and get response as array', fakeAsync(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const component = fixture.debugElement.componentInstance;
    const service = fixture.debugElement.injector.get(AppService);
    let spy_getPosts = spyOn(service,"getPosts").and.callFake(() => {
      return of([{postId : 100}]).pipe(delay(2000));
    });
    component.getPostDetails();
    tick(1000);
    expect(component.showLoadingIndicator).toEqual(true);
    tick(1000);
    expect(component.showLoadingIndicator).toEqual(false);
  }))
  
  //ng test --code-coverage
});
