import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteheroComponent } from './deletehero.component';

describe('DeleteheroComponent', () => {
  let component: DeleteheroComponent;
  let fixture: ComponentFixture<DeleteheroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteheroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteheroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
