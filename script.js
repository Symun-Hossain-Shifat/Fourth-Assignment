let totalJob = document.getElementById("total");
let InterviewJob =document.getElementById('interview');
let rejectedJob = document.getElementById('rejected');
let maincontainer = document.getElementById('cardscontainer');
const setText = document.getElementById("noText");
// catch the Main button
const allbtn = document.getElementById('button-all');
const interviewbtn = document.getElementById('button-interview');
const rejectedbtn = document.getElementById('button-rejected');
const mainsection = document.querySelector('main');
console.log(mainsection);

let interviewList = [];
let rejectedList = [];





function calculateJob(){
totalJob.innerText = maincontainer.children.length;
InterviewJob.innerText = interviewList.length;
rejectedJob.innerText = rejectedList.length;
}
calculateJob();



function changebtn(id){
  allbtn.classList.remove('bg-blue-600','text-white')
  interviewbtn .classList.remove('bg-blue-600','text-white')
  rejectedbtn .classList.remove('bg-blue-600','text-white')

  allbtn.classList.add('bg-white','text-black')
   interviewbtn .classList.add('bg-white','text-black')
 rejectedbtn.classList.add('bg-white','text-black')

 id.classList.remove('bg-white','text-black')
 id.classList.add('bg-blue-600','text-white')
}

mainsection.addEventListener("click",function(event){
  if(event.target.classList.contains("interviewbtn")){
    const parantnode  = event.target.parentNode.parentNode;
   
    const  Title =  parantnode.querySelector('.title').innerText;
    const  Developer=  parantnode.querySelector('.developer').innerText;
    const  Remote =  parantnode.querySelector('.remote').innerText;
    const  Description =  parantnode.querySelector('.description').innerText;
    parantnode.querySelector('.appliedbtn').innerText = "INTERVIEW";
    parantnode.querySelector('.appliedbtn').classList.add("bg-red-200",'text-red-500','font-extrabold')
    const  objectData = {
    Title,
    Developer,
    Remote,
    Description
  }
  const existcheck = interviewList.find(Item=> Item.Title == objectData.Title);
  if(!existcheck){
    interviewList.push(objectData);
    }
 rejectedList = rejectedList.filter(item=>item.Title !== Title);
 calculateJob()




}else if(event.target.classList.contains("rejectbtn")){
  const secoundParantnode = event.target.parentNode.parentNode;
 
  const Title = secoundParantnode.querySelector('.title').innerText;
  const  Developer = secoundParantnode.querySelector('.developer').innerText;
  const Remote = secoundParantnode.querySelector('.remote').innerText;
  const Description = secoundParantnode.querySelector('.description').innerText;
  secoundParantnode.querySelector('.appliedbtn').innerText = "REJECTED";
  secoundParantnode.querySelector('.appliedbtn').classList.add("bg-red-200",'text-red-500','font-extrabold');
  const objectData ={
    Title,
    Developer,
    Remote,
    Description
  }
  const existcheckTwo = rejectedList.find(num=>num.Title == objectData.Title);
  if(!existcheckTwo){
    rejectedList.push(objectData);
    
  }
  interviewList = interviewList.filter(num=>num.Title !== Title);
  calculateJob()

}
  
 
})

const emptysection =document.getElementById('Emptysection');
allbtn.addEventListener("click",function(){
  setText.innerText = "";
  emptysection.classList.add('hidden');
 mainsection.classList.remove("hidden");
})

interviewbtn.addEventListener("click",function(){
  setText.innerText = interviewList.length + " of ";
  if(interviewList.length === 0){
 emptysection.classList.remove('hidden');
 mainsection.classList.add("hidden");
}
})


rejectedbtn .addEventListener("click",function(){
  setText.innerText = rejectedList.length + " of ";
  if(rejectedList.length === 0){
 emptysection.classList.remove('hidden');
 mainsection.classList.add("hidden");
}
})










