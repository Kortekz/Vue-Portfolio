<template>
  <div class="about">

    <h1 class="aboutH1">
      About
    </h1>
    
      <p class="fontP">
      I am a highly motivated and dedicated web developer with a passion for coding and technology. With my Higher Certificate, Diploma, and Advanced Diploma in ICT, as well as my additional studies at Life Choices Coding Academy, I have honed my skills in front-end development and multimedia applications.
      My commitment to learning and improving my skills makes me a valuable asset to any team, and I am excited to bring my expertise to new and challenging projects.
      </p>

        <div class="imgAb">
          <img class="Me2" src="https://i.imgur.com/6etI8os.jpg" alt="">
        </div>

  </div>
</template>


<script>
</script>

<style>
.about {
  margin-left: 40px;
  margin-right: 40px;
}

.aboutH1 {
  color: #005ae2;
  padding-bottom: 20px;
}

.fontP {
  color: white;
  font-size: 22px;
  margin-left: 50px;
  margin-right: 40px;
}

.imgAb {
  padding-bottom: 100px;
}

.Me2 {
  max-width: 40%;
  height: auto;
  border: 4px solid rgb(79, 78, 78);
  border-radius: 20px;
  margin-top: 20px;
  position: relative;
  overflow: hidden;
  /* Define the animation for the border and box shadow */
  animation: borderAndBoxShadowAnimation 2s infinite;
}

/* Responsiveness for 720px */
@media (max-width: 767px) {
  .fontP {
    font-size: 18px;
    margin-left: 20px;
    margin-right: 20px;
  }

  .Me2 {
    max-width: 80%;
    margin-left: 20px;
    margin-right: 20px;
    border: 4px solid rgb(79, 78, 78);
  }
}

/* Responsiveness for 300px */
@media (max-width: 320px) {
  .fontP {
    font-size: 15px;
    margin-left: 10px;
    margin-right: 10px;
  }

  .Me2 {
    max-width: 100%;
    margin-left: 10px;
    margin-right: 10px;
    border: 4px solid rgb(79, 78, 78);
    margin-bottom: 20px;
  }
}

/* Define the animation for the border and box shadow */
@keyframes borderAndBoxShadowAnimation {
  0% {
  border-color: rgb(255, 255, 255);
  box-shadow: 0 0 10px white;
  }
50% {
  border-color: #005ae2;
  box-shadow: 0 0 20px #005ae2;
  }
100% {
  border-color: rgb(255, 255, 255);
  box-shadow: 0 0 10px white;
  }
}
</style>
