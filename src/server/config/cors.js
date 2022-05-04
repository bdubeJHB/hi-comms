module.exports = () => {
    return function(request, response, next) {
        response.header("Access-Control-Allow-Origin", "*");
        response.header("Access-Control-Allow-Headers", "X-Requested-With");
        next();
    };
}