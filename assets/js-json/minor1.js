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
    //hide-show lyrics
    var lyricsSection = document.querySelector('.lyrics-section');
    var expandButton = document.querySelector('.expand-button');
    var collapseButton = document.querySelector('.collapse-button');
  
    function toggleLyrics() {
      if (lyricsSection.style.maxHeight) {
        lyricsSection.style.maxHeight = null;
        expandButton.style.display = 'inline';
        collapseButton.style.display = 'none';
      } else {
        lyricsSection.style.maxHeight = 'none';
        expandButton.style.display = 'none';
        collapseButton.style.display = 'inline';
      }
    }
  
    expandButton.addEventListener('click', toggleLyrics);
    collapseButton.addEventListener('click', toggleLyrics);
    // click icon like-change color
    var icon = document.querySelector('.icon');
    var iconLike = document.querySelector('#iconlike');
    var isLiked = false; // Theo dõi trạng thái hiện tại

    icon.addEventListener('click', function() {
      if (isLiked) {
        iconLike.style.color = ''; // Đặt màu trống để trở về màu ban đầu
      } else {
        iconLike.style.color = 'blue';
      }
      
      isLiked = !isLiked; // Đảo ngược trạng thái
    });
    //click comment
    var icon = document.querySelector('.comment');
    var commentBox = document.querySelector('.comment-box');
    var submitButton = document.getElementById('submitButton');
    var closeButton = document.getElementById('closeButton');
    var commentInput = document.querySelector('.comment-box input');
  
    icon.addEventListener('click', function() {
      commentBox.style.display = 'block';
      commentInput.focus(); // Thêm dòng này để focus vào input khi click vào icon
    });
  
    function closeCommentBox() {
      commentBox.style.display = 'none';
    }
  
    window.addEventListener('click', function(event) {
      if (!commentBox.contains(event.target) && !icon.contains(event.target)) {
        closeCommentBox();
      }
    });
  
    closeButton.addEventListener('click', closeCommentBox);
    submitButton.addEventListener('click', closeCommentBox);
    // click comment focus
    
  //   //Cuộn ảnh đề xuất
    const contentRow = document.querySelector('.content-row');
  const contentItems = contentRow.querySelectorAll('.content-item');
  const itemWidth = contentItems[0].offsetWidth;
  let currentIndex = 0; // Lưu chỉ số của div đầu tiên

  function moveItems() {
    contentRow.style.transition = 'transform 1s ease-in-out';

    // Di chuyển mỗi content-item sang trái một khoảng bằng kích thước của nó
    contentRow.style.transform = `translateX(-${itemWidth}-15px)`;

    setTimeout(function() {
      // Di chuyển div đầu tiên xuống cuối danh sách
      const firstItem = contentRow.querySelector('.content-item:first-child');
      contentRow.removeChild(firstItem);
      contentRow.appendChild(firstItem);

      // Đặt lại tịnh tiến về vị trí ban đầu
      contentRow.style.transition = 'none';
      contentRow.style.transform = 'translateX(0)';

      currentIndex = (currentIndex + 1) % contentItems.length; // Tăng chỉ số lên và xử lý vòng tròn
    }, 1000); // Sau 1 giây (1000 milliseconds)
  }

  setInterval(moveItems, 2000); // Mỗi 2 giây (2000 milliseconds)
      //click next-pre rcm
      const leftArrow = document.querySelector('.left-arrow');
    
    leftArrow.addEventListener('click', function() {
        const lastItem = contentRow.lastElementChild;
        contentRow.removeChild(lastItem);
        contentRow.insertBefore(lastItem, contentRow.firstElementChild);
    });
    const rightArrow = document.querySelector('.right-arrow');
    rightArrow.addEventListener('click', function() {
        const firstItem = contentRow.firstElementChild;
        contentRow.removeChild(firstItem);
        contentRow.insertBefore(firstItem, contentRow.lastElementChild);
    });
  //change color icon heart
  var heartIcons = document.querySelectorAll('.fa-heart');

  heartIcons.forEach(function(icon) {
    icon.addEventListener('click', function() {
      if (icon.style.color === 'red') {
        icon.style.color = ''; // Đặt màu trống để trở về màu ban đầu
      } else {
        icon.style.color = 'red';
      }
    });
  });
  //tét
        
  });
  