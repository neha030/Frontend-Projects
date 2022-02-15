const wrapper = document.querySelector(".wrapper"),
inputPart = wrapper.querySelector(".input-part"),
infoTxt = inputPart.querySelector("p"),
inputField = inputPart.querySelector("input"),
locationBtn = inputPart.querySelector("button");

inputField.addEventListener("keyup",e=>{
    if(e.key == "Enter" && inputField.value!="")
    {
        requestApi(inputField.value);
    }
});

function requestApi(city)
{
    let api =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=6f18de09e2d0f96a3b185d608477eee0`;
    infoTxt.innerText = "Getting weather details...";
    infoTxt.classList.add("pending");
    fetch(api).then(response => response.json()).then(result => weatherDetails(result));
}

function weatherDetails(info)
{
   console.log(info);
}
