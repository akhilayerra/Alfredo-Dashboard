import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Button,
  Chip,
  Stack,
} from "@mui/material";

const RiskCard = ({ insight, handleFlagRisk, onInteraction, idx }) => {
    const timeAgo = (date) => {
  const seconds = Math.floor((Date.now() - new Date(date)) / 1000);

  let interval = Math.floor(seconds / 31536000);
  if (interval >= 1) return `${interval} year${interval > 1 ? "s" : ""} ago`;

  interval = Math.floor(seconds / 2592000);
  if (interval >= 1) return `${interval} month${interval > 1 ? "s" : ""} ago`;

  interval = Math.floor(seconds / 86400);
  if (interval >= 1) return `${interval} day${interval > 1 ? "s" : ""} ago`;

  interval = Math.floor(seconds / 3600);
  if (interval >= 1) return `${interval} hour${interval > 1 ? "s" : ""} ago`;

  interval = Math.floor(seconds / 60);
  if (interval >= 1) return `${interval} min${interval > 1 ? "s" : ""} ago`;

  return "just now";
};

  return (
    <Card key={idx} sx={{ mb: 2,mt: 2, boxShadow: 1, background: "#333" }}>
      <CardContent sx={{ color: "white" }}>
        <Typography variant="h7" component="div" gutterBottom>
          {insight.title}
        </Typography>
        <Typography variant="body2" fontSize="11px" color="darkgrey" paragraph>
          {insight.description}
        </Typography>
        <Typography variant="caption" fontSize="11px" color="darkgrey" gutterBottom marginRight={1} marginTop={1}>
          {timeAgo(insight.time)}
        </Typography>
        <Chip
          label={insight.priority}
          color={
            insight.priority.toLowerCase() === "high"
              ? "error"
              : insight.priority.toLowerCase() === "medium"
              ? "warning"
              : "success"
          }
          size="small"
          sx={{ mr: 1, mb: 1 }}
        />
        {insight.type && (
          <Chip
            label={insight.type}
            color="primary"
            size="small"
            sx={{ mb: 1 }}
          />
        )}
        <Stack direction="row" spacing={1} mt={1}>
          <Button
            sx={{marginTop:1}}
            variant="outlined"
            color="error"
            onClick={() => handleFlagRisk(insight)}
            size="small"
          >
            Flag Risk
          </Button>
          <Button
            variant="outlined"
            color="white"
            backgroundColor="darkgrey"
            onClick={() => onInteraction("Clarify", insight)}
            size="small"
          >
            Clarify
          </Button>
          <Button
            variant="contained"
            color="success"
            onClick={() => onInteraction("Update", insight)}
            size="small"
          >
            Update
          </Button>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default RiskCard;