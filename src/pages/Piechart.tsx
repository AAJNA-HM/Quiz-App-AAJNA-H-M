import { PieChart } from 'react-minimal-pie-chart';
import Results from './Results';


<PieChart
  data={[
    { title: 'true', value: 1, color: '#E38627' },
    { title: 'true', value: 2, color: '#C13C37' },
    { title: 'true', value: 3, color: '#6A2135' },
    { title: 'true', value: 4, color: '#6A2135' },
  ]}
/>;
type Data = {
    color: string;
    value: number;
    key?: string | number;
    title?: string | number;
    [key: string]: any;
  }[];

  
  

  