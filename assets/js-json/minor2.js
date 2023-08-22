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
    //change char name
    const filterLinks = document.querySelectorAll('.anpha-fillter a');
    const singerItems = document.querySelectorAll('.list-singer');
    const allLink = document.querySelector('.anpha-fillter a[data-filter="all"]');
    
    // Đặt màu mặc định cho chữ "Tất cả" là xanh biển
    allLink.style.color = 'deepskyblue';
    
    function removeDiacritics(str) {
        return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    }
    
    filterLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
    
            // Trả lại màu vốn có cho tất cả các chữ cái
            filterLinks.forEach(otherLink => {
                otherLink.style.color = '';
            });
    
            // Đặt màu chữ cái hiện tại là màu xanh biển
            this.style.color = 'deepskyblue';
    
            const filterValue = this.getAttribute('data-filter');
    
            singerItems.forEach(item => {
                const nameSinger = item.querySelector('.name-singer a');
                const firstCharacter = removeDiacritics(nameSinger.textContent.charAt(0).toUpperCase());
    
                if (firstCharacter === filterValue || filterValue === 'all') {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

    const images = document.querySelectorAll('.container .singer img');

    images.forEach(image => {
        image.addEventListener('mouseover', function() {
            this.style.transform = 'scale(1.1)';
        });
    
        image.addEventListener('mouseout', function() {
            this.style.transform = 'scale(1)';
        });
    });
    
        
});
