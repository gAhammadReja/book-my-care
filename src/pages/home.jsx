import React, { useEffect, useRef, useState } from 'react';
import Hero from '../hero/Hero';
import Footer from '../footer/footer';
import Card from '../components/cards';
import img4 from './img/dom-fou-YRMWVcdyhmI-unsplash.jpg';
import img2 from './img/hospital-website-background-1.jpg';
import img1 from './img/maximilian-simson-sJmp4blGjLU-unsplash.jpg';
import img3 from './OIG4.bHvaFn8zHbkuvMZ.jpg';
import '../hero/style.css';
import Slide from '../components/slides';

const HOME = () => {
    const slidesRef = useRef(null);
    const [slideIndex, setSlideIndex] = useState(0);

    useEffect(() => {
        const slides = slidesRef.current;
        const slideWidth = slides.firstElementChild.clientWidth;

        const nextSlide = () => {
            if (slideIndex === slides.children.length - 1) {
                setSlideIndex(0);
            } else {
                setSlideIndex(slideIndex + 1);
            }
            updateSlidePosition();
        };

        const updateSlidePosition = () => {
            slides.style.transform = `translateX(-${slideWidth * slideIndex}px)`;
        };

        const intervalId = setInterval(nextSlide, 3000);

        return () => {
            clearInterval(intervalId); 
        };
    }, [slideIndex]);

    return (
        <>
            <div className='homePageTop' style={{ minHeight: '90vh' }}>
                <Hero />
                <h1 className='p-10' style={{
                    padding:'2vw 2vw 0 2vw'
                }}>WHY DO YOU NEED BOOK MY CARE?🤔 LET's SEE....</h1>
                <div className='Cards animation2'>
       <section>
       <Card img={img1} title='Medical Centers Near You' desc='Something Medical Center
Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum porro eveniet possimus ab iure ad, quo delectus temporibus aut illo ipsum amet sit accusamus ullam perspiciatis eius, vitae ipsam aliquid.' btn='Click Here' Action='/medicalCenter' />
<div className='p-10' style={{width:'40rem', maxWidth:'80vw', margin:'5vw'}}>
Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem voluptates molestias veniam reiciendis voluptas suscipit facilis sed iure fugit nam? Voluptates, fugiat tenetur vel nobis accusantium exercitationem, deleniti dolores necessitatibus soluta minus aperiam eveniet. Sint ipsam nihil quas dicta quaerat provident repellendus consectetur at! Molestiae nulla alias sapiente aperiam fuga perspiciatis error temporibus asperiores praesentium?
</div> 
       </section>
       
                  <section>
                  <div className='p-10' style={{width:'40rem', maxWidth:'80vw', margin:'5vw'}}>
Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem voluptates molestias veniam reiciendis voluptas suscipit facilis sed iure fugit nam? Voluptates, fugiat tenetur vel nobis accusantium exercitationem, deleniti dolores necessitatibus soluta minus aperiam eveniet. Sint ipsam nihil quas dicta quaerat provident repellendus consectetur at! Molestiae nulla alias sapiente aperiam fuga perspiciatis error temporibus asperiores praesentium?
</div> 
                  <Card img={img2} title='Doctors Coming Into Your City'  desc='Something Medical Center
Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum porro eveniet possimus ab iure ad, quo delectus temporibus aut illo ipsum amet sit accusamus ullam perspiciatis eius, vitae ipsam aliquid.'  btn='Click Here' Action='/doctors' />
 
                  </section>
                
                <section>
                
                <Card img={img3} title='Departments of Deasees'  desc='Something Medical Center
Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum porro eveniet possimus ab iure ad, quo delectus temporibus aut illo ipsum amet sit accusamus ullam perspiciatis eius, vitae ipsam aliquid.'  btn='Click Here' Action='/depertment' />
<div className='p-10' style={{width:'40rem', maxWidth:'80vw', margin:'5vw'}}>
Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem voluptates molestias veniam reiciendis voluptas suscipit facilis sed iure fugit nam? Voluptates, fugiat tenetur vel nobis accusantium exercitationem, deleniti dolores necessitatibus soluta minus aperiam eveniet. Sint ipsam nihil quas dicta quaerat provident repellendus consectetur at! Molestiae nulla alias sapiente aperiam fuga perspiciatis error temporibus asperiores praesentium?
</div> 
                </section>

<section>
<div className='p-10' style={{width:'40rem', maxWidth:'80vw', margin:'5vw'}}>
Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem voluptates molestias veniam reiciendis voluptas suscipit facilis sed iure fugit nam? Voluptates, fugiat tenetur vel nobis accusantium exercitationem, deleniti dolores necessitatibus soluta minus aperiam eveniet. Sint ipsam nihil quas dicta quaerat provident repellendus consectetur at! Molestiae nulla alias sapiente aperiam fuga perspiciatis error temporibus asperiores praesentium?
</div>  
<Card img={img4} title='Need Help? Contact Us!'  desc='Something Medical Center
Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum porro eveniet possimus ab iure ad, quo delectus temporibus aut illo ipsum amet sit accusamus ullam perspiciatis eius, vitae ipsam aliquid.'  btn='Click Here' Action='/helpDesk' />
 
</section>

                </div>
            </div>
            <div className='hi'>
                <div className='mainSlide'>
                    <div className='slides' ref={slidesRef}>
                        <div>
                            <Slide img={img2} title='Something Medical Center' />
                        </div>
                        <div>
                            <Slide img={img2} title='Something Medical Center' />
                        </div>
                        <div>
                            <Slide img={img2} title='Something Medical Center' />
                        </div>
                        <div>
                            <Slide img={img2} title='Something Medical Center' />
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
};

export default HOME;
