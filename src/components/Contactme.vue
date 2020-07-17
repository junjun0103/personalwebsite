<template>
    <div class="contact">
        <div class="contact--background">
            <h1 class="heading-primary">
                <span class="heading-primary--main">Contact me</span>
                <span class="heading-primary--sub">
"There is always a way. The more I say 'I can't do' or 'It's difficult', the more I get away from the solution."<br>-son(softbank CEO)</span>
                <hr class="my-hr-style">
            </h1>
            <form @submit.prevent="sendForm" id="formMessage" action="#" > 
                <div class="contact--form">
                    <div class="field">
                        <label for="email" class="contact--form__label">Email Address</label>
                        <p class="control has-icons-left has-icons-right">
                            <input class="input" type="email" placeholder="Email Address" id="email" name="email" v-model="email" required>
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
                            <input class="input" type="text" placeholder="Name" id="name" name="fname" v-model="fname" required>
                            <span class="icon is-left">
                                <i class="fas fa-user"></i>
                            </span>
                        </p>
                    </div>
                    <div class="field">
                        <label for="message" class="contact--form__label">Message</label>
                        <p class="control has-icons-left">
                            <textarea class="textarea" placeholder="Message" name="content" v-model="content" required></textarea>
                            <span class="icon is-left">
                                <i class="fas fa-comment-alt"></i>
                            </span>
                        </p>
                    </div>
                    <div class="contact--form__button">
                        <button class="button is-success is-rounded" type="submit">SEND IT </button>
                    </div>
                </div>
            </form>
            
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            email:'',
            fname:'',
            content:''
            
        }
    },
    methods: {

        sendForm(){
            var form = document.getElementById('formMessage');
            //axios.post('http://localhost:80/newgafa/src/models/login.php', new FormData(form)
          axios.post('https://gafa.co.nz/models/junlee.php', new FormData(form))
          .then(res =>{
              console.log('rta::'+res.data.rta);
               //correct credentials
            if(res.data.rta=='0'){  
              console.log('successed');
              this.$swal({
                  type: 'success',
                  title: 'success',
                  text: 'successed to send a message'
              })
            //   clear input
                this.email="";
                this.fname="";
                this.content="";
            }
            //password incorrect
            else if(res.data.rta=='1'){
              this.$swal({
                  type: 'error',
                  title: 'Error',
                  text: 'Faild to send a message'
              })
            }
            else{
              this.$swal({
                  type: 'error',
                  title: 'Error',
                  text: 'Conection problem'
              })
            }
          })
            //console.log(this.contactForm);
        }
        
    },
    
}
</script>

<style lang="scss" scoped>
.contact{

    background-color: var(--color-grary-light-2);
    padding: 5rem 0;
    //mobile
    @media only screen and (max-width: 56.25rem){
        padding: 1rem 0;
    }

    &--background{
    height: 40rem;
    background-image: linear-gradient(105deg,
            rgba(white, .9) 0%, 
            rgba(white, .9) 50%,
            transparent 65%),url(../assets/img/contact_background.jpg);
            background-size: cover;
    background-repeat:no-repeat;
    
        //big-desktop{
        @media only screen and (max-width: 112.5rem){
            background-image: linear-gradient(105deg,
            rgba(white, .9) 0%, 
            rgba(white, .9) 50%,
            transparent 65%),url(../assets/img/contact_background.jpg);
            background-size: cover;

        } //1800px
            // tab-land  1200px
        @media only screen and (max-width: 75rem){
            background-image: linear-gradient(105deg,
            rgba(white, .9) 0%, 
            rgba(white, .9) 65%,
            transparent 80%),url(../assets/img/contact_background.jpg);
            background-size: cover;
        }
        @media only screen and (max-width: 56.25rem){
            background-image: linear-gradient(105deg,
            rgba(white, .9) 0%, 
            rgba(white, .9) 90%,
            transparent 98%),url(../assets/img/contact_background.jpg);
            background-size: cover;
            height: 38rem;
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
            padding:0 1rem;
        }

        &__button{
            margin-top: 1rem;
        }
        &__label{
        font-weight: 700;
        margin-left: 2.4rem;
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