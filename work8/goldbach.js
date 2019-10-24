// 判断一个数是否是质数
function haojiahuo(a){
  var sum=0;
  for(var i=1;i<=a;i++){
      if(a % i ==0){
          sum++;
      }
  }
  if(sum==2){
      return true;
  }else{
      return false;
  }
}
// 判断用户输入的偶数是否可分为两个质数之和：

function goldbach(dd){
  let str=" ";
dd = document.getElementById("dd").value
dd = parseInt(dd);
for(var g=2;g<dd;g++){
  var j  = dd -g;
  if(haojiahuo(g)&&haojiahuo(j)&& g<=j){
      str +=(dd+"可以拆分为两个质数"+ g+"与"+j+"的和" +"<br>");
  }
}
document.getElementById('goldbach').innerHTML = str;
}
 