async function callApi() {
  box.style.display = "none"
  const resp = await axios.get("https://randomuser.me/api/");
  
  }

const button_random = document.getElementById("btn-random")
const box = document.getElementById("div-user-card")

button_random.onclick = () => {
  
}


callApi();


//ได้เเค่นี้ครับ ช่วยด้วย