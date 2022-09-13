const { body, validationResult } = require("express-validator");

const isValid = [
  body("name").trim().notEmpty().withMessage("상품이름을 입력해주세요."),
  body("userId")
    .trim()
    .notEmpty()
    .withMessage("유저id를 입력해주세요.")
    .isInt()
    .withMessage("유저id 확인이필요합니다."),
  body("price")
    .trim()
    .notEmpty()
    .withMessage("가격을 입력해주세요.")
    .isInt()
    .withMessage("가격 확인이필요합니다."),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ message: errors.array().map((e) => e.msg) });
    }
    next();
  },
];

module.exports = { isValid };
