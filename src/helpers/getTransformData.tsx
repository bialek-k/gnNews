interface ArticleSource {
  id: string;
  name: string;
}

interface Article {
  source: ArticleSource;
  author: string | null;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}

interface ResponseDataTypes {
  status: string;
  totalResults: number;
  articles: Article[];
}

export const getTransformResponse = () => {
  const getData = async (response: ResponseDataTypes) => {
    const responseData = await response;
    responseData.articles = responseData.articles.map((article) => {
      const randomImage = Math.floor(Math.random() * 1000);
      if (article.urlToImage === null) {
        article.urlToImage = `https://picsum.photos/600/375?random=${randomImage}`;
      }
      return article;
    });
    return responseData;
  };
  return getData;
};
