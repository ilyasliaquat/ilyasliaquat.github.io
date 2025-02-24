let write = document.getElementById("write");
let innerDiv = document.querySelectorAll(".inner");
let alif = document.getElementById("audio-a");
let baa = document.getElementById("audio-b");
let taa = document.getElementById("audio-taa");
let saa = document.getElementById("audio-saa");
let jeem = document.getElementById("audio-jeem");
let haa = document.getElementById("audio-haa");
let khaa = document.getElementById("audio-kha");
let dall = document.getElementById("audio-dal");
let zal = document.getElementById("audio-zal");
let raa = document.getElementById("audio-raa");
let zaa = document.getElementById("audio-zaa");
let seen = document.getElementById("audio-seen");
let sheen = document.getElementById("audio-shen");
let saad = document.getElementById("audio-saad");
let zaad = document.getElementById("audio-zaad");
let taaa = document.getElementById("audio-taaa");
let zaaa = document.getElementById("audio-zaaa");
let aieen = document.getElementById("audio-aieen");
let ghaeen = document.getElementById("audio-ghaeen");
let faaa = document.getElementById("audio-faaa");
let kaaof = document.getElementById("audio-kaaof");
let kaaaaf = document.getElementById("audio-kaaaaf");
let laam = document.getElementById("audio-laam");
let meem = document.getElementById("audio-meem");
let noon = document.getElementById("audio-noon");
let wao = document.getElementById("audio-wao");
let hhaa = document.getElementById("audio-hhaa");
let hamza = document.getElementById("audio-hamza");
let yaa = document.getElementById("audio-yaa");
let byaa = document.getElementById("audio-byaa");




let innerDivArray = Array.from(innerDiv);
 let string = " ";

innerDivArray.forEach(btn => {
    
    btn.addEventListener("click", (e) => {
   
        
        write.value = e.target.innerText;
        
    
       if(write.value === "ا"){
           
        alif.play(); 
       }
       if(write.value === "ب"  ){
        baa.play();
       }
       if(write.value === "ت"){
           
        taa.play(); 
       }
       if(write.value === "ث"){
           
        saa.play(); 
       }
       if(write.value === "ج"){
           
        jeem.play(); 
       }
       if(write.value === "ح"){
           
        haa.play(); 
       }
       if(write.value === "خ"){
           
        khaa.play(); 
       }
       if(write.value === "د"){
           
        dall.play(); 
       }
       if(write.value === "ذ"){
           
        zal.play(); 
       }
       if(write.value === "ر"){
           
        raa.play(); 
       }
       if(write.value === "ز"){
           
        zaa.play(); 
       }
       if(write.value === "س"){
           
        seen.play(); 
       }
       if(write.value === "ش"){
           
        sheen.play(); 
       }
       if(write.value === "ص"){
           
        saad.play(); 
       }
       if(write.value === "ض"){
           
        zaad.play(); 
       }
       if(write.value === "ط"){
           
        taaa.play(); 
       }
       if(write.value === "ظ"){
           
        zaaa.play(); 
       }
       if(write.value === "ع"){
           
        aieen.play(); 
       }
       if(write.value === "غ"){
           
        ghaeen.play(); 
       }
       if(write.value === "ف"){
           
        faaa.play(); 
       }
       if(write.value === "ق"){
           
        kaaof.play(); 
       }
       if(write.value === "ك"){
           
        kaaaaf.play(); 
       }
       if(write.value === "ل"){
           
        laam.play(); 
       }
       if(write.value === "م"){
           
        meem.play(); 
       }
       if(write.value === "ن"){
           
        noon.play(); 
       }
       if(write.value === "و"){
           
        wao.play(); 
       }
       if(write.value === "ه"){
           
        hhaa.play(); 
       }
       if(write.value === "ء"){
           
        hamza.play(); 
       }
       if(write.value === "ي"){
           
        yaa.play(); 
       }
       if(write.value === "یے"){
           
        byaa.play(); 
       }
       
       else{
        console.log("wrong")
       }
   
    })

   

})





window.addEventListener("scroll", function () {

let input = document.getElementById("write");

if(window.scrollY > 50) {
   input.style.position = "fixed";
    input.style.right = "1px";
    input.style.top = "1px";
} else {
    input.style.position = " static";
} 

}

)


