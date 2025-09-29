import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FutureGoals from '../components/FutureGoals';
import BackButton from '../components/BackButton';

export default function FutureRoadmapPage() {
  return (
    <>
      <Header />
      <BackButton />
      
      {/* Building Tomorrow's Education Empire */}
      <FutureGoals />
      
      <Footer />
    </>
  );
}