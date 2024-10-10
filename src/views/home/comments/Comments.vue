<template>
    
    <div class="reviews">

        <!-- wave -->
        <div class="waveWrapper waveAnimation">
            <div class="bgTop">
              <div class="wave waveTop" style="background-image: url('http://front-end-noobs.com/jecko/img/wave-top.png')"></div>
            </div>
            <div class="bgMiddle">
              <div class="wave waveMiddle" style="background-image: url('http://front-end-noobs.com/jecko/img/wave-mid.png')"></div>
            </div>
            <div class="bgBottom">
              <div class="wave waveBottom" style="background-image: url('http://front-end-noobs.com/jecko/img/wave-bot.png')"></div>
            </div>
        </div>

        <div class="comments">
    
            <div class="commentsText">
                <h6>reviews</h6>
                <p>what our clients say</p>
            </div>
            <div class="comment">
                <Swiper
                  :slides-per-view="3"
                  :space-between="50"
                  class="swiper"
                >
                    <swiper-slide class="post" v-for="(comment) in comments" :key="comment.id">
                        <div class="star">
                            <span v-for="(number, index) in 5" :key="index">
                                <i :class="number <= stars ? 'pi pi-star-fill' : 'pi pi-star'"></i>
                            </span>
                        </div> 
                        <div class="explanation">
                            <p> {{ comment.body }}</p>
                        </div>
                        <div class="userInfo">
                            <div class="profile">
                                <img :src="ProfileUrl" alt="Random Image">
                            </div>
                            <div class="userDetails">
                                <p id="name">{{ comment.name }}</p>
                                <p id="email"> {{ comment.email }} </p>
                            </div>
                        </div>
                    </swiper-slide>
                </Swiper>
            </div>
        </div>
    </div>
</template>

<script setup>

    import {Swiper, SwiperSlide } from 'swiper/vue';
    import 'swiper/css';
    import './wave.css'
    import { onMounted, ref } from 'vue';
    import axios from 'axios';

    // Api for comments
    const comments = ref([])
    const fetchData = async () => {
        try {
            const response = await axios.get("https://jsonplaceholder.typicode.com/comments?_limit=10");
            comments.value = response.data;

        } catch (error) {
            console.log("Error fetching comments:", error);
        }
    }
    onMounted(() => {
        fetchData();
    });

     // Rating systems
    const stars = ref(Math.floor(Math.random() * 5) + 1)

    // img pic random
    const randomNum = ref(Math.floor(Math.random() * 100))
    const ProfileUrl = ref(`https://picsum.photos/300/300?random=${randomNum}`)


</script>
<style scoped>

    .reviews{
        width: 100%;
        position: relative;
        overflow: hidden;
    }

    .comments{
        width: 90%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        margin: 0 auto;
        padding: 50px 0;
        position: relative;
        overflow: hidden;
    }

    .commentsText{
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .commentsText h6{
        font-size: 2rem;
        font-weight: bold;
        text-transform: uppercase;
    }
    .commentsText p{
        font-size: 4rem;
        font-weight: bold;
        text-transform: capitalize;
    }

    .comment{
        width: 100%;
        padding: 10px 0px;
    }
    .swiper{
        padding: 50px 0 80px 0;
    }
    .post{
        width: 350px !important;
        height: 250px;
        background-color: var(--third);
        border-radius: 12px;
        box-shadow: var(--shadow);
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
        padding: 15px;
    }
    .star{
        width: 100%;
        display: flex;
        gap: 15px;
    }

    .explanation p{
        font-size: 1.1rem;
    }

    .userInfo{
        width: 100%;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: 10px;
    }
    .profile{
        width: 50px;
        height: 50px;
    }
    .profile img{
        width: 100%;
        height: 100%;
        border-radius: 50px;
        border: 2px solid white;
    }

    .userDetails{
        display: flex;
        flex-direction: column;
        gap: 5px;
    }
    #name{
        font-size: 0.9rem;
        text-transform: capitalize;
    }
    #email{
        font-size: 0.7rem;
    }



    @media (max-width: 1024px) {
        .post{
            width: 320px !important;
            height: 240px;
        }
        .explanation p{
            font-size: 1rem;
        }
    }

    @media (max-width: 768px) {
        .commentsText p{
            font-size: 3rem;
        }
        .commentsText h6{
            font-size: 1.5rem;
        }
    }
    @media (max-width: 768px) {
        .swiper-slide{
            margin-right: 30px !important;
        }
        .swiper{
            padding: 25px 0 65px 0;
        }
        .post[data-v-633796e8] {
            width: 280px !important;
            height: 200px;
        }
        .commentsText p{
            font-size: 2rem;
        }
        .commentsText h6{
            font-size: 1rem;
        }
        #name{
            font-size: 0.8rem;
        }
        #email{
            font-size: 0.6rem;
        }
        .explanation p{
            font-size: 0.8rem;
        }
    }
</style>