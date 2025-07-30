import Header from '../layout/Header'
import Footer from '../layout/Footer'

function FAQ() {
  return (
    <div className="homepage">
      <Header />
      <main className="container py-5" style={{ maxWidth: 900 }}>
        <h1 className="text-center mb-4 fw-bold" style={{ color: '#702997' }}>Frequently Asked Questions</h1>
        
        {/* General Questions */}
        <h3 className="text-center mb-3">General Questions</h3>
        <div className="accordion mb-5" id="faqGeneral">
          <div className="accordion-item">
            <h2 className="accordion-header" id="gen1">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#genCollapse1" aria-expanded="false" aria-controls="genCollapse1">
                What is YSB Academy?
              </button>
            </h2>
            <div id="genCollapse1" className="accordion-collapse collapse" aria-labelledby="gen1" data-bs-parent="#faqGeneral">
              <div className="accordion-body">
                YSB Academy is an educational website that offers comprehensive forex trading courses for beginners and experienced traders. Our courses are designed to provide you with the knowledge and skills you need to navigate the forex market successfully.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="gen2">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#genCollapse2" aria-expanded="false" aria-controls="genCollapse2">
                Who can benefit from YSB Academy?
              </button>
            </h2>
            <div id="genCollapse2" className="accordion-collapse collapse" aria-labelledby="gen2" data-bs-parent="#faqGeneral">
              <div className="accordion-body">
                YSB Academy is suitable for individuals at all skill levels, including beginners who are new to forex trading and experienced traders looking to enhance their knowledge and strategies.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="gen3">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#genCollapse3" aria-expanded="false" aria-controls="genCollapse3">
                How can I access the courses on YSB Academy?
              </button>
            </h2>
            <div id="genCollapse3" className="accordion-collapse collapse" aria-labelledby="gen3" data-bs-parent="#faqGeneral">
              <div className="accordion-body">
                To access the courses on YSB Academy, you need to register for an account on our website. Once registered, you will have access to our course library, which you can complete at your own pace.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="gen4">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#genCollapse4" aria-expanded="false" aria-controls="genCollapse4">
                Are the courses on YSB Academy free?
              </button>
            </h2>
            <div id="genCollapse4" className="accordion-collapse collapse" aria-labelledby="gen4" data-bs-parent="#faqGeneral">
              <div className="accordion-body">
                While we offer some free resources and lessons, our full comprehensive courses are paid. These paid courses provide in-depth learning materials, structured curriculum, and support from our experienced instructors.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="gen5">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#genCollapse5" aria-expanded="false" aria-controls="genCollapse5">
                What sets YSB Academy apart from other forex trading educational platforms?
              </button>
            </h2>
            <div id="genCollapse5" className="accordion-collapse collapse" aria-labelledby="gen5" data-bs-parent="#faqGeneral">
              <div className="accordion-body">
                YSB Academy stands out from other platforms due to our commitment to providing high-quality, practical, and easy-to-understand courses. Our instructors are experienced traders who have a passion for teaching and helping students succeed in the forex market.
              </div>
            </div>
          </div>
        </div>

        {/* Course Related Questions */}
        <h3 className="text-center mb-3">Course Related Questions</h3>
        <div className="accordion mb-5" id="faqCourse">
          <div className="accordion-item">
            <h2 className="accordion-header" id="course1">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#courseCollapse1" aria-expanded="false" aria-controls="courseCollapse1">
                Do I need any prior experience in trading to enroll in a course?
              </button>
            </h2>
            <div id="courseCollapse1" className="accordion-collapse collapse" aria-labelledby="course1" data-bs-parent="#faqCourse">
              <div className="accordion-body">
                No, our courses are designed to cater to beginners with little to no prior trading experience. We start with the basics and gradually move towards more advanced concepts, ensuring you have a solid understanding of forex trading.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="course2">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#courseCollapse2" aria-expanded="false" aria-controls="courseCollapse2">
                Can I learn at my own pace?
              </button>
            </h2>
            <div id="courseCollapse2" className="accordion-collapse collapse" aria-labelledby="course2" data-bs-parent="#faqCourse">
              <div className="accordion-body">
                Yes, you have the flexibility to learn at your own pace. Once you enroll in a course, you will have access to the course materials, allowing you to study and complete the lessons as per your convenience.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="course3">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#courseCollapse3" aria-expanded="false" aria-controls="courseCollapse3">
                How long does it take to complete a course?
              </button>
            </h2>
            <div id="courseCollapse3" className="accordion-collapse collapse" aria-labelledby="course3" data-bs-parent="#faqCourse">
              <div className="accordion-body">
                The duration to complete a course varies depending on the complexity and the time you dedicate to studying. On average, students take a few weeks to a few months to complete a course, but you can take as much time as you need.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="course4">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#courseCollapse4" aria-expanded="false" aria-controls="courseCollapse4">
                Will I receive a certificate upon completion of a course?
              </button>
            </h2>
            <div id="courseCollapse4" className="accordion-collapse collapse" aria-labelledby="course4" data-bs-parent="#faqCourse">
              <div className="accordion-body">
                Yes, upon successfully completing a course, you will receive a certificate of completion. This certificate will validate your forex trading knowledge and can be a valuable addition to your resume or professional profile.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="course5">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#courseCollapse5" aria-expanded="false" aria-controls="courseCollapse5">
                Can I interact with the instructors or ask questions during the course?
              </button>
            </h2>
            <div id="courseCollapse5" className="accordion-collapse collapse" aria-labelledby="course5" data-bs-parent="#faqCourse">
              <div className="accordion-body">
                Yes, we encourage student-instructor interaction. You will have access to discussion forums or direct messaging platforms where you can ask questions, seek clarification, and engage in discussions with our experienced instructors.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="course6">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#courseCollapse6" aria-expanded="false" aria-controls="courseCollapse6">
                Are there any additional resources provided with the courses?
              </button>
            </h2>
            <div id="courseCollapse6" className="accordion-collapse collapse" aria-labelledby="course6" data-bs-parent="#faqCourse">
              <div className="accordion-body">
                Yes, along with the course materials, we provide supplementary resources such as practice exercises, case studies, and trading tools that enhance your learning experience and practical understanding of forex trading.
              </div>
            </div>
          </div>
        </div>

        {/* Payment and Support Questions */}
        <h3 className="text-center mb-3">Payment and Support Questions</h3>
        <div className="accordion mb-5" id="faqSupport">
          <div className="accordion-item">
            <h2 className="accordion-header" id="sup1">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#supCollapse1" aria-expanded="false" aria-controls="supCollapse1">
                What are the payment options available for enrolling in a course?
              </button>
            </h2>
            <div id="supCollapse1" className="accordion-collapse collapse" aria-labelledby="sup1" data-bs-parent="#faqSupport">
              <div className="accordion-body">
                We offer various payment options, including credit/debit card payments and PayPal. You can choose the most convenient method during the enrollment process.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="sup2">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#supCollapse2" aria-expanded="false" aria-controls="supCollapse2">
                Is there any refund policy if I am not satisfied with the course?
              </button>
            </h2>
            <div id="supCollapse2" className="accordion-collapse collapse" aria-labelledby="sup2" data-bs-parent="#faqSupport">
              <div className="accordion-body">
                We strive to ensure that our students are satisfied with our courses. If you are not content with the course, please reach out to our support team, and we will assess your situation on a case-by-case basis.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="sup3">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#supCollapse3" aria-expanded="false" aria-controls="supCollapse3">
                What kind of support can I expect during my learning journey?
              </button>
            </h2>
            <div id="supCollapse3" className="accordion-collapse collapse" aria-labelledby="sup3" data-bs-parent="#faqSupport">
              <div className="accordion-body">
                Our support team is available to assist you with any technical issues or general inquiries you may have. Additionally, our instructors are also available to provide guidance, answer questions, and offer support throughout your learning journey.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="sup4">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#supCollapse4" aria-expanded="false" aria-controls="supCollapse4">
                How can I contact the support team if I need assistance?
              </button>
            </h2>
            <div id="supCollapse4" className="accordion-collapse collapse" aria-labelledby="sup4" data-bs-parent="#faqSupport">
              <div className="accordion-body">
                You can contact our support team by sending an email to <a href="mailto:support@ysbacademy.com">support@ysbacademy.com</a>. We aim to respond to all inquiries within 24-48 hours. If you have any further questions or specific inquiries, please don't hesitate to reach out to our support team. We are here to help you succeed in your forex trading journey!
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default FAQ