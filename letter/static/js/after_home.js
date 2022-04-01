// 이미지 랜덤 배치
// window.onload=function randomLoc() {
//     var randomNum = 0;
//     var duo = document.getElementsByClassName("duo");
    
//     for(var i = 0; i < duo.length; i++) {
//         randomNum = Math.floor(Math.random() * 500) + 1;
//         duo[i].style.top = randomNum + "px";
//         randomNum = Math.floor(Math.random() * 1000) + 1;
//         duo[i].style.left = randomNum + "px";
//         duo[i].style.clear = "both";
//     }
    
// }

// 버튼 여러 개 추가
const print_buttons = function(id, num) {
    var str_html = "";
    for(var i = 0; i < num; i++) {
        var html_btn = '<input type="button" class="btn" id="' + '">'
        html_btn = html_btn.replace('{}', i);
        str_html = str_html + html_btn + '\n';
    }
    document.getElementById("").html(str_html);
}

// 아이콘 클릭하면 해당 메세지 보임 
function click_letter() {
    //window.location.href = '.html'
}

// window.addEventListener('DOMContentLoaded', event => {
//     // Navbar shrink function
//     var navbarShrink = function () {
//         const navbarCollapsible = document.body.querySelector('#mainNav');
//         if (!navbarCollapsible) {
//             return;
//         }
//         if (window.scrollY === 0) {
//             navbarCollapsible.classList.remove('navbar-shrink')
//         } else {
//             navbarCollapsible.classList.add('navbar-shrink')
//         }

//     };

//     // Shrink the navbar 
//     navbarShrink();

//     // Shrink the navbar when page is scrolled
//     document.addEventListener('scroll', navbarShrink);

//     // Activate Bootstrap scrollspy on the main nav element
//     const mainNav = document.body.querySelector('#mainNav');
//     if (mainNav) {
//         new bootstrap.ScrollSpy(document.body, {
//             target: '#mainNav',
//             offset: 74,
//         });
//     };

//     // Collapse responsive navbar when toggler is visible
//     const navbarToggler = document.body.querySelector('.navbar-toggler');
//     const responsiveNavItems = [].slice.call(
//         document.querySelectorAll('#navbarResponsive .nav-link')
//     );
//     responsiveNavItems.map(function (responsiveNavItem) {
//         responsiveNavItem.addEventListener('click', () => {
//             if (window.getComputedStyle(navbarToggler).display !== 'none') {
//                 navbarToggler.click();
//             }
//         });
//     });

// });