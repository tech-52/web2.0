import React, { useState } from 'react'
import './index.css'
import './aside.css'
import User_image from './User.jpg'

class User extends React.Component{
    render(){
        return(
            <div className="User">
                <a href="/#"><img  alt="User_image" src={User_image} width="80px" /></a>
                <Dropdown name={<span>MightyThor</span>} content={<ul></ul>}/>
            </div>
        );
    }
}
class Nav extends React.Component{
    render(){
        return(
            <div id="aside_nav">
            <ul>
                <li><span>导航</span></li>
                <li>
                    <a href="/#">
                        <span className="nav-icon"><svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-home">
                            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline>
                        </svg>
                        </span>首页</a>
                </li>
                <li>
                    <a href="/#">
                        <span className="nav-icon"><svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-archive">
                            <polyline points="21 8 21 21 3 21 3 8"></polyline>
                            <rect x="1" y="3" width="22" height="5"></rect>
                            <line x1="10" y1="12" x2="14" y2="12"></line>
                        </svg>
                        </span>归档</a>
                </li>
                <li>
                    <a href="/#">
                        <span className="nav-icon"><svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-at-sign">
                            <circle cx="12" cy="12" r="4"></circle>
                            <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"></path>
                        </svg>
                        </span>留言</a>
                </li>
                <li>
                    <a href="/#">
                        <span className="nav-icon"><svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-image">
                            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                            <circle cx="8.5" cy="8.5" r="1.5"></circle>
                            <polyline points="21 15 16 10 5 21"></polyline>
                        </svg>
                        </span>相册</a>
                </li>
                <li>
                    <a href="/#">
                        <span className="nav-icon"><svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-coffee">
                            <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
                            <line x1="6" y1="1" x2="6" y2="4"></line>
                            <line x1="10" y1="1" x2="10" y2="4"></line><line x1="14" y1="1" x2="14" y2="4"></line>
                        </svg>
                        </span>关于</a>
                </li>
                <li>
                    <a href="/#">
                        <span className="nav-icon"><svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-link">
                            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                        </svg>
                        </span>十年之约</a>
                </li>
                <li><span>组成</span></li>
                
                <Dropdown 
                        name={
                        <span className="nav-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-grid">
                                <rect x="3" y="3" width="7" height="7"></rect>
                                <rect x="14" y="3" width="7" height="7"></rect>
                                <rect x="14" y="14" width="7" height="7"></rect>
                                <rect x="3" y="14" width="7" height="7"></rect>
                            </svg>
                        分类
                        </span>} 
                        content={
                        <ul className="aside_drop">
                            <li><a href="/public/index_main.html" target="content_iframe" onclick="goBacktop()">技能学习</a></li>
                            <li><a href="/public/index_main.html" target="content_iframe" onclick="goBacktop()">生活随笔</a></li>
                            <li><a href="/public/photo.html" target="content_iframe" onclick="goBacktop()">旅行相册</a></li>
                        </ul>} 
                    /> 
                
                <Dropdown 
                        name={
                            <span className="nav-icon"><svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-file"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path><polyline points="13 2 13 9 20 9"></polyline></svg>
                            页面
                            </span>} 
                        content={
                        <ul className="aside_drop">
                            <li><a href="/public/myworld.html" target="content_iframe" onclick="goBacktop()">时光机</a></li>
                            <li><a href="/public/message.html" target="content_iframe" onclick="goBacktop()">留言板</a></li>
                        </ul>} 
                    /> 
                <Dropdown 
                        name={
                            <span className="nav-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle>
                            </svg>
                            友情链接
                            </span>
                            } 
                        content=
                        {
                        <ul className="aside_drop">
                            <li><a href="https://www.w3school.com.cn/index.html" >W3School</a></li>
                            <li><a href="https://www.guitu18.com/" >夜月归途</a></li>
                        </ul>
                        } 
                /> 
            </ul>
        </div>
        );
    }
}
function Dropdown(props){
    let [a,setA] = useState(false)
    return(
        <li>
        <a href="/#" onClick={()=>{
            setA(!a)
        }}>{props.name}</a>
        {
            a && 
        <div className=".bg-white">{props.content}</div> 
        }
        </li>
    );
}
class Aside extends React.Component{
    render(){
        return(
            <aside id="aside">
                <div>
                    <div>
                    <User />
                    <Nav />
                    </div>
                </div>
            </aside>
        );
    }
}

export default Aside