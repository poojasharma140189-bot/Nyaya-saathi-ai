const guidance = {
  work: {
    en: "Keep copies of your employment documents, payslips and relevant communications. Record dates and amounts. Identify the appropriate labour authority or grievance process before filing a complaint.",
    hi: "अपने नौकरी के दस्तावेज़, वेतन पर्चियाँ और संबंधित संदेश सुरक्षित रखें। तारीखों और रकम का रिकॉर्ड रखें। शिकायत करने से पहले सही श्रम प्राधिकरण और प्रक्रिया की पुष्टि करें।",
    mr: "नोकरीची कागदपत्रे, वेतन पावत्या आणि संबंधित संदेश जतन करा. तारखा व रकमेची नोंद ठेवा. तक्रार करण्यापूर्वी योग्य कामगार प्राधिकरण आणि प्रक्रिया तपासा."
  },
  women: {
    en: "Your options depend on your circumstances. Consider contacting a qualified lawyer or appropriate support organisation. If you are in immediate danger, contact emergency services.",
    hi: "आपके विकल्प परिस्थिति पर निर्भर करते हैं। योग्य वकील या सहायता संस्था से संपर्क करें। तत्काल खतरे में आपातकालीन सेवाओं से संपर्क करें।",
    mr: "तुमचे पर्याय परिस्थितीवर अवलंबून आहेत. पात्र वकिलाशी किंवा योग्य मदत संस्थेशी संपर्क साधा. तातडीचा धोका असल्यास आपत्कालीन सेवांशी संपर्क साधा."
  },
  documents: {
    en: "Identify the document type, date and any deadlines. Keep the original safe. Do not ignore a legal notice. Consider asking a qualified advocate to review it.",
    hi: "दस्तावेज़ का प्रकार, तारीख और समय-सीमा पहचानें। मूल दस्तावेज़ सुरक्षित रखें। कानूनी नोटिस को नज़रअंदाज़ न करें और ज़रूरत पड़ने पर योग्य वकील से समीक्षा करवाएँ।",
    mr: "कागदपत्राचा प्रकार, तारीख आणि मुदत तपासा. मूळ कागदपत्र सुरक्षित ठेवा. कायदेशीर नोटीस दुर्लक्षित करू नका; आवश्यक असल्यास पात्र वकिलाकडून तपासून घ्या."
  },
  other: {
    en: "Write down the important facts and dates. Consult official legal resources or a qualified advocate to identify the appropriate next step.",
    hi: "महत्वपूर्ण तथ्य और तारीखें लिखें। सही अगला कदम जानने के लिए आधिकारिक कानूनी संसाधनों या योग्य वकील से सलाह लें।",
    mr: "महत्त्वाच्या घटना आणि तारखा लिहून ठेवा. योग्य पुढील पाऊल ठरवण्यासाठी अधिकृत कायदेशीर स्रोत किंवा पात्र वकिलाची मदत घ्या."
  }
};

const disclaimers = {
  en: "This is general information, not personalised legal advice. Your question is not being sent to an AI service.",
  hi: "यह सामान्य जानकारी है, व्यक्तिगत कानूनी सलाह नहीं। आपका प्रश्न किसी AI सेवा को नहीं भेजा जा रहा है।",
  mr: "ही सामान्य माहिती आहे; वैयक्तिक कायदेशीर सल्ला नाही. तुमचा प्रश्न कोणत्याही AI सेवेकडे पाठवला जात नाही."
};

const form = document.getElementById("legalForm");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const language = document.getElementById("language").value;
  const category = document.getElementById("category").value;
  const question = document.getElementById("question").value.trim();
  const result = document.getElementById("result");
  const answer = document.getElementById("answer");
  const disclaimer = document.getElementById("disclaimer");

  if (!question) {
    document.getElementById("question").focus();
    return;
  }

  answer.textContent = guidance[category][language];
  disclaimer.textContent = disclaimers[language];
  result.hidden = false;
  result.scrollIntoView({ behavior: "smooth", block: "nearest" });
});

const propertyDocuments = {
  resale: [
    "Seller's identity documents and proof of ownership; if represented, valid authority such as a power of attorney.",
    "Title deeds and prior conveyance documents showing the chain of ownership; have a lawyer verify the chain against local records.",
    "A current encumbrance search and checks for mortgages, liens, court disputes, acquisition notices or other claims; obtain lender release documents if a loan is being repaid.",
    "Approved building or layout plans and applicable completion or occupancy certificate; check for unauthorised alterations with the local authority.",
    "Latest property-tax receipts, utility bills and, for a society property, maintenance no-dues confirmation and transfer requirements.",
    "Draft sale agreement and sale deed identifying the parties, exact property, price, payment terms and possession date."
  ],
  builder: [
    "Builder's identity and authority to sell, plus documents showing the builder's title or development rights over the land.",
    "Project registration and disclosures on the applicable state RERA authority's website, where registration is required; verify the project and phase details.",
    "Sanctioned plans, land-use approvals and other applicable permissions from the local authority; ask which completion or occupancy approvals will be provided at handover.",
    "Draft allotment letter, agreement for sale and payment schedule; have an independent lawyer review the carpet area, total charges, possession date and delay or cancellation terms.",
    "The builder's written list of included specifications, facilities, parking and common areas, and details of applicable maintenance or association charges.",
    "If financing, your loan sanction and disbursement conditions; lender approval is not a substitute for independent title and approval checks."
  ]
};

const propertyType = document.getElementById("propertyType");
const propertyDocumentList = document.getElementById("propertyDocuments");

function renderPropertyDocuments() {
  propertyDocumentList.replaceChildren();

  propertyDocuments[propertyType.value].forEach((documentText, index) => {
    const item = document.createElement("li");
    const label = document.createElement("label");
    const checkbox = document.createElement("input");
    const text = document.createElement("span");

    checkbox.type = "checkbox";
    checkbox.id = `property-document-${index}`;
    text.textContent = documentText;
    label.htmlFor = checkbox.id;
    label.append(checkbox, text);
    item.append(label);
    propertyDocumentList.append(item);
  });
}

propertyType.addEventListener("change", renderPropertyDocuments);
renderPropertyDocuments();

const lawyerStorageKey = "nyaya-saathi-lawyer-directory-demo";
const lawyerDirectory = document.getElementById("lawyerDirectory");
const lawyerForm = document.getElementById("lawyerForm");
const lawyerStatus = document.getElementById("lawyerStatus");
const lawyerAreaFilter = document.getElementById("lawyerAreaFilter");
const lawyerCityFilter = document.getElementById("lawyerCityFilter");
const consultationPanel = document.getElementById("consultationPanel");
const consultationForm = document.getElementById("consultationForm");
let lawyerProfiles = [];
let consultationRequests = [];
let storageAvailable = true;

function setLawyerStatus(message) {
  lawyerStatus.textContent = message;
}

function loadLawyerData() {
  try {
    const savedData = localStorage.getItem(lawyerStorageKey);
    if (!savedData) {
      return;
    }

    const parsedData = JSON.parse(savedData);
    if (!parsedData || !Array.isArray(parsedData.profiles) || !Array.isArray(parsedData.requests)) {
      throw new Error("Saved directory data has an invalid format.");
    }
    lawyerProfiles = parsedData.profiles;
    consultationRequests = parsedData.requests;
  } catch (error) {
    storageAvailable = false;
    console.error("Could not load the local lawyer directory demo.", error);
    setLawyerStatus("Saved demo data could not be loaded. You can continue for this page session, but changes may not be saved.");
  }
}

function saveLawyerData() {
  if (!storageAvailable) {
    setLawyerStatus("This change is available for this page session only; browser storage is unavailable.");
    return false;
  }

  try {
    localStorage.setItem(lawyerStorageKey, JSON.stringify({
      profiles: lawyerProfiles,
      requests: consultationRequests
    }));
    return true;
  } catch (error) {
    storageAvailable = false;
    console.error("Could not save the local lawyer directory demo.", error);
    setLawyerStatus("Browser storage is unavailable or full. This change may not persist after you leave this page.");
    return false;
  }
}

function addProfileText(parent, text) {
  const paragraph = document.createElement("p");
  paragraph.textContent = text;
  parent.append(paragraph);
}

function renderLawyerDirectory() {
  const areaFilter = lawyerAreaFilter.value;
  const cityFilter = lawyerCityFilter.value.trim().toLocaleLowerCase();
  const visibleProfiles = lawyerProfiles.filter((profile) => {
    const areaMatches = !areaFilter || profile.area === areaFilter;
    const cityMatches = !cityFilter || profile.city.toLocaleLowerCase().includes(cityFilter);
    return areaMatches && cityMatches;
  });

  lawyerDirectory.replaceChildren();
  if (visibleProfiles.length === 0) {
    const emptyMessage = document.createElement("p");
    emptyMessage.className = "guide-hint";
    emptyMessage.textContent = lawyerProfiles.length === 0
      ? "No profiles yet. Add a demo profile below to try the directory."
      : "No profiles match these filters.";
    lawyerDirectory.append(emptyMessage);
    return;
  }

  visibleProfiles.forEach((profile) => {
    const card = document.createElement("article");
    const heading = document.createElement("h4");
    const status = document.createElement("span");
    const connectButton = document.createElement("button");

    card.className = "lawyer-profile";
    heading.textContent = profile.name;
    status.className = "profile-status";
    status.textContent = "Demo · not verified";
    heading.append(" ", status);
    card.append(heading);
    addProfileText(card, `${profile.area} · ${profile.city}, ${profile.state}`);
    addProfileText(card, `Enrollment details supplied: ${profile.enrollment} (not verified)`);
    addProfileText(card, `${profile.experience} year(s) in practice · Languages: ${profile.languages}`);
    if (profile.fee !== "") {
      addProfileText(card, `Consultation fee entered: ₹${profile.fee}`);
    }
    connectButton.type = "button";
    connectButton.dataset.profileId = profile.id;
    connectButton.textContent = "Request consultation (demo)";
    card.append(connectButton);
    lawyerDirectory.append(card);
  });
}

lawyerForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!lawyerForm.reportValidity()) {
    return;
  }

  const fields = new FormData(lawyerForm);
  const profile = {
    id: `${Date.now()}-${Math.random().toString(36).slice(2)}`,
    name: fields.get("name").trim(),
    enrollment: fields.get("enrollment").trim(),
    state: fields.get("state").trim(),
    city: fields.get("city").trim(),
    area: fields.get("areas"),
    languages: fields.get("languages").trim(),
    experience: fields.get("experience"),
    fee: fields.get("fee")
  };

  lawyerProfiles.push(profile);
  saveLawyerData();
  renderLawyerDirectory();
  lawyerForm.reset();
  setLawyerStatus("Demo profile added in this browser only. It has not been verified or shared with other visitors.");
});

lawyerDirectory.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-profile-id]");
  if (!button) {
    return;
  }

  const profile = lawyerProfiles.find((item) => item.id === button.dataset.profileId);
  if (!profile) {
    setLawyerStatus("That demo profile is no longer available. Refresh the directory and try again.");
    return;
  }

  document.getElementById("consultationLawyerId").value = profile.id;
  document.getElementById("selectedLawyer").textContent = `Demo request for ${profile.name} · ${profile.area}, ${profile.city}`;
  consultationPanel.hidden = false;
  consultationPanel.scrollIntoView({ behavior: "smooth", block: "nearest" });
  document.getElementById("clientName").focus();
});

consultationForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!consultationForm.reportValidity()) {
    return;
  }

  const fields = new FormData(consultationForm);
  consultationRequests.push({
    id: `${Date.now()}-${Math.random().toString(36).slice(2)}`,
    lawyerId: fields.get("lawyerId"),
    name: fields.get("name").trim(),
    contact: fields.get("contact").trim(),
    message: fields.get("message").trim(),
    createdAt: new Date().toISOString()
  });

  saveLawyerData();
  consultationForm.reset();
  consultationPanel.hidden = true;
  setLawyerStatus("Demo request saved in this browser only. The lawyer has not received it. Do not wait for a reply; contact a lawyer directly through an independently verified channel.");
});

lawyerAreaFilter.addEventListener("change", renderLawyerDirectory);
lawyerCityFilter.addEventListener("input", renderLawyerDirectory);
loadLawyerData();
renderLawyerDirectory();
