<template>
    <nav class="navbar" :class="{'navbar__fixed':isFixed}">
        <ul class="navbar__list">
            <a href="#section-profile" v-smooth-scroll><li class="navbar__item" :class="{'active': isActive}">Profile</li></a>
            <a href="#section-experiences" v-smooth-scroll><li class="navbar__item" :class="{'active': isActive2}">Experiences</li></a>
            <a href="#section-projects" v-smooth-scroll><li class="navbar__item" :class="{'active': isActive3}">Projects</li></a>
            <a href="#section-contact" v-smooth-scroll><li class="navbar__item" :class="{'active': isActive4}">Contact</li></a>
        </ul>
    </nav>
</template>

<script>
export default {
    data () {
    return {
        isFixed:false,
        isActive: false,
        isActive2: false,
        isActive3: false,
        isActive4: false,
    }
  },
  methods: {
    handleScroll () {
    const els0 = document.querySelectorAll('.scrollme0')
      els0.forEach((el) => {
        const elBottom = el.getBoundingClientRect().bottom
        if (elBottom <= 0) {
          this.isFixed = true;
        } else {
          this.isFixed=false;
        } 
      })
      const els = document.querySelectorAll('.scrollme')
      els.forEach((el) => {
        const elTop = el.getBoundingClientRect().top
        const elBottom = el.getBoundingClientRect().bottom
        if (elTop >= 10 || elBottom <= 10) {
          this.isActive = false
        } if (elTop <= 10 && elBottom >= 10) {
          this.isActive = true;
        } 
      })
        const els2 = document.querySelectorAll('.scrollme2')
      els2.forEach((el) => {
        const elTop = el.getBoundingClientRect().top
        const elBottom = el.getBoundingClientRect().bottom
        if (elTop >= 10 || elBottom <= 10) {
          this.isActive2 = false
        } if (elTop <= 10 && elBottom >= 10) {
          this.isActive2 = true
        } 
      })
       const els3 = document.querySelectorAll('.scrollme3')
      els3.forEach((el) => {
        const elTop = el.getBoundingClientRect().top
        const elBottom = el.getBoundingClientRect().bottom
        if (elTop >= 10 || elBottom <= 10) {
          this.isActive3 = false
        } if (elTop <= 10 && elBottom >= 10) {
          this.isActive3 = true
        } 
      })
      const els4 = document.querySelectorAll('.scrollme4')
      els4.forEach((el) => {
        const elTop = el.getBoundingClientRect().top
        const elBottom = el.getBoundingClientRect().bottom
        if (elTop >= 10 || elBottom <= 10) {
          this.isActive4 = false
        } if (elTop <= 10 && elBottom >= 10) {
          this.isActive4 = true
        } 
      })
      
    }
  },
  created() {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll);
  }
}
</script>

<style lang="scss" scoped>
.navbar{
    background-color: var(--color-black-1);
    color: white;
    z-index: 999;
    font-size: 1.3rem;
    width: 8rem;
    top: 0rem;
    right: 5rem;
    position: absolute;

        //big-desktop{
        @media only screen and (max-width: 112.5rem){
            right: 2rem;
        } //1800px
            // tab-land  1200px
        @media only screen and (max-width: 75rem){
            display: none;
        }
        @media only screen and (max-width: 56.25rem){
            display: none;
        }
    &__fixed{
        top: 5rem;
        position: fixed;
        transition: all .5s;
    }
    &__list{
        list-style: none;
        text-align: center;
        width: 100%;
        
    }
    &__item{
        color: white;
        height: 6rem;
        padding-top: 2.5rem;
        &:hover,
        &:active{
            color: var(--color-grery-1);
            background-color: black;
        }
    }
    &__link{
        width: 100%;
        color: white;
        cursor: pointer;
        
    }
    
}
.active{
    background-color: var(--color-green-2);
}

</style>
        