var qustion =document.querySelectorAll(".faq-qustion");
var answer =document.querySelectorAll(".faq-answer");


qustion.forEach(function(qt){
   qt.addEventListener("click",function(){
   var b =qt.nextElementSibling.classList.contains("view");
   answer.forEach(function(ans){
    ans.classList.remove("view");
   })

if (b==true){
    qt.nextElementSibling.classList.remove("view");
    qt.firstChild.nextElementSibling.nextElementSibling.style.transform="rotate(360deg)";
}
else{
    qt.nextElementSibling.classList.add("view");
    qt.firstChild.nextElementSibling.nextElementSibling.style.transform="rotate(180deg)";
}

   })
})
    

