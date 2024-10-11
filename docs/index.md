---
layout: home
hero:
  name: "Voasis - Nebula"
  text: Dynamically managed server network.
  tagline: Simple, powerful, and smart server network that uses Nebula.
  actions:
    - theme: brand
      text: Discord
      link: https://discord.gg/jC9azQtJmC
    - theme: alt
      text: View on GitHub
      link: https://github.com/aquestry/ServerHandlerProxy

head:
  - - style
    - |
      :root {
        --vp-home-hero-name-color: transparent;
        --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #bd34fe 30%, #41d1ff);
        -webkit-background-clip: text;
        -webkit-text-fill-color: var(--vp-home-hero-name-color);
      }
      .hero-container {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
      .hero-svg {
        width: 300px; /* Adjust the size as needed */
        transition: transform 0.3s ease-in-out;
      }
      .hero-svg:hover {
        transform: scale(1.1); /* Makes the SVG slightly larger on hover */
      }
---
