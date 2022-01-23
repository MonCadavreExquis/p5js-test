var num=60;
var radius=90;
var anglec=0;
var speed=0.07;
var factor=0.62831;
var factor1=10;
var cx;
var cy;



function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  cx=width*0.5;
  cy=height*0.5;
  console.log('hello world');
  
}

function draw() {
  background(255,150,255);
  noStroke();
  //stroke(0);
  fill(255);
  beginShape();
  for(let i=0;i<num;i++){
  const slice = radians(360/num);
  const angle= slice*i; 
  curveVertex(cx+sin(angle)*(2*radius+sin(anglec+speed+(i)*factor)*factor1),cy-cos(angle)*(2*radius+sin(anglec+speed+(i)*factor)*factor1));
  }
  endShape(CLOSE);
  
    
     //stroke(255);
  fill(0);
     beginShape();
  //curveVertex(cx,cy-cos(radians(360/num))*(radius+cos(anglec+speed)*factor1));
  for(let i=0;i<num;i++){
  const slice = radians(360/num);
  const angle= -slice*i;
  curveVertex(cx+sin(angle)*(radius+cos(anglec+speed+(i)*factor)*factor1),cy-cos(angle)*(radius+cos(anglec+speed+(i)*factor)*factor1));
  }
  //curveVertex(cx,cy-cos(radians(360/num)*0)*(radius+cos(anglec+speed)*factor1));
  endShape(CLOSE);
  

  
  anglec+=speed;
  //radius++;
  
  
    for(let i=0;i<num;i++){
    const slice = radians(360/num);
  const angle= slice*i; 
      stroke(0);
      strokeWeight(6);
  point(cx+sin(angle)*(2*radius+sin(anglec+speed+(i)*factor)*factor1),cy-cos(angle)*(2*radius+sin(anglec+speed+(i)*factor)*factor1));
  }
    for(let i=0;i<num;i++){
    const slice = radians(360/num);
  const angle= -slice*i; 
      stroke(255);
      strokeWeight(6);
  point(cx+sin(angle)*(radius+cos(anglec+speed+(i)*factor)*factor1),cy-cos(angle)*(radius+cos(anglec+speed+(i)*factor)*factor1));
  }
  
}
  
//     for(let i=0;i<num;i++){

//     const slice = radians(360/num);
//     const angle= slice*i;


//    // const nx= sin(slice)*(sin(anglec+i*factor)*factor1);
//     //const ny= cos(slice)*(sin(anglec+i*factor)*factor1);
//       const x= sin(slice)*(radius+sin(anglec+speed+(i+1)*factor)*factor1);
//       const y= cos(slice)*(radius+sin(anglec+speed+(i+1)*factor)*factor1);
      
//     push();
//     translate(width*0.5,height*0.5);
//     rotate(-angle);
//       strokeWeight(4);
//       stroke(255);
      
//   point(0,radius+sin(anglec+i*factor)*factor1);
      
//         strokeWeight(1);
//     line(0,radius+sin(anglec+i*factor)*factor1,x,y);
        
//      pop();
    
//    }
//       anglec+=speed;
  
  
