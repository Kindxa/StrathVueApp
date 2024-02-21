<template>
  <div id="Library">
    <v-container>
      <v-layout column>
        <v-carousel>
          <v-carousel-item
            src="./../../public/library services.jpg"
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
                title="Library Services"
                subtitle=""
                text="The library services at Strathmore University provide students, faculty, and staff with access to a wide range of resources and support for their academic and research needs. The library offers a comprehensive collection of print and electronic materials, including books, journals, databases, and multimedia resources, covering various disciplines and subjects. Knowledgeable librarians are available to assist users with research inquiries, information literacy skills, and citation guidance. The library provides comfortable study spaces, computer workstations, and group study rooms conducive to learning and collaboration. Additionally, interlibrary loan services and document delivery options are available to facilitate access to materials not available in the library's collection. Through its robust and user-centered services, the library plays a vital role in supporting the academic excellence and scholarly endeavors of the Strathmore University community."
              ></v-card>

              <div class="mt-4 text-subtitle-2">With slots</div>

              <v-card width="400">
                <template v-slot:title> Our Collection </template>

                <template v-slot:subtitle> </template>

                <template v-slot:text>
                  The library collection at Strathmore University is extensive
                  and diverse, catering to the academic and research needs of
                  students, faculty, and staff across various disciplines.
                  Comprising both print and electronic resources, the collection
                  includes books, journals, periodicals, research papers,
                  multimedia materials, and more. Covering subjects ranging from
                  business and economics to law, information technology,
                  humanities, and social sciences, the collection is
                  continuously updated to reflect the latest developments in
                  academia and industry. Specialized collections and resources
                  are available for specific programs and research areas,
                  ensuring comprehensive support for academic endeavors. Through
                  strategic acquisitions and partnerships with publishers and
                  content providers, the library maintains a high-quality
                  collection that fosters scholarship, innovation, and
                  intellectual inquiry within the Strathmore University
                  community.
                </template>
              </v-card>

              <div class="mt-4 text-subtitle-2">With markup</div>

              <v-card width="400">
                <v-card-item>
                  <v-card-title>Our Policeis</v-card-title>

                  <v-card-subtitle></v-card-subtitle>
                </v-card-item>

                <v-card-text>
                  The library policies at Strathmore University are designed to
                  ensure efficient and equitable access to resources while
                  maintaining a conducive learning environment. These policies
                  govern areas such as borrowing privileges, loan periods,
                  renewal procedures, and fines for overdue materials. Users are
                  expected to adhere to copyright laws and ethical guidelines
                  when accessing and using library materials. Quiet study areas
                  and group study rooms are designated for academic purposes,
                  promoting a productive atmosphere for research and study. The
                  library also provides guidelines for accessing electronic
                  resources, including databases, e-journals, and e-books,
                  ensuring responsible usage and respect for licensing
                  agreements. By upholding these policies, the library
                  facilitates an inclusive and supportive environment that
                  fosters academic excellence and intellectual growth within the
                  Strathmore University community.
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
