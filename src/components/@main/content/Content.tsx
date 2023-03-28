import ArticleList from "./ArticleList";
import { newsApi } from "../../../api/newsApi";
import { useParams } from "react-router-dom";
import { MobileCountries } from "../sidebar/MobileCountries";

import { useConvertCountryToCode } from "../../../hooks/useConvertCountryToCode";

export const Content = () => {
  const { country } = useParams();
  const { countryCode } = useConvertCountryToCode();

  const useGetArticlesConditionalQuery = country
    ? newsApi.useGetArticleByCountryQuery(countryCode)
    : newsApi.useGetArticleBySearchQuery("React.js");

  const { data, isSuccess } = useGetArticlesConditionalQuery;

  return (
    <div className="py-12 md:w-3/4">
      <div className="title text-center mb-12 px-4">
        {country ? (
          <h1 className="text-3xl font-bold ">
            Najciekawsze artykuły w{" "}
            <strong className="text-green-500">{country}</strong>
          </h1>
        ) : (
          <h1 className="text-3xl font-bold ">
            Nowości na temat:{" "}
            <strong className="text-green-500">React.js</strong>
          </h1>
        )}
      </div>
      <div className="md:hidden mobileCountries mb-12 px-4">
        <MobileCountries />
      </div>
      <ArticleList displayData={data} isSuccess={isSuccess} />
    </div>
  );
};
