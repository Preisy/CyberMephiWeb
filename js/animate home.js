function addEL(str) {
    let h = document.body.querySelector(str)
    let h_arr = h.innerText.split("")
    h.innerText = ""

    let arr = []
    for (let i = 0; i < h_arr.length; i++) {
        let span = document.createElement("span")
        if (h_arr[i] == " ") {
            span.innerHTML = "&nbsp;"
        } else {
            span.innerText = h_arr[i]
        }
        h.append(span)
        arr.push(span)
    }

    for (let i = 0; i < arr.length; i++) {
        arr[i].addEventListener("mouseover", function () {
            arr[i].classList.add("pull_ding_dong")
            setTimeout(function () {
                arr[i].classList.remove("pull_ding_dong")
            }, 700)
        })
    }


}
addEL(".home h1")
addEL(".home p")
