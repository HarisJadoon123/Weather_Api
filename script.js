async function weather(){
    let inputData = document.querySelector(".data");
    let image = document.getElementById("thes")
    let centi = document.querySelector(".centi");
    let foran = document.querySelector(".foran");
    let wind = document.querySelector(".wind");
    let name = document.querySelector(".name");
    let region = document.querySelector(".region");
    let country = document.querySelector(".country");

    let a = await fetch(`http://api.weatherapi.com/v1/current.json?key=53a3341e353e4265b2773107262302&q=${inputData.value}`);
    let b = await a.json();
    console.log(b);
    image.src = b.current.condition.icon;
    centi.innerHTML =`<p>Temperature in Celsius</p> ${b.current.temp_c}`;
    foran.innerHTML =`<p>Temperature in Faranheight</p> ${b.current.temp_f}`;
    wind.innerHTML = `<p>Wind Speed </p> ${b.current.wind_kph}`;
    console.log(b.location)
    name.innerHTML =`<p>Name</p> ${b.location.name}`;
    region.innerHTML =`<p>Region</p> ${b.location.region}`;
    country.innerHTML = `<p>Country </p> ${b.location.country}`;

}
async function main(e){
    e.preventDefault();
    await weather();
}