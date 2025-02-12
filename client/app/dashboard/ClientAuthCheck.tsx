'use client';

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const ClientAuthCheck = () => {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token') || sessionStorage.getItem('token');
    if (!token) {
      // If token doesn't exist, redirect to the login page
      router.push('/dashboard/authentication/login');
    }
  }, [router]);

  return null; // Render nothing, this is only for the redirect logic
};

export default ClientAuthCheck;
