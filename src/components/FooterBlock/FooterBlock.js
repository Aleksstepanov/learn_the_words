import React from 'react';

const FooterBlock = (props) => {
    return (
        <footer className="page-footer">
          <div className="container">
            <div className="row">
              <div className="col l6 s12">
                <h5 className="white-text">{ props.title }</h5>
                <p className="grey-text text-lighten-4">{ props.desc }</p>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="container">
           © {props.year} Copyright Text
            <a className="grey-text text-lighten-4 right" href="#!">{props.autor}</a>
            </div>
          </div>
        </footer>
    )
}

export default FooterBlock;