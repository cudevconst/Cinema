function rap(callback){
    var api = 'http://localhost:8080/api/rap';
    fetch(api)
        .then(response => response.json())
        .then(callback)
}
function renderRap(data){
    var cars = document.getElementById('cars')
    let select = true
    var html = data.map(e => {
        if(select){
            select = false
            return `
            <option selected="selected" value="${e.tenRap}">${e.tenRap}</option>`
        }
        else{
            return `
        <option value="${e.tenRap}">${e.tenRap}</option>`
        }
    })
    cars.innerHTML = html.join(' ')
}
function start(){
    rap(renderRap)
}
start();

