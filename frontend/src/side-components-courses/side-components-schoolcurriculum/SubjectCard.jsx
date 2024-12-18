import React from "react";
import { Container, Typography, Card, CardContent } from "@mui/material";
import { useSpring, animated } from "@react-spring/web";

function SubjectCard({
  textColor,
  img,
  subjectTitle,
  classTitle,
  board,
  teacher,
}) {
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
          style={{ cursor: "pointer" }}
        >
          <animated.div style={props}>
            <Card elevation={3} className="pb-12">
              <CardContent className={`${textColor}`}>
                {img && (
                  <img
                    src={img}
                    alt={subjectTitle}
                    className="w-full mb-4 sm:h-64 xl:h-52"
                    loading="lazy" //lazy loading
                  />
                )}
                <Typography
                  variant="h4"
                  gutterBottom
                  sx={{ fontWeight: "bold" }}
                >
                  {subjectTitle}
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                  <span className="font-bold">Classes:</span> {classTitle}
                </Typography>
                <Typography variant="body2">
                  <span className="font-bold">Board:</span>{" "}
                  <span className="font-semibold">{board}</span>
                </Typography>
                <Typography variant="body2" style={{ marginTop: 10 }}>
                  <strong>Teacher:</strong> {teacher}
                </Typography>
              </CardContent>
            </Card>
          </animated.div>
        </div>
      </div>
    </Container>
  );
}

export default SubjectCard;
