<template>
    <div class="projects">
        <h1 class="heading-primary">
            <span class="heading-primary--main">Projects</span>
            <span class="heading-primary--sub">"If you do not walk tody, you will have to run tomorrow."</span>
            <hr class="my-hr-style">
        </h1>
        <div class="columns is-centered">
            <div class="column is-one-third-desktop is-two-fifths-tablet">
               <!-- <div class="projects__div__shape" v-on:click="showFirstModal = !showFirstModal">
                    <img src="../assets/img/test.jpg" alt="pserson" class="projects__div__img">
                    <figcaption class="projects__div__caption">Jun Lee</figcaption>
                </div> -->
                 <div class="projects__div" v-on:click="showFirstModal = !showFirstModal">
                    <figure class="projects__div__shape">
                        <img src="../assets/img/leesmemo/Leesmemo_main.png" alt="1" class="projects__div__img">
                        <figcaption class="projects__div__caption">
                            Lee's memo app
                            <hr>
                            android, SQLite
                        </figcaption>
                    </figure>
                </div>
            </div>
            <div class="column is-one-third-desktop is-two-fifths-tablet">
                <div class="projects__div" >
                    <a href="https://gafa.co.nz/" target="_blank">
                        <figure class="projects__div__shape" >
                            <img src="../assets/img/gafa/gafa_main.jpg" alt="2" class="projects__div__img">
                            <figcaption class="projects__div__caption">
                                GAFA hompage
                                <hr>
                                vue.js, Bootstrap, PHP, MySQL
                            </figcaption>
                        </figure>
                    </a>
                </div>
            </div>
        </div>


        <div class="columns is-centered mt-2">
            <div class="column is-one-third-desktop is-two-fifths-tablet">
                 <div class="projects__div">
                    <figure class="projects__div__shape">
                        <img src="../assets/img/personal_website.jpg" alt="1" class="projects__div__img">
                        <figcaption class="projects__div__caption">
                            Personal website
                            <hr>
                            vue.js, Bulma, PHP, firebase
                        </figcaption>
                    </figure>
                </div>
            </div>
            <div class="column is-one-third-desktop is-two-fifths-tablet">
               <div class="projects__div">
                    <figure class="projects__div__shape">
                        <img src="../assets/img/coming-soon-1.jpg" alt="coming soon" class="projects__div__img">
                    </figure>
                </div>
            </div>
        </div>


<!-- first modal -->
        <div class="modal " v-bind:class="{ 'is-active' : showFirstModal }" >
            <div class="modal-background" v-on:click="showFirstModal = !showFirstModal">
            </div>
            <div class="modal-card ">
                <header class="modal-card-head">
                    <p class="modal-card-title">Modal title</p>
                    <button class="delete" aria-label="close" v-on:click="showFirstModal = !showFirstModal"></button>
                </header>
                <section class="modal-card-body">
                    <div class="columns is-centered">
                        <div class="column is-one-third-desktop is-one-third-tablet">
                        <div class="box">
                            first
                        </div>
                        </div>
                        <div class="column is-one-third-desktop is-one-third-tablet">
                        <div class="box">
                                first
                            </div>
                        </div>
                    </div>
                </section>
                <footer class="modal-card-foot">
                    <!-- <button class="button is-success" v-on:click="showFirstModal = !showFirstModal">Close</button> -->
                </footer>
            </div>
                <!-- <button class="test1" aria-label="close" v-on:click="showFirstModal = !showFirstModal"></button> -->
        </div>

<!-- Second modal -->
        <div class="modal " v-bind:class="{ 'is-active' : showSecondModal }" >
            <div class="modal-background" v-on:click="showSecondModal = !showSecondModal">
            </div>
            <div class="modal-card ">
                <header class="modal-card-head">
                    <p class="modal-card-title">Modal title</p>
                    <button class="delete" aria-label="close" v-on:click="showSecondModal = !showSecondModal"></button>
                </header>
                <section class="modal-card-body">
                    <div class="columns is-centered">
                        <div class="column is-one-quarter-desktop is-one-third-tablet">
                        <div class="box">
                            second
                        </div>
                        </div>
                        <div class="column is-one-quarter-desktop is-one-third-tablet">
                        <div class="box">
                                second
                            </div>
                        </div>
                    </div>
                </section>
                <footer class="modal-card-foot">
                    <!-- <button class="button is-success" v-on:click="showSecondModal = !showSecondModal">Close</button> -->
                </footer>
            </div>
                <!-- <button class="test1" aria-label="close" v-on:click="showFirstModal = !showFirstModal"></button> -->
        </div>

<!-- Third modal -->
        <div class="modal " v-bind:class="{ 'is-active' : showThirdModal }" >
            <div class="modal-background" v-on:click="showThirdModal = !showThirdModal">
            </div>
            <div class="modal-card ">
                <header class="modal-card-head">
                    <p class="modal-card-title">Modal title</p>
                    <button class="delete" aria-label="close" v-on:click="showThirdModal = !showThirdModal"></button>
                </header>
                <section class="modal-card-body">
                    <div class="columns is-centered">
                        <div class="column is-one-quarter-desktop is-one-third-tablet">
                        <div class="box">
                            Third
                        </div>
                        </div>
                        <div class="column is-one-quarter-desktop is-one-third-tablet">
                        <div class="box">
                                Third
                            </div>
                        </div>
                    </div>
                </section>
                <footer class="modal-card-foot">
                    <!-- <button class="button is-success" v-on:click="showThirdModal = !showThirdModal">Close</button> -->
                </footer>
            </div>
                <!-- <button class="test1" aria-label="close" v-on:click="showFirstModal = !showFirstModal"></button> -->
        </div>
        
    </div>
</template>

<script>
export default {
    data() {
        return {
            test:'',
            showFirstModal:false,
            showSecondModal:false,
            showThirdModal:false,
        }
    },
    methods: {
        clicked(number){
            console.log('clicked'+number);
        }
    },
    
}
</script>

<style lang="scss" scoped>
.modal-card{
    min-width: 50vw;
}
.projects{
    min-height: 100vh;
}
.heading-primary{
    text-align: center;
}
.box{
    background-color: cadetblue;
    width: 90%; 
    height:250px; 
    margin:0 auto;
    cursor: pointer;
    position: relative;
}
.projects__div{
    position: relative;
    
     
    &__shape{
    width: 90%; 
    max-width: 26rem;
    height: 60vh; 
    max-height:20rem; 
    margin:0 auto;
    cursor: pointer;
    border:1px solid #ccc;
    border-radius:20px;
    overflow: hidden;
    box-shadow: 0 1.5rem 2rem rgba(black , .5);
    }
    &__img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    }
    &__caption{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, 20%);
        color: var(--color-green-2);
        text-transform: uppercase;
        font-size: 1.7rem;
        text-align: center;
        opacity: 0;
        transition: all .5s;
        backface-visibility: hidden;
        font-family: 'PT Sans', sans-serif;
    }

    &:hover &__caption{
        opacity: 1;
        transform: translate(-50%, -50%);;
    }

    &:hover &__img{
        transform: translateX(-.1rem) scale(1);
        filter: blur(3px) brightness(20%);
    }
}
.mt-2{
    margin-top: 2rem;
}
</style>