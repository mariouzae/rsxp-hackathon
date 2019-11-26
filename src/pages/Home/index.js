import React from 'react';
import { MdAddShoppingCart } from 'react-icons/md';

import { OfficesList } from './styles';

export default function Home() {
  return (
    <ProductList>
      <li>
        <img src="https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwj3_fuPvIjmAhWeDrkGHU3LAPoQjRx6BAgBEAQ&url=https%3A%2F%2Ftwitter.com%2Fibm_itservices&psig=AOvVaw2QTaD784nbEPTZgEKdq4fv&ust=1574878014580630" 
        alt="IBM" />
        <strong>IBM</strong>
        <span>A IBM é uma empresa de tecnologia</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" />
          </div>
          <span>Ver horários disponíveis</span>
        </button>
      </li>
    </ProductList>
  )
}
