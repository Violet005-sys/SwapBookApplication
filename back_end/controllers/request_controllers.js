const Request = require("../models/requests");
const User = require("../models/user");
const Book = require("../models/book");
const { createBook } = require("../controllers/book_controllers");

// create a new request

const createRequest = async (req, res) => {
  const { title, author, genre, image, description } = req.body;

  const { id, username } = req.user;
  

  try {
    const user = await User.findById(id); // Validate userId
    if (!user) return res.status(404).send("User not found");

    const request = new Request({
      creator: id,
      username: username,
      title: title,
      author: author,
      genre: genre,
      image: image,
      description: description,
      status: "pending",
    });

    await request.save();
    res.status(201).send(request);

    console.log(`Request created by ${username} for book: ${title}`);
  } catch (error) {

    res.status(400).send(error.message);
    console.log(error.message);
  }
};

const requestToBook = async (req, res) => {
  try {
    await createBook();
    const updatedRequest = await Request.findByIdAndUpdate(
      req.params.requestId,
      { $set: { status: "fulfilled" } },
      { new: true }
    );

    if (!updatedRequest) {
      res.status(404).send("Request not found");
    }

    res.status(200).send(updatedRequest);
    console.log(`Request ${req.params.requestId} has been fulfilled`);
  } catch (error) {
    res.send({ error: error.message }).status(500);
  }
};

const getRequests = async(req, res) => {
  try {
    const requests = await Request.find({})

    res.status(200).send({count: requests.length, requests: requests});
  } catch (error) {
     res.status(500).send(error.message);
    console.log(error);
  }
};

const getRequest = async(req, res) => {
  const id = req.params.id;

  try {
    const existingRequest = await Request.findById(id);
    if(!existingRequest) res.status(404).send(`Request not found`);

    res.status(200).send(existingRequest);
  } catch (error) {
     res.status(500).send(error.message);
    console.log(error);
  }
};

const requestAdded = async (req, res) => {
  try {
    const requests = await Request.find({ creator: req.user.id });
    res.status(200).send(requests);
  } catch (error) {
    console.log(error);
    return res.status(500).send(error.message);
  }
};

const deleteRequest = async (req, res) => {
  const { id } = req.params;

  try {
    const book = await Request.findByIdAndDelete(id);
    if (!book)
      return res.status(404).send({ message: `Request with id ${id} not found` });

    res.send({ message: `Request with id ${id} deleted` }).status(200);
  } catch (error) {
    res.send({ error: error.message }).status(500);
  }
};

const updateRequest = async (req, res) => {
  const { id } = req.params;
  //gets updated fields from body
  const updateFields = req.body;
  console.log(updateFields);

  try {
    const existingRequest = await Request.findById(id);
    if (!existingRequest) {
      console.log(`Request with id ${id} not found`);
      return res.status(404).send({ error: "Request not found" });
    }

    const request = await Request.findByIdAndUpdate(id, { ...updateFields }, { new: true });

    res.status(200).send(request);
    
  } catch (error) {
    console.log(error);
    return res.send({ error: error.message }).status(500);
  }
};


module.exports = { createRequest, requestToBook, getRequest, getRequests,requestAdded, deleteRequest, updateRequest };