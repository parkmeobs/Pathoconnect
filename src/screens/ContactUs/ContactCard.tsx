import React from "react";

interface ContactItem {
  icon: string; // bootstrap icon class
  text: string;
  link?: string; // optional (for tel:, mailto:, etc.)
}

interface ContactCardProps {
  country: string;
  items: ContactItem[];
}

const ContactCard: React.FC<ContactCardProps> = ({ country, items }) => {
  return (
    <div className="flex flex-col gap-4 border-b-2 border-gray-200 pb-6 ">
      <h3 className="text-xl font-semibold text-orange-600">{country}</h3>

      {items.map((item, index) => (
        <div key={index} className="flex flex-row gap-2 items-center">
          <i
            className={`${item.icon} w-5 h-5 flex items-center justify-center p-5 bg-primary rounded-full text-white`}
          ></i>

          <p className="text-[#212529BF] text-[15px]">
            {item.link ? (
              <a href={item.link} className="hover:underline">
                {item.text}
              </a>
            ) : (
              item.text
            )}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ContactCard;
