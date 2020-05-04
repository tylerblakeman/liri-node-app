require("dotenv").config();

var fs = require("fs");
var keys = require("./keys.js")
var axios = require("axios");
var moment = require("moment");
var dotenv = require("dotenv");
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);
var request = process.argv[2]
var input
var message;

if (process.argv[3] !== undefined){
    input = (process.argv.slice(3));
}

requests()

//added switch to a function to make it easier for do what it says 
function requests() {
    switch (request) {
        case 'concert-this':
            if (input === undefined){
            //checking if input is invalid - giving the user visual feedback
            message = 'you have not entered a band name'
            logging()
            return console.error(message) 
            }
            else {
            input = input.join('+')
            concertSearch(input);
            }
            break;
        case 'spotify-this-song':
            if (input === undefined){
                spotifySong('The Sign')
            }
            else {
                if (typeof(input) === 'string') {
                    spotifySong(input)
                }
                else {
                    input = input.join('+')
                    spotifySong(input)
                    }
                }
            break;
        case 'movie-this':
            if (input === undefined){
                movieSearch('Mr. Nobody')
            }
            else {
                // console.log(`Movie ${input}`)
                input = input.join('+');
                movieSearch(input);
            }
            break;
        case 'do-what-it-says':
            //do-what-it-says ---- will take in the text of random.txt and execute a search for I want it that way
            //reading the random file and putting into an array
            fs.readFile("random.txt", "utf8", function(error, data) {
                if (error) {
                    message = error;
                    return logging;
                }
                else {
                var dataArr = data.split(",")
                input = dataArr[1];
                request = dataArr[0];
                console.log(request, input)
                //checking the request and input - this can be commented in if needed
                // console.error(`this is the new input ${input}`)
                // console.error(`this is the new request ${request}`)
                requests()
                };
            });
    }
}


// concert-this <artist/band name>

function concertSearch(x){
    axios.get(`https://rest.bandsintown.com/artists/${x}/events?app_id=codingbootcamp`).then(function(response){
        if (response.data[0] !== undefined){
            message = `Venue Name: ${response.data[0].venue.name}\nVenue City: ${response.data[0].venue.city}\nVenue Country: ${response.data[0].venue.country}\nDate: ${moment(response.data[0].datetime).format("MM/D/YYYY")}`
            console.log(message)
            logging()

            // console.log(response.data[0].venue.city)
            // console.log(response.data[0].venue.country)
            // console.log(moment(response.data[0].datetime).format("MM/D/YYYY"))
    }
    //bands with no results will display the no shows console.log
    else {
        message = 'This artist has no shows scheduled';
        console.log(message)
        logging();
    }
    })
    .catch(function(error){
        message = error;
        logging();
    })    
};

// spotify-this-song <song-name>
function spotifySong(x) {
    spotify
  .search({ type: 'track', query: x})
  .then(function(response) {
    message = `Artists: ${response.tracks.items[0].artists[0].name}\nSong Name: ${response.tracks.items[0].name}\nPreview: ${response.tracks.items[0].preview_url}\nAlbum: ${response.tracks.items[0].album.name}`;
    console.log(message);
    logging()

    // console.log(`Song Name: ${response.tracks.items[0].name}`);
    // console.log(`Preview: ${response.tracks.items[0].preview_url}`);
    // console.log(`Album: ${response.tracks.items[0].album.name}`);

  })
  .catch(function(err) {
    return console.log(`error${err}`);
  });
}

// movie-this <movie>
function movieSearch(x) {
    // console.log(x)
    // Then run a request with axios to the OMDB API with the movie specified
    var queryUrl = `http://www.omdbapi.com/?t=${x}&y=&plot=short&apikey=trilogy`;

    // This line is just to help us debug against the actual URL.
    // console.log(queryUrl);

    axios.get(queryUrl).then(
    function(response) {
        // console.log(response.data)
        message = `Title: ${response.data.Title}\nYear: ${response.data.Year}\nIMDB Rating: ${response.data.Ratings[0].Value}\nRotten Tomatoes Rating: ${response.data.Ratings[1].Value}\nProduction Country: ${response.data.Country}\nLanguage: ${response.data.Language}\nPlot: ${response.data.Plot}\nActors: ${response.data.Actors}`;
        console.log(message)
        logging()
    })
    .catch(function(error) {
        if (error.response) {
            message = `---------------Data---------------\n${response.data}\n---------------Status---------------\n${error.response.status}\n---------------Status---------------\n${error.response.headers}`;
            console.error(message);
            logging()
        } else if (error.request) {
            message = error.request;
            console.error(message);
            logging();
        } else {
            message = `Error ${error.message}`;
            logging()
        }
            message = error.config;
            logging()
    });

}

function logging(x) {
    fs.appendFile("./log.txt", `\r${moment()}\r${process.argv.slice(2).join(" ")}\r${message}`, function(err) {

        // If an error was experienced we will log it.
        if (err) {
          console.log(err);
        }
      
        // If no error is experienced, we'll log the phrase "Content Added" to our node console.
        else {
          console.log("Content added to log");
        }
      
      });
}

