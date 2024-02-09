import express from "express";
import send_reservation from "../controller/reservation.js";

const router = express.Router();

router.post("/send", send_reservation);
router.get("/", (req, res) => {
  res.send("hello");
});

export default router;
