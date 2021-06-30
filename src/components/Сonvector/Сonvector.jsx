import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import style from './style.module.css'
import { getDataMoneyThunk, searchDataMoney } from '../../redux/actions/dataMoney'
import { useState } from 'react'



export default function Сonvector() {
	const { dataMoney } = useSelector(state => state)
	const [selectValue, setSelectValue] = useState(0)
	const [count, setCount] = useState(1)
	const [result, setResult] = useState(0)


	let initialValue = Object.values(dataMoney)[0]
	// console.log(initialValue.Value);	
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(getDataMoneyThunk())
	}, [])

	function resultСalculate() {
		setResult((selectValue * count).toFixed(2))
	}

	return (
		<div>
			<div className={style.title}>
				<h2>Конвектор</h2>
			</div>

			<div className={style.boxConvert}>

				<div className={`${style.count} `}>
					<input className="form-control" onChange={e => setCount(e.target.value)} value={count} type="number" min='1' step='1' />
				</div>
				<div> ед </div>
				<div className={style.text}>

				</div>
				<div className={`${style.country} mr-5`}>
					<select className="form-select form-select-sm " aria-label=".form-select-sm example" onChange={e => setSelectValue(e.target.value)} value={selectValue}  >
						<option></option>
						{Object.values(dataMoney).map((el, i) => {
							// if(i===0)setSelectValue(el.Value);
							return <option value={el.Value}>{el.Name}</option>
						})
						}
					</select>
				</div>
				<div className='mr-5'>
					<button className="btn btn-primary btn-sm" onClick={() => resultСalculate()}>посчиать</button>
				</div>
				<div className={`${style.result} `}>
					= {result} ₽
				</div>
			</div>


		</div>
	)
}

