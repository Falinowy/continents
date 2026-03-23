-- Kontynenty
INSERT INTO CONTINENTS (NAME, REGION, IMG_URL) VALUES ('Afryka', 'Africa', 'https://img.icons8.com/color/120/africa.png');
INSERT INTO CONTINENTS (NAME, REGION, IMG_URL) VALUES ('Ameryka', 'Americas', 'https://img.icons8.com/?size=100&id=fwZqiZ96Ihs_&format=png&color=000000');
INSERT INTO CONTINENTS (NAME, REGION, IMG_URL) VALUES ('Azja', 'Asia', 'https://img.icons8.com/?size=100&id=63764&format=png&color=000000');
INSERT INTO CONTINENTS (NAME, REGION, IMG_URL) VALUES ('Europa', 'Europe', 'https://img.icons8.com/color/120/europe.png');
INSERT INTO CONTINENTS (NAME, REGION, IMG_URL) VALUES ('Oceania', 'Oceania', 'https://img.icons8.com/?size=100&id=j2D-17SBxXAJ&format=png&color=000000');

-- Kraje Afryka (zaktualizowane o nowe pola)
INSERT INTO COUNTRIES (COMMON_NAME, OFFICIAL_NAME, CAPITAL, POPULATION, AREA, REGION, SUBREGION, FLAG_URL, INDEPENDENT, UN_MEMBER, CURRENCY, LANGUAGE) 
VALUES ('Gabon', 'Gabonese Republic', 'Libreville', 2225728, 267667.0, 'Africa', 'Middle Africa', 'https://flagcdn.com/w320/ga.png', 1, 1, 'XAF', 'French');

INSERT INTO COUNTRIES (COMMON_NAME, OFFICIAL_NAME, CAPITAL, POPULATION, AREA, REGION, SUBREGION, FLAG_URL, INDEPENDENT, UN_MEMBER, CURRENCY, LANGUAGE) 
VALUES ('Togo', 'Togolese Republic', 'Lomé', 8095498, 56785.0, 'Africa', 'Western Africa', 'https://flagcdn.com/w320/tg.png', 1, 1, 'XOF', 'French');

INSERT INTO COUNTRIES (COMMON_NAME, OFFICIAL_NAME, CAPITAL, POPULATION, AREA, REGION, SUBREGION, FLAG_URL, INDEPENDENT, UN_MEMBER, CURRENCY, LANGUAGE) 
VALUES ('Egipt', 'Arab Republic of Egypt', 'Kair', 102334403, 1002450.0, 'Africa', 'Northern Africa', 'https://flagcdn.com/w320/eg.png', 1, 1, 'EGP', 'Arabic');

-- Kraje Ameryka (na podstawie Twoich danych)
INSERT INTO COUNTRIES (COMMON_NAME, OFFICIAL_NAME, CAPITAL, POPULATION, AREA, REGION, SUBREGION, FLAG_URL, INDEPENDENT, UN_MEMBER, CURRENCY, LANGUAGE) 
VALUES ('Bolivia', 'Plurinational State of Bolivia', 'Sucre', 11365333, 1098581.0, 'Americas', 'South America', 'https://flagcdn.com/w320/bo.png', 1, 1, 'BOB', 'Spanish, Quechua, Aymara');

INSERT INTO COUNTRIES (COMMON_NAME, OFFICIAL_NAME, CAPITAL, POPULATION, AREA, REGION, SUBREGION, FLAG_URL, INDEPENDENT, UN_MEMBER, CURRENCY, LANGUAGE) 
VALUES ('USA', 'United States of America', 'Washington D.C.', 340110988, 9525067.0, 'Americas', 'North America', 'https://flagcdn.com/w320/us.png', 1, 1, 'USD', 'English');

INSERT INTO COUNTRIES (COMMON_NAME, OFFICIAL_NAME, CAPITAL, POPULATION, AREA, REGION, SUBREGION, FLAG_URL, INDEPENDENT, UN_MEMBER, CURRENCY, LANGUAGE) 
VALUES ('Grenada', 'Grenada', 'St. George''s', 109021, 344.0, 'Americas', 'Caribbean', 'https://flagcdn.com/w320/gd.png', 1, 1, 'XCD', 'English');

INSERT INTO COUNTRIES (COMMON_NAME, OFFICIAL_NAME, CAPITAL, POPULATION, AREA, REGION, SUBREGION, FLAG_URL, INDEPENDENT, UN_MEMBER, CURRENCY, LANGUAGE) 
VALUES ('Suriname', 'Republic of Suriname', 'Paramaribo', 616500, 163820.0, 'Americas', 'South America', 'https://flagcdn.com/w320/sr.png', 1, 1, 'SRD', 'Dutch');

INSERT INTO COUNTRIES (COMMON_NAME, OFFICIAL_NAME, CAPITAL, POPULATION, AREA, REGION, SUBREGION, FLAG_URL, INDEPENDENT, UN_MEMBER, CURRENCY, LANGUAGE) 
VALUES ('Dominican Republic', 'Dominican Republic', 'Santo Domingo', 10771504, 48671.0, 'Americas', 'Caribbean', 'https://flagcdn.com/w320/do.png', 1, 1, 'DOP', 'Spanish');

INSERT INTO COUNTRIES (COMMON_NAME, OFFICIAL_NAME, CAPITAL, POPULATION, AREA, REGION, SUBREGION, FLAG_URL, INDEPENDENT, UN_MEMBER, CURRENCY, LANGUAGE) 
VALUES ('Guatemala', 'Republic of Guatemala', 'Guatemala City', 18079810, 108889.0, 'Americas', 'Central America', 'https://flagcdn.com/w320/gt.png', 1, 1, 'GTQ', 'Spanish');
