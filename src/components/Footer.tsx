import {
  Footer as FlowbiteFooter,
  FooterCopyright,
  FooterDivider,
  FooterLink,
  FooterLinkGroup,
  FooterTitle,
} from "flowbite-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <FlowbiteFooter container className="bg-black rounded-none w-screen">
        <div className="w-full text-white">
          <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
            <div className="flex items-center py-7">
              <img
                src="https://res.cloudinary.com/thirtythree/image/upload/v1726476802/vicmob-logo_vc17p3.jpg"
                alt="Vicmob Logo"
                className="mr-3 h-6 sm:h-9"
              />
              <span className="self-center text-xl font-semibold whitespace-nowrap text-white">
                Vicmob Schools
              </span>
            </div>

            <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
              <div>
                <FooterTitle title="about" className="text-white" />
                <FooterLinkGroup col>
                  <FooterLink href="#" className="text-white">
                    Admission
                  </FooterLink>
                  <FooterLink href="#" className="text-white">
                    Curriculum
                  </FooterLink>
                  <FooterLink href="#" className="text-white">
                    COntact form
                  </FooterLink>
                  <FooterLink href="#" className="text-white">
                    About us
                  </FooterLink>
                </FooterLinkGroup>
              </div>
              <div>
                <FooterTitle title="Follow us" className="text-white" />
                <FooterLinkGroup col>
                  <FooterLink href="#" className="text-white">
                    <a href="https://www.facebook.com/vicmobschools">
                      Facebook
                    </a>
                  </FooterLink>
                  <FooterLink href="#" className="text-white">
                    <a href="https://www.instagram.com/vicmobschools">
                      Instagram
                    </a>
                  </FooterLink>
                </FooterLinkGroup>
              </div>
              <div>
                <FooterTitle title="Legal" className="text-white" />
                <FooterLinkGroup col>
                  <FooterLink href="#" className="text-white">
                    School Policies
                  </FooterLink>
                </FooterLinkGroup>
              </div>
            </div>
          </div>
          <FooterDivider className="border-white" />
          <div className="flex justify-center space-x-4 mb-3">
            <h1 className="text-sm">
              Vicmob Private School |17 Ojo Srteet, Off Oguntade B/Stop Shasha
              Lagos.
            </h1>
            <h1 className="text-sm">
              Vicmob High School / 23 Elegbede Street, Off Coker Rd, Shasha
              Lagos.
            </h1>
          </div>
          <div className="w-full sm:flex sm:items-center sm:justify-center">
            <FooterCopyright
              href="#"
              by="Vicmob Schools™"
              year={currentYear}
              className="text-white"
            />
          </div>
        </div>
      </FlowbiteFooter>
    </footer>
  );
};

export default Footer;
