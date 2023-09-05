<script>
document.addEventListener('DOMContentLoaded', function () {
    const gallery = document.querySelector('.thuvien-catalouge-mpe');
    let zoomedImg = null; // Biến để theo dõi hình ảnh đang được zoom

    // Tạo các hình ảnh và thêm vào gallery
    for (let i = 1; i <= 236; i++) {
        const img = document.createElement('img');
        img.src = `https://diennangdongnai.com/upload/images/Catalouge/MPE/catalouge-mpe-2023-${i.toString().padStart(3, '0')}.jpg`;
        gallery.appendChild(img);

        // Thêm sự kiện click cho mỗi hình ảnh
        img.addEventListener('click', function () {
            if (zoomedImg === img) {
                unzoomImage(img);
                zoomedImg = null;
            } else {
                zoomImage(img);
                if (zoomedImg !== null) {
                    unzoomImage(zoomedImg);
                }
                zoomedImg = img;
            }
        });
    }   

    // Thêm sự kiện click ra ngoài để tắt zoom
    document.addEventListener('click', function (event) {
        if (zoomedImg !== null && !zoomedImg.contains(event.target)) {
            unzoomImage(zoomedImg);
            zoomedImg = null;
        }
    });

    // Hàm để đưa ảnh lên trên cùng
    function bringToFront(imgElement) {
        imgElement.style.zIndex = '999999';
    }

    // Hàm để zoom ảnh
    function zoomImage(imgElement) {
        bringToFront(imgElement); // Đưa ảnh lên trên cùng
        imgElement.style.transform = 'scale(2)'; // Tăng kích thước ảnh lên gấp đôi
        imgElement.style.transition = 'transform 0.2s'; // Thêm hiệu ứng transition
    }

    // Hàm để tắt zoom ảnh
    function unzoomImage(imgElement) {
        imgElement.style.transform = 'scale(1)'; // Trả về kích thước ban đầu
        imgElement.style.transition = 'transform 0.2s'; // Thêm hiệu ứng transition
        imgElement.style.zIndex = 'auto'; // Đặt lại chỉ số z để ảnh không nằm trên cùng
    }
});
</script>
