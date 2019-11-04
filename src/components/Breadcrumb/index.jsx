import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { Breadcrumb } from 'antd';
import { routeJson } from '@/constants/routeConf';
import './index.scss';

export default withRouter((props) => {
  // console.log(props);
  // console.log(routeJson);


  

  const { match } = props;
  const pathSnippets = match.path.split('/').filter(i => i);

  const linkHandler = (fullPath) => {
    const urlSnippets = fullPath.split('/').filter(i => i);
    const re = /^:.*\??$/;
    for(let i = 0; i < urlSnippets.length; i++) {
      if (re.test(urlSnippets[i])) {
        // console.log('params', urlSnippets[i])
        let key = '';
        if (urlSnippets[i][urlSnippets[i].length - 1] === '?') {
          key = urlSnippets[i].substring(1, urlSnippets[i].length - 1);
        } else {
          key = urlSnippets[i].substring(1, urlSnippets[i].length);
        }

        // console.log('key', key)
        const value = match.params[key];
        if (value) {
          urlSnippets[i] = value;
        } else {
          urlSnippets.splice(i, 1);
          i--;
        }
      }
    }
    // console.log(`/${urlSnippets.join('/')}`)
    const url = `/${urlSnippets.join('/')}`;
    if (url === match.url) {
      return;
    }
    props.history.push(url);
  }

  const extraBreadcrumbItems = pathSnippets.map((pathItem, index) => {
    const fullPath = `/${pathSnippets.slice(0, index + 1).join('/')}`;
    const breadItem = routeJson[fullPath] && routeJson[fullPath].value;

    // let linkUrl = fullPath;

    // const re = /^:.*\??$/;
    // if (re.test(pathItem)) {
    //   const paramsKey = pathItem.substring(1, pathItem.length - 1);
    //   const paramsValue = match.params[paramsKey];

    //   const tempPathSnippets = [...pathSnippets];
    //   if (paramsValue) {
    //     pathItem = paramsValue;
    //   }
    // }



    return (
      breadItem &&
      <Breadcrumb.Item key={fullPath}>
        <a onClick={() => {linkHandler(fullPath)}}>{breadItem}</a>
        {/* <Link to={url}>{breadItem}</Link> */}
      </Breadcrumb.Item>
    )
  })

 
  return (
    // <div>123</div>
    <Breadcrumb>
      {extraBreadcrumbItems}
    </Breadcrumb>
  )
})
