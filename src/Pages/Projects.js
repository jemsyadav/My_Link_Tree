import React,{useEffect} from 'react'
import '../../src/Styles/Projects.css'
import AOS from 'aos';
import car from '../Images/car1.webp'
import himotech from '../Images/himotech.jpg'
import planetix from '../Images/planetIx.png'
import wedding from '../Images/weeding.jpg'
import hospital from '../Images/hospital.png'
import fooddelivery from '../Images/foodDelivery.webp'
import 'aos/dist/aos.css';


const Projects = () => {
    useEffect(() => {
        AOS.init();
      }, [])
  return (
    <div>
      <div  class ='container mx-auto mt-5 mb-5 col-12 text-center' >
    <div class="hd">Why People Believe in Us</div>
    <p><small class="text-muted">Always render more and better service than <br />is expected .</small></p>
    <div className="Box_Projects">
    <div class="row " >
    <div className="col-md-1">

    </div>
    
        <div  class="card col-md-3 col-12">
            <div  class=" card-content  ">
                <div data-aos="flip-right"   class="card-body"> <img  class="img" src={car} width={'50%'}/>
                    <div class="shadow"></div>
                    
                    <a href='https://car-repair-gold.vercel.app/'  class="glow-on-hover" type="button">Car Repair</a>  <br /> <br />
                    <div   class="card-subtitle">
                        <p> <small class="text-muted">HTML: HTML is used to create and save web document. E.g. Notepad/Notepad++ <br />CSS : (Cascading Style Sheets) Create attractive Layout <br />Bootstrap : responsive design mobile freindly site <br />JavaScript: it is a programming language, commonly use with web browsers.</small> </p>
                    </div>
                    
                </div>
            </div>
        </div>
      
        <div class="card col-md-3 col-12">
            <div class="card-content">
                <div class="card-body"> <img class="img" src={planetix} width={'50%'} />
                    <div class="shadow"></div>
                    <a href='https://planet-ix-flame.vercel.app/'  class="glow-on-hover" type="button">planet IX</a>  <br /> <br />
                    <div class="card-subtitle">
                        <p> <small class="text-muted">HTML: HTML is used to create and save web document. E.g. Notepad/Notepad++ <br />CSS : (Cascading Style Sheets) Create attractive Layout <br />Bootstrap : responsive design mobile freindly site <br />JavaScript: it is a programming language, commonly use with web browsers.</small> </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="card col-md-3 col-12">
            <div class="card-content">
                <div class="card-body"> <img class="img" src={himotech} width={'50%'} />
                    <div class="shadow"></div>
                    <a href='https://hmt-global.vercel.app/'  class="glow-on-hover" type="button">Himotech Global</a>  <br /> <br />
                    <div class="card-subtitle">
                        <p> <small class="text-muted">HTML: HTML is used to create and save web document. E.g. Notepad/Notepad++ <br />CSS : (Cascading Style Sheets) Create attractive Layout <br />Bootstrap : responsive design mobile freindly site <br />JavaScript: it is a programming language, commonly use with web browsers.</small> </p>
                    </div>
                </div>
            </div>
        </div>
      </div>
      <div className="second_section">
      <div class="row " >
    <div className="col-md-1">

    </div>
        <div class="card col-md-3 col-12">
       
            <div class="card-content">
                <div class="card-body"> <img class="img" src={wedding} width={'50%'}/>
                    <div class="shadow"></div>
                    <a href='https://wedding-project-eight.vercel.app/'  class="glow-on-hover" type="button">Wedding</a>  <br /> <br />
                    <div class="card-subtitle">
                        <p> <small class="text-muted">HTML: HTML is used to create and save web document. E.g. Notepad/Notepad++ <br />CSS : (Cascading Style Sheets) Create attractive Layout <br />Bootstrap : responsive design mobile freindly site <br />JavaScript: it is a programming language, commonly use with web browsers.</small> </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="card col-md-3 col-12">
            <div class="card-content">
                <div class="card-body"> <img class="img" src={hospital} width={'50%'}/>
                    <div class="shadow"></div>
                    <a href='https://tulsi-hospital.vercel.app/'  class="glow-on-hover" type="button">Hospitial</a>  <br /> <br />
                    <div class="card-subtitle">
                        <p> <small class="text-muted">HTML: HTML is used to create and save web document. E.g. Notepad/Notepad++ <br />CSS : (Cascading Style Sheets) Create attractive Layout <br />Bootstrap : responsive design mobile freindly site <br />JavaScript: it is a programming language, commonly use with web browsers.</small> </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="card col-md-3 col-12">
            <div class="card-content">
                <div class="card-body"> <img class="img" src={fooddelivery} width={'50%'} />
                    <div class="shadow"></div>
                    <a href='https://my-portfolio-qk96.vercel.app/'  class="glow-on-hover" type="button">Food Zone</a>  <br /> <br />
                    <div class="card-subtitle">
                        <p> <small class="text-muted">HTML: HTML is used to create and save web document. E.g. Notepad/Notepad++ <br />CSS : (Cascading Style Sheets) Create attractive Layout <br />Bootstrap : responsive design mobile freindly site <br />JavaScript: it is a programming language, commonly use with web browsers.</small> </p>
                    </div>
                </div>
                </div>
            </div>
        </div>
      </div>
        
    </div>
    </div>

    <div class="flower">
        <div class="f-wrapper">
            <div class="flower__line"></div>
            <div class="f">
                <div class="flower__leaf flower__leaf--1"></div>
                <div class="flower__leaf flower__leaf--2"></div>
                <div class="flower__leaf flower__leaf--3"></div>
                <div class="flower__leaf flower__leaf--4"></div>
                <div class="flower__leaf flower__leaf--5"></div>
                <div class="flower__leaf flower__leaf--6"></div>
                <div class="flower__leaf flower__leaf--7"></div>
                <div class="flower__leaf flower__leaf--8 flower__fall-down--yellow"></div>
            </div>
        </div>

        <div class="f-wrapper f-wrapper--2">
            <div class="flower__line"></div>
            <div class="f">
                <div class="flower__leaf flower__leaf--1"></div>
                <div class="flower__leaf flower__leaf--2"></div>
                <div class="flower__leaf flower__leaf--3"></div>
                <div class="flower__leaf flower__leaf--4"></div>
                <div class="flower__leaf flower__leaf--5"></div>
                <div class="flower__leaf flower__leaf--6"></div>
                <div class="flower__leaf flower__leaf--7"></div>
                <div class="flower__leaf flower__leaf--8 flower__fall-down--pink"></div>
            </div>
        </div>

        <div class="f-wrapper f-wrapper--3">
            <div class="flower__line"></div>
            <div class="f">
                <div class="flower__leaf flower__leaf--1"></div>
                <div class="flower__leaf flower__leaf--2"></div>
                <div class="flower__leaf flower__leaf--3"></div>
                <div class="flower__leaf flower__leaf--4"></div>
                <div class="flower__leaf flower__leaf--5"></div>
                <div class="flower__leaf flower__leaf--6"></div>
                <div class="flower__leaf flower__leaf--7"></div>
                <div class="flower__leaf flower__leaf--8 flower__fall-down--purple"></div>
            </div>
        </div>
        <div class="flower__glass"></div>
    </div>


    
    {/* <div class="ft">
        <p class="chk"><small class="text-muted">Still not sure?</small></p>
        <div class="btn btn-primary">Read All Testimonials</div>
    </div> */}

    
</div>
   
  )
}

export default Projects
