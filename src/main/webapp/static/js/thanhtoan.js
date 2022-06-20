
start();
async function start(){
    await getSuatChieu(renderSuatChieu);
    handleThanhToan();

}
async function getSuatChieu(callback){
    let idSuatChieu = sessionStorage.getItem('idSuatChieu');
    let api = 'https://localhost:8443/api/suat-chieu/'+  idSuatChieu;
    fetch(api)
        .then(response => response.json())
        .then(callback)
}

function renderSuatChieu(data){

    let lstItemVe = document.querySelector('.container')
    var html = `<table>
        <tr>
            <th>Phim</th>
            <th>Rạp</th>
            <th>Phòng</th>
            <th>Ngày mua</th>
            <th>Thời gian</th>
            <th>Ghế</th>
            <th>Giá vé</th>
            <th>Thành tiền</th>
        </tr>
        <tr>
                <td>${data.phim.tenPhim}</td>
                <td>${data.phongChieu.rap.tenRap}</td>
                <td>${data.phongChieu.tenPhong}</td>
                <td>${dateNow()}</td>
                <td>${data.ngayChieu}, ${data.thoiGianBD}</td>
                <td>${sessionStorage.getItem('lstGhe')}</td>
                <td>${data.giaVe}</td>
                <td>${tongTien(sessionStorage.getItem('lstGhe'), data.giaVe)}</td>
            </tr>
</table>`;
    lstItemVe.innerHTML = html;
}
function dateNow(){
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = mm + '/' + dd + '/' + yyyy
    return today;
}
function tongTien(lst, giave){
    const arr = lst.split(",")
    return arr.length * giave;
}


async function sendData(url){
    const formData = new FormData();
    formData.append("soLuong", 14785);
    formData.append("tongTien", 14785);
    formData.append("idUser", 1);
    await fetch(url, {
        method: 'POST',
        body: formData
    })
        .then(response => response.json())
        .then(async data => {
            const idHoaDon = data;

            const arr = getListGhe(sessionStorage.getItem('lstIdGhe'));
            const idSuatChieu = sessionStorage.getItem('idSuatChieu')
            for(let i in arr){
                console.log(arr[i])
                const formData1 = new FormData();
                formData1.append('idGhe', arr[i]);
                formData1.append('idSuatChieu', idSuatChieu);
                formData1.append('idHoaDon', idHoaDon);
                await fetch('https://localhost:8443/api/ve', {
                    method: 'POST',
                    body: formData1
                })
                    .then(response1 => response1.json())
                    .then(async data1 => {
                        const formData2 = new FormData();
                        formData2.append('idGhe', data1.ghe.idGhe);
                        await fetch('https://localhost:8443/api/ghe',{
                            method: 'PUT',
                            body: formData2
                        })

                    })
            }
            })


}
const btnMuaVe = document.querySelector('.btnMuaVe')
btnMuaVe.addEventListener('click', function(){
    sendData('https://localhost:8443/api/hoa-don')
    console.log(1);
})

function getListGhe(arr){
   const arrtmp = arr.split(",")
    return arrtmp;
}


function handleThanhToan(){
    console.log("da chay vao");
    const popupThanhToan = document.querySelector(".popup-thanh-toan-thanh-cong")
    document.querySelector(".btnMuaVe").addEventListener("click",function(){
        popupThanhToan.classList.toggle("hide");
        setTimeout(function(){
            window.location="/trang-chu";
        },3000)
    })
    document.querySelector(".cls-btn").addEventListener("click",function(){
        popupThanhToan.classList.toggle("hide");
    })
}



