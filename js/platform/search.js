function searchAppearance(searcher) {
    if (searcher.style.opacity === "1") {
        return false;
    } else {
        searcher.style.opacity = `${Number(searcher.style.opacity) + 0.1}`
        // searchAppearance(searcher)
        setTimeout(function () {
            searchAppearance(searcher)
        }, 10)
    }
}

function searchDisappearance(searcher) {
    if (searcher.style.opacity === "0") {
        searcher.style.display = "none"
        searcher.classList.remove("active_search")
        return false;
    } else {
        searcher.style.opacity = `${Number(searcher.style.opacity) - 0.1}`
        // searchAppearance(searcher)
        setTimeout(function () {
            searchDisappearance(searcher)
        }, 10)
    }
}

function processSearcher() {
    let search_icon = document.querySelector("header .icon")
    let searcher = document.querySelector(".searcher")
    let search_results = document.querySelector(".search_results")
// search_results.style.display = "none"
    searcher.style.display = "none"
    search_icon.addEventListener("click", function () {
        searcher.classList.add("active_search")
        // disableScroll(document.querySelector("main"))
        searcher.style.display = "block"
        setTimeout(function () {
            searchAppearance(searcher)
        }, 10)
    })
    let close_searcher = document.querySelector(".searcher .header .icon")

    close_searcher.addEventListener("click", function () {
        // enableScroll(document.querySelector("main"))
        setTimeout(function () {
            searchDisappearance(searcher)
        }, 10)
    })
}

processSearcher()