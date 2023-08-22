document.addEventListener('DOMContentLoaded', function() {
     // click setting
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
    toggleClassOnClick('.setting', 'hide-show');
    // Đặt data-target cho các phần tử .setting để xác định phần tử cần thay đổi class
    
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
    //tét
    const topicImages = document.querySelectorAll('.list-topic img');

    topicImages.forEach(image => {
        image.addEventListener('mouseenter', function() {
            const img = this;
            img.style.transition = 'transform 1s ease'; // Thêm hiệu ứng transition
    
            setTimeout(() => {
                img.style.transform = 'scale(1.2)';
            }, 100); // Đợi 100ms trước khi thực hiện phóng to
        });
    
        image.addEventListener('mouseleave', function() {
            this.style.transition = 'transform 1s ease'; // Thêm hiệu ứng transition
            this.style.transform = 'scale(1)';
        });
    });
    
});
