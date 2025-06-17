import React, {useState} from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";


export default function Dictionary(props){
let[keyword,setKeyword]=useState(props.defaultKeyword);
let[results,setResults]=useState(null);
let [loaded, setLoaded]=useState(false);


 function handleDictionaryResponse(response){
 setResults(response.data[0]);
 }
function handlePexelsResponse(response){
  console.log(response.data);

}
function search(){
//documentation:https://dictionaryapi.dev/
let apiUrl=`https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
axios.get(apiUrl).then(handleDictionaryResponse);


let pexelsApiKey="G3mzUgGbqByYfTdmdnxOdFKHb3Fh7nVZzlRGVUVGJNCcjiF2OUAWx3yk";
let pexelsApiUrl= `https://api.pexels.com/v1/search?query=${keyword}&per_page=1`;
let headers= { Authorization: `Bearer ${pexelsApiKey}`};

 axios.get(pexelsApiUrl, {headers:headers}).then(handlePexelsResponse);
}
    
 function handleSubmit(event){
    event.preventDefault();
    search();
}
 
function handleKeywordChange(event){
  setKeyword(event.target.value);
 }
 function load(){
  setLoaded(true);
  search();
 }
 if(loaded){
    return (
    <div className="Dictionary">
      <section>
        <h1>What word do you want to look up?</h1>
      <form onSubmit={handleSubmit}>
        <input type="search" onChange={handleKeywordChange} 
        defaultValue={props.defaultKeyword}/>
        </form>
        <div className="hint">
          Suggested words: Sunset, Sunshine, Wine, Funny...
        </div>
        </section>
        <Results results={results} />    
    </div>);
 }else{
  load();
  return"Loading";
 }
}