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
            <button class="button is-primary"><i class="far fa-thumbs-up"></i>Like</button>
        </div>
        
    </div>
</template>

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


     

</style>