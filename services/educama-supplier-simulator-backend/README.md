# EventSimulator (Backend)

## Development server

To run it locally, before start the server it is necessary to create the environment variables:
SUPPLIER_SIMULATOR_QUEUE: contains the url to access rabbitMQ (this url contains login and password).
SUPPLIER_SIMULATOR_DATABASE: contains the url to access MongoDB (this url contains login and password).

AS an example, in windows Operating System, you can access to environment variables management by clicking at the same time the keys: (Windows key) + Pause Key
Then go to Advanced system settings and finally click on "Environment Variables" button at the bottom of the page.

In order to test the sending of messages, you can use the capabilities of your rabbitMQ system (In our case we are using https://customer.cloudamqp.com). 
Once you are logged use the RabbitMQ manager, channels Tab, click on the existing one and finally click on bookingRequestQueue.
Then it will appear a Publish message section where you can publish a message by filling the Paylod field up with a JSON message for Airline booking as:

{
  "eventType": "airlineBooking",
  "bookingId": "bookingId",
  "trackingNumber": "trackingNumber",
  "airline": "airline",
  "flightNumber": "flightNumber",
  "origin" : "origin",
  "destination": "destination"
}

or for Haulier booking: 
{
  "eventType": "haulierBooking",
  "bookingId": "bookingId",
  "trackingNumber": "trackingNumber",
  "supplierID": "supplierID",
  "origin" : "origin",
  "destination": "destination"
}


Run `node server.js` for a dev server. Navigate to `http://localhost:8085/`.

## Create User Provided Service
For connecting against the Atlas MongoDB, create a User Provided Service (if not happend yet).
First adapt the file educama-supplier-simulator-database-service.json.
If connecting to a local database, provide the URI and username / password for this instance.

Then create the User Provided Service with the following command:
cf cups flight-service-database -p educama-supplier-simulator-database-service.json

