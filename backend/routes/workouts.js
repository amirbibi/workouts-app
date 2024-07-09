import express from "express"

const router = express.Router();

// GET all
router.get("/", (req, res) => {
  res.json({ msg: "GET all workouts" });
})

// GET single
router.get("/:id", (req, res) => {
  res.json({ msg: "GET single" });
})

// POST
router.post("/", (req, res) => {
  res.json({ msg: "POST single" });
})

// DELETE
router.delete("/", (req, res) => {
  res.json({ msg: "DELETE single" });
})

// UPDATE
router.patch("/", (req, res) => {
  res.json({ msg: "UPDATE single" });
})

export default router;