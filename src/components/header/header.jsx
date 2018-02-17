import React from 'react';
import PropTypes from 'prop-types';
import './header.css';

class HeaderComponent extends React.Component {
  render() {
    return (
      <div className="HeaderTop">
        <div className="HeaderText">
          {this.props.headerText}
        </div>
      </div>
    );
  }
}

HeaderComponent.propTypes = {
  headerText: PropTypes.string.isRequired,

};
export default HeaderComponent;
