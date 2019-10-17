import React from 'react';
import './index.scss';

// function arrayNesting(nums) {
//   let result = [];
//   for(let i = 0; i < nums.length; i++) {
//     if (result.indexOf(nums[i]) > -1) {
//       continue;
//     }

//     const s = [];
//     getArray(nums, s, nums[i]);
//     if(s.length > result.length) {
//       result = s;
//     }
//   }
//   return result.length;
// }

// const getArray = (nums, s, element) => {
//   if (s.indexOf(element) > -1) {
//     return;
//   }
//   s.push(element);
//   getArray(nums, s, nums[s[s.length - 1]])
// }

function arrayNesting(nums) {
  
}




export default class GuessNumber extends React.Component {
  componentDidMount() {
    const result = arrayNesting([5,4,0,3,1,6,2]);
    console.log(result)
  }

  render() {
    return(
      <div>guess number</div>
    )
  }
}