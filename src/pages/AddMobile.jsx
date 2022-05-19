import React, { useState } from 'react'

export default function AddMobile() {
	const [mobile, setmobile] = useState()
	const handleMobile = (e) => {
		e.preventDefault()
		const xhr = new XMLHttpRequest()
		xhr.open('POST', 'https://techsellindia.co.in/shramik/api/login_customer')
		xhr.send(mobile)
		xhr.onload = () => {
			const data = JSON.parse(xhr.response)
			console.log(data)
		}
	}
  return (
	<div className='container'>
		<div className="row">
			<div className="col-sm-6 offset-sm-3">
				<div className="card">
					<div className="card-body">
						<form onSubmit={handleMobile}>
							<input type="number" onChange={e=> setmobile(e.target.value)} className="form-control" placeholder='Enter Your Mobile' />
							<br />
							<button className="btn btn-success">Submit</button>
						</form>
					</div>
				</div>
				</div>
		</div>
	</div>
  )
}
