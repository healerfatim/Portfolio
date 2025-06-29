$(document).ready(function() {
                    $('#weather-form').on('submit', function(event) {
                        event.preventDefault();
                        const city = $('#city').val();
                        const country = $('#country').val();
                        const unit = $('#unit').val();
                        const lang = $('#Lang').val();
                        const apiKey = $('#api-key').val();

                        if (!apiKey) {
                            $('#error-message').text('API Key is required.');
                            return;
                        }

                        $('#loading-message').text('Loading weather data...');
                        $('#error-message').text('');
                        $('#success-message').text('');

                        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=${unit}&lang=${lang}&appid=${apiKey}`;

                        $.ajax({
                            url: apiUrl,
                            method: 'GET',
                            success: function(data) {
                                $('#temperature span').text(data.main.temp + '°');
                                $('#wind-speed span').text(data.wind.speed + ' m/s');
                                $('#humidity span').text(data.main.humidity + '%');
                                $('#description span').text(data.weather[0].description);
                                $('#pressure span').text(data.main.pressure + ' hPa');
                                $('#visibility span').text(data.visibility + ' m');
                                $('#clouds span').text(data.clouds.all + '%');
                                $('#location span').text(data.name + ', ' + data.sys.country);

                                $('#loading-message').text('');
                                $('#success-message').text('Weather data loaded successfully.');
                            },
                            error: function() {
                                $('#loading-message').text('');
                                $('#error-message').text('Failed to fetch weather data. Please check your inputs.');
                            }
                        });
                    });

                    $('#save-button').on('click', function() {
                        const saveLocation = $('#save-location').val();
                        const saveFile = $('#save-file').val();
                        const weatherData = {
                            temperature: $('#temperature span').text(),
                            windSpeed: $('#wind-speed span').text(),
                            humidity: $('#humidity span').text(),
                            description: $('#description span').text(),
                            pressure: $('#pressure span').text(),
                            visibility: $('#visibility span').text(),
                            clouds: $('#clouds span').text(),
                            location: $('#location span').text()
                        };

                        if (!saveLocation || !saveFile) {
                            $('#error-message').text('Save location and file name are required.');
                            return;
                        }

                        localStorage.setItem(saveLocation + '/' + saveFile, JSON.stringify(weatherData));
                        $('#file-saved-message').text('Weather data saved successfully.');
                    });

                    $('#load-button').on('click', function() {
                        const loadLocation = $('#load-location').val();
                        const saveFile = $('#save-file').val();

                        if (!loadLocation || !saveFile) {
                            $('#error-message').text('Load location and file name are required.');
                            return;
                        }

                        const savedData = localStorage.getItem(loadLocation + '/' + saveFile);
                        if (savedData) {
                            const weatherData = JSON.parse(savedData);
                            $('#temperature span').text(weatherData.temperature);
                            $('#wind-speed span').text(weatherData.windSpeed);
                            $('#humidity span').text(weatherData.humidity);
                            $('#description span').text(weatherData.description);
                            $('#pressure span').text(weatherData.pressure);
                            $('#visibility span').text(weatherData.visibility);
                            $('#clouds span').text(weatherData.clouds);
                            $('#location span').text(weatherData.location);

                            $('#file-loaded-message').text('Weather data loaded successfully.');
                        } else {
                            $('#error-message').text('No saved data found at the specified location.');
                        }
                    });
                });
