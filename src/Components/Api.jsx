import React, { useState, useEffect } from 'react';

export default function Api() {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
      
            const body = JSON.stringify({
              limit: 12,
              offset: 0,
            });
      
            const requestOptions = {
              method: "POST",
              headers: myHeaders,
              body,
            };
      
            const response = await fetch(
              "https://api.weekday.technology/adhoc/getSampleJdJSON",
              requestOptions
            );
      
            if (!response.ok) {
              throw new Error(`Error: ${response.status}`);
            }
      
            const result = await response.text();
            setData(JSON.parse(result)); // Parse the text back to JSON
            console.log(result);
          } catch (error) {
            setError(error);
          }
        };
      
        fetchData();
      }, []); // Empty dependency array to fetch data only once
      
      return (
        <div>
          check api data in the console
        </div>
      );
}
