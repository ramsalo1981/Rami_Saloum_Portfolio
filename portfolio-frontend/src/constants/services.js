import React from "react"
import { FaCode, FaSketch, FaAndroid } from "react-icons/fa"
export default [
  {
    id: 1,
    icon: <FaCode className="service-icon" />,
    title: "Backend",
    text: `Designa och implementera skalbara, mycket tillgängliga mjukvarutjänster i .NET
    Utforma, utveckla och distribuera kontinuerligt backend-tjänster kontinuerligt med fokus på hög tillgänglighet, låg latens och skalbarhet Anpassningsförmåga.`,
  },
  {
    id: 2,
    icon: <FaSketch className="service-icon" />,
    title: " Frontend",
    text: `Som frontend-utvecklare bringar jag liv i Designer-konceptet genom en blandning av HTML, CSS och JavaScript.
     Optimera webbapplikationer för snabbhet och bygga ett bibliotek med återanvändbar kod..`,
  },
  {
    id: 3,
    icon: <FaAndroid className="service-icon" />,
    title: "Databasadministratör",
    text: `(SQL, MongoDb)
    Installera och uppgradera databasservern och / eller applikationsverktygen.
    Planerar och fördelar databassystemets fysiska krav, såsom minne, diskutrymme, nätverkskrav etc.
    Ändra databasstrukturen med hjälp av information från applikationsutvecklare.
    Skapa användarprofiler och säkerställa systemsäkerhet genom noggrann fördelning av användarbehörigheter.`,
  },
]
