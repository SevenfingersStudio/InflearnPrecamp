const checkValidation = function () {
  let email = document.getElementById("email").value;
  let pw1 = document.getElementById("pw1").value;
  let pw2 = document.getElementById("pw2").value;

  console.log(email);
  console.log(pw1);
  console.log(pw2);
  if (email && pw1 && pw2) {
    //모든 input이 비어있지 않을때
    document.getElementById("submit").disabled = false;
  } else {
    //하나라도 비어있을떄
    document.getElementById("submit").disabled = true;
  }
};
