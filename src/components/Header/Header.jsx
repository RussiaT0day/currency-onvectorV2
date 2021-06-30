import style from './style.module.css'

import {
	BrowserRouter as Router,
	Link
} from "react-router-dom";


export default function Header() {

	return (
		<div className={style.header}>
			<nav>
				<ul>
					<li>
						<Link to="/">Валюты</Link>
					</li>
					<li>
						<Link to="/convector">Конвектор</Link>
					</li>
				</ul>
			</nav>
		</div>
	)
}

