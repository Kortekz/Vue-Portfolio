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
.about{
  margin-left: 40px;
  margin-right: 40px;
}
.aboutH1{
color: #005ae2;
padding-bottom: 20px;
}
.fontP{
  color: white;
  font-size: 18px;
  margin-left: 40px;
  margin-right: 40px;
}
.imgAb{
padding-bottom: 100px;
}
.Me2{
  max-width: 40%; /* Adjust image size */
  height: auto;
  border: 4px solid rgb(79, 78, 78);
}
@media (max-width: 768px) {
  .fontP{
    font-size: 12px;
  }
}
@media (max-width: 300px) {
  .fontP{
    font-size: 10px;
  }
}
</style>