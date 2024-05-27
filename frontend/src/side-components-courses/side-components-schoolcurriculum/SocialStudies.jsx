import React, { useState } from "react";
import { Container, Typography, Card, CardContent } from "@mui/material";
import { useSpring, animated } from "@react-spring/web";
import SST from "../../images/SST.png";

function SocialStudies() {
  const [flipped, setFlipped] = useState(false);

  // Animation spring for card flip
  const props = useSpring({
    from: { opacity: 0, transform: "scale(0.5)" },
    to: { opacity: 1, transform: "scale(1)" },
    config: { tension: 220, friction: 120 },
  });

  return (
    <Container style={{ marginTop: 40 }} className="mb-24">
      <div className="flex flex-wrap justify-center">
        <div
          className="w-full sm:w-full md:w-full p-4 "
          onClick={() => setFlipped(!flipped)}
          style={{ cursor: "pointer" }}
        >
          <animated.div style={props}>
            <Card elevation={3} className="lg:pb-12 xl:pb-0 xl:mt-24">
              <CardContent className="text-[#c8133e]">
                <img src={SST} alt="Subject" className="w-full mb-4 md:h-52" />
                <Typography
                  variant="h4"
                  gutterBottom
                  sx={{ fontWeight: "bold" }}
                >
                  Social Studies
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                  <span className="font-bold">Classes:</span> IV - X
                </Typography>
                <Typography variant="body2">
                  <span className="font-bold">Board:</span>{" "}
                  <span className="font-semibold">CBSE</span>
                </Typography>
                <Typography variant="body2" style={{ marginTop: 10 }}>
                  <strong>Teacher:</strong> Navita Tewari
                </Typography>
              </CardContent>
            </Card>
          </animated.div>
        </div>
      </div>
    </Container>
  );
}

export default SocialStudies;
