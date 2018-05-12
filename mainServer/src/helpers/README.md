The project contains 2 micro-services
1. mainServer which exposes the /user/transact rest-endpoint to which you hit a get request. It randomly generates a boolean and based on the value calls another microservice to send an automated Email.
2. sendEmail service sends an automated email to defined email about a fraud user trying to perform a transaction.


Steps to Build: 

1. Locally  
    a. npm install for both the mico-services.  
    b. navigate to mainServer/src/helpers/raiseAlert uncomment the line for localServerUrl.  
    c. npm start for both the micro-services.  
    d. goto browser and hit localhost:3000/user/transact.

2. Docker (Assuming you have docker set up and default machine running.)  
    a. npm install for both the mico-services.   
    b. navigate to mainServer/src/helpers/raiseAlert for docker, comment the line for localServerUrl and uncomment other.  
    c. in cmd navigate to . and execute docker-compose -f ./docker-compose.yml build  
    d. execute docker-compose up  
    e. goto browser: http://192.168.99.100:3000/user/transact











