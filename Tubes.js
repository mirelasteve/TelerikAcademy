let n=+gets();
let m=+gets();
let best;
let tubes= [];
for(let i=0;i<n;i+=1){
     tubes.push(+gets());
}

let left=1;
let right=Math.max(...tubes);
let result=-1;

while(left<=right){
     let middle=(left+right)/2;
     let count=0;
     for(let i=0;i<=tubes.length;i+=1){
          count+= Math.trunc(tubes[0]/middle);
     }
     if(count<m){
          right=middle-1;
     }
     if(count>=m){
          result=result+middle;
          print(result);
          break;
     }
}
