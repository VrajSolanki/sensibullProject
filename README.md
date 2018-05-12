The project contains 2 micro-services and 1 rabbitmq image
1. mainServer which exposes the /user/transact rest-endpoint to which you hit a get request. It randomly generates a boolean and based on the value calls another microservice to send an automated Email.
2. sendEmail service sends an automated email to defined email about a fraud user trying to perform a transaction.
3. the mainserver appplication on a failed transact puts a message on rabbitmq queue "sendEmail", which has a listner connected to it in the sendemail micro-service which then sends an email to vrajsolanki11@gmail.com in order to inform the user about fraud. 

Steps to Build: 

<!-- 1. Locally  
    a. npm install for both the mico-services.  
    b. navigate to mainServer/src/helpers/raiseAlert uncomment the line for localServerUrl.  
    c. npm start for both the micro-services.  
    d. goto browser and hit localhost:3000/user/transact. -->

1. Docker (Assuming you have docker set up and default machine running.)  
    a. in cmd line navigate to sensibull folder and execute docker-compose -f ./docker-compose.yml build  
    b. execute docker-compose up
    c. goto browser: http://192.168.99.100:3000/user/transact to send a transaction.  
    d. goto browser 
    http://192.168.99.100:15672 to see the rabbitmq console.











