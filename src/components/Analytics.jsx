import Img2 from "../assets/img2.png";
import Img1 from "../assets/img1.png";
import Img3 from "../assets/img3.png";
import Img4 from "../assets/img4.png";

const Analytics = () => {
  return (
    <div className="max-w-[1240px] mx-auto flex justify-center mt-12">
      <div className="w-full bg-white py-6 px-4">
        <h1 className="text-xl md:text-4xl font-bold flex justify-center text-center">
          Make your business stand out with us
        </h1>
        <div className="mt-8 sm:grid md:grid grid-cols-2 max-w-[900px] mx-auto text-center">
          <div className="flex flex-col justify-center">
            <h2 className="md:text-3xl sm:text-2xl text-xl font-bold py-2 mt-8">
              Get discovered by
              <br />
              more customers
            </h2>
            <p>
              Higher reviews &amp; better listings make
              <br />
              you more discoverable to people
              <br />
              organically
            </p>
            <a href="#" className="text-blue-500">
              Get started
            </a>
          </div>
          <img className="w-[300px] mx-auto my-4" src={Img1} alt="/" />
          {/* second */}
          <img className="w-[300px] mx-auto my-4" src={Img2} alt="/" />
          <div className="flex flex-col justify-center">
            <h2 className="md:text-3xl sm:text-2xl text-xl font-bold py-2">
              Faster conversion
              <br />
              with our Captain AI
            </h2>
            <p>
              Automate web chat, messaging, reviews
              <br />
              &amp; feedbacks with our AI assistant
            </p>
            <a href="#" className="text-blue-500">
              Get started
            </a>
          </div>
          {/*third */}
          <div className="flex flex-col justify-center">
            <h2 className="md:text-3xl sm:text-2xl text-xl font-bold py-2">
              Marketing that
              <br />
              works for you
            </h2>
            <p>
              Run highly effective & trageted
              <br />
              campaigns on text & emails and put
              <br />
              your customer data to use
            </p>
            <a href="#" className="text-blue-500">
              Get started
            </a>
          </div>
          <img className="w-[300px] mx-auto my-4" src={Img3} alt="/" />
          <img className="w-[300px] mx-auto my-4" src={Img4} alt="/" />
          <div className="flex flex-col justify-center">
            <h2 className="md:text-3xl sm:text-2xl text-xl font-bold py-2">
              Faster conversion
              <br />
              with our Captain AI
            </h2>
            <p>
              Automate web chat, messaging, reviews
              <br />
              &amp; feedbacks with our AI assistant
            </p>
            <a href="#" className="text-blue-500">
              Get started
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
