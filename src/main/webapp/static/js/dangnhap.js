

function dangNhap(){
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    let api = 'https://localhost:8443/api/dang-nhap?user-name=' + username +
        '&pass-word=' + password;
    fetch(api)
        .then(response => response.json())
        .then(data => sessionStorage.setItem("idUser", data.idUser))
        .then(function (){
            document.getElementById('frm-dang-nhap').submit()
        })
}
