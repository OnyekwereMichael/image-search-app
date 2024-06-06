const accessKey = "-vIxTqqPU78Rfuwd_oHnI2LxpswyHOz2cFVCyUglRB8";

const form = document.querySelector("form");
const searchInput = document.getElementById("js-searchInput");
const showMore = document.querySelector(".show_more");
const searchResults = document.querySelector(".searchResults");
const form_search = document.getElementById("form_search");

let page = 1;
async function searchImages() {
  const searchInputValue = searchInput.value;
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${searchInputValue}&client_id=${accessKey}`;

  const response = await fetch(url);
  const data = await response.json();

  const result = data.results;
  console.log(result);

  if (page === 1) {
    searchResults.innerHTML = "";
  }

  result.map((item) => {
    const search = document.createElement("div");
    search.classList.add("search-Result");
    const image = document.createElement("img");
    image.src = item.urls.small;
    const imageLink = document.createElement("a");
    imageLink.href = item.links.html;
    imageLink.target = "_blank";
    imageLink.innerHTML = item.alt_description;
    search.appendChild(image);
    search.appendChild(imageLink);
    console.log(search);
    searchResults.appendChild(search);
  });
}


form.addEventListener("submit", (event) => {
  event.preventDefault();
  page = 1;
  searchImages();
});

showMore.addEventListener("click", () => {
  searchImages();
  page++;
});

// toggle dark and light

const toggle = document.getElementById("toggleDark");
const body = document.querySelector("body");

toggle.addEventListener("click", () => {
  toggle.classList.toggle("bi-moon");
  if (toggle.classList.toggle("bi-brightness-high-fill")) {
    body.style.background = "#fff";
    body.style.color = "#000";
    body.style.transition = "2s";
    form_search.style.color = "#000";
    form.style.transition = "2s";
    showMore.style.color = "#000";
    showMore.style.transition = "#fff"
  } else {
    body.style.background = "#000";
    body.style.color = "#fff";
    body.style.transition = "2s";
    form_search.style.color = "#fff";
    form.style.transition = "2s";
    showMore.style.color = "#fff";
    showMore.style.transition = "#fff"
  }
});
