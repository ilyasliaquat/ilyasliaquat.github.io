

let writeLess = document.getElementById("write-le-2");
let innerDivLess = document.querySelectorAll(".inner-le-2");
let writeLesson = document.getElementById("writele-2");
let innerDivLesson = document.querySelectorAll(".innerle-2");




let baahaaalif = document.getElementById("audio-baa-haa-alif");
let baahaameem = document.getElementById("audio-baa-haa-meem");
let baakhataa = document.getElementById("audio-baa-kha-taa");
let baanonnon = document.getElementById("audio-baa-non-non");
let baataa = document.getElementById("audio-baa-taa");
let baayaalam = document.getElementById("audio-baa-yaa-lam");
let jeemraa = document.getElementById("audio-jeem-raa");
let jeemtaa = document.getElementById("audio-jeem-taa");
let khazaa = document.getElementById("audio-kha-zaa");
let nonbaalam = document.getElementById("audio-non-baa-lam");
let nonbaanon = document.getElementById("audio-non-baa-non");
let saasaanon = document.getElementById("audio-saa-saa-non");
let saayaa = document.getElementById("audio-saa-yaa");
let seenlam = document.getElementById("audio-seen-lam");
let sheenlam = document.getElementById("audio-sheen-lam");
let taahaataa = document.getElementById("audio-taa-haa-taa");
let taanonlam = document.getElementById("audio-taa-non-lam");
let taayaa = document.getElementById("audio-taa-yaa");
let taazaa = document.getElementById("audio-taa-zaa");

let yaahaaless = document.getElementById("audio-yaa-haaa");
let yaahaaabaa = document.getElementById("audio-yaa-haaa-baa");
let yaajeembaa = document.getElementById("audio-yaa-jeem-baa");
let yaaraa = document.getElementById("audio-yaa-raa");
let yaasaalam = document.getElementById("audio-yaa-saa-lam");
let yaataalam = document.getElementById("audio-yaa-taa-lam");
let yaataanon = document.getElementById("audio-yaa-taa-non");






let innerDivLessArray = Array.from(innerDivLess);
 let stringless = " ";

innerDivLessArray.forEach(btn => {
    
    btn.addEventListener("click", (e) => {
   
        
        writeLess.value = e.target.innerText;


        if(writeLess.value === "بنن"){
           
            baanonnon.play(); 
            }
           if(writeLess.value === "بها"){
           
            baahaaalif.play(); 
            }
           if(writeLess.value === "بحم"){
           
            baahaameem.play(); 
             }
             if(writeLess.value === "بخت"){
           
                baakhataa.play(); 
                }
                if(writeLess.value === "بة"){
           
                    baataa.play(); 
                 }
                 if(writeLess.value === "بيل"){
           
                    baayaalam.play(); 
                 }
                 if(writeLess.value === "جر"){
           
                    jeemraa.play(); 
                 }
                 
                 if(writeLess.value === "جت"){
           
                    jeemtaa.play(); 
                 }
                 if(writeLess.value === "خز"){
           
                    khazaa.play(); 
                 }
                 if(writeLess.value === "نبل"){
           
                    nonbaalam.play(); 
                 }
                 if(writeLess.value === "نبن"){
           
                    nonbaanon.play(); 
                 }
                 if(writeLess.value === "ثثن"){
           
                    saasaanon.play(); 
                 }
                 if(writeLess.value === "ثى"){
           
                    saayaa.play(); 
                 }
                 if(writeLess.value === "سل"){
           
                    seenlam.play(); 
                 }
                 if(writeLess.value === "شل"){
           
                    sheenlam.play(); 
                 }
                 if(writeLess.value === "تحت"){
           
                    taahaataa.play(); 
                 }
                 if(writeLess.value === "تنل"){
           
                    taanonlam.play(); 
                 }
                 if(writeLess.value === "تى"){
           
                    taayaa.play(); 
                 }

                 if(writeLess.value === "تز"){
           
                    taazaa.play(); 
                 }
                 if(writeLess.value === "يه"){
           
                    yaahaaless.play(); 
                 }
                 if(writeLess.value === "يهب"){
           
                    yaahaaabaa.play(); 
                 }
                 if(writeLess.value === "يجب"){
           
                    yaajeembaa.play(); 
                 }
                 if(writeLess.value === "ير"){
           
                    yaaraa.play(); 
                 }
                 if(writeLess.value === "يثل"){
           
                    yaasaalam.play(); 
                 }
                 if(writeLess.value === "يتل"){
           
                    yaataalam.play(); 
                 }
                 if(writeLess.value === "يتن"){
           
                    yaataanon.play(); 
                 }
                




           
           else{
            console.log("wrong")
           }

       


    })
})




//start lesson-2-2  //


let aieenraa = document.getElementById("audio-aieen-raa");
let baaaieendal = document.getElementById("audio-baa-aieen-dal");
let faakoaaflam = document.getElementById("audio-faa-koaaf-lam");
let faawao = document.getElementById("audio-faa-wao");
let ghaieenzaa = document.getElementById("audio-ghaieen-zaa");
let hamzaalif = document.getElementById("audio-hamza-alif");
let hamzawao = document.getElementById("audio-hamza-wao");
let hamzayaa = document.getElementById("audio-hamza-yaa");
let koaaffaalam = document.getElementById("audio-koaaf-faa-lam");
let koaafwao = document.getElementById("audio-koaaf-wao");
let saadaieen = document.getElementById("audio-saad-aieen");
let taaghaieenzal = document.getElementById("audio-taa-ghaieen-zal");
let toabaa = document.getElementById("audio-toaa-baa");
let yaafaa = document.getElementById("audio-yaa-faa");
let zaadalif = document.getElementById("audio-zoaad-alif");
let zaadghaieen = document.getElementById("audio-zoaad-ghaieen");
let zoaaalif = document.getElementById("audio-zoaa-alif");

let taameemtaa = document.getElementById("audio-taa-meem-taa");
let baajeemles = document.getElementById("audio-baa-jeem");
let hamzales = document.getElementById("audio-hamzales");
let saadbaa = document.getElementById("audio-saad-baa");
let haameem = document.getElementById("audio-haa-meem");
let nonmeemles = document.getElementById("audio-non-meemles");



let innerDivLessonArray = Array.from(innerDivLesson);
 let stringlesson = " ";

innerDivLessonArray.forEach(btn => {
    
    btn.addEventListener("click", (e) => {
   
        
        writeLesson.value = e.target.innerText;


        if(writeLesson.value === "عر"){
           
         aieenraa.play(); 
        }
        
        if(writeLesson.value === "بعد"){
           
         baaaieendal.play(); 
        }
        
        if(writeLesson.value === "فقل"){
           
         faakoaaflam.play(); 
        }
        
        if(writeLesson.value === "فو"){
           
         faawao.play(); 
        }
        if(writeLesson.value === "غز"){
           
         ghaieenzaa.play(); 
        }
        if(writeLesson.value === "أ"){
           
         hamzaalif.play(); 
        }
        if(writeLesson.value === "ؤ"){
           
         hamzawao.play(); 
        }
        if(writeLesson.value === "ئ"){
           
         hamzayaa.play(); 
        }
        if(writeLesson.value === "قفل"){
           
         koaaffaalam.play(); 
        }
        if(writeLesson.value === "قو"){
           
         koaafwao.play(); 
        }
        if(writeLesson.value === "صع"){
           
         saadaieen.play(); 
        }
        if(writeLesson.value === "تغذ"){
           
         taaghaieenzal.play(); 
        }
        if(writeLesson.value === "تمت"){
           
         taameemtaa.play(); 
        }
        if(writeLesson.value === "طب"){
           
         toabaa.play(); 
        }
        if(writeLesson.value === "يف"){
           
         yaafaa.play(); 
        }
        if(writeLesson.value === "ضا"){
           
         zaadalif.play(); 
        }
        if(writeLesson.value === "ظا"){
           
         zoaaalif.play(); 
        }
        if(writeLesson.value === "صب"){
           
         saadbaa.play(); 
        }
        if(writeLesson.value === "بج"){
           
         baajeemles.play(); 
        }
        if(writeLesson.value === "حم"){
           
         haameem.play(); 
        }
        if(writeLesson.value === "ضغ"){
           
         zaadghaieen.play(); 
        }
        if(writeLesson.value === "ء"){
           
         hamzales.play(); 
        }
        if(writeLesson.value === "نم"){
           
         nonmeemles.play(); 
        }


        
        
        
        else{
         console.log("wrong")
        }
       

    })
})


// start lesson-3   //


let writeLesThree = document.getElementById("writeles-3");
let innerDivLesThree = document.querySelectorAll(".innerles-3");

let aieenseenkoaafle = document.getElementById("audio-aieen-seen-koaaf-le");
let aliflammeemle = document.getElementById("audio-alif-lam-meem-le");
let aliflammeemraale = document.getElementById("audio-alif-lam-meem-raa-le");
let aliflammeemsadle = document.getElementById("audio-alif-lam-meem-sad-le");
let aliflamraale = document.getElementById("audio-alif-lam-raa-le");
let haameemle = document.getElementById("audio-haa-meem-le");
let kaafhaayaaaieensaad = document.getElementById("audio-kaaf-haa-yaa-aieen-sad");
let koaafle = document.getElementById("audio-koaaf-le");
let noonle = document.getElementById("audio-noon-le");
let saadle = document.getElementById("audio-saad-le");
let toaahaale = document.getElementById("audio-toaa-haa-le");
let toaaseemmeemle = document.getElementById("audio-toaa-seem-meem-le");
let toaaseenle = document.getElementById("audio-toaa-seen-le");
let yaaseenle = document.getElementById("audio-yaa-seen-le");




let innerDivLesThreeArray = Array.from(innerDivLesThree);
 let stringlesThree = " ";

innerDivLesThreeArray.forEach(btn => {
    
    btn.addEventListener("click", (e) => {
   
        
        writeLesThree.value = e.target.innerText;



        if(writeLesThree.value === "عٓسٓقٓ"){
           
         aieenseenkoaafle.play(); 
        }
        if(writeLesThree.value === "الٓمّٓ"){
           
         aliflammeemle.play(); 
        }
        if(writeLesThree.value === "الٓمّٓرٰ"){
           
         aliflammeemraale.play(); 
        }
        if(writeLesThree.value === "الٓمّٓصٓ"){
           
         aliflammeemsadle.play(); 
        }
        if(writeLesThree.value === "الٓرٰ"){
           
         aliflamraale.play(); 
        }
        if(writeLesThree.value === "حٰمٓ"){
           
         haameemle.play(); 
        }
        if(writeLesThree.value === "کٓھٰیٰعٓصٓ"){
           
         kaafhaayaaaieensaad.play(); 
        }
        if(writeLesThree.value === "قٓ"){
           
         koaafle.play(); 
        }
        if(writeLesThree.value === "نٓ"){
           
         noonle.play(); 
        }
        if(writeLesThree.value === "صٓ"){
           
         saadle.play(); 
        }
        if(writeLesThree.value === "طٰہٰ"){
           
         toaahaale.play(); 
        }
        if(writeLesThree.value === "طٰسٓمّٓ"){
           
         toaaseemmeemle.play(); 
        }
        if(writeLesThree.value === "طٰسٓ"){
           
         toaaseenle.play(); 
        }
        if(writeLesThree.value === "یٰسٓ"){
           
         yaaseenle.play(); 
        }


        
        
        
        else{
         console.log("wrong")
        }



    })
})





//start lesson - 4//

let writeLessFour = document.getElementById("writeles-4");
let innerDivLessFour = document.querySelectorAll(".innerles-4");








let innerDivLessFourArray = Array.from(innerDivLessFour);

 let stringlessfour = " ";

innerDivLessFourArray.forEach(btn => {
    
    btn.addEventListener("click", (e) => {
   
        
        writeLessFour.value = e.target.innerText;

    })
})

