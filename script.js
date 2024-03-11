
const input=document.getElementById("input");
const grid=document.getElementsByClassName("grid")[0];
window.addEventListener('load',dayNightMode)
input.addEventListener('keydown',function(event){
    
    if(event.key==='Enter')
    loadImg();
})


function loadImg(){
removeImg();
const url='https://api.unsplash.com/search/photos/?query='+input.value+'&per_page=9&client_id=CFkghekhNIgw_0A5zXeASMkEj1Z_mdzUfMi4gijAfGY';
fetch(url)
/* Here we are using Promises   .then  */
.then(Response=>{
   console.log(Response);

    
  if(Response.ok)
    return Response.json();
else 
alert(Response.status)

})
/* use an another promise which handles actual data*/
.then(data=>{
    
    const imageNodes=[];
    for(let i=0;i<data.results.length;i++)
    {
    imageNodes[i]=document.createElement('div');
    imageNodes[i].className='img';
    imageNodes[i].style.backgroundImage='url('+data.results[i].urls.raw+')';
    imageNodes[i].addEventListener('dblclick',function(){
    window.open(data.results[i].links.download,'_blank');
    
    })
    grid.appendChild(imageNodes[i]);
}
})

}
function removeImg(){
grid.innerHTML='';
}
function dayNightMode()
{
    const date=new Date();
    const hour=date.getHours;
    if(hour >=7 && hour <=9)
    {
        document.body.style.backgroundColor='whitesmoke';
        document.body.style.color='black';
     
    }else
    {
        document.body.style.backgroundColor='black';
        document.body.style.color='white';
    }
   
}