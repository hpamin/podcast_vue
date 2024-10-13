<template>
    <div class="digitally">
        <div class="digitallyDetails">
            <div class="digitallyImg">
                <img :src="img" alt="digitally image">
            </div>
    
            <div class="details">
                <p class="title">We'll help <span style="color: var(--pink);">digitally</span> transform your business.</p>
                <p class="caption">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, similique architecto laudantium expedita, explicabo neque vero autem obcaecati perferendis quaerat libero nulla quod ea est odit facilis iure, ipsum hic.
                Repellendus doloribus aperiam harum debitis. Est possimus tenetur libero enim quisquam id architecto laboriosam, deleniti repellat at accusantium debitis numquam suscipit, ut recusandae sit? Assumenda rerum voluptatum hic quo ut.
                Voluptatum officia totam incidunt eius velit, magni, ad quisquam sunt maiores accusamus illo cum quis at rem dolores exercitationem tempora a numquam reiciendis est ducimus dolorem! Quas, veritatis ut? Maiores!</p>
                <button class="btn" id="started" style="background-color: var(--pink);">
                    Get started for now
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
    import img from '@/assets/image/digitally.png'
</script>

<style scoped>
    .digitally{
        width: 100%;
        height: 70vh;
        background-color: var(--secondary);
    }
    .digitallyDetails{
        width: 90%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row-reverse;
        margin: 0 auto;
    }

    .digitallyImg{
        flex: 1;
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }
    .digitallyImg img{
        width: 500px;
        height: 100%; 
        object-fit: contain;
    }

    .details{
        flex: 1.3;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 25px;
    }
    .title{
        font-size: 3rem;
        font-weight: bold;
        color: white;
    }
    .caption{
        font-size: 1rem;
        color: white;
        margin-bottom: 30px;
    }
    #started{
        font-size: 1.2rem;
        padding: 15px 25px;
        border-radius: 50px;
    }
    #started:hover{
        color: var(--pink);
    }



    @media (max-width: 1280px){
        .title{
            font-size: 2.5rem;
        }
    }

    @media (max-width: 1024px){
        .title{
            font-size: 2.2rem;
        }
        .details{
            gap: 5px;
        }
        .caption{
            margin: 0 0 5px 0;
        }
        .digitallyImg img{
            width: 370px;
        }
    }

    @media (max-width: 768px){
        .digitally{
            height: fit-content;
        }
        .digitallyDetails{
            flex-direction: column;
            padding: 15px 0;
        }
        .details{
            justify-content: center;
            align-items: center;
        }
        .caption{
            text-align: justify;
        }
    }

    @media (max-width: 640px){
        .caption{
            font-size: 0.9rem;
        }
        .btn{
            font-size: 0.8rem !important;
        }
        .title{
            font-size: 2rem;
        }
    }

    @media (max-width: 370px) {
        .digitallyImg img{
            width: 100%;
        }
    }
</style>