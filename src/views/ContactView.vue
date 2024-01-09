

<template>

<div class="contact">

  <div class="extra">
      <div class="contact-info">
        <p><i class="fa fa-map-marker" style="font-size: 24px; color: rgb(110, 178, 255);"></i> Cape Town</p>
        <p><i class="fa fa-envelope" style="font-size: 24px; color: rgb(110, 178, 255);"></i> Email: cornebalie789@gmail.com</p>
        <p><i class="fa fa-phone" style="font-size: 24px; color: rgb(110, 178, 255);"></i> Contact number: 061 027 8132</p>
      </div>
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
  
</template>

<script>
</script>

<style scoped>

.extra {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 40px;
    color: #fff;
  }

  .contact-info {
    width: 40%; 
    margin-right: 40px;
  }

  .contact-info p {
    margin-bottom: 10px;
  }
  /* Styling for the form */
  .formF {
    font-size: 18px;
    font-weight: 400;
  }
  .form-container {
    width: 35%; 
    margin: 0 auto;
    margin-left: auto; 
    padding: 40px;
  }
  .contact{
    padding-bottom: 80px;
  }
  form {
    max-width: 450px;
    margin: 0 auto;
    margin-left: auto; /* Align to the right */
    padding: 40px;
    background-color: transparent;
    border-radius: 8px;
    border: 2px solid rgb(255, 255, 255);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
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
    background-color: #cccccc; /* Update to a specific color */
    border: 2px solid #005ae2;
    transition: 0.3s ease;
    color: #005ae2;
    font-weight: 600;
  }
</style>
