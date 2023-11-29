import React, { useState, useEffect, useRef } from 'react'
import './LandingPage.css'
import NavBar from '../../components/NavBar'
import shortMan from '../../assets/Images/smiling-short-man-removebg-preview.png'
import flyingPlane from '../../assets/Images/flying plane.json'
import masterYoda from '../../assets/Images/master yoda.json'
import axios from 'axios'
import lottie from 'lottie-web';
import {CopyToClipboard} from 'react-copy-to-clipboard'

// 08116324836
const quotes = [
  'Am short of words...',
  'Twitter! Too long. Just call it X.',
  "I love briefings, I just can't figure out why",
  "Time is short, don't waste it",
  "Don't look down on me. Don't you dare!",
  "A wise man knows when and how to keep short",
  "I am brief and clear. Its my conversation strenght",
  "No! Try not. Do. Or do not. There is no try.",
  "No! Try not. Do. Or do not. There is no try.",
  "You must unlearn what you have learned.",
  "Great warrior. Hmm. Wars not make one great.",
  "'I don't believe it!' 'That is why you fail.' "
]
export default function LandingPage() {
  const [url, setUrl] = useState('')
  const [shortenedUrl, setShortenedUrl] = useState('')

  const[customisedUrl, setCustomisedUrl] = useState('')
  const [urlToCustomise, setUrlToCustomise] = useState('')
  const [urlCustomizationChoice, setUrlCustomizationChoice] = useState('')
  const [copied , setCopied] = useState(false)
  const [customizedCopied, setCustomiseCopied] = useState(false)

  const[yodaTaught , setYodaTaught] = useState('')

  let yodaContainer = useRef(null)
  let planeContainer = useRef(null)
  let masterYodaAnimation = null;
  let airplaneAnimation = null;

  useEffect(() => {
    masterYodaAnimation = lottie.loadAnimation({
          container: yodaContainer.current,
          renderer: 'svg',
          loop: true,
          autoplay: true,
          animationData: masterYoda,
      });
      return () => {
        masterYodaAnimation.destroy();
      };
  }, []);
  useEffect(() => {
    airplaneAnimation = lottie.loadAnimation({
        container: planeContainer.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: flyingPlane,
    });
    return () => {
        airplaneAnimation.destroy();
    };
}, []);
  
  useEffect(() => {
    const interval = setInterval(() => {
      displayYodaThought()
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const displayYodaThought = () =>{
    let index = Math.floor(Math.random() * 10)

     setYodaTaught(quotes[index])
  }

  const shortenUrlFunction = async()=> {
    console.log(url);
    

		try {
			const response = await axios.post(
				"http://localhost:7349/shortenUrl",
				{actualUrlLink: url}
			);
      let resultUrl = response.data.replacedUrl;
			console.log(resultUrl);
      setShortenedUrl(resultUrl)
		} catch (error) {
			
			// setError(error.response.data.data);
			// console.log(error.response.data.data);
		}
	}
  
  const customiseUrlFunction = async()=> {

		try {
			const response = await axios.post(
				"http://localhost:7349/customise",
				{
          actualUrlLink: urlToCustomise ,
          customizedUrlChoice: urlCustomizationChoice
        }
			);
      let resultUrl = response.data.replacedUrl;
			console.log(resultUrl);
      setCustomisedUrl(resultUrl)
		} catch (error) {
			
			// setError(error.response.data.data);
			// console.log(error.response.data.data);
		}
	}
  const successClipboard =(url)=>{
    return <div className='url-result-display'>
            <p className='url-response-text'>{url}</p>
            <button>Copy to clipboard </button>
            <p>
            {copied? <spam style={{color: 'green'}}> Copied! </spam>: null}
            </p>
           </div>
  }

  return (
    <div className='landing-body'>
      <NavBar/>
      <div className='h1-div'>
       
          <h1> Url too long? No problem. <span>
         Shorten it! </span> </h1>
      </div>
        
      <div className='landing-hero-section'>
   
        <div className='url-too-long'>
            <img className='shortMan' src={shortMan} alt=''/>
        </div>
        
        <center>
        <input
            type="text"
            value={url}
            onChange={ ({target: {value}}) => setUrl(value)}
          />
        <button
        onClick={shortenUrlFunction}
        className='shortenUrlButton'
        >
          Shorten Now!
        </button>
          <CopyToClipboard text={shortenedUrl} 
            onCopy={()=> setCopied(true)}
            >
          <div className='url-result-display'>
              {shortenedUrl ? successClipboard(shortenedUrl)  : ""}              
          </div>
          
            </CopyToClipboard>
        </center>
  
      </div>
        <div className='yoda-thoughts-div'>
                    <div  className="master-yoda" style={{ height: '200px', width: '170px'}} ref={yodaContainer} ></div>
                    <div className='thought-bubble'></div>
                    <p>{yodaTaught}</p>
        </div>
      <div className='customize-div'>
        <center>
        <h1 className='lemonde-h1'>Life gives you lemons? Customise them. Make Lemondades</h1>
       <div className='inputs-div'>
        <input
            type="text"
            value={urlToCustomise}
            placeholder='Actual Url'
            onChange={ ({target: {value}}) => setUrlToCustomise(value)}
          />
        
        <input
            type="text"
            value={urlCustomizationChoice}
            placeholder='Customisation choice'
            onChange={ ({target: {value}}) => setUrlCustomizationChoice(value)}
          />
          </div>
        <button
        onClick={customiseUrlFunction}
        className='customiseButton'
        >
          Customise it!
        </button>
          <CopyToClipboard text={customisedUrl} 
            onCopy={()=> setCustomiseCopied(true)}
            >
          <div className='url-result-display'>
              {customisedUrl ? successClipboard(customisedUrl)  : ""}              
          </div>
            </CopyToClipboard>
            {customizedCopied? <spam style={{color: 'green'}}> Copied </spam>: null}
        </center>
      </div>
      <div className='airplane-div'>
        <p>You tell us your desired destination, we brand the journey and make it even shorter with the help of our master pilot Yoda. He takes you were you want to go in short time. UrlPilot, you url's spaceship</p>

        <div  className="airplane-lottie" style={{ height: '200px', width: '470px'}} ref={planeContainer} ></div>
      </div>
      <div className='footer'>
      
      </div>
    
    </div>
  )
}
