<template>
        <div class="slideMenu hide" :class="{showMenu: props.isShowedMenu, hideMenu: !props.isShowedMenu}">

            <div class="btnHide" @click="$emit('closeMenu')">
              <i class="pi pi-times" style="font-size: 1.5rem; cursor: pointer; color: black;"></i>
            </div>




            <div class="linksSlide">
                
                <div class="linkDetail">
                    <i class="pi pi-angle-left"></i>
                    <a href="">Home</a>
                </div>
                <div class="linkDetail">
                    <i class="pi pi-angle-left"></i>
                    <a href="">category</a>
                </div>
                <div class="linkDetail">
                    <i class="pi pi-angle-left"></i>
                    <a href="">about us</a>
                </div>
                <div class="linkDetail">
                    <i class="pi pi-angle-left"></i>
                    <a href="">call us</a>
                </div>
                <div class="linkDetail">
                    <i class="pi pi-angle-left"></i>
                    <a href="">Suggestion</a>
                </div>
                <div class="linkDetail">
                    <i class="pi pi-angle-left"></i>
                    <a href="">Products</a>
                </div>


                <div class="signUp">
                    
                    <div class="linkDetailSignIn">
                        <router-link to="/sign_up" class="btn" id="login">
                        <i class="pi pi-user-plus"></i>
                        </router-link>
                        <router-link to="/sign_in" class="btn" id="login">
                        <i class="pi pi-sign-in"></i>
                        </router-link>
                    </div>
                    
                </div>                
            </div>
            
        </div>
</template>
<script setup>

    const props = defineProps({
      isShowedMenu: Boolean,
    });


</script>
<style scoped>
     @media (max-width: 768px) {

        .slideMenu{
            width: 270px;
            height: 100vh;
            padding: 15px 20px;
            background-color: var(--third);
            position: fixed;
            top: 0;
            right: -350px;
            transition: 0.5ms;
            display: flex !important; 
            flex-direction: column;
            z-index: 1000;

        }
        
        .btnHide{
            width: 100%;
            border: none;
            display: flex;
            align-items: center;
            justify-content: flex-end;
            transition: 0.5s;
        }
        .showMenu{
            right: 0px;
            transition: 0.5s;
        }
        .hideMenu{
            right: -350px;
            transition: 0.5s;
        }
        .btnHide i:hover {
            opacity: 0.7;
        }


        .linksSlide{
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            padding: 50px 0;
            gap: 50px;
            align-items: flex-end;
        }
        .linkDetail{
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
        .linkDetail a{
            font-size: 1rem;
        }
        .linkDetail:hover{
            opacity: 0.7;
        }
        .linkDetailSignIn{
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: flex-end;
            gap: 15px;
        }

        .signUp{
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
        }

    }
</style>