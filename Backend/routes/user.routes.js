const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const userController = require("../controllers/user.controller");
const authMiddleware = require("../middlewares/auth.middleware");



router.post(
  "/register",
  [
    body("email").isEmail().withMessage("Invalid Email"),
    body("fullname.firstname")
      .isLength({ min: 3 })
      .withMessage("First name must be at least 3 characters long"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters long"),
  ],
  userController.registerUser
);

router.post(
  "/login",
  [
    body("email").isEmail().withMessage("Invalid Email"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters long"),
  ],
  userController.loginUser
);

router.get('/profile', authMiddleware.authUser, userController.getUserProfile);

router.get("/logout", authMiddleware.authUser, userController.logoutUser);

module.exports = router;
\resumeProjectHeading
          {\textbf{Students'  Marks Allocation System} \href{https://github.com/Lakshit-223/Marks-Allocation-System}{\faGithub{}}}{Apr 2024 - Sep 2024}
          \vspace{-8pt}
          \resumeItemListStart
            \resumeItem{\textbf{Tools/Framework:} Django, SQLite, Twilio, Tailwind CSS.}
            \resumeItem{Built an Academic Evaluation Portal for NITK, handling 1000+ student entries and ensuring seamless faculty submissions with accurate data.}
            \resumeItem{Designed an auditing process to address and resolve key issues in submission workflows.}
            \resumeItem{Implemented reCAPTCHA, OTP verification, and instant email notifications for user login.}
          \resumeItemListEnd 
          \vspace{-8pt}