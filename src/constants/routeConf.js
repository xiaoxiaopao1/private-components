import Home from '@/routes/Home';
import Page1 from '@/routes/Page1';
import RandomColorPrint from '@/routes/MyDemo/RandomColorPrint';
import TextOverflowPop from '@/routes/MyDemo/TextOverflowPop';
import TimelineUnion from '@/routes/MyDemo/TimelineUnion';
import GuessNumber from '@/routes/LeetDemo/GuessNumber';

import List from '@/routes/Page1/List';
import Detail from '@/routes/Page1/List/Detail';

// category  
// false, render with menuItem
// true, render with subMenu
// undefined, don't render

const routeArr = [
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
        path: '/page1/:id?/:name?',
        component: Page1,
        value: 'Page1',
        breadName: 'Page1',
        key: 'Page1',
        category: false,
        children: [
          {
            path: '/list',
            component: List,
            value: 'List',
            key: 'List',
            category: false,
            children: [
              {
                path: '/:id',
                component: Detail,
                value: 'Detail',
                key: 'Detail',
                category: false,
              }
            ]
          }
        ]
      },
    ]
  },
  {
    key: 'my demo',
    value: 'my demo',
    path: '/demo',
    category: true,
    children: [
      {
        key: 'randomColorPrint',
        value: 'randomColorPrint',
        path: '/random_color_print',
        component: RandomColorPrint,
        category: false,
      },
      {
        key: 'textOverflowPop',
        value: 'textOverflowPop',
        path: '/text_overflow_pop',
        component: TextOverflowPop,
        category: false,
      },
      {
        key: 'timelineUnion',
        value: 'timelineUnion',
        path: '/timeline_union',
        component: TimelineUnion,
        category: false,
      },
    ]
  },
  {
    key: 'leet demo',
    value: 'leet demo',
    path: '/leet_demo',
    category: true,
    children: [
      {
        key: 'guessNumber',
        value: 'guessNumber',
        path: '/guess_number',
        component: GuessNumber,
        category: false,
      },
      // {
      //   key: 'textOverflowPop',
      //   value: 'textOverflowPop',
      //   path: '/text_overflow_pop',
      //   component: TextOverflowPop,
      //   category: false,
      // },
      // {
      //   key: 'timelineUnion',
      //   value: 'timelineUnion',
      //   path: '/timeline_union',
      //   component: TimelineUnion,
      //   category: false,
      // },
    ]
  }
];

let routeJson = {};

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
    routeJson[item.path] = item;
    if (Array.isArray(item.children)) {
      completeKeyAndPath(item.children, item.path, item.key)
    }
  });
}

completeKeyAndPath(routeArr);


export {routeArr, routeJson};