// function changeContent(main, el) {
//     main.style.opacity = 0
//     let node = el.querySelector("main")
//     setTimeout(function () {
//         let arr = main.children
//         for (let i = 0; i < arr.length; i++) {
//             arr[i].remove()
//         }
//         arr = node.children
//         for (let i = 0; i < arr.length; i++) {
//             main.append(arr[i])
//         }
//
//         appendStylesAndScripts(document.querySelector("head"), el)
//         main.style.opacity = 1
//
//     }, 150)
// }
// function checkAvailability(arr, el, checker) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i][checker] === el[checker]) {
//             return true
//         }
//     }
//     return false
// }
//
// function appendStylesAndScripts(head, el) {
//     let new_tags = el.head.querySelectorAll("link")
//     let tags = head.querySelectorAll("link")
//     for (let i = 0; i < new_tags.length; i++) {
//         if (!checkAvailability(tags, new_tags[i], "href")) {
//             head.append(new_tags[i])
//         }
//     }
//
//     new_tags = el.head.querySelectorAll("script")
//     tags = head.querySelectorAll("script")
//
//     for (let i = 0; i < new_tags.length; i++) {
//         let flag = false
//         for (let j = 0; j < tags.length; j++) {
//             if (new_tags[i].src === tags[j].src) {
//                 flag = true
//                 break
//             }
//         }
//
//         if (new_tags[i].dataset.flag === "1" || !flag) {
//             let script = document.createElement('script');
//             script.src = new_tags[i].src;
//             head.append(script)
//         }
//     }
// }
//
// function processPagesLinks(selector, page_name) {
//
//     let main = document.querySelector("main")
//
//     let li = document.querySelectorAll(selector)
//
//     for (let i = 0; i < li.length; i++) {
//         li[i].addEventListener("click", async function (event) {
//             event.preventDefault()
//             obj = {
//                 url: new URL(page_name,
//                     document.currentScript && document.currentScript.src || location.href).href,
//                 title: 0,
//                 file: page_name
//             }
//
//             current_href = new URL(
//                 document.currentScript && document.currentScript.src || location.href).href
//             if (current_href === obj.url) {
//                 return;
//             }
//
//             let template = await (await fetch(obj.url)).text()
//
//             let el = new DOMParser().parseFromString(template, "text/html")
//
//             document.title = el.title
//
//             changeContent(main, el)
//
//             history.pushState(obj, obj.title, obj.file)
//             setTimeout(function () {
//                 document.documentElement.scrollTop = 0
//             }, 150)
//
//         })
//     }
// }
//
// // function processPagesPopstate() {
// //     let main = document.querySelector("main")
// //
// //     window.addEventListener("popstate", async function (event) {
// //         let template = await (await fetch(window.location.href)).text()
// //
// //         let el = new DOMParser().parseFromString(template, "text/html")
// //
// //         document.title = el.title
// //
// //         changeContent(main, el)
// //
// //         setTimeout(function () {
// //             appendStylesAndScripts(document.querySelector("head"), el)
// //         }, 150)
// //
// //
// //         document.documentElement.scrollTop = 0
// //
// //     })
// // }
//
//
