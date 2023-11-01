import React from 'react'

function Members(props) {
  return (
    <>
    
    <br/><br/>  
    <h2 className='con-head'>{props.title}</h2>
    
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <table style={{ border: '1px solid black', borderCollapse: 'collapse', width:'1600px', margin:'50px' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid black', padding: '8px' }}>Name</th>
            <th style={{ border: '1px solid black', padding: '8px' }}>Occupation</th>
            <th style={{ border: '1px solid black', padding: '8px' }}>Gotra</th>
            <th style={{ border: '1px solid black', padding: '8px' }}>Address</th>
            <th style={{ border: '1px solid black', padding: '8px' }}>Mobile No.</th>
            <th style={{ border: '1px solid black', padding: '8px' }}>Email</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid black', padding: '8px' }}>Data 1.1</td>
            <td style={{ border: '1px solid black', padding: '8px' }}>Data 1.2</td>
            <td style={{ border: '1px solid black', padding: '8px' }}>Data 1.3</td>
            <td style={{ border: '1px solid black', padding: '8px' }}>Data 1.4</td>
            <td style={{ border: '1px solid black', padding: '8px' }}>Data 1.5</td>
            <td style={{ border: '1px solid black', padding: '8px' }}>Data 1.6</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid black', padding: '8px' }}>Data 2.1</td>
            <td style={{ border: '1px solid black', padding: '8px' }}>Data 2.2</td>
            <td style={{ border: '1px solid black', padding: '8px' }}>Data 2.3</td>
            <td style={{ border: '1px solid black', padding: '8px' }}>Data 2.4</td>
            <td style={{ border: '1px solid black', padding: '8px' }}>Data 2.5</td>
            <td style={{ border: '1px solid black', padding: '8px' }}>Data 2.6</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid black', padding: '8px' }}>Data 3.1</td>
            <td style={{ border: '1px solid black', padding: '8px' }}>Data 3.2</td>
            <td style={{ border: '1px solid black', padding: '8px' }}>Data 3.3</td>
            <td style={{ border: '1px solid black', padding: '8px' }}>Data 3.4</td>
            <td style={{ border: '1px solid black', padding: '8px' }}>Data 3.5</td>
            <td style={{ border: '1px solid black', padding: '8px' }}>Data 3.6</td>
          </tr>
        </tbody>
      </table>
    </div>

    </>
  )
}

export default Members