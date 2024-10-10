<template>
    <div class="plans">
        <div class="planDetails">
            <div class="planDetailsText">
                <p id="pricingPlan">choose your <span>pricing plan</span> <br> or custom</p>

                <div class="time">
                    <p>save up to 30%</p>
                    
                    <div class="timeBtns">
                        <button class="btn timeBtn" :class="{active: selectedButton === 'month'}" @click="buttonsOption('month')"> Month </button>
                        <button class="btn timeBtn" :class="{active: selectedButton === 'year'}" @click="buttonsOption('year')"> Year </button>
                    </div>
                </div>
            </div>
            
            <div class="options">
                <div class="option" v-for="(plan) in adjustedPrice" :key="plan.id" :class="{scale: plan.type === 'VIP' }">
                    <div class="name" :style="{backgroundColor: plan.color}">
                        <p>{{ plan.type }}</p>
                    </div>
    
                    <div class="price">
                        <span id="dollor" :style="{color: plan.color}"> $ </span>
                        <span> {{ plan.price }} </span>
                        <p> {{ plan.price_caption }} </p>
                    </div>
    
                    <div class="caption">
                        <h5> {{ plan.title }} </h5>
                        <p> {{ plan.caption }} </p>
                    </div>
    
                    <ul class="planOptions" v-for="(item) in plan.plan_options" :key="item.id">
                        <li>{{ item.details }}</li>
                    </ul>
                </div>
            </div>

        </div>
    </div>
</template>
<script setup>
import { computed, ref } from 'vue';


    const plans = [
        {
            id: 0,
            type: "Free",
            price: 0,
            price_caption: "free for personal account",
            title: 'For personal',    
            caption: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum iusto cum nisi error at eius! Illo neque eveniet unde nulla id officiis!',
            color: '#FE00A9',
            plan_options: [
                {
                    id: 0,
                    details: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.'
                },
                {
                    id: 1,
                    details: 'Lorem, ipsum dolor sit amet consectetur adipisicing.'
                },
                {
                    id: 2,
                    details: 'Lorem, ipsum dolor sit amet consectetur adipisicing.'
                },
                {
                    id: 3,
                    details: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.'
                },
            ], 
        },
        {
            id: 1,
            type: "VIP",
            price: 19.99,
            price_caption: "/month (build annually)",
            title: 'For Bussiness',    
            caption: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum iusto cum nisi error at eius! Illo neque eveniet unde nulla id officiis!',
            color: '#BC02EC',
            plan_options: [
                {
                    id: 0,
                    details: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.'
                },
                {
                    id: 1,
                    details: 'Lorem, ipsum dolor sit amet consectetur adipisicing.'
                },
                {
                    id: 2,
                    details: 'Lorem, ipsum dolor sit amet consectetur adipisicing.'
                },
                {
                    id: 3,
                    details: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.'
                },
            ], 
        },
        {
            id: 0,
            type: "silver",
            price: 8.99,
            price_caption: "/month (build annually)",
            title: 'For small businesses',    
            caption: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum iusto cum nisi error at eius! Illo neque eveniet unde nulla id officiis!',
            color: '#9800EA',
            plan_options: [
                {
                    id: 0,
                    details: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.'
                },
                {
                    id: 1,
                    details: 'Lorem, ipsum dolor sit amet consectetur adipisicing.'
                },
                {
                    id: 2,
                    details: 'Lorem, ipsum dolor sit amet consectetur adipisicing.'
                },
                {
                    id: 3,
                    details: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.'
                },
            ], 
        },
    ]

    const selectedButton = ref("month")

    const buttonsOption = (value) => {
        selectedButton.value = value
        console.log('Selected:', value);
    }

    const adjustedPrice = computed(() => {
        return plans.map((item) => {
            let newPrice_caption = item.price_caption
            let newPrice = item.price

            if (selectedButton.value === 'year' && item.price > 0) {
                newPrice = item.price * 11
                newPrice_caption = "/year (The best price)"
            }
            return{
                ...item,
                price: newPrice,
                price_caption: newPrice_caption
            } 
        })
    })
</script>
<style scoped>
    .plans{
        width: 100%;
        background-color: var(--secondary);
        color: white;
        padding: 50px 0 ;
        margin: 0 auto;
    }
    .planDetails{
        width: 90%;
        height: 100%;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        gap: 40px;
        box-shadow: var(--shadow);
    }

    .planDetailsText{
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    #pricingPlan{
        font-size: 3.5rem;
        font-weight: bold;
    }
    #pricingPlan span{
        color: var(--pink);
    }
    .time{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 15px;
    }
    .timeBtns{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 15px;
    }
    .timeBtn{
        border-radius: 50px;
        padding: 12px 20px ;
        background-color: transparent;
    }
    .btn:hover {
      color: #FE00A9 !important;
    }
    .btn.active {
      background-color: #FE00A9;
    }




    .options{
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .option{
        width: 400px;
        height: 500px;
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        align-items: flex-start;
        background-color: #1c1c1c;
        padding: 25px 20px;
        border-radius: 8px;
    }
    .scale{
        transform: scale(1.1);
    }

    .name{
        background-color: var(--pink);
        padding: 5px 15px;
        border-radius: 50px;
    }
    .name p{
        font-size: 1.2rem;
        font-weight: bold;
    }
    .price{
        width: 100%;
        display: flex;
        align-items: baseline;
        gap: 5px;
    }
    #dollor{
        font-size: 1.2rem;
        align-self: flex-start;
        margin-top: 20px;
        color: var(--pink);
        font-style: normal;
    }
    .price span{
        font-size: 4.5rem;
        font-style: italic;
    }

    .caption{
        width: 100%;
        background-color: #292929;
        padding: 15px;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
    .caption h5{
        font-weight: bold;
        font-size: 1.2rem;
    }
    .caption p{
        font-weight: 100;
    }
    
    .planOptions{
        width: 100%;
        list-style-type: circle;
        display: flex;
        align-items: flex-start;
        justify-content: center;
        flex-direction: column;
        gap: 20px;
        padding: 0 15px;
    }
    .planOptions li{
        font-size: 0.9rem;
        font-weight: 100;
    }




    @media (max-width: 1300px) {
        .option{
            width: 350px;
        }
    }

    @media (max-width: 1280px) {
        .option{
            width: 290px;
        }
        .price span{
            font-size: 3rem;
        }
        .caption{
            padding: 10px;
        }
        .caption h5{
            font-size: 1rem;
        }
        .caption p{
            font-size: 0.9rem;
        }
        .planOptions li{
            font-size: 0.8rem;
        }
    }

    @media (max-width:1024px) {
        #pricingPlan{
            font-size: 3rem;
        }
        .options{
            flex-direction: column;
            gap: 50px;
        }
        .option{
            transform: scale(1);
        }
    }

    @media (max-width:850px) {
        #pricingPlan{
            font-size: 2.5rem;
        }
    }
    @media (max-width: 768px) {
        #pricingPlan{
            font-size: 2em;
        }
        .planDetailsText{
            flex-direction: column;
            gap: 20px;
        }
        .time{
            align-self: flex-end;
        }
        .timeBtn{
            font-size: 0.8rem;
        }
    }

</style>