<template>
    <div class="footer">
        <div class="column is-two-thirds-desktop is-offset-one-fifth">
            <hr>
                <ul class="footer__list">
                    <li class="footer__item">
                        <a href="https://github.com/junjun0103" target="_blank" class="footer__link">
                            <span class="footer__link__icons"><i class="fab fa-github "></i></span>github
                        </a>
                    </li>
                    <li class="footer__item">
                        <a href="https://www.linkedin.com/in/jun-lee-19a7231a7/" target="_blank" class="footer__link">
                            <span class="footer__link__icons"><i class="fab fa-linkedin"></i></span>Linkedin
                        </a>
                    </li>
                </ul>
            <hr>
            <button class="button is-primary" :class="{'checked':like_check}" @click="like_clikced"><i class="far fa-thumbs-up"></i>Like({{like_count}})</button>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            like_count: 0,
            like_check: this.$cookies.get('like_status'),
        }
    },
    methods: {
        like_clikced(){
            if(this.$cookies.get('like_status')=='true'){
            this.like_check=false;
            this.like_count--;
            this.$cookies.set('like_status',this.like_check);
            this.$http.post('https://junlee-b9944.firebaseio.com/data.json', this.like_count).then(response=>{
                    //console.log(response);
                }, error=>{
                    //console.log(error);
                });
            }else{
                this.like_check=true;
                this.$cookies.set('like_status',this.like_check)
                this.like_count++;
                this.$http.post('https://junlee-b9944.firebaseio.com/data.json', this.like_count).then(response=>{
                    //console.log(response);
                }, error=>{
                    //console.log(error);
                });
            }
        }
    },
    created(){
        this.$http.get('https://junlee-b9944.firebaseio.com/data.json').then(response=>{
            //console.log(response);
            return response.json();
        }).
        then(data=>{
            for(let key in data){
                this.like_count=data[key];
            }
        });
    }
}
</script>

<style scoped lang="scss"> 
.footer{
    height: 330px;
    background-color: var(--color-grery-2);
    text-align: center;

    &__list{
        list-style: none;
    }

    &__item{
        display: inline-block;

        &:not(:last-child){
        margin-right: 5rem;
    }
    }
    &__link{
        &:link,
        &:visited{
            color: var(--color-grery-1);
            text-decoration: none;
            text-transform: uppercase;
            display: inline-block;
            transition: all .2s;
        }
        &:hover,
        &:active{
            color: var(--color-yellow-2);
            box-shadow: 0 1rem 2rem rgba(var(--color-grery-1), .4);
            transform: rotate(1deg) scale(1.1);
        }
        &__icons{
            font-size: 2rem;
            color: white;
            margin-right: .7rem;
        }
    }
}
.checked{
    background-color: var(--color-green-2)!important;
}
</style>