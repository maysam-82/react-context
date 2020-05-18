import React, { Component } from 'react';

class App extends Component {
	state = {
		language: 'english',
	};

	onLanguageChanged = (language) => {
		this.setState({ language });
	};

	render() {
		return (
			<div className="ui container">
				<div>
					Select a language:
					<i
						className="flag gb"
						onClick={() => this.onLanguageChanged('english')}
					/>
					<i
						className="flag ir"
						onClick={() => this.onLanguageChanged('persian')}
					/>
				</div>
			</div>
		);
	}
}

export default App;
