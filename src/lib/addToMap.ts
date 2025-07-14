const addAllCountriesToMap = () => {
  const countriesMeta = new Map<string, { name: string; iso3: string }>();
  countriesMeta.clear();

  // Add all countries with their names and ISO3 codes (This helps maintain O(1) complexity for build time)
  countriesMeta.set("AF", { name: "Afghanistan", iso3: "AFG" });
  countriesMeta.set("AX", { name: "Aland Islands", iso3: "ALA" });
  countriesMeta.set("AL", { name: "Albania", iso3: "ALB" });
  countriesMeta.set("DZ", { name: "Algeria", iso3: "DZA" });
  countriesMeta.set("AS", { name: "American Samoa", iso3: "ASM" });
  countriesMeta.set("AD", { name: "Andorra", iso3: "AND" });
  countriesMeta.set("AO", { name: "Angola", iso3: "AGO" });
  countriesMeta.set("AI", { name: "Anguilla", iso3: "AIA" });
  countriesMeta.set("AQ", { name: "Antarctica", iso3: "ATA" });
  countriesMeta.set("AG", { name: "Antigua and Barbuda", iso3: "ATG" });
  countriesMeta.set("AR", { name: "Argentina", iso3: "ARG" });
  countriesMeta.set("AM", { name: "Armenia", iso3: "ARM" });
  countriesMeta.set("AW", { name: "Aruba", iso3: "ABW" });
  countriesMeta.set("AU", { name: "Australia", iso3: "AUS" });
  countriesMeta.set("AT", { name: "Austria", iso3: "AUT" });
  countriesMeta.set("AZ", { name: "Azerbaijan", iso3: "AZE" });
  countriesMeta.set("BH", { name: "Bahrain", iso3: "BHR" });
  countriesMeta.set("BD", { name: "Bangladesh", iso3: "BGD" });
  countriesMeta.set("BB", { name: "Barbados", iso3: "BRB" });
  countriesMeta.set("BY", { name: "Belarus", iso3: "BLR" });
  countriesMeta.set("BE", { name: "Belgium", iso3: "BEL" });
  countriesMeta.set("BZ", { name: "Belize", iso3: "BLZ" });
  countriesMeta.set("BJ", { name: "Benin", iso3: "BEN" });
  countriesMeta.set("BM", { name: "Bermuda", iso3: "BMU" });
  countriesMeta.set("BT", { name: "Bhutan", iso3: "BTN" });
  countriesMeta.set("BO", { name: "Bolivia", iso3: "BOL" });
  countriesMeta.set("BQ", {
    name: "Bonaire, Sint Eustatius and Saba",
    iso3: "BES",
  });
  countriesMeta.set("BA", { name: "Bosnia and Herzegovina", iso3: "BIH" });
  countriesMeta.set("BW", { name: "Botswana", iso3: "BWA" });
  countriesMeta.set("BV", { name: "Bouvet Island", iso3: "BVT" });
  countriesMeta.set("BR", { name: "Brazil", iso3: "BRA" });
  countriesMeta.set("IO", {
    name: "British Indian Ocean Territory",
    iso3: "IOT",
  });
  countriesMeta.set("BN", { name: "Brunei", iso3: "BRN" });
  countriesMeta.set("BG", { name: "Bulgaria", iso3: "BGR" });
  countriesMeta.set("BF", { name: "Burkina Faso", iso3: "BFA" });
  countriesMeta.set("BI", { name: "Burundi", iso3: "BDI" });
  countriesMeta.set("KH", { name: "Cambodia", iso3: "KHM" });
  countriesMeta.set("CM", { name: "Cameroon", iso3: "CMR" });
  countriesMeta.set("CA", { name: "Canada", iso3: "CAN" });
  countriesMeta.set("CV", { name: "Cape Verde", iso3: "CPV" });
  countriesMeta.set("KY", { name: "Cayman Islands", iso3: "CYM" });
  countriesMeta.set("CF", { name: "Central African Republic", iso3: "CAF" });
  countriesMeta.set("TD", { name: "Chad", iso3: "TCD" });
  countriesMeta.set("CL", { name: "Chile", iso3: "CHL" });
  countriesMeta.set("CN", { name: "China", iso3: "CHN" });
  countriesMeta.set("CX", { name: "Christmas Island", iso3: "CXR" });
  countriesMeta.set("CC", { name: "Cocos (Keeling) Islands", iso3: "CCK" });
  countriesMeta.set("CO", { name: "Colombia", iso3: "COL" });
  countriesMeta.set("KM", { name: "Comoros", iso3: "COM" });
  countriesMeta.set("CG", { name: "Congo", iso3: "COG" });
  countriesMeta.set("CK", { name: "Cook Islands", iso3: "COK" });
  countriesMeta.set("CR", { name: "Costa Rica", iso3: "CRI" });
  countriesMeta.set("CI", { name: "Cote D'Ivoire (Ivory Coast)", iso3: "CIV" });
  countriesMeta.set("HR", { name: "Croatia", iso3: "HRV" });
  countriesMeta.set("CU", { name: "Cuba", iso3: "CUB" });
  countriesMeta.set("CW", { name: "Curaçao", iso3: "CUW" });
  countriesMeta.set("CY", { name: "Cyprus", iso3: "CYP" });
  countriesMeta.set("CZ", { name: "Czech Republic", iso3: "CZE" });
  countriesMeta.set("CD", {
    name: "Democratic Republic of the Congo",
    iso3: "COD",
  });
  countriesMeta.set("DK", { name: "Denmark", iso3: "DNK" });
  countriesMeta.set("DJ", { name: "Djibouti", iso3: "DJI" });
  countriesMeta.set("DM", { name: "Dominica", iso3: "DMA" });
  countriesMeta.set("DO", { name: "Dominican Republic", iso3: "DOM" });
  countriesMeta.set("EC", { name: "Ecuador", iso3: "ECU" });
  countriesMeta.set("EG", { name: "Egypt", iso3: "EGY" });
  countriesMeta.set("SV", { name: "El Salvador", iso3: "SLV" });
  countriesMeta.set("GQ", { name: "Equatorial Guinea", iso3: "GNQ" });
  countriesMeta.set("ER", { name: "Eritrea", iso3: "ERI" });
  countriesMeta.set("EE", { name: "Estonia", iso3: "EST" });
  countriesMeta.set("SZ", { name: "Eswatini", iso3: "SWZ" });
  countriesMeta.set("ET", { name: "Ethiopia", iso3: "ETH" });
  countriesMeta.set("FK", { name: "Falkland Islands", iso3: "FLK" });
  countriesMeta.set("FO", { name: "Faroe Islands", iso3: "FRO" });
  countriesMeta.set("FJ", { name: "Fiji Islands", iso3: "FJI" });
  countriesMeta.set("FI", { name: "Finland", iso3: "FIN" });
  countriesMeta.set("FR", { name: "France", iso3: "FRA" });
  countriesMeta.set("GF", { name: "French Guiana", iso3: "GUF" });
  countriesMeta.set("PF", { name: "French Polynesia", iso3: "PYF" });
  countriesMeta.set("TF", { name: "French Southern Territories", iso3: "ATF" });
  countriesMeta.set("GA", { name: "Gabon", iso3: "GAB" });
  countriesMeta.set("GE", { name: "Georgia", iso3: "GEO" });
  countriesMeta.set("DE", { name: "Germany", iso3: "DEU" });
  countriesMeta.set("GH", { name: "Ghana", iso3: "GHA" });
  countriesMeta.set("GI", { name: "Gibraltar", iso3: "GIB" });
  countriesMeta.set("GR", { name: "Greece", iso3: "GRC" });
  countriesMeta.set("GL", { name: "Greenland", iso3: "GRL" });
  countriesMeta.set("GD", { name: "Grenada", iso3: "GRD" });
  countriesMeta.set("GP", { name: "Guadeloupe", iso3: "GLP" });
  countriesMeta.set("GU", { name: "Guam", iso3: "GUM" });
  countriesMeta.set("GT", { name: "Guatemala", iso3: "GTM" });
  countriesMeta.set("GG", { name: "Guernsey", iso3: "GGY" });
  countriesMeta.set("GN", { name: "Guinea", iso3: "GIN" });
  countriesMeta.set("GW", { name: "Guinea-Bissau", iso3: "GNB" });
  countriesMeta.set("GY", { name: "Guyana", iso3: "GUY" });
  countriesMeta.set("HT", { name: "Haiti", iso3: "HTI" });
  countriesMeta.set("HM", {
    name: "Heard Island and McDonald Islands",
    iso3: "HMD",
  });
  countriesMeta.set("HN", { name: "Honduras", iso3: "HND" });
  countriesMeta.set("HK", { name: "Hong Kong S.A.R.", iso3: "HKG" });
  countriesMeta.set("HU", { name: "Hungary", iso3: "HUN" });
  countriesMeta.set("IS", { name: "Iceland", iso3: "ISL" });
  countriesMeta.set("IN", { name: "India", iso3: "IND" });
  countriesMeta.set("ID", { name: "Indonesia", iso3: "IDN" });
  countriesMeta.set("IR", { name: "Iran", iso3: "IRN" });
  countriesMeta.set("IQ", { name: "Iraq", iso3: "IRQ" });
  countriesMeta.set("IE", { name: "Ireland", iso3: "IRL" });
  countriesMeta.set("IL", { name: "Israel", iso3: "ISR" });
  countriesMeta.set("IT", { name: "Italy", iso3: "ITA" });
  countriesMeta.set("JM", { name: "Jamaica", iso3: "JAM" });
  countriesMeta.set("JP", { name: "Japan", iso3: "JPN" });
  countriesMeta.set("JE", { name: "Jersey", iso3: "JEY" });
  countriesMeta.set("JO", { name: "Jordan", iso3: "JOR" });
  countriesMeta.set("KZ", { name: "Kazakhstan", iso3: "KAZ" });
  countriesMeta.set("KE", { name: "Kenya", iso3: "KEN" });
  countriesMeta.set("KI", { name: "Kiribati", iso3: "KIR" });
  countriesMeta.set("XK", { name: "Kosovo", iso3: "XKX" });
  countriesMeta.set("KW", { name: "Kuwait", iso3: "KWT" });
  countriesMeta.set("KG", { name: "Kyrgyzstan", iso3: "KGZ" });
  countriesMeta.set("LA", { name: "Laos", iso3: "LAO" });
  countriesMeta.set("LV", { name: "Latvia", iso3: "LVA" });
  countriesMeta.set("LB", { name: "Lebanon", iso3: "LBN" });
  countriesMeta.set("LS", { name: "Lesotho", iso3: "LSO" });
  countriesMeta.set("LR", { name: "Liberia", iso3: "LBR" });
  countriesMeta.set("LY", { name: "Libya", iso3: "LBY" });
  countriesMeta.set("LI", { name: "Liechtenstein", iso3: "LIE" });
  countriesMeta.set("LT", { name: "Lithuania", iso3: "LTU" });
  countriesMeta.set("LU", { name: "Luxembourg", iso3: "LUX" });
  countriesMeta.set("MO", { name: "Macau S.A.R.", iso3: "MAC" });
  countriesMeta.set("MG", { name: "Madagascar", iso3: "MDG" });
  countriesMeta.set("MW", { name: "Malawi", iso3: "MWI" });
  countriesMeta.set("MY", { name: "Malaysia", iso3: "MYS" });
  countriesMeta.set("MV", { name: "Maldives", iso3: "MDV" });
  countriesMeta.set("ML", { name: "Mali", iso3: "MLI" });
  countriesMeta.set("MT", { name: "Malta", iso3: "MLT" });
  countriesMeta.set("IM", { name: "Man (Isle of)", iso3: "IMN" });
  countriesMeta.set("MH", { name: "Marshall Islands", iso3: "MHL" });
  countriesMeta.set("MQ", { name: "Martinique", iso3: "MTQ" });
  countriesMeta.set("MR", { name: "Mauritania", iso3: "MRT" });
  countriesMeta.set("MU", { name: "Mauritius", iso3: "MUS" });
  countriesMeta.set("YT", { name: "Mayotte", iso3: "MYT" });
  countriesMeta.set("MX", { name: "Mexico", iso3: "MEX" });
  countriesMeta.set("FM", { name: "Micronesia", iso3: "FSM" });
  countriesMeta.set("MD", { name: "Moldova", iso3: "MDA" });
  countriesMeta.set("MC", { name: "Monaco", iso3: "MCO" });
  countriesMeta.set("MN", { name: "Mongolia", iso3: "MNG" });
  countriesMeta.set("ME", { name: "Montenegro", iso3: "MNE" });
  countriesMeta.set("MS", { name: "Montserrat", iso3: "MSR" });
  countriesMeta.set("MA", { name: "Morocco", iso3: "MAR" });
  countriesMeta.set("MZ", { name: "Mozambique", iso3: "MOZ" });
  countriesMeta.set("MM", { name: "Myanmar", iso3: "MMR" });
  countriesMeta.set("NA", { name: "Namibia", iso3: "NAM" });
  countriesMeta.set("NR", { name: "Nauru", iso3: "NRU" });
  countriesMeta.set("NP", { name: "Nepal", iso3: "NPL" });
  countriesMeta.set("NL", { name: "Netherlands", iso3: "NLD" });
  countriesMeta.set("NC", { name: "New Caledonia", iso3: "NCL" });
  countriesMeta.set("NZ", { name: "New Zealand", iso3: "NZL" });
  countriesMeta.set("NI", { name: "Nicaragua", iso3: "NIC" });
  countriesMeta.set("NE", { name: "Niger", iso3: "NER" });
  countriesMeta.set("NG", { name: "Nigeria", iso3: "NGA" });
  countriesMeta.set("NU", { name: "Niue", iso3: "NIU" });
  countriesMeta.set("NF", { name: "Norfolk Island", iso3: "NFK" });
  countriesMeta.set("KP", { name: "North Korea", iso3: "PRK" });
  countriesMeta.set("MK", { name: "North Macedonia", iso3: "MKD" });
  countriesMeta.set("MP", { name: "Northern Mariana Islands", iso3: "MNP" });
  countriesMeta.set("NO", { name: "Norway", iso3: "NOR" });
  countriesMeta.set("OM", { name: "Oman", iso3: "OMN" });
  countriesMeta.set("PK", { name: "Pakistan", iso3: "PAK" });
  countriesMeta.set("PW", { name: "Palau", iso3: "PLW" });
  countriesMeta.set("PS", {
    name: "Palestinian Territory Occupied",
    iso3: "PSE",
  });
  countriesMeta.set("PA", { name: "Panama", iso3: "PAN" });
  countriesMeta.set("PG", { name: "Papua New Guinea", iso3: "PNG" });
  countriesMeta.set("PY", { name: "Paraguay", iso3: "PRY" });
  countriesMeta.set("PE", { name: "Peru", iso3: "PER" });
  countriesMeta.set("PH", { name: "Philippines", iso3: "PHL" });
  countriesMeta.set("PN", { name: "Pitcairn Island", iso3: "PCN" });
  countriesMeta.set("PL", { name: "Poland", iso3: "POL" });
  countriesMeta.set("PT", { name: "Portugal", iso3: "PRT" });
  countriesMeta.set("PR", { name: "Puerto Rico", iso3: "PRI" });
  countriesMeta.set("QA", { name: "Qatar", iso3: "QAT" });
  countriesMeta.set("RE", { name: "Reunion", iso3: "REU" });
  countriesMeta.set("RO", { name: "Romania", iso3: "ROU" });
  countriesMeta.set("RU", { name: "Russia", iso3: "RUS" });
  countriesMeta.set("RW", { name: "Rwanda", iso3: "RWA" });
  countriesMeta.set("SH", { name: "Saint Helena", iso3: "SHN" });
  countriesMeta.set("KN", { name: "Saint Kitts and Nevis", iso3: "KNA" });
  countriesMeta.set("LC", { name: "Saint Lucia", iso3: "LCA" });
  countriesMeta.set("PM", { name: "Saint Pierre and Miquelon", iso3: "SPM" });
  countriesMeta.set("VC", {
    name: "Saint Vincent and the Grenadines",
    iso3: "VCT",
  });
  countriesMeta.set("BL", { name: "Saint-Barthelemy", iso3: "BLM" });
  countriesMeta.set("MF", { name: "Saint-Martin (French part)", iso3: "MAF" });
  countriesMeta.set("WS", { name: "Samoa", iso3: "WSM" });
  countriesMeta.set("SM", { name: "San Marino", iso3: "SMR" });
  countriesMeta.set("ST", { name: "Sao Tome and Principe", iso3: "STP" });
  countriesMeta.set("SA", { name: "Saudi Arabia", iso3: "SAU" });
  countriesMeta.set("SN", { name: "Senegal", iso3: "SEN" });
  countriesMeta.set("RS", { name: "Serbia", iso3: "SRB" });
  countriesMeta.set("SC", { name: "Seychelles", iso3: "SYC" });
  countriesMeta.set("SL", { name: "Sierra Leone", iso3: "SLE" });
  countriesMeta.set("SG", { name: "Singapore", iso3: "SGP" });
  countriesMeta.set("SX", { name: "Sint Maarten (Dutch part)", iso3: "SXM" });
  countriesMeta.set("SK", { name: "Slovakia", iso3: "SVK" });
  countriesMeta.set("SI", { name: "Slovenia", iso3: "SVN" });
  countriesMeta.set("SB", { name: "Solomon Islands", iso3: "SLB" });
  countriesMeta.set("SO", { name: "Somalia", iso3: "SOM" });
  countriesMeta.set("ZA", { name: "South Africa", iso3: "ZAF" });
  countriesMeta.set("GS", { name: "South Georgia", iso3: "SGS" });
  countriesMeta.set("KR", { name: "South Korea", iso3: "KOR" });
  countriesMeta.set("SS", { name: "South Sudan", iso3: "SSD" });
  countriesMeta.set("ES", { name: "Spain", iso3: "ESP" });
  countriesMeta.set("LK", { name: "Sri Lanka", iso3: "LKA" });
  countriesMeta.set("SD", { name: "Sudan", iso3: "SDN" });
  countriesMeta.set("SR", { name: "Suriname", iso3: "SUR" });
  countriesMeta.set("SJ", {
    name: "Svalbard and Jan Mayen Islands",
    iso3: "SJM",
  });
  countriesMeta.set("SE", { name: "Sweden", iso3: "SWE" });
  countriesMeta.set("CH", { name: "Switzerland", iso3: "CHE" });
  countriesMeta.set("SY", { name: "Syria", iso3: "SYR" });
  countriesMeta.set("TW", { name: "Taiwan", iso3: "TWN" });
  countriesMeta.set("TJ", { name: "Tajikistan", iso3: "TJK" });
  countriesMeta.set("TZ", { name: "Tanzania", iso3: "TZA" });
  countriesMeta.set("TH", { name: "Thailand", iso3: "THA" });
  countriesMeta.set("BS", { name: "The Bahamas", iso3: "BHS" });
  countriesMeta.set("GM", { name: "The Gambia ", iso3: "GMB" });
  countriesMeta.set("TL", { name: "Timor-Leste", iso3: "TLS" });
  countriesMeta.set("TG", { name: "Togo", iso3: "TGO" });
  countriesMeta.set("TK", { name: "Tokelau", iso3: "TKL" });
  countriesMeta.set("TO", { name: "Tonga", iso3: "TON" });
  countriesMeta.set("TT", { name: "Trinidad and Tobago", iso3: "TTO" });
  countriesMeta.set("TN", { name: "Tunisia", iso3: "TUN" });
  countriesMeta.set("TR", { name: "Turkey", iso3: "TUR" });
  countriesMeta.set("TM", { name: "Turkmenistan", iso3: "TKM" });
  countriesMeta.set("TC", { name: "Turks and Caicos Islands", iso3: "TCA" });
  countriesMeta.set("TV", { name: "Tuvalu", iso3: "TUV" });
  countriesMeta.set("UG", { name: "Uganda", iso3: "UGA" });
  countriesMeta.set("UA", { name: "Ukraine", iso3: "UKR" });
  countriesMeta.set("AE", { name: "United Arab Emirates", iso3: "ARE" });
  countriesMeta.set("GB", { name: "United Kingdom", iso3: "GBR" });
  countriesMeta.set("US", { name: "United States", iso3: "USA" });
  countriesMeta.set("UM", {
    name: "United States Minor Outlying Islands",
    iso3: "UMI",
  });
  countriesMeta.set("UY", { name: "Uruguay", iso3: "URY" });
  countriesMeta.set("UZ", { name: "Uzbekistan", iso3: "UZB" });
  countriesMeta.set("VU", { name: "Vanuatu", iso3: "VUT" });
  countriesMeta.set("VA", {
    name: "Vatican City State (Holy See)",
    iso3: "VAT",
  });
  countriesMeta.set("VE", { name: "Venezuela", iso3: "VEN" });
  countriesMeta.set("VN", { name: "Vietnam", iso3: "VNM" });
  countriesMeta.set("VG", { name: "Virgin Islands (British)", iso3: "VGB" });
  countriesMeta.set("VI", { name: "Virgin Islands (US)", iso3: "VIR" });
  countriesMeta.set("WF", { name: "Wallis and Futuna Islands", iso3: "WLF" });
  countriesMeta.set("EH", { name: "Western Sahara", iso3: "ESH" });
  countriesMeta.set("YE", { name: "Yemen", iso3: "YEM" });
  countriesMeta.set("ZM", { name: "Zambia", iso3: "ZMB" });
  countriesMeta.set("ZW", { name: "Zimbabwe", iso3: "ZWE" });

  return countriesMeta;
};

export default addAllCountriesToMap;
