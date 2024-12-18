const otpDisplay = document.getElementById("otp-display");
const generateBtn = document.getElementById("generate");
const copyBtn = document.getElementById("copy");

const generateOtp = (length = 6)=>{


    let digits  = '0123456789';
    let otp = '';
    for(let i = 0;i<length;i++){
    const randomIdx = Math.floor(Math.random()* digits.length);
otp += digits[randomIdx];
    
    }
  return otp.split('').join(' '); 
}

const copyToClipboard = (text) =>{

    navigator.clipboard.writeText(text)
    .then(()=> alert ("OTP copied to clipboard!"))
    .catch(err => alert("Failed to copy OTP"))

}

generateBtn.addEventListener("click" ,()=>{
    const otp = generateOtp(6);
    otpDisplay.textContent = otp;
   })

   copyBtn.addEventListener("click",()=>{

    let otp= otpDisplay.textContent;
    if(otp !== "000000"){
        copyToClipboard(otp)
    }
    else{
        alert("Please generate an OTP");
    }
   })