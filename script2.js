

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



        // start le 2 //

        if( writeLesson.value === "بنن"){
           
         baanonnon.play(); 
         }
        if( writeLesson.value === "بها"){
        
         baahaaalif.play(); 
         }
        if( writeLesson.valuee === "بحم"){
        
         baahaameem.play(); 
          }
          if( writeLesson.value === "بخت"){
        
             baakhataa.play(); 
             }
             if( writeLesson.value === "بة"){
        
                 baataa.play(); 
              }
              if( writeLesson.value === "بيل"){
        
                 baayaalam.play(); 
              }
              if( writeLesson.value === "جر"){
        
                 jeemraa.play(); 
              }
              
              if( writeLesson.value === "جت"){
        
                 jeemtaa.play(); 
              }
              if( writeLesson.value === "خز"){
        
                 khazaa.play(); 
              }
              if( writeLesson.value === "نبل"){
        
                 nonbaalam.play(); 
              }
              if( writeLesson.value === "نبن"){
        
                 nonbaanon.play(); 
              }
              if( writeLesson.value === "ثثن"){
        
                 saasaanon.play(); 
              }
              if( writeLesson.value === "ثى"){
        
                 saayaa.play(); 
              }
              if( writeLesson.value === "سل"){
        
                 seenlam.play(); 
              }
              if( writeLesson.value === "شل"){
        
                 sheenlam.play(); 
              }
              if( writeLesson.value === "تحت"){
        
                 taahaataa.play(); 
              }
              if( writeLesson.value === "تنل"){
        
                 taanonlam.play(); 
              }
              if( writeLesson.value === "تى"){
        
                 taayaa.play(); 
              }

              if( writeLesson.value === "تز"){
        
                 taazaa.play(); 
              }
              if( writeLesson.value === "يه"){
        
                 yaahaaless.play(); 
              }
              if( writeLesson.value === "يهب"){
        
                 yaahaaabaa.play(); 
              }
              if( writeLesson.value === "يجب"){
        
                 yaajeembaa.play(); 
              }
              if( writeLesson.value === "ير"){
        
                 yaaraa.play(); 
              }
              if( writeLesson.value === "يثل"){
        
                 yaasaalam.play(); 
              }
              if( writeLesson.value === "يتل"){
        
                 yaataalam.play(); 
              }
              if( writeLesson.value === "يتن"){
        
                 yaataanon.play(); 
              }


       
       
       
       //start le 2//
       if(writeLesson.value === "ا"){
           
         alif.play(); 
        }

       if( writeLesson.value === "لا"){
           
         lamalif.play(); 
        }
        if( writeLesson.value === "با"){
            
         baaalif.play(); 
        }
        if( writeLesson.value === "لح"){
            
         lamhaa.play(); 
        }
        if( writeLesson.value === "ثا"){
            
         saaalif.play(); 
        }
        if( writeLesson.value === "بكت"){
            
         baakaftaa.play(); 
        }
        if( writeLesson.value === "بلب"){
            
         baalambaa.play(); 
        }
        if( writeLesson.value === "بس"){
            
         baaseen.play(); 
        }
        if( writeLesson.value === "كب"){
            
         kafbaa.play(); 
        }
        if( writeLesson.value === "نا"){
            
         noonalif.play(); 
        }
        if( writeLesson.value === "نس"){
            
         noonseen.play(); 
        }
        if( writeLesson.value === "ثج"){
            
         saajeem.play(); 
        }
        if( writeLesson.value === "ثس"){
            
         saaseen.play(); 
        }
        if( writeLesson.value === "تكث"){
            
         taakafsaa.play(); 
        }
        if( writeLesson.value === "تس"){
            
         taaseen.play(); 
        }
        if( writeLesson.value === "يا"){
            
         yaaalif.play(); 
        }
        if( writeLesson.value === "يس"){
            
         yaaseen.play(); 
        }
        if( writeLesson.value === "بج"){
            
         baajeem.play(); 
        }
        if( writeLesson.value === "بم"){
            
         baameem.play(); 
        }
        if(writeLesson.value === "بى"){
            
         baayaa.play(); 
        }
        if(writeLesson.value === "نخ"){
            
         noonkha.play(); 
        }
        if(writeLesson.value === "نم"){
            
         noonmeem.play(); 
        }
        if(writeLesson.value === "ني"){
            
         noonyaa.play(); 
        }
        if(writeLesson.value === "يم"){
            
         yaameem.play(); 
        }
        if(writeLesson.value === "تح"){
            
         taahaa.play(); 
        }
        if(writeLesson.value === "يح"){
            
         yaahaa.play(); 
        }
        if(writeLesson.value === "ىي"){
            
         yaayaa.play(); 
        }
        if(writeLesson.value === "تم"){
            
         taameem.play(); 
        }
        if(writeLesson.value === "كا"){
            
         kafalif.play(); 
        }
        if(writeLesson.value === "ك"){
            
         kaaaaf.play(); 
        }
       
       
       
       
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



let aieenzabar = document.getElementById("audio-aieen-zabar");
let baazabar = document.getElementById("audio-baa-zabar");
let dalzabar = document.getElementById("audio-dal-zabar");
let faazabar = document.getElementById("audio-faa-zabar");
let haaazabar = document.getElementById("audio-haaa-zabar");
let hamzazabar = document.getElementById("audio-hamza-zabar");
let kaafzabar = document.getElementById("audio-kaaf-zabar");
let koaafzabar = document.getElementById("audio-koaaf-zabar");
let lamzabar = document.getElementById("audio-lam-zabar");
let meemzabar = document.getElementById("audio-meem-zabar");
let noonzabar = document.getElementById("audio-noon-zabar");
let raazabar = document.getElementById("audio-raa-zabar");
let saazabarsaa = document.getElementById("audio-saa-zabar-saa");
let seenzabar = document.getElementById("audio-seen-zabar");
let sheenzabar = document.getElementById("audio-sheen-zabar");
let soaadzabar = document.getElementById("audio-soaad-zabar");
let taazabar = document.getElementById("audio-taa-zabar");
let toaazabar = document.getElementById("audio-toaa-zabar");
let waozabar = document.getElementById("audio-wao-zabar");
let yaazabar = document.getElementById("audio-yaa-zabar");
let zaazabar = document.getElementById("audio-zaa-zabar");
let zalzabar = document.getElementById("audio-zal-zabar");
let zoaazabar = document.getElementById("audio-zoaa-zabar");
let zoaadzabar = document.getElementById("audio-zoaad-zabar");







let innerDivLessFourArray = Array.from(innerDivLessFour);

 let stringlessfour = " ";

innerDivLessFourArray.forEach(btn => {
    
    btn.addEventListener("click", (e) => {
   
        
        writeLessFour.value = e.target.innerText;


        if(writeLessFour.value === "عَ عِ عُ"){
           
         aieenzabar.play(); 
        }
        if(writeLessFour.value === "بَ بِ بُ"){
           
         baazabar.play(); 
        }
        if(writeLessFour.value === "دَ دِ دُ"){
           
         dalzabar.play(); 
        }
        if(writeLessFour.value === "فَ فِ فُ"){
           
         faazabar.play(); 
        }
        if(writeLessFour.value === "هَ هِ هُ"){
           
         haaazabar.play(); 
        }
        if(writeLessFour.value === "اَ اِ اُ"){
           
         hamzazabar.play(); 
        }
        if(writeLessFour.value === "كَ كِ كُ"){
           
         kaafzabar.play(); 
        }
        if(writeLessFour.value === "قَ قِ قُ"){
           
         koaafzabar.play(); 
        }
        if(writeLessFour.value === "لَ لِ لُ"){
           
         lamzabar.play(); 
        }
        if(writeLessFour.value === "مَ مِ مُ"){
           
         meemzabar.play(); 
        }
        if(writeLessFour.value === "نَ نِ نُ"){
           
         noonzabar.play(); 
        }
        if(writeLessFour.value === "رَ رِ رُ"){
           
         raazabar.play(); 
        }
        if(writeLessFour.value === "ثَ ثِ ثُ"){
           
         saazabarsaa.play(); 
        }
        if(writeLessFour.value === "سَ سِ سُ"){
           
         seenzabar.play(); 
        }
        if(writeLessFour.value === "شَ شِ شُ"){
           
         sheenzabar.play(); 
        }
        if(writeLessFour.value === "صَ صِ صُ"){
           
         soaadzabar.play(); 
        }
        if(writeLessFour.value === "تَ تِ تُ"){
           
         taazabar.play(); 
        }
        if(writeLessFour.value === "طَ طِ طُ"){
           
         toaazabar.play(); 
        }
        if(writeLessFour.value === "وَ وِ وُ"){
           
         waozabar.play(); 
        }
        if(writeLessFour.value === "ىَ ىِ ىُ"){
           
         yaazabar.play(); 
        }
        if(writeLessFour.value === "زَ زِ زُ"){
           
         zaazabar.play(); 
        }
        if(writeLessFour.value === "ذَ ذِ ذُ"){
           
         zalzabar.play(); 
        }
        if(writeLessFour.value === "ظَ ظِ ظُ"){
           
         zoaazabar.play(); 
        }
        if(writeLessFour.value === "ضَ ضِ ضُ"){
           
         zoaadzabar.play(); 
        }



        
        
        
        else{
         console.log("wrong")
        }  





    })
})



//    start lesson-5    //


let writeLesFive = document.getElementById("writeles-5");
let innerDivLesFive = document.querySelectorAll(".innerles-5");



let aieendozabar = document.getElementById("audio-aieen-dozabar");
let baadozabar = document.getElementById("audio-baa-dozabar");
let daldozabar = document.getElementById("audio-dal-dozabar");
let faadozabar = document.getElementById("audio-faa-dozabar");
let haaadozabar = document.getElementById("audio-haaa-dozabar");
let hamzadozabar = document.getElementById("audio-hamza-dozabar");
let kaafdozabar = document.getElementById("audio-kaaf-dozabar");
let koaafdozabar = document.getElementById("audio-koaaf-dozabar");
let lamdozabar = document.getElementById("audio-lam-dozabar");
let meemdozabar = document.getElementById("audio-meem-dozabar");
let noondozabar = document.getElementById("audio-noon-dozabar");
let raadozabar = document.getElementById("audio-raa-dozabar");
let saadozabar = document.getElementById("audio-saa-dozabar");
let seendozabar = document.getElementById("audio-seen-dozabar");
let sheendozabar = document.getElementById("audio-sheen-dozabar");
let soaaddozabar = document.getElementById("audio-soaad-dozabar");
let taadozabar = document.getElementById("audio-taa-dozabar");
let toaadozabar = document.getElementById("audio-toaa-dozabar");
let waodozabar = document.getElementById("audio-wao-dozabar");
let yaadozabar = document.getElementById("audio-yaa-dozabar");
let zaadozabar = document.getElementById("audio-zaaa-dozabar");
let zaldozabar = document.getElementById("audio-zal-dozabar");
let zoaadozabar = document.getElementById("audio-zoaa-dozabar");
let zoaaddozabar = document.getElementById("audio-zoaad-dozabar");
let khadozabar = document.getElementById("audio-kha-dozabar");
let jeemdozabar = document.getElementById("audio-jeem-dozabar");
let ghaieendozabar = document.getElementById("audio-ghaieen-dozabar");
let haadozabar = document.getElementById("audio-haa-dozabar");




let innerDivLesFiveArray = Array.from(innerDivLesFive);

 let stringlesfive = " ";

 innerDivLesFiveArray.forEach(btn => {
    
    btn.addEventListener("click", (e) => {

      writeLesFive.value = e.target.innerText;


      if(writeLesFive.value === "عاً عِِِ عُُ"){
           
         aieendozabar.play(); 
        }
        if(writeLesFive.value === "باً بِِ بُُ"){
           
         baadozabar.play(); 
        }
        if(writeLesFive.value === "دىً دِِ دُُ"){
           
         daldozabar.play(); 
        }
        if(writeLesFive.value === "ذىً ذِِ ذُُ"){
           
         zaldozabar.play(); 
        }
        if(writeLesFive.value === "زاً زِِ زُُ"){
           
         zaadozabar.play(); 
        }
        if(writeLesFive.value === "ساً سِِ سُُ"){
           
         seendozabar.play(); 
        }
        if(writeLesFive.value === "ضاً ضِِ ضُُ"){
           
         zoaaddozabar.play(); 
        }
        if(writeLesFive.value === "ياً ىِِ ىُُ"){
           
         yaadozabar.play(); 
        }
        if(writeLesFive.value === "واً وِِ وُُ"){
           
         waodozabar.play(); 
        }
        if(writeLesFive.value === "طاً طِِ طُُ"){
           
         toaadozabar.play(); 
        }
        if(writeLesFive.value === "ةً تِِ تُُ"){
           
         taadozabar.play(); 
        }
        if(writeLesFive.value === "صاً صِِ صُُ"){
           
         soaaddozabar.play(); 
        }
        if(writeLesFive.value === "شاً شِِ شُُ"){
           
         sheendozabar.play(); 
        }
        if(writeLesFive.value === "ثاً ثِِ ثُُ"){
           
         saadozabar.play(); 
        }
        if(writeLesFive.value === "راً رِِ رُُ"){
           
         raadozabar.play(); 
        }
        if(writeLesFive.value === "ناً نِِ نُُ"){
           
         noondozabar.play(); 
        }
        if(writeLesFive.value === "ماً مِِ مُُ"){
           
         meemdozabar.play(); 
        }
        if(writeLesFive.value === "لاً لِِ لُُ"){
           
         lamdozabar.play(); 
        }
        if(writeLesFive.value === "قاً قِِ قُُ"){
           
         koaafdozabar.play(); 
        }
        if(writeLesFive.value === "كاً كِِ كُُ"){
           
         kaafdozabar.play(); 
        }
        if(writeLesFive.value === "خاً خِِ خُُ"){
           
         khadozabar.play(); 
        }
        if(writeLesFive.value === "ءً ءِِ ءُُ"){
           
         hamzadozabar.play(); 
        }
        if(writeLesFive.value === "جاً جِِ جُُ"){
           
         jeemdozabar.play(); 
        }
        if(writeLesFive.value === "هاً هـِِ هـُُ"){
           
         haaadozabar.play(); 
        }
        if(writeLesFive.value === "غاً غِِ غُُ"){
           
         ghaieendozabar.play(); 
        }
        if(writeLesFive.value === "فاً فِِ فُُ" ){
           
         faadozabar.play(); 
        }
        if(writeLesFive.value === "زاً زِِ زُُ" ){
           
         zaadozabar.play(); 
        }
        if(writeLesFive.value === "جاً جِِ جُُ" ){
           
         jeemdozabar.play(); 
        }
        if(writeLesFive.value === "حاً حِِِ حُُ" ){
           
         haadozabar.play(); 
        }
       
       
       
        



        
        
        
        else{
         console.log("wrong")
        }



    })
   })
   



   // start lesson - 6  //


   let writeLesSix = document.getElementById("writeles-6");
let innerDivLesSix = document.querySelectorAll(".innerles-6");



let abada = document.getElementById("audio-abada");
let abas = document.getElementById("audio-abas");
let adal = document.getElementById("audio-adal");
let ahad = document.getElementById("audio-ahad");
let ainabaa = document.getElementById("audio-ainabaa");
let akhaz = document.getElementById("audio-akhaz");
let alak = document.getElementById("audio-alak");
let amad = document.getElementById("audio-amad");
let amar = document.getElementById("audio-amar");
let azin = document.getElementById("audio-azin");
let bakhil = document.getElementById("audio-bakhil");
let bararah = document.getElementById("audio-bararah");
let faal = document.getElementById("audio-fa-al");
let ghabarah = document.getElementById("audio-ghabarah");
let hasad = document.getElementById("audio-hasad");
let hashar = document.getElementById("audio-hashar");
let homazah = document.getElementById("audio-homazah");
let jaal = document.getElementById("audio-ja-al");
let jamaa = document.getElementById("audio-jam-aa");
let kabad = document.getElementById("audio-kabad");
let kadarah = document.getElementById("audio-kadarah");
let kafar = document.getElementById("audio-kafar");
let kasaba = document.getElementById("audio-kasaba");
let kasam = document.getElementById("audio-kasam");
let khalaq = document.getElementById("audio-khalaq");
let khashi = document.getElementById("audio-khashi");
let khuliq = document.getElementById("audio-khuliq");
let kotub = document.getElementById("audio-kotub");
let kufow = document.getElementById("audio-kufow");
let lahab = document.getElementById("audio-lahab");
let lobadan = document.getElementById("audio-lobadan");
let lomaza = document.getElementById("audio-lomaza");
let masad = document.getElementById("audio-masad");
let nakhirah = document.getElementById("audio-nakhirah");
let qatarah = document.getElementById("audio-qatarah");
let qutil = document.getElementById("audio-qutil");
let rafaaa = document.getElementById("audio-rafa-aa");
let raqabah = document.getElementById("audio-raqabah");
let safarah = document.getElementById("audio-safarah");
let sohofa = document.getElementById("audio-sohofa");
let soror = document.getElementById("audio-soror");
let tabak = document.getElementById("audio-tabak");
let tabaqa = document.getElementById("audio-tabaqa");
let towa = document.getElementById("audio-towa");
let wahab = document.getElementById("audio-wahab");
let wajada = document.getElementById("audio-wajada");
let walad = document.getElementById("audio-walad");
let waqab = document.getElementById("audio-waqab");
let wasaqa = document.getElementById("audio-wasaqa");
let wasata = document.getElementById("audio-wasata");
let zakar = document.getElementById("audio-zakar");





let innerDivLesSixArray = Array.from(innerDivLesSix);

 let stringlessix = " ";

 innerDivLesSixArray.forEach(btn => {
    
    btn.addEventListener("click", (e) => {

      writeLesSix.value = e.target.innerText;



      if(writeLesSix.value === "اَبَدًا" ){
           
        abada.play(); 
        }
        if(writeLesSix.value === "عَبَسَ" ){
           
         abas.play(); 
        }
        if(writeLesSix.value === "عَدَلَ" ){
           
        adal .play(); 
        }
        if(writeLesSix.value === "اَ حَدُُ" ){
           
         ahad.play(); 
        }
        if(writeLesSix.value === "عِنَبًا" ){
           
         ainabaa.play(); 
        }
        if(writeLesSix.value === "اَخَذَ" ){
           
         akhaz.play(); 
        }
        if(writeLesSix.value === "عَلَقٍ" ){
           
         alak.play(); 
        }
        if(writeLesSix.value === "عَمَدٍ" ){
           
         amad.play(); 
        }
        if(writeLesSix.value === "اَمَرَ" ){
           
         amar.play(); 
        }
        if(writeLesSix.value === "اَذِنَ" ){
           
         azin.play(); 
        }
        if(writeLesSix.value === "بَخِلَ" ){
           
         bakhil.play(); 
        }
        if(writeLesSix.value === "بَرَرَةٍ" ){
           
         bararah.play(); 
        }
        if(writeLesSix.value === "فَعَلَ" ){
           
         faal.play(); 
        }
        if(writeLesSix.value === "غَبَرَةُُ" ){
           
         ghabarah.play(); 
        }
        if(writeLesSix.value === "حَسَدَ" ){
           
         hasad.play(); 
        }
        if(writeLesSix.value === "هُمَزَةٍ" ){
           
         homazah.play(); 
        }
        if(writeLesSix.value === "جَعَلَ" ){
           
         jaal.play(); 
        }
        if(writeLesSix.value === "جَمَعَ" ){
           
         jamaa.play(); 
        }
        if(writeLesSix.value === "كَبَدٍ" ){
           
        kabad .play(); 
        }
        if(writeLesSix.value === "قَدَرَ" ){
           
         kadarah.play(); 
        }
        if(writeLesSix.value === "كَفَرَ" ){
           
         kafar.play(); 
        }
        if(writeLesSix.value === "كَسَبَ" ){
           
         kasaba.play(); 
        }
        if(writeLesSix.value === "قَسَمُُ" ){
           
         kasam.play(); 
        }
        if(writeLesSix.value === "خَلَقَ" ){
           
         khalaq.play(); 
        }
        if(writeLesSix.value === "خَشِيَ" ){
           
         khashi.play(); 
        }
        if(writeLesSix.value === "خُلِقَ" ){
           
         khuliq.play(); 
        }
        if(writeLesSix.value === "كُتُبُُ" ){
           
        kotub .play(); 
        }
        if(writeLesSix.value === "كُفُوًا" ){
           
         kufow.play(); 
        }
        if(writeLesSix.value === "لَهَبٍ" ){
           
         lahab.play(); 
        }
        if(writeLesSix.value === "لُبَدًا" ){
           
         lobadan.play(); 
        }
        if(writeLesSix.value === "لُمَزَةٍ" ){
           
         lomaza.play(); 
        }
        if(writeLesSix.value === "مَسَدٍ" ){
           
         masad.play(); 
        }
        if(writeLesSix.value === "نَخِرَةً" ){
           
         nakhirah.play(); 
        }
        if(writeLesSix.value === "قَتَرَةٌ" ){
           
         qatarah.play(); 
        }
        if(writeLesSix.value === "قُتِلَ" ){
           
         qutil.play(); 
        }
        if(writeLesSix.value === "رَفَعَ" ){
           
         rafaaa.play(); 
        }
        if(writeLesSix.value === "رَقَبَةٍ" ){
           
        raqabah .play(); 
        }
        if(writeLesSix.value === "سَفَرَةٍ" ){
           
         safarah.play(); 
        }
        if(writeLesSix.value === "صُحُفًا" ){
           
         sohofa.play(); 
        }
        if(writeLesSix.value === "سُرُرُُ" ){
           
         soror.play(); 
        }
        if(writeLesSix.value === "طَبَقٍ" ){
           
         tabak.play(); 
        }
        if(writeLesSix.value === "طَبَقًا" ){
           
         tabaqa.play(); 
        }
        if(writeLesSix.value === "طُوََى" ){
           
         towa.play(); 
        }
        if(writeLesSix.value === "وَهَبَ" ){
           
         wahab.play(); 
        }
        if(writeLesSix.value === "وَجَدَ" ){
           
       wajada .play(); 
        }
        if(writeLesSix.value === "وَلَدَ" ){
           
         walad.play(); 
        }
        if(writeLesSix.value === "وَقَبَ" ){
           
         waqab.play(); 
        }
        if(writeLesSix.value === "وَسَقَ" ){
           
         wasaqa.play(); 
        }
        if(writeLesSix.value === "وَسَطًا" ){
           
         wasata.play(); 
        }
        if(writeLesSix.value === "ذَكَرَ" ){
           
         zakar.play(); 
        }
        
       
       
       
       
       
        else{
         console.log("wrong")
        }

    })
   })








   // start lesson -7 //



   
   let writeLesSeven = document.getElementById("writeles-7");
let innerDivLesSeven = document.querySelectorAll(".innerles-7");



let aieenkhara = document.getElementById("audio-aieen-khara");
let baakhara = document.getElementById("audio-baa-khara");
let dalkhara = document.getElementById("audio-dal-khara");
let faakhara = document.getElementById("audio-faa-khara");
let ghaieenkhara = document.getElementById("audio-ghaieen-khara");
let haakhara = document.getElementById("audio-haa-khara");
let haaakhara = document.getElementById("audio-haaa-khara");
let hamzakhara = document.getElementById("audio-hamza-khara");
let jeemkhara = document.getElementById("audio-jeem-khara");
let kaafkhara = document.getElementById("audio-kaaf-khara");
let khakhara = document.getElementById("audio-kha-khara");
let koaafkhara = document.getElementById("audio-koaaf-khara");
let lamkhara = document.getElementById("audio-lam-khara");
let meemkhara = document.getElementById("audio-meem-khara");
let noonkhara = document.getElementById("audio-noon-khara");
let raakhara = document.getElementById("audio-raa-khara");
let saakhara = document.getElementById("audio-saa-khara");
let seenkhara = document.getElementById("audio-seen-khara");
let sheenkhara = document.getElementById("audio-sheen-khara");
let soaadkhara = document.getElementById("audio-soaad-khara");
let taakhara = document.getElementById("audio-taa-khara");
let toaakhara = document.getElementById("audio-toaa-khara");
let waokhara = document.getElementById("audio-wao-khara");
let yaakhara = document.getElementById("audio-yaa-khara");
let zaakhara = document.getElementById("audio-zaa-khara");
let zalkhara = document.getElementById("audio-zal-khara");
let zoaakhara = document.getElementById("audio-zoaa-khara");
let zoaadkhara = document.getElementById("audio-zoaad-khara");


let innerDivLesSevenArray = Array.from(innerDivLesSeven);

 let stringlesseven = " ";

 innerDivLesSevenArray.forEach(btn => {
    
    btn.addEventListener("click", (e) => {

      writeLesSeven.value = e.target.innerText;


      if(writeLesSeven.value === "بٰ بٖ بٗ" ){
           
         baakhara.play(); 
         
        }
        if(writeLesSeven.value === "تٰ تٖ تٗ" ){
           
         taakhara.play(); 
         
        }
        if(writeLesSeven.value === "ثٰ ثٖ ثٗ" ){
           
         saakhara.play(); 
         
        }
        if(writeLesSeven.value === "جٰ جٖ جٗ" ){
           
         jeemkhara.play(); 
         
        }
        if(writeLesSeven.value === "حٰ حٖ حٗ" ){
           
         haakhara.play(); 
         
        }
        if(writeLesSeven.value === "خٰ خٖ خٗ" ){
           
         khakhara.play(); 
         
        }
        if(writeLesSeven.value === "دٰ دٖ دٗ" ){
           
         dalkhara.play(); 
         
        }
        if(writeLesSeven.value === "ذٰ ذٖ ذٗ" ){
           
         zalkhara.play(); 
         
        }
        if(writeLesSeven.value === "رٰ رٖ رٗ" ){
           
         raakhara.play(); 
         
        }
        if(writeLesSeven.value === "سٰ سٖ سٗ" ){
           
         seenkhara.play(); 
         
        }
        if(writeLesSeven.value === "زٰ زٖ زٗ" ){
           
         zaakhara.play(); 
         
        }
        if(writeLesSeven.value === "شٰ شٖ شٗ" ){
           
         sheenkhara.play(); 
         
        }
        if(writeLesSeven.value === "صٰ صٖ صٗ" ){
           
         soaadkhara.play(); 
         
        }
        if(writeLesSeven.value === "ضٰ ضٖ ضٗ" ){
           
         zoaadkhara.play(); 
         
        }
        if(writeLesSeven.value === "طٰ طٖ طٗ" ){
           
         toaakhara.play(); 
         
        }
        if(writeLesSeven.value === "ظٰ ظٖ ظٗ" ){
           
         zoaakhara.play(); 
         
        }
        if(writeLesSeven.value === "عٰ عٖ عٗ" ){
           
         aieenkhara.play(); 
         
        }
        if(writeLesSeven.value === "غٰ غٖ غٗ" ){
           
         ghaieenkhara.play(); 
         
        }
        if(writeLesSeven.value === "فٰ فٖ فٗ" ){
           
         faakhara.play(); 
         
        }
        if(writeLesSeven.value === "قٰ قٖ قٗ" ){
           
         koaafkhara.play(); 
         
        }
        if(writeLesSeven.value === "لٰ لٖ لٗ" ){
           
         lamkhara.play(); 
         
        }
        if(writeLesSeven.value === "مٰ مٖ مٗ" ){
           
         meemkhara.play(); 
         
        }
        if(writeLesSeven.value === "نٰ نٖ نٗ" ){
           
         noonkhara.play(); 
         
        }
        if(writeLesSeven.value === "هٰ هٖ هٗ" ){
           
         haaakhara.play(); 
         
        }
        if(writeLesSeven.value === "وٰ وٖ وٗ" ){
           
         waokhara.play(); 
         
        }
        if(writeLesSeven.value === "يٰ يٖ يٗ" ){
           
         yaakhara.play(); 
         
        }
        if(writeLesSeven.value === "اٰ اٖ اٗ" ){
           
         hamzakhara.play(); 
         
        }
        if(writeLesSeven.value === "كٰ كٖ كٗ" ){
           
         kaafkhara.play(); 
         
        }
        
        
       
       

        
       
       
       
       
       
        else{
         console.log("wrong")
        }



     

    })
   })






   // start lesson - 8 //




   let writeLesEight = document.getElementById("writeles-8");
   let innerDivLesEight = document.querySelectorAll(".innerles-8");


   let baabo = document.getElementById("audio-baa-bo");
   let aieeno = document.getElementById("audio-aieen-o");
   let dalo = document.getElementById("audio-dal-o");
   let faao = document.getElementById("audio-faa-o");
   let ghaieeno = document.getElementById("audio-ghaieen-o");
   let haao = document.getElementById("audio-haa-o");
   let haaao = document.getElementById("audio-haaa-o");
   let hamzao = document.getElementById("audio-hamza-o");
   let jeemo = document.getElementById("audio-jeem-o");
   let kaafo = document.getElementById("audio-kaaf-o");
   let khao = document.getElementById("audio-kha-o");
   let koaafo = document.getElementById("audio-koaaf-o");
   let lamo = document.getElementById("audio-lam-o");
   let meemo = document.getElementById("audio-meem-o");
   let noono = document.getElementById("audio-noon-o");
   let raao = document.getElementById("audio-raa-o");
   let saao = document.getElementById("audio-saa-o");
   let seeno = document.getElementById("audioseen--o");
   let sheeno = document.getElementById("audio-sheen-o");
   let soaado = document.getElementById("audio-soaad-o");
   let taao = document.getElementById("audio-taa-o");
   let toaao = document.getElementById("audio-toaa-o");
   let waoo = document.getElementById("audio-wao-o");
   let yaao = document.getElementById("audio-yaa-o");
   let zaao = document.getElementById("audio-zaa-o");
   let zalo = document.getElementById("audio-zal-o");
   let zoaao = document.getElementById("audio-zoaa-o");
   let zoaado = document.getElementById("audio-zoaad-o");
   
  
   
   
   
   
   let innerDivLesEightArray = Array.from(innerDivLesEight);
   
    let stringleseight = " ";
   
    innerDivLesEightArray.forEach(btn => {
       
       btn.addEventListener("click", (e) => {
   
         writeLesEight.value = e.target.innerText;


         if(writeLesEight.value === "بَا بُوۡا بیۡ" ){
           
            baabo.play(); 
            
           }
           if(writeLesEight.value === "عَا عُوۡا عِیۡ" ){
           
            aieeno.play(); 
            
           }
           if(writeLesEight.value === "دَا دُوۡا دِیۡ" ){
           
           dalo.play(); 
            
           }
           if(writeLesEight.value === "فَا فُوۡا فِیۡ" ){
           
           faao.play(); 
            
           }
           if(writeLesEight.value === "غَا غُوۡا غِیۡ" ){
           
            ghaieeno.play(); 
            
           }
           if(writeLesEight.value === "حَا حُوۡا حِیۡ" ){
           
            haao.play(); 
            
           }
           if(writeLesEight.value === "هَا هُوۡا هِیۡ" ){
           
            haaao.play(); 
            
           }
           
           if(writeLesEight.value === "جَا جُوۡا جِیۡ" ){
           
            jeemo.play(); 
            
           }
           if(writeLesEight.value === "كَا كُوۡا كِیۡ" ){
           
            kaafo.play(); 
            
           }
           if(writeLesEight.value === "خَا خُوۡا خِیۡ" ){
           
            khao.play(); 
            
           }
           if(writeLesEight.value === "قَا قُوۡا قِیۡ" ){
           
            koaafo.play(); 
            
           }
           if(writeLesEight.value === "لَا لُوۡا لِیۡ" ){
           
            lamo.play(); 
            
           }
           if(writeLesEight.value === "مَا مُوۡا مِیۡ" ){
           
            meemo.play(); 
            
           }
           if(writeLesEight.value === "نَا نُوۡا نِیۡ" ){
           
            noono.play(); 
            
           }
           if(writeLesEight.value === "رَا رُوۡا رِیۡ" ){
           
            raao.play(); 
            
           }
           if(writeLesEight.value === "ثَا ثُوۡا ثِیۡ" ){
           
            saao.play(); 
            
           }
           if(writeLesEight.value === "سَا سُوۡا سِیۡ" ){
           
            seeno.play(); 
            
           }
           if(writeLesEight.value === "شَا شُوۡا شِیۡ" ){
           
            sheeno.play(); 
            
           }
           if(writeLesEight.value === "صَا صُوۡا صِیۡ" ){
           
            soaado.play(); 
            
           }
           if(writeLesEight.value === "تَا تُوۡا تِیۡ" ){
           
            taao.play(); 
            
           }
           if(writeLesEight.value === "طَا طُوۡا طِیۡ" ){
           
            toaao.play(); 
            
           }
           if(writeLesEight.value === "وَا وُوۡا وِیۡ" ){
           
            waoo.play(); 
            
           }
           if(writeLesEight.value === "يَا يُوۡا يِیۡ" ){
           
            yaao.play(); 
            
           }
           if(writeLesEight.value === "زَا زُوۡا زِیۡ" ){
           
            zaao.play(); 
            
           }
           if(writeLesEight.value === "ذَا ذُوۡا ذِیۡ" ){
           
            zalo.play(); 
            
           }
           if(writeLesEight.value === "ظَا ظُوۡا ظِیۡ" ){
           
            zoaao.play(); 
            
           }
           if(writeLesEight.value === "ضَا ضُوۡا ضِیۡ" ){
           
            zoaado.play(); 
            
           }
           
          
          
          
          
          
           else{
            console.log("wrong")
           }

         
   
       })
      })



      // start lesson - 9    //


      let writeLesNine = document.getElementById("writeles-9");
      let innerDivLesNine = document.querySelectorAll(".innerles-9");



      
   let aieenoo = document.getElementById("audio-aieen-oo");
   let daloo = document.getElementById("audio-dal-oo");
   let faaoo = document.getElementById("audio-faa-oo");
   let ghaieenoo = document.getElementById("audio-ghaieen-oo");
   let haaoo = document.getElementById("audio-haa-oo");
   let haaaoo = document.getElementById("audio-haaa-oo");
   let jeemoo = document.getElementById("audio-jeem-oo");
   let kaafoo = document.getElementById("audio-kaaf-oo");
   let khaoo = document.getElementById("audio-kha-oo");
   let koaafoo = document.getElementById("audio-koaaf-oo");
   let lamoo = document.getElementById("audio-lam-oo");
   let meemoo = document.getElementById("audio-meem-oo");
   let noonoo = document.getElementById("audio-noon-oo");
   let raaoo = document.getElementById("audio-raa-oo");
   let saaoo = document.getElementById("audio-saa-oo");
   let seenoo = document.getElementById("audio-seen-oo");
   let sheenoo = document.getElementById("audio-sheen-oo");
   let soaadoo = document.getElementById("audio-soaad-oo");
   let taaoo = document.getElementById("audio-taa-oo");
   let toaaoo = document.getElementById("audio-toaa-oo");
   let yaaoo = document.getElementById("audio-yaa-oo");
   let zaaoo = document.getElementById("audio-zaa-oo");
   let zaloo = document.getElementById("audio-zal-oo");
   let zoaaoo = document.getElementById("audio-zoaa-oo");
   let zoaadoo = document.getElementById("audio-zoaad-oo");
      
      
      
      
      let innerDivLesNineArray = Array.from(innerDivLesNine);
      
       let stringlesnine = " ";
      
       innerDivLesNineArray.forEach(btn => {
          
          btn.addEventListener("click", (e) => {
      
            writeLesNine.value = e.target.innerText;


            if( writeLesNine.value === "تَوۡ تَیۡ" ){
           
               taaoo.play(); 
              }
              if( writeLesNine.value === "ثَوۡ ثَیۡ" ){
           
               saaoo.play(); 
              }
              if( writeLesNine.value === "جَوۡ جَیۡ" ){
           
               jeemoo.play(); 
              }
              if( writeLesNine.value === "حَوۡ حَیۡ" ){
           
               haaoo.play(); 
              }
              if( writeLesNine.value === "خَوۡ خَیۡ" ){
           
               khaoo.play(); 
              }
              if( writeLesNine.value === "دَوۡ دَیۡ" ){
           
               daloo.play(); 
              }
              if( writeLesNine.value === "ذَوۡ ذَیۡ" ){
           
               zaloo.play(); 
              }
              if( writeLesNine.value === "رَوۡ رَیۡ" ){
           
               raaoo.play(); 
              }
              if( writeLesNine.value === "زَوۡ زَیۡ" ){
           
               zaaoo.play(); 
              }
              if( writeLesNine.value === "سَوۡ سَیۡ" ){
           
               seenoo.play(); 
              }
              if( writeLesNine.value === "شَوۡ شَیۡ" ){
           
               sheenoo.play(); 
              }
              if( writeLesNine.value === "صَوۡ صَیۡ" ){
           
               soaadoo.play(); 
              }
              if( writeLesNine.value === "ضَوۡ ضَیۡ" ){
           
               zoaadoo.play(); 
              }
              if( writeLesNine.value === "طَوۡ طَیۡ" ){
           
               toaaoo.play(); 
              }
              if( writeLesNine.value === "ظَوۡ ظَیۡ" ){
           
               zoaaoo.play(); 
              }
              if( writeLesNine.value === "عَوۡ عَیۡ" ){
           
               aieenoo.play(); 
              }
              if( writeLesNine.value === "غَوۡ غَیۡ" ){
           
               ghaieenoo.play(); 
              }
              if( writeLesNine.value === "فَوۡ فَیۡ" ){
           
               faaoo.play(); 
              }
              if( writeLesNine.value === "قَوۡ قَیۡ" ){
           
               koaafoo.play(); 
              }
              if( writeLesNine.value === "كَوۡ كَیۡ" ){
           
               kaafoo.play(); 
              }
              if( writeLesNine.value === "لَوۡ لَیۡ" ){
           
               lamoo.play(); 
              }
              if( writeLesNine.value === "مَوۡ مَیۡ" ){
           
               meemoo.play(); 
              }
              if( writeLesNine.value === "نَوۡ نَیۡ" ){
           
               noonoo.play(); 
              }
              if( writeLesNine.value === "هَوۡ هَیۡ" ){
           
               haaaoo.play(); 
              }
              
              
              
             
             
             
             
             
              else{
               console.log("wrong")
              }


           
   
      
          })
         })
   


   


         //start lesson-10 //

         let writeLesTen = document.getElementById("writeles-10");
      let innerDivLesTen = document.querySelectorAll(".innerles-10");


      let aman = document.getElementById("audio-aman");
      let aawaa = document.getElementById("audio-aawaa");
      let ania = document.getElementById("audio-ania");
      let elaaf = document.getElementById("audio-elaaf");
      let bih = document.getElementById("audio-bih");
      let gee = document.getElementById("audio-gee");
      let jaah = document.getElementById("audio-jaah");
      let haaar = document.getElementById("audio-haaar");
      let naara = document.getElementById("audio-naara");
      let khair = document.getElementById("audio-khair");
      let dawood = document.getElementById("audio-dawood");
      let rowida = document.getElementById("audio-rowida");
      let razo = document.getElementById("audio-razo");
      let rijal = document.getElementById("audio-rijal");
      let malik = document.getElementById("audio-malik");
      let shai = document.getElementById("audio-shai");
      let togha = document.getElementById("audio-togha");
      let taghao = document.getElementById("audio-taghao");
      let toaran = document.getElementById("audio-toaran");
      let aad = document.getElementById("audio-aad");
      let alaa = document.getElementById("audio-alaa");
      let aien = document.getElementById("audio-aien");
      let feh = document.getElementById("audio-feh");
      let koala = document.getElementById("audio-koala");
      let koaol = document.getElementById("audio-koaol");
      let kaan = document.getElementById("audio-kaan");
      let kaida = document.getElementById("audio-kaida");
      let kaif = document.getElementById("audio-kaif");
      let laohen = document.getElementById("audio-laohen");
      let lais = document.getElementById("audio-lais");
      let khoaf = document.getElementById("audio-khoaf");
      let maaaa = document.getElementById("audio-maaaa");
      let wail = document.getElementById("audio-wail");
      let yaom = document.getElementById("audio-yaom");
      let yara = document.getElementById("audio-yara");
      let haasid = document.getElementById("audio-haasid");
      let haafiz = document.getElementById("audio-haafiz");
      let dafiq = document.getElementById("audio-dafiq");
      let shahid = document.getElementById("audio-shahid");
      let abid = document.getElementById("audio-abid");
      let ghasiq = document.getElementById("audio-ghasiq");
      let nasir = document.getElementById("audio-nasir");
      let walid = document.getElementById("audio-walid");
      let akeed = document.getElementById("audio-akeed");
      let yakhaf = document.getElementById("audio-yakhaf");
      let yadah = document.getElementById("audio-yadah");
      let youqal = document.getElementById("audio-youqal");
      let toraban = document.getElementById("audio-toraban");
      let hisaba = document.getElementById("audio-hisaba");
      let sobata = document.getElementById("audio-sobata");
      let siraja = document.getElementById("audio-siraja");
      let salamon = document.getElementById("audio-salamon");
      let shidadan = document.getElementById("audio-shidadan");
      let sharaba = document.getElementById("audio-sharaba");
      let soaban = document.getElementById("audio-soaban");
      let toaam = document.getElementById("audio-toaam");
      let azaban = document.getElementById("audio-azaban");
      let atoaaa = document.getElementById("audio-atoaaa");
      let ghosa = document.getElementById("audio-ghosa");
      let kitaban = document.getElementById("audio-kitaban");
      let kirama = document.getElementById("audio-kirama");
      let libasa = document.getElementById("audio-libasa");
      let lisanan = document.getElementById("audio-lisanan");
      let maabaa = document.getElementById("audio-maabaa");
      let mutaa = document.getElementById("audio-mutaa");
      let maasha = document.getElementById("audio-maasha");
      let mafazan = document.getElementById("audio-mafazan");
      let mihada = document.getElementById("audio-mihada");
      let nabata = document.getElementById("audio-nabata");
      let wifaqa = document.getElementById("audio-wifaqa");
      let soboran = document.getElementById("audio-soboran");
      let rasool = document.getElementById("audio-rasool");
      let shohood = document.getElementById("audio-shohood");
      let qoood = document.getElementById("audio-qoood");
      let wojoh = document.getElementById("audio-wojoh");
      let aseem = document.getElementById("audio-aseem");
      let aleem = document.getElementById("audio-aleem");
      let basiran = document.getElementById("audio-basiran");
      let khabir = document.getElementById("audio-khabir");
      let rahiq = document.getElementById("audio-rahiq");
      let shahidun = document.getElementById("audio-shahidun");
      let azim = document.getElementById("audio-azim");
      let qareeba = document.getElementById("audio-qareeba");
      let karim = document.getElementById("audio-karim");
      let majid = document.getElementById("audio-majid");
      let mohit = document.getElementById("audio-mohit");
      let naeem = document.getElementById("audio-naeem");
      let maodaa = document.getElementById("audio-maodaa");
      let maozoaa = document.getElementById("audio-maozoaa");
      let mawazinoh = document.getElementById("audio-mawazinoh");
      let ainon = document.getElementById("audio-ainon");
      let shaahid = document.getElementById("audio-shaahid");
      let moheet = document.getElementById("audio-moheet");
      let yatimaa = document.getElementById("audio-yatimaa");
      let yaseeraa = document.getElementById("audio-yaseeraa");
      let zalika = document.getElementById("audio-zalika");
      let quaraish = document.getElementById("audio-quaraish");
      let aeeshtin = document.getElementById("audio-aeeshtin");
      let shaaaa = document.getElementById("audio-shaaaa");
      
      






      
      
      
      
      
      let innerDivLesTenArray = Array.from(innerDivLesTen);
      
       let stringlesten = " ";
      
       innerDivLesTenArray.forEach(btn => {
          
          btn.addEventListener("click", (e) => {
      
            writeLesTen.value = e.target.innerText;


            if( writeLesTen.value === "اٰمَنَ" ){
           
               aman.play(); 
              }
              if( writeLesTen.value === "اٰوٰی" ){
           
               aawaa.play(); 
              }
              if( writeLesTen.value === "اٰنِيَةٍ" ){
           
               ania.play(); 
              }
              if( writeLesTen.value === "اٖلٰفِ" ){
           
               elaaf.play(); 
              }
              if( writeLesTen.value === "اَيۡنَ" ){
           
               aien.play(); 
              }
              if( writeLesTen.value === "بِهٖ" ){
           
               bih.play(); 
              }
              if( writeLesTen.value === "جِایۡٓءَ" ){
           
               gee.play(); 
              }
              if( writeLesTen.value === "جَآءَ" ){
           
               jaah.play(); 
              }
              if( writeLesTen.value === "نَارًا" ){
           
               naara.play(); 
              }
              if( writeLesTen.value === "دَاوٗدُ" ){
           
               dawood.play(); 
              }
              if( writeLesTen.value === "خَيۡرُُ" ){
           
               khair.play(); 
              }
              if( writeLesTen.value === "رَضُوۡا" ){
           
               razo.play(); 
              }
              if( writeLesTen.value === "مٰلِكِ" ){
           
               malik.play(); 
              }
              if( writeLesTen.value === "شَیۡءٍ" ){
           
               shai.play(); 
              }
              if( writeLesTen.value === "طَغٰی" ){
           
               togha.play(); 
              }
              if( writeLesTen.value === "طَغَوۡا" ){
           
               taghao.play(); 
              }
              if( writeLesTen.value === "طَيۡرًا" ){
           
               toaran.play(); 
              }
              if( writeLesTen.value === "عَادٍ" ){
           
               aad.play(); 
              }
              if( writeLesTen.value === "عَلٰی" ){
           
               alaa.play(); 
              }
              if( writeLesTen.value === "عَيۡنُُ" ){
           
               ainon.play(); 
              }
              if( writeLesTen.value === "فِيۡهِ" ){
           
               feh.play(); 
              }
              if( writeLesTen.value === "قَالَ" ){
           
               koala.play(); 
              }
              if( writeLesTen.value === "قَوۡلُُ" ){
           
               koaol.play(); 
              }
              if( writeLesTen.value === "كَانَ" ){
           
               kaan.play(); 
              }
              if( writeLesTen.value === "كَيۡدًا" ){
           
               kaida.play(); 
              }
              if( writeLesTen.value === "كَيۡفَ" ){
           
               kaif.play(); 
              }
              if( writeLesTen.value === "لَوۡحٍ" ){
           
               laohen.play(); 
              }
              if( writeLesTen.value === "لَيۡسَ" ){
           
               lais.play(); 
              }
              if( writeLesTen.value === "مَآءٍ" ){
           
               maaaa.play(); 
              }
              if( writeLesTen.value === "وَيۡلُُ" ){
           
               wail.play(); 
              }
              if( writeLesTen.value === "يَوۡمٍ" ){
           
               yaom.play(); 
              }
              if( writeLesTen.value === "يَرَهٗ" ){
           
               yara.play(); 
              }
              if( writeLesTen.value === "حَاسِدٍ" ){
           
              haasid .play(); 
              }
              if( writeLesTen.value === "حَافِظُُ" ){
           
               haafiz.play(); 
              }
              if( writeLesTen.value === "دَافِقٍ" ){
           
               dafiq.play(); 
              }
              if( writeLesTen.value === "شَاهِدٍ" ){
           
               shahid.play(); 
              }
              if( writeLesTen.value === "عَابِدُُ" ){
           
               abid.play(); 
              }
              if( writeLesTen.value === "غَاسِقٍ" ){
           
              ghasiq .play(); 
              }
              if( writeLesTen.value === "نَاصِرٍ" ){
           
               nasir.play(); 
              }
              if( writeLesTen.value === "وَالِدٍ" ){
           
              walid .play(); 
              }
              if( writeLesTen.value === "اَكِيۡدُ" ){
           
              akeed .play(); 
              }
              if( writeLesTen.value === "يَخَافُ" ){
           
               yakhaf.play(); 
              }
              if( writeLesTen.value === "يَدٰهُ" ){
           
               yadah.play(); 
              }
              if( writeLesTen.value === "يُقَالُ" ){
           
               youqal.play(); 
              }
              if( writeLesTen.value === "تُرٰبًا" ){
           
               toraban.play(); 
              }
              if( writeLesTen.value === "حِسَابًا" ){
           
               hisaba.play(); 
              }
              if( writeLesTen.value === "سُبَاتًا" ){
           
               sobata.play(); 
              }
              if( writeLesTen.value === "سِرَاجًا" ){
           
               siraja.play(); 
              }
              if( writeLesTen.value === "سَلٰمُُ" ){
           
               salamon.play(); 
              }
              if( writeLesTen.value === "شِدَادًا" ){
           
               shidadan.play(); 
              }
              if( writeLesTen.value === "شَرَابًا" ){
           
               sharaba.play(); 
              }
              if( writeLesTen.value === "صَوَابًا" ){
           
               soaban.play(); 
              }
              if( writeLesTen.value === "طَعَامٍ" ){
           
               toaam.play(); 
              }
              if( writeLesTen.value === "عَذَابًا" ){
           
               azaban.play(); 
              }
              if( writeLesTen.value === "عَطَآءً" ){
           
               atoaaa.play(); 
              }
              if( writeLesTen.value === "غُثَآءً" ){
           
               ghosa.play(); 
              }
              if( writeLesTen.value === "كِتٰبًا" ){
           
               kitaban.play(); 
              }
              if( writeLesTen.value === "كِرَامًا" ){
           
               kirama.play(); 
              }
              if( writeLesTen.value === "لِبَاسًا" ){
           
               libasa.play(); 
              }
              if( writeLesTen.value === "لِسَانًا" ){
           
               lisanan.play(); 
              }
              if( writeLesTen.value === "مَاٰبًا" ){
           
               maabaa.play(); 
              }
              if( writeLesTen.value === "مُطَاعٍ" ){
           
               mutaa.play(); 
              }
              if( writeLesTen.value === "مَعَاشًا" ){
           
               maasha.play(); 
              }
              if( writeLesTen.value === "مَفَازًا" ){
           
               mafazan.play(); 
              }
              if( writeLesTen.value === "مِهٰدًا" ){
           
               mihada.play(); 
              }
              if( writeLesTen.value === "نَبَاتًا" ){
           
               nabata.play(); 
              }
              if( writeLesTen.value === "رَسُوۡلٍ" ){
           
               rasool.play(); 
              }
              if( writeLesTen.value === "ثُبُوۡرًا" ){
           
               soboran.play(); 
              }
              if( writeLesTen.value === "وِفَاقًا" ){
           
               wifaqa.play(); 
              }
              if( writeLesTen.value === "شُهُوۡدُُ" ){
           
               shohood.play(); 
              }
              if( writeLesTen.value === "قُعُوۡدُُ" ){
           
               qoood.play(); 
              }
              if( writeLesTen.value === "وُجُوۡهُُ" ){
           
               wojoh.play(); 
              }
              if( writeLesTen.value === "اَثِيۡمٍ" ){
           
               aseem.play(); 
              }
              if( writeLesTen.value === "اَلِيۡمِِ" ){
           
               aleem.play(); 
              }
              if( writeLesTen.value === "بَصِيۡرََا" ){
           
               basiran.play(); 
              }
              if( writeLesTen.value === "خَبِيۡرُُ" ){
           
               khabir.play(); 
              }
              if( writeLesTen.value === "رَحِيۡقِِ" ){
           
               rahiq.play(); 
              }
              if( writeLesTen.value === "شَهِيۡدُُ" ){
           
               shahid.play(); 
              }
              if( writeLesTen.value === "عَظِيۡمُُ" ){
           
               azim.play(); 
              }
              if( writeLesTen.value === "قَرِيۡبًا" ){
           
               qareeba.play(); 
              }
              if( writeLesTen.value === "كَرِيۡمِِ" ){
           
               karim.play(); 
              }
              if( writeLesTen.value === "مَجِيۡدُُ" ){
           
               majid.play(); 
              }
              if( writeLesTen.value === "مَوۡءٗدَةُُ" ){
           
               maodaa.play(); 
              }
              if( writeLesTen.value === "مَوۡضُوۡعةُُ" ){
           
               maozoaa.play(); 
              }
              if( writeLesTen.value === "مَوَازِيۡنُهٗ" ){
           
               mawazinoh.play(); 
              }
              if( writeLesTen.value === "عِيۡشَةٍ" ){
           
               aeeshtin.play(); 
              }
              if( writeLesTen.value === "قُرَيۡشٍ" ){
           
              quaraish .play(); 
              }
              if( writeLesTen.value === "ذٰلِكَ" ){
           
               zalika.play(); 
              }
              if( writeLesTen.value === "يَسِيۡرا" ){
           
              yaseeraa .play(); 
              }
              if( writeLesTen.value === "يَتِيۡمًا" ){
           
               yatimaa.play(); 
              }
              if( writeLesTen.value === "مُحِيۡطُُ" ){
           
               moheet.play(); 
              }
              
              
              
              
              
              
             
             
             
             
             
              else{
               console.log("wrong")
              }
      
          })
         })



         //start lesson - 11 //



         let writeLesElven = document.getElementById("writeles-11");
         let innerDivLesElven = document.querySelectorAll(".innerles-11");


         let aieenaaa = document.getElementById("audio-aieen-aaa");
         let baaaaa = document.getElementById("audio-baa-aaa");
         let dalaaa = document.getElementById("audio-dal-aaa");
         let faaaaa = document.getElementById("audio-faa-aaa");
         let ghaieenaaa = document.getElementById("audio-ghaieen-aaa");
         let hamzaaaa = document.getElementById("audio-hamza-aaa");
         let kaafaaa = document.getElementById("audio-kaaf-aaa");
         let koaafaaa = document.getElementById("audio-koaaf-aaa");
         let laamaaaa = document.getElementById("audio-laam-aaa");
         let meemaaa = document.getElementById("audio-meem-aaa");
         let raaaaa = document.getElementById("audio-raa-aaa");
         let saaaaa = document.getElementById("audio-saa-aaa");
         let seenaaa = document.getElementById("audio-seen-aaa");
         let sheenaaa = document.getElementById("audio-sheen-aaa");
         let soaadaaa = document.getElementById("audio-soaad-aaa");
         let taaaaa = document.getElementById("audio-taa-aaa");
         let toaaaaa = document.getElementById("audio-toaa-aaa");
         let zaaaaa = document.getElementById("audio-zaa-aaa");
         let zalaaa = document.getElementById("audio-zal-aaa");
         let zoaaaaa = document.getElementById("audio-zoaa-aaa");
         let zoaadaaa = document.getElementById("audio-zoaad-aaa");
         
        
         
         
         
         
         let innerDivLesElvenArray = Array.from(innerDivLesElven);
         
          let stringleselven = " ";
         
          innerDivLesElvenArray.forEach(btn => {
             
             btn.addEventListener("click", (e) => {
         
               writeLesElven.value = e.target.innerText;


               if(  writeLesElven.value === "اَبۡ اِبۡ اُبۡ" ){
           
                  baaaaa.play(); 
                 }
                 if(  writeLesElven.value === "اَعۡ اِعۡ اُعۡ" ){
           
                  aieenaaa.play(); 
                 }
                 if(  writeLesElven.value === "اَدۡ اِدۡ اُدۡ" ){
           
                  dalaaa.play(); 
                 }
                 if(  writeLesElven.value === "اَفۡ اِفۡ اُفۡ" ){
           
                  faaaaa.play(); 
                 }
                 if(  writeLesElven.value === "اَغۡ اِغۡ اُغۡ" ){
           
                  ghaieenaaa.play(); 
                 }
                 if(  writeLesElven.value === "اَصۡ اِصۡ اُصۡ" ){
           
                  soaadaaa.play(); 
                 }
                 if(  writeLesElven.value === "اَكۡ اِكۡ اُكۡ" ){
           
                  kaafaaa.play(); 
                 }
                 if(  writeLesElven.value === "اَقۡ اِقۡ اُقۡ" ){
           
                  koaafaaa.play(); 
                 }
                 if(  writeLesElven.value === "اَلۡ اِلۡ اُلۡ" ){
           
                  laamaaaa.play(); 
                 }
                 if(  writeLesElven.value === "اَمۡ اِمۡ اُمۡ" ){
           
                  meemaaa.play(); 
                 }
                 if(  writeLesElven.value === "اَرۡ اِرۡ اُرۡ" ){
           
                  raaaaa.play(); 
                 }
                 if(  writeLesElven.value === "اَثۡ اِثۡ اُثۡ" ){
           
                  saaaaa.play(); 
                 }
                 if(  writeLesElven.value === "اَسۡ اِسۡ اُسۡ" ){
           
                  seenaaa.play(); 
                 }
                 if(  writeLesElven.value === "اَشۡ اِشۡ اُشۡ" ){
           
                  sheenaaa.play(); 
                 }
                 if(  writeLesElven.value === "اَتۡ اِتۡ اُتۡ" ){
           
                  taaaaa.play(); 
                 }
                 if(  writeLesElven.value === "اَطۡ اِطۡ اُطۡ" ){
           
                  toaaaaa.play(); 
                 }
                 if(  writeLesElven.value === "اَزۡ اِزۡ اُزۡ" ){
           
                  zaaaaa.play(); 
                 }
                 if(  writeLesElven.value === "اَذۡ اِذۡ اُذۡ" ){
           
                  zalaaa.play(); 
                 }
                 if(  writeLesElven.value === "اَظۡ اِظۡ اُظۡ" ){
           
                  zoaaaaa.play(); 
                 }
                 if(  writeLesElven.value === "اَضۡ اِضۡ اُضۡ" ){
           
                  zoaadaaa.play(); 
                 }
                 
                 
                 
                 
                 
                 
                 
                
                
                
                
                
                 else{
                  console.log("wrong")
                 }


               


              
         
             })
            })




            //  start lesson-12  //


            let writeLesTwelve = document.getElementById("writeles-12");
         let innerDivLesTwelve = document.querySelectorAll(".innerles-12");


         let anta = document.getElementById("audio-anta");
         let aihdi = document.getElementById("audio-aihdi");
         let bado = document.getElementById("audio-bado");
         let batsha = document.getElementById("audio-batsha");
         let sayaa = document.getElementById("audio-sayaa");
         let kunt = document.getElementById("audio-kunt");
         let last = document.getElementById("audio-last");
         let quaran = document.getElementById("audio-quaran");
         let barda = document.getElementById("audio-barda");
         let mirya = document.getElementById("audio-mirya");
         let irji = document.getElementById("audio-irji");
         let irbah = document.getElementById("audio-irbah");
         let misr = document.getElementById("audio-misr");
         let qitr = document.getElementById("audio-qitr");
         let qiartasen = document.getElementById("audio-qiartasen");
         let mirsaden = document.getElementById("audio-mirsaden");
         let firqatin = document.getElementById("audio-firqatin");
         let irham = document.getElementById("audio-irham");
         let irtabtum = document.getElementById("audio-irtabtum");
         let anzir = document.getElementById("audio-anzir");
         let khairoo = document.getElementById("audio-khairoo");
         let fasbir = document.getElementById("audio-fasbir");
         let sabra = document.getElementById("audio-sabra");
         let yasir = document.getElementById("audio-yasir");
         let ghulba = document.getElementById("audio-ghulba");
         let fasl = document.getElementById("audio-fasl");
         let qadhan = document.getElementById("audio-qadhan");
         let kadhan = document.getElementById("audio-kadhan");
         let kaasaa = document.getElementById("audio-kaasaa");
         let yughni = document.getElementById("audio-yughni");
         let laghwa = document.getElementById("audio-laghwa");
         let misk = document.getElementById("audio-misk");
         let nakhlan = document.getElementById("audio-nakhlan");
         let nashtan = document.getElementById("audio-nashtan");
         let nafs = document.getElementById("audio-nafs");
         let naqan = document.getElementById("audio-naqan");
         let yousran = document.getElementById("audio-yousran");
         let abqaa = document.getElementById("audio-abqaa");
         let adan = document.getElementById("audio-adan");
         let ashar = document.getElementById("audio-ashar");
         let yasaaa = document.getElementById("audio-yasaaa");
         let yatlo = document.getElementById("audio-yatlo");
         let yadooo = document.getElementById("audio-yadooo");
         let tajree = document.getElementById("audio-tajree");
         let yahdi = document.getElementById("audio-yahdi");
         let alqat = document.getElementById("audio-alqat");
         let amhil = document.getElementById("audio-amhil");
         let iqraaa = document.getElementById("audio-iqraaa");
         let farghab = document.getElementById("audio-farghab");
         let fansab = document.getElementById("audio-fansab");
         let alham = document.getElementById("audio-alham");
         let anshar = document.getElementById("audio-anshar");
         let ankaza = document.getElementById("audio-ankaza");
         let damdam = document.getElementById("audio-damdam");
         let asas = document.getElementById("audio-asas");
         let aabud = document.getElementById("audio-aabud");
         let nabud = document.getElementById("audio-nabud");
         let yakhrojo = document.getElementById("audio-yakhrojo");
         let yashrab = document.getElementById("audio-yashrab");
         let yahsab = document.getElementById("audio-yahsab");
         let yashhad = document.getElementById("audio-yashhad");
         let tarhaq = document.getElementById("audio-tarhaq");
         let tarifoo = document.getElementById("audio-tarifoo");
         let oqsim = document.getElementById("audio-oqsim");
         let hoshirat = document.getElementById("audio-hoshirat");
         let sotihat = document.getElementById("audio-sotihat");
         let  koshitat= document.getElementById("audio-koshitat");
         let noshirat = document.getElementById("audio-noshirat");
         let asarn = document.getElementById("audio-asarn");
         let  wasatna= document.getElementById("audio-wasatna");
         let faraghta = document.getElementById("audio-faraghta");
         let tiaton = document.getElementById("audio-tiaton");
         let yusqaona = document.getElementById("audio-yusqaona");
         let yafaloon = document.getElementById("audio-yafaloon");
         let yaamaloon = document.getElementById("audio-yaamaloon");
         let yaaalamoon = document.getElementById("audio-yaaalamoon");
         let yazhakoona = document.getElementById("audio-yazhakoona");
         let yaksiboona = document.getElementById("audio-yaksiboona");
         let yadkhuloona = document.getElementById("audio-yadkhuloona");
         let yanzooroona = document.getElementById("audio-yanzooroona");
         let anzarnaa = document.getElementById("audio-anzarnaa");
         let anzalnaa = document.getElementById("audio-anzalnaa");
         let khalaqna = document.getElementById("audio-khalaqna");
         let rafaana = document.getElementById("audio-rafaana");
         let wazaanaa = document.getElementById("audio-wazaanaa");
         let ibratan = document.getElementById("audio-ibratan");
         let zajratan = document.getElementById("audio-zajratan");
         let wanhar = document.getElementById("audio-wanhar");
        
         
         
         
         
         
         let innerDivLesTwelveArray = Array.from(innerDivLesTwelve);
         
          let stringlesetwelve = " ";
         
          innerDivLesTwelveArray.forEach(btn => {
             
             btn.addEventListener("click", (e) => {
         
               writeLesTwelve.value = e.target.innerText;


               if( writeLesTwelve.value === "اَنۡتَ" ){
           
                  anta.play(); 
                 }
                 if( writeLesTwelve.value === "اِهۡدِ" ){
           
                  aihdi.play(); 
                 }
                 if( writeLesTwelve.value === "بَعۡدُ" ){
           
                  bado.play(); 
                 }
                 if( writeLesTwelve.value === "بَطۡشَ" ){
           
                  batsha.play(); 
                 }
                 if( writeLesTwelve.value === "سَعۡیَ" ){
           
                  sayaa.play(); 
                 }
                 if( writeLesTwelve.value === "كُنۡتُ" ){
           
                  kunt.play(); 
                 }
                 if( writeLesTwelve.value === "لَسۡتَ" ){
           
                  last.play(); 
                 }
                 if( writeLesTwelve.value === "قُرۡاٰنُُ" ){
           
                  quaran.play(); 
                 }
                 if( writeLesTwelve.value === "بَرۡدًا" ){
           
                  barda.play(); 
                 }
                 if( writeLesTwelve.value === "مِرۡيَةٍ" ){
           
                  mirya.play(); 
                 }
                 if( writeLesTwelve.value === "اِرۡجِعۡ" ){
           
                  irji.play(); 
                 }
                 if( writeLesTwelve.value === "اِرۡبَةِ" ){
           
                  irbah.play(); 
                 }
                 if( writeLesTwelve.value === "مِصۡرَ" ){
           
                  misr.play(); 
                 }
                 if( writeLesTwelve.value === "قِطۡرِ" ){
           
                  qitr.play(); 
                 }
                 if( writeLesTwelve.value === "قِرۡطَاسٍ" ){
           
                  qiartasen.play(); 
                 }
                 if( writeLesTwelve.value === "مِرۡصَادٍ" ){
           
                  mirsaden.play(); 
                 }
                 if( writeLesTwelve.value === "فِرۡقَةٍ" ){
           
                  firqatin.play(); 
                 }
                 if( writeLesTwelve.value === "اِرۡحَمۡ" ){
           
                  irham.play(); 
                 }
                 if( writeLesTwelve.value === "اِرۡتَبۡتُمۡ" ){
           
                  irtabtum.play(); 
                 }
                 if( writeLesTwelve.value === "اَنۡذِرۡ" ){
           
                  anzir.play(); 
                 }
                 if( writeLesTwelve.value === "خَيۡرُُ" ){
           
                  khairoo.play(); 
                 }
                 if( writeLesTwelve.value === "فاصۡبِرۡ" ){
           
                  fasbir.play(); 
                 }
                 if( writeLesTwelve.value === "صَبۡرًا" ){
           
                  sabra.play(); 
                 }
                 if( writeLesTwelve.value === "يَسِيۡرُُ" ){
           
                  yasir.play(); 
                 }
                 if( writeLesTwelve.value === "غُلۡبًا" ){
           
                  ghulba.play(); 
                 }
                 if( writeLesTwelve.value === "فَصۡلُُ" ){
           
                  fasl.play(); 
                 }
                 if( writeLesTwelve.value === "قَدۡحًا" ){
           
                  qadhan.play(); 
                 }
                 if( writeLesTwelve.value === "كَاۡسًا" ){
           
                  kaasaa.play(); 
                 }
                 if( writeLesTwelve.value === "كَدۡحًا" ){
           
                  kadhan.play(); 
                 }
                 if( writeLesTwelve.value === "يُغۡنِیۡ" ){
           
                  yughni.play(); 
                 }
                 if( writeLesTwelve.value === "لَغۡوًا" ){
           
                  laghwa.play(); 
                 }
                 if( writeLesTwelve.value === "مِسۡكُُ" ){
           
                  misk.play(); 
                 }
                 if( writeLesTwelve.value === "نَخۡلًا" ){
           
                  nakhlan.play(); 
                 }
                 if( writeLesTwelve.value === "نَشۡطًا" ){
           
                  nashtan.play(); 
                 }
                 if( writeLesTwelve.value === "نَفۡسٍ" ){
           
                  nafs.play(); 
                 }
                 if( writeLesTwelve.value === "نَقۡعًا" ){
           
                  naqan.play(); 
                 }
                 if( writeLesTwelve.value === "يُسۡرًا" ){
           
                  yousran.play(); 
                 }
                 if( writeLesTwelve.value === "اَبۡقٰی" ){
           
                  abqaa.play(); 
                 }
                 if( writeLesTwelve.value === "عَدۡنٍ" ){
           
                  adan.play(); 
                 }
                 if( writeLesTwelve.value === "يَسۡعٰی" ){
           
                  yasaaa.play(); 
                 }
                 if( writeLesTwelve.value === "يَتۡلُوۡا" ){
           
                  yatlo.play(); 
                 }
                 if( writeLesTwelve.value === "يَدۡعُوۡا" ){
           
                  yadooo.play(); 
                 }
                 if( writeLesTwelve.value === "تَجۡرِیۡ" ){
           
                  tajree.play(); 
                 }
                 if( writeLesTwelve.value === "يَهۡدِی٘" ){
           
                  yahdi.play(); 
                 }
                 if( writeLesTwelve.value === "اَلۡقَتۡ" ){
           
                  alqat.play(); 
                 }
                 if( writeLesTwelve.value === "اَمۡهِلۡ" ){
           
                  amhil.play(); 
                 }
                 if( writeLesTwelve.value === "اِقۡرَاۡ" ){
           
                  iqraaa.play(); 
                 }
                 if( writeLesTwelve.value === "فَارۡغَبۡ" ){
           
                  farghab.play(); 
                 }
                 if( writeLesTwelve.value === "فَنۡصَبۡ" ){
           
                  fansab.play(); 
                 }
                 if( writeLesTwelve.value === "وَانۡحَرۡ" ){
           
                  wanhar.play(); 
                 }
                 if( writeLesTwelve.value === "اَنۡشَرَ" ){
           
                  anshar.play(); 
                 }
                 if( writeLesTwelve.value === "اَنۡقَضَ" ){
           
                  ankaza.play(); 
                 }
                 if( writeLesTwelve.value === "دَمۡدَمَ" ){
           
                  damdam.play(); 
                 }
                 if( writeLesTwelve.value === "عَسۡعَسَ" ){
           
                  asas.play(); 
                 }
                 if( writeLesTwelve.value === "اَعۡبُدُ" ){
           
                  aabud.play(); 
                 }
                 if( writeLesTwelve.value === "نَعۡبُدُ" ){
           
                  nabud.play(); 
                 }
                 if( writeLesTwelve.value === "يَخۡرُجُ" ){
           
                  yakhrojo.play(); 
                 }
                 if( writeLesTwelve.value === "يَشۡرَبُ" ){
           
                  yashrab.play(); 
                 }
                 if( writeLesTwelve.value === "يَحۡسَبُ" ){
           
                  yahsab.play(); 
                 }
                 if( writeLesTwelve.value === "يَشۡهَدُ" ){
           
                  yashhad.play(); 
                 }
                 if( writeLesTwelve.value === "تَرۡهَقُ" ){
           
                  tarhaq.play(); 
                 }
                 if( writeLesTwelve.value === "تَعۡرِفُ" ){
           
                  tarifoo.play(); 
                 }
                 if( writeLesTwelve.value === "اُقۡسِمُ" ){
           
                  oqsim.play(); 
                 }
                 if( writeLesTwelve.value === "حُشِرَتۡ" ){
           
                  hoshirat.play(); 
                 }
                 if( writeLesTwelve.value === "سُطِحَتۡ" ){
           
                  sotihat.play(); 
                 }
                 if( writeLesTwelve.value === "كُشِطَتۡ" ){
           
                  koshitat.play(); 
                 }
                 if( writeLesTwelve.value === "نُشِرَتۡ" ){
           
                  noshirat.play(); 
                 }
                 if( writeLesTwelve.value === "اَثَرۡنَ" ){
           
                  asarn.play(); 
                 }
                 if( writeLesTwelve.value === "وَسَطۡنَ" ){
           
                  wasatna.play(); 
                 }
                 if( writeLesTwelve.value === "فَرَغۡتَ" ){
           
                  faraghta.play(); 
                 }
                 if( writeLesTwelve.value === "تَاۡتُوۡنَ" ){
           
                  tiaton.play(); 
                 }
                 if( writeLesTwelve.value === "يُسۡقَوۡنَ" ){
           
                  yusqaona.play(); 
                 }
                 if( writeLesTwelve.value === "يَفۡعَلُوۡنَ" ){
           
                  yafaloon.play(); 
                 }
                 if( writeLesTwelve.value === "يَعۡمَلُوۡنَ" ){
           
                  yaamaloon.play(); 
                 }
                 if( writeLesTwelve.value === "يَلۡعَمُوۡنَ" ){
           
                  yaaalamoon.play(); 
                 }
                 if( writeLesTwelve.value === "يَضۡحَكُوۡنَ" ){
           
                  yazhakoona.play(); 
                 }
                 if( writeLesTwelve.value === "يَكۡسِبُوۡنۡ" ){
           
                  yaksiboona.play(); 
                 }
                 if( writeLesTwelve.value === "يَدۡخُلُوۡنَ" ){
           
                  yadkhuloona.play(); 
                 }
                 if( writeLesTwelve.value === "يَنۡظُرُوۡنَ" ){
           
                  yanzooroona.play(); 
                 }
                 if( writeLesTwelve.value === "اَنۡذَرۡنَا" ){
           
                  anzarnaa.play(); 
                 }
                 if( writeLesTwelve.value === "اَنۡزَلۡنَا" ){
           
                  anzalnaa.play(); 
                 }
                 if( writeLesTwelve.value === "خَلَقۡنَا" ){
           
                  khalaqna.play(); 
                 }
                 if( writeLesTwelve.value === "رَفَعۡنَا" ){
           
                  rafaana.play(); 
                 }
                 if( writeLesTwelve.value === "وَضَعۡنَا" ){
           
                  wazaanaa.play(); 
                 }
                 if( writeLesTwelve.value === "عِبۡرَةً" ){
           
                  ibratan.play(); 
                 }
                 if( writeLesTwelve.value === "زَجۡرَةُُ" ){
           
                  zajratan.play(); 
                 }
                 
                

                 
                else{
                  console.log("wrong")
                 }
         
             })
            })



            //start lesoon-13 //



            let writeLesTherteen = document.getElementById("writeles-13");
         let innerDivLesTherteen = document.querySelectorAll(".innerles-13");


         let baashad = document.getElementById("audio-baa-shad");
         let dalshad = document.getElementById("audio-dal-shad");
         let koaafshad = document.getElementById("audio-koaaf-shad");
         let lamshad = document.getElementById("audio-lam-shad");
         let meemshad = document.getElementById("audio-meem-shad");
         let noonshad = document.getElementById("audio-noon-shad");
         let raashad = document.getElementById("audio-raa-shad");
         let saashad = document.getElementById("audio-saa-shad");
         let seenshad = document.getElementById("audio-seen-shad");
         let taashad = document.getElementById("audio-taa-shad");
         let zaashad = document.getElementById("audio-zaa-shad");
         let zalshad = document.getElementById("audio-zal-shad");
        
         
         
         
         
         let innerDivLesTherteenArray = Array.from(innerDivLesTherteen);
         
          let stringlesetherteen = " ";
         
          innerDivLesTherteenArray.forEach(btn => {
             
             btn.addEventListener("click", (e) => {
         
               writeLesTherteen.value = e.target.innerText;


               if( writeLesTherteen.value === "اَبَّ اِبَّ اُبَّ" ){
           
                  baashad.play(); 
                 }
                 if( writeLesTherteen.value === "اَدَّ اِدَّ اُدَّ" ){
           
                  dalshad.play(); 
                 }
                 if( writeLesTherteen.value === "اَقَّ اِقَّ اُقَّ" ){
           
                  koaafshad.play(); 
                 }
                 if( writeLesTherteen.value === "اَلَّ اِلَّ اُلَّ" ){
           
                  lamshad.play(); 
                 }
                 if( writeLesTherteen.value === "اَمَّ اِمَّ اُمَّ" ){
           
                  meemshad.play(); 
                 }
                 if( writeLesTherteen.value === "اَنَّ اِنَّ اُنَّ" ){
           
                  noonshad.play(); 
                 }
                 if( writeLesTherteen.value === "اَرَّ اِرَّ اُرَّ" ){
           
                  raashad.play(); 
                 }
                 if( writeLesTherteen.value === "اَثَّ اِثَّ اُثَّ" ){
           
                  saashad.play(); 
                 }
                 if( writeLesTherteen.value === "اَسَّ اِسَّ اُسَّ" ){
           
                  seenshad.play(); 
                 }
                 if( writeLesTherteen.value === "اَتَّ اِتَّ اُتَّ" ){
           
                  taashad.play(); 
                 }
                 if( writeLesTherteen.value === "اَزَّ اِزَّ اُزَّ" ){
           
                  zaashad.play(); 
                 }
                 if( writeLesTherteen.value === "اَذَّ اِذَّ اُذَّ" ){
           
                  zalshad.play(); 
                 }
                

                 
                else{
                  console.log("wrong")
                 }
         
             })
            })



   