import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureAPage1Component } from './feature-a-page-1.component';

describe('FeatureAPage1Component', () => {
  let component: FeatureAPage1Component;
  let fixture: ComponentFixture<FeatureAPage1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeatureAPage1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeatureAPage1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
