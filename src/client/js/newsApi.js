import { handleSubmit } from "./formHandler";

window.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("evaluate-form");

  form.addEventListener("submit", handleSubmit);
});

function getNews(query) {
  const API_KEY = process.env.NEWS_API_KEY;

  return fetch(`https://newsapi.org/v2/everything?q=${encodeURIComponent(query)}&apiKey=${API_KEY}`)
    .then(response => response.json())
    .then(data => {
      if (data.status === 'ok' && data.articles.length > 0) {
        return data.articles[0];
      } else {
        throw new Error('Could not retrieve news article');
      }
    });
}