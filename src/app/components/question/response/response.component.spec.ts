import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponseComponent } from './response.component';

describe('ResponseComponent', () => {
  let component: ResponseComponent;
  let fixture: ComponentFixture<ResponseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResponseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ResponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
