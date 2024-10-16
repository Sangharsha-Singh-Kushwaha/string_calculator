import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { StringCalculatorService } from './string-calculator.service';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let service: StringCalculatorService;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [],
      providers: [AppRoutingModule],
      declarations: [AppComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(StringCalculatorService);
  });

  it('should create the app component', () => {
    expect(component).toBeTruthy(); 
  });

  it('should create the string calculator service', () => {
    expect(component).toBeTruthy(); 
  });

  it("should call the add method from StringCalculatorService", ()=>{
    spyOn(service, "add"); //mock data

    component.onClick(); //act

    expect(service.add).toHaveBeenCalled()  //assertion
  })
});
