import { useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { useDispatch } from "react-redux";

import Select, { SelectChangeEvent } from "@mui/material/Select";

import { DUMMY_COUNTRIES } from "../../../data/countriesData";
import { Link } from "react-router-dom";

export const MobileCountries = () => {
  const [displayCountry, setDisplayCountry] = useState("us");
  const dispatch = useDispatch();

  const handleChange = (event: SelectChangeEvent) => {
    setDisplayCountry(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Wybierz kraj</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={displayCountry}
          label="Wybierz kraj"
          onChange={handleChange}
        >
          {DUMMY_COUNTRIES.map(({ name, code }) => {
            return (
              <MenuItem
                key={code}
                data-name={name}
                value={code}
                className="pointer-events-auto "
              >
                <Link
                  to={`/country/${name}`}
                  state={{ code, name }}
                  className="w-full"
                >
                  <div className="flex gap-3 w-full pointer-events-auto">
                    <img
                      src={`https://flagcdn.com/24x18/${code}.png`}
                      width="24"
                      height="18"
                    />
                    <p>{name}</p>
                  </div>
                </Link>
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </Box>
  );
};
