<template>
  <div id="homepage">
    <v-container>
      <v-layout column>
        <v-carousel>
          <v-carousel-item
            src="./../../public/reunion.jpg"
            cover
          ></v-carousel-item>

          <v-carousel-item
            src="./../../public/kyle-petzer-3FjR_2bUXFc-unsplash.jpg"
            cover
          ></v-carousel-item>

          <v-carousel-item
            src="./../../public/annie-spratt-cVEOh_JJmEE-unsplash.jpg"
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
                title="Alumni Reuinion"
                subtitle=""
                text="The annual Alumni Reunion of Strathmore University, scheduled for (21st March, 2024), is a highly anticipated event that brings together graduates from various cohorts to reconnect, reminisce, and celebrate their shared experiences. Alumni from different disciplines and graduating classes gather to renew friendships, network with fellow graduates, and catch up on each other's lives and achievements. The reunion features a range of activities, including campus tours, panel discussions, and social gatherings, providing opportunities for alumni to relive their university memories and strengthen their ties with the alma mater. It serves as a testament to the enduring bond among Strathmore alumni and their ongoing commitment to the university's values and legacy.





"
              ></v-card>

              <div class="mt-4 text-subtitle-2">With slots</div>

              <v-card width="400">
                <template v-slot:title> Cultural Festival </template>

                <template v-slot:subtitle> </template>

                <template v-slot:text>
                  The annual Cultural Festival at Strathmore University, slated
                  for [19th April, 2024], is a vibrant celebration of diversity,
                  creativity, and community. This eagerly awaited event
                  showcases the rich cultural heritage of students, faculty, and
                  staff through an array of performances, exhibitions, and
                  interactive experiences. From traditional music and dance
                  performances to culinary delights from around the world, the
                  festival offers a sensory journey that fosters cross-cultural
                  understanding and appreciation. Attendees can immerse
                  themselves in cultural displays, participate in workshops, and
                  engage in meaningful conversations that promote cultural
                  exchange and unity. The Cultural Festival serves as a colorful
                  highlight on the university calendar, embodying the spirit of
                  inclusivity and multiculturalism embraced by Strathmore
                  University.
                </template>
              </v-card>

              <div class="mt-4 text-subtitle-2">With markup</div>

              <v-card width="400">
                <v-card-item>
                  <v-card-title>Charity</v-card-title>

                  <v-card-subtitle></v-card-subtitle>
                </v-card-item>

                <v-card-text>
                  The annual Charity Event at Strathmore University, scheduled
                  for [insert date], is a heartwarming initiative that embodies
                  the university's commitment to social responsibility and
                  community engagement. This philanthropic event brings together
                  students, faculty, and staff to support various charitable
                  causes through fundraising activities, volunteer efforts, and
                  awareness campaigns. From charity walks and food drives to
                  charity auctions and talent shows, the event offers diverse
                  opportunities for participants to make a positive impact on
                  society. Proceeds from the Charity Event are directed towards
                  supporting local community organizations, orphanages, schools,
                  and healthcare initiatives, providing vital assistance to
                  those in need. It serves as a testament to the university's
                  ethos of compassion, empathy, and solidarity, inspiring
                  individuals to come together and create positive change in the
                  world.
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
