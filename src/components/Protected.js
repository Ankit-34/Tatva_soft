import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const Protected = (props) => {

    const {Content} = props;
    const navigate = useNavigate();

    useEffect(() => {
        if(localStorage.getItem('status'))
            navigate('/');
        else navigate('/login');
    },[]);

  return (
    <>
        <Content />
    </>
  )
}

export default Protected