function getSiteVisitationStatus() {
  return localStorage.getItem("PlumbersReceptionVisitorSts")||false;
};

function noteSiteVisitation(){
  localStorage.setItem("PlumbersReceptionVisitorSts", true);
  return null
};

export { getSiteVisitationStatus, noteSiteVisitation};