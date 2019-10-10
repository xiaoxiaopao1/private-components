import Home from '@/routes/Home';
import Page1 from '@/routes/Page1';

// category  
// false, render with menuItem
// true, render with subMenu
// undefined, don't render

const routeConf = [
  {
    path: '/',
    component: Home,
    value: '首页',
    breadName: '首页',
    key: 'home',
    category: false,
  },
  {
    value: 'page category',
    key: 'page category',
    path: '/category',
    category: true,
    children: [
      {
        path: '/page1',
        component: Page1,
        value: 'Page1',
        breadName: 'Page1',
        key: 'Page1',
        category: false,
      },
    ]
  }
];

const completeKeyAndPath = (arr, forwardPath, forwardKey) => {
  if (!forwardPath) {
    forwardPath = '';
  }
  if (!forwardKey) {
    forwardKey = '';
  }
  arr.forEach(item => {
    item.ownPath = item.path;
    item.path = forwardPath + item.path;
    item.key = forwardKey + item.key;
    if (Array.isArray(item.children)) {
      completeKeyAndPath(item.children, item.path, item.key)
    }
  });
}

completeKeyAndPath(routeConf);


export default routeConf;