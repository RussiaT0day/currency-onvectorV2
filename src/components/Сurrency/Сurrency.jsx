import { getDataMoneyThunk, searchDataMoney } from '../../redux/actions/dataMoney'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import style from './style.module.css'
import { useState } from 'react'


export default function Сurrency() {

	const [search, setSearch] = useState()
	const { dataMoney } = useSelector(state => state)
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(getDataMoneyThunk())
	}, [])

	useEffect(() => {
		// dispatch(searchDataMoney(search))
	}, [search])


	return (
		<div className={style.currency}>
			<div className={style.title}>
				<h2>Валюты</h2>
			</div>
			{Object.values(dataMoney).map(el => <div className={style.currency_box} key={new Date()}>
				<div>
					{el.Name}
				</div>

				<div>
					{el.Value.toFixed(2)}₽

				</div>

			</div>)}
		</div>
	)
}

