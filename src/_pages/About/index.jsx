import backgroundPic from "../../assets/background_img_about.png";
import Collapsable from "../../_components/Collapsable";
import dataAbout from "../../data/_contentAbout.json";

function About(){

    return(

        <>

            <div className="bannerImage">

                <img src={backgroundPic} title="Photo" alt="Vue sur un paysage"/>

            </div>

            <section className="about">

                {dataAbout.map((data) =>
                    
                    <Collapsable key={data.id}
                        title={data.title}
                    >
                        <div>
                            <p>{data.content}</p>
                        </div>
                    </Collapsable>
                        
                )}

            </section>

        </>

    )

}

export default About;