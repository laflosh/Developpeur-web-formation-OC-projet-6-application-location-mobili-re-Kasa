import backgroundPic from "../../assets/background_img_about.png";
import Collapsable from "../../_components/Collapsable";
import dataAbout from "../../data/_contentAbout.json";
import "../../styles/pages/About.scss";

function About(){

    return(

        <>

            <div className="bannerImage">

                <img src={backgroundPic} title="Photo" alt="Vue sur un paysage"/>

            </div>

            <section className="about">

                <ul>

                    {dataAbout.map((data) =>
                        <li key={data.id}>
                            <Collapsable
                            title={data.title}
                            content={data.content}
                            />
                        </li>
                    )}

                </ul>

            </section>

        </>

    )

}

export default About;