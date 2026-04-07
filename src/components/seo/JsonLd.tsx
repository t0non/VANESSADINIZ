"use client";

export function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Physician",
    "name": "Dra. Vanessa Diniz Nogueira",
    "url": "https://dravanessadiniz.com.br", // URL base (pode ser ajustado se o cliente fornecer)
    "logo": "https://dravanessadiniz.com.br/areas/Logo_Vanessa.png", // Substituído pela logo real
    "image": "/areas/Sobre.png",
    "description": "Médica Geriatra especializada em cuidado paliativo e envelhecimento ativo em Belo Horizonte. CRM-MG 78668.",
    "medicalSpecialty": "Geriatrics",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Rua Jaceguai, 208 – Sala 1408",
      "addressLocality": "Belo Horizonte",
      "addressRegion": "MG",
      "postalCode": "30411-040",
      "addressCountry": "BR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -19.9245, // Exemplo Prado BH
      "longitude": -43.9352
    },
    "telephone": "+553131576255",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday"
        ],
        "opens": "08:00",
        "closes": "18:00"
      }
    ],
    "sameAs": [
      "https://instagram.com/dravanessadinizgeriatra"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
