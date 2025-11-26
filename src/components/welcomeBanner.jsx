import { useEffect, useState } from "preact/hooks";
import { getSiteVisitationStatus, noteSiteVisitation } from "../scripts/manage_visitors";
import { BRAND_NAME } from '../consts';

// Check & update User's Visitation status.
export default function WelcomeVisitorHero() {
  const [visitation_status, setStatus] = useState(false);  
  useEffect(()=>{setStatus(getSiteVisitationStatus())}, [])
  const visitation_status_response = (
    visitation_status ? (
      <p>Welcome Back!</p>
    ):(
      <p>Welcome to {BRAND_NAME}!</p>
    )
  );
  // Update visitation status.
  useEffect(()=>{noteSiteVisitation()}, []);
  return (
    <div class="container">
      <h1 class="display-4 fw-light">{ visitation_status_response }</h1>
      <h2 class="fw-bold mb-3">Turning Ideas into Digital Impact</h2>
      <p class="text-muted mb-0"
			>Each project represents a challenge turned into a working solution.</p>
    </div>
  );
};