import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Header from './header'
import Aside from './aside'
import Main from './main'

class Footer extends React.Component{
  render(){
    return(
      <footer id="footer">
        <span id="footer_left">© 2020 Copyright</span>
        <span id="footer_right">Powered by Restity | Theme by React</span>
    </footer>
    );
  }
}
  ReactDOM.render(
    <div className="center">
      <Header />
      <Aside />
      <Main />
      <Footer />
    </div>,
    document.getElementById('root')
  );