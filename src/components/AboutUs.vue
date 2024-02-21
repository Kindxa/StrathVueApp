<template>
  <div id="AboutUs">
    <v-container>
      <v-layout column>
        <v-carousel>
          <v-carousel-item
            src="./../../public/History.jpg"
            cover
          ></v-carousel-item>

          <v-carousel-item
            src="./../../public/Governance.jpg"
            cover
          ></v-carousel-item>

          <v-carousel-item
            src="./../../public/Administration.jpg"
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
                title="History"
                subtitle="Strathmore University History"
                text="Strathmore University, located in Nairobi, Kenya, was founded in 1961 as an Advanced-level Sixth Form College by a group of professionals led by Dr. Neil O'Leary. It began offering degrees in commerce and accountancy in partnership with the University of London in 1966. In 1985, it became a constituent college of the Catholic University of Eastern Africa (CUEA). Strathmore attained university status in 2008 and has since expanded its academic offerings to include various disciplines such as business, law, information technology, and humanities. The university is renowned for its commitment to academic excellence, ethical leadership, and community development, making it one of the leading institutions of higher learning in East Africa.





"
              ></v-card>

              <div class="mt-4 text-subtitle-2">With slots</div>

              <v-card width="400">
                <template v-slot:title> Governance </template>

                <template v-slot:subtitle>
                  Officials at Strathmore University
                </template>

                <template v-slot:text>
                  Strathmore University is governed by a Board of Trustees
                  chaired by Dr. David S. S. Wachira. The university's highest
                  decision-making body is the University Council, responsible
                  for setting policies and overseeing strategic direction. Under
                  the Council's supervision, the Vice-Chancellor leads the
                  day-to-day operations, supported by a management team
                  comprising various heads of departments and administrative
                  units. Additionally, the Academic Council oversees academic
                  matters, ensuring the quality and relevance of academic
                  programs. The university operates within a framework of
                  accountability, transparency, and ethical governance, adhering
                  to local regulations and international best practices.
                </template>
              </v-card>

              <div class="mt-4 text-subtitle-2">With markup</div>

              <v-card width="400">
                <v-card-item>
                  <v-card-title>Administration</v-card-title>

                  <v-card-subtitle>Strathmore Administration</v-card-subtitle>
                </v-card-item>

                <v-card-text>
                  Strathmore University's administration is led by the
                  Vice-Chancellor, currently Dr. Vincent Ogutu. Assisting the
                  Vice-Chancellor are several deputy vice-chancellors overseeing
                  different aspects of the university's operations such as
                  academic affairs, finance, and administration. Additionally,
                  various directors and managers are responsible for departments
                  ranging from admissions to student affairs and facilities
                  management. The administration ensures the smooth functioning
                  of the university, implementing policies, managing resources,
                  and fostering a conducive learning environment. With a focus
                  on efficiency, innovation, and student-centeredness, the
                  administration plays a vital role in advancing the
                  university's mission and vision.
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
