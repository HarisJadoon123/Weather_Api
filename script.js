async function weather(){
    let inputData = document.querySelector(".data");
    let image = document.getElementById("thes")
    let dut = document.querySelector(".dut");
    let a = await fetch(`http://api.weatherapi.com/v1/current.json?key=53a3341e353e4265b2773107262302&q=${inputData.value}`)
    let b = await a.json();
    console.log(b)
    image.src = b.current.condition.icon;
    dut.innerHTML = b.current.temp_c
}
async function main(e){
    e.preventDefault();
    await weather();
}