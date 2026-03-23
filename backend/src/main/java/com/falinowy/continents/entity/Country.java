package com.falinowy.continents.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "COUNTRIES")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Country {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @NotBlank(message = "Common name cannot be empty")
  private String commonName;

  @NotBlank(message = "Official name cannot be empty")
  private String officialName;

  private String capital;

  @NotNull(message = "Population cannot be null")
  private Long population;

  private Double area;

  @NotBlank(message = "Region cannot be empty")
  private String region;

  private String subregion;

  private String flagUrl;

  private Boolean independent;

  private Boolean unMember;

  private String currency;

  private String language;

}
