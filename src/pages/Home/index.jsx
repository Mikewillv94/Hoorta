import Button from "../../components/atoms/Button";
import Figure from "../../components/atoms/Figure";
import Input from "../../components/atoms/Input";
import Picture from "../../components/atoms/Picture";
import FormLogin from "../../components/molecules/FormLogin";
import HeaderNavBar from "../../components/molecules/HeaderNavBar";
import Meet from "../../components/molecules/Meet";
import Header from "../../components/organisms/Header";
import HomeInfo from "../../components/organisms/HomeInfo";
import heartImage from "../../assets/images/heartImage.png";
import vegetablePack from "../../assets/images/vegetablePack.png";
import footerPicture from "../../assets/images/footerPicture.png";
import { Container } from "./styles";

const Home = () => {
  return (
    <div>
      <Header />
      <Figure type="square">
        <Picture
          image={heartImage}
          width={["218px", "437px"]}
          height={["206px", "412px"]}
          top={["30px"]}
          left={["-40px", "-130px"]}
          position={["relative"]}
        />
      </Figure>
      <Meet />
      <Figure type="rectangle">
        <Picture
          image={vegetablePack}
          width={["305px"]}
          height={["444px"]}
          top={["100px"]}
          left={["85px"]}
          position={["relative"]}
        />
      </Figure>
      <HomeInfo />
      <Picture
        image={footerPicture}
        width={["320px", "444px"]}
        height={["155px", "215px"]}
        position={["relative", "absolute"]}
        top={["0px", "calc(100% - 215px)"]}
        left={["-37px"]}
      />
    </div>
  );
};

export default Home;
