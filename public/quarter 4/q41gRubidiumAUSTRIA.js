

let listOfMovies=JSON.parse(localStorage.getItem("listOfMovies")) || [];
// retrieves saved movie list from browser's locall storage, if none, empty array is created

const form=document.querySelector("form");

form.addEventListener("submit", function(event){

    event.preventDefault();

    let rating = document.querySelector("input[name='rating']:checked").value; 

    listOfMovies.push({
        title: movieTitle.value,
        year: year.value,
        genre: movieGenre.value,
        rating: rating
     })
        localStorage.setItem("listOfMovies", JSON.stringify(listOfMovies));
        displayMovies(listOfMovies);
    });
// adds event listener to form submission, retrieves the rating value, creates a movie object with the form data, saves it to local storage, and updates the displayed movie list


function displayMovies(listOfMovies){
    showList="";

    for(i=0; i<listOfMovies.length; i++){
        let idx = 0;
        let stars= "";
        while(idx < listOfMovies[i].rating){
            stars += "⭐";
            idx++;
        }
        showList += `<div class="listMovies">
        ${listOfMovies[i].title} (${listOfMovies[i].year}) - ${listOfMovies[i].genre}, Rating: ${stars}
        </div>`;
    }
        document.getElementById("listMovies").innerHTML = showList;
}
// defines a function to display the list of movies, iterating through the movie list and creating HTML elements to show each movie's details and rating as stars
displayMovies(listOfMovies);
