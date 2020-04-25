<template>
    <nav class="navbar">
        <ul class="navbar__list">
            <a href="#section-profile"><li class="navbar__item">Profile</li></a>
            <a href="#section-experiences"><li class="navbar__item">Experiences</li></a>
            <a href="#section-projects"><li class="navbar__item">Projects</li></a>
            <a href="#section-contact"><li class="navbar__item">Contact</li></a>
        </ul>
    </nav>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
.navbar{
    background-color: var(--color-black-1);
    color: white;
    z-index: 999;
    font-size: 1.6rem;
    width: 10rem;
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
        top: 6rem;
        position: fixed;
    }
    &__list{
        list-style: none;
        text-align: center;
        width: 100%;
        
    }
    &__item{
        color: white;
        height: 7rem;
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
</style>
        