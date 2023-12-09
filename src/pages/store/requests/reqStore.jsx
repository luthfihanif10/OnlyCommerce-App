import { useState, useEffect } from 'react'
import './reqStore.css'
import ReqCardStore from './reqCardStore'
import Navbar from '../../../components/navbar1'
import axios from 'axios'

function ReqStore() {
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
			<Navbar role='toko' />
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
							return <ReqCardStore key={reqs.id} data={reqs} />
						})}
					</div>
				</div>
			) : (
				<h1 style={{ textAlign: 'center' }}>Tidak ada permintaan saat ini!</h1>
			)}
		</div>
	)
}

export default ReqStore

function getReqAmount(requests) {
	return requests.length
}
