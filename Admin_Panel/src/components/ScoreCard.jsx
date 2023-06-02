// import React from 'react';
import PropTypes from 'prop-types';

const ScoreCard = ({ title, value, icon }) => {
  return (
    <div className="bg-white rounded-md p-6 shadow-md flex items-center">
      <div className="bg-blue-500 rounded-full p-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="white"
          className="w-6 h-6"
        >
          {icon}
        </svg>
      </div>
      <div className="ml-6">
        <p className="text-black font-bold ">{title}</p>
        <p className="text-2xl font-bold">{value}</p>
      </div>
    </div>
  );
};

ScoreCard.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
};

export default ScoreCard;
