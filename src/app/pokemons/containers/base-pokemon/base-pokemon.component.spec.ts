import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasePokemonComponent } from './base-pokemon.component';

describe('BasePokemonComponent', () => {
  let component: BasePokemonComponent;
  let fixture: ComponentFixture<BasePokemonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasePokemonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasePokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
