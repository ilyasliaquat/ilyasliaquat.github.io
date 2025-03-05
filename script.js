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

// start chapter-2 //

let lamalif = document.getElementById("audio-lam-alif");
let baaalif = document.getElementById("audio-baa-alif");
let lamhaa = document.getElementById("audio-lam-haa");
let baakaftaa = document.getElementById("audio-baa-kaf-taa");
let baalambaa = document.getElementById("audio-baa-lam-baa");
let baaseen = document.getElementById("audio-baa-seen");
let kafbaa = document.getElementById("audio-kaf-baa");
let noonalif = document.getElementById("audio-noon-alif");
let noonseen = document.getElementById("audio-noon-seen");
let saajeem = document.getElementById("audio-saa-jeem");
let saaseen = document.getElementById("audio-saa-seen");
let taakafsaa = document.getElementById("audio-taa-kaf-saa");
let taaseen = document.getElementById("audio-taa-seen");
let yaaseen = document.getElementById("audio-yaa-seen");
let saaalif = document.getElementById("audio-saa-alif");
let yaaalif = document.getElementById("audio-yaa-alif");
let baajeem = document.getElementById("audio-baa-jeem");
let baameem = document.getElementById("audio-baa-meem");
let baayaa = document.getElementById("audio-baa-yaa");
let noonkha = document.getElementById("audio-noon-kha");
let noonmeem = document.getElementById("audio-noon-meem");
let noonyaa = document.getElementById("audio-noon-yaa");
let taahaa = document.getElementById("audio-taa-haa");
let taameem = document.getElementById("audio-taa-meem");
let yaahaa = document.getElementById("audio-yaa-haa");
let yaameem = document.getElementById("audio-yaa-meem");
let yaayaa = document.getElementById("audio-yaa-yaa");
let kafalif = document.getElementById("audio-kaf-alif");





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
       if(write.value === "لا"){
           
        lamalif.play(); 
       }
       if(write.value === "با"){
           
        baaalif.play(); 
       }
       if(write.value === "لح"){
           
        lamhaa.play(); 
       }
       if(write.value === "ثا"){
           
        saaalif.play(); 
       }
       if(write.value === "بكت"){
           
        baakaftaa.play(); 
       }
       if(write.value === "بلب"){
           
        baalambaa.play(); 
       }
       if(write.value === "بس"){
           
        baaseen.play(); 
       }
       if(write.value === "كب"){
           
        kafbaa.play(); 
       }
       if(write.value === "نا"){
           
        noonalif.play(); 
       }
       if(write.value === "نس"){
           
        noonseen.play(); 
       }
       if(write.value === "ثج"){
           
        saajeem.play(); 
       }
       if(write.value === "ثس"){
           
        saaseen.play(); 
       }
       if(write.value === "تكث"){
           
        taakafsaa.play(); 
       }
       if(write.value === "تس"){
           
        taaseen.play(); 
       }
       if(write.value === "يا"){
           
        yaaalif.play(); 
       }
       if(write.value === "يس"){
           
        yaaseen.play(); 
       }
       if(write.value === "بج"){
           
        baajeem.play(); 
       }
       if(write.value === "بم"){
           
        baameem.play(); 
       }
       if(write.value === "بى"){
           
        baayaa.play(); 
       }
       if(write.value === "نخ"){
           
        noonkha.play(); 
       }
       if(write.value === "نم"){
           
        noonmeem.play(); 
       }
       if(write.value === "ني"){
           
        noonyaa.play(); 
       }
       if(write.value === "يم"){
           
        yaameem.play(); 
       }
       if(write.value === "تح"){
           
        taahaa.play(); 
       }
       if(write.value === "يح"){
           
        yaahaa.play(); 
       }
       if(write.value === "ىي"){
           
        yaayaa.play(); 
       }
       if(write.value === "تم"){
           
        taameem.play(); 
       }
       if(write.value === "كا"){
           
        kafalif.play(); 
       }
       if(write.value === "ك"){
           
        kaaaaf.play(); 
       }
       
       else{
        console.log("wrong")
       }
   
    })

   

})





/*window.addEventListener("scroll", function () {

let input = document.getElementById("write");

if(window.scrollY > 650) {
   input.style.position = "fixed";
    input.style.right = "1px";
    input.style.top = "1px";} else {
    input.style.position = " static";
} 

}

)*/