package com.cognizant.orm_learn.repository;

import com.cognizant.orm_learn.model.Country;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

public interface CountryRepository  extends JpaRepository<Country,String> {
    List<Country> findCountryByNameContainingIgnoreCase(String name);
}
