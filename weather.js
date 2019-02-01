class Weather{
    constructor(city, state){
        this.apiKey = '99dfe35fcb7de1ee';
        this.city = city;
        this.state = state;
    }

    // Fetch Weather from API

    async getWeather(){
        const responce = await fetch(`http://api.wunderground.com/api/${this.apiKey}/conditions/q/${this.state}/${this.city}.json`);
        
        const responceData = await responce.json();

        //console.log(responceData.current_observation);
        return responceData.current_observation;
    }

    // Change the location
    changeLocation(city, state){
        this.city = city;
        this.state = state;
    }
}