function check(){
  let model = document.getElementById("mod").value;
  document.getElementById("outputlabel1").innerHTML = `Model : <b style="font-size:1.5rem;">${model} </b>`;

  let name = document.getElementById("nam").value;
  document.getElementById("outputlabel2").innerHTML = ` Name : <b style="font-size:1.5rem;">${name} </b>`;

  let date = document.getElementById("date").value;
  document.getElementById("outputlabeldate").innerHTML = ` Date : <b style="font-size:1.5rem;">${date} </b>`;

  let q = document.getElementById("q").value;
  document.getElementById("outputlabelq").innerHTML = ` Q : <b style="font-size:1.5rem;">${q} </b>`;
}

check();
setInterval(check,2000);



let showtotal = 0;


let f1 = 8;let f2 = 7.75;let f3 = 7.50;let f4 = 7.25;let f5 = 7.0;let f6 = 6.75;let f7 = 6.50;let f8 = 6.25;let f9 = 6.0;let f10 = 5.75;let f11 = 5.5;
let f12 = 5.25;let f13 = 5.0;let f14 = 4.75;let f15 = 4.50;let f16 = 4.25;let f17 = 4.0;let f18 = 3.75;let f19 = 3.5;let f20 = 3.25;let f21 = 3.0;
let f22 = 2.75;let f23 = 2.5;let f24 = 2.25;let f25 = 2.0;let f26 = 9.0;let f27 = 8.75;let f28 = 8.5;let f29 = 8.25;

let p1 = p2 = p3 = p4 = p5= p6 = p7= p8= p9= p10= p11= p12 =p13 =p14 =p15 = p16 = p17 =p18 = p19 =p20 =p21 =p22 =p23 =p24 =p25 =p26 = p27 =p28 =p29 = 0;
let t1 = t2 = t3 = t4 = t5= t6 = t7= t8= t9= t10= t11= t12 =t13 =t14 =t15 = t16 = t17 =t18 = t19 =t20 =t21 =t22 =t23 =t24 =t25 =t26 = t27 =t28 =t29 = 0;
let i1 = i2 = i3 = i4 = i5= i6 = i7= i8= i9= i10= i11= i12 =i13 =i14 =i15 = i16 = i17 =i18 = i19 =i20 =i21 =i22 =i23 =i24 =i25 =i26 = i27 =i28 =i29 = 0;

function calc(){

  i1 = Number(document.getElementById("n1").value);
  p1 += i1;
  document.getElementById("op1").textContent = p1;
  t1 = f1*p1;
  document.getElementById("t1").textContent = t1;
  document.getElementById("n1").value = "";
  if(i1 !== 0){
    document.getElementById("c1").textContent = i1;
  }

  i2 = Number(document.getElementById("n2").value);
  p2 += i2;
  document.getElementById("op2").textContent = p2;
  t2 = f2*p2;
  document.getElementById("t2").textContent = t2;
  document.getElementById("n2").value = "";
  if(i2 !== 0){
    document.getElementById("c2").textContent = i2;
  }

  i3 = Number(document.getElementById("n3").value);
  p3 += i3;
  document.getElementById("op3").textContent = p3;
  t3 = f3*p3;
  document.getElementById("t3").textContent = t3;
  document.getElementById("n3").value = "";
  if(i3 !== 0){
    document.getElementById("c3").textContent = i3;
  }

  i4 = Number(document.getElementById("n4").value);
  p4 += i4;
  document.getElementById("op4").textContent = p4;
  t4 = f4*p4;
  document.getElementById("t4").textContent = t4;
  document.getElementById("n4").value = "";
  if(i4 !== 0){
    document.getElementById("c4").textContent = i4;
  }

  i5 = Number(document.getElementById("n5").value);
  p5 += i5;
  document.getElementById("op5").textContent = p5;
  t5 = f5*p5;
  document.getElementById("t5").textContent = t5;
  document.getElementById("n5").value = "";
  if(i5 !== 0){
    document.getElementById("c5").textContent = i5;
  }

  i6 = Number(document.getElementById("n6").value);
  p6 += i6;
  document.getElementById("op6").textContent = p6;
  t6 = f6*p6;
  document.getElementById("t6").textContent = t6;
  document.getElementById("n6").value = "";
  if(i6 !== 0){
    document.getElementById("c6").textContent = i6;
  }

  i7 = Number(document.getElementById("n7").value);
  p7 += i7;
  document.getElementById("op7").textContent = p7;
  t7 = f7*p7;
  document.getElementById("t7").textContent = t7;
  document.getElementById("n7").value = "";
  if(i7 !== 0){
    document.getElementById("c7").textContent = i7;
  }

  i8 = Number(document.getElementById("n8").value);
  p8 += i8;
  document.getElementById("op8").textContent = p8;
  t8= f8*p8;
  document.getElementById("t8").textContent = t8;
  document.getElementById("n8").value = "";
  if(i8 !== 0){
    document.getElementById("c8").textContent = i8;
  }

  i9 = Number(document.getElementById("n9").value);
  p9 += i9;
  document.getElementById("op9").textContent = p9;
  t9 = f9*p9;
  document.getElementById("t9").textContent = t9;
  document.getElementById("n9").value = "";
  if(i9 !== 0){
    document.getElementById("c9").textContent = i9;
  }


  i10 = Number(document.getElementById("n10").value);
  p10 += i10;
  document.getElementById("op10").textContent = p10;
  t10 = f10*p10;
  document.getElementById("t10").textContent = t10;
  document.getElementById("n10").value = "";
  if(i10 !== 0){
    document.getElementById("c10").textContent = i10;
  }

  i11 = Number(document.getElementById("n11").value);
  p11 += i11;
  document.getElementById("op11").textContent = p11;
  t11 = f11*p11;
  document.getElementById("t11").textContent = t11;
  document.getElementById("n11").value = "";
  if(i11 !== 0){
    document.getElementById("c11").textContent = i11;
  }

  i12 = Number(document.getElementById("n12").value);
  p12 += i12;
  document.getElementById("op12").textContent = p12;
  t12 = f12*p12;
  document.getElementById("t12").textContent = t12;
  document.getElementById("n12").value = "";
  if(i12 !== 0){
    document.getElementById("c12").textContent = i12;
  }

  i13 = Number(document.getElementById("n13").value);
  p13 += i13;
  document.getElementById("op13").textContent = p13;
  t13 = f13*p13;
  document.getElementById("t13").textContent = t13;
  document.getElementById("n13").value = "";
  if(i13 !== 0){
    document.getElementById("c13").textContent = i13;
  }

  i14 = Number(document.getElementById("n14").value);
  p14 += i14;
  document.getElementById("op14").textContent = p14;
  t14 = f14*p14;
  document.getElementById("t14").textContent = t14;
  document.getElementById("n14").value = "";
  if(i14 !== 0){
    document.getElementById("c14").textContent = i14;
  }

  i15 = Number(document.getElementById("n15").value);
  p15 += i15;
  document.getElementById("op15").textContent = p15;
  t15 = f15*p15;
  document.getElementById("t15").textContent = t15;
  document.getElementById("n15").value = "";
  if(i15 !== 0){
    document.getElementById("c15").textContent = i15;
  }

  i16 = Number(document.getElementById("n16").value);
  p16 += i16;
  document.getElementById("op16").textContent = p16;
  t16 = f16*p16;
  document.getElementById("t16").textContent = t16;
  document.getElementById("n16").value = "";
  if(i16 !== 0){
    document.getElementById("c16").textContent = i16;
  }

  i17 = Number(document.getElementById("n17").value);
  p17 += i17;
  document.getElementById("op17").textContent = p17;
  t17 = f17*p17;
  document.getElementById("t17").textContent = t17;
  document.getElementById("n17").value = "";
  if(i17 !== 0){
    document.getElementById("c17").textContent = i17;
  }

  i18 = Number(document.getElementById("n18").value);
  p18 += i18;
  document.getElementById("op18").textContent = p18;
  t18 = f18*p18;
  document.getElementById("t18").textContent = t18;
  document.getElementById("n18").value = "";
  if(i18 !== 0){
    document.getElementById("c18").textContent = i18;
  }

  i19 = Number(document.getElementById("n19").value);
  p19 += i19;
  document.getElementById("op19").textContent = p19;
  t19 = f19*p19;
  document.getElementById("t19").textContent = t19;
  document.getElementById("n19").value = "";
  if(i19 !== 0){
    document.getElementById("c19").textContent = i19;
  }

  i20 = Number(document.getElementById("n20").value);
  p20 += i20;
  document.getElementById("op20").textContent = p20;
  t20 = f20*p20;
  document.getElementById("t20").textContent = t20;
  document.getElementById("n20").value = "";
  if(i20 !== 0){
    document.getElementById("c20").textContent = i20;
  }

  i21 = Number(document.getElementById("n21").value);
  p21 += i21;
  document.getElementById("op21").textContent = p21;
  t21 = f21*p21;
  document.getElementById("t21").textContent = t21;
  document.getElementById("n21").value = "";
  if(i21 !== 0){
    document.getElementById("c21").textContent = i21;
  }

  i22 = Number(document.getElementById("n22").value);
  p22 += i22;
  document.getElementById("op22").textContent = p22;
  t22 = f22*p22;
  document.getElementById("t22").textContent = t22;
  document.getElementById("n22").value = "";
  if(i22 !== 0){
    document.getElementById("c22").textContent = i22;
  }

  i23 = Number(document.getElementById("n23").value);
  p23 += i23;
  document.getElementById("op23").textContent = p23;
  t23 = f23*p23;
  document.getElementById("t23").textContent = t23;
  document.getElementById("n23").value = "";
  if(i23 !== 0){
    document.getElementById("c23").textContent = i23;
  }

  i24 = Number(document.getElementById("n24").value);
  p24 += i24;
  document.getElementById("op24").textContent = p24;
  t24 = f24*p24;
  document.getElementById("t24").textContent = t24;
  document.getElementById("n24").value = "";
  if(i24 !== 0){
    document.getElementById("c24").textContent = i24;
  }

  i25 = Number(document.getElementById("n25").value);
  p25 += i25;
  document.getElementById("op25").textContent = p25;
  t25 = f25*p25;
  document.getElementById("t25").textContent = t25;
  document.getElementById("n25").value = "";
  if(i25 !== 0){
    document.getElementById("c25").textContent = i25;
  }

  i26 = Number(document.getElementById("n26").value);
  p26 += i26;
  document.getElementById("op26").textContent = p26;
  t26 = f26*p26;
  document.getElementById("t26").textContent = t26;
  document.getElementById("n26").value = "";
  if(i26 !== 0){
    document.getElementById("c26").textContent = i26;
  }

  i27 = Number(document.getElementById("n27").value);
  p27 += i27;
  document.getElementById("op27").textContent = p27;
  t27 = f27*p27;
  document.getElementById("t27").textContent = t27;
  document.getElementById("n27").value = "";
  if(i27 !== 0){
    document.getElementById("c27").textContent = i27;
  }

  i28 = Number(document.getElementById("n28").value);
  p28 += i28;
  document.getElementById("op28").textContent = p28;
  t28 = f28*p28;
  document.getElementById("t28").textContent = t28;
  document.getElementById("n28").value = "";
  if(i28 !== 0){
    document.getElementById("c28").textContent = i28;
  }

  i29 = Number(document.getElementById("n29").value);
  p29 += i29;
  document.getElementById("op29").textContent = p29;
  t29 = f29*p29;
  document.getElementById("t29").textContent = t29;
  document.getElementById("n29").value = "";
  if(i29 !== 0){
    document.getElementById("c29").textContent = i29;
  }
  showtotal = t1+t2+t3+t4+t5+t6+t7+t8+t9+t10+t11+t12+t13+t14+t15+t16+t17+t18+t19+t20+t21+t22+t23+t24+t25+t26+t27+t28+t29;
  document.getElementById("showtotal").textContent = `Total:${showtotal}`;
  document.getElementById("oshowtotal").textContent = `Total:${showtotal}`;

  let tp7 = tp6 = tp5 = tp4 = tp3 = tp2 = 0;

  document.getElementById("7f3").textContent = `${Math.round(((t26+t27+t28+t29+t1+t2+t3+t4+t5)/showtotal)*100)}%`;
  document.getElementById("6f3").textContent = `${Math.round(((t6+t7+t8+t9)/showtotal)*100)}%`;
  document.getElementById("5f3").textContent = `${Math.round(((t10+t11+t12+t13)/showtotal)*100)}%`;
  document.getElementById("4f3").textContent = `${Math.round(((t14+t15+t16+t17)/showtotal)*100)}%`;
  document.getElementById("3f3").textContent = `${Math.round(((t18+t19+t20+t21)/showtotal)*100)}%`;
  document.getElementById("2f3").textContent = `${Math.round(((t22+t23+t24+t25)/showtotal)*100)}%`;

  tp7 = p26+p27+p28+p29+p1+p2+p3+p4+p5;
  tp6 = p6+p7+p8+p9;
  tp5 = p10+p11+p12+p13;
  tp4 = p14+p15+p16+p17;
  tp3 = p18+p19+p20+p21;
  tp2 = p22+p23+p24+p25;

  document.getElementById("7tp").textContent = tp7;
  document.getElementById("6tp").textContent = tp6;
  document.getElementById("5tp").textContent = tp5;
  document.getElementById("4tp").textContent = tp4;
  document.getElementById("3tp").textContent = tp3;
  document.getElementById("2tp").textContent = tp2;
}
calc();
setInterval(calc,5000);


document.getElementById("submit").onclick = function(){
  
  if(t1 == 0){
    document.getElementById("or1").remove();
  }
  if(t2 == 0){
    document.getElementById("or2").remove();
  }
  if(t3 == 0){
    document.getElementById("or3").remove();
  }
  if(t4 == 0){
    document.getElementById("or4").remove();
  }
  if(t5 == 0){
    document.getElementById("or5").remove();
  }
  if(t6 == 0){
    document.getElementById("or6").remove();
  }
  if(t7 == 0){
    document.getElementById("or7").remove();
  }
  if(t8 == 0){
    document.getElementById("or8").remove();
  }
  if(t9 == 0){
    document.getElementById("or9").remove();
  }
  if(t10 == 0){
    document.getElementById("or10").remove();
  }
  if(t11 == 0){
    document.getElementById("or11").remove();
  }
  if(t12 == 0){
    document.getElementById("or12").remove();
  }
  if(t13 == 0){
    document.getElementById("or13").remove();
  }
  if(t14 == 0){
    document.getElementById("or14").remove();
  }
  if(t15 == 0){
    document.getElementById("or15").remove();
  }
  if(t16 == 0){
    document.getElementById("or16").remove();
  }
  if(t17 == 0){
    document.getElementById("or17").remove();
  }
  if(t18 == 0){
    document.getElementById("or18").remove();
  }
  if(t19 == 0){
    document.getElementById("or19").remove();
  }
  if(t20 == 0){
    document.getElementById("or20").remove();
  }
  if(t21 == 0){
    document.getElementById("or21").remove();
  }
  if(t22 == 0){
    document.getElementById("or22").remove();
  }
  if(t23 == 0){
    document.getElementById("or23").remove();
  }
  if(t24 == 0){
    document.getElementById("or24").remove();
  }
  if(t25 == 0){
    document.getElementById("or25").remove();
  }

  if(t26 == 0){
    document.getElementById("or26").remove();
  }
  if(t27 == 0){
    document.getElementById("or27").remove();
  }
  if(t28 == 0){
    document.getElementById("or28").remove();
  }
  if(t29 == 0){
    document.getElementById("or29").remove();
  }
}


const btn = document.querySelector('.screenshot');

btn.addEventListener('click', () => {
  html2canvas(document.querySelector('#outputpage'))
    .then(canvas => {
      const url = canvas.toDataURL('image/png');
      const a = document.createElement('a');
      a.setAttribute('download','imageName.png');
      a.setAttribute('href',url);
      a.click();
    })
})


let avg = 0;

  document.getElementById("s1b1").onclick = function(){
  avg = Number(document.getElementById("input1").value);
  document.getElementById("7f").textContent = Math.round((avg * .2)/70);
  document.getElementById("6f").textContent = Math.round((avg * .2)/60);
  document.getElementById("5f").textContent = Math.round((avg* .2)/50);
  document.getElementById("4f").textContent = Math.round((avg * .2)/40);
  document.getElementById("3f").textContent = Math.round((avg * .2)/30);

  document.getElementById("7p").textContent = (p26+p27+p28+p29+p1+p2+p3+p4+p5)/10;
  document.getElementById("6p").textContent = (p6+p7+p8+p9)/10;
  document.getElementById("5p").textContent = (p10+p11+p12+p13)/10;
  document.getElementById("4p").textContent = (p14+p15+p16+p17)/10;
  document.getElementById("3p").textContent = (p18+p19+p20+p21)/10;
  
  }

  document.getElementById("s1b2").onclick = function(){
    avg = Number(document.getElementById("input2").value);
    document.getElementById("7f2").textContent = Math.round((avg * .15)/175);
    document.getElementById("6f2").textContent = Math.round((avg * .15)/150);
    document.getElementById("5f2").textContent = Math.round((avg* .15)/125);
    document.getElementById("4f2").textContent = Math.round((avg * .2)/100);
    document.getElementById("3f2").textContent = Math.round((avg * .2)/75);
    document.getElementById("2f2").textContent = Math.round((avg * .15)/50);
  
    document.getElementById("7p2").textContent = (p26+p27+p28+p29+p1+p2+p3+p4+p5)/25;
    document.getElementById("6p2").textContent = (p6+p7+p8+p9)/25;
    document.getElementById("5p2").textContent = (p10+p11+p12+p13)/25;
    document.getElementById("4p2").textContent = (p14+p15+p16+p17)/25;
    document.getElementById("3p2").textContent = (p18+p19+p20+p21)/25;
    document.getElementById("2p2").textContent = (p22+p23+p24+p25)/25;

    }


  
