import React from 'react';
import { Popover } from 'antd';
import './index.scss';

const content = (
  <div>
    <p>Content</p>
    <p>Content</p>
  </div>
);

export default class TextOverflowPop extends React.Component {
  constructor(props) {
    super(props);
    this.refContent = React.createRef();
    this.state = {
      visible: false
    };
  }


  onMouseEnter = () => {
    const dom = this.refContent.current;
    if (dom.offsetWidth >= dom.scrollWidth) {
      return;
    }
    this.setState({visible: true});
  }

  onMouseLeave = () => {
    if (this.state.visible === false) {
      return;
    }
    this.setState({visible: false});
  }

  render() {
    return (
      <div className='text-overflow-pop'>
        <Popover 
          content={content} 
          title='title'
          visible={this.state.visible}
          // autoAdjustOverflow={false}        // 气泡被遮挡时自动调整位置 default true
          placement='topLeft'
        >
          <p 
            className='word-content' 
            ref={this.refContent}
            onMouseEnter={this.onMouseEnter} 
            onMouseLeave={this.onMouseLeave}
          >
            11111111111111111111111111111111111
          </p>
        </Popover>
      </div>
    )
  }
} 