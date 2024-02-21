<template>
  <div id="Alumni">
    <v-container>
      <v-layout column>
        <v-carousel>
          <v-carousel-item
            src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
            cover
          ></v-carousel-item>

          <v-carousel-item
            src="https://cdn.vuetifyjs.com/images/cards/hotel.jpg"
            cover
          ></v-carousel-item>

          <v-carousel-item
            src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
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
                title="Alumni Association"
                subtitle="The Alumni Association of Strathmore University"
                text="The Alumni Association at Strathmore University serves as a vibrant network connecting graduates worldwide. Led by an elected executive committee, it fosters lifelong relationships among alumni and supports their professional and personal development. Through events, mentoring programs, and online platforms, the association facilitates networking opportunities, career guidance, and knowledge sharing. Alumni contribute to the university's growth by engaging in fundraising initiatives, volunteering, and advocating for their alma mater. With a commitment to upholding the values of excellence and integrity instilled at Strathmore, the Alumni Association plays a vital role in strengthening the university's community and enhancing its reputation.





"
              ></v-card>

              <div class="mt-4 text-subtitle-2">With slots</div>

              <v-card width="400">
                <template v-slot:title> Alumni projects </template>

                <template v-slot:subtitle> </template>

                <template v-slot:text>
                  Strathmore University alumni have undertaken impactful
                  projects across various sectors globally. From pioneering
                  startups in technology and entrepreneurship to leading
                  initiatives in healthcare, education, and social
                  entrepreneurship, alumni have demonstrated innovation and
                  leadership. Projects range from sustainable development
                  ventures addressing environmental challenges to
                  community-based initiatives empowering marginalized
                  populations. Alumni-led projects have garnered recognition for
                  their social impact, contributing to positive change and
                  sustainable development in local and international
                  communities. Leveraging their education and values instilled
                  at Strathmore, alumni continue to drive meaningful projects
                  that address pressing societal needs and create lasting
                  impact.
                </template>
              </v-card>

              <div class="mt-4 text-subtitle-2">With markup</div>

              <v-card width="400">
                <v-card-item>
                  <v-card-title>Alumni network</v-card-title>

                  <v-card-subtitle></v-card-subtitle>
                </v-card-item>

                <v-card-text>
                  Strathmore University alumni have undertaken impactful
                  projects across various sectors globally. From pioneering
                  startups in technology and entrepreneurship to leading
                  initiatives in healthcare, education, and social
                  entrepreneurship, alumni have demonstrated innovation and
                  leadership. Projects range from sustainable development
                  ventures addressing environmental challenges to
                  community-based initiatives empowering marginalized
                  populations. Alumni-led projects have garnered recognition for
                  their social impact, contributing to positive change and
                  sustainable development in local and international
                  communities. Leveraging their education and values instilled
                  at Strathmore, alumni continue to drive meaningful projects
                  that address pressing societal needs and create lasting
                  impact.
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
s
