<template>
    <div class="header">
        <div class="header__text-box">
            <h1 class="heading-primary">
                <span class="heading-primary--sub">Hey, I'm</span>
                <hr>
                <span class="heading-primary--main">JUN LEE</span>
                <hr>
            </h1>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped lang="scss">
.header{
    // background-image: linear-gradient(to right,
    //     rgba(#6ab04c, .1) 0%, 
    //     rgba(#535c68, .1) 100%), url(../assets/img/photo_frame.jpg);
    // background-repeat: no-repeat;
    // background-size: cover;

    background-image: linear-gradient(to right,
         rgba(#6ab04c, .1) 0%, 
         rgba(#535c68, .1) 100%), url(../assets/img/photo_frame.jpg);
    background-repeat: no-repeat;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    height: 100vh;
    background-attachment:fixed;
    width: auto;
    //background-position: center center;

    &__text-box{
        position: absolute;
        top: 48%;
        right: 4%;
        transform: translate(-50%, -50%);
        //tablet
        @media only screen and (max-width: 75rem){
            top: 80%;
            right: 50%;
        }
        //mobile
        @media only screen and (max-width: 56.25rem){
            top: 85%;
            right: 40%;
        }
    }
}
.heading-primary{
    color: white;
    @media only screen and (max-width: 75rem){
            color: black;
    }
    @media only screen and (max-width: 56.25rem){
            color: black;
    }
    &--sub{
        font-size: 2rem;
        color: white;
        @media only screen and (max-width: 75rem){
            color: black;
        }
        @media only screen and (max-width: 56.25rem){
            color: black;
        }
    }
}
</style>