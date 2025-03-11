import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListheroesComponent } from './listheroes.component';

describe('ListheroesComponent', () => {
  let component: ListheroesComponent;
  let fixture: ComponentFixture<ListheroesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListheroesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListheroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
