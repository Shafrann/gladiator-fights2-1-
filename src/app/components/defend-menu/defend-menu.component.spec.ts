import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefendMenuComponent } from './defend-menu.component';

describe('DefendMenuComponent', () => {
  let component: DefendMenuComponent;
  let fixture: ComponentFixture<DefendMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DefendMenuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DefendMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
