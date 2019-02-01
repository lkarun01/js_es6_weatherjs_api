// Init storage
const storage = new Storage();

// Get stored location data
const weathrLocation = storage.getLocationData();

// Init weather object

const weather = new Weather(weathrLocation.city, weathrLocation.state);
const ui = new UI();

// Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

// change location event
document.getElementById('w-change-btn').addEventListener('click', (e) => {
    const city = document.getElementById('city').value;
    const state = document.getElementById('state').value;

    //console.log(city + ' ' + state); 
    weather.changeLocation(city, state);

    storage.setLocationData(city, state);
    getWeather();

    // close the modal
    $('#locModal').modal('hide');
});

function getWeather(){
    weather.getWeather()
        .then(
            result => { 
                //console.log(result); 
                ui.paint(result);
        })
        .catch(err => {
            console.log(err);
        });
}