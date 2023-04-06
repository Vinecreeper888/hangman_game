import { useState } from "react";
import { fetchLettersReducerActions } from "./fetchLettersReducer";
import { fetchPlayerDataReducerActions } from "./updatePlayerDataReducer";

export const fetchMovieTitles = () => {
  const total_pages = 544;
  let page_no = Math.floor(Math.random() * total_pages);
  const url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=${page_no}`;

  return async (dispatch) => {
    const fetchMovieDetails = async () => {
      const response = await fetch(url);
      const data = await response.json();
      //console.log(data);
      return data;
    };

    try {
      const movieData = await fetchMovieDetails();
      const total_results_in_page = 20;
      //console.log(movieData);
      dispatch(
        fetchLettersReducerActions.addToMovieDetails(
          movieData.results[Math.ceil(Math.random() * total_results_in_page)]
            .title
        )
      );
    } catch (error) {
      console.log(
        "error messages are shown below and this means control is in catch block"
      );
      console.log(error);
      //alert(error.message);
    }
  };
};

export const sendPlayerData = (playerData) => {
  const url =
    "https://hangman-1db72-default-rtdb.asia-southeast1.firebasedatabase.app";

  return async () => {
    const sendRequest = async () => {
      const response = await fetch(`${url}/playerData.json`, {
        method: "POST",
        body: JSON.stringify(playerData),
      });

      if (!response.ok) {
        console.log(
          "Sending player data has failed. Please check movie-actions.js"
        );
      } else {
        console.log("Message has been sent successfully! Check firebase realtime database")
      }
    };

    try {
      await sendRequest();
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const updatePlayerData = (playerData) => {
  const url = "https://hangman-1db72-default-rtdb.asia-southeast1.firebasedatabase.app";

  return async () => {
    const updateRequest = async () => {
      const response = await fetch(`${url}/playerData.json`, {
        method: "PUT",
        body: JSON.stringify(playerData),
      });

      if(!response.ok) {
        console.log("Updating player data request has failed. Check the firebase realtime database");
      } else {
        console.log("Player data has been successfully updated. Check realtime database for the updated results.");
      }
    };

    try {
      await updateRequest();
    } catch(error) {
      console.log("Error message reads:",error.message);
      console.log(error);
    }
  }
}

export const fetchPlayerData = () => {
  const url = "https://hangman-1db72-default-rtdb.asia-southeast1.firebasedatabase.app";
  return async (dispatch) => {
    const fetchPlayerDataDetails = async () => {
      const response = await fetch(`${url}/playerData.json`);
      const data = response.json();
      return data;
    };

    try {
      const playerData = await fetchPlayerDataDetails();
      dispatch(fetchPlayerDataReducerActions.addToRetrievePlayerDataFromDatabase(playerData));
    } catch (error) {
      console.log("If control comes here, then there is something wrong in data fetching from firebase realtime database");
      console.log(error);
    }
  };
};
