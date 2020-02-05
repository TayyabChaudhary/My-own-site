import React from 'react';
import './style.scss';
import Darkmode from 'darkmode-js';
export default()=> {
    var options = {
        bottom: '64px', // default: '32px'
        right: 'unset', // default: '32px'
        left: '32px', // default: 'unset'
        time: '0.5s', // default: '0.3s'
        mixColor: '#fff', // default: '#fff'
        backgroundColor: '#fff',  // default: '#fff'
        buttonColorDark: '#100f2c',  // default: '#100f2c'
        buttonColorLight: '#fff', // default: '#fff'
        saveInCookies: false, // default: true,
        label: '🌓', // default: ''
        autoMatchOsTheme: true // default: true,        
      }
      
      const darkmode = new Darkmode(options);
      darkmode.showWidget();
  return (
    <div>
    <section className="section">
        <div className="container">
            <div className="columns col3">
                <div className="column">
                    <img src="https://millionmilesecrets.com/wp-content/uploads/shutterstock_530222965-800x562.jpg"/>
                </div>
                <div className="column">
                <div className="content3">
                <h1 className="is-size-1 has-text-weight-bold has-text-info">AFFORDABLE AND CREATIVE WEB DESIGN SOLUTION</h1>
               <p className="has-text-weight-bold">In 1989, whilst working at CERN Tim Berners-Lee proposed to create a global hypertext project,
                which later became known as the World Wide Web. During 1991 to 1993 the World Wide Web was born.
                 Text-only pages could be viewed using a simple line-mode browser.
                 [2] In 1993 Marc Andreessen and Eric Bina, created the Mosaic browser.
                  At the time there were multiple browsers, however the majority of them were Unix-based and naturally
                   text heavy. There had been no integrated approach to graphic design elements such as images or sounds.
                    The Mosaic browser broke this mould.
                    A website or web site is a collection of related network web resources, such as web pages, multimedia content, which are typically identified with a common domain name, and published on at least one web server. Notable examples are wikipedia.org, google.com, and amazon.com.</p>
                </div>
                </div>
            </div>
        </div>
    </section>
    </div>
  );
}
