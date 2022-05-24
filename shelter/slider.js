
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
   
   let slider = document.querySelector(".wrapper_slider");
   petsCardCont1 = document.createElement("div");
   petsCardCont1.className='card_conteiner'
   petsCardCont1.id='item1'
   slider.append(petsCardCont1)
   petsCardCont2 = document.createElement("div");
   petsCardCont2.className='card_conteiner'
   petsCardCont2.id='item2'
   slider.append(petsCardCont2)
   petsCardCont3 = document.createElement("div");
   petsCardCont3.className='card_conteiner'
   petsCardCont3.id='item3'
   slider.append(petsCardCont3)
   
   let pets2=mix(pets);
   window.onload=createSlider(pets2)    
   
   function createSlider(pets2){
   let petsCard=[];
   let petsImg=[];
   let petsP=[];
   let petsA=[];
   
   
 
   for (let i=0; i<9;i++){
      
      petsCard[i] = document.createElement("div");
      petsCard[i].className='Pets__Card';
      petsImg[i] = document.createElement("img");
      petsImg[i].src =pets2[i].img;
      petsCard[i].append(petsImg[i]);
      petsP[i] = document.createElement("p");
      petsP[i].innerHTML=pets2[i].name;
      petsCard[i].append(petsP[i]);
      petsA[i] = document.createElement("a");
      petsA.name="button";
      petsA[i].className='button Button_light';
      petsCard[i].id=pets2[i].code+pets2[i].name;
      petsA[i].innerHTML='Learn more';
      petsCard[i].append(petsA[i]);
      petsCard[i].addEventListener("click", showModal);
   
      if (i<3){petsCardCont1.append(petsCard[i]);}
      else if (i>2&&i<6){petsCardCont2.append(petsCard[i]);}
      else if (i>5&&i<9){petsCardCont3.append(petsCard[i]);}
   
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
    newPets.push(pets[3])
    return (newPets)
 }
 function createItem(){
    let pets2=mix(pets);
    petsCardCont1.innerHTML=''
    petsCardCont3.innerHTML=''
    let petsCard=[];
    let petsImg=[];
    let petsP=[];
    let petsA=[];
    for (let i=0; i<9;i++){
      
      petsCard[i] = document.createElement("div");
      petsCard[i].className='Pets__Card';
      petsImg[i] = document.createElement("img");
      petsImg[i].src =pets2[i].img;
      petsCard[i].append(petsImg[i]);
      petsP[i] = document.createElement("p");
      petsP[i].innerHTML=pets2[i].name;
      petsCard[i].append(petsP[i]);
      petsA[i] = document.createElement("a");
      petsA.name="button";
      petsA[i].className='button Button_light';
      petsCard[i].id=pets2[i].code+pets2[i].name;
      petsA[i].innerHTML='Learn more';
      petsCard[i].append(petsA[i]);
      petsCard[i].addEventListener("click", showModal);
      if (i<3){petsCardCont1.append(petsCard[i]);}
      else if (i>5&&i<9){petsCardCont3.append(petsCard[i]);}
   
}

 }
 
   //-----------------------------------------------------------------------------

   let paginationFront = document.querySelector(".pagination_front");
   let paginationBack = document.querySelector(".pagination_back");

 
 const moveLeft = () => {
   slider.classList.add("transition-left");
    paginationBack.removeEventListener("click", moveLeft);
    paginationFront.removeEventListener("click", moveRight);
   
   };
   
   const moveRight = () => {
     slider.classList.add("transition-right");
     paginationFront.removeEventListener("click", moveRight);
     paginationBack.removeEventListener("click", moveLeft);
   };
   
   paginationBack.addEventListener("click", moveLeft);
   paginationFront.addEventListener("click", moveRight);

   slider.addEventListener("animationend", (animationEvent) => {
      if (animationEvent.animationName === "move-left") {
        slider.classList.remove("transition-left");
        document.querySelector("#item2").innerHTML=document.querySelector("#item1").innerHTML
        createItem()
      } else {
         slider.classList.remove("transition-right");
         document.querySelector("#item2").innerHTML=document.querySelector("#item3").innerHTML
         createItem()
      }
      paginationBack.addEventListener("click", moveLeft);
      paginationFront.addEventListener("click", moveRight);
     let pet = document.getElementsByClassName("Pets__Card"); 
      for (let i=0;i<pet.length;i++) {pet[i].addEventListener('click', showModal)}
    })
    //---------------------------------------------

    const disableScroll = () => document.body.classList.add('no-scroll');
    const enableScroll = () => document.body.classList.remove('no-scroll');

   function showModal(event){

   let card=event.target.closest('.Pets__Card'); 
   let overlay = document.createElement("div");
   overlay.className='overlay';
   overlay.onclick=()=>{
      if(content.contains(overlay)){
      content.removeChild(overlay)
      enableScroll()}
   }
   let modal = document.createElement("div"); 
   modal.className='modal-window';
   let img = document.createElement("img")
   let currentPetArr=pets.filter(v=>v.code+v.name===card.id)
   currentPet=currentPetArr[0];
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
    // event.stopPropogation();
      content.removeChild(overlay)
      enableScroll()
      
   }
   disableScroll()
    }
   
