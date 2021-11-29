import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddStduentComponent } from './add-stduent.component';

describe('AddStduentComponent', () => {
  let component: AddStduentComponent;
  let fixture: ComponentFixture<AddStduentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddStduentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddStduentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
