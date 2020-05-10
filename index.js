let express = require("express");
let app = express();

// Middleware
let bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false})); 

let path = require("path");

app.use(express.static(path.join(__dirname, '/')));

app.set('port', 3000); // Set the port to 3000

// Connect to index.html
app.get('/', (request, response) => {
    response.sendFile(__dirname + 'index.html');
});

// Get game data from games.json
var games = require("./games.json");

// Send JSON data to this URL
app.get("/games", (request, response) => {
    response.send(games);
    response.json(games)
});

// Listen for requests on port 3000
app.listen(app.get('port'), () => {
    console.log('Node.js/Express is listening on port ' + app.get('port'));
});
