import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessCreateEditComponent } from './business-create-edit.component';

describe('BusinessCreateEditComponent', () => {
  let component: BusinessCreateEditComponent;
  let fixture: ComponentFixture<BusinessCreateEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusinessCreateEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessCreateEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
