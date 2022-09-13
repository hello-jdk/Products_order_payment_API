const { body, validationResult } = require("express-validator");

const isValid = [
  body("name").trim().notEmpty().withMessage("이름을 입력해주세요."),
  body("grade")
    .trim()
    .notEmpty()
    .withMessage("권한을 입력해주세요.")
    .isInt()
    .withMessage("권한의 입력값 확인이필요합니다."),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ message: errors.array().map((e) => e.msg) });
    }
    next();
  },
];

module.exports = { isValid };
