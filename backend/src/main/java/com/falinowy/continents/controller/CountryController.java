package com.falinowy.continents.controller;

import com.falinowy.continents.entity.Country;
import com.falinowy.continents.service.CountryService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/countries")
@CrossOrigin(origins = "http://localhost:4200")
@RequiredArgsConstructor
public class CountryController {

  private final CountryService countryService;

  @GetMapping("/region/{region}")
  public List<Country> getCountriesByRegion(@PathVariable String region) {
    return countryService.getCountriesByRegion(region);
  }

  @PostMapping
  public ResponseEntity<Country> addCountry(@Valid @RequestBody Country country) {
    Country saved = countryService.addCountry(country);
    return new ResponseEntity<>(saved, HttpStatus.CREATED);
  }

}
