import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureAPage2Component } from './feature-a-page-2.component';

describe('FeatureAPage2Component', () => {
  let component: FeatureAPage2Component;
  let fixture: ComponentFixture<FeatureAPage2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeatureAPage2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeatureAPage2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
