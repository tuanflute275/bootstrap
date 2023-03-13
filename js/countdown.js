    // Thiết lập thời gian đích mà ta sẽ đếm
    var countDownDate = new Date("February 31, 2023 00:00:25").getTime();

    // cập nhập thời gian sau mỗi 1 giây
    var x = setInterval(function () {

        // Lấy thời gian hiện tại
        var now = new Date().getTime();

        // Lấy số thời gian chênh lệch
        var distance = countDownDate - now;

        // Tính toán số ngày, giờ, phút, giây từ thời gian chênh lệch
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // nếu nhỏ hơn 10 thì thêm số 0
        if (days < 10) {
            days = "0" + days;
        }
        if (hours < 10) {
            hours = "0" + hours;
        }
        if (minutes < 10) {
            minutes = "0" + minutes;
        }
        if (seconds < 10) {
            seconds = "0" + seconds;
        }

        // HIển thị chuỗi thời gian trong thẻ các thẻ span
        var day = document.querySelector('.day').innerHTML = days
        var hours = document.querySelector('.hour').innerHTML = hours
        var minute = document.querySelector('.minute').innerHTML = minutes
        var second = document.querySelector('.second').innerHTML = seconds

        // Nếu thời gian kết thúc, hiển thị chuỗi thông báo
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("demo").innerHTML = "Thời gian đếm ngược đã kết thúc";
        }
    }, 1000);