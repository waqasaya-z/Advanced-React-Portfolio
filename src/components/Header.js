import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: hello@example.com",
  },
  {
    icon: faGithub,
    url: "https://github.com",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com",
  },
  {
    icon: faMedium,
    url: "https://medium.com",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com",
  },
];

const Header = () => {

  const [hideHeader, setHideHeader] = useState(false);
  const prevScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (prevScrollY.current < currentScrollY && !hideHeader) {
        setHideHeader(true);
      } else if (prevScrollY.current > currentScrollY && hideHeader) {
        setHideHeader(false);
      }

      prevScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [hideHeader]);

  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      transform={`translateY(${hideHeader ? '-200px' : '0'})`}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            {socials.map(({ icon, url }) => {
              return(
                <a href={url} key={url} >  <FontAwesomeIcon icon={icon} size="2x" />  </a>
              );
            }) }
      
           </nav>
          <nav>
            <HStack spacing={8}>
              
                 <a href="/#projects-section" onClick={() => handleClick(projects)} > Projects </a>
                  <a href="#contactme-section" onClick={() => handleClick(contactme)}> Contact Me </a>
                
              
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;