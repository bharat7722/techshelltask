import React, { useEffect, useState } from 'react'

export default function FetchData() {
	const [data, setdata] = useState([])
	const [experience, setexperience] = useState([])
	const handleData = (e) => {
		const xhr = new XMLHttpRequest()
		xhr.open('GET', 'https://techsellindia.co.in/shramik/api/skills')
		xhr.send()
		xhr.onload = () => {
			const data = JSON.parse(xhr.response)
			setdata(data.data)
			// console.log(data)
		}
	}
	const getData = (e)=>{
		const xhr = new XMLHttpRequest()
		xhr.open('GET', 'https://techsellindia.co.in/shramik/api/experience')
		xhr.send()
		xhr.onload = () => {
			const data = JSON.parse(xhr.response)
			setexperience(data.data)
			// console.log(data)
		}
	}
	useEffect(() => {
		handleData()
		getData()
	}, [])
  return (
	<div className='container'>
		<div className="row">
			<div className="col-sm-6 offset-sm-3">
				<div className="card mt-2">
					<div className="card-body">
						<h5>Skills Data</h5>
						<table className="table table-bordered">
							<thead>
								<tr>
									<th>Skills</th>
									<th>Slugs</th>
									<th>Created At</th>
									<th>Updated At</th>
								</tr>
							</thead>
							<tbody>
								{data.map((item, index) => {
									return (
										<tr key={index}>
											<td>{item.skills}</td>
											<td>{item.slug}</td>
											<td>{item.created_at}</td>
											<td>{item.updated_at}</td>
										</tr>
									)
								})}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
		<div className="row">
			<div className="col-sm-6 offset-sm-3">
				<div className="card mt-2">
					<div className="card-body">
						<h5>Experience Data</h5>
						<table className="table table-bordered">
							<thead>
								<tr>
									<th>Experience</th>
									<th>Slugs</th>
									<th>Created At</th>
									<th>Updated At</th>
								</tr>
							</thead>
							<tbody>
								
								{experience.map((item, index) => {
									return (
										<tr key={index}>
											<td>{item?.experience}</td>
											<td>{item?.slug}</td>
											<td>{item?.created_at}</td>
											<td>{item?.updated_at}</td>
										</tr>
									)
								})}
							</tbody>
						</table>
						</div>
						</div>
						</div>
		</div>
	</div>
  )
}
