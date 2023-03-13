function signup(e){
    var username = document.querySelector('#username').value
    var email = document.querySelector('#email').value
    var password = document.querySelector('#password').value
    var form = document.querySelector('form')
    var user = {
        username: username,
        email: email,
        password: password,
    }
    var json = JSON.stringify(user);
    localStorage.setItem(username, json);
    alert("Đăng kí thành công")
}