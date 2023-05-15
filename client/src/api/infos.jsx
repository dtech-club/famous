import axios from "axios";

const options = {
  method: "GET",
  url: "https://deezerdevs-deezer.p.rapidapi.com/infos",
  headers: {
    "X-RapidAPI-Key": "62aa2a0579msh58beadf8792c27cp1ce806jsnb76df377eb4e",
    "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
  },
};

try {
  const response = await axios.request(options);
  console.log(response.data);
  const articles = response.data.articles;

  const newsList = document.getElementById("news-list");
  articles.forEach((article) => {
    const articleElement = document.createElement("li");
    articleElement.textContent = article.title;
    newsList.appendChild(articleElement);
  });
} catch (error) {
  console.error(error);
}

const infos = () => {
  return <div>infos</div>;
};

export default infos;
