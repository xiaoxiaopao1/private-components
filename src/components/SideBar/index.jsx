import React from 'react';
import { Menu, Icon } from 'antd';
import routeConf from '@/constants/routeConf';
import { withRouter } from 'react-router'; 
import './index.scss';

const { SubMenu } = Menu;

@withRouter
class SideBar extends React.Component {
  constructor(props) {
    super(props);
    this.maxLevel = 3;
    this.defaultOpenLevel = 1;
    this.currentLevel = 0;
    this.defaultOpenKeys = [];
    this.pathIndexQueue = [];
    this.menuRender = this.eachLevelRender(routeConf);
    this.state = {
      current: this.initSelectedKeys()
    }
  }

  componentDidMount() {
    console.log(this.props);
  }

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      console.log(this.props)
      this.setState({current: this.initSelectedKeys()});
    }
  }

  initSelectedKeys = () => {
    this.pathIndexQueue = [];
    const { pathname } = this.props.location;
    const pathArr = pathname.split('/');
    pathArr.shift();

    this.getIndexQueue(0, routeConf, pathArr);
    return this.getCurrentKey(0, routeConf, this.pathIndexQueue);
  }

  getCurrentKey = (level, arr, pathIndexQueue) => {
    if (level === pathIndexQueue.length - 1) {
      return arr[pathIndexQueue[level]].key;
    }
    if (!arr[pathIndexQueue[level]]) {
      return;
    }
    return this.getCurrentKey(level + 1, arr[pathIndexQueue[level]].children, pathIndexQueue);
  }


  getIndexQueue = (level, arr, pathArr) => {
    if (level >= this.maxLevel) {
      return;
    }
    for(let i = 0; i < arr.length; i++) {
      if (arr[i].ownPath === '/' + pathArr[level]) {
        this.pathIndexQueue.push(i);
        if (arr[i].category && arr[i].children) {
          this.getIndexQueue(level + 1, arr[i].children, pathArr);
        }
        break;
      }
    }
  }

  linkHandler = (path) => {
    this.props.history.push(path);
  }

  eachLevelRender = (arr) => {

    this.currentLevel++;

    return arr.map(item => {
      if (item.category === undefined) {
        return null;
      }

      if (item.category === false) {
        return <Menu.Item key={item.key} onClick={() => {this.linkHandler(item.path)}}>{item.value}</Menu.Item>
      }

      if (item.category === true) {
        if (this.currentLevel <= this.defaultOpenLevel) {
          this.defaultOpenKeys.push(item.key);
        }
        return (
          <SubMenu key={item.key} title={<span>{item.value}</span>}>
            {this.eachLevelRender(item.children)}
          </SubMenu>
        )
      }
    })
  }

  render() {
    return (
      <div className='component-side-bar'>
        <Menu
          className='side-bar-menu'
          theme='dark'
          defaultOpenKeys={this.defaultOpenKeys}
          selectedKeys={[this.state.current]}
          mode="inline"
        >
          {this.menuRender}
        </Menu>
      </div>
    )
  }
}

export default SideBar;