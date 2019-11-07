var edebug;

function debug(value) {
    edebug.innerText += value;
    edebug.innerText += "\n\n";
}

function parse() {
    var href = window.location.href;
    href = href.replace(/f=(https?:\/\/)?(www\.)?emlalock\.com\/#\/f\//gi, 'f=');
    href = href.replace(/r=(https?:\/\/)?(www\.)?emlalock\.com\/#\/r\//gi, 'r=');

    var url = new URL(href);

    var f_code = url.searchParams.get("f");
    var r_code = url.searchParams.get("r");
    var title = url.searchParams.get("title");
    var msg = url.searchParams.get("msg");
    var kinks = url.searchParams.get("kinks");
    var border = url.searchParams.get("border");
    var b = url.searchParams.get("b");
    var bs = url.searchParams.get("bs");


    // debug(f_code);
    // debug(r_code);
    // debug(msg);
    // debug(kinks);


    var flink = document.getElementById("flink");
    var rlink = document.getElementById("rlink");

    var etitle = document.getElementById("title");
    var emsg = document.getElementById("msg");

    var ekinks = document.getElementById("kinks");

    var banner = document.getElementsByClassName("banner");


    if (f_code) flink.href = "https://emlalock.com/#/f/" + f_code;
    if (r_code) rlink.href = "https://emlalock.com/#/r/" + r_code;

    if (title) etitle.innerHTML = title;
    if (msg) emsg.innerHTML = msg;

    if (kinks) {
        ekinks.innerHTML = '';
        var parts = kinks.split('|');
        parts.forEach(function (value) {
            ekinks.innerHTML += '<li>' + value + '</li>';
        });
    }

    if (b) border = b;

    if (border) {
        var el = banner.item(0);

        el.classList.forEach((value, key) => {
            if (value.startsWith('border')) el.classList.remove(value);
            // console.log(value, key);
        });

        el.classList.add("border-" + border);
        // console.log(border);

        // banner.
        // for (el in banner) {
        // }
    }

    if (bs && border !== "clear") {
        var el = banner.item(0);
        el.style.borderWidth = bs + "px";
        el.style.borderImageWidth = bs + "px";
    }


}

window.onload = function () {
    edebug = document.getElementById("debug");
    edebug.classList.add('hide');

    parse();
};
