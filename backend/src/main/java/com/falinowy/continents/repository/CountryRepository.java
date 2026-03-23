package com.falinowy.continents.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.falinowy.continents.entity.Country;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface CountryRepository extends JpaRepository<Country, Long> {
  List<Country> findByRegion(String region);
}
