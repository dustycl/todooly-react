import React from 'react';
import '../globals.css'
import { ClientOnly } from './client'
 
export function generateStaticParams() {
  return [{ slug: [''] }]
}
 
export default function Page() {
  return <ClientOnly />
}