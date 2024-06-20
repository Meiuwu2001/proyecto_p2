import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmacionuserComponent } from './confirmacionuser.component';

describe('ConfirmacionuserComponent', () => {
  let component: ConfirmacionuserComponent;
  let fixture: ComponentFixture<ConfirmacionuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConfirmacionuserComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConfirmacionuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
