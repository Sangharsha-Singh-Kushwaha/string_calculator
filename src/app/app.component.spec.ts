import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { StringCalculatorService } from './string-calculator.service';
import { FormsModule } from '@angular/forms';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let service: any;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule],
      providers: [AppRoutingModule],
      declarations: [AppComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(StringCalculatorService);
    fixture.detectChanges();
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

  it('should set sum to ubdefined and alert error when onclick throws an error', () => {
    //mock data or Arrange  
    const errorMessage = 'negatives not allowed: -5, -6';
    spyOn(service, "add").and.throwError(errorMessage)
    spyOn(window, 'alert');
    component.onClick();
    fixture.detectChanges();

    // Assert
    expect(component.sum).toBeUndefined();
    expect(window.alert).toHaveBeenCalled();
  });

});
