const Footer = () => {
  return (
    <footer className="px-6 md:px-[60px] md:pt-20 md:bg-white">
      <div className="container mx-auto max-w-[1440px]">
        <div className="flex flex-col gap-y-12 md:flex-row md:justify-between mb-12 md:mb-9">
          <div>
            <h2 className="text-2xl md:text-[32px] font-bold text-primary-500 mb-4 uppercase">
              morent
            </h2>
            <p className="text-secondary-300 text-xs md:text-base font-medium md:font-semibold leading-6 max-w-[216px] md:max-w-[292px]">
              Our vision is to provide convenience and help increase your sales
              business.
            </p>
          </div>
          <div className="flex gap-x-[60px] flex-wrap gap-y-12">
            <ul>
              <li className="text-xl font-semibold mb-4 md:mb-9 text-secondary-500">
                About
              </li>
              <li className="mb-4 md:mb-9 text-secondary-300 font-medium text-base">
                How it works
              </li>
              <li className="mb-4 md:mb-9 text-secondary-300 font-medium text-base">
                Featured
              </li>
              <li className="mb-4 md:mb-9 text-secondary-300 font-medium text-base">
                Partnership
              </li>
              <li className="mb-4 md:mb-9 text-secondary-300 font-medium text-base">
                Bussiness Relation
              </li>
            </ul>
            <ul>
              <li className="text-xl font-semibold mb-4 md:mb-9  text-secondary-500">
                Socials
              </li>
              <li className="mb-4 md:mb-9 text-secondary-300 font-medium text-base">
                Discord
              </li>
              <li className="mb-4 md:mb-9 text-secondary-300 font-medium text-base">
                Instagram
              </li>
              <li className="mb-4 md:mb-9 text-secondary-300 font-medium text-base">
                Twitter
              </li>
              <li className="mb-4 md:mb-9 text-secondary-300 font-medium text-base">
                Facebook
              </li>
            </ul>
            <ul>
              <li className="text-xl font-semibold mb-4 md:mb-9  text-secondary-500">
                Community
              </li>
              <li className="mb-4 md:mb-9 text-secondary-300 font-medium text-base">
                Events
              </li>
              <li className="mb-4 md:mb-9 text-secondary-300 font-medium text-base">
                Blog
              </li>
              <li className="mb-4 md:mb-9 text-secondary-300 font-medium text-base">
                Podcast
              </li>
              <li className="mb-4 md:mb-9 text-secondary-300 font-medium text-base">
                Invite a friend
              </li>
            </ul>
          </div>
        </div>
        <div className="flex items-center justify-between flex-wrap gap-y-8 gap-x-[60px] font-semibold text-xs md:border-t md:pt-9 pb-6 md:pb-[60px]">
          <span className="md:flex-1">Privacy & Policy</span>
          <span>Terms & Condition</span>
          <span>©2023 MORENT. All rights reserved</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
