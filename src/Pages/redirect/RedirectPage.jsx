import axios  from 'axios';
import React, { useCallback, useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import {redirect} from "react-router-dom"


export default function RedirectPage() {
    const[isLoaded, setIsLoading] = useState(true)
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
			setIsLoading(false)
		} catch (error) {
			console.log(error);
		
		}
	}, []);
    
	useEffect(() => {        
		retriveUrl()
	}, [retriveUrl]);

 
  return (
    <div>RedirectPage : {JSON.stringify(params)}</div>
  )
}
