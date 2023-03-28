import { DUMMY_COUNTRIES } from "../../../data/countriesData";
import { countryActions } from "../../../store";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store";

import { Link } from "react-router-dom";

type CountryMouseEvent = React.MouseEvent<HTMLLIElement, MouseEvent>;

export const CountriesList = () => {
  const dispatch = useDispatch();
  const country = useSelector((state: RootState) => state.country);

  const changeCountryHandler = (e: CountryMouseEvent) => {
    dispatch(
      countryActions.changeCountry({
        name: e.currentTarget.dataset.name!,
        code: e.currentTarget.dataset.code!,
      })
    );
  };

  return (
    <div className="hidden md:flex flex-col w-64 countries p-4 ">
      <h2 className="text-white text-2xl mb-4 font-bold">Wybierz Kraj</h2>
      <ul className="countries__list">
        {DUMMY_COUNTRIES.map(({ name, code }) => (
          <Link to={`/country/${name}`} state={{ code, name }} key={code}>
            <li
              data-code={code}
              data-name={name}
              className={`my-2 flex gap-2 items-center px-4 rounded-md hover:bg-green-500 cursor-pointer ${
                country.name === name && "bg-green-500"
              }`}
              onClick={changeCountryHandler}
            >
              <img
                src={`https://flagcdn.com/24x18/${code}.png`}
                width="24"
                height="18"
                alt="South Africa"
              />
              <p className="text-white  pointer-events-none">{name}</p>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};
