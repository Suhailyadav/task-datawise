import { useEffect, useState } from 'react';
import axios from 'axios';
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer
} from 'recharts';
import dayjs from 'dayjs';

type ApiUser = {
  id: string;
  name: string;
  LoggedInAt: string;
};

type ChartData = {
  date: string;
  logins: number;
};

const LoginBarChart = () => {
  const [data, setData] = useState<ChartData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLoginData = async () => {
      try {
        const res = await axios.get<ApiUser[]>('https://68708d3d7ca4d06b34b72489.mockapi.io/api/v1/user');
        const rawUsers = res.data;

        // Count logins per date
        const loginMap: Record<string, number> = {};

        rawUsers.forEach(user => {
          const date = dayjs(user.LoggedInAt).format('YYYY-MM-DD');
          loginMap[date] = (loginMap[date] || 0) + 1;
        });

        const chartData: ChartData[] = Object.entries(loginMap).map(([date, logins]) => ({
          date,
          logins,
        }));

        // Sort by date
        chartData.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

        setData(chartData);
      } catch (error) {
        console.error('Error fetching login data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchLoginData();
  }, []);

  if (loading) return <p>Loading login chart...</p>;

  return (
    <div className="bg-white p-4 shadow rounded w-full">
      <h2 className="text-xl font-bold mb-4">User Logins Per Day</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="logins" fill="#4f46e5" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LoginBarChart;
