require("dotenv").config();
const express = require("express");

//mongoose connection
const connectDB = require("./connection");

const userModel = require("./user");

const app = express();

//configuration
app.use(express.json());

//route/
//description: to get all user
//parameter: none
app.get("/", async (req, res) => {
  try {
    const user = await userModel.find();
    return res.json({ user });
  } catch {
    return res.status(500).json({ error: error.message });
  }
});

app.get("/user/type/:type", async (req, res) => {
  try {
    const { type } = req.params;

    const user = await userModel.find({ userType: type });

    if (!user) {
      return res.json({ message: "No user found" });
    }
    return res.json({ user });
  } catch {
    return res.status(500).json({ error: error.message });
  }
});

app.get("/user/:id", async (req, res) => {
  try {
    const { _id } = req.params;
    const user = await userModel.findById(_id);

    if (!user) {
      return res.json({ message: "No user found" });
    }
    return res.json({ user });
  } catch {
    return res.status(500).json({ error: error.message });
  }
});

// app.post("/user/:id", (req, res) => {
//   return res.json(req.params);
// });

//route://user/new
//description: to add new user
//parameter: none
//request body : user object

app.post("/user/new", async (req, res) => {
  try {
    const { newUser } = req.body;

    await userModel.create(newUser);

    return res.json({ message: "User created" });
  } catch {
    return res.status(500).json({ error: error.message });
  }
});

app.put("/user/update/:id", async (req, res) => {
  try {
    const { _id } = req.params;
    const { userData } = req.body;

    const updateUser = await userModel.findByIdAndUpdate(
      _id,
      { $set: userData },
      { new: true }
    );

    return res.json({ user: updateUser });
  } catch {
    return res.status(500).json({ error: error.message });
  }
});

app.delete("/user/delete/:id", async (req, res) => {
  try {
    const { _id } = req.params;

    await userModel.findByIdAndDelete(_id);

    return res.json({ message: "User deleted" });
  } catch {
    return res.status(500).json({ error: error.message });
  }
});

app.delete("/user/delete/type/:userType", async (req, res) => {
  try {
    const { userType } = req.params;

    const allUser = await userModel.findOneAndDelete({ userType });

    await userModel.findand;

    return res.json({ message: "User deleted" });
  } catch {
    return res.status(500).json({ error: error.message });
  }
});

app.listen(4000, () =>
  connectDB()
    .then((data) => console.log("Server is running", data))
    .catch((error) => console.log(error))
);

//route://user/update/:id
//description: to add new user
//parameter: _id
//request body : user object
