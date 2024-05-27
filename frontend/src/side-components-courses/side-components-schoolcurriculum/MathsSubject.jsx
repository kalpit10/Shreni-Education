import React, { useState } from "react";
import { Container, Typography, Card, CardContent } from "@mui/material";
import { useSpring, animated } from "@react-spring/web";
import MathsImage from "../../images/Maths.png";

function MathsSubject() {
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
          className="w-full sm:w-full md:w-full p-4"
          onClick={() => setFlipped(!flipped)}
          style={{ cursor: "pointer" }}
        >
          <animated.div style={props}>
            <Card elevation={3} className="md:mt-24">
              <CardContent className="text-[#c8133e]">
                <img
                  src={MathsImage}
                  alt="Subject"
                  className="w-full mb-4 md:h-52"
                />
                <Typography
                  variant="h4"
                  gutterBottom
                  sx={{ fontWeight: "bold" }}
                >
                  Maths
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                  <span className="font-bold">Classes:</span> III - X
                </Typography>
                <Typography variant="body2">
                  <span className="font-bold">Board:</span>{" "}
                  <span className="font-semibold">CBSE/ ICSE/ Haryana Board</span>
                </Typography>
                <Typography variant="body2" style={{ marginTop: 10 }}>
                  <strong>Teacher:</strong> Piyush Kumar Tiwari
                </Typography>
              </CardContent>
            </Card>
          </animated.div>
        </div>
      </div>
    </Container>
  );
}

export default MathsSubject;
