package com.cognizant.orm_learn;

import com.cognizant.orm_learn.model.Country;
import com.cognizant.orm_learn.service.CountryService;
import com.cognizant.orm_learn.service.exception.CountryNotFoundException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import java.util.List;

@SpringBootApplication
public class OrmLearnApplication {

	private static final Logger LOGGER = LoggerFactory.getLogger(OrmLearnApplication.class);
	private static CountryService countryService;

	public static void main(String[] args) throws CountryNotFoundException {
		ApplicationContext context = SpringApplication.run(OrmLearnApplication.class, args);
		LOGGER.info("Inside Main, App Started");
		countryService = context.getBean(CountryService.class);

		// testGetAllCountries();
		// testFindCountryByCode();
		// testAddnewCountry();
		// testUpdateCountry();
		testDeleteCountry();
	}

	private static void testGetAllCountries() {
		LOGGER.info("Started testGetAllCountries");
		List<Country> countries = countryService.getAllCountries();
		LOGGER.debug("Countries are {}", countries);
		LOGGER.info("Ended testGetAllCountries");
	}

	private static void testFindCountryByCode() throws CountryNotFoundException {
		LOGGER.info("Started testFindCountryByCode");
		Country country = countryService.findCountryByCode("IN");
		LOGGER.debug("Country is {}", country);
		LOGGER.info("Ended testFindCountryByCode");
	}

	private static void testAddnewCountry() throws CountryNotFoundException {
		LOGGER.info("Started testAddnewCountry");
		Country country = new Country("NP", "Nepal");
		countryService.addCountry(country);

		Country a =  countryService.findCountryByCode("NP");
		LOGGER.debug("Country is {}", a);
		LOGGER.info("Ended testAddnewCountry");
	}

	private static void testUpdateCountry() throws CountryNotFoundException {
		LOGGER.info("Started testUpdateCountry");
		Country updated = new Country("AE", "UAE");
		countryService.updateCountry(updated);

		Country a =  countryService.findCountryByCode("AE");
		LOGGER.debug("Country is {}", a);
		LOGGER.info("Ended testUpdateCountry");
	}

	private static void testDeleteCountry() throws CountryNotFoundException {
		LOGGER.info("Started testDeleteCountry");
		countryService.deleteCountry("NP");

		try {
			countryService.findCountryByCode("NP");
		}
		catch (CountryNotFoundException e) {
			LOGGER.info("Country not found, Confirm Deletion");
		}
		LOGGER.info("Ended testDeleteCountry");
	}
}
