<template>
    <div class="projects">
        <h1 class="heading-primary">
            <span class="heading-primary--main">Projects</span>
            <span class="heading-primary--sub">vue.js javascript css scss php mysql</span>
            <hr class="my-hr-style">
        </h1>
        <div class="columns is-centered">
            <div class="column is-one-quarter-desktop is-one-third-tablet">
               <div class="box" @click=clicked(1)>
                    test
                </div>
            </div>
            <div class="column is-one-quarter-desktop is-one-third-tablet">
               <div class="box">
                    test
                </div>
            </div>
        </div>
        
    </div>
</template>

<script>
export default {
    data() {
        return {
            test:''
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
}

</style>