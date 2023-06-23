import React,{useEffect} from 'react'
import '../../src/Styles/Projects.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import rabbit from '../Images/rabbit...webp'

const Projects = () => {
    useEffect(() => {
        AOS.init();
      }, [])
  return (
    <div>
     <img src="/static/media/plant1.d3654bffa08570233e29.png" alt="" class="plant" id="plant1"></img>
        <img src="/static/media/plant1.d3654bffa08570233e29.png" alt="" class="plant" id="plant2"></img>
      <div class='container mx-auto mt-5 mb-5 col-12 text-center' >
    <div class="hd">Why People Believe in Us</div>
    <p><small class="text-muted">Always render more and better service than <br />is expected of you, no matter what your ask may be.</small></p>
    <div className="Box_Projects">
    <div class="row " >
    <div className="col-md-1">

    </div>
        <div  class="card col-md-3 col-12">
            <div  class=" card-content  ">
                <div data-aos="flip-right"   class="card-body"> <img  class="img" src="https://i.imgur.com/S7FJza5.png" />
                    <div class="shadow"></div>
                    <div class="card-title"> Car Repair </div>
                    <div class="card-subtitle">
                        <p> <small class="text-muted">HTML: HTML is used to create and save web document. E.g. Notepad/Notepad++ <br />CSS : (Cascading Style Sheets) Create attractive Layout <br />Bootstrap : responsive design mobile freindly site <br />JavaScript: it is a programming language, commonly use with web browsers.</small> </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="card col-md-3 col-12">
            <div class="card-content">
                <div class="card-body"> <img class="img" src="https://i.imgur.com/S7FJza5.png" />
                    <div class="shadow"></div>
                    <div class="card-title"> Planet IX </div>
                    <div class="card-subtitle">
                        <p> <small class="text-muted">We spent thousands of hours creating on algorithm that does this for you in seconds. We collect a small fee from the professional after they meet your</small> </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="card col-md-3 col-12">
            <div class="card-content">
                <div class="card-body"> <img class="img" src="https://i.imgur.com/S7FJza5.png" />
                    <div class="shadow"></div>
                    <div class="card-title"> HimoTech Global </div>
                    <div class="card-subtitle">
                        <p> <small class="text-muted">We spent thousands of hours creating on algorithm that does this for you in seconds. We collect a small fee from the professional after they meet your</small> </p>
                    </div>
                </div>
            </div>
        </div>
      </div>
      <div class="row " >
    <div className="col-md-1">

    </div>
        <div class="card col-md-3 col-12">
       
            <div class="card-content">
                <div class="card-body"> <img class="img" src="https://i.imgur.com/S7FJza5.png" />
                    <div class="shadow"></div>
                    <div class="card-title"> We're Free </div>
                    <div class="card-subtitle">
                        <p> <small class="text-muted">We spent thousands of hours creating on algorithm that does this for you in seconds. We collect a small fee from the professional after they meet your</small> </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="card col-md-3 col-12">
            <div class="card-content">
                <div class="card-body"> <img class="img" src="https://i.imgur.com/S7FJza5.png" />
                    <div class="shadow"></div>
                    <div class="card-title"> We're Free </div>
                    <div class="card-subtitle">
                        <p> <small class="text-muted">We spent thousands of hours creating on algorithm that does this for you in seconds. We collect a small fee from the professional after they meet your</small> </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="card col-md-3 col-12">
            <div class="card-content">
                <div class="card-body"> <img class="img" src="https://i.imgur.com/S7FJza5.png" />
                    <div class="shadow"></div>
                    <div class="card-title"> We're Free </div>
                    <div class="card-subtitle">
                        <p> <small class="text-muted">We spent thousands of hours creating on algorithm that does this for you in seconds. We collect a small fee from the professional after they meet your</small> </p>
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
