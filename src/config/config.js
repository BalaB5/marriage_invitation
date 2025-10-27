const config = {
  data: {
    // Main invitation title that appears on the page
    title: "திலக் & ரம்யா திருமண அழைப்பிதழ்",
    // Opening message/description of the invitation
    description:
      "நாங்கள் திருமணம் செய்துகொள்கிறோம், இந்த சிறப்பு தருணத்தைக் கொண்டாட எங்களுடன் சேர உங்களை அழைக்கிறோம்.", // Nanti ini dibikin random
    // Groom's name
    groomName: "திலக்",
    // Bride's name
    brideName: "ரம்யா",
    // Groom's parents names
    parentGroom: "பிரபாகரன் & தீபாராணி",
    // Bride's parents names
    parentBride: "கண்ணன் & ஜெயலட்சுமி",
    // Wedding date (format: YYYY-MM-DD)
    date: "2025-11-30",
    // Google Maps link for location (short clickable link)
    maps_url: "https://maps.app.goo.gl/uwrV3msBL4hcgBY78",
    // Google Maps embed code to display map on website
    // How to get: open Google Maps → select location → Share → Embed → copy link
    maps_embed:
      "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7857.142567962703!2d78.1615756!3d10.0521913!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00b9003b205e67%3A0xea8c20e74b42ad9!2sVenkateswara%20mahal!5e0!3m2!1sen!2sin!4v1761591212800!5m2!1sen!2sin",
    // Event time (free format, example: "10:00 - 12:00 WIB")
    time: "10:30 - 11:30",
    // Venue/building name
    location: "ஸ்ரீ வெங்கடேஸ்வரா மஹால்",
    // Full address of the wedding venue
    address: "சத்திரதொண்டமான்பட்டி,மதுரை - 625014",
    // Image that appears when link is shared on social media
    ogImage: "/images/og-image.jpg",
    // Icon that appears in browser tab
    favicon: "/images/favicon.ico",
    // List of event agenda/schedule
    agenda: [
      {
        // First event name
        title: "திருமணம்",
        // Event date (format: YYYY-MM-DD)
        date: "2025-11-30",
        // Start time (format: HH:MM)
        startTime: "10:30",
        // End time (format: HH:MM)
        endTime: "11:30",
        // Event venue
        location: "்ரீ வெங்கடேஸ்வரா மஹால்",
        // Full address
        address: "சத்திரதொண்டமான்பட்டி,மதுரை - 625014",
      },
      {
        // Second event name
        title: "Resepsi Nikah",
        date: "2024-12-24",
        startTime: "16:16",
        endTime: "17:30",
        location: "்ரீ வெங்கடேஸ்வரா மஹால்y",
        address: "Jசேரன்மாநகர், கோயம்புத்தூர்",
      }
      // You can add more agenda items with the same format
    ],

    // Background music settings
    audio: {
      // Music file (choose one or replace with your own file)
      src: "/audio/b5.mp3", // or /audio/nature-sound.mp3
      // Music title to display
      title: "Fulfilling Humming", // or Nature Sound
      // Whether music plays automatically when website opens
      autoplay: true,
      // Whether music repeats continuously
      loop: true
    },

    // List of bank accounts for digital envelope/gifts
    banks: [
      {
        // Bank name
        bank: "Bank Central Asia",
        // Account number
        accountNumber: "1234567890",
        // Account holder name (all uppercase)
        accountName: "FULAN",
      },
      {
        bank: "Bank Mandiri",
        accountNumber: "0987654321",
        accountName: "FULANA",
      }
      // You can add more banks with the same format
    ]
  }
};

export default config;