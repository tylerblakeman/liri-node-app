require("dotenv").config();
var keys = require("./keys.js")

var spotify = new Spotify(keys.spotify)
var axios = require("axios")
var 

var command = process.argv[2];
var input = process.argv[3]

// concert-this <artist/band name>

function concertSearch(x) {
    axios.get(`https://rest.bandsintown.com/artists/${x}/events?app_id=codingbootcamp`).then{
        function(response) {
            //printing 
            console.log(response)
        }
    }
}

// spotify-this-song <song name>


// movie-this <movie> ---- output the 
function movieThis(x)

//do-what-it-says ---- will take in the text of random.txt and execute a search for I want it that way
