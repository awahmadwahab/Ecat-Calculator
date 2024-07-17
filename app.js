let mat1=document.getElementById("matric1");
let mat2=document.getElementById("matric2");

let int1=document.getElementById("inter1");
let int2=document.getElementById("inter2");

let ec=document.getElementById("ecat");

let group1=document.getElementById("Group1");
let group2=document.getElementById("Group2");
let group3=document.getElementById("Group3");

function Group1()
{
let matric1=parseFloat(mat1.value);
let matric2=parseFloat(mat2.value);
let inter1=parseFloat(int1.value);
let inter2=parseFloat(int2.value);
let ecat=parseFloat(ec.value);

    let r1=(matric1/matric2)*17;
    let r2=(inter1/inter2)*50;
    let r3=(ecat/400)*33;
    let r=r1+r2+r3;
    group1.innerText="Group 1 : "+r.toFixed(3);
}

function Group2()
{
let matric1=parseFloat(mat1.value);
let matric2=parseFloat(mat2.value);
let inter1=parseFloat(int1.value);
let inter2=parseFloat(int2.value);
let ecat=parseFloat(ec.value);

    let r1=(matric1/matric2)*25;
    let r2=(inter1/inter2)*45;
    let r3=(ecat/400)*30;
    let r=r1+r2+r3;
    group2.innerText="Group 2 : "+r.toFixed(3);
}

function Group3()
{
let matric1=parseFloat(mat1.value);
let matric2=parseFloat(mat2.value);
let inter1=parseFloat(int1.value);
let inter2=parseFloat(int2.value);

    let r1=(matric1/matric2)*30;
    let r2=(inter1/inter2)*70;
    let r=r1+r2;
    group3.innerText="Group 3 : "+r.toFixed(3);
}