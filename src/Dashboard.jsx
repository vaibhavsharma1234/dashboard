import React from 'react'
import { Bar } from 'react-chartjs-2'
import './Dashboard.css'
// import sound1 from './sound1.png'
// import sound2 from './sound2.webp'
import { Chart as ChartJS, registerables } from 'chart.js'
import { Chart } from 'react-chartjs-2'
ChartJS.register(...registerables)
const DashboardItem = ({
  image,
  title,
  uniquePlays,
  totalPlays,
  completionRate,
}) => {
  const graphData = {
    labels: ['Unique Plays', 'Total Plays'],
    datasets: [
      {
        label: 'Plays',
        backgroundColor: ['#4caf50', '#2196f3'],
        data: [uniquePlays, totalPlays],
      },
    ],
  }

  const progress = Math.floor((completionRate / 100) * 100)

  return (
    <div className="dashboard-item">
      <img src={image} alt="Sound Thumbnail" className="sound-thumbnail" />
      <div className="sound-details">
        <div className="sound-title">{title}</div>
        <div className="sound-graph">
          <Bar data={graphData} />
        </div>
        <div className="sound-completion">
          Completion Rate:
          <div className="progress-bar">
            <div
              className="progress-bar-fill"
              style={{ width: `${progress}%` }}
            />
          </div>
          {completionRate}%
        </div>
      </div>
    </div>
  )
}

const Dashboard = () => {
  // Sample data
  const items = [
    {
      image: '/images/sound1.png',
      title: 'Sound 1',
      uniquePlays: 10,
      totalPlays: 50,
      completionRate: 70,
    },
    {
      image: '/images/sound2.webp',
      title: 'Sound 2',
      uniquePlays: 5,
      totalPlays: 20,
      completionRate: 90,
    },
    {
      image: '/images/sound3.webp',
      title: 'Sound 3',
      uniquePlays: 15,
      totalPlays: 35,
      completionRate: 100,
    },
  ]

  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      {items.map((item, index) => (
        <DashboardItem key={index} {...item} />
      ))}
    </div>
  )
}

export default Dashboard
