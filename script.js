fetch("wttr.in/?format=j1")
    .then((res)=>{
        return res.json();
    }).then((data)=>{
        let weatherList = data.results;
        for(let weather of weatherList){
            
            console.log(weather.name);

        }
        console.log(weatherList);
    }).catch((err)=>{
        console.log(err);
    });