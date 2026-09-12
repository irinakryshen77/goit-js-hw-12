// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";

import { getImagesByQuery } from "./js/pixabay-api";
import {
  clearGallery,
  createGallery,
  hideLoader,
  hideLoadMoreButton,
  showLoader,
  showLoadMoreButton,
} from "./js/render-functions";

const form = document.querySelector(".form");

form.addEventListener("submit", hundlerSubmit);

const button = document.querySelector(".load-btn")
button.addEventListener("click", hundlerClick)
const gallery = document.querySelector(".gallery");

let currentPage = 1
let searchValue = ""
let totalPage = 0


async function hundlerSubmit(event) {
  event.preventDefault();

  const query = event.currentTarget.elements["search-text"];
searchValue = query.value.trim();

  if (searchValue === "") {
    iziToast.show({
      message: "Please enter search word",
      color: "red",
      position: "topRight",
      timeout: 5000,
    });

    return;
  }
hideLoadMoreButton();
  clearGallery();
  showLoader();
  currentPage = 1
try {
  const data = await getImagesByQuery(searchValue, currentPage) 
  const images = data.hits;
if (images.length === 0) {
        iziToast.show({
          message:
            "Sorry, there are no images matching your search query. Please try again!",
          color: "red",
          position: "topRight",
          timeout: 5000,
        });

        return;
      }
      createGallery(images);
     totalPage = Math.ceil(data.totalHits/15)
      if (totalPage > 1) {
showLoadMoreButton()
      } else {
        iziToast.show({
        message: "We're sorry, but you've reached the end of search results.",
        color: "blue",
        position: "topRight",
        timeout: 5000,
        })
        hideLoadMoreButton()
      }
}

catch {
iziToast.show({
        message: "Ops... try again!",
        color: "red",
        position: "topRight",
        timeout: 5000,
      });
      hideLoadMoreButton()
    }

finally{
    hideLoader();
      form.reset();
}
}

async function hundlerClick () {
   hideLoadMoreButton();
   showLoader()
   currentPage +=1
   try {
  const data = await getImagesByQuery(searchValue, currentPage) 
  const images = data.hits;
if (images.length === 0) {
        iziToast.show({
          message:
            "Sorry, there are no images matching your search query. Please try again!",
          color: "red",
          position: "topRight",
          timeout: 5000,
        });

        return;
      }

      const galleryHeight = gallery
      .firstElementChild
      .getBoundingClientRect().height;
      createGallery(images);

 window.scrollBy({
      top: galleryHeight * 2,
      behavior: "smooth",
    });

      if (totalPage > currentPage) {
showLoadMoreButton()
      } else {
        iziToast.show({
        message: "We're sorry, but you've reached the end of search results.",
        color: "blue",
        position: "topRight",
        timeout: 5000,
        })
        hideLoadMoreButton()
      }
   }
catch {
iziToast.show({
        message: "Ops... try again!",
        color: "red",
        position: "topRight",
        timeout: 5000,
      });
      hideLoadMoreButton()
    }

finally{
    hideLoader();
    }
}