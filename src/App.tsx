import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Button} from 'antd';

function App() {
  return (
    <div>
		<div>
			<Button type="primary">Primary</Button>
			<Button>Default</Button>
			<Button type="dashed">Dashed</Button>
		</div>
		<br />
		<div>
			<Button type="primary" size="large">
				Primary
			</Button>
			<Button size="large">Default</Button>
			<Button size="large" type="dashed">
				Dashed
			</Button>
		</div>

		<br />
		<div>
			<Button type="primary" size="small">
				Primary
			</Button>
			<Button size="small">Default</Button>
			<Button size="small" type="dashed">
				Dashed
			</Button>
		</div>

	</div>
  );
}

export default App;
