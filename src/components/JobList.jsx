import React, { useState } from "react";
import PropTypes from "prop-types";
import Fade from "react-reveal/Fade";

const isHorizontal = window.innerWidth < 600;

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
        <div style={{ padding: "16px" }}>
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
        "Participated in a week-long experience at Autovista, facilitated by the UpReach Xperience programme, designed to provide insights into the automotive data analytics sector.",
        "Collaborated on a team project, “FitBot AI,” aimed at revolutionising personal training through artificial intelligence as part of a challenge to create an AI-driven initiative that automates a repetitive task. Our project won us first place for its innovative approach to enhancing workout efficiency and effectiveness.",
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

  const handleChange = (index) => {
    setValue(index);
  };

  return (
    <div style={{ display: "flex", flexDirection: isHorizontal ? "column" : "row", gap: "20px" }}>
      <div style={{ flexBasis: "20%" }}>
        <ul style={{ listStyle: "none", padding: 0 }}>
          {Object.keys(experienceItems).map((key, i) => (
            <li key={i} style={{ marginBottom: "8px", cursor: "pointer", color: value === i ? "#ff51ae" : "#fff" }} onClick={() => handleChange(i)} {...a11yProps(i)}>
              {isHorizontal ? `0${i}.` : key}
            </li>
          ))}
        </ul>
      </div>
      <div style={{ flexBasis: "80%" }}>
        {Object.keys(experienceItems).map((key, i) => (
          <TabPanel value={value} index={i} key={i}>
            <Fade bottom delay={200}>
              <div style={{ marginBottom: "8px" }}>
                <span style={{ fontSize: "24px", fontWeight: "bold" }}>{experienceItems[key]["jobTitle"]}</span>
              </div>
              <div style={{ marginBottom: "8px", color: "#ff51ae" }}>{key}</div>
              <div style={{ marginBottom: "16px", color: "#bbb" }}>{experienceItems[key]["duration"]}</div>
              <ul style={{ listStyle: "disc", paddingLeft: "20px" }}>
                {experienceItems[key]["desc"].map((descItem, j) => (
                  <li key={j} style={{ marginBottom: "8px", color: "#eee" }}>{descItem}</li>
                ))}
              </ul>
            </Fade>
          </TabPanel>
        ))}
      </div>
    </div>
  );
};

export default JobList;
