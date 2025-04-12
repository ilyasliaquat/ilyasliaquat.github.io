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
       
       
       
       else{
        console.log("wrong")
       }
   
    })

   

})



// start lesson 1  //
document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener("scroll", function () {
        let input = document.getElementById("write");
        
        if (input) {  // Check if input is not null
            if (window.scrollY > 300) {
                input.style.position = "fixed";
                input.style.right = "2px";
                input.style.top = "79px";
            } else {
                input.style.position = "static";
            }
        }
    });
});


// start lesson 2 //

document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener("scroll", function () {
        let input = document.getElementById("writele-2");
        
        if (input) {  // Check if input is not null
            if (window.scrollY > 740) {
                input.style.position = "fixed";
                input.style.right = "2px";
                input.style.top = "79px";
            } else {
                input.style.position = "static";
            }
        }
    });
});



// this fuction used only lesson 4 //

document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener("scroll", function () {
        let input = document.getElementById("writeles-4");
        
        if (input) {  // Check if input is not null
            if (window.scrollY > 740) {
                input.style.position = "fixed";
                input.style.right = "2px";
                input.style.top = "79px";
            } else {
                input.style.position = "static";
            }
        }
    });
});
    // this is used for lesson-5 //

    document.addEventListener("DOMContentLoaded", function () {
        window.addEventListener("scroll", function () {
            let input = document.getElementById("writeles-5");
            
            if (input) {  // Check if input is not null
                if (window.scrollY > 740) {
                    input.style.position = "fixed";
                    input.style.right = "2px";
                    input.style.top = "79px";
                } else {
                    input.style.position = "static";
                }
            }
        });
    });


        // this is used for lesson -6  //


        document.addEventListener("DOMContentLoaded", function () {
            window.addEventListener("scroll", function () {
                let input = document.getElementById("writeles-6");
                
                if (input) {  // Check if input is not null
                    if (window.scrollY > 740) {
                        input.style.position = "fixed";
                        input.style.right = "2px";
                        input.style.top = "79px";
                    } else {
                        input.style.position = "static";
                    }
                }
            });
        });




            // start lesson - 7 //



            document.addEventListener("DOMContentLoaded", function () {
                window.addEventListener("scroll", function () {
                    let input = document.getElementById("writeles-7");
                    
                    if (input) {  // Check if input is not null
                        if (window.scrollY > 740) {
                            input.style.position = "fixed";
                            input.style.right = "2px";
                            input.style.top = "79px";
                        } else {
                            input.style.position = "static";
                        }
                    }
                });
            });


                

                //start lesson-8 //



                document.addEventListener("DOMContentLoaded", function () {
                    window.addEventListener("scroll", function () {
                        let input = document.getElementById("writeles-8");
                        
                        if (input) {  // Check if input is not null
                            if (window.scrollY > 740) {
                                input.style.position = "fixed";
                                input.style.right = "2px";
                                input.style.top = "79px";
                            } else {
                                input.style.position = "static";
                            }
                        }
                    });
                });

                // start lesson -9  //

                document.addEventListener("DOMContentLoaded", function () {
                    window.addEventListener("scroll", function () {
                        let input = document.getElementById("writeles-9");
                        
                        if (input) {  // Check if input is not null
                            if (window.scrollY > 740) {
                                input.style.position = "fixed";
                                input.style.right = "2px";
                                input.style.top = "79px";
                            } else {
                                input.style.position = "static";
                            }
                        }
                    });
                });


                // start lesson-10 //


                document.addEventListener("DOMContentLoaded", function () {
                    window.addEventListener("scroll", function () {
                        let input = document.getElementById("writeles-10");
                        
                        if (input) {  // Check if input is not null
                            if (window.scrollY > 740) {
                                input.style.position = "fixed";
                                input.style.right = "2px";
                                input.style.top = "79px";
                            } else {
                                input.style.position = "static";
                            }
                        }
                    });
                });
                

                // start lesson -11 //


                document.addEventListener("DOMContentLoaded", function () {
                    window.addEventListener("scroll", function () {
                        let input = document.getElementById("writeles-11");
                        
                        if (input) {  // Check if input is not null
                            if (window.scrollY > 740) {
                                input.style.position = "fixed";
                                input.style.right = "2px";
                                input.style.top = "79px";
                            } else {
                                input.style.position = "static";
                            }
                        }
                    });
                });



                //start lesson-12//


                
                document.addEventListener("DOMContentLoaded", function () {
                    window.addEventListener("scroll", function () {
                        let input = document.getElementById("writeles-12");
                        
                        if (input) {  // Check if input is not null
                            if (window.scrollY > 740) {
                                input.style.position = "fixed";
                                input.style.right = "2px";
                                input.style.top = "79px";
                            } else {
                                input.style.position = "static";
                            }
                        }
                    });
                });




                // start lesson-13 //

                document.addEventListener("DOMContentLoaded", function () {
                    window.addEventListener("scroll", function () {
                        let input = document.getElementById("writeles-13");
                        
                        if (input) {  // Check if input is not null
                            if (window.scrollY > 640) {
                                input.style.position = "fixed";
                                input.style.right = "2px";
                                input.style.top = "79px";
                            } else {
                                input.style.position = "static";
                            }
                        }
                    });
                });
                
 











