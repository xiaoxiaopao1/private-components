import React from 'react';
import './index.scss';

const data = [
  [1,4],
  [2,8],
  // [1,5],
  // [6,10],
  [14,18],
  [16, 19],
];

export default class TimelineUnion extends React.Component {
  componentDidMount() {
    this.getMerged();
  }

  getMerged = () => {
    for(let i = 0; i < data.length - 1; i++) {
      for(let j = i + 1; j < data.length; j++) {
        const result = this.getChecked(data[i], data[j]);
        if (result) {
          data[i] = result;
          data.splice(j, 1);
          j--;
        }
      }
    }
    console.log('timeline union log:', data);
  }

  // 先比较长度，长度大的作为比较基准
  getChecked = (arr1, arr2) => {
    const [newArr1, newArr2] = this.sortArr(arr1, arr2);
    if ((newArr2[0] <= newArr1[0] && newArr1[0] <= newArr2[1])
      || (newArr1[0] <= newArr2[0] && newArr1[1] >= newArr2[1])
      || (newArr2[0] <= newArr1[1] && newArr1[1] <= newArr2[1])
      ) {
      const minNum = (newArr1[0] <= newArr2[0]) ? newArr1[0] : newArr2[0];
      const maxNum = (newArr1[1] >= newArr2[1]) ? newArr1[1] : newArr2[1];
      return [minNum, maxNum];
    }
    return false;
  }

  sortArr = (arr1, arr2) => {
    const len1 = arr1[1] - arr1[0];
    const len2 = arr2[1] - arr2[0];
    if (len1 - len2 >= 0) {
      return [arr1, arr2];
    } else {
      return [arr2, arr1];
    }
  }



  render() {
    return (
      <div>
        timeline uinon ( view the timeline union log )
      </div>
    )
  }
}