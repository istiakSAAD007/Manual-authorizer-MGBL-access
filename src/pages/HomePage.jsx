import MeghnaIcon from "../assets/Meghna-Bank_Logo_JPG.jpg";
import SailorBoatBg from "../assets/sailorboat.webp";
import LoginForm from "../components/form/LoginForm";

function HomePage() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-gossamerparchment">
      {/* change image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${SailorBoatBg})` }}
      >
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Main Layout Layer */}
      <div className="relative z-10 flex h-full w-full flex-col justify-center items-center md:items-start px-4 md:px-20 lg:px-32">
        <div className="absolute top-8 left-6 md:left-20 lg:left-32">
          <img
            className="h-12 object-contain"
            src={MeghnaIcon}
            alt="Meghna Bank Logo"
          />
        </div>

        {/* Login Form Wrapper aligned to the left side */}
        <div className="w-full lg:max-w-90 sm:max-w-95 mt-12 md:mt-0">
          <LoginForm />
        </div>
      </div>
    </section>
  );
}

export default HomePage;
