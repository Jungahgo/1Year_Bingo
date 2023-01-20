import {useState} from "react";

export default function Login(){
    const [email, setEmail] = useState('');

    const handleChange = (e) => {
        setEmail(e.target.value);
    }

    function handleSubmit(e){
        e.preventDefault();
        alert("submit", email);
    }

    function sendMail(e){

    }

    function getCertificationNum(){
        alert("email: ", email);
    }
    return (
        <>
          <h1>Put your Email</h1>
          <form onSubmit={handleSubmit}>
                <input 
                    type="Email" 
                    name="email"
                    placeholder="email"
                    value = {email}
                    onChange={handleChange}
                />
                <button type="submit" onClick={sendMail}>인증번호 전송</button>
          </form>
          <b>{email}</b>
          <form>
                <input 
                    type="Text" 
                    placeholder="인증번호"
                />
                <button type="submit" onClick={getCertificationNum}>확인</button>
          </form>
        </>
    )
}