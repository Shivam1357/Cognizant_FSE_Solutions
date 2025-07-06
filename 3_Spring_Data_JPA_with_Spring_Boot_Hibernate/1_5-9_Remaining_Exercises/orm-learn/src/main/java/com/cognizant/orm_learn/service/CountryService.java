package com.cognizant.orm_learn.service;

import com.cognizant.orm_learn.model.Country;
import com.cognizant.orm_learn.repository.CountryRepository;
import com.cognizant.orm_learn.service.exception.CountryNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import java.util.List;
import java.util.Optional;

@Service
public class CountryService {
    @Autowired
    private CountryRepository countryRepository;


    public List<Country> getAllCountries() {
        return countryRepository.findAll();
    }

    @Transactional
    public Country findCountryByCode(String code) throws CountryNotFoundException {
        Optional<Country> result = countryRepository.findById(code);
        if(!result.isPresent()) {
            throw new CountryNotFoundException(code);
        }
        return result.get();
    }

    @Transactional
    public void addCountry(Country country){
        countryRepository.save(country);
    }

    @Transactional
    public void updateCountry(Country country) throws CountryNotFoundException {
        Optional<Country> result = countryRepository.findById(country.getCode());
        if (!result.isPresent()) {
            throw new CountryNotFoundException(country.getCode());
        }
        Country existingCountry = result.get();
        existingCountry.setName(country.getName());
        countryRepository.save(existingCountry);
    }

    @Transactional
    public void deleteCountry(String code) throws CountryNotFoundException {
        countryRepository.deleteById(code);
    }

    public List<Country> findCountryByPartialName(String partialName) {
        return countryRepository.findCountryByNameContainingIgnoreCase(partialName);
    }
}
