function minMaxSum(arr){
  if(arr.length < 1 || arr.length >= Math.pow(10,9)) return;
  let minSum = 0;
  let maxSum = 0;
  for(let i = 0; i<arr.length - 1; i++){
    minSum += arr[i]
  }
  console.log(minSum,maxSum)
}
arr  = [7,69,2,221,8974]

minMaxSum(arr)