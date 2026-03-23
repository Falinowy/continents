package com.falinowy.continents.service;

import com.falinowy.continents.entity.Country;
import com.falinowy.continents.repository.CountryRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
@RequiredArgsConstructor
public class CountryService {

  private final CountryRepository countryRepository;

  public List<Country> getCountriesByRegion(String region) {
    return countryRepository.findByRegion(region);
  }

  public Country addCountry(Country country) {
    return countryRepository.save(country);
  }

}
