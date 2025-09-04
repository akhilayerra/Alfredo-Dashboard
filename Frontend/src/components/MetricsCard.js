import { Box, Typography } from "@mui/material";

function MetricsCard() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#1a1a1a", // dark navy bg
        borderRadius: 2,
        px: 3,
        py: 2,
        width: "220px",
      }}
    >
      {/* SPI */}
      <Box textAlign="center">
        <Typography variant="caption" sx={{ color: "gray" }}>
          SPI
        </Typography>
        <Typography variant="h6" sx={{ color: "#f97316", fontWeight: "bold" }}>
          0.85
        </Typography>
      </Box>

      {/* Completion */}
      <Box textAlign="center">
        <Typography variant="caption" sx={{ color: "gray" }}>
          Completion
        </Typography>
        <Typography variant="h6" sx={{ color: "#3b82f6", fontWeight: "bold" }}>
          42%
        </Typography>
      </Box>
    </Box>
  );
}

export default MetricsCard;
