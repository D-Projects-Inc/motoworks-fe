import { useEffect, useState } from "preact/hooks";


export default function HelloWorld() {
  const [message, setMessage] = useState('');
  useEffect(() => {
  
    async function fetchData () {
      let data = await fetch("http://127.0.0.1:8000/hi/", {method: 'GET'});
      let jsonData = await data.json();
      return jsonData; 
    }

    fetchData().then(data => {
      const mesg =  data.message;
      setMessage(mesg);
    })
    .catch(error => {
    console.log(error);
    });
  },[]);

  return (
    <div class="text-center p-5">
      <h1>Hello, World!</h1>
      <p>{message}</p>
    </div>
  );
}