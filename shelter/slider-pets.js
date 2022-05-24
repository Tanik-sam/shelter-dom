
   console.log ('я слайдер-пет, я подключился');
   

   let petsS= [{code:1,name:"Jennifer",kind:"Dog",breed:"Labrador",age:"2 mounth", sex: "female",inoculations:['none'], diseases: ['none'],parasites: ['none'],img:"../../assets/images/pets-jennifer.png", description:"Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys."},
   {code:2,name:"Woody",kind:"Dog",breed:"Golden retriever",age:"3 1/2 year", sex: "male",inoculations:['none'], diseases: ['none'],parasites: ['none'],img:"../../assets/images/pets-woody.png", description:"Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him."},
   {code:3,name:"Katrine",kind:"Cat",breed:"None",age:"1 year", sex: "female",inoculations:['none'], diseases: ['none'],parasites: ['none'],img:"../../assets/images/pets-katrine.png", description:"Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations."},
   {code:4,name:"Sophia",kind:"Dog",breed:"Bobtale",age:"2 mounth", sex: "female",inoculations:['none'], diseases: ['none'],parasites: ['none'],img:"../../assets/images/pets-sophia.png", description:"Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice."},
   {code:5,name:"Timmy",kind:"Сat",breed:"British Shorthair",age:"2 years", sex: "male",inoculations:['none'], diseases: ['none'],parasites: ['none'],img:"../../assets/images/pets-timmy.png", description:"Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with."},
   {code:6,name:"Charly",kind:"Dog",breed:"Austrian Pinscher",age:"3 years", sex: "male",inoculations:['none'], diseases: ['none'],parasites: ['none'],img:"../../assets/images/pets-charly.png", description:"This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy."},
   {code:7,name:"Scarlett",kind:"Dog",breed:"Jeck Russel",age:"4 mounth", sex: "female",inoculations:['none'], diseases: ['none'],parasites: ['none'],img:"../../assets/images/pets-scarlet.png", description:"Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human."},
   {code:8,name:"Freddie",kind:"Cat",breed:"None",age:"3 mounth", sex: "male",inoculations:['none'], diseases: ['none'],parasites: ['none'],img:"../../assets/images/pets-freddie.png", description:"Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home."}]
    
   
   let petsJson=JSON.stringify(petsS);
   let pets=JSON.parse(petsJson);
   
   let petsCards = document.querySelector(".Pets__Cards"); 

   window.onload=createSlider()  
  
   function createSlider(){
      let slider=[]
      let petsCard=[];
      let petsImg=[];
      let petsP=[];
      let petsA=[];
      for (let i=0;i<6;i++){
         let pets2=mix(pets);
         slider[i]=document.createElement('div');
         slider[i].className="wrapper wrapper_cards";
         for (let j=0; j<pets.length;j++){
            petsCard[j] = document.createElement("div");
            petsCard[j].className='Pets__Card';
            petsImg[j] = document.createElement("img");
            petsImg[j].src =pets2[j].img;
            petsCard[j].append(petsImg[j]);
            petsP[j] = document.createElement("p");
            petsP[j].innerHTML=pets2[j].name;
            petsCard[j].append(petsP[j]);
            petsA[j] = document.createElement("a");
            petsCard[j].id=pets2[j].code+pets2[j].name;
            petsA.name="button";
            petsA[j].className='button Button_light';
            petsA[j].innerHTML='Learn more';
            petsCard[j].append(petsA[j]);
           // petsCard[j].addEventListener("click", showModal);
            
            slider[i].append(petsCard[j]);
         }
         slider[i].id='slide'+i;
         petsCards.append(slider[i]);
      }
   }
 function mix(pets){
    let newPets=[];
    let k=[];
    let i=0;
    while (i<8){
       let rand=Math.floor(Math.random() * 8);
       if (!k.includes(rand)) {
          k.push(rand);
          newPets[i]=pets[rand];
          i++;
       }
    }
    return (newPets)
 }

    //-----------------------------------------------------------------------------

    const paginationFront = document.querySelector(".pagination-pets_Front");
    const paginationBack = document.querySelector(".pagination-pets_Back");
    const paginationEnd = document.querySelector(".pagination-pets_End");
    const paginationStart = document.querySelector(".pagination-pets_Start");
    const paginationPage = document.querySelector(".pagination-pets_Page");

    let slide=0;
    let curentSlideArr=[]
    for (let i=0;i<6; i++){
      curentSlideArr[i]=document.querySelector(`#slide${i}`).innerHTML;
      }  
    
  const moveLeft = () => {
   petsCards.classList.add("transition-left");
   paginationEnd.removeEventListener("click", moveEnd);
   paginationStart.removeEventListener("click", moveStart);
   paginationFront.removeEventListener("click", moveRight);
   paginationBack.removeEventListener("click", moveLeft);
    
    };
    
  const moveRight = () => {
   petsCards.classList.add("transition-right");
   paginationEnd.removeEventListener("click", moveEnd);
   paginationStart.removeEventListener("click", moveStart);
   paginationFront.removeEventListener("click", moveRight);
   paginationBack.removeEventListener("click", moveLeft);
    };

  const moveStart = () => {
   petsCards.classList.add("transition-start");
   paginationEnd.removeEventListener("click", moveEnd);
   paginationStart.removeEventListener("click", moveStart);
   paginationFront.removeEventListener("click", moveRight);
   paginationBack.removeEventListener("click", moveLeft);
    };
       
   const moveEnd = () => {
   petsCards.classList.add("transition-end");
   paginationEnd.removeEventListener("click", moveEnd);
   paginationStart.removeEventListener("click", moveStart);
   paginationFront.removeEventListener("click", moveRight);
   paginationBack.removeEventListener("click", moveLeft);
    };

    
   paginationBack.addEventListener("click", moveLeft);
   paginationFront.addEventListener("click", moveRight);
   paginationEnd.addEventListener("click", moveEnd);
   paginationStart.addEventListener("click", moveStart);

   checkStatus()

   function checkStatus(){
      switch (slide){
   case 0:{
     console.log('slide=0')
     paginationBack.className=('pagination-pets pagination-pets_inactive pagination-pets_Back')
     paginationStart.className=('pagination-pets pagination-pets_inactive pagination-pets_Start')
     paginationFront.className=('pagination-pets  pagination-pets_Front')
     paginationEnd.className=('pagination-pets  pagination-pets_End')
     paginationBack.removeEventListener("click", moveLeft);
     paginationStart.removeEventListener("click", moveStart);
   }
   break;
   case 1: case 2: case 3: case 4:{ 
      console.log('0<slide<5')
     paginationBack.className=('pagination-pets  pagination-pets_Back')
     paginationStart.className=('pagination-pets  pagination-pets_Start')
     paginationFront.className=('pagination-pets  pagination-pets_Front')
     paginationEnd.className=('pagination-pets  pagination-pets_End')
   }
   break;
   case 5:{
     console.log('slide=5')
     paginationBack.className=('pagination-pets  pagination-pets_Back')
     paginationStart.className=('pagination-pets  pagination-pets_Start')
     paginationFront.className=('pagination-pets pagination-pets_inactive pagination-pets_Front')
     paginationEnd.className=('pagination-pets pagination-pets_inactive pagination-pets_End')
     paginationFront.removeEventListener("click", moveRight);
     paginationEnd.removeEventListener("click", moveEnd);
   }

  }
}
 
   petsCards.addEventListener("animationend", (animationEvent) => {
   
        
       if (animationEvent.animationName === "move-left") {
         petsCards.classList.remove("transition-left");
         let l=document.querySelector('#slide0').innerHTML;
         document.querySelector('#slide0').innerHTML=document.querySelector('#slide5').innerHTML;
         document.querySelector('#slide5').innerHTML=document.querySelector('#slide4').innerHTML;
         document.querySelector('#slide4').innerHTML=document.querySelector('#slide3').innerHTML;
         document.querySelector('#slide3').innerHTML=document.querySelector('#slide2').innerHTML;
         document.querySelector('#slide2').innerHTML=document.querySelector('#slide1').innerHTML;
         document.querySelector('#slide5').innerHTML=l;
         slide--;
       
              
       }  else if (animationEvent.animationName === "move-start") {
         petsCards.classList.remove("transition-start");
         for (let i=0;i<6;i++){
           document.querySelector(`#slide${i}`).innerHTML=curentSlideArr[i]
         }
         slide=0;
        
       }
       else if (animationEvent.animationName === "move-right") {
         petsCards.classList.remove("transition-right");
         let r=document.querySelector('#slide5').innerHTML;
         document.querySelector('#slide5').innerHTML=document.querySelector('#slide0').innerHTML;
         document.querySelector('#slide0').innerHTML=document.querySelector('#slide1').innerHTML;
         document.querySelector('#slide1').innerHTML=document.querySelector('#slide2').innerHTML;
         document.querySelector('#slide2').innerHTML=document.querySelector('#slide3').innerHTML;
         document.querySelector('#slide3').innerHTML=document.querySelector('#slide4').innerHTML;
         document.querySelector('#slide4').innerHTML=r;
         slide++;
        
       }

       else if (animationEvent.animationName === "move-end") {
         petsCards.classList.remove("transition-end");
         let delta=5-slide
         for (let i=0;i<6;i++){
            let newI=i+delta;
            if ((i+delta)>5){ newI=Math.abs(6-newI)}
           document.querySelector(`#slide${i}`).innerHTML=curentSlideArr[newI]
         }
         slide=5;
        
       }
      
      
       paginationPage.innerHTML=slide+1;
       paginationBack.addEventListener("click", moveLeft);
       paginationFront.addEventListener("click", moveRight);
       paginationEnd.addEventListener("click", moveEnd);
       paginationStart.addEventListener("click", moveStart);
       checkStatus()
       let pet = document.getElementsByClassName("Pets__Card"); 
      for (let i=0;i<pet.length;i++) {pet[i].addEventListener('click', showModal)}           
     })

     //---------------------------------------------
     let pet = document.getElementsByClassName("Pets__Card"); 
     console.log(pet)
    for (let i=0;i<pet.length;i++) {pet[i].addEventListener('click', showModal)}
  
    const disableScroll = () => document.body.classList.add('no-scroll');
    const enableScroll = () => document.body.classList.remove('no-scroll');

   function showModal(event){
   console.log('even')
   let card=event.target.closest('.Pets__Card');
   
   let overlay = document.createElement("div");
   overlay.className='overlay';
   overlay.onclick=()=>{
   if(content.contains(overlay)){
      content.removeChild(overlay)
    }
      enableScroll()
   }
   let modal = document.createElement("div"); 
   modal.className='modal-window';
   let img = document.createElement("img")

   let currentPetArr=pets.filter(v=>v.code+v.name===card.id)
   currentPet=currentPetArr[0];
   console.log(currentPet)
   img.src=currentPet.img
   img.className="modal-window__pet"
   modal.append(img)

   let modalInfo = document.createElement("div");
   modalInfo.className='modal-window__info';
   modal.append(modalInfo);
   
   let modalName = document.createElement("h3");
   modalName.className='modal-window_name';
   modalInfo.append(modalName);
   modalName.innerHTML=currentPet.name;

   let modalBreed = document.createElement("h4");
   modalBreed.className='modal-window_breed'
   modalInfo.append(modalBreed);
   modalBreed.innerHTML=`${currentPet.kind}: ${currentPet.breed}`;
 
   let modalDescription=document.createElement("h5");
   modalDescription.className='modal-window_description';
   modalInfo.append(modalDescription);
   modalDescription.innerHTML=currentPet.description;
 
   let modalSumm=document.createElement("ul");
  modalSumm.className='modal_window_sum';
  modalInfo.append(modalSumm);

   let modalSummLi1=document.createElement("li");
   modalSummLi1.className='modalSumm_item';
  modalSumm.append(modalSummLi1);
  let modalSummLiSpan1=document.createElement("span");
  modalSummLiSpan1.innerHTML="Age: ";
  modalSummLi1.append(modalSummLiSpan1);
  let modalSummLi1Text=document.createTextNode(currentPet.age)
  modalSummLi1.append(modalSummLi1Text);
 

  let modalSummLi2=document.createElement("li");
  modalSummLi2.className='modalSumm_item';
  modalSumm.append(modalSummLi2);
  let modalSummLiSpan2=document.createElement("span");
  modalSummLiSpan2.innerHTML="Sex: ";
  modalSummLi2.append(modalSummLiSpan2);
  let modalSummLi2Text=document.createTextNode(currentPet.sex)
  modalSummLi2.append(modalSummLi2Text);

  let modalSummLi3=document.createElement("li");
  modalSummLi3.className='modalSumm_item';
  modalSumm.append(modalSummLi3);
  let modalSummLiSpan3=document.createElement("span");
  modalSummLiSpan3.innerHTML="Inoculations: ";
  modalSummLi3.append(modalSummLiSpan3);
  let modalSummLi3Text=document.createTextNode(currentPet.inoculations)
  modalSummLi3.append(modalSummLi3Text);
  

  let modalSummLi4=document.createElement("li");
  modalSummLi4.className='modalSumm_item';
  modalSumm.append(modalSummLi4);
  let modalSummLiSpan4=document.createElement("span");
  modalSummLiSpan4.innerHTML="Deseases: ";
  modalSummLi4.append(modalSummLiSpan4);
  let modalSummLi4Text=document.createTextNode(currentPet.diseases)
  modalSummLi4.append(modalSummLi4Text);


  let content = document.querySelector(".Pets__Content");
  content.append(overlay);
  overlay.append(modal);

  let closeBtn=document.createElement("div");
  closeBtn.className='close-btn';
  modal.append(closeBtn);
  closeBtn.onclick=()=>{
   //  event.stopPropogation();
      content.removeChild(overlay)
      enableScroll()
      
   }
   disableScroll();
    }
   
