<template>
    <div>
        <nav class="navbar is-fixed-top" role="navigation" aria-label="main navigation">
            <div class="navbar-brand">
                <a class="navbar-item " href="#section-header">
                <img src="../assets/img/logo.jpg" alt="logo">
                </a>

                <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" v-on:click="showNav = !showNav" v-bind:class="{ 'is-active' : showNav }">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span> 
                </a>
            </div>

            <div id="navbarBasicExample" class="navbar-menu" v-bind:class="{ 'is-active' : showNav }">
                <div class="navbar-start">
                    <a href="#section-profile" class="navbar-item" v-smooth-scroll>
                        Profile
                    </a>

                    <a href="#section-experiences" class="navbar-item" v-smooth-scroll>
                        Experiences
                    </a>

                     <a href="#section-projects" class="navbar-item" v-smooth-scroll>
                        Projects
                    </a>
                     <a href="#section-contact" class="navbar-item" v-smooth-scroll>
                        Contact
                    </a>

                    <!-- <div class="navbar-item has-dropdown is-hoverable">
                        <a class="navbar-link">
                        More
                        </a>
                        <div class="navbar-dropdown">
                        <a class="navbar-item">
                            Profile
                        </a>
                        <a class="navbar-item">
                            Jobs
                        </a>
                        <a class="navbar-item">
                            Contact
                        </a>
                        <hr class="navbar-divider">
                        <a class="navbar-item">
                            Report an issue
                        </a>
                        </div>
                    </div> -->
                </div>
            </div>

            <!-- <div class="navbar-end">
            <div class="navbar-item">
                <div class="buttons">
                <a class="button is-primary">
                    <strong>Sign up</strong>
                </a>
                <a class="button is-light">
                    Log in
                </a>
                </div>
            </div>
            </div>
        </div> -->
        </nav>
    </div>
</template>

<script>
export default {
    data(){
        return{
            showNav:false,
        }
    }
}
</script>

<style lang="scss" scoped>

</style>