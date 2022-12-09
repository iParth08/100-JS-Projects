
    const form = document.getElementById("msg-form");
    let textmsg = document.getElementById("text-msg");
    let alertBox = document.getElementById("alert");
    let passMsg = document.getElementById("msg-box");

    form.addEventListener('submit', function(e){
        e.preventDefault(); //prevent submission of form

        let msg = textmsg.value;
        // alert("Clicked");

        if(msg == ""){
            alertBox.classList.remove("hide");

            //hide alert msg after 1000ms
            setTimeout(()=>{
                alertBox.classList.add("hide");
            }, 1000);
        }
        else{
            passMsg.innerText = msg;
        }

    });
