import Image from 'next/image'
import React from 'react'

const Posts = () => {

    const posts = [
        {   id:"asdas231asda1233",
            title:"Estudando node js e next 14",
            content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, quia. Suscipit incidunt facilis consequatur sunt illo obcaecati, ad perspiciatis! Provident voluptatibus obcaecati quasi ipsa porro, optio accusantium officia dolore saepe. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa sunt temporibus quis, animi ratione earum. Dicta quod voluptatibus suscipit ea, voluptas ut cupiditate dolores ipsum adipisci vitae obcaecati cum? Tempora Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, quia. Suscipit incidunt facilis consequatur sunt illo obcaecati, ad perspiciatis! Provident voluptatibus obcaecati quasi ipsa porro, optio accusantium officia dolore saepe. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa sunt temporibus quis, animi ratione earum. Dicta quod voluptatibus suscipit ea, voluptas ut cupiditate dolores ipsum adipisci vitae obcaecati cum? Tempora Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, quia. Suscipit incidunt facilis consequatur sunt illo obcaecati, ad perspiciatis! Provident voluptatibus obcaecati quasi ipsa porro, optio accusantium officia dolore saepe. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa sunt temporibus quis, animi ratione earum. Dicta quod voluptatibus suscipit ea, voluptas ut cupiditate dolores ipsum adipisci vitae obcaecati cum? Tempora Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, quia. Suscipit incidunt facilis consequatur sunt illo obcaecati, ad perspiciatis! Provident voluptatibus obcaecati quasi ipsa porro, optio accusantium officia dolore saepe. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa sunt temporibus quis, animi ratione earum. Dicta quod voluptatibus suscipit ea, voluptas ut cupiditate dolores ipsum adipisci vitae obcaecati cum? Tempora Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, quia. Suscipit incidunt facilis consequatur sunt illo obcaecati, ad perspiciatis! Provident voluptatibus obcaecati quasi ipsa porro, optio accusantium officia dolore saepe. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa sunt temporibus quis, animi ratione earum. Dicta quod voluptatibus suscipit ea, voluptas ut cupiditate dolores ipsum adipisci vitae obcaecati cum? Tempora",
            date:"18/12/2023",
            user:"Arthur Theodoro"
        },
        {   id:"asdas231asda1234",
            title:"Estudando node js e next 14",
            content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, quia. Suscipit incidunt facilis consequatur sunt illo obcaecati, ad perspiciatis! Provident voluptatibus obcaecati quasi ipsa porro, optio accusantium officia dolore saepe. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa sunt temporibus quis, animi ratione earum. Dicta quod voluptatibus suscipit ea, voluptas ut cupiditate dolores ipsum adipisci vitae obcaecati cum? Tempora",
            date:"18/12/2023",
            user:"Arthur Theodoro"
        },
        {   id:"asdas231asda1235",
            title:"Estudando node js e next 14",
            content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, quia. Suscipit incidunt facilis consequatur sunt illo obcaecati, ad perspiciatis! Provident voluptatibus obcaecati quasi ipsa porro, optio accusantium officia dolore saepe. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa sunt temporibus quis, animi ratione earum. Dicta quod voluptatibus suscipit ea, voluptas ut cupiditate dolores ipsum adipisci vitae obcaecati cum? Tempora",
            date:"18/12/2023",
            user:"Arthur Theodoro"
        },
        {   id:"asdas231asda1236",
            title:"Estudando node js e next 14",
            content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, quia. Suscipit incidunt facilis consequatur sunt illo obcaecati, ad perspiciatis! Provident voluptatibus obcaecati quasi ipsa porro, optio accusantium officia dolore saepe. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa sunt temporibus quis, animi ratione earum. Dicta quod voluptatibus suscipit ea, voluptas ut cupiditate dolores ipsum adipisci vitae obcaecati cum? Tempora",
            date:"18/12/2023",
            user:"Arthur Theodoro"
        },
        {   id:"asdas231asda1237",
            title:"Estudando node js e next 14",
            content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, quia. Suscipit incidunt facilis consequatur sunt illo obcaecati, ad perspiciatis! Provident voluptatibus obcaecati quasi ipsa porro, optio accusantium officia dolore saepe. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa sunt temporibus quis, animi ratione earum. Dicta quod voluptatibus suscipit ea, voluptas ut cupiditate dolores ipsum adipisci vitae obcaecati cum? Tempora",
            date:"18/12/2023",
            user:"Arthur Theodoro"
        },
        {   id:"asdas231asda1238",
            title:"Estudando node js e next 14",
            content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, quia. Suscipit incidunt facilis consequatur sunt illo obcaecati, ad perspiciatis! Provident voluptatibus obcaecati quasi ipsa porro, optio accusantium officia dolore saepe. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa sunt temporibus quis, animi ratione earum. Dicta quod voluptatibus suscipit ea, voluptas ut cupiditate dolores ipsum adipisci vitae obcaecati cum? Tempora",
            date:"18/12/2023",
            user:"Arthur Theodoro"
        },
    ]

  return (
    <div className="flex flex-col items-center w-full h-auto p-20 gap-8">
        {posts.map((post) =>{
            const {id, title, content, date, user} = post;
            return(
                <>
                {/* Posts */}
        <div key={id} className="w-full h-auto p-6 flex gap-5 flex-col items-center text-white border border-green-haze-500 rounded-xl">
            <h1 className='text-2xl'>{title}</h1>
            <p>{content}</p>
        </div>
        {/* User info  / Post option Container*/}
        <div className="w-full flex flex-row items-center justify-between">
            {/* User Info */}
            <div className="w-auto flex flex-row items-center gap-5">
                <div className="w-12 h-12 rounded-full bg-green-haze-500"></div>
                <p className="text-white">{user} - {date}</p>
            </div>
            {/* Options */}
            <div className="flex flex-row items-center gap-3">
                <button className="transition-all ease-out delay-100 hover:scale-125"><Image src="/pencil.svg" alt='trash icon' width={20} height={20} /></button>
                <button className="transition-all ease-out delay-100 hover:scale-125"><Image src="/trash.svg" alt='trash icon' width={20} height={20} /></button>
            </div>
        </div>
                </>
            )
        })}
    </div>
  )
}

export default Posts