const loadCountries =() =>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountries(data))
}

const displayCountries = (countries) =>{
    // for(const country of countries){
    //     console.log(country);
    // }
    const countriesContainer =document.getElementById('countries-container');
    countries.forEach(country =>{
        console.log(country);
       const countryDiv=document.createElement('div');
       countryDiv.classList.add('country');
       countryDiv.innerHTML=`
       <h3> Name:${country.name.common} </h3>
       <p> capital : ${country.capital} </p>
       <button onclick="loadCountryDetail()">Details </button>
       `
       countriesContainer.appendChild(countryDiv);
    })

}

const loadCountryDetail = () =>{
    console.log('get country detail');
}

loadCountries();