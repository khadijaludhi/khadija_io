import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import Fade from "react-reveal/Fade";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <div style={{ padding: 0 }}>
          {children}
        </div>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const JobList = () => {
  const [value, setValue] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [hasBeenVisible, setHasBeenVisible] = useState(false);
  const sectionRef = useRef(null);
  const [sliderStyle, setSliderStyle] = useState({});

  const experienceItems = {
    "Morgan Stanley": {
      jobTitle: "2025 Technology Analyst Summer Intern @ Morgan Stanley",
      duration: "JUL 2022 - PRESENT",
      desc: [
        "Participated in Morgan Stanley’s Technology Spring Insight Week, exploring the integration of technology and finance through hands-on experiences.",
        "Accepted a return offer for the summer of 2025.",
      ],
    },
    Autovista: {
      jobTitle: "Programme Participant @ Autovista",
      duration: "MAY 2020 - APR 2021",
      desc: [
        "Participated in a week-long experience at Autovista, designed to provide insights into the automotive data analytics sector.",
        "Collaborated on 'FitBot AI,' a project that won first place for revolutionising personal training with AI to enhance workout efficiency and effectiveness.",
      ],
    },
    "Bank of America": {
      jobTitle: "Technology Spring Intern @ Bank of America",
      duration: "SEPT 2019 - APR 2020",
      desc: [
        "Participated in a universal banking simulation with AmplifyMe, enhancing my understanding of financial operations within the bank.",
        "Competed in a CTO strategy simulation where our team secured second place, demonstrating our ability to apply technology solutions to business problems effectively.",
      ],
    },
  };

  const handleChange = (index, event) => {
    setValue(index);
    setSliderPosition(event.currentTarget);
  };

  const setSliderPosition = (element) => {
    setSliderStyle({
      top: element.offsetTop,
      height: element.offsetHeight,
    });
  };

  const updateSliderPosition = () => {
    const selectedItem = document.querySelector(`ul li:nth-child(${value + 1})`);
    if (selectedItem) {
      setSliderPosition(selectedItem);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);

        if (entry.isIntersecting) {
          setHasBeenVisible(true);
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.25,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    // Set initial slider position
    updateSliderPosition();

    // Recalculate slider position on window resize
    window.addEventListener("resize", updateSliderPosition);

    return () => {
      window.removeEventListener("resize", updateSliderPosition);
    };
  }, [value]);

  return (
    <div ref={sectionRef} className="joblist-container">
      <Fade bottom when={isVisible || hasBeenVisible} delay={500} distance="75px" duration={3000}>
        <div style={{ display: "flex", flexDirection: "row", gap: "20px" }}>
          <div style={{ flexBasis: "20%", position: "relative" }}>
            <ul style={{ listStyle: "none", padding: 0, marginTop: 5 }}>
              {Object.keys(experienceItems).map((key, i) => (
                <li
                  key={i}
                  style={{ marginBottom: "8px", cursor: "pointer", color: value === i ? "#ff51ae" : "#fff", position: 'relative' }}
                  onClick={(e) => handleChange(i, e)}
                  {...a11yProps(i)}
                >
                  {key}
                </li>
              ))}
            </ul>
            <div className="slider" style={sliderStyle}></div>
          </div>
          <div style={{ flexBasis: "80%" }}>
            {Object.keys(experienceItems).map((key, i) => (
              <TabPanel value={value} index={i} key={i}>
                <div style={{ marginBottom: "8px" }}>
                  <span style={{ fontSize: "24px", fontWeight: "bold" }}>{experienceItems[key]["jobTitle"]}</span>
                </div>
                <div style={{ marginBottom: "8px", color: "#ff51ae" }}>{key}</div>
                <div style={{ marginBottom: "16px", color: "rgb(230, 217, 255)" }}>{experienceItems[key]["duration"]}</div>
                <ul style={{ listStyle: "disc", paddingLeft: "20px" }}>
                  {experienceItems[key]["desc"].map((descItem, j) => (
                    <li key={j} style={{ marginBottom: "8px", color: "#eee" }}>{descItem}</li>
                  ))}
                </ul>
              </TabPanel>
            ))}
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default JobList;
