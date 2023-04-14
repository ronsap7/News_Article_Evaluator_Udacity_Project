import axios from "axios";

export async function evaluateText(text) {
  try {
    const response = await axios.post("http://localhost:8080/evaluate", { text });
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
}