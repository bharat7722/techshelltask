import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
export default function UpdateProfilePic() {
	const [image, setimage] = useState()
	const updateProfile = (e) => {
		e.preventDefault()
		// there is no users id for update profile pic
		// if i have users id then i can update profile pic
		const xhr = new XMLHttpRequest()
		xhr.open('PUT', `https://techsellindia.co.in/shramik/api/update_customer_pic/`)
		xhr.setRequestHeader('Content-Type', 'multipart/form-data;charset=UTF-8',)
		xhr.onload = () => {
			const data = JSON.parse(xhr.response)
			console.log(data)
		}
		xhr.send(JSON.stringify({profile_pic:image}))
	}
	const handleUpdateProfile = (e) => {
		setimage(e.target.files[0])
		console.log(image);
	}
	return (
		<div className='container'>
			<div className="row">
				<div className="col-sm-6 offset-sm-3">
					<div className="card mt-4">
						<div className="card-header">Update Profile Pic</div>
						<div className="card-body">
							<form onSubmit={updateProfile}>
								<input onChange={handleUpdateProfile} type="file" className="form-control" />
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
