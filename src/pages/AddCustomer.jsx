import React, { useState } from 'react'

export default function AddCustomer() {
	const [customerData, setcustomerData] = useState({
		full_name: "",
		mobile: "",
		address: "",
		firebase_id: "",
	})
	const handleCustomerData = (e) => {
		e.preventDefault()
		// console.log(customerData);
		const xhr = new XMLHttpRequest()
		xhr.open('POST', 'https://techsellindia.co.in/shramik/api/add_customer')
		xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8')
		xhr.onload = () => {
			const data = JSON.parse(xhr.response)
			console.log(data)
		}
		xhr.send(JSON.stringify(customerData))
	}
	return (
		<div className='container'>
			<div className="row">
				<div className="col-sm-6 offset-sm-3">
					<div className="card">
						<div className="card-body">
							<form onSubmit={handleCustomerData}>
								<input onChange={e => setcustomerData({ ...customerData, full_name: e.target.value })} type="text" className="form-control" placeholder='Enter Your Full Name' />
								<br />
								<input onChange={e => setcustomerData({ ...customerData, mobile: e.target.value })} type="number" placeholder='Enter Your Mobile Number' className="form-control" />
								<br />
								<input onChange={e => setcustomerData({ ...customerData, address: e.target.value })} type="text" placeholder='Enter Your Address' className="form-control" />
								<br />
								<input onChange={e => setcustomerData({ ...customerData, firebase_id: e.target.value })} type="text" placeholder='Enter Your Firebase ID ' className="form-control" />
								<br />
								<button className="btn btn-success w-100">Submit</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
