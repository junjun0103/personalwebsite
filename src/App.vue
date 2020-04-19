<template>
  <div id="app">
    <app-navbar></app-navbar>
    <section class="section section-header"> 
    </section>

    <section class="section section-experiences"> 

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
import Footer from './components/Footer.vue'
export default {
  components:{
    appNavbar:Navbar,
    appFooter:Footer
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,400;0,700;1,300&display=swap');
:root { 
  // Colors
  --color-yellow-1:#f6e58d;
  --color-yellow-2:#f9ca24;
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
    text-transform: uppercase;

    backface-visibility: hidden;  /* incase if the animation is shaking*/
    margin-bottom: 6rem;


    
    &--main{
        display: block;
        font-size: 6rem;
        font-weight: 400;
        letter-spacing: 3.5rem;
    
        animation-name: moveInLeft;
        animation-duration: 1s;
        animation-timing-function: ease-out;
        
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
        font-size: 2rem;
        font-weight: 700;
        letter-spacing: 1.75rem;
    
        animation-name: moveInRight;
        animation-duration: 1s;
        animation-timing-function: ease-out;

        // @include respond(phone){
        //     letter-spacing: .5rem;
        // }
    }
}

  
</style>
