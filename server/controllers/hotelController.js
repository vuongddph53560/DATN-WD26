import Hotel from "../models/Hotel.js";

export const registerHotel = async (req, res) => {
  try {
    // get Clerk userId
    const userId = req.auth.userId;
    if (!userId) {
      return res.status(401).json({ success: false, message: "Not authenticated" });
    }

    const { name, address, contact, city } = req.body;

    const hotel = await Hotel.create({
      name,
      address,
      contact,
      city,
      owner: userId, // Clerk userId
    });

    return res.json({
      success: true,
      message: "Hotel registered successfully",
      hotel
    });

  } catch (err) {
    console.log("Hotel register error:", err);
    return res.status(500).json({ success: false, message: "Server error" });
  }
};
