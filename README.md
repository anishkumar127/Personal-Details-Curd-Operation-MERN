### COMPLETE CURD APPLICATION - MERN STACK

#### It is made with PROPER CODING and NO DRAG AND DROP
---------------------------------------------------------------------------------------------------------- 

### Steps to use this Template:

- Clone 

```bash
git clone https://github.com/anishkumar127/curd-mern.git
```

- Change the Project name to which ever you like

- Install Dependencies For Front-End -> **ReactJs**

```bash
npm install
```

- Run the Server

```bash
npm start
```

- Check the Running App

```bash
http://localhost:3000
```

- Install Dependencies For Back-End -> **Node , Express Js**

```bash
npm install
```

- Run the Server

```bash
npm run server
```

- Check the Running App

```bash
http://localhost:8000
```

### Connect to the Database:

Connect to the Database using the following changes in `server\config\database.js` file:

- Add a new .env file in the root directory of the project and add the following lines:

```env
mongoURI=mongodb:mongodb uri goes here
```

### Functionalities:

- CREATE USER
- UPDATE / EDIT USER 
- GET ALL USER DETAILS
- GET SINGLE USER DETAILS
- DELETE USER 

### Package Used

- React
  - axios
  - react-router-dom
  - bootstrap
- Node
  - Express Js
  - Cors
  - mongoose
  - dotenv
  - nodemon

### Tech Stack

- React
- Node
- Express
- MongoDB
- Mongoose

### Project Structure:

**Node**
```bash
├── config
│   └── database.js
│   └── index.js
├── controllers
│   ├── user.js
├── models
│   └── user.js
├── routes
│   ├── user.js
├── .env
└── index.js
├── package-lock.json
├── package.json
├── vercel.json
├── README.md
```

#### Live Preview GUI & API's LINK 

- Live ReactJs GUI - CURD 
```bash
https://curd-mern-app.vercel.app/
```

- Live Node API
  
```bash
https://curd-mern-agbf.vercel.app/ 
```
<!-- [API URL :- ](https://curd-mern-agbf.vercel.app/) -->
<!-- https://curd-mern-agbf.vercel.app/   // api hosted. -->
- Node (Express) API URL
```bash
GET ALL USER -> https://curd-mern-agbf.vercel.app//api/v1/users
```
<!-- **GET ALL USER** **:-**  https://curd-mern-agbf.vercel.app//api/v1/users -->

```bash
CREATE USER -> https://curd-mern-agbf.vercel.app/api/v1/users
```

<!-- **CREATE USER** **:-** https://curd-mern-agbf.vercel.app/api/v1/users -->

```bash
GET SINGLE USER -> https://curd-mern-agbf.vercel.app/api/v1/users/single/634f04d54b08a01217883301
```

<!-- **GET SINGLE USER :-** https://curd-mern-agbf.vercel.app/api/v1/users/single/634f04d54b08a01217883301 -->

```bash
UPDATE USER -> https://curd-mern-agbf.vercel.app/api/v1/users/634f04d54b08a01217883301
```

<!-- **UPDATE USER :-** https://curd-mern-agbf.vercel.app/api/v1/users/634f04d54b08a01217883301 -->

```bash
DELETE USER -> https://curd-mern-agbf.vercel.app/api/v1/users/634f04e64b08a0121788330a
```

<!-- **DELETE USER :-** https://curd-mern-agbf.vercel.app/api/v1/users/634f04e64b08a0121788330a -->



<!-- [FRONT END LINK :- ](https://curd-mern-app.vercel.app/) -->
<!-- https://curd-mern-app.vercel.app/  // front end hosted. -->


### Preview Front UI

#### Home Page UI
![Home Page Preview](./client/public//image/Home_page_UI.png "Person Details Preview")

#### Update Page UI

![Home Page Preview](/client/public//image/Update_user_UI.png "Person Details Preview")


### Activities

![Alt](https://repobeats.axiom.co/api/embed/226c149825e2f585bb69ed23d9223713cab0080e.svg "Repobeats analytics image")