<template>
    <div id="courses">
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
                <div class="text-subtitle-2"></div>
  
                
  
                <div class="mt-4 text-subtitle-2"></div>
  
               
  
                <div class="mt-4 text-subtitle-2">With markup</div>
  
                <v-card width="400">
                  <v-card-item>
                    <v-card-title>{{componentTitle}}</v-card-title>
  
                    <v-card-subtitle
                      ></v-card-subtitle
                    >
                  </v-card-item>
  
                  <v-card-text>
                    <v-list
                    :items="courses"
                    item-title="coursename"
                    item-value="id"
                    ></v-list>
                  </v-card-text>
                </v-card>
              </div>
            </v-row>
          </v-container>
        </v-layout>
      </v-container>
    </div>
  </template>

  <script>
  export default {
    // Properties returned from data() become reactive state
    // and will be exposed on `this`.
    data() {
      return {
        courses:[
            {
                id: 1,
                coursename: 'Financial Economics'
            },
            {
                id: 2,
                coursename: 'Psychology'
            },
            {
                id: 3,
                coursename: 'Computer Science'
            },
            {
                id: 4,
                coursename: 'Financial Engineering'
            },
            {
                id: 5,
                coursename: 'Medicine and Surgery'
            },
            {
                id: 6,
                coursename: 'Education'
            },
            {
                id: 7,
                coursename: 'Architecture'
            },
            {
                id: 8,
                coursename: 'Forestry'
            },

            {
                id: 9,
                coursename: 'Law'
            },
            {
                id: 10,
                coursename: 'Hospitality and Tourism'
            },
        ],
        componentTitle: 'Courses at Strath Uni'
      }
    },
  
    // Methods are functions that mutate state and trigger updates.
    // They can be bound as event handlers in templates.
    methods: {
      increment() {
        this.count++
      }
    },
  
    // Lifecycle hooks are called at different stages
    // of a component's lifecycle.
    // This function will be called when the component is mounted.
    mounted() {
      console.log(`The initial count is ${this.count}.`)
    }
  }
  </script>
  
  
  