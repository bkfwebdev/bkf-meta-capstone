import Carousel from './TestimonialCarousel'
import TestimonialCard from './CardInfo/TestimonialCard';
import adimage from '../../../../src/testimonials/adtestimonial.jpg' 
import syimage from '../../../../src/testimonials/sytestimonial.jpg'
import fhimage from  '../../../../src/testimonials/fhtestimonial.jpg'
import mbimage from '../../../../src/testimonials/mbtestimonial.jpg'
import spimage from '../../../../src/testimonials/sptestimonial.jpg'
import ybimage from '../../../../src/testimonials/ybtestimonial.jpg'
import raimage from '../../../../src/testimonials/ratestimonial.jpg'
import bbimage from '../../../../src/testimonials/bbtestimonial.jpg'

export default function Testimonials() {
    return (
        <section className="testimonials">
            <article className="testimonials-topbar">
                    <h1>Testimonials</h1>
            </article>


            <section className="testimonials-cards">
                <TestimonialCard image = {adimage} name="Andrew D." description="This is the best Mediterranean food that I've ever had!"/>
                <TestimonialCard image = {syimage} name="Sandra Y." description="My Shiba Inu, Mugi, really loved the cozy vibes and 
                delicious food here."/>
                <TestimonialCard image = {fhimage} name="Fred H." description="I've had some great Mediterranean food before, but none of them beats
             Little Lemon in flavor and texture."/>
                <TestimonialCard image = {mbimage} name="Mark B." description="Great food, welcoming staff, cozy atmosphere. A great place to 
                treat your kids to."/>
                <TestimonialCard image = {spimage}  name="Scott P." description="The food here really refreshed me after a late night shift
                at the local supply depot."/>
                <TestimonialCard image = {ybimage} name="Yvette B." description="I came to Little Lemon after a 5 hour flight from the East Coast.
                 The food here tasted so delicious after the trip here."/>
                <TestimonialCard image = {raimage} name="Rolando A." description="The food here was fire!! Everyone should try this place
                 out at least once if they live in Chicago."/>
                <TestimonialCard image = {bbimage} name="Brian B." description="This restaurant served as a perfect dinner for me after a 
                long night of studying. I would definitely order from here again!"/>
            </section>

            <section className="testimonials-carousel">
                <Carousel />
            </section>
        </section>
    );
}