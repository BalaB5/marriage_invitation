const config = {
  data: {
    // Main invitation title that appears on the page
    title: "Thilak & Ramya Wedding Invitation",

    // Opening message/description of the invitation
    description:
      "We are getting married, and we invite you to join us in celebrating this special moment.",

    // Groom's name
    groomName: "Thilak",

    // Bride's name
    brideName: "Ramya",

    // Groom's parents' names
    parentGroom: "Prabhakaran & Deeparani",

    // Bride's parents' names
    parentBride: "Kannan & Jayalakshmi",

    // Wedding date (format: YYYY-MM-DD)
    date: "2025-11-30",

    // Google Maps link for location (short clickable link)
    maps_url: "https://maps.app.goo.gl/uwrV3msBL4hcgBY78",

    // Google Maps embed code to display map on website
    maps_embed:
      "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7857.142567962703!2d78.1615756!3d10.0521913!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00b9003b205e67%3A0xea8c20e74b42ad9!2sVenkateswara%20Mahal!5e0!3m2!1sen!2sin!4v1761591212800!5m2!1sen!2sin",

    // Event time
    time: "10:30 - 11:30",

    // Venue/building name
    location: "Sri Venkateswara Mahal",

    // Full address of the wedding venue
    address: "Sathirathondamanpatti, Madurai - 625014",

    // Image that appears when the link is shared on social media
    ogImage: "/images/og-image.jpg",

    // Icon that appears in the browser tab
    favicon: "/images/favicon.ico",

    // List of event agenda/schedule
    agenda: [
      {
        // Engagement
        title: "Engagement",
        date: "2025-10-29",
        startTime: "10:30",
        endTime: "11:30",
        location: "Sri Venkateswara Mahal",
        address: "Sathirathondamanpatti, Madurai - 625014",
      },
      {
        // Wedding
        title: "Wedding Ceremony",
        date: "2025-11-30",
        startTime: "10:30",
        endTime: "11:30",
        location: "Sri Venkateswara Mahal",
        address: "Sathirathondamanpatti, Madurai - 625014",
      },
      {
        // Reception
        title: "Wedding Reception",
        date: "2024-12-24",
        startTime: "16:16",
        endTime: "17:30",
        location: " ",
        address: "Seranmanagar, Coimbatore",
      },
    ],

    // Background music settings
    audio: {
      src: "https://github.com/BalaB5/marriage_invitation/raw/refs/heads/main/public/audio/b5.mp3",
      title: "B5 Love Music",
      autoplay: true,
      loop: true,
    },

    // Uncomment below if you want to add bank details for digital gifts
    /*
    banks: [
      {
        bank: "Bank Central Asia",
        accountNumber: "1234567890",
        accountName: "FULAN",
      },
      {
        bank: "Bank Mandiri",
        accountNumber: "0987654321",
        accountName: "FULANA",
      }
    ]
    */
  }
};

export default config;
