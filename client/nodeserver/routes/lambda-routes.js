// Use object de-structuring
const { Router } = require('express');
const { route } = require('express/lib/application');
const beamController = require('../controllers/beam-controller')
const { check, oneOf } = require('express-validator');
const { exec } = require("child_process");
const cors  = require('cors');
const { Http2ServerResponse } = require('http2');
// Buid a REST API with Node.js and Express.js
// https://restfulapi.net/
// https://www.smashingmagazine.com/2018/01/understanding-using-rest-api/
// https://www.edureka.co/blog/what-is-rest-api/
// HTTP response status codes
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
// 7 HTTP methods every web developer should know and how to test them
// https://assertible.com/blog/7-http-methods-every-web-developer-should-know-and-how-to-test-them

const router = Router();


// Buid a REST API with Node.js and Express.js
// https://restfulapi.net/
// https://www.smashingmagazine.com/2018/01/understanding-using-rest-api/
// https://www.edureka.co/blog/what-is-rest-api/
// HTTP response status codes
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
// 7 HTTP methods every web developer should know and how to test them
// https://assertible.com/blog/7-http-methods-every-web-developer-should-know-and-how-to-test-them
function lamb(){
    exec("docker run --rm -v /tmp/43556789705456847598:/var/task lambci/lambda:python3.7 lambda_function.lambda_handler", (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
    });
   return beamController.connect

}
router.get(
    '/', cors(),
    [
        // Validation chain: check()..trim().not().isEmpty().withMessage()
       
            check('key')
            .trim()
            .not()
            .isEmpty()
            .withMessage("Connection key is required")
    ],
    lamb()
);module.exports = router;