import React from 'react'

function LeadSearch() {
  return (
    <div className='border border-5 border-seconday p-2'>
        <h3>LeadSearch</h3>
        <div style={{height:'400px'}}>
            <div className="d-flex justify-content-center">
                <input type="text" />
                <button>Search</button>
            </div>
        </div>
    </div>
  )
}

export default LeadSearch