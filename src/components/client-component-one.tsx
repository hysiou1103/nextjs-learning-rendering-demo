'use client';

import { useState } from 'react';
export default function ClientComponentOne({
  children,
}: {
  children: React.ReactNode;
}) {
  const [name, setName] = useState('Batman');
  return (
    <>
      <h1>Client Component One</h1>
      {children}
    </>
  );
}
