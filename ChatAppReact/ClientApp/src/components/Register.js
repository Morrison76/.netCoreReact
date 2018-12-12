import React, { Component } from 'react';
import axios from 'axios';

export class Register extends Component {
	displayName = Register.name;

	constructor(props) {
		super(props);
		this.state = {
			name: ''
		};

		this.onSubmit = this.onSubmit.bind(this);
	}

	onChange = (event) => {
		this.setState({
			name: event.target.value
		});
	};

	onSubmit(event) {
		event.preventDefault();
		axios.get('/api/users/exists?name=' + this.state.name)
			.then(this.onSuccess)
			.catch(function (error) {
				console.log(error);

                alert("Username already exists");
			});
	}

	onSuccess = (response) => {
		window.Username = this.state.name;
		this.props.history.push('/chatScreen');
    };


    createSelectItems() {
        let items = ['Невідомий єдиноріг', 'Невідомий пес', 'Невідомий кіт', 'Невідомий єнот', 'Невідома змія', 'Невідомий хом"як', 'Невідомий їжак', 'Невідомий борсук', 'Невідома жирафа', 'Невідомий леопард', 'Невідомий кріт'];
        for (let i = 0; i <= 10; i++) {
            items.push(<option key={items[i]} value={items[i]}>{items[i]}</option>);
        }
        return items;
    } 

	render() {
		return <div className='panel panel-default'>
			<div className='panel-body'>
				<form className='register-form'>
					<label>
						Name:
					</label>
                    <select label="Select">
                        {this.createSelectItems()}
                    </select>
					<button onClick={this.onSubmit}>Send</button >
				</form>
			</div>
		</div>;
	}
}