import React from 'react'
import { Link } from 'react-router-dom'
import SignIn from './sign-in/SignIn'


// 계정이 없으면 링크를 타고 register 페이지로 넘어간다.
const LoginPage = () => {
  return (
    <div className='page'>
      <div className='form_container'>
        <h1>로그인</h1>
        <SignIn />
        <p>
          계정이 없습니까?<Link to={"/register"}>가입하기</Link> 
        </p>
      </div>
    </div>
  )
}

export default LoginPage