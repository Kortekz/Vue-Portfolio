<template>
  <div class="about">
    <h1 class="aboutH1">
      About
    </h1>
    <p class="fontP">
      My name is Corné Preston Balie. I am currently 23 years old. 
      <br/>
      I am a highly motivated and dedicated web developer with a passion for coding and technology. 
      With my Higher Certificate, Diploma, and Advanced Diploma in ICT, as well as my additional studies at 
      Life Choices Coding Academy, I have honed my skills in front-end development and multimedia applications.
      My commitment to learning and improving my skills makes me a valuable asset to any team, and I am excited 
      to bring my expertise to new and challenging projects.
    </p>

    <h2 class="hobbiesTitle">Hobbies</h2>
    <h3 class="secondHob">Below are some of my Hobbies</h3>

    <div class="cards-container">
      <div class="card">
        <div class="card-content">
          <h3 class="head">Coding personal projects</h3>
          <p class="hobbyP">I like Building web applications and experimenting with new technologies/Frameworks.</p>
        </div>
      </div>

      <div class="card">
        <div class="card-content">
          <h3 class="head">Exploring Web Development</h3>
          <p class="hobbyP">Staying updated with the latest trends in web development and trying out new frameworks.</p>
        </div>
      </div>

      <div class="card">
        <div class="card-content">
          <h3 class="head">Watching Series & Gaming</h3>
          <p class="hobbyP">I like to Relax and unwind by playing games or catching up on Tv Shows/Movies. 
            My favorite gaming genres are RPGs, FPS & strategy games.</p>
        </div>
      </div>
    </div>
  </div>
</template>

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

.cards-container {
  display: flex; /* Align cards horizontally */
  justify-content: center; /* Center cards horizontally */
  flex-wrap: wrap; /* Allow wrapping for responsiveness */
  gap: 50px; /* Add space between cards */
}

.card {
  width: calc(40% - 80px); /* Calculate width for each card with margin */
  background-color: #333;
  border-radius: 10px;
  padding: 10px; /* Adjust padding */
  margin: 10px; /* Adjust margin */
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.8);
  transition: 0.3s;
  text-align: center; /* Center the content in the cards */
}

.card:hover {
  box-shadow: 0 0 20px rgba(0, 90, 226, 0.8);
  transition: 0.5s;
  transform: scale(1.05);
}

.card-content {
  color: white;
}

.hobbiesTitle {
  margin-top: 40px;
  color: #005ae2;
  padding-bottom: 20px;
}
.secondHob{
  color: white;
}
.hobbiesList {
  list-style-type: none;
  margin-left: 20px;
  color: white;
}

.hobbiesList li {
  margin-bottom: 10px;
  font-size: 18px;
}
.hobbyP{
  font-size: 18px;
  margin-bottom: 0px;
}
.head{
  color: #005ae2;
  margin-bottom: 20px !important;
  margin-top: -30px;
}

/* Media queries for responsiveness */
@media (max-width: 767px) {
  .fontP {
    font-size: 18px;
    margin-left: 20px;
    margin-right: 20px;
  }

  .card {
    width: calc(50% - 20px); /* Adjust width for two cards in a row */
  }
}

@media (max-width: 480px) {
  .card {
    width: calc(100% - 20px); /* Adjust width for single card in a row */
  }
}
</style>
