import { Button, Modal, Box } from "@mui/material";

interface Article {
  open: boolean;
  handleClose: () => void;
  data: any;
}

export const Article = ({ open, handleClose, data }: Article) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="child-modal-title"
      aria-describedby="child-modal-description"
      className="mx-4"
    >
      <Box className="absolute md:w-1/2 w-full overflow-hidden top-[15%] left-[50%] -translate-x-2/4 translate-y-2/6 bg-white border rounded-lg shadow-lg">
        <div className="content flex flex-col p-4 md:p-6 ">
          <div className="image h-64 w-full mb-3">
            <img
              src={data.urlToImage}
              className="rounded-md object-cover w-full h-full shadow-md"
            />
          </div>
          <h1 id="child-modal-title" className="font-bold text-2xl mb-6">
            {data.title}
          </h1>
          {data.author && (
            <p className="text-sm text-neutral-400 mb-3">
              autor: {data.author}
            </p>
          )}
          {data.content && <p className="mb-6">{data.content}</p>}
          {data.url && (
            <>
              <p>Więcej czytaj u źródła: </p>
              <a
                target="_blank"
                href={data.url}
                className="text-blue-600 truncate"
              >
                {data.url}
              </a>
            </>
          )}
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
  );
};
