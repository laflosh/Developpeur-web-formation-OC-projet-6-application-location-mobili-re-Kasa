import backgroundPic from "../../assets/background_img_home.png"
import Galery from "../../_components/Galery";
import { useNavigate } from "react-router-dom";
import { dataGalery } from "../../data/dataTools";

function Home(){

    const navigate = useNavigate();
    const data = dataGalery();

    return(

        <div className="home">

            <section className="banner">

                <img className="banner__image" src={backgroundPic} title="Photo" alt="Un paysage en bord de plage"/>
                <h1 className="banner__content">Chez vous, partout et ailleurs</h1>

            </section>

            <Galery data={data} onClickHandler = {(id) => navigate(`/housing/${id}`)}/>

        </div>

    )

}

export default Home;