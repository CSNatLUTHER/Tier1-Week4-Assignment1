// - Create a variable `collection` that starts as an empty array.
let collection  = [];

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
        albumYear: Number(yearPublished)
    }
    collection.push(newAlbum);
    return newAlbum;
};

/*
- Test the `addToCollection` function:
  - Add 6 albums to your collection. Aim to have a mix of both same and different artists and published years. (Feel free to share your musical interests, or make stuff up. Totally fine either way.)
  - Console.log each album as added using the returned value.
  - After all are added, console.log the `collection` array.
*/

console.log('Album added:', addToCollection('Miseducaiton of Lauryn Hill', 'Lauryn Hill', 1998));
console.log('Album added:', addToCollection('Blood on the Track', 'Bob Dylan', 1975));
console.log('Album added:', addToCollection('Purple Rain', 'Prince and the Revolution', 1984));
console.log('Album added:', addToCollection('Rumors', 'Fleetwood Mac', 1977));
console.log('Album added:', addToCollection('Nevermind', 'Nirvana', 1991));
console.log('Album added:', addToCollection('Abbey Road', 'The Beatles', 1969));
console.log('Album added:', addToCollection('Songs in the Key of Life', 'Stevie Wonder', 1976));
console.log('Album added:', addToCollection('Blue', 'Joni Mitchell', 1971));
console.log('Album added:', addToCollection('Pet Sounds', 'The Beach Boys', 1966));
console.log('Album added:', addToCollection('What\'s Going On', 'Marvin Gaye', 1971));

console.log('There are', collection.length, 'albums in the collection. Albums in collection are:', collection );
/*- Add a function named `showCollection`. This function should:
  - Take in an array parameter. (This allows it to be reused to show any collection, like the results from the find or search.)
  - Console.log the number of items in the array.
  - Loop over the array and console.log each album's information formatted like: `TITLE by ARTIST, published in YEAR`.
*/
function showCollection( collectionToDisplay ){
    console.log('There are', collectionToDisplay.length, 'albums in my collection.')
    for( let i=0; i<collectionToDisplay.length; i++ ){
        console.log('Album', i+1, 'is \"' + collectionToDisplay[i].albumTitle + '\" by', collectionToDisplay[i].albumAtist + ', published in', collectionToDisplay[i].albumYear + '.')
    } // end for loop
} // end showCollection function

// - Test the `showCollection` function.
showCollection( collection );

/*- Add a function named `findByArtist`. This function should:
  - Take in `artist` (a string) parameter
  - Create an array to hold any results, empty to start
  - Loop through the `collection` and add any objects with a matching artist to the array.
  - Return the array with the matching results. If no results are found, return an empty array.
*/
function findByArtist ( artist ){
    let results = [];
    for(let i=0; i<collection.length; i++){
        if(collection[i].albumAtist === artist){
            results.push(collection[i])
        } // end if
    } // end for loop
    return results;
} // end findByArtist

// - Test the `findByArtist` function. Make sure to test with an artist you know is in the collection, as well as an artist you know is not in your collection. Check that for artists with multiple matches, all are found.
console.log('A search for Nirvana finds:', findByArtist('Nirvana'));
console.log('A search for Lauryn Hill finds:', findByArtist('Lauryn Hill'));
console.log('A search for Bob Dylan finds:', findByArtist('Bob Dylan'));
console.log('A search for Prince and the Revolution finds:', findByArtist('Prince and the Revolution'));
console.log('A search for Fleetwood Mac finds:', findByArtist('Fleetwood Mac'));
console.log('A search for The Beatles finds:', findByArtist('The Beatles'));
console.log('A search for Brittney Spears finds:', findByArtist('Brittney Spears'));


// ### Stretch goals

// - Create a function called `search`. This function should:
//   - Take an input parameter for a search criteria object. Create your solution based on a search object that has these properties:
//   ```
//   { artist: 'Ray Charles', year: 1957 }
//   ```
//   - The returned output from `search` should meet these requirements:
//     - Return a new array of all items in the `collection` matching *all* of the search criteria.
//     - If no results are found, return an empty array.
//     - If there is no search object or an empty search object provided as input, then return all albums in the `collection`.

// - Add an array of `tracks` to your album objects. Each track should have a `name` and `duration`. You will need to update the functions to support this new property:
//   - Update the `addToCollection` function to also take an input parameter for the array of tracks.
//   - Update `search` to allow a `trackName` search criteria.
//   - Update the `showCollection` function to display the list of tracks for each album with its name and duration.
// ```
//     TITLE by ARTIST, published in YEAR:
//     1. NAME: DURATION
//     2. NAME: DURATION
//     3. NAME: DURATION
//     TITLE by ARTIST, published in YEAR:
//     1. NAME: DURATION
//     2. NAME: DURATION
// ```

// > Make sure to test all your code!



// ## Assignment Submission
// Check in your repo, then turn in your work via the Prime Academy Assignment Application at http://primeacademy.io, as usual and don't hesitate to hit up the Slack channel as needed!

