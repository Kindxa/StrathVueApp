<template>
  <div id="homepage">
    <v-container>
      <v-layout column>
        <v-carousel>
          <v-carousel-item
            src="./../../public/pexels-pixabay-159490.jpg"
            cover
          ></v-carousel-item>

          <v-carousel-item
            src="./../../public/pexels-andrea-piacquadio-3762800.jpg"
            cover
          ></v-carousel-item>

          <v-carousel-item
            src="./../../public/rut-miit-3EMw3T-ZjkE-unsplash.jpg"
            cover
          ></v-carousel-item>
        </v-carousel>
      </v-layout>
      <v-layout>
        <v-container>
          <v-row align="center" justify="center">
            <div class="d-flex align-center flex-column">
              <div class="text-subtitle-2">With props</div>

              <v-card
                width="400"
                title="Student Life"
                subtitle="Student life at Strath Uni"
                text="Student life at Strathmore University is dynamic and enriching. With a vibrant campus culture, students engage in a diverse range of academic, social, and extracurricular activities. From rigorous academic programs to vibrant clubs and societies, there's something for everyone. The university fosters a supportive environment for personal and professional growth, emphasizing values such as integrity and excellence. With modern facilities, interactive classrooms, and a strong sense of community, students at Strathmore University thrive academically and socially, preparing for successful futures."
              ></v-card>

              <div class="mt-4 text-subtitle-2">With slots</div>

              <v-card width="400">
                <template v-slot:title> Accomodation </template>

                <template v-slot:subtitle>
                  Accomodation at Strath Uni
                </template>

                <template v-slot:text>
                  Strathmore University offers students a convenient and
                  supportive living environment conducive to academic success.
                  These residences typically provide furnished rooms or
                  apartments equipped with essential amenities like Wi-Fi, study
                  areas, and communal spaces for socializing. Living on campus
                  fosters a sense of community among students, facilitating
                  networking and collaboration. Additionally, proximity to
                  campus facilities such as libraries and lecture halls enhances
                  accessibility to resources and academic activities. University
                  accommodation often prioritizes safety and security measures,
                  ensuring students' well-being throughout their stay. Overall,
                  residing in university accommodation enriches the student
                  experience by integrating academic, social, and personal
                  growth within a supportive living environment.
                </template>
              </v-card>

              <div class="mt-4 text-subtitle-2">With markup</div>

              <v-card width="400">
                <v-card-item>
                  <v-card-title>Sports and Clubs </v-card-title>

                  <v-card-subtitle
                    >Sports and clubs at Strath Uni</v-card-subtitle
                  >
                </v-card-item>

                <v-card-text>
                  At Strathmore University, students have access to a vibrant
                  array of sports and clubs. The university offers various
                  sports teams, including football, basketball, and rugby,
                  competing both locally and internationally. Additionally,
                  students can engage in clubs focused on entrepreneurship,
                  community service, debate, and cultural exchange, among
                  others. These activities foster holistic development,
                  promoting teamwork, leadership, and networking skills. With
                  state-of-the-art facilities and experienced coaches,
                  Strathmore University encourages students to pursue their
                  passions and interests outside the classroom, contributing to
                  a well-rounded educational experience.
                </v-card-text>
              </v-card>
            </div>
          </v-row>
        </v-container>
      </v-layout>
    </v-container>
  </div>
</template>
<script setup>
const variants = ["elevated", "flat", "tonal", "outlined"];
</script>
