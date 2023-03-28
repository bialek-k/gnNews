import React, { useState } from "react";

import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import { SingleArticle } from "./SingleArticle";
import { Article } from "./Article";

interface ArticleListProps {
  displayData:
    | undefined
    | {
        status: string;
        totalResults: number;
        articles: {
          title: string;
          author: string | null;
          source: {
            name: string;
          };
          publishedAt: string;
          urlToImage: string;
          description: string | null;
          content: string | null;
          url: string;
        }[];
      };
  isSuccess: boolean;
}

interface handleClickProps {
  title: string;
  author: string | null;
  urlToImage: string;
  content: string | null;
  description: string | null;
  url: string;
}

const ArticleList = ({ displayData, isSuccess }: ArticleListProps) => {
  const { view } = useSelector((state: RootState) => state.view);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({});

  const handleClick = ({
    title,
    author,
    urlToImage,
    content,
    description,
    url,
  }: handleClickProps) => {
    setModalContent({ title, author, urlToImage, content, description, url });
    setIsModalOpen(true);
  };

  const handleClose = () => {
    setIsModalOpen(false);
  };

  if (isSuccess) {
    return (
      <div
        className={
          view === "list"
            ? "flex flex-col gap-6 px-4 w-content md:px-12"
            : "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-3 md:px-12"
        }
      >
        {displayData?.articles.map(
          ({
            title,
            author,
            source,
            publishedAt,
            urlToImage,
            description,
            content,
            url,
          }) => (
            <SingleArticle
              key={title}
              title={title}
              description={description}
              url={url}
              content={content}
              author={author}
              source={source.name}
              publishedAt={publishedAt}
              urlToImage={urlToImage}
              viewList={view}
              handleClick={() =>
                handleClick({
                  title,
                  author,
                  urlToImage,
                  content,
                  description,
                  url,
                })
              }
            />
          )
        )}
        {isModalOpen && (
          <Article
            handleClose={handleClose}
            open={isModalOpen}
            data={modalContent}
          />
        )}
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center ">
      <p className="text-3xl font-bold">Tu powinien być loader 🙃</p>
    </div>
  );
};

export default ArticleList;
