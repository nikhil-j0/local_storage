showData();
function saveData() {
  let name, email, psw;
  name = document.getElementById("name").value;
  email = document.getElementById("email").value;
  psw = document.getElementById("psw").value;

  let user_records = new Array();
  user_records = JSON.parse(localStorage.getItem("users")) ? JSON.parse(localStorage.getItem("users")) : []
  if (user_records.some((v) => { return v.email == email })) {
    alert("duplicate data");
  }
  else {
    user_records.push({
      "name": name,
      "email": email,
      "psw": psw
    })
    localStorage.setItem("users", JSON.stringify(user_records));
    window.open(
      'http://127.0.0.1:5500/show.html',
      '_blank'
    );
  }
}

function showData() {
  document.getElementById("showUsers").innerHTML = "";
  let user_records = new Array();
  user_records = JSON.parse(localStorage.getItem("users")) ? JSON.parse(localStorage.getItem("users")) : []
  if (user_records) {
    for (let i = 0; i < user_records.length; i++) {
      let addDiv = document.createElement('div');
      addDiv.className = "row";
      addDiv.innerHTML = '  <div class="col-sm-4" style="padding: 10px;">' + user_records[i].name + '</div><div class="col-sm-4" style="padding: 10px;">' + user_records[i].email + '</div><div class="col-sm-4" style="padding: 10px;">' + user_records[i].psw + '</div>';
      document.getElementById("showUsers").appendChild(addDiv);

    }
  }
}