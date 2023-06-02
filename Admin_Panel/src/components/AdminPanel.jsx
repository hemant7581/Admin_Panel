// import React from 'react';
import ScoreCard from './ScoreCard';

const AdminPanel = () => {
  return (
    <div className="flex justify-start items-start mt-5 ml-5 h-100">
      <div className="flex gap-5">
        <ScoreCard
          title="Total Orders"
          value="1,234"
          icon={
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
          }
        />
        <ScoreCard
          title="Total Revenue"
          value="$10,000"
          icon={
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 10V3L4 14h7v7l9-11h-7z"
            />
          }
        />
        <ScoreCard
          title="Total Profit"
          value="37%"
          icon={
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 10V3L4 14h7v7l9-11h-7z"
            />
          }
        />
       
      </div>
    </div>
  );
};

export default AdminPanel;
