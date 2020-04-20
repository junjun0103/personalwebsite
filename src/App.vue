<template>
  <div id="app">
    <!-- navbar -->
    <app-navbar></app-navbar>
    <!-- header -->
    <section class="section-header"> 
      <app-header></app-header>
    </section>
    <!-- profile -->
    <section class="section section-profile"> 
      <app-profile></app-profile>
    </section>
    <!-- experiences -->
    <section class="section section-experiences"> 
      <app-experiences></app-experiences>
    </section>

    <section class="section section-abilities"> 

    </section>

    <section class="section section-projects"> 

    </section>

    <section class="section section-contact"> 

    </section>
    
    <app-footer></app-footer>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Header from './components/Header.vue'
import Profile from './components/Profile.vue'
import Experiences from './components/Experiences.vue'
import Footer from './components/Footer.vue'
export default {
  components:{
    appNavbar:Navbar,
    appFooter:Footer,
    appHeader:Header,
    appProfile:Profile,
    appExperiences:Experiences,
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
  --color-red-1:#ff7979;
  --color-puple-2:#eb4d4b;
  --color-puple-1:#686de0;
  --color-blue-2:#4834d4;
  --color-red-1:#ff7979;
  --color-red-2:#eb4d4b;

}


*{
    font-family: "IBM Plex Sans", sans-serif;
    font-weight: 400;
    /*font-size: 16px;*/
    line-height: 1.7;
    //color: var(--color-grery-2);
}


.heading-primary{
    backface-visibility: hidden;  /* incase if the animation is shaking*/
    margin-bottom: 6rem;
    color: var(--color-green-2);

    &--main{
        display: block;
        font-size: 3.5rem;
        font-weight: 400;
        letter-spacing: .3rem;
        text-transform: uppercase;
        
        // @include respond(phone){
        //     letter-spacing: 1rem;
        //     font-size: 5rem;
        // }
        /*
        animation-delay: 3s;
        animation-iteration-count: 3;
        */
    }
    
    &--sub{
        display: block;
        font-size: 1.7rem;
        font-weight: 400;
        letter-spacing: .2rem;
        font-family: 'PT Sans', sans-serif;
        color: var(--color-grery-1);
        // @include respond(phone){
        //     letter-spacing: .5rem;
        // }
    }
    &--sub2{  
      color: var(--color-green-2);
      display: block;
      font-size: 2rem;
      font-weight: 400;
      letter-spacing: .3rem;
      font-family: "IBM Plex Sans", sans-serif;
      margin-bottom: 1rem;
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

.section-experiences{
  
}

  
</style>
