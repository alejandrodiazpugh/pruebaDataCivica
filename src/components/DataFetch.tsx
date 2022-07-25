import React, { useState} from 'react'
import * as d3 from 'd3';
import { csv } from 'd3';

export default function DataFetch() {
    const dataUrl: string = "https://gist.githubusercontent.com/alejandrodiazpugh/bb983cb55671ad9a79eb2577cab12008/raw/identificacion_humana.csv"
    
    const [data, setData] = useState(null);
    
    // csv(dataUrl).then(dataContent =>
    //     setData(dataContent))
    // const fetchData = async (url:string) => {
    //     const data = await fetch(url);
    //     return await data.text()
    // }

    // fetchData(dataUrl);

    
    // fetch(dataUrl)
    // .then((res) => res.text())
    // .then((data) => console.log(data));
  return (
    <div>DataFetch</div>
  )
}
