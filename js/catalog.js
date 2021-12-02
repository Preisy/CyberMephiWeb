function showHistory()  {
    console.log(window.history);
    // var log = document.getElementById("log-area");
    // log.value="";
    // log.value +="history.length="+ history.length +"\n";
    // log.value +="history.scrollRestoration="+history.scrollRestoration+"\n";
    // log.value +="history.state="+ JSON.stringify(history.state)+"\n";
}


li = document.querySelectorAll("header li")

var number = 0;
for (let i = 0; i < li.length; i++) {

    li[i].addEventListener("click", function () {
            number = number + 1;
            var title = "State "+ number;

            var dataState = {
                empId : number,
                showProfile: true,
                title: title
            };

            window.history.pushState({}, "");
            document.title = title;

            // Show current History:
            showHistory();
    })

}