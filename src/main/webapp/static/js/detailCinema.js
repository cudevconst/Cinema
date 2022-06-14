async function start(){
    await getAllDetailCinema(rederDetailCinema);

}



const url = window.location.search;
const urlParams = new URLSearchParams(url);
sessionStorage.setItem("movieID", urlParams.get("mid"))
const movieID = sessionStorage.getItem("movieID")
start();
async function getAllDetailCinema(callback){
    let api = "http://localhost:8080/api/phim/" + movieID
    await fetch(api)
        .then( await function(response){
            return response.json();
        })
        .then(callback)
}


function rederDetailCinema(detailCinema){

    let detail = document.querySelector(".detail-cinema");
    let htmls = `
                <div style="display: flex; width: 100%;">
                    <div class="image-cinema">
                        <img src="static/img/${detailCinema.anhPhim}" src="">
</div>
                    <div class="title-cinema">
                        <h2>${detailCinema.tenPhim}</h2>
                        <p><span>Mô tả: </span>${detailCinema.moTa}</p>
                        <p><span>Thời gian: </span>${detailCinema.thoiLuong} phút</p>
                        <p><span>Quốc gia: </span>${detailCinema.quocGia}</p>
                        <p><span>Thể loại: </span>${detailCinema.loaiPhim}</p>
                        <button><i class="fa-solid fa-ticket"></i> MUA VÉ</button>
                    </div>
                </div>
                
            `


    detail.innerHTML = htmls;
}