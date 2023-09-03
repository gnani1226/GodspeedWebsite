import React, { useEffect } from 'react';
import {myProducts,addProduct} from '../store'

const DummyProducts = () => {
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('https://dummyjson.com/users/');
      const jsonData = await response.json();
      const users = jsonData.users;
      //console.log(users[0])
      const details = {
        id:users[0].id,
        firstName:users[0].firstName,
        email:users[0].email,
        age:users[0].age,
      }
      //console.log(details)

      addProduct(details);
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div>
      <h1>from dummy api request</h1>
    </div>
  );
}

export default DummyProducts;
