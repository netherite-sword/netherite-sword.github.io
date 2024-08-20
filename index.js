import fetch from 'node-fetch';
const key = "ptlc_DVfOwhHfvidSWVouaaHuqG2Qx3tjWi6GPxvgXUiAvro";
function Start() {
    fetch("https://console.axsoter.com/api/client/servers/2d5a8cf9/power", {
    "method": "POST",
    "headers": {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": "ptlc_DVfOwhHfvidSWVouaaHuqG2Qx3tjWi6GPxvgXUiAvro",
      "cookie": "pterodactyl_session=eyJpdiI6InhIVXp5ZE43WlMxUU1NQ1pyNWRFa1E9PSIsInZhbHVlIjoiQTNpcE9JV3FlcmZ6Ym9vS0dBTmxXMGtST2xyTFJvVEM5NWVWbVFJSnV6S1dwcTVGWHBhZzdjMHpkN0RNdDVkQiIsIm1hYyI6IjAxYTI5NDY1OWMzNDJlZWU2OTc3ZDYxYzIyMzlhZTFiYWY1ZjgwMjAwZjY3MDU4ZDYwMzhjOTRmYjMzNDliN2YifQ%253D%253D"
    },
    "body": {
      "signal": "start"
    }
  })
    .then(response => console.log(response))
    .catch(err => console.error(err));
}