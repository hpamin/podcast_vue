<template>
    <div class="signIn">
        <div class="signInDetails">
            <div class="description">
                <p> welcome back </p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <form>
                <div class="password-input">
                    <input type="email" name="email" placeholder="Email" required="">
                </div>

                <div class="password-input">
                    <input
                      :type="isShowedPassword ? 'text' : 'password'"
                      class="input"
                      name="pswd"
                      placeholder="Password"
                      required
                    />
                    <i
                      :class="isShowedPassword ? 'pi pi-eye-slash' : 'pi pi-eye'"
                      @click="togglePassword"
                      class="toggle-eye"
                    ></i>
                </div>
				<button class="btn signInBtn">Login</button>
			</form>
            
            <div class="signUp">
                <p> Don't have account?<router-link to="/sign_up"> Sign Up </router-link>    
                </p>
            </div>

            <div class="socialMedia">
                <div class="socialText">
                    <div class="line" />
                    <p>Join with social media</p>
                    <div class="line" />
    
                </div>

                <div class="media-icons">
                  <a href="#"><i class="pi pi-facebook"></i></a>
                  <a href="#"><i class="pi pi-google"></i></a>
                  <a href="#"><i class="pi pi-linkedin"></i></a>
                </div>
            </div>
            
        </div>
        <div class="swiperImg">
            <swiper
              :slides-per-view="3"
              :space-between="50"
            >
              <swiper-slide class="slideImg" v-for="(data) in Datas" :key="data.id">
                <img :src="data.img" alt="sign in image" id="img">
              </swiper-slide>
              ...
            </swiper>
        </div>
    </div>
</template>
<script setup>

    import { Swiper, SwiperSlide } from 'swiper/vue';
    import 'swiper/css';
    import img from "@/assets/image/Podcast.jpeg";
    import { ref } from 'vue';

    const Datas = [
        {
            id: 0,
            img: img,
        },
        {
            id: 1,
            img: img,
        },
        {
            id: 2,
            img: img,
        }
    ]


    const isShowedPassword = ref(false)

    const togglePassword = () => {
        isShowedPassword.value = !isShowedPassword.value
    } 



</script>
<style scoped>
    .signIn{
        width: 100%;
        height: 100vh;
        display: flex; 
        flex-direction: row-reverse;
        background-color: var(--third)
    }
    .signInDetails{
        width: 50%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 20px
    }
    .description{
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 10px;
        padding: 0 0 20px 0;
    }
    .description p:nth-child(1){
        font-size: 3rem;
        font-weight: bold;
        text-transform: capitalize;
        text-align: center
    }
    .description p:nth-child(2){
        font-size: 1rem;
        font-weight: 100;
    }
    .signInDetails form{
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 20px;
    }
    .signInBtn{
        padding: 12px 110px;
        border-radius: 50px ; 
        font-size: 1.1rem
    }
    .signUp{
        padding: 10px 0 20px 0;
    }
    .signUp p{
        font-size: 0.8rem;
    }
    .signUp p a{
        color: var(--primary);
    }
    /* input{
        width: 350px;
    } */



    .password-input {
        position: relative;
        width: 100%;
        max-width: 400px;
    }
    input {
        width: 100%;
        font-size: 16px;
        border: none;
        border-radius: 15px;
        outline: none;
        padding: 15px 20px;
        padding-right: 40px;
        box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
    }
    .toggle-eye {
        position: absolute;
        top: 50%;
        right: 10px;
        transform: translateY(-50%);
        cursor: pointer;
        font-size: 18px;
        color: #999;
    }
    .toggle-eye:hover {
        color: #333;
    }


    /* socialMedia */
    .socialMedia{
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 15px;
    }
    .socialText{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .socialText p{
        font-size: 0.8rem;
        text-wrap: nowrap;
        font-weight: 500;
        padding: 0 10px;
    }
    .line{
        width: 50px;
        height: 1px;
        border-radius: 50px;
        background-color: gray;
    }
    .media-icons{
        width: 90%;
        display: flex;
        margin: 0 auto;
        align-items: center;
        justify-content: center;
        gap: 20px;
    }
    .media-icons a{
      height: 50px;
      width: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      text-align: center;
      line-height: 40px;
      color: #fff;
      font-size: 17px;
      text-decoration: none;
      transition: all 0.4s ease;
    }
    .media-icons a i{
        font-size: 1.5rem
    }
    .media-icons a:nth-child(1){
      background: #4267B2;
    }
    .media-icons a:nth-child(1):hover{
      color: #4267B2;
      background: #fff;
    }
    .media-icons a:nth-child(2){
      background: #E1306C;
    }
    .media-icons a:nth-child(2):hover{
      color: #E1306C;
      background: #fff;
    }
    .media-icons a:nth-child(3){
      background: #0077B5;
    }
    .media-icons a:nth-child(3):hover{
      color: #0077B5;
      background: #fff;
    }



    .swiperImg{
        width: 50%;
    }
    .slideImg{
        width: 100% !important;
        height: 100vh;
    }
    #img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }




    @media (max-width: 768px) {
        .signInDetails{
            width: 100%;
        }
        .swiperImg{
            display: none;
        }
    }

    @media (max-width: 640px) {

        .description p:nth-child(1){
            font-size: 2.5rem;
        }
        .description p:nth-child(2){
            font-size: 0.9rem;
        }
        .signInBtn{
            font-size: 1rem;
        }
        
    }

    @media (max-width: 320px) {
        
        input{
            width: 270px;
        }
        .description p:nth-child(1){
            font-size: 2rem;
        }
        .description p:nth-child(2){
            font-size: 0.7rem;
        }
        
    }



    
</style>