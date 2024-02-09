const express = require("express");
const router = express.Router();
const {getContact} = require("../controllers/contactControllers");
const {getContacts} = require("../controllers/contactControllers");
const {createContact} = require("../controllers/contactControllers");
const {updateContact} = require("../controllers/contactControllers");
const {deleteContact} = require("../controllers/contactControllers");

router.route("/").get(getContact);
router.route("/").get(getContacts);
router.route("/").get(createContact);
router.route("/").get(updateContact);
router.route("/").get(deleteContact);

router.route("/").get(getContacts).post(createContact);


router.route("/:id").get(getContact).put(updateContact).delete(deleteContact);

module.exports = router;