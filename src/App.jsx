import { library } from '@fortawesome/fontawesome-svg-core'
import MainLayout from "./layouts/MainLayout";
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'

function App() {
  return (
    <MainLayout>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias natus
        magni quas quae, nulla iste. Veniam officiis laborum perspiciatis
        laboriosam molestias unde, totam quod laudantium asperiores. Laborum
        quidem obcaecati itaque?
        lorem20000
      </p>
    </MainLayout>
  );
}

export default App;
library.add(fab, fas, far)
