import axios  from 'axios';
import React, { useCallback, useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import {redirect} from "react-router-dom"


export default function RedirectPage() {
    const[originalUrl, setOriginalUrl] = useState("")
    const params = useParams()

    const retriveUrl = useCallback(async () => {
        let urlToRetrive = params.id
        console.log(urlToRetrive);
		try {
			const response = await axios.get(
				"http://localhost:7349/" +urlToRetrive
				
			);
			// console.log(response.data);
			setOriginalUrl(response.data)
		} catch (error) {
			console.log(error);
			// setError(error.response.data.data);
			// console.log(error.response.data.data);
		}
	}, []);
    
	useEffect(() => {
		retriveUrl()
	}, [retriveUrl]);
    if(originalUrl){
        console.log(originalUrl);
        //  return redirect(originalUrl)   
    }
  return (
    <div>RedirectPage : {JSON.stringify(params)}</div>
  )
}
