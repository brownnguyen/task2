function domAll(selector){
    return document.querySelectorAll(selector);
}
function dom(selector){
    return document.querySelector(selector);
}
function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}
let check = domAll('.check');
for(let i = 0; i < check.length; i++){
    check[i].onclick = function(){
        for(let j = 0; j < check.length; j ++){
            if(check[j].classList.contains('active')){
                check[j].classList.remove('active');
                
            }
        }
        check[i].classList.add('active');
    }
}