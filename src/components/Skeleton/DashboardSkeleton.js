import React from 'react';
import { Skeleton, Stack } from '@mui/material';

// Skeleton for the Getting Started Card
export const GettingStartedSkeleton = () => (
  <div className="flex shadow rounded-lg p-6 mb-1 hero" style={{ 
    height: '250px', 
    background: `linear-gradient(to right, #4A90E2, rgba(255,255,255,0.2))`, 
    borderRadius: '20px' 
  }}>
    <div className="mr-6">
      <Skeleton variant="rectangular" width={200} height={200} />
    </div>
    <div className="flex flex-col justify-center w-full">
      <Skeleton variant="text" sx={{ fontSize: '2rem', width: '60%', marginBottom: '1rem' }} />
      <Skeleton variant="text" sx={{ fontSize: '1.5rem', width: '80%', marginBottom: '2rem' }} />
      <div className="flex space-x-4">
        <Skeleton variant="rectangular" width={120} height={40} />
        <Skeleton variant="rectangular" width={150} height={40} />
      </div>
    </div>
  </div>
);

// Skeleton for Content Cards (NLP, LLM, Deep Learning)
export const ContentCardSkeleton = () => (
  <div className="rounded-lg p-4 shadow-md content-card">
    <Skeleton variant="text" sx={{ fontSize: '1.25rem', width: '70%', marginBottom: '1rem' }} />
    <Skeleton variant="text" sx={{ fontSize: '1rem', width: '100%' }} />
    <Skeleton variant="text" sx={{ fontSize: '1rem', width: '100%' }} />
  </div>
);

// Skeleton for Metrics Cards (Projects, Tasks, Total Users)
export const MetricsCardSkeleton = () => (
  <div 
    className="rounded-lg p-4 shadow-md card" 
    style={{
      backgroundColor: '#F0F4FF',
      color: '#0F2942'
    }}
  >
    <div className="flex items-center mb-2">
      <Skeleton variant="circular" width={24} height={24} className="mr-2" />
      <Skeleton variant="text" sx={{ fontSize: '1.125rem', width: '100px' }} />
    </div>
    <Skeleton variant="text" sx={{ fontSize: '2rem', width: '100px' }} />
  </div>
);

// Dashboard Skeleton Component
const DashboardSkeleton = () => {
  return (
    <div className="flex h-screen bg-[#F0F4FF]">
      {/* Sidebar Skeleton */}
      <div 
        className="bg-white border-r transition-all z-10 duration-300 w-48"
        style={{ backgroundColor: '#FBFBFB' }}
      >
        <div style={{ marginTop: '90px' }}>
          {[...Array(8)].map((_, index) => (
            <div 
              key={index} 
              className="flex items-center p-3"
            >
              <Skeleton variant="circular" width={24} height={24} className="mr-3" />
              <Skeleton variant="text" sx={{ fontSize: '1rem', width: '100px' }} />
            </div>
          ))}
        </div>
      </div>

      {/* Main Content Skeleton */}
      <div className="flex-1 p-6 overflow-y-auto">
        <Skeleton variant="text" sx={{ fontSize: '2rem', width: '200px', marginBottom: '1.5rem' }} />
        
        {/* First Row */}
        <div className={`grid grid-cols-1 mb-2`}>
          <GettingStartedSkeleton />
          
        </div>

        {/* Second Row - Content Cards */}
        <div className="grid grid-cols-3 gap-6 mb-3">
          {[...Array(3)].map((_, index) => (
            <ContentCardSkeleton key={index} />
          ))}
        </div>

        {/* Third Row - Metrics Cards */}
        <div className="grid grid-cols-3 gap-6 mb-0">
          {[...Array(3)].map((_, index) => (
            <MetricsCardSkeleton key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardSkeleton;