import React,{useState} from 'react'
import './index.css'
import './main.css'


function Asidebar(){
    return(
    <aside className="asideBar bg-white-only">
        <Section1 />
        <Section2 />
        <Section3 />
    </aside>
    );
}
function Section1() {
    let [i,selectI] = useState(1);
    return(
        <section>
            <div>
                <ul>
                    <li><a href="./#" onClick={() => selectI(1)}><div><svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="feather feather-thumbs-up"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path></svg></div></a></li>
                    <li><a href="./#" onClick={() => selectI(2)}><div><svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="feather feather-message-square"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg></div></a></li>
                    <li><a href="./#" onClick={() => selectI(3)}><div><svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="feather feather-gift"><polyline points="20 12 20 22 4 22 4 12"></polyline><rect x="2" y="7" width="20" height="5"></rect><line x1="12" y1="22" x2="12" y2="7"></line><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"></path><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"></path></svg></div></a></li>
                </ul>
            </div>
            <div>
            {i===1 &&
            <div>
                <h5>热门文章</h5>
                <ul>
                    <li>

                    </li>
                </ul>
            </div>
            }
            {i===2 &&
            <div>
                <h5>最新评论</h5>
                <ul>
                    <li>

                    </li>
                </ul>
            </div>}
            {i===3 &&
            <div>
                <h5>随机文章</h5>
                <ul>
                    <li>

                    </li>
                </ul>
            </div>}
            
            </div>
        </section>
    );
}
function Section2() {
    return(
        <section>
            <h5>博客信息</h5>
            <ul class="list-group box-shadow-wrap-normal">
                    <li class="list-group-item text-second"><span class="blog-info-icons"> <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-award"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg></span> 
                        <span class="badge pull-right" >76</span>文章数目</li>
                    <li class="list-group-item text-second"> <span class="blog-info-icons"> <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-message-circle"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg></span>
                        <span class="badge pull-right" >220</span>评论数目</li>
                    <li class="list-group-item text-second"><span class="blog-info-icons"> <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-calendar"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg></span>
                        <span class="badge pull-right" >2年235天</span>运行天数</li>
                    <li class="list-group-item text-second"><span class="blog-info-icons"> <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-activity"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg></span> 
                        <span class="badge pull-right" >2 个月前</span>最后活动</li>
       </ul>
        </section>
    );
}
function Section3() {
    return(
        <section>
            <h5>标签云</h5>
            <div>
            <a></a>
            </div>
        </section>
    );
}
function Centerpart(){
    return(
    <div className="center-part bg-light lter">
    {/* 首页头 */}
    <header>
        <h1>MightyThor</h1>
    </header>
    <div>
        {/* 首页输出文章 */}
        <div></div>
        {/* 首页分页按钮 */}
        <nav>
            <ol></ol>
        </nav>
    </div>
</div>);

}
function Mainindex(){
    return(
        <div id="mainindex">
        {/* 中间主页 */}
            <Centerpart />
            <Asidebar />
        </div>
    );
}
class Main extends React.Component{
    render(){
        return(
            <div id="content" className="content">
                <div></div>
                <main>
                    <Mainindex />
                </main>
            </div>
            
        );
    }
}

export default Main