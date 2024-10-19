const Footer = () => {
  return (
    <div className="bg-purple-900  py-10">
      <div className="container mx-auto flex flex-col  items-center text-white">
        <span className=" text-md items-center">
          HolidayIn.com is part of Booking Holdings Inc., the world leader in
          online travel and related services.
        </span>
        <span className="text-md items-center">Copyright © 1996–2024 Booking.com™. All rights reserved.</span>

        <span className=" text-lg flex flex-row gap-5  ">
          <p className="cursor-pointer hover:text-gray-300">Privacy Policy</p>
          <p className="cursor-pointer hover:text-gray-300">Terms of Services</p>
        </span>
      </div>
    </div>
  );
};
export default Footer;
