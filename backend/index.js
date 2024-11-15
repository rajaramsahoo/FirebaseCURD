import express from "express";
import { dbConnect } from "./utils/dbConnect.js";
import userRoutes from "./routes/userRoutes.js"
const app = express();

const PORT = 3001; // Define the port for the server
dbConnect();
// Middleware to parse incoming JSON requests
app.use(express.json());
app.use("/api/v1/user", userRoutes);
// Set up a basic route
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
