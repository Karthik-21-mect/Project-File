import React from 'react';
import './TaskBar.css';
import logo from '../image/logo.png';

function TaskBar() {
  return (
    <div className='TaskBar'>
      <div className='Title'>
        <img src={logo} alt="Logo" className='logo-img' />
        <span className='TitleText'>iamneo.ai Talent Center</span>
      </div>
      <div className='TitleIcons'>
        <i className="ri-account-circle-fill ri-2x"></i>
        <i className="ri-question-line ri-lg"></i>
        <i className="ri-gift-line ri-lg"></i>
        <i className="ri-search-line ri-lg"></i>
        <div>
          <button className="add-new">+ Add New</button>
        </div>
      </div>
    </div>
  );
}

export default TaskBar;