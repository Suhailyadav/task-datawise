import MyBarChart from "../components/BarCharts";
import UserForm from "../components/UserForm";
import UserTable from "../components/UserTable";

const Dashboard = () => {
  return (
    <div>
  
      <UserTable />      
      <MyBarChart />
      <UserForm />
  
    </div>
  );
};

export default Dashboard;