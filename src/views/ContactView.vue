<template>
  <div class="contact">

    <h1 class="contactH1">Contact</h1>

    <div class="extra">
      <div class="contact-info">
        <p class="icons"><i class="fa fa-map-marker" style="font-size: 24px; color: rgb(110, 178, 255);"></i> Cape Town</p>
        <p class="icons"><i class="fa fa-envelope" style="font-size: 24px; color: rgb(110, 178, 255);"></i> Email: cornebalie789@gmail.com</p>
        <p class="icons"><i class="fa fa-phone" style="font-size: 24px; color: rgb(110, 178, 255);"></i> Contact number: 061 027 8132</p>
      </div>

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

          <button type="submit" class="sendBtn" data-sendBtn>Send</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
 
</script>

<style scoped>

.contactH1{
color: #005ae2;
padding-top: 20px;
}

/* Styling for the form */
.icons{
font-size: 20px;
padding-bottom: 20px;
}
.extra {
display: flex;
justify-content: center;
align-items: center;
flex-wrap: wrap;
color: #fff;
}
.contact-info {
width: 30%;
max-width: 350px; 
text-align: left;
margin-left: 200px;
margin-bottom: 350px;
}
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
padding: 10px;
margin-bottom: 12px;
border-radius: 5px;
border: 1px solid #005ae2;
font-family: 'Poppins', sans-serif;
font-size: 16px;
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
font-weight: 600;
}
/* MEDIA QUERIES */
@media screen and (max-width: 768px) {
.icons{
font-size: 20px;
padding-bottom: 5px;
}
.contact {
padding-bottom: 20px; 
}
.extra {
flex-direction: column; 
align-items: center;
}
.contact-info {
width: 80%; /* Adjust width for contact info on smaller screens */
margin-left: 0; /* Remove left margin */
text-align: center;
margin-bottom: 20px; /* Adjust margin for contact info */
padding-top: 50px;
}
.form-container {
width: 80%; /* Adjust width for form on smaller screens */
margin: 0 auto;
padding: 20px; 
padding-bottom: 80px;
}
/* styles for inputs and buttons on smaller screens */
.form-container input[type="text"],
.form-container input[type="tel"],
.form-container input[type="email"],
.form-container textarea {
font-size: 14px; /* Adjust font size for inputs */
}
.form-container .sendBtn {
width: 100%; /* Adjust button width */
}
}
</style>
