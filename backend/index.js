const express = require("express");
const cors = require("cors");

const { getMessaging } = require("firebase-admin/messaging");
require("./firebase");

const app = express();
app.use(cors());
app.use(express.json());

/**
 * example payload will be
 * {
 *      "userToken":"TOKEN_THAT_GET_FROM_REQUEST_PERMISSION_FRONTEND",
 *        "message":"Hello World or something"
 *  }
 */

app.post("/api/test", (req, res) => {
  const payload = req.body;
  const token = payload.token;
  const message = payload.message;
  const messagePayload = {
    notification: {
      title: "Hi",
      body: message,
    },
    token: token,
  };

  getMessaging()
    .send(messagePayload)
    .then((res) => {
      console.log("Message sent successfully", res);
      return res.status(200).json({ message: "Message sent successfully" });
    })
    .catch((err) => {
      console.log("Error sending message", err);
      return res.status(500).json({ error: "Error sending message" });
    });
});

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
