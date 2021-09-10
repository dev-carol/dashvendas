import BarChart from "./components/BarChart";
import DataTable from "./components/DataTable";
import DonutChart from "./components/DonutChart";
import Footer from "./components/footer";
import NavBar from "./components/navbar";

function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <h1 className="text-secondary py-3">  Dashboard Vendas </h1>

        <div className="row px-3">
          <div className="col-sm-6">
            <h5 className="text-center text-secondary">Taxa de sucesso</h5>
            <BarChart />
          </div>

          <div className="col-sm-6">
            <h5>Todas vendas</h5>
            <DonutChart />
          </div>

          <div className="py-3">
            <h2 className="text-primary"> Todas as vendas</h2>
          </div>
        </div>

        <DataTable />
      </div>
      <Footer />

    </>

  );
}

export default App;
