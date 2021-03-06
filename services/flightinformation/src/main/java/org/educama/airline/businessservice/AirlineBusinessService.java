package org.educama.airline.businessservice;

import org.educama.airline.datafeed.AirlineCsvDeserializer;
import org.educama.airline.model.Airline;
import org.educama.airline.repository.AirlineRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Component;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Collections;
import java.util.List;

/**
 * Service class for airlines.
 */
@Component
public class AirlineBusinessService {

    private AirlineRepository airlineRepository;

    private AirlineCsvDeserializer airlineCsvDeserializer;

    protected static final int MAX_SUGGESTIONS = 10;

    @Autowired
    public AirlineBusinessService(AirlineRepository airlineRepository, AirlineCsvDeserializer airlineCsvDeserializer) {
        this.airlineRepository = airlineRepository;
        this.airlineCsvDeserializer = airlineCsvDeserializer;
    }

    public Page<Airline> findAllAirlines(Pageable pageable) {
        return airlineRepository.findAll(pageable);
    }

    public List<Airline> findAirlinesByIataCode(String iataCode) {
        if (StringUtils.isEmpty(iataCode)) {
            return Collections.emptyList();
        }
        return airlineRepository.findByIataCodeIgnoreCase(iataCode);
    }

    public List<Airline> findAirlinesByIcaoCode(String icaoCode) {
        if (StringUtils.isEmpty(icaoCode)) {
            return Collections.emptyList();
        }
        return airlineRepository.findByIcaoCodeIgnoreCase(icaoCode);
    }

    public List<Airline> findAirlineSuggestionsBySearchTerm(String term) {
        if (StringUtils.isEmpty(term)) {
            return Collections.emptyList();
        }

        return airlineRepository.findBySearchTerm(term);
    }

    public void clearAndImportAirlines(MultipartFile file) throws IOException {
        List<Airline> airlines = airlineCsvDeserializer.deserialize(file.getInputStream());

        airlineRepository.deleteAll();
        airlineRepository.save(airlines);
    }

}
