// List.js
import React from 'react';

function List({ data }) {
  return (
    <div>
      {data.map((item, index) => (
        <div key={index}>
          <h2>{item.name}</h2>
          {item.image && <img src={URL.createObjectURL(item.image)} alt="User" />}
          {item.pdf && (
            <a href={URL.createObjectURL(item.pdf)} download={`${item.name}.pdf`}>
              Download PDF
            </a>
          )}
          <p>Caste: {item.caste}</p>
          <p>Age: {item.age}</p>
          <p>Qualification: {item.qualification}</p>
        </div>
      ))}
    </div>
  );
}

export default List;
