import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountriesComponent } from './countries.component';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { CountriesService } from '../../service/countries.service';
import { TitleService } from '../../service/title.service';
import { ModalService } from '../../service/modal.service';
import { of } from 'rxjs';

describe('CountriesComponent', () => {
  let component: CountriesComponent;
  let fixture: ComponentFixture<CountriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CountriesComponent],
      providers: [
        { provide: ActivatedRoute, useValue: { paramMap: of(convertToParamMap({ nameRegion: 'europe' })) } },
        { provide: CountriesService, useValue: { getRegion: () => of([]), addCountryToRegion: () => void 0 } },
        { provide: TitleService, useValue: { setTitle: () => void 0, title: () => '' } },
        { provide: ModalService, useValue: { openForm: () => of(null) } },
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
