import React, { useState } from 'react'

export default function PostJob() {
	const [data, setdata] = useState({
		customer_id: "",
		customer_name: "",
		job_title: "",
		job_location: "",
		budget_from: "",
		budget_to: "",
		job_type: "",
		people: "",
		skills: [],
		experience: "",
		shot_dec: "",
		details: ""
	})
	const handleSubmit = (e) => {
		e.preventDefault()
		const xhr = new XMLHttpRequest()
		xhr.open('POST', 'https://techsellindia.co.in/shramik/api/add_new_job')
		xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8')
		xhr.onload = () => {
			const data = JSON.parse(xhr.response)
			console.log(data)
		}
		xhr.send(JSON.stringify(data))
	}
	return (
		<div className='container'>
			<div className="row">
				<div className="col-sm-6 offset-sm-3">
					<div className="card">
						<div className="card-header">Form Data</div>
						<div className="card-body">
							<form onSubmit={handleSubmit}>
								<input onChange={e => setdata({ ...data, customer_id: e.target.value })} type="number" placeholder='enter customer id' className="form-control" />
								<br />
								<input onChange={e => setdata({ ...data, customer_name: e.target.value })} type="text" placeholder='enter customer name' className="form-control" />
								<br />
								<input onChange={e => setdata({ ...data, job_title: e.target.value })} type="text" placeholder='enter job title' className="form-control" />
								<br />
								<input onChange={e => setdata({ ...data, job_location: e.target.value })} type="text" placeholder='enter job location' className="form-control" />
								<br />
								<input onChange={e => setdata({ ...data, budget_from: e.target.value })} type="number" placeholder='enter budget form' className="form-control" />
								<br />
								<input onChange={e => setdata({ ...data, budget_to: e.target.value })} type="number" placeholder='enter budget to' className="form-control" />
								<br />
								<input onChange={e => setdata({ ...data, job_type: e.target.value })} type="text" placeholder='enter job type' className="form-control" />
								<br />
								<input onChange={e => setdata({ ...data, people: e.target.value })} type="number" placeholder='enter people' className="form-control" />
								<br />
								<input onChange={e => setdata({ ...data, experience: e.target.value })} type="text" placeholder='enter your experience' className="form-control" />
								<br />
								<input onChange={e => setdata({ ...data, skills: [...data.skills, e.target.value] })} type="text" placeholder='enter your skills' className="form-control" />
								<br />
								<input onChange={e => setdata({ ...data, shot_dec: e.target.value })} type="text" placeholder='short description' className="form-control" />
								<br />
								<input onChange={e => setdata({ ...data, details: e.target.value })} type="text" placeholder='enter your details' className="form-control" />
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
