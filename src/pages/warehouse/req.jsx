import { useContext, useState, useEffect } from 'react'
import './req.css'
import { Requests } from '../../requestings'
import ReqCards from './req-cards'
import axios from 'axios'
import Navbar from '../../components/navbar1'

function Req() {
	const [requests, setRequests] = useState([])

	useEffect(() => {
		axios
			.get('https://onlycommerce.onrender.com/v1/requests')
			.then((res) => setRequests(res.data.data))
			.catch((error) => console.log(error))
	}, [])

	const totalReq = getReqAmount(requests)
	return (
		<div>
			<Navbar role="gudang" />
			{totalReq > 0 ? (
				<div className='requests'>
					<div>
						<h1>
							Request saat ini
							<br />
						</h1>
					</div>
					<div className='req-body'>
						{requests.map((reqs) => {
							return <ReqCards key={reqs.id} data={reqs} />
						})}
					</div>
				</div>
			) : (
				<h1 style={{ textAlign: 'center' }}>Tidak ada permintaan saat ini!</h1>
			)}
		</div>
	)
}

export default Req

function getReqAmount(requests) {
	return requests.length
}
