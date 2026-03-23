package com.falinowy.continents.controller;

import com.falinowy.continents.entity.Continent;
import com.falinowy.continents.service.ContinentService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/continents")
@CrossOrigin(origins = "http://localhost:4200")
@RequiredArgsConstructor
public class ContinentController {

  private final ContinentService continentService;

  @GetMapping
  public List<Continent> getAllContinents() {
    return continentService.getAllContinents();
  }

  @PostMapping
  public ResponseEntity<Continent> addContinent(@Valid @RequestBody Continent continent) {
    Continent saved = continentService.addContinent(continent);
    return new ResponseEntity<>(saved, HttpStatus.CREATED);
  }

}
