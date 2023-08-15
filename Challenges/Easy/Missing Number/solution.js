var missingNumber = function(nums) {
    nums = nums.sort(function(a, b){return a - b})
    for( let i = 0; i < nums.length; i++) {
        if(nums.includes(i) === false){
            return i
        } else if( i === nums.length - 1) {
            return nums[i] + 1
        }
    }
};