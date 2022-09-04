import Navbar from "../../components/Navbar/Navbar";
import tw from "tailwind-styled-components";
import BgV4 from "../../assets/images/bg-v4.svg";
import Footer from "../../components/Footer/Footer";
import AdvBackToOverview from "./components/AdvBackToOverview";
import AdvNavigator from "./components/AdvNavigator";
import AdvTitle from "./components/AdvTitle";
import AdvDescLayout from "./components/Description/AdvDescLayout";
import AdvContentLayout from "./components/Contents/AdvContentLayout";
import { useParams } from "react-router-dom";
import AdvNoteLayout from "./components/Notes/AdvNoteLayout";

const Background = tw.div`pt-24 pb-8 px-6 lg:px-10 bg-black bg-cover bg-center`;

const AdvancePage = () => {
  const { iID } = useParams();

  let desc = "";
  let contents = "";
  let note = "";
  switch (iID) {
    case "0":
      desc = <AdvDescLayout />;
      break;
    default:
      contents = <AdvContentLayout />;
      note = <AdvNoteLayout />;
  }
  return (
    <>
      <Navbar />
      <Background style={{ backgroundImage: `url(${BgV4})` }}>
        <AdvBackToOverview />
        <AdvTitle />
        {desc}
        {note}
      </Background>
      {contents}
      <Footer />
      <AdvNavigator />
    </>
  );
};

export default AdvancePage;
