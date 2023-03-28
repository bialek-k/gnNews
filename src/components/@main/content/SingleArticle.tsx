interface SingleArticle {
  source: string;
  author: string | null;
  title: string;
  description: string | null;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string | null;
  viewList: "list" | "grid";
  handleClick: () => void;
}

export const SingleArticle = ({
  title,
  author,
  source,
  publishedAt,
  urlToImage,
  viewList,
  handleClick,
}: SingleArticle) => {
  const date = new Date(publishedAt);

  const formatedDate = date.toLocaleDateString("pl-PL", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    timeZone: "UTC",
  });

  if (viewList === "list") {
    return (
      <div
        onClick={() => handleClick()}
        className="wrapper hover:scale-[1.01] duration-100 w-full flex flex-col border border-bg-neutral-100 shadow-md rounded-md hover:bg-neutral-100"
      >
        <div className="content flex flex-col md:flex-row gap-2">
          <div className="image object-cover md:w-80">
            <img
              src={urlToImage}
              className={`rounded-tl-md rounded-bl-md  h-full object-cover shadow-md`}
            />
          </div>
          <div className="description flex px-2 flex-col justify-between w-full">
            <h1 className="font-bold mb-12 uppercase md:text-xl">{title}</h1>
            <div className="info text-xs text-neutral-500 mb-2">
              {author && (
                <p>
                  autor:<strong> {author}</strong>
                </p>
              )}
              <p>
                źródło:<strong> {source}</strong>
              </p>
              <p>
                opublikowano:<strong> {formatedDate}</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      onClick={() => handleClick()}
      className="wrapper hover:scale-[1.01] duration-100 w-full flex flex-col border border-bg-neutral-100 shadow-md rounded-md hover:bg-neutral-100"
    >
      <div className="content flex flex-col h-full gap-2">
        <div className="image object-cover">
          <img
            src={urlToImage}
            className={`rounded-tl-md rounded-tr-md   h-full object-cover shadow-md`}
          />
        </div>
        <div className="description flex px-2 flex-col justify-between h-full w-full">
          <h1 className="font-bold mb-12 uppercase md:text-xl">{title}</h1>
          <div className="info text-xs text-neutral-500 mb-2">
            <p>
              autor:<strong> {author}</strong>
            </p>
            <p>
              źródło:<strong> {source}</strong>
            </p>
            <p>
              opublikowano:<strong> {publishedAt}</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
