import React, { useEffect } from 'react'
import usePiximCall from '../hook/usePiximCall';
import { useSelector } from 'react-redux';

const MyMoments = () => {
     const { getData } = usePiximCall();
   const {userId} = useSelector((state)=>state.auth)
  useEffect(() => {
    getData(`blogs?author=${userId}`);
  }, []);
  return (
    <div>MyMoments</div>
  )
}

export default MyMoments