


var api = "https://localhost:8443/api/lich-su?id-user=1"

start();
async function start(){
    await getLichSu(renderLichSu)
}
async function getLichSu(callback){
    await fetch(api)
        .then(response => response.json())
        .then(callback)
}
function renderLichSu(datas){
    const listMuaVe = document.querySelector('.danh-sach-ls-mua-ve')
    let index = 1;
    let html = datas.map(function (e){
        return `<div style="display: flex; flex-wrap: wrap;">
    <div class="nav Stt">${index++}</div>
    <div class="nav Phim">${e.tenPhim}</div>
    <div class="nav SoGhe">${e.soGhe}</div>
    <div class="nav GiaTien">${e.giaVe}</div>
    <div class="nav NgayMua">${e.ngayMua}</div>
</div>`
    })
    listMuaVe.innerHTML = html.join(' ');

}

