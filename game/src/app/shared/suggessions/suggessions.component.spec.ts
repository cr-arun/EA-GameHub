import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuggessionsComponent } from './suggessions.component';

describe('SuggessionsComponent', () => {
  let component: SuggessionsComponent;
  let fixture: ComponentFixture<SuggessionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuggessionsComponent]
    });
    fixture = TestBed.createComponent(SuggessionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
