"use client";

import CTASection from "@/sections/cta-section";
import FooterSection from "@/sections/footer-section";
import { experience, profile } from "@/utilities/content";
import { OpenInNew } from "@mui/icons-material";
import Timeline from "@mui/lab/Timeline";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from "@mui/lab/TimelineOppositeContent";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import { Box, Button, Chip, Container, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";

export default function LeftAlignedTimeline() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => setIsClient(true), []);

  if (!isClient) return null;

  return (
    <main>
      <Box sx={{ py: 10 }}>
        <Container maxWidth="md">
          <Timeline
            sx={{
              [`& .${timelineOppositeContentClasses.root}`]: {
                flex: 0.2,
              },
            }}
          >
            <TimelineItem>
              <TimelineOppositeContent
                color="textSecondary"
                sx={{ minWidth: 100 }}
              >
                Summary
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Typography variant="h6" sx={{ mb: 0 }}>
                  {profile.name}
                </Typography>
                <Typography>{profile.work}</Typography>
                <Typography color="textSecondary" sx={{ mb: 2 }}>
                  {profile.description}
                </Typography>
              </TimelineContent>
            </TimelineItem>
            {experience.map((exp, idx) => (
              <TimelineItem key={exp.startDate}>
                <TimelineOppositeContent
                  color="textSecondary"
                  sx={{ minWidth: 100 }}
                >
                  {exp.startDate} - {exp.endDate}
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot />
                  {experience.length != idx + 1 && <TimelineConnector />}
                </TimelineSeparator>
                <TimelineContent>
                  <Typography>{exp.role}</Typography>
                  <Typography color="textSecondary">{exp.company}</Typography>
                  <Stack>
                    {exp.highlights.map((h) => (
                      <Typography key={h}>{h}</Typography>
                    ))}
                  </Stack>
                  <Box sx={{ my: 1.5 }}>
                    {exp.tags.map((t) => (
                      <Chip key={t} label={t} sx={{ mr: 0.5, mb: 0.5 }} />
                    ))}
                  </Box>
                  <Box sx={{ mb: 2 }}>
                    {exp.links.map((link) => (
                      <Button
                        key={link.url}
                        variant="outlined"
                        endIcon={<OpenInNew />}
                        sx={{ mr: 0.5, mb: 0.5 }}
                      >
                        {link.label}
                      </Button>
                    ))}
                  </Box>
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </Container>
      </Box>
      <FooterSection />
      <CTASection />
    </main>
  );
}
