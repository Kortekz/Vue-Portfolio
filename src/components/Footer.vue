<template>

    <footer>
      <p>{{ fullName }} &copy; {{ currentYear }}</p>
    </footer>

  </template>
  
  <script>
  export default {
    data() {
      return {
        fullName: 'Corné Balie',
        currentYear: new Date().getFullYear()
      }
    }
  }
  </script>
  
  <style>
 footer {
  background-color: #22262a;
  color: white;
  text-align: center;
  font-size: 18px;
  padding: 20px 0;
  position: relative;
  bottom: 0;
  width: 100%;
}
/* Center the content within the footer */
footer p {
  margin: 0;
}
@media (max-width: 768px) {
  footer p{
    font-size: 14px;
  }
}

  </style>
  