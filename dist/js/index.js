let reviews = [

    { 
        id: "x",
        image:"./images/pic-1.png",
        name: "Anthony Presley",
        job: "Full Stack developer",
        info: "This plaform has surely revolutionalise the way online banking is perceived worldwide the" + 
        "excelent services they provide is sure to leave anyone begging for more, " +
        " am going to leave a 5star rating because theres no way i can leave 10!"
    },
    { 
        id: 1,
        image:"./images/pic-2.png",
        name: "Cynthia Bellingham",
        job: "UI Designer",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente vel " +
        "at rem quam cumque vitae veritatis repellat quasi soluta, mollitia delectus" + 
        " magnam exercitationem placeat eum, corrupti omnis repudiandae in debitis."
    },

    { 
        id: 2,
        image:"./images/pic-3.png",
        name: "Nelson Ibe",
        job: "Orator",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente vel " +
        "at rem quam cumque vitae veritatis repellat quasi soluta, mollitia delectus" + 
        " magnam exercitationem placeat eum, corrupti omnis repudiandae in debitis."
    },

    {
        id: 3,
        image:"./images/pic-4.jpg",
        name: "Amandla Sternberg",
        job: "Actor",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente vel " +
        "at rem quam cumque vitae veritatis repellat quasi soluta, mollitia delectus" + 
        " magnam exercitationem placeat eum, corrupti omnis repudiandae in debitis."
    },

    { 
        id: 4,
        image:"./images/pic-5.jpg",
        name: "Cloe Carsson",
        job: "Surgeon",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente vel " +
        "at rem quam cumque vitae veritatis repellat quasi soluta, mollitia delectus" + 
        " magnam exercitationem placeat eum, corrupti omnis repudiandae in debitis."
    }
]
// console.log(typeof reviews)

const image = document.querySelector('.imag');
const tag = document.querySelector('.name');
const job = document.querySelector('.job');
const info = document.querySelector('.info');
const nextBtn = document.querySelector('.nextbtn');
const prevBtn = document.querySelector('.prevbtn');
const ranBtn = document.querySelector('.ranbtn');

let currentItem = 0;

// add an event listenner on the window object
window.addEventListener('DOMContentLoaded', ()=>{
    showPerson();
})

// show person
showPerson = ()=>{
    const item = reviews[currentItem]
    image.src = item["image"]
    tag.textContent = item["name"]
    job.textContent = item["job"]
    info.textContent = item["info"]
}
 
// add an event listenner on the nextBtn
nextBtn.onclick= ()=>{
    currentItem++
    if(currentItem > reviews.length - 1){
        currentItem = 0
    }
    showPerson(currentItem);
}
prevBtn.onclick= ()=>{
    currentItem--
    if(currentItem < 0){
        currentItem = reviews.length - 1
    }
    showPerson();
}
// seting up the random funcionality

ranNum = ()=> Math.floor(Math.random() * reviews.length)
ranBtn.onclick= ()=>{
    currentItem = ranNum()
    showPerson();
}