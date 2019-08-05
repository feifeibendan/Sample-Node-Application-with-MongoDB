## Sample Node.js Application with MongoDB
This is a sample project about how to connect Node.js with MongoDB using mongoose. Fetch and store data as well as running migration.


##### Prerequisites
Assuming MongoDB is already install either locally or somewhere else which we can access to it. Then in the .env file, fill appropriate info

##### Installation
To install all the project dependency, go to project directory and run:
```
npm install
```

##### Running the example
To run the sample project, in the project directory, run
```
npm start
```
Once application is running, you can access it by enter the url
    
- http://localhost:3000 in the web browser, port is anything that define in the .env file

The screen will show Express, Welcome to Express

##### Interact with the sample application

POST Users
```
curl -X POST \
  http://localhost:1337/users \
  -H 'Content-Type: application/json' \
  -H 'Postman-Token: 890c216c-4fc4-4bd4-9244-97e1476110d2' \
  -H 'cache-control: no-cache' \
  -d '{
	"firstName":"John",
	"lastName":"Doe",
	"password":"123456789",
	"pin":"1234",
	"email":"JohnDoe@gmail.com",
	"birthday":"01/01/1999"
}'
```

GET Users
```
curl -X GET \
  http://localhost:1337/users/{user id} \
  -H 'Postman-Token: 6264a5f6-c837-4833-abb3-99d90aa348f5' \
  -H 'cache-control: no-cache'
```

