function initAccordion(accordionElem){ 
    
  function handlePanelClick(event){
    showPanel(event.currentTarget);
  }
     
  function showPanel(panel){
    //Hide current one. First time it will be null. 
    var expandedPanel = accordionElem.querySelector(".active");
    if (expandedPanel){
      expandedPanel.classList.remove("active");
    }
    //Show new one
    panel.classList.add("active");
  }

  let panelArry = Array.from(accordionElem.querySelectorAll(".panel"));
  panelArry.forEach(panel => {
    panel.addEventListener("click", handlePanelClick);
  });
  //By Default Show first panel
  showPanel(panelArry[0]);
}

initAccordion(document.getElementById("accordion"));
