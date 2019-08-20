function openMenu() {
    document.querySelector('.hero').classList.toggle('goodbye');
    document.querySelector('.tiles').classList.toggle('open-menu');
}



// function hoverTile() {
//     var tileID = event.target.parentNode.id;
//     tileID = tileID.split('');
//     oppID = 10-(tileID[tileID.length-1]);
//     tileID = tileID.splice(3, 1, oppID);
//     console.log(tileID);
// }
    // var tile9 = document.getElementById('col9');
    // tile9.style.opacity = "1";
    // tile9.innerHTML = "<h1>Original Songs</h1>";  
// function leaveTile() {
//     var tile9 = document.getElementById('col9');
//     tile9.innerHTML = "<img class='op-img' src='./assets/images/facebook.jpg'>";
//     tile9.style.transition = "opacity .25s";
//     tile9.style.opacity = 0;
//     tile9.onmouseover = function() {
//         tile9.style.opacity = "1";
//     } 
//     tile9.onmouseout = function() {
//         tile9.style.opacity = "0";
//     }
// }