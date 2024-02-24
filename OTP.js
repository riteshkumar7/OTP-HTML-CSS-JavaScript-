let generatedOTP; 

const showOTP = () => {
    var input1 = document.querySelector(".input1");
    input1.style.display = "none";

    var button1 = document.querySelector(".button1");
    button1.style.display = "none";

    var input2 = document.querySelector(".input2");
    var button2 = document.querySelector(".button2");

    input2.style.display = "block";
    button2.style.display = "block";

    generatedOTP = generateOTP();
    alert("Your OTP: " + generatedOTP);
}
document.querySelector('.input2').addEventListener("input", function() {
    var input2Value = this.value.trim(); 
    var button2 = document.querySelector(".button2");

    if (input2Value) {
        button2.style.backgroundColor = "green";
    } 
    else {
        button2.style.backgroundColor = "red";
    }
});
document.querySelector(".button2").addEventListener("click", function() {
    var input2Value = document.querySelector(".input2").value.trim(); 
    var enteredOTP = Number(input2Value);

    if (enteredOTP === generatedOTP) {
        alert("Verification is successful!");
        this.style.backgroundColor = "green";
        document.querySelector('.input2').value = '';
    } 
    else {
        alert("Incorrect OTP. Please try again.");
        this.style.backgroundColor = "red";
        document.querySelector('.input2').value = '';
    }
});

const generateOTP = () => {
    let OTP = "";
    for (let i = 0; i < 6; i++)
        OTP += Math.floor(Math.random() * 10);
    return Number(OTP);
}
