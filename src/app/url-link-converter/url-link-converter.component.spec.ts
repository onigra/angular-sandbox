import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UrlLinkConverterComponent } from './url-link-converter.component';

describe('UrlLinkConverterComponent', () => {
  let component: UrlLinkConverterComponent;
  let fixture: ComponentFixture<UrlLinkConverterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UrlLinkConverterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UrlLinkConverterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
