$(document).ready(function () {
    $(".testi-list").owlCarousel({
        loop: true,        // Lặp vô hạn
        margin: 20,        // Khoảng cách giữa các phần tử
        nav: true,         // Hiển thị nút điều hướng
        dots: true,        // Hiển thị chấm tròn điều hướng
        autoplay: true,    // Tự động chạy
        autoplayTimeout: 3000,  // Thời gian chuyển slide (ms)
        autoplayHoverPause: true, // Dừng khi di chuột vào
        items: 1,          // Hiển thị 1 mục trên mỗi lần
        navText: [
            "<i class='bi bi-chevron-left'></i>",
            "<i class='bi bi-chevron-right'></i>"
        ]
    });
});
$(document).ready(function(){
    $(".hero-list").owlCarousel({
        items: 1,              // Hiển thị 1 phần tử mỗi lần
        loop: true,            // Lặp vô tận
        autoplay: true,        // Tự động chạy
        autoplayTimeout: 5000, // Chạy sau 5 giây
        autoplayHoverPause: true,
        nav: true,             // Hiển thị nút điều hướng
        dots: true,            // Hiển thị chấm tròn
        navText: ["<i class='bi bi-chevron-left'></i>", "<i class='bi bi-chevron-right'></i>"] // Icon Bootstrap
    });
});
$(document).ready(function(){
    $('.coffee-shop').owlCarousel({
        loop: true,
        autoplay: true,
        smartSpeed: 1550,
        autoplayTimeout: 10000,
        dots: true,
        nav: false,
        center: true,
        margin: 30,
        navText: ["<i class='bi bi-arrow-left'></i>", "<i class='bi bi-arrow-right'></i>"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            },
            1200: {
                items: 4
            },
            1920: {
                items: 5
            }
        }
    });
});
$(document).ready(function(){
$('.team-list').owlCarousel({
    loop: true,
    autoplay: true,
    smartSpeed: 1550,
    autoplayTimeout: 1550,
    dots: false,
    nav: true,
    margin:20,
    center: true,
    navText: ["<i class='bi bi-arrow-left''></i>", "<i class='bi bi-arrow-right''></i>"],
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 2
        },
        992: {
            items: 2
        },
        1200: {
            items: 3
        },
        1920: {
            items: 3
        }
    }
})
});













document.querySelector(".menu-toggle").addEventListener("click", function () {
    document.querySelector(".dreamhub_menu").classList.toggle("active");
});

document.querySelectorAll(".has-submenu > a").forEach(item => {
    item.addEventListener("click", function (e) {
        e.preventDefault();
        this.nextElementSibling.classList.toggle("active");
        this.querySelector("i").classList.toggle("fa-chevron-up");
    });
});
