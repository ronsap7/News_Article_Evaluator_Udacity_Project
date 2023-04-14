import "../styles/base.scss";
import "../styles/footer.scss";
import "../styles/form.scss";
import "../styles/header.scss";
import "../styles/main.scss";

import { handleSubmit } from "./formHandler";

window.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("evaluate-form");

  form.addEventListener("submit", handleSubmit);
});