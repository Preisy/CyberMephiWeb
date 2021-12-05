function processPagesLinks(selector, page_name) {

    let main = document.querySelector("main")

    let li = document.querySelectorAll(selector)

    for (let i = 0; i < li.length; i++) {
        li[i].addEventListener("click", async function (event) {
            event.preventDefault()
            obj = {
                url: new URL(page_name,
                    document.currentScript && document.currentScript.src || location.href).href,
                title: 0,
                file: page_name
            }

            current_href = new URL(
                document.currentScript && document.currentScript.src || location.href).href
            if (current_href === obj.url) {
                return;
            }

            let template = await (await fetch(obj.url)).text()

            let el = new DOMParser().parseFromString(template, "text/html")

            document.title = el.title

            changeContent(main, el)

            history.pushState(obj, obj.title, obj.file)
            setTimeout(function () {
                document.documentElement.scrollTop = 0
            }, 150)

        })
    }
}

processPagesLinks(".course_page .teacher_list .lecture", "teacher_page.html")
