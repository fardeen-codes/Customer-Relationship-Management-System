# Customer Relationship Management (CRM) System with Node.js, Express.js and React.js

## CRM systems are important tools for businesses to manage their customer interactions, both with existing and potential clients. A CRM System manages customer interactions, sales leads, and support requests, enhancing relationship management through features like contact management, sales pipeline tracking, and customer service integration for improved business efficiency . 
## Output Preview:
![ReactApp-GoogleChrome2024-04-1209-40-51-ezgifcom-video-to-gif-converter](https://github.com/user-attachments/assets/38b1997a-b303-42d7-9f9d-858ae46dfd92)
# Functionalities
## User Authentication and Authorization

- Companies that want to use the CRM Portal can register on the application and access the functionalities by signing in.
- JWT, JsonWebToken and bcryptjs are some packages used for implementing smooth authorization.
- Context API helps to maintain the state of the user that has logged in.
  
## Adding Customers
- The company can easily add new customers and details about them.
- A form is created with the post method to implement this functionality. Status can be selected from a drop down.
- The page navigates to the all customers page when a customer is created.
  
## Customer Management:
- Implementing functionalities to manage customer data such as name, email, phone number, and address. Allow users to add, view, update, and delete customer records.
# Steps to Setup the Backend of Application
## Step 1: Create a new directory named backend.
```
mkdir server
cd server
```
## Step 2: Create a server using the following command in your terminal.
```
npm init -y
```
## Step 3: Install the necessary package in your server using the following command.
```
npm install bcryptjs cors dotenv express 
npm install cookie-parser jsonwebtoken 
npm install mongodb mongoose morgan helmet nodemon
```
## Step 4: Create a .env file to store things you don’t want to show to others.
```
MONGO = Mention Yours
JWT = jbckjbwd3487238dsnbfkj
```

# Steps to Setup the Frontend of Application
## Step 1: Create react application in your project folder using the following command and navigate to the folder.
```
npx create-react-app client
cd client
```
## Step 2: Install additional packages
```
npm install axios react-router-dom 
npm install @fortawesome/free-solid-svg-icons @fortawesome/react-fontawesome
```
# Project Structure:
![Screenshot-2024-04-12-083808](https://github.com/user-attachments/assets/01268b16-9b27-4672-901f-185d0719ab9b)
