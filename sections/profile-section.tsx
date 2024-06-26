"use client";

import { appBarHeight } from "@/utilities/constants";
import { profile } from "@/utilities/content";
import profileImage from "@/public/images/profile.jpg";
import {
  Box,
  Container,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useTheme as useNextTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";
import SocialsSection from "./socials-section";
import { motion } from "framer-motion";

const { name, tagline, description, gravatarUrl } = profile;

export default function ProfileSection() {
  const [isClient, setIsClient] = useState(false);

  const { palette } = useTheme();
  const { resolvedTheme } = useNextTheme();

  const below600 = useMediaQuery("(max-width: 600px)");
  const imageSize = below600 ? 180 : 280;

  useEffect(() => setIsClient(true), []);

  if (!isClient) return null;

  return (
    <Box
      sx={{
        py: 10,
        borderRadius: 0,
        backgroundColor:
          resolvedTheme == "dark"
            ? palette.grey[900]
            : palette.background.default,
      }}
    >
      <Container maxWidth="md">
        <Box sx={{ height: appBarHeight }} />
        <Stack spacing={2} alignItems="center">
          <Image
            src={profileImage}
            alt="Vercel Logo"
            width={imageSize}
            height={imageSize}
            style={{ borderRadius: "50%" }}
          />
          <Stack spacing={0.5} alignItems="center">
            <Typography
              variant="h5"
              sx={{ textAlign: "center" }}
              component={motion.div}
              initial={{ scale: 0.9 }}
              animate={{ scale: 1, bottom: 200 }}
            >
              {name}
            </Typography>
            <Typography
              variant="h6"
              sx={{ textAlign: "center" }}
              component={motion.div}
              initial={{ scale: 0.9 }}
              animate={{ scale: 1, bottom: 200 }}
            >
              {tagline}
            </Typography>
            <Typography
              sx={{ maxWidth: 500, textAlign: "center" }}
              component={motion.div}
              initial={{ scale: 0.9 }}
              animate={{ scale: 1, bottom: 200 }}
            >
              {description}
            </Typography>
          </Stack>
          <SocialsSection />
        </Stack>
      </Container>
    </Box>
  );
}
