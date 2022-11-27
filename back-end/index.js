import express from "express";
import "./utils/mongoose.js";
import { Text } from "./schema/Text.js";
import bodyParser from "body-parser";
import cors from "cors";
import { Category } from "./schema/Category.js";

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  // return "hello world";
  res.send("Hello World!");
});

app.post("/category", async (req, res) => {
  try {
    const { name } = req.body;
    const category = await Category.create({ name });
    return res.send({ data: category });
  } catch (err) {
    return res.status(400).send({ status: "Error", message: err.message });
  }
});

app.delete("/categories/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Category.deleteOne({ _id: id });
    return res.send({ result });
  } catch (err) {
    return res.status(400).send({ status: "Error", message: err.message });
  }
});

app.get("/categories", async (req, res) => {
  try {
    const categories = await Category.find();
    return res.send({ data: categories });
  } catch (err) {
    return res.status(400).send({ status: "Error", message: err.message });
  }
});

app.post("/", async (req, res) => {
  try {
    const { text, category } = req.body;
    const newText = await Text.create({ text, category });
    return res.send({ data: newText });
  } catch (err) {
    console.log(err);
    return res.status(400).send({ status: "Error", message: err.message });
  }
});

app.get("/list", async (req, res) => {
  try {
    const lists = await Text.find();
    return res.send({ data: lists });
  } catch (err) {
    console.log(err);
    return res.status(400).send({ status: "Error", message: err.message });
  }
});

app.get("/list/:category", async (req, res) => {
  try {
    const { category } = req.params;
    const lists = await Text.find({ category });
    return res.send({ data: lists });
  } catch (err) {
    console.log(err);
    return res.status(400).send({ status: "Error", message: err.message });
  }
});

app.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedText = await Text.deleteOne({ _id: id });
    return res.send(deletedText);
  } catch (err) {
    console.log(err);
    return res.status(400).send({ status: "Error", message: err.message });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
