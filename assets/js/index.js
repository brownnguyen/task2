
function domAll(selector) {
    return document.querySelectorAll(selector);
}
function dom(selector) {
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

// "use strict";
// let check = domAll('.check');
// for (let i = 0; i < check.length; i++) {
//     check[i].onclick = function () {
//         for (let j = 0; j < check.length; j++) {
//             console.log(j)
//             if (check[j].classList.contains('active')) {
//                 check[j].classList.remove('active');
//             }
//         }
//         check[i].classList.add('active');
//     }
// }
var check = domAll('.check');
var _loop = function _loop(i) {
    check[i].onclick = function () {
        for (var j = 0; j < check.length; j++) {
            if (check[j].classList.contains('active')) {
                check[j].classList.remove('active');
            }
        }
        check[i].classList.add('active');
    };
};
for (var i = 0; i < check.length; i++) {
    _loop(i);
}

// $(function () {
//     $('.header__button').on('click', function () {
//         if (!$(this).is('.active')) {
//             $(this).addClass('active');
//             $('.header__nav').addClass('active');
//             Scroll.disable();
//         } else {
//             $(this).removeClass('active');
//             $('.header__nav').removeClass('active');
//             Scroll.enable();
//         }
//     });
var header = (function () {
    let headerButton = document.querySelector('.header__button');
    headerButton.onclick = function () {
        let headerNav = document.querySelector('.header__nav');
        if (!headerButton.classList.contains('active')) {
            headerButton.classList.add('active');
            headerNav.classList.add('active');
            Scroll.disable();
        }
        else {
            headerButton.classList.remove('active');
            headerNav.classList.remove('active');
            Scroll.enable()
        }
    }
    const Scroll = (function () {
        // left: 37, up: 38, right: 39, down: 40,
        // spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
        var keys = { 37: 1, 38: 1, 39: 1, 40: 1 };
        function preventDefault(e) {
            e.preventDefault();
        }
        function preventDefaultForScrollKeys(e) {
            if (keys[e.keyCode]) {
                preventDefault(e);
                return false;
            }
        }
        var supportsPassive = false;
        try {
            document.body.addEventListener("test", null, Object.defineProperty({}, 'passive', {
                get: function () { supportsPassive = true; }
            }));
        } catch (e) {
            console.log('not catch error');
        }
        var wheelOpt = supportsPassive ? { passive: false } : false;
        var wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';
        // call this to Disable
        function disableScroll() {
            document.body.addEventListener('DOMMouseScroll', preventDefault, false); // older FF
            document.body.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
            document.body.addEventListener('touchmove', preventDefault, wheelOpt); // mobile
            document.body.addEventListener('keydown', preventDefaultForScrollKeys, false);
        }

        // call this to Enable
        function enableScroll() {
            document.body.removeEventListener('DOMMouseScroll', preventDefault, false);
            document.body.removeEventListener(wheelEvent, preventDefault, wheelOpt);
            document.body.removeEventListener('touchmove', preventDefault, wheelOpt);
            document.body.removeEventListener('keydown', preventDefaultForScrollKeys, false);
        }
        return {
            disable: disableScroll,
            enable: enableScroll
        }
    })();
});

let topHeader = dom(".header");
window.onscroll = function () {
    var _curPos = window.pageYOffset;
    var _curH = window.innerHeight / 2;
    if (_curPos > _curH) {
        document.querySelector('.backTop').style.opacity = 1;
        document.querySelector('.backTop').style.visibility = "visible"
    }
    else {
        document.querySelector('.backTop').style.opacity = 0;
        document.querySelector('.backTop').style.visibility = "hidden"
    }
    if (window.pageYOffset > 0) {
        topHeader.classList.add("fixedTop");
    }
    else {
        topHeader.classList.remove("fixedTop")
    }
}
$('.backTop').click(function (event) {
    $('html,body').animate({
        scrollTop: 0
    }, 1000, 'swing');
    return false;
});

let dropdownBtn = document.querySelector('.dropbtn');
let dropdownHeader = document.querySelector('.dropdown')
dropdownBtn.onclick = function () {
    let dropdownContent = document.querySelector('.dropdown-content')
    let heightDrop = 0;
    if (!dropdownHeader.classList.contains('active')) {
        dropdownHeader.classList.add('active');
        for (let i = 0; i < dropdownContent.children.length; i++) {
            heightDrop += parseFloat(getComputedStyle(dropdownContent.children[i], null).height.replace("px", ""));
        }
        dropdownContent.style.height = heightDrop + "px";

    }
    else {
        dropdownHeader.classList.remove('active');
        dropdownContent.style.height = 0;
    }
}
window.onload = function () {
    header();
}