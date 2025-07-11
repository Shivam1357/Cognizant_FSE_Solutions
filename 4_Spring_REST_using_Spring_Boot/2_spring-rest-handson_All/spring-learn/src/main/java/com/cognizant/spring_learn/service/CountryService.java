package com.cognizant.spring_learn.service;


import com.cognizant.spring_learn.Country;
import com.cognizant.spring_learn.service.exception.CountryNotFoundException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CountryService {
    private static final Logger LOGGER = LoggerFactory.getLogger(CountryService.class);

    public Country getCountry(String code) {
        LOGGER.info("Start - getCountry(" + code + ")");

        ApplicationContext applicationContext = new ClassPathXmlApplicationContext("country.xml");
        List<Country> countries = (List<Country>) applicationContext.getBean("countryList", List.class);

        Country result = countries.stream()
                .filter(c -> c.getCode().equalsIgnoreCase(code))
                .findFirst()
                //.orElse(null);
                .orElseThrow(() -> new CountryNotFoundException("Country not found"));
        LOGGER.debug("Country found: {} " + result);
        LOGGER.info("End - getCountry(" + code + ")");
        return result;
    }
}
