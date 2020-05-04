<div align ="center"><h1>liri-node-app</h1></div>

Liri is a command line node application that uses multiple APIs to request information from OMDB, Spotify, and Bands in your town. Commands are entered as an argument while using liri.\s\s

## Table of Contents



[**Installation**](#installation)

[**Liri Commands**](#commands)
  * [**```concert-this```**](#```concert-this```)
  * [**```spotify-this-song```**](#```spotify-this-song```)
  * [**```movie-this```**](#```movie-this```)
  * [**```do-what-it-says```**](#```do-what-it-says```)


**Additional Info**
  * [**APIs Used**](#unstable-file-paths)


## Liri Commands
There are 4 commands that work for Liri. 
* ```concert-this```**```<artist/band name>```**
* ```spotify-this-song```**```<song name>```**
* ```movie-this```**```<movie name>```**
* ```do-what-it-says```

## Command Usage #
After navigating to the folder where liri has been cloned you can enter ```node liri.js <command>```

###  ```concert-this``` ###

This command will return the next concert that this band plays - or will advise if they have no concerts scheduled.<br>

**example:**<br>
user input without a song:  
<br>
```$ node liri.js concert-this```<br>
<br>
application returns:

### ```spotify-this-song``` ###

this command will return Spotify information for a specific song - if no song is entered it will go with a default song - 'The Sign' by Ace of Base <br>

**example:** <br>

user input without a song: <br>

    $ node liri.js spotify-this-song

application returns:<br>

    this is loaded
    Artists: Ace of Base
    Song Name: The Sign
    Preview: https://p.scdn.co/mp3-preview/4c463359f67dd3546db7294d236dd0ae991882ff?cid=76be2d2bb9ab44c296023a69ffea0590
    Album: The Sign
    
**user input with a song:**<br>

```node liri.js spotify-this-song money aint a thang```<br>

application returns: <br>
```this is loaded```<br>
```Artists: Jermaine Dupri```<br>
```Song Name: Money Ain't a Thang (feat. Jay-Z)```<br>
```Preview: https://p.scdn.co/mp3-preview/ebe800f26a02af4c0ac85a98b8869636cc5939d3?cid=76be2d2bb9ab44c296023a69ffea0590```<br>
```Album: Life In 1472 (The Original Soundtrack)```<br>


*  ```movie-this <movie name>```<br>



*  ```do-what-it-says``` <br>