<template>
    <div class="blogs">
        <div class="blogsText">
            <p> Our Blogs </p>
            <h5> The most important and hottest news! </h5>
        </div>

        <div class="blogPosts">

            <div class="post" v-for="blog in blogs" :key="blog.id">

                <div class="postImg">
                    <img :src="blog.img">
                </div>
                <div class="text">
                    <h3 class="title"> {{blog.title}} </h3>
                    <p class="caption">{{blog.caption}}</p>
                </div>

            </div>
            
        </div>

    </div>
</template>

<script setup>
    
    const blogs = [
        {
            id: 0,
            img: "https://fahar.ir/wp-content/uploads/2021/05/what-is-padcast-6.jpg",
            title: "Lorem ipsum dolor",
            caption: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse mollitia magni, exercitationem laborum eaque facilis sequi id praesentium cum quia harum, repellendus perferendis ipsum nesciunt. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda praesentium enim eum, labore pariatur vel nisi.",
        },
        {
            id: 1,
            img: "https://fahar.ir/wp-content/uploads/2021/05/what-is-padcast-6.jpg",
            title: "Lorem ipsum dolor",
            caption: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse mollitia magni, exercitationem laborum eaque facilis sequi id praesentium cum quia harum, repellendus perferendis ipsum nesciunt. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda praesentium enim eum, labore pariatur vel nisi.",
        },
        {
            id: 2,
            img: "https://fahar.ir/wp-content/uploads/2021/05/what-is-padcast-6.jpg",
            title: "Lorem ipsum dolor",
            caption: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse mollitia magni, exercitationem laborum eaque facilis sequi id praesentium cum quia harum, repellendus perferendis ipsum nesciunt.",
        },
        {
            id: 3,
            img: "https://fahar.ir/wp-content/uploads/2021/05/what-is-padcast-6.jpg",
            title: "Lorem ipsum dolor",
            caption: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse mollitia magni, exercitationem laborum eaque facilis sequi id praesentium cum quia harum, repellendus perferendis ipsum nesciunt.",
        },
    ]

</script>

<style scoped>
    .blogs{
        width: 90%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        padding: 30px 0;
        margin: 0 auto;
    }
    .blogsText{
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: flex-start;
        flex-direction: column;
        padding: 15px 0;
        margin-bottom: 10px;
    }
    .blogsText p{
        font-size: 1.9rem;
        font-weight: bold;
    }
    .blogsText h5{
        font-size: 1.2rem;
        color: gray;
    }

    .blogPosts{
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        gap: 10px;
    }

    .post{
        width: 320px;
        height: 450px;
        box-shadow: var(--shadow);
        background-color: var(--third);
        border-radius: 12px;
        cursor: pointer;
    }
    .postImg{
        width: 100%;
    }
    .postImg img{
        width: 100%;
        object-fit: contain;
        border-top-left-radius: 12px;
        border-top-right-radius: 12px;
    }
    .text{
        width: 100%;
        padding: 5px 10px;
        display: flex;
        justify-content: center;
        flex-direction: column;
        gap: 10px;
    }
    .title{
        font-size: 1.3rem;
        font-weight: bold;
    }
    .caption{
        text-align: justify;
    }

    @media (max-width: 768px) {
        .blogPosts{
            justify-content: center;
        }
        .post{
            width: 280px;
            height: 420px;
        }
        .title{
            font-size: 1.2rem;
        }
        .caption{
            font-size: 0.9rem;
        }
        
    }
</style>