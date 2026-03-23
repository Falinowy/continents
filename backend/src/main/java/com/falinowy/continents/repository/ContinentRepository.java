package com.falinowy.continents.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.falinowy.continents.entity.Continent;
import org.springframework.stereotype.Repository;

@Repository
public interface ContinentRepository extends JpaRepository<Continent, Long> {
}
