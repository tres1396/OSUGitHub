//create search history
$(document).ready(function () {
    var cityInputEl = $("#city-input");


    var printSearchHistory = function (city) {
        var searchHistoryDiv = $("#search-history");

        var searchInputEl = $("<div>");
        searchInputEl.addClass("col-12 col-sm-4 col-md-3")

        var searchEl = $("<div>");
        searchEl.addClass("list-group");
        searchEl.appendTo(searchInputEl);

        var searchItem = $("<li>").addClass("list-group-item").text(city)
        searchItem.appendTo(searchEl);

        searchHistoryDiv.append(searchInputEl);
    }

    var handleFormSubmit = function (event) {
        event.preventDefault();
        var cityInput = cityInputEl.val();

        if (!cityInput) {
            alert("Please enter a city!");
            return
        }

        printSearchHistory(cityInput);
        //reset form
        cityInputEl.val("")
    }
    $("#button-addon2").on("click", handleFormSubmit);
})

//fetch API data
function getApi(city) {
    var apiKey = "c15e69f24e888598013d71da9fec0bb8"
    // var dummyUrl = "http://api.openweathermap.org/data/2.5/forecast?q=atlanta&appid=c15e69f24e888598013d71da9fec0bb8"
    // var requestUrl = dummyUrl
    var requestUrl = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=c15e69f24e888598013d71da9fec0bb8`
    fetch(requestUrl)
        .then(function (response) {
            return response.json();
        })

        .then(function (json) {
            console.log(json)
            var list = json.list
            populateCards(list)
        })



}

getApi()
function populateCards(cardData) {
    console.log(cardData)
    var fiveDayWeather = []
    for (var x = 0; x < cardData.length; x++) {
        var item = cardData[x]
        var dateString = item.dt_txt
        console.log(item.weather[0].main)
        if (dateString.includes("12:00")) {
            fiveDayWeather.push(item)
        }
    }
    console.log(fiveDayWeather)
    var cardsContainer = document.getElementById("cards-container")
    cardsContainer.innerHTML = ""
    for (var x = 0; x < fiveDayWeather.length; x++) {
        var weatherObj = fiveDayWeather[x]
        var card = generateCard(weatherObj)
        cardsContainer.innerHTML += card
    }
}

function generateCard(weatherObj) {
    console.log(weatherObj)
    console.log(weatherObj.main.temp,weatherObj.main.humidity)
    var k = weatherObj.main.temp
    var humidity = weatherObj.main.humidity
    var weather = weatherObj.weather[0].main
    var iconHtml 
    if (weather == "Rain") {
        // iconHtml = 
    }






    var card = ` <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">Banana</h5>
      <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
      <p class="card-text">Temp: ${kToF(k)}</p>
      <p class="card-text">Humidity: ${humidity}</p>
    </div>
</div>`
    return card
}

function kToF(k) {
    return    (k - 273) * 9 / 5 + 32
}