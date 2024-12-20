import React from "react";
import OwlCarousel from "react-owl-carousel";

import carouelImg from "../assets/img/testimonial-1.jpg";

export const Testimonial = () => {
  const testimonials = [
    {
      img: `${carouelImg}`, // Replace with actual image URL or import
      name: "Khalid Niazi",
      stars: 5,
      review:
        "I was glad to had driving class with Naveed and it helped me to pass my test today. I recommend everybody to take class with Naveed because he is friendly and best trainer. Thanks.",
    },
    {
      img: `${carouelImg}`, // Replace with actual image URL or import
      name: "Maxim Restyle",
      stars: 5,
      review:
        "I want to share my good impressions about the lessons with instructor Naviid, after the first lesson I felt very confident when driving. The instructor pays attention to safety on the road and explains very clearly. I passed my driving test and am very happy with the experience. Thank you!",
    },
    // {
    //   img: `${carouelImg}`, // Replace with actual image URL or import
    //   name: "Prisca Maturure",
    //   stars: 5,
    //   review: "",
    // },
    {
      img: `${carouelImg}`, // Replace with actual image URL or import
      name: "Maciek Filipiak",
      stars: 5,
      review:
        "Got my lessons with Navid, a very professional gentleman. His knowledge helped me pass my test on the first attempt.",
    },
    // {
    //   img: `${carouelImg}`, // Replace with actual image URL or import
    //   name: "Dillon Maher",
    
    //   stars: 5,
    //   review: "",
    // },
    {
      img: `${carouelImg}`, // Replace with actual image URL or import
      name: "Hussain Mahar",
      stars: 5,
      review:
        "Today I passed my driving test on the first attempt. Naveed is the best driving instructor, and his tips and instructions helped me succeed. Highly recommended!",
    },
    {
      img: `${carouelImg}`, // Replace with actual image URL or import
      name: "Jude Omoigui",
      stars: 5,
      review:
        "Patient and observant instructor. Passed my test on the second trial only because I didn’t listen to his observations the first time. Highly recommend him!",
    },
    {
      img: `${carouelImg}`, // Replace with actual image URL or import
      name: "Rafael Alves",
      stars: 5,
      review:
        "Great teacher, direct to the point. If you’re doing something wrong, he wouldn’t hesitate to tell you in a good manner. Totally recommend Navid as your ADI.",
    },
    {
      img: `${carouelImg}`, // Replace with actual image URL or import
      name: "Manoel Filho",
      stars: 5,
      review: "Ótimas aulas de direção. Passei fácil na prova.",
    },
    {
      img: `${carouelImg}`, // Replace with actual image URL or import
      name: "Challa Sai Teja",
      
      stars: 5,
      review:
        "Absolutely Amazing Experience! Navid was patient, encouraging, and made learning enjoyable. Thanks to his guidance, I passed my driving test on the first attempt.",
    },
    {
      img: `${carouelImg}`, // Replace with actual image URL or import
      name: "Alex Mathew",
      
      stars: 5,
      review:
        "I passed my driving test on the first try, all thanks to Mr. Naveed's exceptional instruction. He's patient, clear, and knows exactly how to build confidence behind the wheel.",
    },
    {
      img: `${carouelImg}`, // Replace with actual image URL or import
      name: "Ihtisham Haider",
      stars: 5,
      review:
        "Did the lesson and mock test with them, and it paid off very well. Learned a lot about safe driving, which helped me pass the test on my first attempt. Thanks!",
    },
    {
      img: `${carouelImg}`, // Replace with actual image URL or import
      name: "Douglas Batista",
      stars: 5,
      review: "Thank you very much for all the support! I highly recommend the work of the instructors.",
    },
    {
      img: `${carouelImg}`, // Replace with actual image URL or import
      name: "Sumesh S",
      stars: 5,
      review:
        "Very good class. I passed my test on the first chance. He explains everything theoretically and practically. If you want to pass on the first try, get training with him!",
    },
    {
      img: `${carouelImg}`, // Replace with actual image URL or import
      name: "Mile Martinović",
      stars: 5,
      review:
        "Navid helped me understand Irish road rules and pass the test. He is very knowledgeable and thorough in his teaching.",
    },
    {
      img: `${carouelImg}`, // Replace with actual image URL or import
      name: "Pierce McCarthy",
      stars: 5,
      review:
        "I recently passed my test with Navid. Great service! Very easygoing instructor who ensured I met all the requirements to pass.",
    },
    {
      img: `${carouelImg}`, // Replace with actual image URL or import
      name: "Muhammad Ahsan",
      stars: 5,
      review:
        "Moor Driving School offers great lessons! Instructors are professional, patient, and highly skilled. Highly recommended for anyone learning to drive.",
    },
    {
      img: `${carouelImg}`, // Replace with actual image URL or import
      name: "Oisin Power",
      stars: 5,
      review: "Great instructor really helped me pass my test.",
    },
    {
      img: `${carouelImg}`, // Replace with actual image URL or import
      name: "Nat B",
      stars: 5,
      review: "He’s a chill guy when it comes to teaching safety on the road. Explains things nice and easy.",
    },
    {
      img: `${carouelImg}`, // Replace with actual image URL or import
      name: "Riju Korah",
      stars: 5,
      review: "Great instructor. Simple tips and guidance that will help you with the test. Thanks, Naveed bro!",
    },
    {
      img: `${carouelImg}`,
      name: "Navas Ali",
      stars: 5,
      review:
        "Naveed bro, your guidance made my day. Thanks to your help, I passed my test and obtained my full license. Thank you.",
    },
    {
      img: `${carouelImg}`,
      name: "Riccardo De Santi",
      stars: 5,
      review:
        "I enjoyed every session I had and had an amazing instructor. Teaching the ways how to drive.",
    },
    {
      img: `${carouelImg}`,
      name: "Khaleeque Anwar",
      stars: 5,
      review:
        "I had a great experience with Mr.Naveed. He was very informative, knowledgeable, and made the lessons very clear to understand with practical knowledge. I highly recommend his classes to anyone keen to learn and improve their driving skills.",
    },
    {
      img: `${carouelImg}`,
      name: "Valentyn Hlavatskyi",
      stars: 5,
      review:
        "I would like to thank my instructor Navid for his hard work. Thanks to him, I passed the exam on the first attempt. Highly recommend!",
    },
    {
      img: `${carouelImg}`,
      name: "zOvee",
      stars: 5,
      review: "Cool training.",
    },
    {
      img: `${carouelImg}`,
      name: "Douglas Pereira",
      stars: 5,
      review: "",
    },
    {
      img: `${carouelImg}`,
      name: "Juliet Gwatidzo",
      stars: 5,
      review:
        "Thank you Naveed, just passed my road test today. His teaching is 👌, he is a good instructor. I have confidence in referring friends and family.",
    },
    {
      img: `${carouelImg}`,
      name: "Abhijit Pawar",
      stars: 5,
      review:
        "Hi, I passed my driving test from Waterford on the first attempt. Naveed was extremely helpful in identifying positive strengths in my driving and guiding on small takeaways before the test. I highly recommend him as a great teacher.",
    },
    {
      img: `${carouelImg}`,
      name: "Mohammed Freeny",
      stars: 5,
      review: "10/10 I would recommend 100%.",
    },
    {
      img: `${carouelImg}`,
      name: "Jessie Rossiter",
      stars: 5,
      review:
        "Fantastic instructor. He was so patient, calm, and clear in his instructions. I passed my test on the first attempt today thanks to his teachings. Highly recommend!",
    },
    {
      img: `${carouelImg}`,
      name: "E K",
      stars: 5,
      review: "Clear lessons and a friendly instructor. Would recommend.",
    },
    {
      img: `${carouelImg}`,
      name: "Saood Ahmed",
      stars: 5,
      review:
        "Thank you so much Navid for taking my mock exam. The mistakes you mentioned helped me a lot to pass the test on the first attempt. Highly recommend him as a mock examiner.",
    },
    {
      img: `${carouelImg}`,
      name: "Judy Johnson",
      stars: 5,
      review:
        "Well experienced, polite, and professional RSA-approved instructor. I passed my driving test on my first attempt. Highly recommended.",
    },
    {
      img: `${carouelImg}`,
      name: "Seven Horsemen",
      stars: 5,
      review:
        "Navid is a great and experienced instructor! He breaks down the concept of driving into simpler pieces and makes learning enjoyable. I passed my driving test on the first attempt with Navid!",
    },
    {
      img: `${carouelImg}`,
      name: "Irfan Khan",
      stars: 5,
      review:
        "Best driving instructor, was very calm during all my lessons. I passed my driving test with flying colors. Thanks!",
    },
    {
      img: `${carouelImg}`,
      name: "Akrem Amer",
      stars: 5,
      review: "Excellent driving instructor. Highly recommended.",
    },
    {
      img: `${carouelImg}`,
      name: "Jason D",
      stars: 5,
      review: "Helpful, informative, and patient. I highly rate them and owe passing my driving test to them.",
    },
    {
      img: `${carouelImg}`,
      name: "Muhammad Maaz",
      stars: 5,
      review: "Highly recommended.",
    },
    {
      img: `${carouelImg}`,
      name: "Meg",
      stars: 5,
      review: "",
    },
    {
      img: `${carouelImg}`,
      name: "Rinish Razak",
      stars: 5,
      review: "Naveed was really helpful. His tips on reversing around the corner helped me clear my test on the first attempt.",
    },
    {
      img: `${carouelImg}`,
      name: "Popoola Kban",
      stars: 5,
      review: "I highly recommend Mr. Navid. He is very professional and pays attention to details. I passed my driving test thanks to his guidance.",
    },
    {
      img: `${carouelImg}`,
      name: "Elizabeth Kaduthodil",
      stars: 5,
      review: "I passed my driving test on my first attempt. Naveed is a very good instructor who helped me achieve this. I recommend him to everyone planning for their test.",
    },
    {
      img: `${carouelImg}`,
      name: "Jennifer N",
      stars: 5,
      review: "I’ve had 3 driving instructors, and by far, Naveed explained things in the simplest and most understandable way.",
    },
    {
      img: `${carouelImg}`,
      name: "Jack Redmond",
      stars: 5,
      review: "Did a lesson before my test and ended up improving many aspects of my driving. Passed my test like a warm knife through butter.",
    },
    {
      img: `${carouelImg}`,
      name: "Astro King",
      stars: 5,
      review: "Great instructors and really friendly.",
    },
    {
      img: `${carouelImg}`,
      name: "Daniel Aguiar",
      stars: 5,
      review: "Very good.",
    },
    {
      img: `${carouelImg}`,
      name: "Waris Khan Ahmadzai",
      stars: 5,
      review: "Hello Everyone in Waterford! I took essential driving lessons and passed my full test on the first attempt.",
    },
    {
      img: `${carouelImg}`,
      name: "Mubashra Ashraf",
      stars: 5,
      review: "Excellent job, guys. Imran was so helpful and accommodating. I passed my driving test on the first attempt because of him. Keep up the good work!",
    },
    {
      img: `${carouelImg}`,
      name: "Ananthu R",
      stars: 5,
      review: "I couldn't have asked for a better driving instructor than Mr. Naveed! Thanks to his guidance, I passed my test.",
    },
    {
      img: `${carouelImg}`,
      name: "Olya",
      stars: 5,
      review: "Hello! How much does it cost for a full course of training and getting a license?",
    },
    {
      img: `${carouelImg}`,
      name: "Rasa Kuna",
      stars: 5,
      review: "Great instructor Naveed! Your tips and information provided during lessons helped me pass my test. Thank you!",
    },
    {
      img: `${carouelImg}`,
      name: "Usman Kang",
      stars: 5,
      review: "Wonderful experience with this man. I passed my test on the first attempt. Recommended!",
    },
    {
      img: `${carouelImg}`,
      name: "Victor Lopez",
      stars: 5,
      review: "Navid is one of the BEST instructors! He is patient and understanding. Highly recommended!",
    },
    {
      img: `${carouelImg}`,
      name: "Sherry Ahmed",
      stars: 5,
      review: "Mr. Naveed is a very dedicated instructor. I had an excellent learning experience under his kind guidance. Thanks for your time and supervision!",
    }
  ];
  

  const carouselOptions = {
    loop: true,
    margin: 30,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 5000,
    smartSpeed: 800,
    navText: [
      '<i class="fas fa-chevron-left"></i>',
      '<i class="fas fa-chevron-right"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      992: {
        items: 3,
      },
    },
  };

  return (
    <div className="container-fluid testimonial pb-5 mt-5">
      <div className="container pb-5">
        <div
          className="text-center mx-auto pb-5 wow fadeInUp"
          data-wow-delay="0.1s"
          style={{ maxWidth: "800px" }}
        >
          <h1 className="display-5 text-capitalize mb-3">
          <span className="text-primary">What Our Clients Say</span>
          </h1>
          <p className="mb-0 text-white">
          Our clients love the personalized approach, professional guidance, and supportive learning environment we provide. With expert instructors and tailored lessons, we’ve helped countless learners feel confident and safe on the road. Don’t just take our word for it—hear what our happy clients have to say!
          </p>
          <a
            
  href="https://g.page/r/CeuPrlU1tEmGEAE/review"
  className="btn btn-primary mt-3 rounded py-3 px-5"
  target="_blank"
  rel="noopener noreferrer"
>
View and Leave Reviews on Google
</a>
        </div>
        <OwlCarousel
          className="owl-carousel testimonial-carousel wow fadeInUp"
          data-wow-delay="0.1s"
          {...carouselOptions}
        >
          {testimonials.map((testimonial, index) => (
            <div className="testimonial-item" key={index}>
              <div className="testimonial-quote">
                <i className="fa fa-quote-right fa-1x"></i>
              </div>
              <div className="testimonial-inner p-3">
              <div
      className="testimonial-avatar"
      style={{
        width: "60px",
        height: "60px",
        borderRadius: "50%",
        backgroundColor: `#${Math.floor(
          Math.random() * 16777215
        ).toString(16)}`, // Generate random background color
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "#fff",
        fontWeight: "bold",
        fontSize: "24px",
      }}
    >
      {testimonial.name.charAt(0).toUpperCase()} {/* Display first letter */}
    </div>
                <div className="ms-4">
                  <h4>{testimonial.name}</h4>

                  <div className="d-flex text-primary">
                    {Array.from({ length: 5 }, (_, i) => (
                      <i
                        key={i}
                        className={`fas fa-star${
                          i >= testimonial.stars ? " text-body" : ""
                        }`}
                      ></i>
                    ))}
                  </div>
                </div>
              </div>
              <div className="border-top rounded-bottom p-4 text-white text-bold">
                <p className="mb-0">{testimonial.review}</p>
              </div>
            </div>
          ))}
        </OwlCarousel>
      </div>
    </div>
  );
};
