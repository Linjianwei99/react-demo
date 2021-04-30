import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, Switch,BrowserRouter } from 'react-router-dom';
// import './index.css';
// import {App} from './App';



// 移动端弹性窗口
// import './view/mobile-list/style.css'
// import App from './view/mobile-list/index';

// 虚拟列表性能优化版本
// import App from './view/virtual-list/Vlist'


// react-pose创建动画效果的路由跳转
import App from "./view/route-pose/index"



// import {Example} from './example'

import reportWebVitals from './reportWebVitals';
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
