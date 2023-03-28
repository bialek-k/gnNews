import { useState } from "react";
import Logo from "../../assets/logo.png";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { ViewList } from "./viewList/ViewList";
import { Link } from "react-router-dom";
import { Information } from "./viewList/Information";

export const Header = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="header bg-neutral-800">
      <div className="mx-auto flex flex-col gap-3 md:flex-row justify-between items-center p-4 ">
        <Link to="/" state={{ code: "us", name: "United States" }}>
          <div className="logo">
            <img src={Logo} className="w-48 aspect-auto" />
          </div>
        </Link>
        <ViewList />
        <div className="action">
          <Button
            color="success"
            className="w-full"
            variant="contained"
            onClick={handleOpen}
          >
            Ciekawostki
          </Button>
        </div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="child-modal-title"
          aria-describedby="child-modal-description"
          className="relative w-full h-full flex justify-center items-center "
        >
          <Box className=" md:w-1/2 mx-12  bg-white border rounded-lg shadow-lg">
            <div className="content flex flex-col overflow-y-scroll p-4 md:p-6 h-96 ">
              <Information />
              <div className="action mt-6">
                <Button
                  color="success"
                  className="w-full"
                  variant="contained"
                  onClick={handleClose}
                >
                  Zamknij
                </Button>
              </div>
            </div>
          </Box>
        </Modal>
      </div>
    </div>
  );
};
