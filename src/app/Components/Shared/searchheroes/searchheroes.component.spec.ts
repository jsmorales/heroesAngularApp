import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchheroesComponent } from './searchheroes.component';

describe('SearchheroesComponent', () => {
  let component: SearchheroesComponent;
  let fixture: ComponentFixture<SearchheroesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchheroesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchheroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
