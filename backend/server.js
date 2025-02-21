require("dotenv").config();

const cors = require("cors");

const http = require("http");
const app = require("./app-server.cjs");

const PORT = process.env.PORT || 8004;

const server = app.listen(PORT, () => {
  console.log(`API Listening on port ${PORT}`);
});

app.use(cors());
