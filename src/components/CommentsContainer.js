import React from 'react'


const commentsData =[
    {
      name:"@spillthebuzz",
      text:"when can we expect EP-04 ?? you made me fall in love with JavaScript, Amazing content",
      reply:[
        {
          name: "Samat chavan",
          text: "After the hype of linkedin i came here and believe me it was worth it all...the way of your presentation and the feeling that  instead of a teacher a friend is teaching,makes the videos more and more interesting.thanks a lot for sharing your precious knowledge with us and that too for free of cost.",
          reply: [],
        },
      ]
      
    },
    {
      name:"@DebojyotiMandal",
      text:"when can we expect EP-04 ?? you made me fall in love with JavaScript, 🚀🚀🚀♥Amazing content",
      reply:[
        {
          name: "Samat chavan",
          text: "hh my God Man!! 🔥 Heavy stuffs. I literally had goosebumps when you showed practical example of 📚 Thank you so much for these awesome contents. 🙏🏼",
          reply: [],
        },
        {
          name: "Samat chavan",
          text: "namaste rract project very⭐🔴🚀♥ good",
          reply: [],
        },
      ]
    },
    {
      name:"@rahulchavan",
      text:"You kept the old cooking style alive, fan of the your cooking brother एकदा तरी येतलाय जेवुक😁😁",
      reply:  [
        {
          name: "Samat chavan",
          text: "कोणी कोणी शेवट पर्यंत व्हिडिओ बघितला? Also please let us know how do you liked it..❤️🙂 See you until next weekend 😊🙏🌴",
          reply: [],
        },
        {
          name: "Samat chavan",
          text: "You kept the old cooking style alive, fan of the your cooking brother एकदा तरी येतलाय जेवुक😁😁",
          reply: [],
        },
      ]
    },
    {
      name:"@yogeshsabankar",
      text:"when can we expect EP-04 ?? you made me fall in love with JavaScript, Amazing content",
      reply: [
        {
          name: "Samat chavan",
          text: "Amo suas receitas,e seu estilo de cozinhar tbm!!❤❤😊😊",
          reply: [],
        },
        {
          name: "Kishor chavan",
          text: "Pooja tu kharach all rounder aahes.Tuja recipe khup chan astat.👌👌❤️",
          reply: [],
        },
        {
          name: "Harshdeep chavan",
          text: "namaste rract project very good",
          reply: [],
        },
      ],
    },
    {
      name:"@spillthebuzz",
      text:"Literally i was studying from 2 hour and feeling so ❤❤❤ tired then accidentally come on this playlist ...❤❤❤ Feeling like someone is singing for me and literally a different vibe comes ❤❤❤    ",
      reply:[
        {
          name: "Samat chavan",
          text: "Your voice is totally heart touching ❤😊",
          reply: [],
        },
      ]
      
    },
    {
      name:"@DebojyotiMandal",
      text:"when can we expect EP-04 ?? you made me fall in love with JavaScript, Amazing content",
      reply:[
        {
          name: "Samat chavan",
          text: "namaste rract project very good",
          reply: [],
        },
        {
          name: "Samat chavan",
          text: "Aaaaahhhhhhhh kya voice hai. Yaar 🔥🔥🔥...,...❤️❤️❤️so sweet", 
          reply: [],
        },
      ]
    },
    {
      name:"@rahulchavan",
      text:"Magical voice 💫💫💫❣️",
      reply:  [
        {
          name: "Samat chavan",
          text: "namaste rract project very good",
          reply: [],
        },
        {
          name: "Samat chavan",
          text: "What a magical and fantastic voice🥳🤩🤩🥰🥰😍😍💯💯",
          reply: [],
        },
      ]
    },
    {
      name:"@yogeshsabankar",
      text:"when can we expect EP-04 ?? you made me fall in love with JavaScript, Amazing content",
      reply: [
        {
          name: "Samat chavan",
          text: "What a magical Superb voice… I m Artist when I m working alwz listen ur songs … it’s gave me energy to do my work ✍",
          reply: [],
        },
        {
          name: "Kishor chavan",
          text: "What a magical and fantastic voice🥳🤩🤩🥰🥰😍😍💯💯",
          reply: [],
        },
        {
          name: "Harshdeep chavan",
          text: "namaste rract project very good",
          reply: [],
        },
      ],
    }
  ]


const Comment = ({data}) =>{
    const {name, text, reply} = data;
     return(
     <div className='flex my-4'>
        <img className='h-8' alt='user' src='https://cdn-icons-png.flaticon.com/512/149/149071.png' />
    <div className='px-2'>
        <p className='font-bold'>{name}</p>
        <p>{text}</p>
    </div>
    </div>)

};


const CommentsList = ({comments}) =>{
    return comments.map((comment, index) => 
    (
    <div key = {index} >
        <Comment data ={comment}/>
        <div className='pl-5 ml-5'>
            <CommentsList comments={comment.reply}/>
            
        </div>
    </div>
        
    ));
}


const CommentsContainer = () => {
  return (
    <div className='p-4'>
        <h1 className='font-bold'>Comments : </h1>
        <CommentsList comments={commentsData}/>
        
    </div>
  )
}

export default CommentsContainer