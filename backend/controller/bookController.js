import booking from "../model/bookModel.js";

export const displayAll = async (req, res) => {
  try {
    const book = await booking.find();
    if (!book || book.length === 0) {
      return res
        .status(404)
        .json({ message: "No bookings found", color: "red" });
    }
    return res.status(200).json(book);
  } catch (error) {
    console.log("Error in displayAll backend:", error.message);
    return res.status(500).json({ message: "Server error", color: "red" });
  }
};

export const getEmail = async (req, res) => {
  try {
    const { email } = req.params;
    const rooms = await booking.find({ email });
    if (rooms.length === -1) {
      return res
        .status(200)
        .json({ message: "No booking found", color: "red" });
    }
    return res.status(200).json(rooms);
  } catch (error) {
     console.log("Error in getEmail backend:", error.message);
    return res.status(500).json({ message: "Server error", color: "red" });
  }
};

export const bookRoom = async (req, res) => {
  try {
    const { email, name, num, duration } = req.body;

    if (!email || !name || !num || !duration) {
      return res
        .status(200)
        .json({ message: "All fields are required", color: "red" });
    }

    let cost = 0;
    if (duration === "day") cost = num * 2000;
    else if (duration === "hour") cost = num * 300;

    if (cost > 4000) cost = cost - cost * 0.1;

    const newRoom = await booking.create({ email, name, num, duration, cost });

    return res
      .status(201)
      .json({ message: "Room booked successfully", cost, color: "green" });
  } catch (error) {
    console.log("Error in bookRoom backend:", error.message);
    return res.status(500).json({ message: "Server error", color: "red" });
  }
};
