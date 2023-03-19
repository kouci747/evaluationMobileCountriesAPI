import axios from 'axios';

export const getAllCountries = async () => {
  try {
    const response = await axios.get('https://restcountries.com/v3.1/all');
    const countryData = response.data.map(country => ({
      name: country.name.common,
      capital: country.capital,
      flag: country.flags && country.flags.png,
      population: country.population,
      latitude: country.latlng && country.latlng[0],
      longitude: country.latlng && country.latlng[1],
      capitalLat:
        country.capitalInfo &&
        country.capitalInfo.latlng &&
        country.capitalInfo.latlng[0],
      capitalLong:
        country.capitalInfo &&
        country.capitalInfo.latlng &&
        country.capitalInfo.latlng[1],
    }));

    const sortedCountries = countryData.sort((a, b) =>
      a.name.localeCompare(b.name),
    );
    return sortedCountries;
  } catch (error) {
    console.log(error);
    return [];
  }
};
