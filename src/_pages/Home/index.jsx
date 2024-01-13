import backgroundPic from "../../assets/background_img_home.png"
import Galery from "../../_components/Galery";

function Home(){



    return(

        <>

            <section className="banner">

                <img className="banner__image" src={backgroundPic} title="Photo" alt="Un paysage en bord de plage"/>
                <h1 className="banner__content">Chez vous, partout et ailleurs</h1>

            </section>

            <Galery/>

        </>

    )

}

export default Home;