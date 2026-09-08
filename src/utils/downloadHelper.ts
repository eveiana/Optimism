/**
 * Utility to generate and trigger instant browser downloads for book previews and companions.
 */

export function triggerInstantDownload(fileName: string, title: string, format: string) {
  const fileExtension = fileName.split('.').pop()?.toLowerCase() || 'txt';
  
  let mimeType = 'text/plain';
  let content = '';

  if (fileExtension === 'pdf' || format === 'PDF') {
    mimeType = 'application/pdf';
  } else if (fileExtension === 'epub' || format === 'EPUB') {
    mimeType = 'application/epub+zip';
  } else if (fileExtension === 'mobi' || format === 'MOBI') {
    mimeType = 'application/x-mobipocket-ebook';
  } else if (fileExtension === 'mp3' || format === 'AUDIO') {
    mimeType = 'audio/mpeg';
  }

  // Create formatted document content for the reader
  const sampleDocumentText = `
================================================================================
OPTIMISTIC AFRICA: AFRICA'S STORY IS CHANGING. THE DATA AGREES.
A book by Moky Makura & Dr Anand Kulkarni | Edited by Dianna Games
In partnership with Africa No Filter (ANF) & The Centre for Optimism (Australia)
================================================================================

DOCUMENT: ${title.toUpperCase()}
FORMAT: ${format}
OFFICIAL WEBSITE: https://optimisticafrica.org

--------------------------------------------------------------------------------
TABLE OF CONTENTS & EXECUTIVE OVERVIEW
--------------------------------------------------------------------------------
1. THE $4.2 BILLION PERCEPTION PENALTY
   International risk ratings and negative media bias cost African sovereign
   borrowers over $4.2B in inflated interest costs annually — capital that
   could otherwise construct 1,200 hospitals or fund 18,000 public schools.

2. THE FUNNEL OF OPTIMISM ARCHITECTURE
   - Tier 1: Foundations (Peace, Governance, Solidarity)
   - Tier 2: Capabilities (Technology, Youth Demographics, Enterprise, Creative Cities)
   - Tier 3: Outcomes (GDP Growth, Historic Poverty Reductions, Compounding Returns)

3. CHAPTER 1: PEACE — MORE PEACEFUL THAN YOU'D GUESS
   - 21 African nations rank inside the Global Top 100 most peaceful.
   - Mauritius (#28) outranks the UK (#34), France (#66), and the USA (#134).
   - Ghana (#55) and Sierra Leone (#66) demonstrate sustained inter-ethnic harmony.

4. CHAPTER 3: SOLIDARITY — THE $104 BILLION LIFELINE
   - Remittances from the African diaspora reached $104 Billion in 2023, surpassing
     all official development assistance (aid) and foreign direct investment combined.
   - The mutual aid networks (Harambee in Kenya, Susu in West Africa, Stokvels in SA)
     form the world's most resilient social safety nets.

5. CHAPTER 4: TECHNOLOGY & DIGITAL LEAPFROGGING
   - Over 700 active tech hubs operating across Cairo, Lagos, Nairobi, Kigali & Cape Town.
   - Sub-Saharan Africa accounts for nearly 70% of the world's mobile money transaction value.

6. CHAPTER 10: ECONOMIC OUTPERFORMANCE
   - Senegal (+8.8%), Rwanda (+7.2%), and Ivory Coast (+6.6%) are consistently
     among the world's top 10 fastest-expanding economies.
   - Morocco reduced extreme poverty from 15.3% (2000) down to under 0.8% (2022).

--------------------------------------------------------------------------------
ABOUT THE AUTHORS & INSTITUTIONAL PARTNERS
--------------------------------------------------------------------------------
- Moky Makura is the Executive Director of Africa No Filter (https://africanofilter.org),
  a donor collaborative dedicated to narrative change and empowering authentic African voices.
- Dr Anand Kulkarni is a Chief Economist, Associate Professor, and Senior Fellow at
  the Centre for Optimism in Melbourne, Australia (https://www.centreforoptimism.com).
- Edited by Dianna Games, Chief Executive of Africa @ Work.

================================================================================
© 2025 Optimistic Africa. All rights reserved.
Thank you for downloading and sharing the empirical truth of Africa's progress!
================================================================================
`;

  // Create blob and trigger download
  const blob = new Blob([sampleDocumentText], { type: 'text/markdown;charset=utf-8' });
  const downloadUrl = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = downloadUrl;
  link.download = fileName.endsWith('.pdf') ? fileName.replace('.pdf', '-Briefing-Summary.txt') : `${fileName}.txt`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(downloadUrl);
}
