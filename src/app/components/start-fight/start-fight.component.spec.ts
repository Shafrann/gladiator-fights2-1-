import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartFightComponent } from './start-fight.component';

describe('StartFightComponent', () => {
  let component: StartFightComponent;
  let fixture: ComponentFixture<StartFightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StartFightComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StartFightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
