const data = fetch("https://tygia.com/json.php?ran=0&rate=1&gold=0&bank=VIETCOM&date=now", {
  headers: {
    'content-type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  },
  method: 'GET',
});

setTimeout(() => {
  console.log(data);
}, 3000);