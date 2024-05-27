import React, { useState } from "react";
import { Container, Typography, Card, CardContent } from "@mui/material";
import { useSpring, animated } from "@react-spring/web";
import PsychologySubject from "../../images/Psychology2.png";

function Psychology() {
  const [flipped, setFlipped] = useState(false);

  // Animation spring for card flip
  const props = useSpring({
    from: { opacity: 0, transform: "scale(0.5)" },
    to: { opacity: 1, transform: "scale(1)" },
    config: { tension: 220, friction: 120 },
  });

  return (
    <Container style={{ marginTop: 40 }} className="mb-24">
      <div className="">
        <div
          className="w-full sm:w-full md:w-full p-4 sm:justify-center"
          onClick={() => setFlipped(!flipped)}
          style={{ cursor: "pointer" }}
        >
          <animated.div style={props}>
            <Card elevation={3} className="lg:pb-12">
              <CardContent className="text-[#c8133e]">
                <img
                  src={PsychologySubject}
                  alt="Subject"
                  className="w-full mb-4 sm:h-60 md:h-64 lg:h-52"
                />
                <Typography
                  variant="h4"
                  gutterBottom
                  sx={{ fontWeight: "bold" }}
                >
                  Psychology
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                  <span className="font-bold">Classes:</span> XI - XII
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

export default Psychology;
