import { library } from "@fortawesome/fontawesome-svg-core";
import MainLayout from "./layouts/MainLayout";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import faker from "faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

// eslint-disable-next-line react-refresh/only-export-components
export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: false,
      text: "Chart.js Bar Chart",
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

// eslint-disable-next-line react-refresh/only-export-components
export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Dataset 2",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

function App() {
  return (
    <MainLayout>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias natus
        magni quas quae, nulla iste. Veniam officiis laborum perspiciatis
        laboriosam molestias unde, totam quod laudantium asperiores. Laborum
        quidem obcaecati itaque? lorem20000
      </p>
      <Bar options={options} data={data} />
    </MainLayout>
  );
}

export default App;
library.add(fab, fas, far);
