import axios from "axios";
// https://restcountries.eu/

const url = "https://restcountries.eu/rest/v2/";

export const fetchAllCountries = () =>
  axios.get(`${url}all`, {
    params: { format: "json" },
  });
