
import Breadcrumb from "./components/breadcrumb";
import FetchData from "./components/fetch_data";
import Form from "./components/form";

export default function Home() {
  return (
    <main>
      <Breadcrumb
        items={[
          {
            label: "Главная",
            path: "/",
          },
          {
            label: "Кейсы",
            path: "/cases",
          },
        ]}
      />
      <FetchData></FetchData>
      <Form></Form>
    </main >
  );
}
