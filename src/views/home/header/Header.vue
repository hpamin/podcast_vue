<template>
    <Nav />
    <header class="header">
        <div class="mmd">
            <div class="text">
                <p class="title">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error dolores enim.</p>
                <p class="caption">vitae sit reiciendis facere voluptatem maiores non deleniti nobis. Quibusdam!</p>
    
                <div class="btnsText">
                    <button class="btn" style="font-size: 1.1rem; padding: 12px 30px;">
                        get start!
                    </button>
                    <button class="btn" id="explore" style="font-size: 1.1rem; padding: 12px 30px;">
                        Explore Demo
                    </button>
                </div>
    
            </div>
            <div class="headerImg">
                <img :src="img" alt="header">
            </div>
        </div>
    </header>
    
</template>

<script setup>
import Nav from './Nav.vue';
import img from '@/assets/image/header.png'

</script>
<style scoped>
    .header{
        width: 100%;
        height: 90vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .mmd{
        width: 90%;
        height: 90%;
        padding: 40px 0 0 0;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: auto;
    }

    .headerDetails{
        width: 90%;
        /* height: 100%; */
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .text{
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 20px;
    }
    .title{
        font-size: 4rem;
        font-weight: bold;
        color: var(--secondary);
    }
    .caption{
        font-size: 2rem;
        font-weight: 100;
    }
    .btnsText{
        display: flex;
        align-items: center;
        gap: 30px;
    }
    #explore{
        background-color: white;
        color: var(--primary);
    }
    #explore:hover{
        background-color: var(--primary) !important;
        color: white;
    }

    .headerImg{
        flex: 1;
    }
    .headerImg img{
        width: 100%;
        height: 100%;
        object-fit: contain;
    }



    @media (max-width: 1280px) {
        .title{
            font-size: 3.5rem;
        }
        .caption{
            font-size: 1.5rem;
        }
    }

    @media (max-width: 1024px) {
        .title{
            font-size: 3rem;
        }
        .caption{
            font-size: 1.2rem;
        }
    }

    @media (max-width: 768px) {
        .title{
            font-size: 2rem;
        }
        .caption{
            font-size: 1rem;
        }

        .header{
            /* flex-direction: column; */
        }
        .btn{
            font-size: 0.8rem !important;
        }
    }

    @media (max-width: 640px) {
        .mmd{
            /* flex-direction: column; */
            flex-direction: column-reverse;
        }
        .headerImg{
            flex: 1;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .headerImg img{
            width: 370px;
        }
        .text{
            flex: 1;
            margin-top: 15px;
        }
        .title{
            font-size: 1.5rem;
            text-align: center;
        }
        .caption{
            font-size: 1rem;
            text-align: center;
        }
        .btnsText{
            align-items: center;
            justify-content: center;
        }
    }

    @media (max-width: 458px) {
        .headerImg{
            padding: 30px 0 0 0;
        }
        .headerImg img{
            width: 320px;
        }
        .text{
            gap: 7px;
        }
    }

   
</style>