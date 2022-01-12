/** Task 1:
 * create 3 objects with the name movie1, movie2, movie3
 * Add 3 properties to it
 * - id -> just a unique id, you can start with 1
 * - name -> a movie name (e.g. COCO)
 * - image  -> an http link of the image on the internet
 * rating -> a rating number from 1 to 10
 *
 * After you create the movies, console log them.
 * Open the live server, and see the logs in the console of the browser
 *
 */

// add the movies variables here ....
const movie1 = {
    id : 1,
   name: "the scent of women",
   Image: "https://m.media-amazon.com/images/I/71S20EOTVxL._SL1500_.jpg",
   rating: 7,


};
console.log(movie1)

const movie2 = {
    id: 3,
    name : "V for Vendenta",
    Image : "https://m.media-amazon.com/images/M/MV5BOTI5ODc3NzExNV5BMl5BanBnXkFtZTcwNzYxNzQzMw@@._V1_.jpg",
    rating : 8,

};
console.log(movie2)


const movie3 = {
    id: 3,
    name : "Les Misérables",
    Image : "https://s.s-bol.com/imgbase0/imagebase3/large/FC/2/1/6/1/1002004013301612.jpg",
    rating : 6,

};
console.log(movie3)
/** Task 2:
 * Create an array `movies`
 * Add to it the movies that you created on top.
 * Once you add one movie,
 * you will see the movie card in the html page!
 *
 * Don't add to the array the movies variables,
 * just copy paste the content to be in the following format
 * [
 *    {
 *       prop: value,
 *       prop: value,
 *       prop: value,
 *    },
 * ]
 */
const movies = [
    {
        id : 1,
        name: "the scent of women",
        Image: "https://m.media-amazon.com/images/I/71S20EOTVxL._SL1500_.jpg"
      , rating: 7,
    
    
    },
    {
        id: 3,
        name: "V for Vendenta",
        Image: "https://m.media-amazon.com/images/M/MV5BOTI5ODc3NzExNV5BMl5BanBnXkFtZTcwNzYxNzQzMw@@._V1_.jpg",
        rating: 8,
    
    },
    {
        id: 3,
        name: "Les Misérables",
        Image: "https://s.s-bol.com/imgbase0/imagebase3/large/FC/2/1/6/1/1002004013301612.jpg",
        rating: 6,
    
    }
    ]


/** TASK 3:
 * Create a new file call it `movies.json`
 * Copy paste the content of the array inside the json file
 * Make sure it's a json format.
 */
