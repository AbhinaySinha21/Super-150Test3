let inp=document.querySelector("#itext");
inp.setSelectionRange(0,0);
inp.focus();
let i=0;
let btnadd=document.querySelector("#plus");
btnadd.addEventListener("click",()=>{
    document.querySelector(".contentbox").style.visibility="visible";
});
let sub=document.querySelector("#sub");
sub.addEventListener("click",(e)=>{
    e.preventDefault();
    let inpu=document.querySelector("#itext");
    console.log(inpu.value);
    document.querySelector(".contentbox").style.visibility="hidden";
    let arr=document.querySelectorAll(".y");
    let col="blue";
    arr.forEach(dem=>{
        dem.addEventListener("click",(el)=>{
            col=el.target.id;
        });
    })
    console.log(col);
    let hed=document.createElement("header");
            hed.className="head";
            hed.style.backgroundColor=col;
            let mid=document.createElement("div");
            mid.className="mid";
            mid.innerHTML="#cGhu"+i;
            i++;
            let des=document.createElement("div");
            des.innerHTML=inpu.value;
            des.className="foot";
            let tot=document.createElement("div");
            tot.className="list-i";
            tot.appendChild(hed);
            tot.appendChild(mid);
            tot.appendChild(des);
            document.querySelector(".list").appendChild(tot);
});
let li=document.querySelectorAll(".list-i");
if(li !==null)
{li.forEach(dem=>{
    dem.addEventListener("click",()=>{
        document.querySelector("list").removeChild(e.target);
    })
})
}


