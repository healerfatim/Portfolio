<!--simple weatherapp-->
<!DOCTYPE html>
<html lang="en">
   <head>
     <meta charset="UTF-8">
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <link rel="stylesheet" href="styles.css">
     <script  src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
   </head>
   <body>
     <div class="container">
         <h1>WeatherApp</h1>
        <form id="weather-form">
           <label  for="city">Enter City:</label>
           <input type="text"  id="city" name="city"  placeholder="City name" required>
           <label for="country">Enter Country Code:</label>
           <input type="text"  id="country"  name="country"  placeholder="Country code(e.g.,US)" required>
           <label for="unit">Select  unit:</label>
           <select  id="unit" name="unit">
               <option  value="metric">Metric(&deg;C)</option>
               <option value="imperial">Imperial(&deg;F)</option>
               <option value="standard">Standard (K) </option>
               <option value="default">Default (Kelvin)</option>
           </select>
          <label for="lang">Select Language: </label>
          <select  id="Lang" name="Lang">
              <option  value="en">English</option>
              <option  value="es">Spanish</option>  
              <option  value="fr">French</option>
              <option  value="de">German</option>
              <option  value="zh">Chinese</option>
              <option value="ar">Arabic</option>
              <option value="hi">Hindi</option>
              <option value="ja">Japanese</option>
          </select>
          <label for="api-key">API Key</label>
                <input type="text" id="api-key" name="api-key" placeholder="Your API Key here" required>
                <label for="save-location">Save loaction</label>
                <input type="text" id="save-location" name="save-location" placeholder="location to save weather data " required>
                <label for="load-location">load location</label>
                <input type="text" id="load-location" name="load-location" placeholder="location to load weather data"required>
                <label for="save-file">Save file</label>
                <input type="text" id="save-fle" name="save-file" placeholder="file name to save weather data" required>


                <button type="submit">Get Weather</button>
                <button type="reset">Reset</button>
                <button type="button" id="save-button">Save</button>
                <button type="button" id="load-button">load</button>
                <div id="weather-result">
                <!-- Weather information will be displayed here -->
                <h2>Weather Information</h2>
                <p id="temperature">Temperature: <span></span></p>
                <p id="wind-speed">Wind-Speed: <span></span></p>
                <p id="humidity">Humidity: <span></span></p>
                <p id="description">Description: <span></span></p>
                <p id="pressure">Pressure: <span></span></p>
                <p id="visibility">Visibility: <span></span></p>
                <p id="clouds">Clouds: <span></span></p>
                <p id="location">location: <span></span></p>

            </div>
            <div id="error-message" style="color: red;"></div>
            <div id="success-message" style="color: green;"></div>
            <div id="loading-message" style="color: blue";></div>

            <div id=" saved-data" styles="color: green;"></div>
            <div id="loaded-data" styles="color: green;"></div>

            <div id="file-saved-message" style="color:green;"></div>
            <div id="file-loaded-message" style="color: green;"></div>
            


        </form>
     </div>  
   </body>
