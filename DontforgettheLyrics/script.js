function valid() {
cor = "0"
incor = "0"
test0 = document.myform.elements[0].value;
test1 = document.myform.elements[1].value;
if (test0.toLowerCase() == "live") {
++cor; }
else ++incor
if (test1.toLowerCase() == "cry") {
++cor; }
else ++incor
alert("you got " + cor + " right\n And you got " + incor + " wrong. You got " + cor/2 * 100 + "% correct!");
}


$("#audio").jPlayer({
    swfPath: "http://www.jplayer.org/latest/js/Jplayer.swf",
    supplied: "mp3"
});

$("a").click(function(e) {
    $("#audio").jPlayer("setMedia", { 
        mp3: this.href 
    }).jPlayer("play");

    e.preventDefault();
});