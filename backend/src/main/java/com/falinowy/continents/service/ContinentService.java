package com.falinowy.continents.service;

import com.falinowy.continents.entity.Continent;
import com.falinowy.continents.repository.ContinentRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
@RequiredArgsConstructor
public class ContinentService {

  private final ContinentRepository continentRepository;

  public List<Continent> getAllContinents() {
    return continentRepository.findAll();
  }

  public Continent addContinent(Continent continent) {
    return continentRepository.save(continent);
  }

}
