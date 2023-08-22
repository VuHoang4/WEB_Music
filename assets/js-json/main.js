// change img slider
const slider = document.getElementById('slider');
const imageNames = ['1', '2', '3', '4', '5'];
let currentImageIndex = 0;
function changeImage() {
    currentImageIndex = (currentImageIndex + 1) % imageNames.length;
    const newImageName = imageNames[currentImageIndex];
    slider.style.background = `url('/assets/images/slider_${newImageName}.jpg') top center / cover no-repeat`;
    setTimeout(changeImage, 2000); // Thay đổi ảnh sau 2 giây
}
// Gọi hàm để bắt đầu thay đổi ảnh
changeImage();

document.addEventListener('DOMContentLoaded', function() {
    // cuộn header
    const header = document.querySelector('.header');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 760) {
            header.style.backgroundColor = ' rgba(50,60,100,1)'; // Thay đổi màu nền
        } else {
            header.style.backgroundColor = ''; // Đặt lại màu nền ban đầu
        }
    });
    // click per
    function toggleClassOnClick(target, className) {
        const elements = document.querySelectorAll(target);
        if (elements) {
            elements.forEach(function(element) {
                element.addEventListener('click', function() {
                    const targetSelector = this.getAttribute('data-target');
                    const targetElement = document.querySelector(targetSelector);
                    if (targetElement) {
                        targetElement.classList.toggle(className);
                    }
                });
            });
        }
    }

    toggleClassOnClick('.per', 'hide-show');
    toggleClassOnClick('.setting', 'hide-show');

    // Đặt data-target cho các phần tử .per và .setting để xác định phần tử cần thay đổi class
    const per = document.querySelector('.per');
    if (per) {
        per.setAttribute('data-target', '.per-subset');
    }

    const setting = document.querySelector('.setting');
    if (setting) {
        setting.setAttribute('data-target', '.subset');
    }
    // Xoay fa-cog khi có click
    const settingIcon = document.querySelector('.setting > i.fa-solid.fa-cog');
    let rotated = false; // Biến để kiểm tra trạng thái đã xoay hay chưa

    settingIcon.addEventListener('click', function() {
        if (!rotated) {
            // Nếu chưa xoay, thực hiện xoay 45 độ 
            settingIcon.style.transform = 'rotate(90deg)';
        } else {
            // Nếu đã xoay, thực hiện xoay lùi 45 độ 
            settingIcon.style.transform = 'rotate(0)';
        }

        rotated = !rotated; // Đảo trạng thái của biến rotated
    });
    // Đổi màu của user khi click
    const perIcon = document.querySelector('.per > i.fa-solid.fa-user');
    let clicked = false; // Biến để kiểm tra trạng thái đã click hay chưa

    perIcon.addEventListener('click', function() {
        if (!clicked) {
            // Nếu chưa click, thực hiện thay đổi màu
            perIcon.style.color = 'rgba(8, 5, 245, 0.7)';
        } else {
            // Nếu đã click, trở lại màu ban đầu
            perIcon.style.color = ''; // Đặt lại màu ban đầu
        }

        clicked = !clicked; // Đảo trạng thái của biến clicked
    });
    // Rê chuột trên ảnh top-hit
    const images = document.querySelectorAll('.box-video-hot .bvh-item-img,.box-artist-hot .hot-list-img');

    images.forEach(image => {
        image.addEventListener('mouseover', function() {
            this.style.transform = 'scale(1.1)';
        });
    
        image.addEventListener('mouseout', function() {
            this.style.transform = 'scale(1)';
        });
    });
    // rê chuột trên ảnh hot-music
    //const imageContainer = document.querySelector('.image-container');
    const topImage = document.querySelector('.top-image');
    const bottomImage = document.querySelector('.bottom-image');
    
    topImage.addEventListener('mouseenter', function() {
        bottomImage.style.transform = 'rotate(360deg)';
    });
    
    topImage.addEventListener('mouseleave', function() {
        bottomImage.style.transform = 'none';
    });
    // Click navigation khi kich thuoc o Tablet
const liElements = document.querySelectorAll('#nav-personal #nav > li');

// Lắng nghe sự kiện click cho mỗi thẻ li
liElements.forEach(li => {
    li.addEventListener('click', function() {
        // Kiểm tra kích thước màn hình
        if (window.innerWidth >= 46.1875 * 16 && window.innerWidth <= 63.9375 * 16) {
            // Tìm submenu tương ứng với li được click
            const submenu = this.querySelector('.submenu-nav');
            
            // Kiểm tra nếu submenu đã hiển thị, thì ẩn nó, ngược lại thì hiển thị
            if (submenu.classList.contains('active')) {
                submenu.classList.remove('active');
            } else {
                // Ẩn tất cả các submenu trước khi hiển thị submenu mới
                document.querySelectorAll('.submenu-nav').forEach(submenu => {
                    submenu.classList.remove('active');
                });
                
                submenu.classList.add('active');
            }
        }
    });
});

    
});



