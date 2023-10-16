const search_box = document.getElementById("search_box");
const close_search_btn = search_box.querySelector(".fa-times");
const search_btn = document.querySelector(".fa-search");

search_btn.addEventListener("click", () => {
    search_box.classList.add("open_search_bar");
});

close_search_btn.addEventListener("click", () => {
    if(search_box.classList.contains("open_search_bar")) {
        search_box.classList.remove("open_search_bar");
    }
});

window.addEventListener("scroll", () => {
    if(window.scrollY > 0) {
        document.querySelector("nav.navbar").style.position= "sticky";
        document.querySelector("nav.navbar").style.top= 0;
    }
});