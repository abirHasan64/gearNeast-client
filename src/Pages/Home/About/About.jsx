import personImg from "../../../assets/images/about_us/person.jpg";
import partsImg from "../../../assets/images/about_us/parts.jpg";
const About = () => {
  return (
    <div>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <div className="lg:w-1/2 lg:my-auto relative mt-12 lg:mt-0">
            <img src={personImg} className="w-96 lg:w-3/4 rounded-lg" />
            <img
              src={partsImg}
              className="w-72 absolute -right-28 top-40 lg:w-96 lg:right-1 lg:top-48 border-white border-8 rounded-lg"
            />
          </div>
          <div className="my-48 p-4 lg:my-auto lg:w-1/2 space-y-5">
            <h1 className="text-5xl font-bold text-[#FF3811]">About Us</h1>
            <h1 className="text-7xl font-extrabold">
              We are qualified & of experience in this field
            </h1>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable.
            </p>
            <p>
              The majority have suffered alteration in some form, by injected
              humour, or randomised words which don't look even slightly
              believable.
            </p>
            <button
              className="btn text-white"
              style={{ backgroundColor: "#FF3811", borderColor: "#FF3811" }}
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
