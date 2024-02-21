import {createRouter,createWebHistory} from 'vue-router'

import Homepage from "./../components/Homepage.vue"
import Events from "./../components/Events.vue"
import Courses from "./../components/Courses.vue"
import ContactUs from "./../components/ContactUs.vue"
import Partnerships from "./../components/Partnerships.vue"
import AboutUs from "./../components/AboutUs.vue"
import Alumni from "./../components/Alumni.vue"
import Library from "./../components/Library.vue"

const routes = [
  { 
  path:'/',
  name: 'homepage',
  component: Homepage,
   }, 
   { 
   path:'/events',
   name: 'events',
  component: Events,
  }, 
              
   { 
   path:'/aboutUs',
   name: 'aboutUs',
   component: AboutUs,
   }, 
          
   { 
   path:'/alumni',
   name: 'alumni',
   component: Alumni,
   },
          
   { 
   path:'/contactUs',
   name: 'contactUs',
   component: ContactUs,
   },  
          
  { 
  path:'/partnerships',
  name: 'partnerships',
  component: Partnerships,
  }, 

  { 
  path:'/courses',
  name: 'courses',
  component: Courses,
  },
              
  { 
  path:'/library',
  name: 'library',
  component: Library,
  }
                    
  ]     
     
  const router = createRouter ({
      history: createWebHistory(),
      routes,
  })

  export default router 