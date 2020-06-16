# Assignment 2

# Introduction: 

The objective of this assignment was to develop the front end design for the group project application. The idea behind developing the RideShare web application is to help a user to find a carpool giver in order to make the journey cheap, fun and easy. For this assignment, the frontend design has been developed for five different pages that will be a part of the web application, namely, Home Page, SignUp, LogIn, User Profile and Edit Profile. 

* Date Created: 11 June 2020
* Last Modification Date: 14 June 2020

## Authors

Name: Nishant Amoli
Email: nishant.amoli@dal.ca


## Getting Started

The code has been pushed to a GitHub repository and can be accessed using the following link:
https://github.com/nishant-amoli/csci5709-assignment2 

The application has been deployed using Heroku and can be visited using the following link:
https://csci5709-web-a2.herokuapp.com/ 

As mentioned above, at this instance of time, five pages have been created. Below is a brief description about these pages along with the URLs to be followed in order to access them.

Landing Page/Home Page:
URL: https://csci5709-web-a2.herokuapp.com/ 

The home page provides all the necessary links. The navigation bar contains all the links that are related to the functionalities of the application such as Find a ride, offer a ride, log in, sign up and the application icon serving as the link to the homepage. It also contains a footer that contains the links to help and documentation, terms, about us and contact us.


Sign Up Page: 
URL: https://csci5709-web-a2.herokuapp.com/SignUp 

After clicking on the Sign Up link in the navigation bar, the user will be redirected to the registration page. After successfully registering to RideShare, the user will automatically be logged in and redirected to their profile page. Since the backend part has not been done yet, as long as the user does not violate any form validation like leave any input fields blank, type in invalid email, input a password that is less than the minimum length or leave the terms checkbox unchecked, they will automatically be redirected to a dummy profile page. If the user is already a member and has stumbled upon the Sign Up page by mistake, there is a Login link below the form which will redirect to the LogIn page.


Login Page:
URL: https://csci5709-web-a2.herokuapp.com/LogIn

After clicking on the Login link in the navigation bar, the user will be redirected to the login page. After successfully signing in to RideShare, the user will be redirected to their profile page. Since the backend part has not been done yet, as long as the user does not leave email and password fields blank or input an invalid email address, they will automatically be redirected to a dummy profile page. If the user is not registered, there is a Sign Up link below the form which will redirect to the Sign Up page.


User Profile Page:
URL: https://csci5709-web-a2.herokuapp.com/userprofile

As mentioned above, since the backend is not yet done, to demonstrate the User Profile page, the user can enter any dummy data in LogIn or SignUp form and can be redirected to the user profile. As of now, the user can also simply follow the URL mentioned above in order to access this page. At this point this page just demonstrates how the profile will look and so it contains only the dummy text. This page will contain the information about the user as well as a profile picture that they can change any time. They can also make changes to their profile by clicking on the Edit Profile button which will redirect them to the Edit Profile page.


Edit Profile Page:
URL: https://csci5709-web-a2.herokuapp.com/EditProfile

While on the User Profile page, the user can click on the Edit Profile button to update their information. As of now, the link mentioned above can also be used to redirect to this page. While on this page, the user can either click on the Go Back button to cancel any changes that they have made in the user information form and go back to the User Profile page, or they can click on the Update button to save the changes. If the user decides to click on the Update button, the data in the Edit information form will be validated, which means, every field other than Bio should not be left blank, Phone Number can only be digits and must have at least 10 characters, and email address should be in a valid format. After filling out the required fields, the user can press the Update button and will be redirected back to the profile page.


## Design Justification

For this web application, I have chosen a minimalist design. The colour pattern is the same for the entire application: white for the background, light gray for the footer background and blue for the links as well as the input fields’ border ( on focus ). The input fields which need validation will turn red if the validation criteria is violated. The colour of the labelled text is black while the colour of the input text is dark gray. The reason I decided to go with these basic colours is simply because I like minimalist designs. And for this application as well, I want to achieve a beautiful design with simplicity.


## Sources Used

For this assignment, I have mostly taken references from the official documentations of React [1] and Reactstrap [2]. On top of that, I have referred to a code snippet from Bootsnipp [3] by Kshiti Ghelani and a code snippet from W3 School [4]. The description about these code snippets are mentioned below.

Bootsnipp Code by Kshiti Ghelani:

### src/components/UserProfile.jsx

Lines 11 - 84
---------------

```
My code on lines mentioned above:
<!--
<div className="container user-profile">
        <div className="row">
          <div className="col-md-4">
            <div className="profile-img">
              <Img src={require("../images/solitary.jpeg")} alt="" />
              <div className="file btn btn-lg btn-primary">
                Change Photo
                <input type="file" name="file" />
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="profile-head">
              <h3>Your personal information</h3>
              <div className="row" style={{ marginTop: "3em" }}>
                <div className="col-md-4">
                  <label>Username:</label>
                </div>
                <div className="col-md-6">
                  <p>user_id</p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4">
                  <label>Name:</label>
                </div>
                <div className="col-md-6">
                  <p>User Name</p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4">
                  <label>Email:</label>
                </div>
                <div className="col-md-6">
                  <p>user@dal.ca</p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4">
                  <label>Phone:</label>
                </div>
                <div className="col-md-6">
                  <p>123 456 7890</p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4">
                  <label>Bio:</label>
                </div>
                <div className="col-md-6">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Pellentesque interdum rutrum sodales. Nullam mattis
                    fermentum libero, non volutpat. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Pellentesque interdum rutrum
                    sodales. Nullam mattis fermentum libero, non volutpat.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-2">
            <Link to="/EditProfile">
              <input
                type="submit"
                className="profile-edit-btn"
                name="btnAddMore"
                value="Edit Profile"
              />
            </Link>
          </div>
        </div>
      </div>
-->

### src/styles/UserProfile.css

Lines 1 - 30
---------------

```
<!--
My code on lines mentioned above:

.user-profile {
  padding: 3%;
  margin-top: 3%;
  margin-bottom: 3%;
  border-radius: 0.5rem;
  background: #fff;
}
.profile-img {
  text-align: center;
}
.profile-img img {
  width: 70%;
  height: 100%;
}
.profile-img .file {
  position: relative;
  overflow: hidden;
  margin-top: -20%;
  width: 70%;
  border: none;
  border-radius: 0;
  font-size: 15px;
  background: #212529b8;
}
.profile-img .file input {
  position: absolute;
  opacity: 0;
  right: 0;
  top: 0;
}
-->
```

The code above was created by adapting the code in Kshiti Ghelani’s code snippet on Bootsnipp( https://bootsnipp.com/snippets/K0ZmK ) as shown below: 

```
The snippet of code that I referred:
<!--
<style>
body{
    background: -webkit-linear-gradient(left, #3931af, #00c6ff);
}
.emp-profile{
    padding: 3%;
    margin-top: 3%;
    margin-bottom: 3%;
    border-radius: 0.5rem;
    background: #fff;
}
.profile-img{
    text-align: center;
}
.profile-img img{
    width: 70%;
    height: 100%;
}
.profile-img .file {
    position: relative;
    overflow: hidden;
    margin-top: -20%;
    width: 70%;
    border: none;
    border-radius: 0;
    font-size: 15px;
    background: #212529b8;
}
.profile-img .file input {
    position: absolute;
    opacity: 0;
    right: 0;
    top: 0;
}
.profile-head h5{
    color: #333;
}
.profile-head h6{
    color: #0062cc;
}
.profile-edit-btn{
    border: none;
    border-radius: 1.5rem;
    width: 70%;
    padding: 2%;
    font-weight: 600;
    color: #6c757d;
    cursor: pointer;
}
.proile-rating{
    font-size: 12px;
    color: #818182;
    margin-top: 5%;
}
.proile-rating span{
    color: #495057;
    font-size: 15px;
    font-weight: 600;
}
.profile-head .nav-tabs{
    margin-bottom:5%;
}
.profile-head .nav-tabs .nav-link{
    font-weight:600;
    border: none;
}
.profile-head .nav-tabs .nav-link.active{
    border: none;
    border-bottom:2px solid #0062cc;
}
.profile-work{
    padding: 14%;
    margin-top: -15%;
}
.profile-work p{
    font-size: 12px;
    color: #818182;
    font-weight: 600;
    margin-top: 10%;
}
.profile-work a{
    text-decoration: none;
    color: #495057;
    font-weight: 600;
    font-size: 14px;
}
.profile-work ul{
    list-style: none;
}
.profile-tab label{
    font-weight: 600;
}
.profile-tab p{
    font-weight: 600;
    color: #0062cc;
}
</style>

<div class="container emp-profile">
            <form method="post">
                <div class="row">
                    <div class="col-md-4">
                        <div class="profile-img">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52y5aInsxSm31CvHOFHWujqUx_wWTS9iM6s7BAm21oEN_RiGoog" alt=""/>
                            <div class="file btn btn-lg btn-primary">
                                Change Photo
                                <input type="file" name="file"/>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="profile-head">
                                    <h5>
                                        Kshiti Ghelani
                                    </h5>
                                    <h6>
                                        Web Developer and Designer
                                    </h6>
                                    <p class="proile-rating">RANKINGS : <span>8/10</span></p>
                            <ul class="nav nav-tabs" id="myTab" role="tablist">
                                <li class="nav-item">
                                    <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">About</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Timeline</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-md-2">
                        <input type="submit" class="profile-edit-btn" name="btnAddMore" value="Edit Profile"/>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-4">
                        <div class="profile-work">
                            <p>WORK LINK</p>
                            <a href="">Website Link</a><br/>
                            <a href="">Bootsnipp Profile</a><br/>
                            <a href="">Bootply Profile</a>
                            <p>SKILLS</p>
                            <a href="">Web Designer</a><br/>
                            <a href="">Web Developer</a><br/>
                            <a href="">WordPress</a><br/>
                            <a href="">WooCommerce</a><br/>
                            <a href="">PHP, .Net</a><br/>
                        </div>
                    </div>
                    <div class="col-md-8">
                        <div class="tab-content profile-tab" id="myTabContent">
                            <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>User Id</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>Kshiti123</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>Name</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>Kshiti Ghelani</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>Email</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>kshitighelani@gmail.com</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>Phone</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>123 456 7890</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>Profession</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>Web Developer and Designer</p>
                                            </div>
                                        </div>
                            </div>
                            <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>Experience</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>Expert</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>Hourly Rate</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>10$/hr</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>Total Projects</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>230</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>English Level</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>Expert</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>Availability</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>6 months</p>
                                            </div>
                                        </div>
                                <div class="row">
                                    <div class="col-md-12">
                                        <label>Your Bio</label><br/>
                                        <p>Your detail description</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>           
        </div>
-->
```

- <!---How---> The code in Bootsnipp ( https://bootsnipp.com/snippets/K0ZmK ) was implemented by Kshiti Ghelani 
- <!---Why---> I referred to this code because as I am totally new to Web technologies, I was facing trouble while creating a responsive user profile. Also, it is to be noted that I did not just copy the code as it was there in the website, I referred to the HTML structure and the styling, tried to understand it and then created it from scratch. 
- <!---How---> The code was modified by me: As mentioned above, I did not just copy the code as it was there in the website, I referred to the HTML structure and the styling, tried to understand it and then created it from scratch. As it can be seen in the website, the original code has 3 different Bootstrap parent rows and multiple tabs in a single page. On the other hand, mine JSX component is very simple and just contains a picture, a heading with a few paragraph tags and labels, and a button. I simply used one bootstrap parent row and it was created by me. My box model is also totally different. Also, my styling for the content is different from the original code. The only styling that I used from this code is for “Choose a picture” functionality. 


W3 School Code

### src/components/HomePage.jsx

Lines 18 - 46
---------------

```
<!--
My code on lines mentioned:

 <div className="row">
        <div className="col">
          <h2>Smart</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
          </p>
        </div>
        <div className="col">
          <h2>Easy to use</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
          </p>
        </div>
        <div className="col">
          <h2>No hassle</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
          </p>
        </div>
      </div>
-->

```

Lines 66 - 79
---------------

```
<!--
My code on lines mentioned:
.col p,
h2 {
  float: left;
  padding: 10px;
  text-align: left;
  vertical-align: middle;
}
 
/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}
-->


...

The code above was created by adapting the code in W3 School   ( https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_three_columns ) as shown below: 

```
The snippet of code that I referred:
<!--
<style>
* {
  box-sizing: border-box;
}

/* Create three equal columns that floats next to each other */
.column {
  float: left;
  width: 33.33%;
  padding: 10px;
  height: 300px; /* Should be removed. Only for demonstration */
}

/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}
</style>
</head>
<body>

<h2>Three Equal Columns</h2>

<div class="row">
  <div class="column" style="background-color:#aaa;">
    <h2>Column 1</h2>
    <p>Some text..</p>
  </div>
  <div class="column" style="background-color:#bbb;">
    <h2>Column 2</h2>
    <p>Some text..</p>
  </div>
  <div class="column" style="background-color:#ccc;">
    <h2>Column 3</h2>
    <p>Some text..</p>
  </div>
</div>

</body>
</html>
-->


```

- [How] The code ( https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_three_columns ) was implemented by W3 School
- [Why] Code was used because… It is just a simple css to put three paragraphs of text in a single row. I just referred to it, my code is entirely different from the snippet. It is just a small part of my entire component that renders the HomePage.
- [How] Code was modified by me… As mentioned above, I just referred to this code snippet, my code is entirely different from the snippet. It is just a small part of my entire component that renders the HomePage. 


## References

[1] "Getting Started – React", Reactjs.org, 2020. [Online]. Available: https://reactjs.org/docs/getting-started.html . [Accessed: 14- Jun- 2020].

[2] "reactstrap - React Bootstrap 4 components", Reactstrap.github.io, 2020. [Online]. Available: https://reactstrap.github.io /. [Accessed: 14- Jun- 2020].

[3] K. Ghelani, “HTML Snippets for Twitter Bootstrap framework,” Bootsnipp.com. [Online]. Available: https://bootsnipp.com/snippets/K0ZmK . [Accessed: 14-Jun-2020].

[4] “How TO - Three Column Layout,” How To Create a Three Column Layout. [Online]. Available: https://www.w3schools.com/howto/howto_css_three_columns.asp . [Accessed: 14-Jun-2020]. 


## Image References

Image for HomePage:

“Wanderlust Meaning, Symbols and Designs,” Bad Habits Tattoos - Tattoo Shop Fort Lauderdale, 25-Mar-2019. [Online]. Available: https://www.badhabitstattoos.com/wp-content/uploads/2019/03/Wanderlust-Tattoos-Meaning-Symbols-and-Designs.jpg . [Accessed: 14-Jun-2020].


