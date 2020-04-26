<template>
    <div class="profile">
        <h1 class="heading-primary">
            <span class="heading-primary--main">Profile</span>
            <span class="heading-primary--sub">I'm a creative front-end webdeveloper</span>
            <hr class="my-hr-style">
        </h1>
        
        <div class="columns is-centered">
            <div class="column is-one-fifth-desktop is-one-third-tablet">
                <h3><span class="heading-primary--sub2">About me</span></h3>
                <p>
                    I am an allround web developer. I wanna be a senior programmer with good knowledge of front-end and back-end techniques. I love UX/UI and order and I also stand for quality. I love spending time on fixing little details and optimizing web apps. Also I like working in a team with using CI/CD tools, you'll learn faster and much deeper.
                </p>
            </div>
            <div class="column is-one-fifth-desktop is-one-third-tablet">
                <div class="profile__div">
                    <figure class="profile__div__shape">
                        <img src="../assets/img/profile.jpg" alt="pserson" class="profile__div__img">
                        <figcaption class="profile__div__caption">Jun Lee</figcaption>
                    </figure>
                </div>

            </div>
            <div class="column is-one-fifth-desktop is-one-third-tablet" >
                <h3><span class="heading-primary--sub2">Details</span></h3>
                <p>
                    <strong>Name:</strong><br>
                    Jun Lee <br><br>
                    <strong>Age:</strong><br>
                    31 years <br><br>
                    <strong>Location:</strong><br>
                    Mt Roskill, Auckland, New Zealand <br>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
.profile{
    min-height: 80vh;
}
.heading-primary{
    text-align: center;
}
p{
    text-align:justify;
}
.profile__div{
    position: relative;
    
    &__shape{
        width: 16rem;
        height: 16rem;
        margin-top: 2rem!important;
        margin: 0 auto;
        clip-path:circle(50% at 50% 50%);
        filter: brightness(80%);
    }
    &__caption{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, 20%);
        color: black;
        text-transform: uppercase;
        font-size: 1.7rem;
        text-align: center;
        opacity: 0;
        transition: all .5s;
        backface-visibility: hidden;
    }

    &:hover &__caption{
        opacity: 1;
        transform: translate(-50%, -50%);;
    }

    &:hover &__img{
        transform: translateX(-.1rem) scale(1);
        filter: blur(3px) brightness(80%);
    }
}
</style>