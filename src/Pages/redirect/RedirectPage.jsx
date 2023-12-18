import axios  from 'axios';
import React, { useCallback, useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import ClipLoader from "react-spinners/ClipLoader"
import BaseUrl from '../constants/Constants';

const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };

export default function RedirectPage() {
    const[loading, setLoading] = useState(true)
    const[success, setSuccess] = useState(false)
    let [color, setColor] = useState("#ffffff");
    const params = useParams()

    const retriveUrl = useCallback(async () => {
        let urlToRetrive = params.id
        console.log(urlToRetrive);  
        
    
		try {
			const response = await axios.get(
				BaseUrl +urlToRetrive
				
			);
            let url = response.data
			
            window.location.href = url;
            setSuccess(true)
			
		} catch (error) {
            setSuccess(false)
            
			// console.log(error);
		}
        setLoading(false)
	}, []);
    
	useEffect(() => {        
		retriveUrl()
	}, [retriveUrl]);

    const notFound =() =>{
        console.log("this is not found function ",success);
        if(success){
            return (
                <div>
                    <h1>Redirecting now...</h1>
                </div>
            )
        }
        return (
            <div>
                <h1>Page not found</h1>
            </div>
        )
    }
 
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
       {!loading? notFound(): 'Loading...'}
    </div>
  )
}
