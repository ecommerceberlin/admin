import { LineChart, Line } from 'recharts';
const data = [
    {name: 'Page A', uv: 400, pv: 2400, amt: 2400},
    {name: 'Page B', uv: 500, pv: 2400, amt: 2400},
    {name: 'Page B', uv: 410, pv: 2400, amt: 2400},

];


const Chart = () => {


    return ( <LineChart width={800} height={400} data={data}>
    <Line type="monotone" dataKey="uv" stroke="#8884d8" />
  </LineChart>)
}

export default Chart