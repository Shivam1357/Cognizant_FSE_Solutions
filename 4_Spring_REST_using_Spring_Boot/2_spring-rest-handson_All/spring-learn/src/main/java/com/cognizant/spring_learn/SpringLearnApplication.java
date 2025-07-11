package com.cognizant.spring_learn;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

@SpringBootApplication(scanBasePackages = "com.cognizant.spring_learn")
public class SpringLearnApplication {

	private static final Logger LOGGER = LoggerFactory.getLogger(SpringLearnApplication.class);

	public static void main(String[] args) {
		LOGGER.info("Starting Spring Learn Application...");
		SpringApplication.run(SpringLearnApplication.class, args);
		// displayDate();
		// displayCountry();
		// displayCountries();
		LOGGER.info("Exiting Spring Learn Application...");
	}

	public static void displayDate() {
		LOGGER.info("Start - displayDate()");
		ApplicationContext context = new ClassPathXmlApplicationContext("date-format.xml");
		SimpleDateFormat format = context.getBean("dateFormat", SimpleDateFormat.class);
		try {
			Date date = format.parse("31/12/2018");
			LOGGER.debug("Parsed date: {}", date);
		} catch (Exception e) {
			LOGGER.error("Error parsing date", e);
		}
		LOGGER.info("End - displayDate()");
	}

	public static void displayCountry() {
		LOGGER.info("Start - displayCountry()");

		ApplicationContext context = new ClassPathXmlApplicationContext("country.xml");
		Country country = context.getBean("country", Country.class);
		Country country2 = context.getBean("country", Country.class);

		if (country == country2) {
			LOGGER.debug("Both country objects are same - Singleton scope.");
		}
		else {
			LOGGER.debug("Different objects - Prototype scope.");
		}

		LOGGER.debug("Country: {}", country);
		LOGGER.info("End - displayCountry()");
	}

	public static void displayCountries() {
		LOGGER.info("Start - displayCountries()");

		ApplicationContext context = new ClassPathXmlApplicationContext("country.xml");

		List<Country> countries = context.getBean("countryList", List.class);
		LOGGER.debug("Countries: {}", countries);
		LOGGER.info("End - displayCountries()");
	}
}
