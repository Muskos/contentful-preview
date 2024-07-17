import express from "express";
const app = express();

app.get("*", (req, res) => {
  res.send(JSON.stringify(req.params));
});

app.listen(3001, () => console.log("Server ready on port 3000."));

export default app;
