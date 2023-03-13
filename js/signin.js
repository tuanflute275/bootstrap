function login(e) {
    event.preventDefault()
    var username = document.querySelector('#username').value
    var email = document.querySelector('#email').value
    var password = document.querySelector('#password').value
    var user = localStorage.getItem(username);
    var data  = JSON.parse(user)
if(user == null){
    // alert('vui lòng nhập username password')
}else if (username == data.username && email == data.email && password == data.password){
    alert('Đăng nhập thành công');
    window.location.href = "./index.html"
}else{
    alert('đăng nhập thất bại');
}
}