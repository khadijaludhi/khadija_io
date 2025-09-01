import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import Fade from "react-reveal/Fade";

function TabPanel({ children, value, index, ...other }) {
  return (
    <div role="tabpanel" hidden={value !== index} {...other}>
      {value === index && <div style={{ padding: 0 }}>{children}</div>}
    </div>
  );
}
TabPanel.propTypes = { children: PropTypes.node, index: PropTypes.any.isRequired, value: PropTypes.any.isRequired };

const JobList = () => {
  const [value, setValue] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [hasBeenVisible, setHasBeenVisible] = useState(false);
  const sectionRef = useRef(null);

  // slider for the horizontal tabs (underline)
  const tabsRef = useRef([]);
  const [sliderStyle, setSliderStyle] = useState({ left: 0, width: 0 });

  const experienceItems = {
    "Morgan Stanley": {
      jobTitle: "2025 Technology Analyst Summer Intern @ Morgan Stanley",
      duration: "APR 2024 - AUG 2025",
      desc: [
        "Participated in Morgan Stanley’s 2024 Technology Spring Insight Week.",
        "Accepted a return offer for the 2025 Summer Analyst Internship.",
        "Worked within the eFX team during Summer 2025 and gained valuable insight into how global tech teams support and develop electronic trading systems.",
      ],
    },
    Autovista: {
      jobTitle: "Programme Participant @ Autovista",
      duration: "JUL 2024 - JUL 2024",
      desc: [
        "Participated in a week-long experience at Autovista, designed to provide insights into the automotive data analytics sector.",
        "Collaborated on 'FitBot AI,' a project that won first place for revolutionising personal training with AI to enhance workout efficiency and effectiveness.",
      ],
    },
    "Bank of America": {
      jobTitle: "Technology Spring Intern @ Bank of America",
      duration: "APR 2024 - APR 2024",
      desc: [
        "Participated in a universal banking simulation with AmplifyMe, enhancing my understanding of financial operations within the bank.",
        "Competed in a CTO strategy simulation where our team secured second place, demonstrating our ability to apply technology solutions to business problems effectively.",
      ],
    },
  };

  const keys = Object.keys(experienceItems);

  const moveSliderTo = (idx) => {
    const el = tabsRef.current[idx];
    if (!el) return;
    const { offsetLeft, offsetWidth } = el;
    setSliderStyle({ left: offsetLeft, width: offsetWidth });
  };

  const handleChange = (idx) => {
    setValue(idx);
    moveSliderTo(idx);
  };

  // intersection observer (your fade-in)
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
        if (entry.isIntersecting) setHasBeenVisible(true);
      },
      { threshold: 0.25 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  // set / update slider position on mount & resize
  useEffect(() => {
    const onResize = () => moveSliderTo(value);
    moveSliderTo(value);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [value]);

  return (
    <div ref={sectionRef} className="joblist-container">
      <Fade bottom when={isVisible || hasBeenVisible} delay={500} distance="75px" duration={3000}>
        {/* TOP HORIZONTAL TABS */}
        <div style={{ position: "relative", borderBottom: "1px solid rgba(230,217,255,0.2)", marginBottom: 24, overflowX: "auto" }}>
          <ul
            style={{
              display: "flex",
              gap: 24,
              listStyle: "none",
              padding: 0,
              margin: 0,
              whiteSpace: "nowrap",
            }}
          >
            {keys.map((k, i) => (
              <li
                key={k}
                ref={(el) => (tabsRef.current[i] = el)}
                onClick={() => handleChange(i)}
                style={{
                  cursor: "pointer",
                  padding: "10px 2px",
                  color: value === i ? "#ff51ae" : "#fff",
                  fontWeight: value === i ? 700 : 400,
                  transition: "color .2s",
                }}
              >
                {k}
              </li>
            ))}
          </ul>
          {/* underline slider */}
          <div
            style={{
              position: "absolute",
              bottom: 0,
              height: 2,
              background: "#ff51ae",
              transition: "left .25s ease, width .25s ease",
              ...sliderStyle,
            }}
          />
        </div>

        {/* CONTENT */}
        {keys.map((key, i) => (
          <TabPanel value={value} index={i} key={key}>
            <div style={{ marginBottom: 8 }}>
              <span style={{ fontSize: 24, fontWeight: "bold" }}>{experienceItems[key].jobTitle}</span>
            </div>
            <div style={{ marginBottom: 8, color: "#ff51ae" }}>{key}</div>
            <div style={{ marginBottom: 16, color: "rgb(230, 217, 255)" }}>{experienceItems[key].duration}</div>
            <ul style={{ listStyle: "disc", paddingLeft: 20 }}>
              {experienceItems[key].desc.map((d, j) => (
                <li key={j} style={{ marginBottom: 8, color: "#eee" }}>
                  {d}
                </li>
              ))}
            </ul>
          </TabPanel>
        ))}
      </Fade>
    </div>
  );
};

export default JobList;