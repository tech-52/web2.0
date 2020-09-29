import React, { useState } from 'react'
import './index.css'
import './header.css'
import logo_image from './logo.png'
class Brand extends React.Component {
    render() {
        return(
            <div className="brand bg-white">
                <a href="/#">
                    <img alt="brand" src={logo_image} />
                    <span>MYWEB2.0</span>
                </a>
            </div>
        );
    }
  }
class Gossip extends React.Component{
    render(){
        return(
            <div className="gossip">
                 <a href="/public/myworld.html" target="content_iframe" onclick="goBacktop()">
                    <span>
                         最近这雨是包月了啊，还是连续包月那种
                        <br/>
                        <small>2020-09-02 14:13:36</small>
                    </span>
                </a>
                <a href="/public/myworld.html" target="content_iframe" onclick="goBacktop()">
                    <span>
                        端午节后的第一周比平常多了一天，不巧的是这一周的我还特别的闲，更加让我感觉这一周特别长。上班又不能老划水以浪费时间，所以利用这段时间进行自我提升。只是最近发生的事情比较多，又是刚收假，所以进入深度学习状态的速度比较慢，效率不高。学习还是一件比较吃自制力的事情，加油吧。
                        <br/>
                        <small>2020-09-02 14:13:36</small>
                    </span>
                </a>
                <a href="/public/myworld.html" target="content_iframe" onclick="goBacktop()">
                    <span>
                        人生真的必须多经历过几次社会的毒打才能明白一些事情
                        <br/>
                        <small>2020-09-02 14:13:36</small>
                    </span>
                </a>
            </div>
        );
    }
}
class Login extends React.Component{
    render(){
        return(
            <form id="login_form" >
                <div>
                    <label>用户名</label>
                    <input type="text" placeholder="用户名或者电子邮箱" id="login_name" />
                </div>
                <div>
                    <label>密码</label>
                    <input type="password" placeholder="密码" id="login_pwd" />
                </div>
                <button id="login_btn" className="login_submit" type="submit" >登录</button>
            </form>
        );
    }
}
class Musicbox extends React.Component{
    render(){
        return(
            <audio controls>
                    <source src="/public/music/test2.mp3" />
            </audio>
        );
    }
}
function Dropdown(props){
    let [a,setA] = useState(false)
    return(
        <li>
        <a href="/#" onClick={()=>{
            setA(!a)
        }}>{props.svg}</a>
        {
            a && 
        <div className="drop .bg-white">{props.content}</div> 
        }
        </li>
    );
}
class Search extends React.Component{
    render(){
        return(
            <form className="searchform navbar-form navbar-form-sm navbar-left shift">
                <div className="input-group rounded bg-white-pure box-shadow-wrap-normal">
                    <input id="search_input" type="search" name="s" className="transparent rounded form-control input-sm no-borders padder" required="" placeholder="输入关键词搜索…" />
                    <ul id="search_tips_drop" className="small-scroll-bar dropdown-menu hide" ></ul>
                    <span id="search_submit" className="transparent input-group-btn">
                        <button type="button" className="transparent btn btn-sm">
                            <span className="feathericons" id="icon-search"><svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="feather feather-search"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg></span>
                            <span className="feathericons animate-spin  hide" id="spin-search"><svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-loader"><line x1="12" y1="2" x2="12" y2="6"></line><line x1="12" y1="18" x2="12" y2="22"></line><line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line><line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line><line x1="2" y1="12" x2="6" y2="12"></line><line x1="18" y1="12" x2="22" y2="12"></line><line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line><line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line></svg></span>
                        </button>
                    </span>
                </div>
            </form>
        );
    }
}
class Navbarright extends React.Component{
    render(){
        return(
            <div className="navbarright bg-white">
                <Search />
                <ul className="nav navbar-nav navbar-right">
                    {/* 音乐播放器 */}
                    <li></li>
                    {/* 下拉音乐列表 */}
                    <Dropdown svg={<svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-disc"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="3"></circle></svg>}/>
                    {/* 闲言碎语 */}
                    
                        <Dropdown 
                            content={<Gossip/>} 
                            svg={
                            <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-twitch">
                                <path d="M21 2H3v16h5v4l4-4h5l4-4V2zm-10 9V7m5 4V7"></path>
                            </svg>} 
                            />
                    
                    {/* 夜间模式 */}
                    <Dropdown svg={<svg t="1589442833405" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="12541" strokeWidth="2" width="16px" height="16px"><path d="M792 196.8c10.7 13.4 23.1 25.8 36.6 36.3-13.6 10.8-26.2 23.4-37 37.1-10.6-13.5-23-25.9-36.5-36.6 13.7-10.6 26.2-23.1 36.9-36.8m-0.5-94.5c0 61.4-74.3 130.5-130.5 130.5 56.2 0.9 130.4 72.5 130.4 130.5 0-58 76.1-130.6 130.6-130.6-56.2 0-130.5-69.9-130.5-130.4zM456 372.6c-2.7 0-5.4-1.2-7.3-3.5-3.2-4-2.6-9.9 1.5-13.1l93.2-74.6c4.1-3.2 9.9-2.5 13.1 1.5 3.2 4 2.6 9.9-1.5 13.1l-93.2 74.6c-1.8 1.3-3.8 2-5.8 2zM344.1 614.9c-2.8 0-5.5-1.2-7.4-3.6-3.2-4.1-2.4-9.9 1.6-13.1l335.5-261c4-3.2 9.9-2.4 13.1 1.6 3.2 4.1 2.4 9.9-1.6 13.1L349.8 613c-1.7 1.3-3.7 1.9-5.7 1.9z" p-id="12542"></path><path d="M523.6 960.2c-253.3 0-459.4-204.1-459.4-455 0-208.4 142.6-389.6 346.8-440.6 7.2-1.8 15 0.9 19.5 7s4.9 14.2 1 20.7C395.8 151.5 377 218.9 377 287.1c0 61.2 15 122.1 43.5 176.1 4.8 9.1 1.3 20.4-7.8 25.2-9.1 4.8-20.4 1.3-25.2-7.8-31.2-59.3-47.7-126.2-47.7-193.4 0-59.8 13.2-119 38.4-173.5-164.8 59.7-276.6 215-276.6 391.7 0 230.3 189.4 417.7 422.1 417.7 165.8 0 314.6-95.9 383-242.6-97.1 35.3-205.7 33.4-301.2-4.5-45.4-18-87-43.5-123.6-75.7-7.7-6.8-8.5-18.6-1.7-26.3 6.8-7.7 18.6-8.5 26.3-1.7 33.5 29.4 71.4 52.7 112.8 69.1 45.5 18.1 93.8 27.2 143.3 27.2 59.1 0 116.4-13.3 170.1-39.6 6.8-3.3 14.9-2.2 20.5 2.8s7.7 12.9 5.3 20c-63.6 184.5-238.3 308.4-434.9 308.4z" p-id="12543"></path></svg>}/>
                    {/* 登录 */}
                    <Dropdown content={<Login/>} svg={<svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-key"><path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"></path></svg>} />
                </ul>
            </div>
        );
    }
}

class Header extends React.Component{
    render(){
        return(
            <header id="header">
                <Brand />
                <Navbarright />
            </header>
        );
    }
}
export default Header;