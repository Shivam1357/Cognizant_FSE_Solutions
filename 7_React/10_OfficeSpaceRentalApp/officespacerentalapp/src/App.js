import React from 'react';

function App() {
  const heading = <h1>Office Space, At Affordable Range</h1>;

  const office = {
		name: "DBS",
		rent: 50000,
		address: "Chennai",
		image: "https://www.executivecentre.com/_next/image/?url=https%3A%2F%2Fassets.executivecentre.com%2Fassets%2FPrivateOffice-IN-OfficeComboPromo.jpg&w=2048&q=75"
	};

  const officeList = [
    {
		name: "Indira Nagar Office",
		rent: 55000,
		address: "Indira Nagar, Bangalore",
    	image: "https://www.executivecentre.com/_next/image/?url=https%3A%2F%2Fassets.executivecentre.com%2Fassets%2FPrivateOffice-IN-OfficeComboPromo.jpg&w=2048&q=75"
    },
    {
      	name: "Connaught Place Office",
     	rent: 75000,
      	address: "Connaught Place, Delhi",
    	image: "https://www.executivecentre.com/_next/image/?url=https%3A%2F%2Fassets.executivecentre.com%2Fassets%2FPrivateOffice-IN-OfficeComboPromo.jpg&w=2048&q=75"
    },
    {
		name: "Powai Office",
		rent: 45000,
		address: "Powai, Mumbai",
    	image: "https://www.executivecentre.com/_next/image/?url=https%3A%2F%2Fassets.executivecentre.com%2Fassets%2FPrivateOffice-IN-OfficeComboPromo.jpg&w=2048&q=75"
    }
  ];

  return (
    <div>
      {heading}

      <img src={office.image} alt="Office" height="25%" width="25%" />
      <h2>Name: {office.name}</h2>
	  <p style={{ color: office.rent < 60000 ? "red" : "green" }}>Rent: Rs. {office.rent}</p>
      <p>Address: {office.address}</p>

      <h2>Available Office Spaces</h2>
      {
        officeList.map((item, index) => (
          <div key={index}>
            <img src={item.image} alt="Office" height="25%" width="25%" />
            <h3>Name: {item.name}</h3>
			<p style={{ color: item.rent < 60000 ? "red" : "green" }}>Rent: Rs. {item.rent}</p>
            <p>Address: {item.address}</p>
            <hr />
          </div>
        ))
      }
    </div>
  );
}

export default App;
