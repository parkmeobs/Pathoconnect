import Image from "next/image";
import OrderBooking from "@/assets/images/OrderBooking.png";

function Blog3() {
  return (
    <section
      style={{ backgroundColor: "#FFCDCD" }}
      className="w-full bg-cover bg-center bg-no-repeat"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 flex flex-col gap-12">
        {/* Heading */}
        <h1 className="max-w-4xl mx-auto text-blue text-2xl sm:text-3xl lg:text-4xl font-medium leading-snug text-center">
          Online Lab Test Booking Application
        </h1>

        {/* Content Container */}
        <div className="w-full bg-white/40 backdrop-blur-sm rounded-2xl p-6 sm:p-8 lg:p-12 flex flex-col lg:flex-row items-center gap-10">
          {/* Left Content */}
          <div className="max-w-2xl flex flex flex-col gap-6 text-center lg:text-left  p-6 sm:p-8 lg:p-12">
            <p className="text-blue text-sm sm:text-base">
              An Online Lab Test Booking Application is a software tool designed
              to simplify the process of booking appointments for blood draws or
              phlebotomy services. This type of application is typically used by
              medical practices, clinics, and laboratories to streamline the
              ordering and scheduling of blood draws, which can help to improve
              patient care and reduce wait times.
            </p>

         

            <button className="mt-6 h-12 px-8 rounded-full font-bold bg-blue text-white  hover:bg-white hover:text-blue hover:border-blue border transition-all border-blue  max-w-3xs sm:w-auto mx-auto lg:mx-0">
              Book Demo
            </button>
          </div>

          {/* Right Image */}
          <div className="flex-1 flex justify-center">
            <Image
              src={OrderBooking}
              alt="Mobile App Preview"
              className="w-64 sm:w-80 lg:w-96 h-auto"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Blog3;
