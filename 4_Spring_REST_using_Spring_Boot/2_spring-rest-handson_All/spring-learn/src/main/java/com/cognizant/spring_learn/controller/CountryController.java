package com.cognizant.spring_learn.controller;

import com.cognizant.spring_learn.Country;
import com.cognizant.spring_learn.service.CountryService;
import com.cognizant.spring_learn.service.exception.CountryNotFoundException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class CountryController {
    private static final Logger LOGGER = LoggerFactory.getLogger(CountryController.class);
    private final CountryService countryService;

    public CountryController(CountryService countryService) {
        this.countryService = countryService;
    }

    @RequestMapping("/country")
    public Country getCountryIndia() {
        LOGGER.info("Start - country()");
        ApplicationContext applicationContext = new ClassPathXmlApplicationContext("country.xml");
        Country country = (Country) applicationContext.getBean("country");
        LOGGER.info("End - Country");
        return country;
    }

    @RequestMapping("/countries")
    public List<Country> getAllCountries() {
        LOGGER.info("Start - countries()");
        ApplicationContext applicationContext = new ClassPathXmlApplicationContext("country.xml");
        List<Country> countries = (List<Country>) applicationContext.getBean("countryList");
        LOGGER.info("End - countries()");
        return countries;
    }

    @GetMapping("/countries/{code}")
    public Country getCountry(@PathVariable String code) throws CountryNotFoundException {
        Country country = countryService.getCountry(code);
        return country;
    }
}
