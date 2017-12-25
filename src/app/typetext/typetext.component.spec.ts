import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypetextComponent } from './typetext.component';

describe('TypetextComponent', () => {
  let component: TypetextComponent;
  let fixture: ComponentFixture<TypetextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypetextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypetextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
