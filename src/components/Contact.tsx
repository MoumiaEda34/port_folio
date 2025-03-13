"use client";

import { useState } from "react";
import { TextField, Button, Card, CardContent, Typography, Container } from "@mui/material";

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
    <section id="contact" className="min-h-screen flex flex-col items-center justify-center bg-white py-16 px-6">
      <Container maxWidth="sm">
        {/* Heading */}
        <div className="text-center mb-8">
          <h2 className="text-4xl py-4 font-bold text-yellow-600"><span className="underline decoration-yellow-600">Contact</span> Me</h2>
          <Typography variant="body1" className="text-gray-600">
            Lets connect! Fill out the form below and I will get back to you.
          </Typography>
        </div>

        {/* Contact Form */}
        <Card className="bg-white shadow-md border border-gray-200">
          <CardContent className="p-6">
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
                color="primary"
                fullWidth
                disabled={loading}
                className="bg-blue-600 hover:bg-blue-700 text-white"
              >
                {loading ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </Container>
    </section>
  );
}
