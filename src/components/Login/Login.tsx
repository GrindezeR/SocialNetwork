import React from "react";
import s from './Login.module.css';

type LoginPropsType = {

}

export const Login = (props:LoginPropsType) => {
  return(
      <div className={s.wrapper}>
        <div className={s.title}>Login to Social Network</div>
        <span>Username</span><input type="text"/>
        <span>Password</span><input type="text"/>
      </div>
  );
}