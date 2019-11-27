import React from 'react';
import { MdSchedule } from 'react-icons/md';

import { OfficesList } from './styles';

import ibmLogo from '../assets/ibm.jpg';

export default function Home() {
  return (
    <>
      <OfficesList>
        <li>
          <img src={ibmLogo} 
          alt="IBM" />
          
          <span>A IBM é uma empresa de tecnologia</span>

          <button type="button">
            <div>
              <MdSchedule size={16} color="#FFF" />
            </div>
            <span>Ver horários disponíveis</span>
          </button>
        </li>
      </OfficesList>
    </>
  )
}
