import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditheroComponent } from './edithero.component';

describe('EditheroComponent', () => {
  let component: EditheroComponent;
  let fixture: ComponentFixture<EditheroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditheroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditheroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
