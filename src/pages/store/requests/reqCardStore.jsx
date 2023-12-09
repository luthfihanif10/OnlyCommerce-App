function ReqCardStore({ data }) {
	const { produk, jumlah: amount, status_request: status } = data
	return (
		<div className='req-cards'>
			<img src={`/src/assets/products/${produk?.id_produk}.png`} />
			<div className='info'>
				<b>{produk?.nama_produk}</b>
				<div>
					<p>Id: {produk?.id_produk}</p>
					<p>Amount: {amount}</p>
					<p>
						Status: <strong>{status}</strong>
					</p>
				</div>
			</div>
		</div>
	)
}

export default ReqCardStore
