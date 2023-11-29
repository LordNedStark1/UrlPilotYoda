import axios  from 'axios';
import React, { useCallback, useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import ClipLoader from "react-spinners/ClipLoader"

const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };

export default function RedirectPage() {
    const[loading, setLoading] = useState(true)
    let [color, setColor] = useState("#ffffff");
    const params = useParams()

    const retriveUrl = useCallback(async () => {
        let urlToRetrive = params.id
        console.log(urlToRetrive);
        
    
		try {
			const response = await axios.get(
				"http://localhost:7349/" +urlToRetrive
				
			);
            let url = response.data
			
            window.location.href = url;
			setLoading(false)
		} catch (error) {
			console.log(error);
		
		}
	}, []);
    
	useEffect(() => {        
		retriveUrl()
	}, [retriveUrl]);

 
  return (
    <div>
          <ClipLoader
        color={color}
        loading={loading}
        cssOverride={override}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
       
    </div>
  )
}
