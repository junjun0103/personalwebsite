<template>
  <div id="app">
    <!-- navbar -->
    <app-navbar></app-navbar>
    <!-- header -->
    <section class="section-header scrollme0"> 
      <app-header></app-header>
    </section>
    
    <!-- profile -->
    <section class="section section-profile scrollme" id="section-profile"> 
      <!-- floating navbar -->
      <app-floatingnavbar></app-floatingnavbar>
      <app-profile></app-profile>
    </section>
    <!-- experiences -->
    <section class="section section-experiences scrollme2" id="section-experiences"> 
      <app-experiences></app-experiences>
    </section>
    <!-- projects -->
    <section class="section section-projects scrollme3" id="section-projects"> 
      <app-projects></app-projects>
    </section>

    <section class="section section-contact scrollme4" id="section-contact"> 
      <app-contact></app-contact>
    </section>
    
    <app-footer></app-footer>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Header from './components/Header.vue'
import Floatingnavbar from './components/Floatingnavbar.vue'
import Profile from './components/Profile.vue'
import Experiences from './components/Experiences.vue'
import Projects from './components/Projects.vue'
import Contact from './components/Contactme.vue'
import Footer from './components/Footer.vue'
export default {
  components:{
    appNavbar:Navbar,
    appHeader:Header,
    appFloatingnavbar:Floatingnavbar,
    appProfile:Profile,
    appExperiences:Experiences,
    appProjects:Projects,
    appContact:Contact,
    appFooter:Footer,
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,400;0,700;1,300&display=swap');
@import url('https://fonts.googleapis.com/css2?family=PT+Sans:ital@1&display=swap');
//font-family: 'PT Sans', sans-serif;  ==> italic

:root { 
  // Colors
  --color-yellow-1:#f6e58d;
  --color-yellow-2:#f9ca24;
  --color-grary-light-1: #f7f7f7;
  --color-grary-light-2: #eee;
  --color-grery-1:#95afc0;
  --color-grery-2:#535c68;
  --color-green-1:#badc58;
  --color-green-2:#6ab04c;
  --color-black-1:#202020;
  --color-red-1:#ff7979;
  --color-puple-2:#eb4d4b;
  --color-puple-1:#686de0;
  --color-blue-2:#4834d4;
  --color-red-1:#ff7979;
  --color-red-2:#eb4d4b;

}
html{
    //this defines what 1rem is 10px  10px/16px = 62.5%
    font-size: 62.5%; 

   @media only screen and (max-width: 112.5rem){
    font-size: 75%;  //1 rem =12px 12/16
    }

    @media only screen and (max-width: 75rem){  //width < 900 ?
        font-size: 56.25%;  //1 rem =9px 9/16 
    }

      @media only screen and (max-width: 56.25rem){  //width < 600 ?
      font-size: 50%;  //1 rem =8px 8/16 
    }

}

*{
    font-family: "IBM Plex Sans", sans-serif;
    font-weight: 400;
    font-size: .9rem;
    line-height: 1.7;
    //color: var(--color-grery-2);
}

.heading-primary{
    backface-visibility: hidden;  /* incase if the animation is shaking*/
    margin-bottom: 5rem;
    color: var(--color-green-2);

    //tablet
        @media only screen and (max-width: 75rem){
           margin-bottom: 3.5rem;
        }
        //mobile
        @media only screen and (max-width: 56.25rem){
           margin-bottom: 2rem;
        }

    &--main{
        display: block;
        font-size: 3rem;
        font-weight: 400;
        letter-spacing: .2rem;
        text-transform: uppercase;
        
        // @include respond(phone){
        //     letter-spacing: 1rem;
        //     font-size: 5rem;
        // }
        /*
        animation-delay: 3s;
        animation-iteration-count: 3;
        */ 
        //tablet
        @media only screen and (max-width: 75rem){
          font-size: 2.5rem;
        }
        //mobile
        @media only screen and (max-width: 56.25rem){
          font-size: 2rem;
        }
    }
    
    &--sub{
        display: block;
        font-size: 1.3rem;
        font-weight: 400;
        letter-spacing: .1rem;
        font-family: 'PT Sans', sans-serif;
        color: var(--color-grery-1);
        // @include respond(phone){
        //     letter-spacing: .5rem;
        // }
        //tablet
        @media only screen and (max-width: 75rem){
          font-size: 1.2rem;
        }
        //mobile
        @media only screen and (max-width: 56.25rem){
          font-size: 1rem;
        }
    }
    &--sub2{  
      color: var(--color-green-2);
      display: block;
      font-size: 1.8rem;
      font-weight: 400;
      letter-spacing: .3rem;
      font-family: "IBM Plex Sans", sans-serif;
      margin-bottom: 1rem;
      //tablet
        @media only screen and (max-width: 75rem){
          font-size: 1.5rem;
          margin-bottom: .8rem;
        }
        //mobile
        @media only screen and (max-width: 56.25rem){
          font-size: 1.3rem;
        }
    }
    
}

.my-hr-style{
  width:60%; 
  margin:auto; 
  background-color: var(--color-grary-light-2);
  height: .2rem;
  &__white{
    background-color: white;
  }
}

.section-profile{
  position: relative;
}
  
</style>
