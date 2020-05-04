# liri-node-app

liri-node-app

Liri is a command line node application that uses multiple APIs to request information from OMDB, Spotify, and Bands in your town. Commands are entered as an argument while using liri.

  first you should navigate to the folder where you clone the repository, then enter ```node liri.js <command>```

There are 4 commands that work for Liri.

*  ```concert-this <band name>```
	this command will return the next concert that this band plays - or will advise if they have no concerts scheduled.
  **example:***
    user input without a song:
	```$ node liri.js concert-this```
	application returns:
	
*  ```spotify-this-song <song name>```
	this command will return Spotify information for a specific song - if no song is entered it will go with a default song - 'The Sign' by Ace of Base 
	**example:** 
	user input without a song: 
``` $ node liri.js spotify-this-song```
application returns:
```this is loaded```
```Artists: Ace of Base```
```Song Name: The Sign```
```Preview: https://p.scdn.co/mp3-preview/4c463359f67dd3546db7294d236dd0ae991882ff?cid=76be2d2bb9ab44c296023a69ffea0590```
```Album: The Sign```
	
user input with a song:
```node liri.js spotify-this-song money aint a thang```
application returns: 
```this is loaded```
```Artists: Jermaine Dupri```
```Song Name: Money Ain't a Thang (feat. Jay-Z)```
```Preview: https://p.scdn.co/mp3-preview/ebe800f26a02af4c0ac85a98b8869636cc5939d3?cid=76be2d2bb9ab44c296023a69ffea0590```
```Album: Life In 1472 (The Original Soundtrack)```
  

*  ```movie-this <movie name>```

  

*  ```do-what-it-says``` 