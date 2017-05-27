var React = require('react');
var {Link, IndexLink} = require('react-router');

var Navigation = () => {
  return(
    <div className="top-bar">
      <div className="top-bar-left">
        <ul className="menu">
          <li className="menu-text">
            React Utility App
          </li>
          <li>
            <IndexLink to="/" activeClassName="active-link">Timer</IndexLink>
          </li>
          <li>
            <Link to="/" activeClassname="active-link">Counter</Link>
          </li>
        </ul>
      </div>
      <div className="top-bar-right">
        <ul className="menu">
          <li className="menu-text">
            Developed by <a href="#" target="_blank">Mohit Arun Inampudi</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

module.exports = Navigation;
