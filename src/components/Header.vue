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
    background-image: linear-gradient(to right,
        rgba(#6ab04c, .3) 0%, 
        rgba(#535c68, .5) 100%), url(../assets/img/photo_frame.jpg);
    background-repeat: no-repeat;
    background-size: 100%;
    min-height: 100vh;
    background-attachment:fixed;

    &__text-box{
        position: absolute;
        top: 48%;
        right: 4%;
        transform: translate(-50%, -50%);

    }
}
.heading-primary{
    color: white;
    &--sub{
        font-size: 2rem;
        color: white;
    }
}
</style>