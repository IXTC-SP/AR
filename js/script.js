AFRAME.registerComponent('ixtc-sample', {
            
    init: function() {
        this.el.addEventListener('model-loaded', () => {
            let modelState = false; 
            if (modelState) {
                this.el.addEventListener('click', function(){
                    console.log("I was triggered");
                    const ixtcMarker = document.querySelector("#ixtcMarker");
                    const ixtcmodel = document.querySelector("#ixtcModel");
                    
                    ixtcMarker.addEventListener('click', function(ev, target){
                        const intersectedElement = ev && ev.detail && ev.detail.intersectedEl;
                        if (ixtcmodel && intersectedElement === ixtcmodel) {
                            window.location = 'https://www.google.com.sg/';
                        }
                    });
                });
                modelState = false; 
            }
        });
    }, 

    update: function() {}, 
});


/*function myIXTCProg(){
    var modal = document.getElementById("ixtcDesc");
    var btn = document.getElementById("btnIXTC");
    var span = document.getElementsByClassName("close1")[0]; 

    btn.onclick = function(){
        modal.style.display = "block"; 
    }

    span.onclick = function(){
        modal.style.display = "none"; 
    }

    window.onclick = function(event){
        if(event.target == modal){
            modal.style.display = "none"; 
        }
    }
}

function myFIRCProg(){
    var modal2 = document.getElementById("fircDesc"); 
    var btn2 = document.getElementById("btnFIRC"); 
    var span2 = document.getElementsByClassName("close2")[0]; 

    btn2.onclick = function(){
        modal2.style.display = "block"; 
    }

    span2.onclick = function(){
        modal2.style.display = "none"; 
    }

    window.onclick = function(event){
        if(event.target == modal2){
            modal2.style.display = "none"; 
        }
    }
}

 AFRAME.registerComponent('open-ixtc-modal', {
     init: function(){
         this.el.addEventListener('model-loaded', () => {
             this.update(); 
         });
     }, 
     update: function(){
         this.el.addEventListener('click', function(){
            var ixtcModal = document.getElementById("ixtcDesc");
            ixtcModal.style.display = "block"; 
         })
     }
}); 


AFRAME.registerComponent('ixtc-modal', {
    init: function(){
        this.el.addEventListener('click', function(){
           var ixtcModal = document.getElementById("ixtcDesc");
           ixtcModal.style.display = "block"; 
        });
    }
}); 
*/


