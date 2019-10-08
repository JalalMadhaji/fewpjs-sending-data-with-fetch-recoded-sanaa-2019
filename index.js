// Add your code here
const body = document.body;
function submitData(name, email){
  let obj = {
    name:name,
    emial:email
  }
  return fetch('http://localhost:3000/users',{
    method:"POST",
    headers:{
      "content-type":"application/json",
      "accept":"application/json"
    },
    body:json.stringify(obj)
  }).then((jsonRes)=>jsonRes.json()).then((res)=> body.innerHTML = res.message.id).catch((err)=> body.innerHTML = err.message);
}
