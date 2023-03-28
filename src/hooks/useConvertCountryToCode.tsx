import { useParams } from "react-router";
import { DUMMY_COUNTRIES } from "../data/countriesData";

export const useConvertCountryToCode = () => {
  const { country } = useParams();

  const convertCountryToCode = () => {
    const countryData = DUMMY_COUNTRIES.find(
      (countryData) => countryData.name === country
    );
    return countryData?.code;
  };

  return { countryCode: convertCountryToCode() };
};
