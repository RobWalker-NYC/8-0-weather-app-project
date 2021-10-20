
function cap(name) {
  return name[0].toUpperCase() + name.slice(1);
}

let form = document.querySelector("form");


function getWeather() {
 let city = form["pick-location"].value
//    console.log(city);
    fetch(`https://wttr.in/${city}?format=j1`)
    .then((res)=>{
        return res.json();
    }).then((data)=>{
    //  console.log(data);

    







    })
    .catch((err)=>{
        console.log(err);
    });
}
getWeather();

// form.addEventListener("submit", (e) =>{
//     // let currentCity = document.querySelector().textContent;
//     e.preventDefault();
//   getWeather();  
  
// });



        // for(let weather of weatherList){
            
        //    let { city} = weather;
        //     console.log(city);

        // let form = document.querySElector("form");
        // form.addEventListener("submit");
        // e.preventDefault();
        // console.log("Button Click");

        // }
        // console.log(weatherList);
