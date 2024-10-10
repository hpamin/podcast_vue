<template>
    <div class="nav">

        <div class="navDetails">
            
            <div class="menuHam hide" @click="handelShowMenu">
                <i class="pi pi-align-justify" style="font-size: 1.5rem; cursor: pointer;"></i>
            </div>
    
            <!-- Slide Menu -->
            <SlideMenu :isShowedMenu="isShowedMenu" @closeMenu="handelShowMenu" />
            <div class="mmd hide" :class="{show: isShowedMenu}"> </div>
            <!-- ******* -->
    
            <div class="signUp">
                <router-link to="/sign_in" class="btn" id="login">
                    Login
                </router-link>
                <button class="btn" id="start">
                    Get Start!
                </button>
            </div>
    
            <div class="links">
                <a href="">Home</a>
                <a href="">About us</a>
                <a href="">category</a>
                <a href="">call us</a>
                <a href="">Suggestion</a>
            </div>
    
            <div class="logo">
                <p>HP<span>amin</span></p>
            </div>

        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import SlideMenu from './SlideMenu.vue';



    const isShowedMenu = ref(false)
    const handelShowMenu = () => {
        isShowedMenu.value = !isShowedMenu.value
        console.log(isShowedMenu.value);
    }
    


</script>

<style scoped>

    .nav{
        width: 100%;
        padding: 10px 0px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: fixed;
        top: 0;
        z-index: 10000;
        background-color: var(--third);
    }

    .navDetails{
        width: 90%;
        display: flex;
        margin: 0 auto;
    }

    .signUp{
        display: flex;
        justify-content: flex-start;
        gap: 15px;
        flex: 1;
    }
    #login{
        background-color: transparent; 
        color: var(--secondary); 
        font-size: 1.1rem;
    }
    #start{
        font-size: 1.1rem; 
        background: linear-gradient(180deg, #8E01ED, #A901F7, #D501FF); 
        color: white;
    }

    .links{
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        flex: 3;
    }
    .links a{
        font-size: 1.1rem;
    }
    .links a:hover{
        color: var(--primary);
    }

    .logo{
        display: flex;
        justify-content: center;
        align-items: center;
        flex: 1;
    }
    .logo p{
        color: var(--primary);
        font-weight: bold;
        font-size: 1.6rem;
    }
    .logo span{
        color: var(--secondary);
    }


    @media (max-width: 768px) {
        .nav{
            flex-direction: row-reverse;
        }
        .links{
            display: none;
        }   
        .signUp{
            display: none;
        }
        .logo{
            flex: 1;
            display: flex;
            justify-content: flex-start;
        }
        .logo p{
            font-size: 2rem !important;
        }
        .menuHam{
            flex: 1;
            display: flex;
            justify-content: flex-end;
        }
        .mmd{
            width: 100%;
            height: 100vh;
            background-color: rgb(0, 0, 0, 0.3);
            position: fixed;
            top: 0;
        }
    }
   
</style>