import TopBox from "../../components/topBox/TopBox";
import ChartBox from "../../components/chartBox/ChartBox";
import {
  chartBoxUser,
  chartBoxProduct,
  chartBoxConversion,
  chartBoxRevenue,
  barChartBoxRevenue,
  barChartBoxVisit,
} from "../../data";
import "./home.scss";
import PieChartBox from "../../components/pieChartBox/PieChartBox";
import BigChartBox from "../../components/bigChartBox/BigChartBox";
import BarChartBox from "../../components/barChartBox/BarChartBox";

const Home = () => {
  return (
    <div className="home">
      <div className="box box1">
        <span>
          <TopBox />
        </span>
      </div>
      <div className="box box2">
        <ChartBox {...chartBoxUser} />
      </div>
      <div className="box box3">
        <ChartBox {...chartBoxProduct} />
      </div>
      <div className="box box4">
        <PieChartBox />
      </div>
      <div className="box box5">
        <ChartBox {...chartBoxRevenue} />
      </div>
      <div className="box box6">
        <ChartBox {...chartBoxConversion} />
      </div>
      <div className="box box7">
        <BigChartBox />
      </div>
      <div className="box box8">
        <BarChartBox {...barChartBoxVisit} />
      </div>
      <div className="box box9">
        <BarChartBox {...barChartBoxRevenue} />
      </div>
    </div>
  );
};

export default Home;
