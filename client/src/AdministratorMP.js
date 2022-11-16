// import { useEffect, useState } from "react";
// import "react-datepicker/dist/react-datepicker.css";
// import { Link } from "react-router-dom";
// import axios from "axios"

// export default function AdministratorMP(){
//   const [query, setQuery] = useState("");
//   const [data,setData] = useState([]);
//   useEffect(()=>{
//     const fetchUsers = async ()=>{
//       const res = await axios.get("http://localhost:5000")
//       setData(res.data);
//     };
//     fetchUsers();
//   },[]);
//     return (
//     <div>
//         <header className="site-header">
//             <div class="container">
//                 <p><ht class="back-ht"><Link className="text-link" to="/login-admin">A-Clinic</Link></ht></p>
//                   <p>Main Page</p>
//                   <p><Link className="text-link" to="/register-doctor">Register Doctor</Link></p>
//                   <p><Link className="text-link" to="/register-patient">Register Patient</Link></p>
//             </div>
//         </header>
    
//         <div className="features">
//           <input className="search" placeholder="Search" onChange={(e)=>setQuery(e.target.value)}/>
//           <table>
//             <tbody>
//               <tr>
//                 <th>Name</th>
//                 <th>Surname</th>
//                 <th>ID</th>
//               </tr>
//               {data.map((item)=>(
//                 <tr key={item.id}>
//                  <th>{item.fName}</th>
//                  <th>{item.lname}</th>
//                  <th>{item.id}</th>
//                </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
        
           
        
//         <footer class="site-footer">
//           <div class="con">
//             <p>© A-Clinic</p>
//             <p>Welcome to A-Clinic, Health Care website</p>
//           </div>
//         </footer>
//         </div>);
// }