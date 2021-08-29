// - Create a variable `collection` that starts as an empty array.
let collection  = [];
// DEFINE ARRAY TO HOLD TRACKS UNTIL PUSHED INTO ALBUM OBJECTS
let tracksArray = [];
/*- Add a function named `addToCollection`. This function should:
  - Take in the album's `title`, `artist`, `yearPublished` as input parameters
  - Create a new object having the above properties
  - Add the new object to the end of the `collection` array
  - Return the newly created object
*/
function addToCollection (title, artist, yearPublished ){
    let newAlbum = {
        albumTitle: title,
        albumAtist: artist,
        albumYear: Number(yearPublished),
        albumTracks: tracksArray
    } // end newAlbum object
    collection.push(newAlbum);
    return newAlbum;
} // end addToCollection function

/*- Test the `addToCollection` function:
Add 6 albums to your collection. Aim to have a mix of both same and different artists and published years. (Feel free to share your musical interests, or make stuff up. Totally fine either way.)
Console.log each album as added using the returned value.
After all are added, console.log the `collection` array.
*/

console.log('Lauryn Hill Album added:', addToCollection('The Miseducaiton of Lauryn Hill', 'Lauryn Hill', 1998));
console.log('Bob Dylyan Album added:', addToCollection('Blood on the Tracks', 'Bob Dylan', 1975));
console.log('Prince Album added:', addToCollection('Purple Rain', 'Prince and the Revolution', 1984));
console.log('Fleetwood Mac Album added:', addToCollection('Rumors', 'Fleetwood Mac', 1977));
console.log('Nirvana Album added:', addToCollection('Nevermind', 'Nirvana', 1991));
console.log('Beatles Album added:', addToCollection('Abbey Road', 'The Beatles', 1969));
console.log('Stevie Wonder Album added:', addToCollection('Songs in the Key of Life', 'Stevie Wonder', 1976));
console.log('Joni Mitchell Album added:', addToCollection('Blue', 'Joni Mitchell', 1971));
console.log('Beach Boys Album added:', addToCollection('Pet Sounds', 'The Beach Boys', 1966));
console.log('Marvin Gaye Album added:', addToCollection('What\'s Going On', 'Marvin Gaye', 1971));

//  CONSOLE LOG THE COLLECTION
console.log('There are', collection.length, 'albums in the collection.');
console.log('   Albums in collection are:', collection)

/*- Add a function named `showCollection`. This function should:
  - Take in an array parameter. (This allows it to be reused to show any collection, like the results from the find or search.)
  - Console.log the number of items in the array.
  - Loop over the array and console.log each album's information formatted like: `TITLE by ARTIST, published in YEAR`.
*/
function showCollection( collectionToDisplay ){
    console.log('There are', collectionToDisplay.length, 'albums in my collection.')
    for( let i=0; i<collectionToDisplay.length; i++ ){
        console.log('   Album', i+1, 'is \"' + collectionToDisplay[i].albumTitle + '\" by', collectionToDisplay[i].albumAtist + ', published in', collectionToDisplay[i].albumYear + '.')
    } // end for loop
} // end showCollection function

// TEST SHOW COLLECTION FUNCTION
showCollection( collection );

/*- Add a function named `findByArtist`. This function should:
  - Take in `artist` (a string) parameter
  - Create an array to hold any results, empty to start
  - Loop through the `collection` and add any objects with a matching artist to the array.
  - Return the array with the matching results. If no results are found, return an empty array.
*/
function findByArtist ( artist ){
    let results = {
            message : '',
            foundItems: []
        }   
    for(let i=0; i<collection.length; i++){
        if(collection[i].albumAtist === artist){
            results.foundItems.push(collection[i])
            results.message = "Nice! Something Found."
        } // end if
    } // end for loop
    if (results.foundItems.length === 0){
        results.message = "Sorry, No Results Found."
    }
    return results.foundItems;
    // return [results.message, results.foundItems]; // DIDN'T LOVE HOW THIS RETURNED, BUT I WANTED THIS AFFECT
} // end findByArtist

// TEST FIND BY ARTEST FUNCTION
console.log('A search for Nirvana finds:', findByArtist('Nirvana'));
console.log('A search for Lauryn Hill finds:', findByArtist('Lauryn Hill'));
console.log('A search for Bob Dylan finds:', findByArtist('Bob Dylan'));
console.log('A search for Prince and the Revolution finds:', findByArtist('Prince and the Revolution'));
console.log('A search for Fleetwood Mac finds:', findByArtist('Fleetwood Mac'));
console.log('A search for The Beatles finds:', findByArtist('The Beatles'));
console.log('A search for Brittney Spears finds:', findByArtist('Brittney Spears'));


// ### Stretch goals

/*- Create a function called `search`. This function should:
  - Take an input parameter for a search criteria object. Create your solution based on a search object that has these properties:
  ```
  { artist: 'Ray Charles', year: 1957 }
  ```
  - The returned output from `search` should meet these requirements:
    - Return a new array of all items in the `collection` matching *all* of the search criteria.
    - If no results are found, return an empty array.
    - If there is no search object or an empty search object provided as input, then return all albums in the `collection`.
*/

// CREATE FUNCTION TO SERACH FOR ARTIST AND/OR ALBUM YEAR
function search( searchArtist, searchAlbumYear ){
    let results = {
        allSearchResults : [],
        exactSearchResults : [],
        partialSearchResults : []
        } // end results object
    if ( !searchArtist && !searchAlbumYear ){
    console.log('No search criteria was provided. Showing all items in collection', collection )
    }
    else{    
        for (let i = 0; i < collection.length; i++) {
            if (collection[i].albumAtist === searchArtist && collection[i].albumYear === searchAlbumYear ){
                        results.exactSearchResults.push(collection[i])   
                        results.allSearchResults.push(collection[i])
            }  // end if
            else if(collection[i].albumAtist === searchArtist || collection[i].albumYear === searchAlbumYear ){
                results.partialSearchResults.push(collection[i])   
                results.allSearchResults.push(collection[i])
            } // end else if
        }// end for loop 
        if(results.exactSearchResults.length > 0 && results.partialSearchResults.length === 0){
            console.log(results.exactSearchResults.length, 'Exact matches found for', searchArtist, '&', searchAlbumYear +'!', results.allSearchResults );
        } // end if
        else if(results.exactSearchResults.length === 0 && results.partialSearchResults.length > 0){
            console.log(results.partialSearchResults.length, 'Partial matches found for', searchArtist, '&', searchAlbumYear +'!', results.allSearchResults );
        } // end else if
        else if(results.exactSearchResults.length > 0 && results.partialSearchResults.length > 0){
            console.log(results.exactSearchResults.length, 'Exact matches matches found and', results.partialSearchResults.length, 'partial matches found for', searchArtist, '&', searchAlbumYear + '!', results.allSearchResults );
        } // end else if
        else{
            console.log('No matches found for', searchArtist, 'or', searchAlbumYear +'.', results.allSearchResults ); 
            } // end else
    }; // end else
}; // end search function

// TEST SEARCH FUNCTION
search('Lauryn Hill', 1998 ); // expected exact match
search('Bob Dylan', 1979 );  // expected partial match
search('Monkey\'s', 1937 ); // no match found. 
search('Joni Mitchell', 1971 ); // one exact match and one partial
search (); // no search criteria provided, all results shown. 

/*- Add an array of `tracks` to your album objects. 
    Each track should have a `name` and `duration`. 
    You will need to update the functions to support this new property:*/

// CREATE A FUNCITON TO COLLECT ALBUM TRACKS DETAILS
function createTrackList ( name , duration ){
    let songDetails = {
        songTitle: name,
        duration : duration
    } // end songDetails object
    tracksArray.push(songDetails)
} // end createTrackList

// PUSH COLLECTED TRACK TITLES AND DURATIONS TO SELECTED ALBUM
function addTrackstoAlbum ( albumName ){
    for (let i = 0; i < collection.length; i++) {
       if( collection[i].albumTitle === albumName ){
            collection[i].albumTracks = tracksArray
       } // end if  
    } // end for loop
    tracksArray = [];
}; // end addTrackstoAlbum

//UPDATE LAURYN HILL ALBUM
createTrackList( 'Intro', '0:47');
createTrackList( 'Lost Ones', '5:33');
createTrackList( 'Ex-Factor', '5:26');
createTrackList( 'To Zion (feat. Carlos Santana)', '6:09');
createTrackList( 'Doo Wop (That Thing)', '5:20');
addTrackstoAlbum( 'The Miseducaiton of Lauryn Hill' );

//UPDATE BOB DYLAN ALBUM
createTrackList( 'Tangled Up In Blue', '5:40');
createTrackList( 'Simple Twist of Fate', '4:17');
createTrackList( 'You\'re a Big Girl Now', '4:34');
createTrackList( 'Idiot Wind', '7:47');
createTrackList( 'You\'re Gonna Make Me Lonesome When You Go', '2:55');
addTrackstoAlbum( 'Blood on the Tracks' );

//UPDATE PRINCE AND THE REVOLUTION ALBUM
createTrackList( 'Let\'s Go Crazy', '4:40');
createTrackList( 'Take Me With U', '3:54');
createTrackList( 'The Beautiful Ones', '5:13');
createTrackList( 'Computer Blue', '3:59');
createTrackList( 'Darling Nikki', '4:14');
addTrackstoAlbum( 'Purple Rain' );

//UPDATE FLEETWOOD MAC ALBUM
createTrackList( 'Second Hand News', '2:56');
createTrackList( 'Dreams', '4:17');
createTrackList( 'Never Going Back Again', '2:14');
createTrackList( 'Don\'t Stop', '3:13');
createTrackList( 'Go Your Own Way', '3:43');
addTrackstoAlbum( 'Rumors' );

//UPDATE NIRVANA ALBUM
createTrackList( 'Smells LIke Teen Spirit', '5:01');
createTrackList( 'In Bloom', '4:15');
createTrackList( 'Come As You Are', '3:38');
createTrackList( 'Breed', '3:04');
createTrackList( 'Lithium', '4:17');
addTrackstoAlbum( 'Nevermind' );

//UPDATE BEATLES ALBUM
createTrackList( 'Come Together', '4:18');
createTrackList( 'Something', '3:02');
createTrackList( 'Maxwell\'s Silver Hammer', '3:27');
createTrackList( 'Oh! Darling', '3:27');
createTrackList( 'Octopus\'s Garden', '4:17');
addTrackstoAlbum( 'Abbey Road' );

//UPDATE STEVIE WONDER ALBUM
createTrackList( 'Love\'s in Need of Love Today', '7:05');
createTrackList( 'Have a Talk With God', '2:42');
createTrackList( 'Village Ghetto Land', '3:25');
createTrackList( 'Contusion', '3:46');
createTrackList( 'Sir Duke', '3:53');
addTrackstoAlbum( 'Songs in the Key of Life' );

//UPDATE JONI MITCHELL ALBUM
createTrackList( 'All I Want', '3:34');
createTrackList( 'My Old Man', '3:34');
createTrackList( 'Little Green', '3:27');
createTrackList( 'Carey', '3:02');
createTrackList( 'Blue', '3:05');
addTrackstoAlbum( 'Blue' );

//UPDATE BEACH BOYS ALBUM
createTrackList( 'Wouldn\'t It Be Nice', '2:34');
createTrackList( 'You Still Believe In Me', '2:36');
createTrackList( 'That\'s Not Me', '2:30');
createTrackList( 'Don\'t Talk (Put Your Head On My Shoulder)', '2:58');
createTrackList( 'I\'m Waiting for the Day', '3:07');
addTrackstoAlbum( 'Pet Sounds' );

//UPDATE MARVIN GAYE ALBUM
createTrackList( 'What\'s Going On', '3:52');
createTrackList( 'What\'s Happening Brother', '2:43');
createTrackList( 'Flyin\' High (In the Friendly Sky)', '3:49');
createTrackList( 'Save the Children', '4:02');
createTrackList( 'God is Love', '1:41');
addTrackstoAlbum( 'What\'s Going On' );

/*  - Update the `showCollection` function to display the list of tracks for each album with its name and duration.
```
    TITLE by ARTIST, published in YEAR:
    1. NAME: DURATION
    2. NAME: DURATION
    3. NAME: DURATION
    TITLE by ARTIST, published in YEAR:
    1. NAME: DURATION
    2. NAME: DURATION
    */

function updatedShowCollection( collectionToDisplay ){
    console.log('There are', collectionToDisplay.length, 'albums in my collection.')
    for( let i=0; i<collectionToDisplay.length; i++ ){
        console.log('Album', i+1, 'is: \"' + collectionToDisplay[i].albumTitle + '\" by', collectionToDisplay[i].albumAtist + ', published in', collectionToDisplay[i].albumYear + '.')
        for (let j = 0; j < collectionToDisplay[i].albumTracks.length; j++) {
            console.log( '  Title', j+1 + ':', collectionToDisplay[i].albumTracks[j].songTitle, ':', collectionToDisplay[i].albumTracks[j].duration)
            
        } // end for loop 1
        } // end for loop 2
} // end updatedShowCollection function

updatedShowCollection ( collection );

//   - Update the `addToCollection` function to also take an input parameter for the array of tracks.
//   - SEE ABOVE


//   - Update `search` to allow a `trackName` search criteria.
function updatedSearch( searchArtist, searchAlbumYear, searchAlbumTrack ){
    let results = {
        allSearchResults : [],
        exactSearchResults : [],
        partialSearchResults : []
        } // end results object
    if ( !searchArtist && !searchAlbumYear && !searchAlbumTrack ){
    console.log('No search criteria was provided. Showing all items in collection', collection )
    }
    else{    
        for (let i = 0; i < collection.length; i++) {
            if (collection[i].albumAtist === searchArtist && collection[i].albumYear === searchAlbumYear ){
                for (let j = 0; j < collection[i].albumTracks.length; j++) {
                    if( collection[i].albumTracks[j].songTitle === searchAlbumTrack){
                        results.exactSearchResults.push(collection[i])   
                        results.allSearchResults.push(collection[i])
                    } // end if
                } // end for
            }  // end if
            else if(collection[i].albumAtist === searchArtist || collection[i].albumYear === searchAlbumYear ){
                results.partialSearchResults.push(collection[i])   
                results.allSearchResults.push(collection[i])
            } // end else if
            else if(collection[i].albumAtist != searchArtist || collection[i].albumYear != searchAlbumYear ){
                for (let j = 0; j < collection[i].albumTracks.length; j++) {
                    if( collection[i].albumTracks[j].songTitle === searchAlbumTrack){
                        results.partialSearchResults.push(collection[i])   
                        results.allSearchResults.push(collection[i])
                    } // end if
                } // end for
            } // end else if
        }// end for loop 
        if(results.exactSearchResults.length > 0 && results.partialSearchResults.length === 0){
            console.log(results.exactSearchResults.length, 'Exact matches found for', searchArtist + ',', searchAlbumYear, '&', '"' + searchAlbumTrack +'"!', results.allSearchResults );
        } // end if
        else if(results.exactSearchResults.length === 0 && results.partialSearchResults.length > 0){
            console.log(results.partialSearchResults.length, 'Partial matches found for', searchArtist + ',', searchAlbumYear, '&', '"' + searchAlbumTrack +'"!', results.allSearchResults );
        } // end else if
        else if(results.exactSearchResults.length > 0 && results.partialSearchResults.length > 0){
            console.log(results.exactSearchResults.length, 'Exact matches matches found, and,', results.partialSearchResults.length, 'partial matches found for', searchArtist + ',', searchAlbumYear, '&', '"' + searchAlbumTrack +'"!', results.allSearchResults );
        } // end else if
        else{
            console.log('No matches found for', searchArtist + ',', searchAlbumYear, 'or', '"' + searchAlbumTrack +'".', results.allSearchResults ); 
            } // end else
    }; // end else
}; // end search function

// TEST UPDATED SEARCH FUNCTION
updatedSearch('Lauryn Hill', 1998, 'Lost Ones'); // expected exact match
updatedSearch('Bob Dylan', 1979, 'Idiot Wind');  // expected partial match
updatedSearch('Monkey\'s', 1937, 'Hey, Hey'); // no match found. 
updatedSearch('Joni Mitchell', 1971, 'Blue') // one exact match and one partial
updatedSearch (); // no search criteria provided, all results shown. 

// > Make sure to test all your code! - TESTED

// ## Assignment Submission
// Check in your repo, then turn in your work via the Prime Academy Assignment Application at http://primeacademy.io, as usual and don't hesitate to hit up the Slack channel as needed!
