import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Showleads() {
    const [leads, setLeads] = useState([])
    var navigate =useNavigate()
    React.useEffect(()=>{
        axios.get("http://localhost:4000/leads")
        .then((res)=>{
            setLeads([...res.data])
        })
        .catch((err)=>{console.log("err::",err)})
    },[])
    function deleteLead(id){
        axios.delete("http://localhost:4000/leads/"+id)
        .then((res)=>{
            console.log("Delete Request",res)
        })
        .catch(()=>{})
    }
    function editLead(lead){
        navigate("/editLead",{
            state:lead
        })
    }
  return (
    <div className="border border-5 border-seconday p-2">
        <h1>Showleads</h1>
        <ul>
        {
            leads && leads.map((lead,i)=>{
                return  <li>
                            {lead.fullname}
                            <button onClick={()=>{deleteLead(lead.id)}}>Delete</button>
                            <button onClick={()=>{editLead(lead)}}>Edit</button>
                        </li>
            })
        }
        </ul>
    </div>
  )
}

export default Showleads