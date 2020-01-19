# IT conferences aggregator


## [Check out the deployed version here !](https://it-conferences.netlify.com)
This is a client part of IT conferences aggregator.

This application provides a convenient way of exploring IT Conferences that are collected from the different web sites with the help of web scraping.

A backend part can be found [here](https://github.com/nadia2612/it-conferences-aggregator-server)

## Overview 
###  Conferences list
<img width="1500" alt="Screenshot 2020-01-18 at 20 37 28" src="https://user-images.githubusercontent.com/54640808/72688773-cfc92880-3b0a-11ea-8349-14b3def9ee70.png">

Shows :
* List of the conferences with pagination. You can paginate through the list with the help of Next/Prev buttons.
<img width="1500" alt="Screenshot 2020-01-19 at 23 07 10" src="https://user-images.githubusercontent.com/54640808/72689319-82e85080-3b10-11ea-996a-6136c491c7f6.png">


* Search bar to search through the list of the conferences. It searches by name, description, and location. Search is case insensitive.
* Map view. You can switch to map view to see all the available conferences on the map. On the map view you can click on any marker to see an overview of the conference and navigate to the details page.
<img width="1678" alt="Screenshot 2020-01-18 at 20 37 52" src="https://user-images.githubusercontent.com/54640808/72688959-88439c00-3b0c-11ea-8e9d-e06e093d2548.png">



### Conference Details
![Screenshot 2020-01-19 at 22 32 02](https://user-images.githubusercontent.com/54640808/72688848-a066eb80-3b0b-11ea-9e59-c1117928ec9e.png)

Shows:
* Detailed information about the selected conference like: start/end dates, price, location, website link and description.
* Zoomed map-view with this particular conference.
* You can see the comments from other users and post yours (if you are logged in)
* Add current conferene to favorites (if you are logged in)
* Add current conferene to you calendar (download the calendar event in an ICS format that you can open later on your computer and import to your calendar).

### Favorites list 
Shows list of the conferences, you added to favorites.

<img width="1500" alt="Screenshot 2020-01-19 at 23 16 15" src="https://user-images.githubusercontent.com/54640808/72689438-bd9eb880-3b11-11ea-8cca-6485a6a65fdf.png">


### Authentication

It is possible to register a new user and log in.
Currently users can only maintain their favorite conferences, but can potentially do more in a future.

## Technologies used

This application is built using the following libraries:
-  React
-  React-router
-  Redux
- Redux-thunk
- Superagent
- Google-map-react
- ICS
- Material-ui
- Moment

##  Spinning up
To spin up a local version of this application please follow the following instructions: 

1.  Clone the project  
    `$ git clone git@github.com:nadia2612/it-conferences-aggregator-client.git`  
    `$ cd it-conferences-aggregator-client`
2.  Run `npm install`
3.  Define **REACT_APP_GOOGLE_API_KEY** environment variable using `export REACT_APP_GOOGLE_API_KEY="Your key"` command . 
The key can be generated [here](https://developers.google.com/maps/documentation/geocoding/get-api-key)
4. The frontend sends requests to the backend deployed to [Heroku](https://it-conferences-server.herokuapp.com).
If you want to install the backend for this app locally
clone this [repo](https://github.com/nadia2612/it-conferences-aggregator-client) and follow the instructions to spin up the [server](https://github.com/nadia2612/it-conferences-aggregator-server#spinning-up).
Change `baseUrl` in '/util/baseUrl.js' in the frontend to your local sever's url
7.  Start the client using `npm run start`.
