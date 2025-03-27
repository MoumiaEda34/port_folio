"use client";

import { useState } from "react";
import {
  TextField,
  Button,
  Card,
  CardContent,
  Typography,
  Container,
  Grid,
} from "@mui/material";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("http://localhost:5000/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Message Sent Successfully!");
        setFormData({ name: "", email: "", message: "" }); // Clear form
      } else {
        throw new Error("Failed to send message.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error sending message. Try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-16 px-6"
    >
      <Container maxWidth="md">
        <Card elevation={6} sx={{ borderRadius: 4, overflow: "hidden" }}>
          <Grid container>
            {/* Left Panel - Image & Info */}
            <Grid
              item
              xs={12}
              md={6}
              sx={{
                backgroundColor: "#7e22ce",
                color: "#fff",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                p: 4,
              }}
            >
              <img
                src="/contact.jpg"
                alt="Contact Us"
                style={{ width: "80%", marginBottom: "20px" }}
              />
              <Typography variant="h4" fontWeight="bold" gutterBottom>
                Get In Touch
              </Typography>
              <Typography variant="body1" textAlign="center">
                I am always open to discuss new projects or opportunities.
              </Typography>
            </Grid>

            {/* Right Panel - Form */}
            <Grid item xs={12} md={6}>
              <CardContent sx={{ p: 4 }}>
                <Typography
                  variant="h5"
                  fontWeight="bold"
                  gutterBottom
                  color="primary"
                >
                  Contact Me
                </Typography>
                <Typography variant="body2" color="textSecondary" mb={3}>
                  Fill out the form below and I will get back to you shortly.
                </Typography>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <TextField
                    label="Your Name"
                    variant="outlined"
                    fullWidth
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                  <TextField
                    label="Your Email"
                    variant="outlined"
                    fullWidth
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                  <TextField
                    label="Your Message"
                    variant="outlined"
                    fullWidth
                    multiline
                    rows={4}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                  <Button
                    type="submit"
                    variant="contained"
                    fullWidth
                    sx={{
                      backgroundColor: "#9333ea",
                      color: "#fff",
                      fontWeight: "bold",
                      borderRadius: "8px",
                      textTransform: "capitalize",
                      "&:hover": {
                        backgroundColor: "#7e22ce",
                      },
                    }}
                    disabled={loading}
                  >
                    {loading ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Grid>
          </Grid>
        </Card>
      </Container>
    </section>
  );
}
