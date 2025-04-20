'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';

const FinanceBackground = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10">
      <Image
        src="/images/bloomberg-terminal.jpg"
        alt="Bloomberg Terminal"
        fill
        className="object-cover opacity-50"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/5 to-transparent" />
    </div>
  );
};

export default FinanceBackground; 