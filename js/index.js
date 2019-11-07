function resize(iframe) {
    iframe.style.height = iframe.contentWindow.document.body.scrollHeight + 'px';
    iframe.style.width = iframe.contentWindow.document.body.scrollWidth + 'px';
    // console.log("RESIZE", iframe);
}

function genCode(url, height = 400) {
    if (!height) height = "400px";
    return `<iframe width="100%" height="${height}" src="${url}" frameborder="0"></iframe>`;
}


function main() {
    var href = window.location.href;

    var fl = document.getElementById('fl');
    var rl = document.getElementById('rl');
    var ptitle = document.getElementById('ptitle');
    var pmsg = document.getElementById('pmsg');
    var pkinks = document.getElementById('pkinks');
    var pborder = document.getElementById('pborder');
    var pborder_s = document.getElementById('pborder_s');

    var pframe = document.getElementById('pframe');
    var pcode = document.getElementById('pcode');

    var stitle = document.getElementById('stitle');
    var smsg = document.getElementById('smsg');
    var sframe = document.getElementById('sframe');
    var scode = document.getElementById('scode');


    function pkeyup() {
        var purl = "profile.html";

        purl += "?f=" + fl.value;
        purl += "&r=" + rl.value;

        if (ptitle.value)
            purl += "&title=" + ptitle.value;
        if (pmsg.value)
            purl += "&msg=" + pmsg.value;
        if (pkinks.value)
            purl += "&kinks=" + pkinks.value;

        if (pborder.value !== "basic")
            purl += "&b=" + pborder.value;

        if (pborder_s.value && pborder_s.value !== "40")
            purl += "&bs=" + pborder_s.value;


        if (pframe.src !== purl) pframe.src = purl;
        // pcode.value = genCode(href + purl, pframe.style.height);
    }

    ptitle.onkeyup = pkeyup;
    pmsg.onkeyup = pkeyup;
    pkinks.onkeyup = pkeyup;
    pborder.onchange = pkeyup;
    pborder_s.onchange = pkeyup;

    pframe.onload = function (ev) {
        resize(this);
        pcode.value = genCode(this.src, this.style.height);
    };

    pkeyup();


    function skeyup() {
        var surl = "session.html";

        surl += "?f=" + fl.value;
        surl += "&r=" + rl.value;

        if (stitle.value)
            surl += "&title=" + stitle.value;
        if (smsg.value)
            surl += "&msg=" + smsg.value;
        // if(pborder.value !== "basic")
        //     url+= "&border=" + pborder.value;


        if (sframe.src !== surl) sframe.src = surl;
        // scode.value = genCode(href + surl, sframe.style.height);
    }

    stitle.onkeyup = skeyup;
    smsg.onkeyup = skeyup;

    sframe.onload = function (ev) {
        resize(this);
        scode.value = genCode(this.src, this.style.height);
    };

    skeyup();


    // Link Code
    fl.addEventListener("keyup", ev => {
        pkeyup();
        skeyup();
    });
    rl.addEventListener("keyup", ev => {
        pkeyup();
        skeyup()
    });


    // Code events
    pcode.oncontextmenu = scode.oncontextmenu = function (ev) {
        this.setSelectionRange(0, this.value.length);
    };


}


document.addEventListener('DOMContentLoaded', main, false);
