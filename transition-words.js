function TranslationWord(){

var randomnumber = Math.floor(Math.random() * 6);

console.log(randomnumber);

document.getElementById("transitionword").innerHTML = transitionwords[randomnumber];

document.getElementById('translation').innerHTML = translation[randomnumber];

}

window.onload = TranslationWord();

function showMe() {
    var chboxs = document.getElementsByName("c1");
    var vis = "block";
    if (chboxs[0].checked){
        vis = "none";
    }
    document.getElementById("translation").style.display = vis;
}