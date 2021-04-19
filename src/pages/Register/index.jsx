import Button from "../../components/atoms/Button";
import Figure from "../../components/atoms/Figure";
import Input from "../../components/atoms/Input";
import Picture from "../../components/atoms/Picture";
import Meet from "../../components/molecules/Meet";
import Header from "../../components/organisms/Header";
import HomeInfo from "../../components/organisms/HomeInfo";
import heartImage from "../../assets/images/heartImage.png";
import vegetablePack from "../../assets/images/vegetablePack.png";
import footerPicture from "../../assets/images/footerPicture.png";
import FormRegister from "../../components/molecules/FormRegister";

const Register = () => {
  return (
    <div>
      <Header />
      <FormRegister />
      <Figure type="square">
        <Picture
          image={heartImage}
          width={["0px", "437px"]}
          height={["0px", "412px"]}
          top={["30px"]}
          left={["-40px", "-130px"]}
          position={["relative"]}
        />
      </Figure>
      <Figure type="rectangle">
        <Picture
          image={vegetablePack}
          width={["0px", "305px"]}
          height={["0px", "444px"]}
          top={["100px"]}
          left={["85px"]}
          position={["relative"]}
        />
      </Figure>
      <Picture
        image={footerPicture}
        width={["320px", "444px"]}
        height={["155px", "215px"]}
        position={["relative", "absolute"]}
        top={["0px", "calc(100% - 215px)"]}
        left={["0", "0"]}
      />
      <HomeInfo />
    </div>
  );
};

export default Register;
