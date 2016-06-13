
function $(id) {
    return document.getElementById(id)
}

function removeAllChild(node){
    var myNode = document.getElementById(node);
    while (myNode.firstChild) {
        myNode.removeChild(myNode.firstChild);
    }
}

var colors = {
    "color1" : ["Rose Jungle","#ef4850"],
    "color2" : ["Rose roger","#ff6c73"],
    "color3" : ["Rose lamute","#f8bcbf"],
    "color4" : ["Bleu Jungle","#204762"],
    "color5" : ["Bleu roger","#397395"],
    "color6" : ["Bleu lamute","#bae1fd"],
    "color7" : ["gris Jungle","#333333"],
    "color8" : ["gris roger","#404a56"],
    "color9" : ["gris roger","#7f8894"],
    "color10" : ["gris janine","#f1f1f1"],
    "color11" : ["Jaune Jungle","#fad170"],
    "color12" : ["Jaune roger","#f9e07d"],
    "colo13" : ["Jaune lamute","#f9edb0"],
    "color14" : ["Vert Jungle","#35945d"],
    "color15" : ["Vert roger","#63c48c"],
    "color16" : ["Vert lamute","#a2efbd"],
};


for (var color in colors) {
    var nouveauDiv = document.createElement("div");
    nouveauDiv.className = "block";

    nouveauDiv.innerHTML = '\
        <div class="block-color dark" style="background:'+colors[color][1]+'">'+colors[color][0]+'</div>\
        <button class="pick-color btn" data-clipboard-text="'+colors[color][1]+'">'+colors[color][1]+'</button>\
        ';

    $("content").appendChild(nouveauDiv);
}



function cleanAlert(){
    $("alert").classList.remove("on");
    removeAllChild("alert");
}

var timeOut;
function goTimeOut(){
    timmeOut = setTimeout(cleanAlert, 2000);
}
function stopTimeOut(){
    clearTimeout( timmeOut );
}




var clipboard = new Clipboard('.btn');
clipboard.on('success', function(e) {
    var colorCode = [e.text];

    var alerteClass = $("alert").className;
    var alert = document.createElement("p");
    alert.innerHTML = '<span style="background-color:'+colorCode+'; width:20px; height:20px; display:inline-block;"></span> '+colorCode+' copié !';

    if (alerteClass == "alert"){
        $("alert").className += ' on';
        $("alert").appendChild(alert);
        goTimeOut()

    }else {
        stopTimeOut()
        removeAllChild("alert");
        $("alert").appendChild(alert);
        goTimeOut()
    }

    e.clearSelection();
});
