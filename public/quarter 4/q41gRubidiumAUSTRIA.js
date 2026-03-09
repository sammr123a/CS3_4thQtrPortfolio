

let listOfMovies=JSON.parse(localStorage.getItem("listOfMovies")) || [];

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
displayMovies(listOfMovies);
