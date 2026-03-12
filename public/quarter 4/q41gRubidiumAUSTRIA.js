

let listOfMovies=JSON.parse(localStorage.getItem("listOfMovies")) || [];
// retrieves saved movie list from browser's locall storage, if none, empty array is created

const form=document.querySelector("form");

form.addEventListener("submit", function(event){

    event.preventDefault();

    let rating = Number(document.querySelector("input[name='rating']:checked").value); 
    let movieExists = false;


    for(let i=0; i<listOfMovies.length; i++){
        if(listOfMovies[i].title.toLowerCase() === movieTitle.value.toLowerCase() ){
            listOfMovies[i].rating = Math.round((Number(listOfMovies[i].rating) + rating) / 2);
            movieExists = true;
            break;
        }
    }
//checks if the movie already exists in the list, if it does, it updates the rating by averaging it all and sets a flag to true, if it doesn't exist, it adds the new movie to the list with the provided details
    if(!movieExists){
        listOfMovies.push({
            title: movieTitle.value,
            year: year.value,
        genre: movieGenre.value,
        rating: rating
     })
// if the movie does not exist, it creates a new movie object with the title, year, genre, and rating from the form inputs and adds it to the list of movies
    }
        localStorage.setItem("listOfMovies", JSON.stringify(listOfMovies));
        displayMovies(listOfMovies);
    });

// adds event listener to form submission, retrieves the rating value, creates a movie object with the form data, saves it to local storage, and updates the displayed movie list

   function deleteMovie(index) {
            let userConfirmed= confirm("Are you sure you want to delete this item?")
                if(userConfirmed) {
                    listOfMovies.splice(index, 1);
                    localStorage.setItem("listOfMovies", JSON.stringify(listOfMovies));
                    displayMovies(listOfMovies);
                }
                else{
                    alert("Deletion cancelled.");
                }
        }

function displayMovies(listOfMovies){
    let showList="";

    for(let i=0; i<listOfMovies.length; i++){
        let idx = 0;
        let stars= "";
        while(idx < listOfMovies[i].rating){
            stars += "⭐";
            idx++;
        }
        showList += `<div class="listMovies">
        ${listOfMovies[i].title} (${listOfMovies[i].year}) - ${listOfMovies[i].genre}, Rating: ${stars}
        <button class="delete-btn" onclick="deleteMovie(${i})">Delete</button>
        </div>`;

     
    }
        document.getElementById("listMovies").innerHTML = showList;
}
// defines a function to display the list of movies, iterating through the movie list and creating HTML elements to show each movie's details and rating as stars
displayMovies(listOfMovies);
