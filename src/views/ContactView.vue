<template>
  <div>
    <h1 class="contactH1">Contact</h1>
    
    <div class="contact-container">
      <!-- Left side with contact info and social links -->
      <div class="contact-info">
        <p class="contact-message">I'm always happy to hear from you and discuss opportunities. Feel free to reach out!</p>
        <div class="extra">
          <div class="icon-and-text">
            <i class="fas fa-map-marker-alt"></i>
            <p class="icons"> Mitchells Plain</p>
          </div>
          <div class="icon-and-text">
            <i class="fas fa-envelope"></i>
            <p class="icons">cornebalie789@gmail.com</p>
          </div>
          <div class="icon-and-text">
            <i class="fas fa-phone"></i>
            <p class="icons">061 027 8132</p>
          </div>
        </div>

        <div class="iconz">
              <a href="https://www.linkedin.com/in/corn%C3%A9-balie/" class="fab fa-linkedin" target="_blank"></a>
              <a href="https://github.com/Kortekz" target="_blank" class="fab fa-github"></a>
            </div>


      </div>

      <!-- Right side with contact form -->
      <div class="form-container">
        <form id="contactForm" action="https://formspree.io/f/mdoqknae" method="POST">
          <label>
            <p class="formF">Name:</p>
            <input type="text" name="name" required data-First>
          </label>

          <label>
            <p class="formF">Surname:</p>
            <input type="text" name="surname" required data-Surname>
          </label>

          <label>
            <p class="formF">Contact:</p>
            <input type="tel" name="contact" required pattern="[0-9]{10}" title="Please enter a valid 10-digit phone number" data-Contact>
          </label>

          <label>
            <p class="formF">Email:</p>
            <input type="email" name="email" required data-Email>
          </label>

          <label>
            <p class="formF">Message:</p>
            <textarea name="message" required data-Message></textarea>
          </label>

          <button type="submit" class="sendBtn" value="Send" data-sendBtn>Send</button>
        </form>
      </div>
    </div>
  </div>
</template>


<script>
 export default {
  mounted() {
    // Call the initializeForm method when the component is mounted
    this.initializeForm();
  },
  methods: {
    initializeForm() {
  // declaring the button that will be used to send the data to form spree
  let sendButton = document.querySelector("[data-sendBtn]");
  sendButton.addEventListener("click", () => {
      // the set timeout is set to 1 second and within the setTimeout, we are calling the clearTheForm method
      setTimeout(this.clearTheForm, 1000);
  });
  
},
    clearTheForm() {
      // setting all the values to blank, this will reset the values
      document.querySelector("[data-Message]").value = "";
      document.querySelector("[data-First]").value = "";
      document.querySelector("[data-Email]").value = "";
      document.querySelector("[data-Surname]").value = "";
      document.querySelector("[data-Contact]").value = "";
    },
  },
};

</script>

<style scoped>
.contact-message {
  font-size: 25px;
  color: white; 
  margin-bottom: 80px; 
  margin-left: 40px;
  text-align: center; 
  /* line-height: 1.5; */
}
.contact-container {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 20px;
  margin-left: -100px;
  margin-bottom: 150px !important;
  margin: 0 auto;
}

.contact-info {
  width: 75% !important;
  margin-left: 200px !important;
  /* padding-left: 100px; */
}

.form-container {
  width: 45%;
  margin-top: -110px !important;
  margin-left: 150px !important;
}

.icon-and-text {
  display: flex;
  align-items: center;
  /* margin-bottom: 10px; */
  /* margin-top: 15px; */
  margin-left: 15px;
}
i{
  color: #005ae2;
  margin-bottom: 35px;
  /* margin-left: 15px; */
  font-size: 25px;
}
.icons {
  font-size: 25px !important;
  margin-left: 25px;
}
/* ICONS */
/* Update icon styles */
.fab {
  display: inline-block; /* Display icons next to each other */
  padding: 15px;
  font-size: 35px !important;
  width: 65px !important;
  text-align: center !important;
  border-radius: 50% !important; /* Make icons circular */
  /* margin-right: 20px !important; */
  /* margin-left: 10px; */
  transition: 0.3s;
  background: transparent !important; /* Transparent background */
  border: 2px solid #005ae2; /* Border color */
  color: white;
  margin: 0 auto !important;
}

/* Update GitHub icon style */
.fab.fa-github {
  background: transparent; /* Transparent background */
  border: 2px solid #005ae2; /* Border color */
  margin-left: 0px !important;
}
/* Hover effect for icons */
.fab:hover {
  color: white;
  background-color: #005ae2 !important;
  opacity: 1.5;
  transform: scale(1.1);
  box-shadow: 0 0 20px #005ae2;
}
/* GitHub icon hover effect */
.fab.fa-github:hover {
  background-color: #005ae2;
  border-color: #005ae2;
}
.iconz {
  display: flex !important;
  margin-top: 35px;
  justify-content: flex-start !important; 
  /* padding-top: 10px !important; */
  margin-left: -40px !important;
  margin-right: 60px !important; /* Add margin to separate icons from other content */
}
.btns{
  padding-top: 30px;
  margin-bottom: 40px;
}
.contact-git {
padding: 15px;
background: #005ae2;
font-size: 18px;
color: white;
font-weight: 500;
text-decoration: none;
border-radius: 10px;
border: none;
text-decoration: none; 
transition: 0.5s;
margin-left: 15px;
margin-top: px !important;
}
.contact-git:hover {
background-color: transparent;
border: 2px solid #005ae2;
transform: scale(1.05); 
box-shadow: 0 0 20px #005ae2; 
transition: 0.5s;
}

.contactH1{
color: #005ae2;
padding-top: 20px;
padding-bottom: 50px;
text-align: center;
}
.icons{
font-size: 20px;
padding-bottom: 20px;
}

.extra {
display: flex;
justify-content: left;
align-items: center;
flex-wrap: wrap;
color: #fff;
}
.extra2{
display: flex;
justify-content: right;
align-items: center;
flex-wrap: wrap;
color: #fff;
}
.contact-info {
width: 30%;
max-width: 350px; 
text-align: left;
margin-left: 320px;
}
.contact-info2 {
width: 50%;
max-width: 350px; 
text-align: center;
margin-right: 320px;
margin-top: -240px;
}
h3{
padding-bottom: 20px;
font-size: 20px;
text-align: center;
margin: 0 auto;
margin-left: 100px;
}
/* CONTACT ICONS */ /* CONTACT ICONS */ /* CONTACT ICONS */ /* CONTACT ICONS */
.fab {
padding: 13px;
font-size: 25px;
width: 55px;
text-align: center;
text-decoration: none;
border-radius: 10px;
margin-right: 15px;
margin-left: 150px !important;
transition: 0.3s;
}

.fa-linkedin {
  background: #1385b9;
  color: white;
  margin-left: 20px; /* Adjusted margin to align more to the left */
}
.fa-linkedin:hover{
color: white;
opacity: 1.5;
transform: scale(1.05);
box-shadow: 0 0 20px #1385b9;
}

.icony {
  padding-bottom: 20px;
  margin-left: -40px; /* Adjusted margin to align more to the left */
}
.contact-git {
padding: 12px;
background: #005ae2;
font-size: 14px;
color: white;
font-weight: 500;
text-decoration: none;
border-radius: 10px;
border: none;
text-decoration: none; 
transition: 0.5s;
margin-right: 15px;
}
.contact-git:hover {
background-color: transparent;
border: 2px solid #005ae2;
transform: scale(1.05); 
box-shadow: 0 0 20px #005ae2; 
transition: 0.5s;
}
/* Styling for the form */
.form-container {
margin: 0 auto;
padding: 40px;
padding-top: 100px;
border-radius: 8px;
width: 40%; 
margin: 0 auto;
}
.form-container label {
color: #fff;
margin-bottom: 8px;
}
.form-container input[type="text"],
.form-container input[type="tel"],
.form-container input[type="email"],
.form-container textarea {
width: 100%;
padding: 10px;
margin-bottom: 12px;
border-radius: 5px;
border: 1px solid #005ae2;
font-family: 'Poppins', sans-serif;
font-size: 16px;
box-sizing: border-box;
}
.form-container .sendBtn {
background-color: #005ae2;
color: white;
border: none;
width: 120px;
padding: 15px;
font-size: 15px;
border-radius: 5px;
text-transform: uppercase;
transition: 0.3s ease;
}
.form-container .sendBtn:hover {
background-color: transparent; 
border: 2px solid #005ae2;
transition: 0.3s ease;
color: white;
}
.formF {
font-size: 18px;
font-weight: 400;
}
.contact{
padding-bottom: 80px;
}
form {
margin: 0 auto;
margin-left: auto; 
padding: 40px;
background-color: transparent;
border-radius: 8px;
box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
display: flex;
flex-direction: column;
border: 2px solid #fff;
}
label {
margin-bottom: 8px;
color: #ffffff;
text-align: left;
}
input[type="text"],
input[type="tel"],
input[type="email"],
textarea {
width: 100%;
padding: 8px;
margin-bottom: 12px;
border-radius: 5px;
border: 1px solid #005ae2;
font-family: 'Poppins', sans-serif;
font-size: 14px;
box-sizing: border-box;
}
.sendBtn {
background-color: #005ae2;
color: white;
border: none;
width: 120px;
padding: 15px;
font-size: 15px;
border-radius: 5px;
text-transform: uppercase;
transition: 0.3s ease;
}
.sendBtn:hover {
background-color: #cccccc;
border: 2px solid #005ae2;
transition: 0.3s ease;
color: #005ae2;
box-shadow: 0 0 20px #005ae2; 
}

 /* MEDIA QUERIES */
 @media screen and (max-width: 767px) {
    .contact-container {
      flex-direction: column;
      align-items: center;
      margin: auto 0;
      margin-left: -230px;
    }
    /* .contact-message {
      font-size: 18px;
      margin-left: 20px;
    } */
    .contact-info {
      width: 100%;
      margin-left: 0;
      text-align: center;
    }
    .contact-message{
      width: 100%;
      margin-left: 15px !important;
      margin: auto 0;
      text-align: center;
      margin-bottom: 40px !important;
    }
    .form-container {
      width: 70%;
      margin-left: 220px !important;
      margin: auto 0;
      margin-top: -20px !important;
    }
    .extra {
      justify-content: center;
    }
    .icon-and-text {
      margin-left: 0;
    }
    .iconz{
      margin-top: 0px;
    }
  }

@media screen and (max-width: 400px) {
    .contact-message {
      font-size: 18px;
      margin-left: 20px;
    }
    .contactH1{
    color: #005ae2;
    margin: 0px;
    }
    .contact-container {
      padding: 10px;
      margin-left: -220px;
    }
    .extra{
      /* margin-top: -40px; */
    }
    .contact-info {
      width: 100%;
      margin-left: 0;
      margin-bottom: 30px;
      text-align: center;
    }
    .form-container {
      width: 70%;
      margin-left: 220px !important;
      margin-top: -60px !important;
      margin-bottom: 20px;
      margin: auto 0;
      justify-content: center;
    }
    .icon-and-text {
      margin-left: 0;
    }
    .icons {
      font-size: 18px !important;
      margin-left: 10px;
    }
    .iconz{
      /* margin-bottom: 40px; */
      margin-top: 10px;
    }

  }

@media (max-width: 320px) {
  .contact-message {
      font-size: 16px;
      width: fit-content;
      margin: 40px;
      margin-left: 30px !important;
      margin-right: 20px !important;
    }
    .contactH1{
    color: #005ae2;
    margin: auto 0;
    text-align: center;
    margin-bottom: -40px !important;
    }
    .contact-container {
      padding: 10px;
      margin-left: -200px;
    }
    .extra{
      /* margin-top: -40px; */
    }
    .contact-info {
      width: 100%;
      margin-left: 0;
      margin-bottom: 30px;
      text-align: center;
      font-size: 16px;
    }
    .form-container {
      width: 60%;
      margin-left: 220px !important;
      margin-top: -60px !important;
      margin-bottom: 20px;
      margin: auto 0;
      justify-content: center;
    }
    .icon-and-text {
      margin-left: 0;
    }
    .icons {
      font-size: 18px !important;
      margin-left: 10px;
    }
    /* Update icon styles for mobile */
  .fab {
    padding: 10px;
    font-size: 24px;
    width: 55px !important;
  }
  /* Update GitHub icon style for mobile */
  .fab.fa-github {
    padding: 10px;
    font-size: 24px;
    width: 55px !important;
  }
  .iconz {
    justify-content: center; 
    margin: 0; 
  }

  }
</style>

