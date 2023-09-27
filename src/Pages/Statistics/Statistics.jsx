/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const Statistics = () => {
  // Initialize yourDonations with a default value
  const donationItems = JSON.parse(localStorage.getItem("favorites")) || [];
  const donationLength = donationItems.length;

  const [yourDonations, setYourDonations] = useState(donationLength);
  const totalDonations = 12;

  // Calculate the percentage of your donations
  const percentage = (yourDonations / totalDonations) * 100;
  const remainig = 100 - percentage;

  // Create data for the pie chart
  const data = [
    { name: "Your Donations", value: yourDonations },
    { name: "Total Donations", value: totalDonations - yourDonations },
  ];

  // Define colors for the pie chart sections
  const COLORS = ["#00C49F", "#FF444A"];

  return (
    <div className="flex justify-center items-center">
      <PieChart width={400} height={400}>
        <Pie
          data={data}
          cx={200}
          cy={200}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
          label={(entry) => `${(entry.value / totalDonations) * 100}%`}
        >
          {data.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={COLORS[index % COLORS.length]}
            />
          ))}
        </Pie>
        <Tooltip />
        <Legend align="center" verticalAlign="bottom" layout="horizontal" />
      </PieChart>
      <div className="text-center mt-4 ml-10  hidden lg:block">
        {/* Display only the percentage without any additional text */}
        <p className="text-black font-bold">Donation: {percentage.toFixed(2)}%</p>
        <p className="text-black font-bold">Remaining Donation: {remainig.toFixed(2)}%</p>

      </div>
    </div>
  );
};

export default Statistics;
