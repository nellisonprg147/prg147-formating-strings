
var $ = function (id) {
    return document.getElementById(id);
};
window.onload = function()
{
    text();

};
function text() {
    var text_one ="\t\"Craft Beer, How it\'s Made\" is the title of a project that I made for Manufacturing Processes IMT 102."+
        "The option that I picked for the project was to make a video like Discovery Channel \"How it\'s Made\".\n"+
        "\tThe video can be found at the bottom of this page.";
    var text_two ="\tIn this image Brian is measuring the specific gravity to estimate the alcohol content of the beer.";
    var text_three = "\t Hops is a key ingredient in giving the beer its bitterness, flavor, and finish. \b";
    var text_four = "\t Click the link to the right to watch the video I made. It is nearly 15 minutes in length,"+
        "so it you have the time it is worth a watch.\\\\\\\\\\\\>";



    $("text").innerHTML= text_one;
    $("textBrian").innerHTML=text_two;
    $("texthopps").innerHTML=text_three;
    $("textvideo").innerHTML=text_four;
}
