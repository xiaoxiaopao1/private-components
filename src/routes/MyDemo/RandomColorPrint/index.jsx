import React from 'react';
import './index.scss';

// use rgba (255, 255, 255, 1)



export default class RandomColorPrint extends React.Component {
  constructor(props) {
    super(props);
    this.timer = null;
    this.content = '1234 5678';

    this.dataSource = [];
    this.initData();

    this.state = {
      content: []
    }
  }

  componentDidMount() {
    let index = 0;
    this.timer = setInterval(() => {
      
      if (index >= this.dataSource.length) {
        this.clearTimer();  
        return;
      }
      const content = this.dataSource.slice(0,index);
      index++;
      this.setState({content});
    }, 1000)
  }

  initData = () => {
    const content = this.content.split('');
    for(const item of content) {
      const dataItem = {value: item, color: this.generateRandomColor()};
      this.dataSource.push(dataItem);
    }
  }

  generateRandomColor = () => {
    const r = this.getRandomNum();
    const g = this.getRandomNum();
    const b = this.getRandomNum();
    return `rgb(${r}, ${g}, ${b})`;
  }

  // 获取0--255的随机数，为保证临界值出现概率相同，使用向下取整，同时上界设为256
  getRandomNum = () => {
    return Math.floor(Math.random() * (255 + 1));
  }

  componentWillUnmount() {
    this.clearTimer();
  }

  clearTimer = () => {
    this.timer && clearInterval(this.timer);
  }

  render() {
    return (
      <p>
        {
          this.state.content.map((item, index) => (
            <span key={index} style={{color: item.color}}>{item.value}</span>
          ))
        }
      </p>
    )
  }
  
}