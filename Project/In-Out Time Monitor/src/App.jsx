import { useState,useEffect } from 'react'

import './App.css'


function App() {
	//useState function for In-Time section 
const [name, setName] = useState('')
const [password, setPassword] = useState('')
const [email, setEmail] = useState('')

//useState function for Out-Time section
const [outname, setOutname] = useState('')
const [outpassword, setOutpassword] = useState('')


function Name(event) {
  setName(event.target.value)
  // localStorage.setItem('{name}', name)
}

function Email(event) {
  setEmail(event.target.value)
}

function Password(event) {
  setPassword(event.target.value)
}

function outName(event) {
  let len = event.target.value
  setOutname(len)
  
}

function outPassword(event) {
  setOutpassword(event.target.value)
}

// useEffect(() => {
// 	axios.get(`${baseURL}/${i}`).then((response) => {
// 	  setPost(response.data);
// 	});
//   },[]);

function inTime(e) {
  e.preventDefault()
		
		const emailVal = /^([A-za-z0-9_.])+\@([a-z])+\.([a-z])+$/;
		let p = document.getElementById("p")
		if (name == '') {
			p.innerHTML = "Enter username"
		}
		else if (email == '' || !emailVal.test(email)) {
			p.innerHTML = "Enter valid email"
		}
		else if (password == '') {
			p.innerHTML = "Enter password"
		}
		else if(document.getElementById(name+password) && !document.getElementById(password+name)=='') {
			p.innerHTML = "Already logged in"
		}
		
		else{
			let time = new Date().toLocaleTimeString()
			var table = document.getElementById("table")
			var newRow = table.insertRow(1)
			
			var cell1 = newRow.insertCell(0)
			var cell2 = newRow.insertCell(1)
			var cell3 = newRow.insertCell(2)
			
			cell1.id = name+password
			cell3.id = password+name
			p.innerHTML = name + " LOGGED IN AT " + time
			
			
			cell1.innerHTML = name;
			cell2.innerHTML = time;
			
			// cell4.innerHTML = contact;
		}
		// else{
		// 	p.innerHTML = "Already logged in"
		// }
	}
	
	function outTime(e) {
		e.preventDefault()
		let p1 = document.getElementById("p1")
		if (outname == '') {
			p1.innerHTML = "Enter username"
		}
		else if (outpassword == '') {
			p1.innerHTML = "Enter password"
		}
		// else if (!document.getElementById(outname).innerHTML == outname) {
		// 	p1.innerHTML = "User not found"
		// 	// if( outpassword == document.getElementById(outpassword)){
		// 	// //  p1.innerHTML =	document.getElementById(outname).value
		// 	// document.getElementById(name).innerHTML = time;
		// 	// }
		// 	// else{
		// 	//   p1.innerHTML = document.getElementById(outpassword).value
		// 	// }
		// }
		else if(document.getElementById(outpassword+outname).innerHTML==''){
			if(document.getElementById(outname+outpassword).innerHTML == outname){
			let time = new Date().toLocaleTimeString()
			p1.innerHTML = outname + " LOGGED OUT AT " + time
			document.getElementById(outpassword+outname).innerHTML = time
			}
			
		}
		else {
			p1.innerHTML = "Already logged out"
		}
	}

	return (
		<div className="App">
			<div className="midPart">
				<form >
					<h3>Sign Up</h3>
					<input type='text' placeholder='username' onChange={Name} /><br></br>
					<input type='email' placeholder='email' onChange={Email} /><br></br>
					<input type='password' id='lastIn' placeholder='password' onChange={Password} /><br></br>
					<button onClick={inTime}>Get In</button><br></br>
					<p id='p'></p>
				</form>
				<form>
					<h3>Login</h3>
					<input type='text' placeholder='username' onChange={outName} /><br></br>
					<input type='password' id='lastIn' placeholder='password' onChange={outPassword} /><br></br>
					<button onClick={outTime}>Sign off</button><br></br>
					<p id='p1'></p>
				</form>
			</div>
			<div class="tab" style={{visibility:'hidden'}}>
				<table id="table" border="1">
					<tr>
						<th width="25%">Userame</th>
						<th width="25%">Course Start Date</th>
						<th width="25%">Course Completion Date</th>
					</tr>
				</table>
			</div>
			{/* <div className="midPart">
      </div> */}

		</div>
	)
}

export default App



// import "./App.css";
// import { useState } from "react";

// function App() {
//   const [username, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [message, setMessage] = useState("");

//   let handleSubmit = async (e) => {
//     console.log("Submitted form");
//     e.preventDefault();
//     try {
//       let res = await fetch("https://mocki.io/v1/022f8ce0-9a64-4b8c-b885-a7f4d50edadd/post", {
//         method: "POST",
//         body: JSON.stringify({
//           username: username,
//           email: email,
//           password:password

//         }),
//       });
     
//       if (res.status === 200) {
//         setName("");
//         setEmail("");
//         setPassword("");
//         setMessage("User created successfully");
//       } else {
//         setMessage("Some error occured");
//       }
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   return (
//     <div className="App">
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           value={username}
//           placeholder="Name"
//           onChange={(e) => setName(e.target.value)}
//         />
		
//         <input
//           type="email"
//           value={email}
//           placeholder="Email"
//           onChange={(e) => setEmail(e.target.value)}
//         />

//         <input
//           type="password"
//           value={password}
//           placeholder="password"
//           onChange={(e) => setPassword(e.target.value)}
//         />

//         <button type="submit">Create</button>

//         <div className="message">{message ? <p>{message}</p> : null}</div>
//       </form>
//     </div>
//   );
// }

// export default App;


