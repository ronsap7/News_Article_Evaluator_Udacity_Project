const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const axios = require("axios");
const mockApi = require("./mockApi");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", express.static("dist"));

app.post("/evaluate", async (req, res) => {
  const { text } = req.body;

  try {
    const response = await axios.post(
      `https://api.meaningcloud.com/sentiment-2.1?key=${process.env.MEANINGCLOUD_API_KEY}&lang=en&txt=${encodeURIComponent(
        text
      )}`
    );

    console.log(response.data); // add this line to check response data

    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error processing the request" });
  }
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});