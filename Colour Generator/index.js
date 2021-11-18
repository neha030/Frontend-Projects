const color=document.querySelector('button');
const h1=document.querySelector('h1');
const rndmcolor = () =>
{
    const r = Math.floor(Math.random()*255);
    const g = Math.floor(Math.random()*255);
    const b = Math.floor(Math.random()*255);

    return `rgb(${r},${g},${b})`;
}
color.addEventListener('click',function()
{
  const newcolor = rndmcolor();
  document.body.style.background = newcolor;
  console.log('hey');
  h1.innerText=`The Colour is : ${newcolor}`;
}); 

