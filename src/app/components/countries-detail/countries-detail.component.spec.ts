import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountriesDetailComponent } from './countries-detail.component';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { CountriesService } from '../../service/countries.service';
import { TitleService } from '../../service/title.service';
import { of } from 'rxjs';

describe('CountriesDetailComponent', () => {
  let component: CountriesDetailComponent;
  let fixture: ComponentFixture<CountriesDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CountriesDetailComponent],
      providers: [
        { provide: ActivatedRoute, useValue: { paramMap: of(convertToParamMap({ nameCountry: 'Poland' })) } },
        { provide: CountriesService, useValue: { getCountryDetail: () => of([]) } },
        { provide: TitleService, useValue: { setTitle: () => void 0, title: () => '' } },
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountriesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
