<template>
    <div class="servicesText">
        <p> on hold <span style="color: var(--primary);"> benefits </span> </p>
    </div>

    <div class="services">
        <div class="service" v-for="(service) in services" :key="service.id">

            <div>
                <i class="pi icon" :class="service.icon"></i>
            </div>
            <div class="text">
                <p class="title"> {{ service.title }} </p>
                <p class="caption"> {{service.caption}}</p>
            </div>


        </div>
    </div>
</template>

<script setup>

    const services = [
        {
            id: 0,
            icon: "pi-comments",
            title: "Lorem ipsum dolor",
            caption: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis nam ipsum aut modi assumenda doloribus sequi quaerat!",
        },
        {
            id: 2,
            icon: "pi-sitemap",
            title: "Lorem ipsum dolor",
            caption: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis nam ipsum aut modi assumenda consectetur adipisicing elit sequi quaerat!",
        },
        {
            id: 2,
            icon: "pi-pen-to-square",
            title: "Lorem ipsum dolor",
            caption: "Distinctio, voluptatibus dolorum cumque sed quia quos recusandae dolores, eveniet molestiae beatae ? ",
        },
        {
            id: 3,
            icon: "pi-bitcoin",
            title: "Lorem ipsum dolor",
            caption: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis nam ipsum aut modi assumenda doloribus sequi quaerat!",
        },
        {
            id: 4,
            icon: "pi-chart-line",
            title: "Lorem ipsum dolor",
            caption: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis nam ipsum aut modi assumenda doloribus sequi quaerat!",
        },
        {
            id: 5,
            icon: "pi-crown",
            title: "Lorem ipsum dolor",
            caption: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis nam ipsum aut modi assumenda doloribus sequi quaerat!",
        },
        {
            id: 6,
            icon: "pi-discord",
            title: "Lorem ipsum dolor",
            caption: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis nam ipsum aut modi assumenda doloribus sequi quaerat!",
        },
        {
            id: 7,
            icon: "pi-language",
            title: "Lorem ipsum dolor",
            caption: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis nam ipsum aut modi assumenda doloribus sequi quaerat!",
        },
    ]
</script >

<style scoped>
    .services{
        width: 90%;
        padding: 30px 0;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        gap: 40px;
        margin: 0 auto;
    }
    .servicesText{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 50px 0 15px 0;
    }
    .servicesText p{
        font-size: 2.5rem !important;
        text-transform: uppercase;
        font-weight: bold;
    }
    .service{
        width: 250px;
        height: 250px;
        background-color: var(--third);
        box-shadow: var(--shadow);
        border-radius: 5px;
        padding: 10px 15px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 30px;
    }
    .icon{
        font-size: 2rem;
        background-color: white;
        padding: 10px;
        border-radius: 15px;
        color: var(--primary);
    }
    .text{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 15px;
    }
    .title{
        font-size: 1.3rem;
        font-weight: bold;
    }
    .caption{
        font-size: 1rem;
        font-weight: 100;
        text-align: center;
    }


    @media (max-width: 640px) {
        .servicesText p {
            font-size: 2rem !important;
        }
        .service{
            width: 200px;
            height: 200px;
            gap: 7px;
        }
        .text{
            gap: 7px;
        }
        .title{
            font-size: 1rem;
        }
        .caption{
            font-size: 0.9rem;
        }
    }
</style>