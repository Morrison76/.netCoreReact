import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';

export class NavMenu extends Component {
  displayName = NavMenu.name

  render() {
	  return (
		  <div className='navbar navbar-inverse navbar-default'>
			  <div className='container-fluid'>
				  <div className='navbar-collapse collapse'>
					  <ul className='nav navbar-nav'>
						  <li>
							  <NavLink to={'/'} exact activeClassName='active'>
								  <span className='glyphicon glyphicon-home'></span> Home
                                </NavLink>
						  </li>
					  </ul>
				  </div>
			  </div>
		  </div>);
  }
}
