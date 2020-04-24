<template>
    <div class="contact">
        <div class="contact--background">
            <h1 class="heading-primary">
                <span class="heading-primary--main">Contact me</span>
                <!-- <span class="heading-primary--sub">vue.js javascript css scss php mysql</span> -->
                <hr class="my-hr-style">
            </h1>

            <div class="contact--form">
                <div class="field">
                    <label for="email" class="contact--form__label">Email Address</label>
                    <p class="control has-icons-left has-icons-right">
                        <input class="input" type="email" placeholder="Email Address" id="email">
                        <span class="icon is-left">
                            <i class="fas fa-envelope"></i>
                        </span>
                        <span class="icon is-right">
                            <i class="fas fa-check"></i>
                        </span>
                    </p>
                </div>
                <div class="field">
                    <label for="name" class="contact--form__label">Name</label>
                    <p class="control has-icons-left">
                        <input class="input" type="text" placeholder="Name" id="name">
                        <span class="icon is-left">
                            <i class="fas fa-user"></i>
                        </span>
                    </p>
                </div>
                 <div class="field">
                    <label for="message" class="contact--form__label">Message</label>
                    <p class="control has-icons-left">
                        <textarea class="textarea" placeholder="Message" name="message"></textarea>
                        <span class="icon is-left">
                            <i class="fas fa-comment-alt"></i>
                        </span>
                    </p>
                </div>
                <div class="contact--form__button">
                    <button class="button is-success is-rounded is-medium">SEND IT </button>
                </div>
                
            </div>
            
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
.contact{

    background-color: var(--color-grary-light-2);
    padding: 5rem 0;

    &--background{
    height: 43rem;
    background-image: linear-gradient(105deg,
    rgba(white, .9) 0%, 
    rgba(white, .9) 50%,
    transparent 50%),
    url(../assets/img/contact_background.jpg);
    background-size: cover;
    border-radius: 3px;
    box-shadow: 0 1.5rem 4rem rgba(black , .2);
    background-repeat:no-repeat;

    // tab-land  1200px
        @media only screen and (max-width: 75rem){
            background-image: linear-gradient(105deg,
            rgba(white, .9) 0%, 
            rgba(white, .9) 65%,
            transparent 65%),url(../assets/img/contact_background.jpg);
            background-size: cover;
        }
        @media only screen and (max-width: 56.25rem){
            background-image: linear-gradient(105deg,
            rgba(white, .9) 0%, 
            rgba(white, .9) 100%,
            transparent 65%),url(../assets/img/contact_background.jpg);
            background-size: cover;
        }
    }

    &--form{
        width: 50%;
        padding:0 6rem;
        // tab-land  1200px
        @media only screen and (max-width: 75rem){
            width: 65%;
        }
        // tab-port 900px
        @media only screen and (max-width: 56.25rem){
            width: 100%;
        }

        &__button{
            margin-top: 2rem;
        }
        &__label{
        font-size: 1rem;
        font-weight: 700;
        margin-left: 2.3rem;
        margin-top: .1rem;
        display: block;
        transition: all .3s;
        color: var(--color-grery-2);
    }
    }
}
.heading-primary{
    text-align: center;
}

.textarea{
    padding: .5rem 2.5rem;

}


</style>