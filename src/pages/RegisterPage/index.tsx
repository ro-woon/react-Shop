import React from 'react'
import { Link } from 'react-router-dom'
import SignUp from './sign-up/SignUp'


// 반대로 계정이 있으면 로그인 페이지로 넘어간다.
const RegisterPage = () => {
  return (
    <div className='page'>
      <div className='form_container'>
        <h1>회원가입</h1>
        <SignUp />
        <p>
          이미 계정이 있습니까?<Link to={"/login"}>로그인</Link>
        </p>
      </div>
    </div>
  )
}

export default RegisterPage