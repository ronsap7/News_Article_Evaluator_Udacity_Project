import { evaluateText } from "./sentimentApi";

export async function handleSubmit(event) {
  event.preventDefault();
  const text = document.getElementById("text").value;

  try {
    const response = await evaluateText(text);
    console.log(response); // add this line to check response data

    const resultBox = document.getElementById("result");

    if (response) {
      resultBox.innerHTML = `
        <p>Score tag: ${response.score_tag}</p>
        <p>Agreement: ${response.agreement}</p>
        <p>Subjectivity: ${response.subjectivity}</p>
        <p>Confidence: ${response.confidence}</p>
        <p>Irony: ${response.irony}</p>
      `;
    } else {
      resultBox.innerHTML = "<p>Error evaluating the text. Please try again.</p>";
    }
  } catch (error) {
    console.error(error);
    resultBox.innerHTML = "<p>Error evaluating the text. Please try again.</p>";
  }
}