import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessegsComponent } from './messegs.component';

describe('MessegsComponent', () => {
  let component: MessegsComponent;
  let fixture: ComponentFixture<MessegsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MessegsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MessegsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
