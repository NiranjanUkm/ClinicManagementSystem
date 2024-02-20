# clinic-fronend

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


### How to run

after  clone this project, you should do the following steps:

1. Open terminal and go to your local directory where you have cloned this repository.

2. Run `npm install` in order to install all dependencies of the application.

3. Run `npm run serve` to launch the application in development mode. You can now see the application at `http://localhost:8080`.

4. Paste the link ('http://localhost:8080') that will be provided by npm into your browser. You should see the main page of our Clinic System.

### How to  use the app?

1. In the main page, you should see 2 options(portal link),  1) Doctor Login  & 2) Reception Login.

    1) Doctor Login:

        email:  doctor@gmail.com
        password: 123456
      
        After logging in as a doctor, you will be redirected to the dashboard which contains:

            1) Home button  (which redirects you back to login page).

            2) Patient details which includes the token number.(Which created by recetionist in the reception portal.)
    
    2)  Reception Login :

        email: reception@gmail.com
        password: 123456

        After  logging in as a receptionist, you will be redirected to the dashboard which contains:

            1) Home button  (which redirects you back to login page).

            2) 'Add+'  Button (which opens up a modal for adding new patient's information).
               - You can add any name, age, phone number, BMI value  etc.
               - Clicking on "Add" button saves the data into firebase real-time database.
               - If there is an error while saving then it shows an alert with error message.
               - After clicking "Add" the new  added patient appears below the "add+" button.
                    - if you click the "Edit" button on that card ,you can do some changes to that too.
               - This added patient details with token will be visible to doctor.
               - Each patient adding will have a unique token number followed by previous one, associated with them.