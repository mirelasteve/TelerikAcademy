let n=+gets();
let m=+gets();
let best;
let tubes= [];
for(let i=0;i<n;i+=1){
     tubes.push(+gets());
}
let left=1;
let right=Math.max(...tubes);
while(left<=right){
     let middle=Math.trunc((left+right-1)/2);
         let count=0;
     for(let i=0;i<=tubes.length;i+=1){
          count+= Math.trunc(tubes[0]/middle);
     }
     if(count<m){
          right=middle-1;
     }
     if(count>=m){
          
          print(middle);
          break;
     }
}
