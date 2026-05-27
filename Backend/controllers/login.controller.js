// lets import login services\
const loginService = require('../services/login.service');

async function logIn(req, resp, next) {
    const response = await loginService.logIn(req.body);
    console.log(response)
    if (response.status) {
        return resp.json({
            message: 'logged in successfully',
        })
    } else {
        return resp.json({
            message: 'login failed'
        })
    }

}
module.exports = { logIn }