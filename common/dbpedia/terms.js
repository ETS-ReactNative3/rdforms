define({
 "templates": [
  {
   "id": "dbpo:distanceLaps",
   "property": "http://dbpedia.org/ontology/distanceLaps",
   "label": {
    "en": "distance laps"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#nonNegativeInteger",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:speaker",
   "property": "http://dbpedia.org/ontology/speaker",
   "label": {
    "en": "speaker"
   },
   "description": {
    "en": "number of office holder"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#integer",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:ons",
   "property": "http://dbpedia.org/ontology/ons",
   "label": {
    "en": "ons"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#nonNegativeInteger",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:cityType",
   "property": "http://dbpedia.org/ontology/cityType",
   "label": {
    "en": "city type",
    "nl": "type stad",
    "el": "τύπος"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:ranking",
   "property": "http://dbpedia.org/ontology/ranking",
   "label": {
    "en": "ranking"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#positiveInteger",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:blackLongDistancePisteNumber",
   "property": "http://dbpedia.org/ontology/blackLongDistancePisteNumber",
   "label": {
    "en": "long distance piste number"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#nonNegativeInteger",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:yearOfElectrification",
   "property": "http://dbpedia.org/ontology/yearOfElectrification",
   "label": {
    "en": "year of electrification",
    "de": "Jahr der Elektrifizierung"
   },
   "description": {
    "en": "Year station was electrified, if not previously at date of opening."
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#gYear",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:lastSeason",
   "property": "http://dbpedia.org/ontology/lastSeason",
   "label": {
    "en": "last season",
    "el": "Προηγούμενη Περίοδος"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#date",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:minimumTemperature",
   "property": "http://dbpedia.org/ontology/minimumTemperature",
   "label": {
    "en": "minimum temperature (K)",
    "el": "ελάχιστη θερμοκρασία (K)"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#double",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:weddingParentsDate",
   "property": "http://dbpedia.org/ontology/weddingParentsDate",
   "label": {
    "en": "Parents Wedding Date",
    "de": "Hochzeitstag der Eltern",
    "pt": "data do casamento dos pais"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#date",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:dateAct",
   "property": "http://dbpedia.org/ontology/dateAct",
   "label": {
    "en": "date act",
    "el": "απόφαση_διάνοιξης"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#date",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:externalOrnament",
   "property": "http://dbpedia.org/ontology/externalOrnament",
   "label": {
    "en": "external ornament"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:minority",
   "property": "http://dbpedia.org/ontology/minority",
   "label": {
    "en": "minority of a settlement"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:reference",
   "property": "http://dbpedia.org/ontology/reference",
   "label": {
    "en": "reference"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:launch",
   "property": "http://dbpedia.org/ontology/launch",
   "label": {
    "en": "launch"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#date",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:otherServingLines",
   "property": "http://dbpedia.org/ontology/otherServingLines",
   "label": {
    "en": "other serving lines",
    "nl": "andere verbindingen",
    "de": "andere Verbindungen"
   },
   "description": {
    "en": "Connecting services that serve the station such as bus, etc."
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:bicycleInformation",
   "property": "http://dbpedia.org/ontology/bicycleInformation",
   "label": {
    "en": "bicycle information",
    "de": "Fahrradinformationen"
   },
   "description": {
    "en": "Information on station's bicycle facilities."
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:gridReference",
   "property": "http://dbpedia.org/ontology/gridReference",
   "label": {
    "en": "grid reference",
    "nl": "coördinaten"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:historicalRegion",
   "property": "http://dbpedia.org/ontology/historicalRegion",
   "label": {
    "en": "historical region"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:numberOfStaff",
   "property": "http://dbpedia.org/ontology/numberOfStaff",
   "label": {
    "en": "number of staff",
    "el": "αριθμός προσωπικού",
    "nl": "aantal medewerkers"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#nonNegativeInteger",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:originalName",
   "property": "http://dbpedia.org/ontology/originalName",
   "label": {
    "en": "original name",
    "nl": "oorspronkelijke naam"
   },
   "description": {
    "en": "The original name of the entity, e.g. film, settlement, etc."
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:formerCallsign",
   "property": "http://dbpedia.org/ontology/formerCallsign",
   "label": {
    "en": "former call sign"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:ccaState",
   "property": "http://dbpedia.org/ontology/ccaState",
   "label": {
    "en": "cca state"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:surfaceGravity",
   "property": "http://dbpedia.org/ontology/surfaceGravity",
   "label": {
    "en": "surface gravity (g)"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#double",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:gnisCode",
   "property": "http://dbpedia.org/ontology/gnisCode",
   "label": {
    "en": "gnis code"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:coordinates",
   "property": "http://dbpedia.org/ontology/coordinates",
   "label": {
    "en": "geographic coordinates"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:scottishName",
   "property": "http://dbpedia.org/ontology/scottishName",
   "label": {
    "en": "scottish name"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:loadLimit",
   "property": "http://dbpedia.org/ontology/loadLimit",
   "label": {
    "en": "load limit (g)",
    "de": "Belastungsgrenze (g)"
   },
   "description": {
    "en": "Load limit of the bridge."
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#double",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:schoolCode",
   "property": "http://dbpedia.org/ontology/schoolCode",
   "label": {
    "en": "school code"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:numberOfBombs",
   "property": "http://dbpedia.org/ontology/numberOfBombs",
   "label": {
    "en": "number of bombs",
    "el": "αριθμός των βομβών"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#nonNegativeInteger",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:theology",
   "property": "http://dbpedia.org/ontology/theology",
   "label": {
    "en": "Theology",
    "el": "Θεολογία"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:numberOfLocations",
   "property": "http://dbpedia.org/ontology/numberOfLocations",
   "label": {
    "en": "number of locations",
    "fr": "nombre de sites"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#nonNegativeInteger",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:serviceEndDate",
   "property": "http://dbpedia.org/ontology/serviceEndDate",
   "label": {
    "en": "service end date"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#date",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:digitalSubChannel",
   "property": "http://dbpedia.org/ontology/digitalSubChannel",
   "label": {
    "en": "digital sub channel"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:firstAirDate",
   "property": "http://dbpedia.org/ontology/firstAirDate",
   "label": {
    "en": "first air date",
    "de": "Sendebeginn"
   },
   "description": {
    "en": "The date on which regular broadcasts began."
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#date",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:maximumBoatLength",
   "property": "http://dbpedia.org/ontology/maximumBoatLength",
   "label": {
    "en": "maximum boat length (μ)",
    "el": "μέγιστο_μήκος_πλοίου (μ)"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#double",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:number",
   "property": "http://dbpedia.org/ontology/number",
   "label": {
    "en": "number",
    "nl": "nummer",
    "el": "αριθμός"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#integer",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:mass",
   "property": "http://dbpedia.org/ontology/mass",
   "label": {
    "en": "mass (g)",
    "el": "μάζα (g)"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#double",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:broadcastRepeater",
   "property": "http://dbpedia.org/ontology/broadcastRepeater",
   "label": {
    "en": "broadcast repeater",
    "el": "επαναληπτική αναμετάδοση"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:participant",
   "property": "http://dbpedia.org/ontology/participant",
   "label": {
    "en": "participant",
    "nl": "deelnemer",
    "de": "Teilnehmer"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:numberOfDistricts",
   "property": "http://dbpedia.org/ontology/numberOfDistricts",
   "label": {
    "en": "number of districts",
    "id": "jumlah kecamatan"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#nonNegativeInteger",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:localization",
   "property": "http://dbpedia.org/ontology/localization",
   "label": {
    "en": "localization of the island"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:subjectOfPlay",
   "property": "http://dbpedia.org/ontology/subjectOfPlay",
   "label": {
    "en": "subject of play"
   },
   "description": {
    "en": "The overall subject matter dealt with by the play."
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:observatory",
   "property": "http://dbpedia.org/ontology/observatory",
   "label": {
    "en": "observatory"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:historicalName",
   "property": "http://dbpedia.org/ontology/historicalName",
   "label": {
    "en": "historical name"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:duration",
   "property": "http://dbpedia.org/ontology/duration",
   "label": {
    "en": "duration (s)",
    "nl": "duur (s)"
   },
   "description": {
    "en": "The duration of the item (movie, audio recording, event, etc.) in ISO 8601 date format"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#double",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:icd9",
   "property": "http://dbpedia.org/ontology/icd9",
   "label": {
    "en": "ICD9",
    "nl": "ICD9"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:waistSize",
   "property": "http://dbpedia.org/ontology/waistSize",
   "label": {
    "en": "waist size (μ)",
    "de": "Taillenumfang (μ)",
    "ja": "ウエスト (μ)"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#double",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:codeBook",
   "property": "http://dbpedia.org/ontology/codeBook",
   "label": {
    "en": "code book",
    "nl": "wetboek"
   },
   "description": {
    "en": "code book or statute book referred to in this legal case"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:subtitle",
   "property": "http://dbpedia.org/ontology/subtitle",
   "label": {
    "el": "υπότιτλος",
    "en": "subtitle",
    "nl": "onderschrift",
    "pt": "legenda",
    "de": "Untertitel"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:dorlandsSuffix",
   "property": "http://dbpedia.org/ontology/dorlandsSuffix",
   "label": {
    "en": "Dorlands suffix"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:weight",
   "property": "http://dbpedia.org/ontology/weight",
   "label": {
    "el": "βάρος (g)",
    "fr": "poids (g)",
    "en": "weight (g)",
    "ja": "体重 (g)",
    "nl": "gewicht (g)",
    "pt": "peso (g)",
    "de": "Gewicht (g)"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#double",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:membership",
   "property": "http://dbpedia.org/ontology/membership",
   "label": {
    "en": "membership",
    "nl": "lidmaatschap"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:lastLaunchDate",
   "property": "http://dbpedia.org/ontology/lastLaunchDate",
   "label": {
    "en": "last launch date"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#date",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:flagLink",
   "property": "http://dbpedia.org/ontology/flagLink",
   "label": {
    "en": "flag Link"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:faaLocationIdentifier",
   "property": "http://dbpedia.org/ontology/faaLocationIdentifier",
   "label": {
    "en": "FAA Location Identifier"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:areaQuote",
   "property": "http://dbpedia.org/ontology/areaQuote",
   "label": {
    "en": "area quote"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:activeYearsEndYear",
   "property": "http://dbpedia.org/ontology/activeYearsEndYear",
   "label": {
    "en": "active years end year",
    "el": "ενεργά χρόνια τέλος του χρόνου",
    "nl": "actieve jaren eind jaar"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#gYear",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:bioclimate",
   "property": "http://dbpedia.org/ontology/bioclimate",
   "label": {
    "en": "bioclimate"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:isHandicappedAccessible",
   "property": "http://dbpedia.org/ontology/isHandicappedAccessible",
   "label": {
    "en": "is handicapped accessible",
    "de": "ist rollstuhlgerecht"
   },
   "description": {
    "en": "True if the station is handicapped accessible."
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#boolean",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:supplementalDraftYear",
   "property": "http://dbpedia.org/ontology/supplementalDraftYear",
   "label": {
    "en": "supplemental draft year"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#gYear",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:volcanicActivity",
   "property": "http://dbpedia.org/ontology/volcanicActivity",
   "label": {
    "en": "volcanic activity"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:collectivityMinority",
   "property": "http://dbpedia.org/ontology/collectivityMinority",
   "label": {
    "en": "collectivity minority of a settlement"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:failedLaunches",
   "property": "http://dbpedia.org/ontology/failedLaunches",
   "label": {
    "en": "failed launches"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#nonNegativeInteger",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:releaseDate",
   "property": "http://dbpedia.org/ontology/releaseDate",
   "label": {
    "en": "release date",
    "nl": "release datum",
    "el": "ημερομηνία κυκλοφορίας",
    "pl": "data wydania"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#date",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:militaryUnitSize",
   "property": "http://dbpedia.org/ontology/militaryUnitSize",
   "label": {
    "en": "military unit size"
   },
   "description": {
    "en": "the size of the military unit"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:fate",
   "property": "http://dbpedia.org/ontology/fate",
   "label": {
    "en": "fate"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:iobdbId",
   "property": "http://dbpedia.org/ontology/iobdbId",
   "label": {
    "en": "IOBDB ID"
   },
   "description": {
    "en": "Lortel Archives Internet Off-Broadway database \"show id\" from lortel.org."
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:codeMemorial",
   "property": "http://dbpedia.org/ontology/codeMemorial",
   "label": {
    "en": "memorial ID number",
    "nl": "code gedenkteken"
   },
   "description": {
    "en": "Identifier for monuments of the Memorial type",
    "nl": "Code oorlogsmonument of ander gedenkteken"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:usSales",
   "property": "http://dbpedia.org/ontology/usSales",
   "label": {
    "en": "US sales"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#nonNegativeInteger",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:subdivisions",
   "property": "http://dbpedia.org/ontology/subdivisions",
   "label": {
    "en": "subdivisions"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#nonNegativeInteger",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:orderInOffice",
   "property": "http://dbpedia.org/ontology/orderInOffice",
   "label": {
    "en": "order in office"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:wordBefore",
   "property": "http://dbpedia.org/ontology/wordBefore",
   "label": {
    "en": "word before the country"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:arabicName",
   "property": "http://dbpedia.org/ontology/arabicName",
   "label": {
    "en": "arabic name of a lebanon settlement"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:spacewalkEnd",
   "property": "http://dbpedia.org/ontology/spacewalkEnd",
   "label": {
    "en": "spacewalk end"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#date",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:approximateCalories",
   "property": "http://dbpedia.org/ontology/approximateCalories",
   "label": {
    "en": "approximate calories (J)",
    "el": "κατά προσέγγιση θερμίδες (J)"
   },
   "description": {
    "en": "Approximate calories per serving.",
    "el": "Kατά προσέγγιση θερμίδες ανά μερίδα."
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#double",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:numberBuilt",
   "property": "http://dbpedia.org/ontology/numberBuilt",
   "label": {
    "en": "number built"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#nonNegativeInteger",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:openingDate",
   "property": "http://dbpedia.org/ontology/openingDate",
   "label": {
    "en": "opening date",
    "el": "ημερομηνία ανοίγματος",
    "fr": "date d'ouverture",
    "de": "Eröffnungsdatum"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#date",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:dateUse",
   "property": "http://dbpedia.org/ontology/dateUse",
   "label": {
    "en": "date use",
    "el": "έναρξη_χρήσης"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#date",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:review",
   "property": "http://dbpedia.org/ontology/review",
   "label": {
    "en": "review"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#anyURI",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:circulation",
   "property": "http://dbpedia.org/ontology/circulation",
   "label": {
    "en": "circulation",
    "nl": "oplage",
    "el": "κυκλοφορία"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#nonNegativeInteger",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:production",
   "property": "http://dbpedia.org/ontology/production",
   "label": {
    "en": "production"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#nonNegativeInteger",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:humanDevelopmentIndex",
   "property": "http://dbpedia.org/ontology/humanDevelopmentIndex",
   "label": {
    "en": "Human Development Index (HDI)",
    "pt": "Índice de Desenvolvimento Humano (IDH)"
   },
   "description": {
    "en": "a composite statistic used to rank countries by level of \"human development\""
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#float",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:acceleration",
   "property": "http://dbpedia.org/ontology/acceleration",
   "label": {
    "de": "Beschleunigung (s)",
    "en": "acceleration (s)",
    "el": "επιτάχυνση (s)"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#double",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:populationTotal",
   "property": "http://dbpedia.org/ontology/populationTotal",
   "label": {
    "el": "συνολικός_πληθυσμός",
    "fr": "population totale",
    "en": "population total",
    "nl": "inwonersaantal",
    "pt": "população total",
    "de": "Einwohnerzahl"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#nonNegativeInteger",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:numberOfPlatformLevels",
   "property": "http://dbpedia.org/ontology/numberOfPlatformLevels",
   "label": {
    "en": "number of platform levels"
   },
   "description": {
    "en": "Number of levels of platforms at the station."
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#integer",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:graySubject",
   "property": "http://dbpedia.org/ontology/graySubject",
   "label": {
    "en": "Gray subject"
   },
   "description": {
    "en": "Refers to the famous 1918 edition of Gray's Anatomy."
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#positiveInteger",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:years",
   "property": "http://dbpedia.org/ontology/years",
   "label": {
    "en": "years",
    "nl": "seizoen"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#gYear",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:numberOfStations",
   "property": "http://dbpedia.org/ontology/numberOfStations",
   "label": {
    "en": "number of stations",
    "de": "Anzahl der Stationen"
   },
   "description": {
    "en": "Number of stations or stops."
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#nonNegativeInteger",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:meshId",
   "property": "http://dbpedia.org/ontology/meshId",
   "label": {
    "en": "MeSH ID",
    "nl": "MeSH ID"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:prefectMandate",
   "property": "http://dbpedia.org/ontology/prefectMandate",
   "label": {
    "en": "mandate of a prefect of a romanian settlement"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:area",
   "property": "http://dbpedia.org/ontology/area",
   "label": {
    "el": "έκταση (m2)",
    "fr": "superficie (m2)",
    "en": "area (m2)",
    "nl": "oppervlakte (m2)",
    "pt": "área (m2)",
    "de": "Fläche (m2)"
   },
   "description": {
    "en": "The area of a owl:Thing in square metre."
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#double",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:tennisSurfaceType",
   "property": "http://dbpedia.org/ontology/tennisSurfaceType",
   "label": {
    "en": "type of tennis surface",
    "fr": "type de surface (tennis)",
    "es": "tipo de surperficie(tennis",
    "nl": "type speelgrond"
   },
   "description": {
    "en": "There are five types of court surface used in professional play. Each surface is different in the speed and height of the bounce of the ball."
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:internationalPhonePrefix",
   "property": "http://dbpedia.org/ontology/internationalPhonePrefix",
   "label": {
    "en": "international phone prefix"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:name",
   "property": "http://dbpedia.org/ontology/name",
   "label": {
    "en": "name"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:humanDevelopmentIndexRank",
   "property": "http://dbpedia.org/ontology/humanDevelopmentIndexRank",
   "label": {
    "en": "human development index rank"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:shareOfAudience",
   "property": "http://dbpedia.org/ontology/shareOfAudience",
   "label": {
    "en": "share of audience",
    "de": "Anteil der Zuschauer/Zuhörer"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#float",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:broadcastStationClass",
   "property": "http://dbpedia.org/ontology/broadcastStationClass",
   "label": {
    "en": "broadcast station class",
    "el": "αναμετάδοση ραδιοφωνικού σταθμού"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:kinOfLanguage",
   "property": "http://dbpedia.org/ontology/kinOfLanguage",
   "label": {
    "en": "kindOfLanguage"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:firstMention",
   "property": "http://dbpedia.org/ontology/firstMention",
   "label": {
    "en": "first mention"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:censusYear",
   "property": "http://dbpedia.org/ontology/censusYear",
   "label": {
    "en": "census year",
    "el": "έτος απογραφής",
    "de": "Zensusjahr"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#gYear",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:identificationSymbol",
   "property": "http://dbpedia.org/ontology/identificationSymbol",
   "label": {
    "en": "identification symbol"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:openingYear",
   "property": "http://dbpedia.org/ontology/openingYear",
   "label": {
    "en": "opening year",
    "nl": "openingsjaar",
    "de": "Eröffnungsjahr"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#gYear",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:mainIsland",
   "property": "http://dbpedia.org/ontology/mainIsland",
   "label": {
    "en": "main island"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:millsCodeNLWindmotoren",
   "property": "http://dbpedia.org/ontology/millsCodeNLWindmotoren",
   "label": {
    "en": "millsCodeNLWindmotoren",
    "nl": "millsCodeNLWindmotoren"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:depictionDescription",
   "property": "http://dbpedia.org/ontology/depictionDescription",
   "label": {
    "en": "depiction description (caption)"
   },
   "description": {
    "en": "This property can be used to map image captions from Infoboxes"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:seatNumber",
   "property": "http://dbpedia.org/ontology/seatNumber",
   "label": {
    "en": "number of seats in the land parlement"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#nonNegativeInteger",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:communityIsoCode",
   "property": "http://dbpedia.org/ontology/communityIsoCode",
   "label": {
    "en": "iso code of a community"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:electionDateLeader",
   "property": "http://dbpedia.org/ontology/electionDateLeader",
   "label": {
    "en": "election date leader",
    "de": "Wahldatum des Vorsitzenden"
   },
   "description": {
    "en": "The date that leader was elected."
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#date",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:populationMetro",
   "property": "http://dbpedia.org/ontology/populationMetro",
   "label": {
    "en": "population metro"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#nonNegativeInteger",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:causalties",
   "property": "http://dbpedia.org/ontology/causalties",
   "label": {
    "en": "causalties"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:minorityFloorLeader",
   "property": "http://dbpedia.org/ontology/minorityFloorLeader",
   "label": {
    "en": "minority floor leader"
   },
   "description": {
    "en": "number of office holder"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#integer",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:conservationStatus",
   "property": "http://dbpedia.org/ontology/conservationStatus",
   "label": {
    "en": "conservation status",
    "ja": "保全状況"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:currentRecord",
   "property": "http://dbpedia.org/ontology/currentRecord",
   "label": {
    "en": "current record"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:projectKeyword",
   "property": "http://dbpedia.org/ontology/projectKeyword",
   "label": {
    "en": "project keyword"
   },
   "description": {
    "en": "A key word of the project."
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:analogChannel",
   "property": "http://dbpedia.org/ontology/analogChannel",
   "label": {
    "en": "analog channel",
    "el": "αναλογικό κανάλι"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:numberOfHouses",
   "property": "http://dbpedia.org/ontology/numberOfHouses",
   "label": {
    "en": "number of houses present)",
    "nl": "aantal huizen aanwezig"
   },
   "description": {
    "en": "Count of the houses in the Protected Area",
    "nl": "Aantal huizen in afgegrensd gebied"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:apparentMagnitude",
   "property": "http://dbpedia.org/ontology/apparentMagnitude",
   "label": {
    "en": "apparent magnitude",
    "de": "scheinbare Helligkeit",
    "el": "φαινόμενο μέγεθος"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#double",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:rankingsSingles",
   "property": "http://dbpedia.org/ontology/rankingsSingles",
   "label": {
    "en": "single rankings"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#nonNegativeInteger",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:luxembourgishName",
   "property": "http://dbpedia.org/ontology/luxembourgishName",
   "label": {
    "en": "city luxembourgish name"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:informationName",
   "property": "http://dbpedia.org/ontology/informationName",
   "label": {
    "en": "information name"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:startCareer",
   "property": "http://dbpedia.org/ontology/startCareer",
   "label": {
    "en": "start career"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:size_v",
   "property": "http://dbpedia.org/ontology/size_v",
   "label": {
    "en": "size_v",
    "el": "μέγεθος"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#integer",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:populationDensity",
   "property": "http://dbpedia.org/ontology/populationDensity",
   "label": {
    "en": "population density (/sqkm)",
    "nl": "bevolkingsdichtheid (/sqkm)",
    "de": "Bevölkerungsdichte (/sqkm)",
    "el": "πυκνότητα_πληθυσμού (/sqkm)"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#double",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:oclc",
   "property": "http://dbpedia.org/ontology/oclc",
   "label": {
    "en": "OCLC"
   },
   "description": {
    "en": "Online Computer Library Center number"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:infantMortality",
   "property": "http://dbpedia.org/ontology/infantMortality",
   "label": {
    "en": "infant mortality",
    "pt": "mortalidade infantil"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#float",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:parkingInformation",
   "property": "http://dbpedia.org/ontology/parkingInformation",
   "label": {
    "en": "parking information",
    "de": "Parkplatzinformationen"
   },
   "description": {
    "en": "Information on station's parking facilities."
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:generalCouncil",
   "property": "http://dbpedia.org/ontology/generalCouncil",
   "label": {
    "en": "general council"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:genereviewsname",
   "property": "http://dbpedia.org/ontology/genereviewsname",
   "label": {
    "en": "GeneReviewsName"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:lowerAge",
   "property": "http://dbpedia.org/ontology/lowerAge",
   "label": {
    "en": "lower age"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#nonNegativeInteger",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:sixthFormStudents",
   "property": "http://dbpedia.org/ontology/sixthFormStudents",
   "label": {
    "en": "sixth form students"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:assets",
   "property": "http://dbpedia.org/ontology/assets",
   "label": {
    "en": "assets ($)",
    "el": "περιουσιακά στοιχεία ($)"
   },
   "description": {
    "en": "Assets and liabilities are part of a companis balance sheet. In financial accounting, assets are economic resources. Anything tangible or intangible that is capable of being owned or controlled to produce value and that is held to have positive economic value is considered an asset.",
    "el": "Περιουσιακά στοιχεία και υποχρεώσεις αποτελούν μέρος του ισολογισμού μιας εταιρείας.Σε χρηματοοικονομική λογιστική,τα περιουσιακά στοιχεία είναι οι οικονομικοί πόροι. Οτιδήποτε ενσώματο ή άυλο, που είναι ικανό να ανήκει ή να ελέγχεται για να παράγει αξία και που κατέχεται για να έχει θετική οικονομική αξία θεωρείται ένα περιουσιακό στοιχείο."
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#double",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:serviceNumber",
   "property": "http://dbpedia.org/ontology/serviceNumber",
   "label": {
    "en": "service number"
   },
   "description": {
    "en": "The service number held by the individual during military service."
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:projectObjective",
   "property": "http://dbpedia.org/ontology/projectObjective",
   "label": {
    "en": "project objective",
    "de": "Projektziel"
   },
   "description": {
    "en": "A defined objective of the project."
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:protestantPercentage",
   "property": "http://dbpedia.org/ontology/protestantPercentage",
   "label": {
    "en": "protestant percentage"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:dissolutionDate",
   "property": "http://dbpedia.org/ontology/dissolutionDate",
   "label": {
    "en": "dissolution date",
    "nl": "ontbindingsdatum"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#date",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:poles",
   "property": "http://dbpedia.org/ontology/poles",
   "label": {
    "en": "poles",
    "fr": "pôle"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#nonNegativeInteger",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:regionLink",
   "property": "http://dbpedia.org/ontology/regionLink",
   "label": {
    "en": "region link"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:numberOfRestaurants",
   "property": "http://dbpedia.org/ontology/numberOfRestaurants",
   "label": {
    "en": "number of restaurants",
    "el": "αριθμός εστιατορίων"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#nonNegativeInteger",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:emblem",
   "property": "http://dbpedia.org/ontology/emblem",
   "label": {
    "en": "emblem"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:feature",
   "property": "http://dbpedia.org/ontology/feature",
   "label": {
    "en": "feature"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:colourHexCode",
   "property": "http://dbpedia.org/ontology/colourHexCode",
   "label": {
    "en": "colour hex code",
    "de": "Farben Hex Code"
   },
   "description": {
    "en": "A colour represented by its hex code (e.g.: #FF0000 or #40E0D0)."
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:wheelbase",
   "property": "http://dbpedia.org/ontology/wheelbase",
   "label": {
    "en": "wheelbase (μ)"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#double",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:formationDate",
   "property": "http://dbpedia.org/ontology/formationDate",
   "label": {
    "en": "formation date",
    "nl": "formatie datum",
    "el": "Ιδρύθηκε"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#date",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:course",
   "property": "http://dbpedia.org/ontology/course",
   "label": {
    "en": "course (μ)"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#double",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:creationYear",
   "property": "http://dbpedia.org/ontology/creationYear",
   "label": {
    "en": "year of creation",
    "nl": "jaar van creatie"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#gYear",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:landskap",
   "property": "http://dbpedia.org/ontology/landskap",
   "label": {
    "en": "norwegian landskap"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:mouthElevation",
   "property": "http://dbpedia.org/ontology/mouthElevation",
   "label": {
    "en": "mouth elevation (μ)",
    "el": "ύψος_εκβολών (μ)"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#double",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:codeLandRegistry",
   "property": "http://dbpedia.org/ontology/codeLandRegistry",
   "label": {
    "en": "code land registry",
    "nl": "kadastercode"
   },
   "description": {
    "en": "Land Registry code designating a parcel of land",
    "nl": "Kadastercode voor een perceel"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:pccSecretary",
   "property": "http://dbpedia.org/ontology/pccSecretary",
   "label": {
    "en": "pcc secretary"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:modelStartDate",
   "property": "http://dbpedia.org/ontology/modelStartDate",
   "label": {
    "en": "model start date"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#date",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:meshName",
   "property": "http://dbpedia.org/ontology/meshName",
   "label": {
    "en": "MeSH name"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:coachingRecord",
   "property": "http://dbpedia.org/ontology/coachingRecord",
   "label": {
    "en": "coaching record"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:commissionerDate",
   "property": "http://dbpedia.org/ontology/commissionerDate",
   "label": {
    "en": "commissioner date"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:unloCode",
   "property": "http://dbpedia.org/ontology/unloCode",
   "label": {
    "en": "UN/LOCODE"
   },
   "description": {
    "en": "UN/LOCODE, the United Nations Code for Trade and Transport Locations, is a geographic coding scheme developed and maintained by United Nations Economic Commission for Europe (UNECE), a unit of the United Nations. UN/LOCODE assigns codes to locations used in trade and transport  with functions such as seaports, rail and road terminals, airports, post offices and border crossing points."
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:volumeQuote",
   "property": "http://dbpedia.org/ontology/volumeQuote",
   "label": {
    "en": "volume quote"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:airportUsing",
   "property": "http://dbpedia.org/ontology/airportUsing",
   "label": {
    "en": "Different usage of an airport",
    "el": "οι χρήσεις ενός αεροδρομίου"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:nrhpReferenceNumber",
   "property": "http://dbpedia.org/ontology/nrhpReferenceNumber",
   "label": {
    "en": "NRHP Reference Number"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:centuryBreaks",
   "property": "http://dbpedia.org/ontology/centuryBreaks",
   "label": {
    "en": "century breaks",
    "de": "Century Breaks"
   },
   "description": {
    "en": "number of breaks with 100 points and more",
    "de": "Anzahl Breaks mit 100 Punkten oder mehr, wird nicht übersetzt"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#integer",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:plays",
   "property": "http://dbpedia.org/ontology/plays",
   "label": {
    "en": "plays",
    "nl": "slaghand"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:areaLand",
   "property": "http://dbpedia.org/ontology/areaLand",
   "label": {
    "en": "area land (m2)",
    "nl": "oppervlakte land (m2)",
    "el": "έκταση_στεριάς_περιοχής (m2)"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#double",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:sicilianName",
   "property": "http://dbpedia.org/ontology/sicilianName",
   "label": {
    "en": "city sicilian name"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:portfolio",
   "property": "http://dbpedia.org/ontology/portfolio",
   "label": {
    "en": "portfolio"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:numberOfSpeakers",
   "property": "http://dbpedia.org/ontology/numberOfSpeakers",
   "label": {
    "en": "number of speakers",
    "nl": "aantal sprekers",
    "de": "Anzahl Sprecher"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#nonNegativeInteger",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:blazon",
   "property": "http://dbpedia.org/ontology/blazon",
   "label": {
    "en": "blazon"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:snowParkNumber",
   "property": "http://dbpedia.org/ontology/snowParkNumber",
   "label": {
    "en": "snow park number"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#nonNegativeInteger",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:dist_ly",
   "property": "http://dbpedia.org/ontology/dist_ly",
   "label": {
    "en": "dist_ly"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:numberOfStars",
   "property": "http://dbpedia.org/ontology/numberOfStars",
   "label": {
    "en": "number of stars"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#nonNegativeInteger",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:setupTime",
   "property": "http://dbpedia.org/ontology/setupTime",
   "label": {
    "en": "setup time (s)"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#double",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:parliament",
   "property": "http://dbpedia.org/ontology/parliament",
   "label": {
    "en": "parliament"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:throwingSide",
   "property": "http://dbpedia.org/ontology/throwingSide",
   "label": {
    "en": "throwing side"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:lastLaunch",
   "property": "http://dbpedia.org/ontology/lastLaunch",
   "label": {
    "en": "last launch"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#date",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:hipSize",
   "property": "http://dbpedia.org/ontology/hipSize",
   "label": {
    "en": "hip size (μ)",
    "de": "Hüftumfang (μ)",
    "ja": "ヒップ (μ)"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#double",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:authorityTitle",
   "property": "http://dbpedia.org/ontology/authorityTitle",
   "label": {
    "en": "authority title of a romanian settlement"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:collection",
   "property": "http://dbpedia.org/ontology/collection",
   "label": {
    "en": "collection",
    "el": "συλλογή"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:waterPercentage",
   "property": "http://dbpedia.org/ontology/waterPercentage",
   "label": {
    "en": "water percentage of a place"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#float",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:servingTemperature",
   "property": "http://dbpedia.org/ontology/servingTemperature",
   "label": {
    "en": "serving temperature"
   },
   "description": {
    "en": "Serving temperature for the food (e.g.: hot, cold, warm or room temperature)."
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:port1DockedTime",
   "property": "http://dbpedia.org/ontology/port1DockedTime",
   "label": {
    "en": "port1 docked time (s)"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#double",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:recommissioningDate",
   "property": "http://dbpedia.org/ontology/recommissioningDate",
   "label": {
    "en": "recommissioning date"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#date",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:unicode",
   "property": "http://dbpedia.org/ontology/unicode",
   "label": {
    "en": "unicode"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:visitorsPerYear",
   "property": "http://dbpedia.org/ontology/visitorsPerYear",
   "label": {
    "en": "visitors per year",
    "nl": "bezoekers per jaar",
    "de": "Besucher pro Jahr"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#nonNegativeInteger",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:ofsCode",
   "property": "http://dbpedia.org/ontology/ofsCode",
   "label": {
    "en": "ofs code of a settlement"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:brainInfoNumber",
   "property": "http://dbpedia.org/ontology/brainInfoNumber",
   "label": {
    "en": "brain info number",
    "el": "αριθμός νοητικής πληροφόρησης"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:citySince",
   "property": "http://dbpedia.org/ontology/citySince",
   "label": {
    "en": "city since"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:cargoGas",
   "property": "http://dbpedia.org/ontology/cargoGas",
   "label": {
    "en": "cargo gas (g)"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#double",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:cmpEvaDuration",
   "property": "http://dbpedia.org/ontology/cmpEvaDuration",
   "label": {
    "en": "CMP EVA duration (s)"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#double",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:cargoWater",
   "property": "http://dbpedia.org/ontology/cargoWater",
   "label": {
    "en": "cargo water (g)"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#double",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:functionEndDate",
   "property": "http://dbpedia.org/ontology/functionEndDate",
   "label": {
    "en": "function end date"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#date",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:endDate",
   "property": "http://dbpedia.org/ontology/endDate",
   "label": {
    "en": "end date",
    "nl": "einddatum",
    "fr": "date de fin",
    "es": "fecha de fin"
   },
   "description": {
    "en": "The end date of the event."
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#date",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:icaoLocationIdentifier",
   "property": "http://dbpedia.org/ontology/icaoLocationIdentifier",
   "label": {
    "en": "ICAO Location Identifier",
    "el": "ΙΚΑΟ"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:lastPublicationDate",
   "property": "http://dbpedia.org/ontology/lastPublicationDate",
   "label": {
    "en": "last publication date"
   },
   "description": {
    "en": "Date of the last publication."
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#date",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:automobileModel",
   "property": "http://dbpedia.org/ontology/automobileModel",
   "label": {
    "en": "automobile model",
    "el": "μοντέλο αυτοκινήτου"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:numberOfParticipatingNations",
   "property": "http://dbpedia.org/ontology/numberOfParticipatingNations",
   "label": {
    "en": "number of participating nations"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#nonNegativeInteger",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:carNumber",
   "property": "http://dbpedia.org/ontology/carNumber",
   "label": {
    "en": "car number"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#integer",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:lowest",
   "property": "http://dbpedia.org/ontology/lowest",
   "label": {
    "en": "lowest",
    "el": "χαμηλότερο"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:numberOfLanes",
   "property": "http://dbpedia.org/ontology/numberOfLanes",
   "label": {
    "en": "number of lanes",
    "de": "Anzahl der Fahrstreifen",
    "fr": "nombre de voies"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#nonNegativeInteger",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:epoch",
   "property": "http://dbpedia.org/ontology/epoch",
   "label": {
    "en": "epoch"
   },
   "description": {
    "en": "moment in time used as a referrence point for some time-vaying astronomical quantity"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:virtualChannel",
   "property": "http://dbpedia.org/ontology/virtualChannel",
   "label": {
    "en": "virtual channel",
    "el": "εικονικό κανάλι"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:electionMajority",
   "property": "http://dbpedia.org/ontology/electionMajority",
   "label": {
    "en": "election majority"
   },
   "description": {
    "en": "number of votes the office holder attained"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#nonNegativeInteger",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:nationalRanking",
   "property": "http://dbpedia.org/ontology/nationalRanking",
   "label": {
    "en": "national ranking"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#positiveInteger",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:nndbId",
   "property": "http://dbpedia.org/ontology/nndbId",
   "label": {
    "en": "NNDB id"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:orderDate",
   "property": "http://dbpedia.org/ontology/orderDate",
   "label": {
    "en": "order date"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#date",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:tu",
   "property": "http://dbpedia.org/ontology/tu",
   "label": {
    "en": "tu"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:locusSupplementaryData",
   "property": "http://dbpedia.org/ontology/locusSupplementaryData",
   "label": {
    "en": "locus supplementary data"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:circle",
   "property": "http://dbpedia.org/ontology/circle",
   "label": {
    "en": "region"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:fastestLap",
   "property": "http://dbpedia.org/ontology/fastestLap",
   "label": {
    "en": "fastest lap"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#nonNegativeInteger",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:landPercentage",
   "property": "http://dbpedia.org/ontology/landPercentage",
   "label": {
    "en": "land percentage of a place"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#float",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:model",
   "property": "http://dbpedia.org/ontology/model",
   "label": {
    "en": "model",
    "fr": "modèle"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:originallyUsedFor",
   "property": "http://dbpedia.org/ontology/originallyUsedFor",
   "label": {
    "en": "originally used for",
    "nl": "oorspronkelijk gebruik"
   },
   "description": {
    "en": "Original use of the architectural structure, if it is currently being used as anything other than its original purpose."
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:lastFlightStartDate",
   "property": "http://dbpedia.org/ontology/lastFlightStartDate",
   "label": {
    "en": "last flight start date"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#date",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:bedCount",
   "property": "http://dbpedia.org/ontology/bedCount",
   "label": {
    "en": "bed count",
    "nl": "aantal bedden",
    "de": "Anzahl Betten",
    "el": "αριθμός κρεβατιών"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#nonNegativeInteger",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:serviceModule",
   "property": "http://dbpedia.org/ontology/serviceModule",
   "label": {
    "en": "service module"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:speedLimit",
   "property": "http://dbpedia.org/ontology/speedLimit",
   "label": {
    "en": "speed limit (kmh)",
    "de": "Tempolimit (kmh)"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#double",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:restoreDate",
   "property": "http://dbpedia.org/ontology/restoreDate",
   "label": {
    "en": "restore date",
    "el": "ημερομηνία ανακαίνισης"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#date",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:battingSide",
   "property": "http://dbpedia.org/ontology/battingSide",
   "label": {
    "en": "batting side"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:teamName",
   "property": "http://dbpedia.org/ontology/teamName",
   "label": {
    "en": "team name",
    "el": "όνομα ομάδας"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:redSkiPisteNumber",
   "property": "http://dbpedia.org/ontology/redSkiPisteNumber",
   "label": {
    "en": "red ski piste number"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#nonNegativeInteger",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:classes",
   "property": "http://dbpedia.org/ontology/classes",
   "label": {
    "en": "classes",
    "el": "τάξεις"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#nonNegativeInteger",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:meanRadius",
   "property": "http://dbpedia.org/ontology/meanRadius",
   "label": {
    "en": "mean radius (μ)",
    "el": "μέση ακτίνα (μ)"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#double",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:topLevelDomain",
   "property": "http://dbpedia.org/ontology/topLevelDomain",
   "label": {
    "en": "country top level (tld)",
    "pt": "domínio de topo (tld)",
    "fr": "domaine de premier niveau (tld)"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:sizeLogo",
   "property": "http://dbpedia.org/ontology/sizeLogo",
   "label": {
    "en": "size logo"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#nonNegativeInteger",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:numberOfDoctoralStudents",
   "property": "http://dbpedia.org/ontology/numberOfDoctoralStudents",
   "label": {
    "en": "number of doctoral students"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#nonNegativeInteger",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:bestFinish",
   "property": "http://dbpedia.org/ontology/bestFinish",
   "label": {
    "en": "best ranking finish",
    "de": "beste Platzierung im Ranglistenturnier"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:nation",
   "property": "http://dbpedia.org/ontology/nation",
   "label": {
    "en": "nation"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:icaoAirlineCode",
   "property": "http://dbpedia.org/ontology/icaoAirlineCode",
   "label": {
    "en": "ICAO code"
   },
   "description": {
    "en": "ICAO designation for airline companies"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:buildingEndDate",
   "property": "http://dbpedia.org/ontology/buildingEndDate",
   "label": {
    "en": "building end date",
    "el": "Ημερομηνία λήξης κατασκευής"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#date",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:numberOfPostgraduateStudents",
   "property": "http://dbpedia.org/ontology/numberOfPostgraduateStudents",
   "label": {
    "en": "number of postgraduate students"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#nonNegativeInteger",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:impactFactor",
   "property": "http://dbpedia.org/ontology/impactFactor",
   "label": {
    "en": "impact factor",
    "de": "Impact Factor"
   },
   "description": {
    "en": "The impact factor, often abbreviated IF, is a measure reflecting the average number of citations to articles published in science and social science journals.",
    "de": "Der Impact Factor oder genauer Journal Impact Factor (JIF) einer Fachzeitschrift soll messen, wie oft andere Zeitschriften einen Artikel aus ihr in Relation zur Gesamtzahl der dort veröffentlichten Artikel zitieren. Je höher der Impact Factor, desto angesehener ist eine Fachzeitschrift."
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#double",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:licensee",
   "property": "http://dbpedia.org/ontology/licensee",
   "label": {
    "en": "licensee"
   },
   "description": {
    "en": "Identify which company or entity holds the licence (mostly string are used in Wikipedia, therefore range is xsd:sting)."
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:discontinued",
   "property": "http://dbpedia.org/ontology/discontinued",
   "label": {
    "en": "discontinued"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#date",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:greenLongDistancePisteNumber",
   "property": "http://dbpedia.org/ontology/greenLongDistancePisteNumber",
   "label": {
    "en": "green long distance piste number"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#nonNegativeInteger",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:undraftedYear",
   "property": "http://dbpedia.org/ontology/undraftedYear",
   "label": {
    "en": "undrafted year"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#gYear",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:codeMunicipalMonument",
   "property": "http://dbpedia.org/ontology/codeMunicipalMonument",
   "label": {
    "en": "monument code (municipal)",
    "nl": "monumentcode gemeentelijke monumenten"
   },
   "description": {
    "en": "We should be able to distinguish status types since different codes refer to different protection regimes.",
    "nl": "We moeten soorten codes kunnen onderscheiden al naar gelang het een rijks-, provinciaal of gemeentelijk monument, of een MIP-code, betreft"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:races",
   "property": "http://dbpedia.org/ontology/races",
   "label": {
    "en": "races",
    "el": "αγώνας"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#nonNegativeInteger",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:administrativeStatus",
   "property": "http://dbpedia.org/ontology/administrativeStatus",
   "label": {
    "en": "administrative status"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:nationalYears",
   "property": "http://dbpedia.org/ontology/nationalYears",
   "label": {
    "en": "national years"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#gYear",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:ascent",
   "property": "http://dbpedia.org/ontology/ascent",
   "label": {
    "en": "ascent",
    "el": "ανάβαση"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:security",
   "property": "http://dbpedia.org/ontology/security",
   "label": {
    "en": "security",
    "de": "SIcherheit"
   },
   "description": {
    "en": "Safety precautions that are used in the building",
    "de": "Sicherheitsmaßnahmen, die für das Gebäude getroffen wurden"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:winterTemperature",
   "property": "http://dbpedia.org/ontology/winterTemperature",
   "label": {
    "en": "winter temperature (K)"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#double",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:role",
   "property": "http://dbpedia.org/ontology/role",
   "label": {
    "en": "role",
    "el": "ρόλος",
    "fr": "rôle"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:dockedTime",
   "property": "http://dbpedia.org/ontology/dockedTime",
   "label": {
    "en": "docked time (s)"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#double",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:buildingStartYear",
   "property": "http://dbpedia.org/ontology/buildingStartYear",
   "label": {
    "en": "building start year",
    "nl": "bouw start jaar",
    "el": "έτος έναρξης κατασκευής"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#gYear",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:sizeThumbnail",
   "property": "http://dbpedia.org/ontology/sizeThumbnail",
   "label": {
    "en": "size of a thumbnail"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:populationYear",
   "property": "http://dbpedia.org/ontology/populationYear",
   "label": {
    "en": "population year"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:agencyStationCode",
   "property": "http://dbpedia.org/ontology/agencyStationCode",
   "label": {
    "en": "agency station code",
    "nl": "stationscode",
    "de": "Stationsabkürzung",
    "el": "κωδικός πρακτορείου"
   },
   "description": {
    "en": "Agency station code (used on tickets/reservations, etc.).",
    "el": "Κωδικός πρακτορείου (χρησιμοποιείται σε εισιτήρια/κρατήσεις,κτλ.)."
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:different",
   "property": "http://dbpedia.org/ontology/different",
   "label": {
    "en": "different"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:dcc",
   "property": "http://dbpedia.org/ontology/dcc",
   "label": {
    "en": "Dewey Decimal Classification"
   },
   "description": {
    "en": "The Dewey Decimal Classification is a proprietary system of library classification developed by Melvil Dewey in 1876."
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:canBaggageChecked",
   "property": "http://dbpedia.org/ontology/canBaggageChecked",
   "label": {
    "en": "can baggage checked",
    "de": "Gepäckkontrolle möglich"
   },
   "description": {
    "en": "Whether bags can be checked."
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#boolean",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:beatifiedDate",
   "property": "http://dbpedia.org/ontology/beatifiedDate",
   "label": {
    "en": "beatified date",
    "nl": "zalig verklaard datum"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#date",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:areaRank",
   "property": "http://dbpedia.org/ontology/areaRank",
   "label": {
    "en": "area rank"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:internationally",
   "property": "http://dbpedia.org/ontology/internationally",
   "label": {
    "en": "internationally"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#boolean",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:vehiclesPerDay",
   "property": "http://dbpedia.org/ontology/vehiclesPerDay",
   "label": {
    "en": "vehicles per day",
    "de": "Fahrzeuge pro Tag"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#nonNegativeInteger",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:regime",
   "property": "http://dbpedia.org/ontology/regime",
   "label": {
    "en": "regime"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:historicalMap",
   "property": "http://dbpedia.org/ontology/historicalMap",
   "label": {
    "en": "historical map"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:lunarOrbitTime",
   "property": "http://dbpedia.org/ontology/lunarOrbitTime",
   "label": {
    "en": "lunar orbit time (s)"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#double",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:grossDomesticProduct",
   "property": "http://dbpedia.org/ontology/grossDomesticProduct",
   "label": {
    "en": "gross domestic product (GDP) ($)"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#double",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:blazonLink",
   "property": "http://dbpedia.org/ontology/blazonLink",
   "label": {
    "en": "blazon link"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:firstPublicationDate",
   "property": "http://dbpedia.org/ontology/firstPublicationDate",
   "label": {
    "en": "first publication date",
    "nl": "eerste publicatiedatum",
    "de": "Datum der Erstausgabe",
    "pl": "data pierwszego wydania"
   },
   "description": {
    "en": "Date of the first publication.",
    "de": "Datum der ersten Veröffentlichung des Periodikums."
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#date",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:coastLength",
   "property": "http://dbpedia.org/ontology/coastLength",
   "label": {
    "en": "length of a coast"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#float",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:kabyleSettlementName",
   "property": "http://dbpedia.org/ontology/kabyleSettlementName",
   "label": {
    "en": "kabyle settlement name"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:populationUrban",
   "property": "http://dbpedia.org/ontology/populationUrban",
   "label": {
    "en": "population urban"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#nonNegativeInteger",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:productionEndDate",
   "property": "http://dbpedia.org/ontology/productionEndDate",
   "label": {
    "en": "production end date"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#date",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:firstFlightStartDate",
   "property": "http://dbpedia.org/ontology/firstFlightStartDate",
   "label": {
    "en": "first flight start date"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#date",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:kindOfCoordinate",
   "property": "http://dbpedia.org/ontology/kindOfCoordinate",
   "label": {
    "en": "kind of coordinate"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:lccn",
   "property": "http://dbpedia.org/ontology/lccn",
   "label": {
    "en": "LCCN"
   },
   "description": {
    "en": "The Library of Congress Control Number or LCCN is a serially based system of numbering cataloging records in the Library of Congress in the United States. It has nothing to do with the contents of any book, and should not be confused with Library of Congress Classification."
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:style",
   "property": "http://dbpedia.org/ontology/style",
   "label": {
    "en": "style",
    "de": "stil",
    "it": "stile",
    "es": "estilo"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:numberOfGoldMedalsWon",
   "property": "http://dbpedia.org/ontology/numberOfGoldMedalsWon",
   "label": {
    "en": "number of gold medals won",
    "fr": "nomber de médailles d'or gagnées",
    "es": "cantidad de medallas de oro ganadas"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#nonNegativeInteger",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:co2Emission",
   "property": "http://dbpedia.org/ontology/co2Emission",
   "label": {
    "en": "CO2 emission (g/km)"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#double",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:port1UndockingDate",
   "property": "http://dbpedia.org/ontology/port1UndockingDate",
   "label": {
    "en": "port1 undocking date"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#date",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:closed",
   "property": "http://dbpedia.org/ontology/closed",
   "label": {
    "en": "closed",
    "nl": "gesloten"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#date",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:ist",
   "property": "http://dbpedia.org/ontology/ist",
   "label": {
    "en": "ist"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:colonialName",
   "property": "http://dbpedia.org/ontology/colonialName",
   "label": {
    "en": "colonial name"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:whaDraftYear",
   "property": "http://dbpedia.org/ontology/whaDraftYear",
   "label": {
    "en": "wha draft year"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#date",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:blazonCaption",
   "property": "http://dbpedia.org/ontology/blazonCaption",
   "label": {
    "en": "BlazonCaption"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:numberOfMunicipalities",
   "property": "http://dbpedia.org/ontology/numberOfMunicipalities",
   "label": {
    "en": "Number Of Municipalities",
    "nl": "Aantal gemeenten",
    "pt": "numero de municipios"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#nonNegativeInteger",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:project",
   "property": "http://dbpedia.org/ontology/project",
   "label": {
    "en": "project"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:totalTracks",
   "property": "http://dbpedia.org/ontology/totalTracks",
   "label": {
    "en": "total tracks"
   },
   "description": {
    "en": "the total number of tracks contained in the album"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#integer",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:conservationStatusSystem",
   "property": "http://dbpedia.org/ontology/conservationStatusSystem",
   "label": {
    "en": "conservation status system"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:numberOfParticipatingMaleAthletes",
   "property": "http://dbpedia.org/ontology/numberOfParticipatingMaleAthletes",
   "label": {
    "en": "number of participating male athletes",
    "fr": "nombre d'athlètes masculins participant"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#nonNegativeInteger",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:background",
   "property": "http://dbpedia.org/ontology/background",
   "label": {
    "en": "background",
    "el": "φόντο"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:center",
   "property": "http://dbpedia.org/ontology/center",
   "label": {
    "en": "norwegian center"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:formationYear",
   "property": "http://dbpedia.org/ontology/formationYear",
   "label": {
    "en": "formation year",
    "nl": "formatie jaar"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#gYear",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:demolitionYear",
   "property": "http://dbpedia.org/ontology/demolitionYear",
   "label": {
    "en": "demolition year",
    "nl": "sloop jaar"
   },
   "description": {
    "en": "The year the building was demolished."
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#gYear",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:zdb",
   "property": "http://dbpedia.org/ontology/zdb",
   "label": {
    "en": "zdb"
   },
   "description": {
    "en": "Identifier for serial titles. More precise than issn"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:percentageAlcohol",
   "property": "http://dbpedia.org/ontology/percentageAlcohol",
   "label": {
    "en": "percentage of alcohol",
    "nl": "alcoholpercentage"
   },
   "description": {
    "en": "percentage of alcohol present in a beverage"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#nonNegativeInteger",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:purchasingPowerParityRank",
   "property": "http://dbpedia.org/ontology/purchasingPowerParityRank",
   "label": {
    "en": "purchasing power parity rank"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:redLongDistancePisteNumber",
   "property": "http://dbpedia.org/ontology/redLongDistancePisteNumber",
   "label": {
    "en": "red long distance piste number"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#nonNegativeInteger",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:birthName",
   "property": "http://dbpedia.org/ontology/birthName",
   "label": {
    "en": "birth name",
    "nl": "geboortenaam",
    "de": "Geburtsname",
    "el": "όνομα_γέννησης"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:description",
   "property": "http://dbpedia.org/ontology/description",
   "label": {
    "en": "description",
    "el": "περιγραφή",
    "de": "Beschreibung",
    "nl": "omschrijving"
   },
   "description": {
    "en": "Short description of a person"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:reportingMark",
   "property": "http://dbpedia.org/ontology/reportingMark",
   "label": {
    "en": "reporting mark"
   },
   "description": {
    "en": "A reporting mark is a two-, three-, or four-letter alphabetic code used to identify owners or lessees of rolling stock and other equipment used on the North American railroad network."
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:shareDate",
   "property": "http://dbpedia.org/ontology/shareDate",
   "label": {
    "en": "share date"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#gYearMonth",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:conflict",
   "property": "http://dbpedia.org/ontology/conflict",
   "label": {
    "en": "title"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:millsCodeNLVerdwenen",
   "property": "http://dbpedia.org/ontology/millsCodeNLVerdwenen",
   "label": {
    "en": "mill dissapeared code NL",
    "nl": "verdwenen molen code NL"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:tag",
   "property": "http://dbpedia.org/ontology/tag",
   "label": {
    "en": "tag"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#date",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:subdivisionLink",
   "property": "http://dbpedia.org/ontology/subdivisionLink",
   "label": {
    "en": "subdivision link"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:numberOfLawyers",
   "property": "http://dbpedia.org/ontology/numberOfLawyers",
   "label": {
    "en": "number of lawyers",
    "de": "Anzahl Rechtsanwälte"
   },
   "description": {
    "en": "Number of lawyers or attorneys in the company."
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#nonNegativeInteger",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:criteria",
   "property": "http://dbpedia.org/ontology/criteria",
   "label": {
    "en": "criteria",
    "pt": "critério"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:seasonNumber",
   "property": "http://dbpedia.org/ontology/seasonNumber",
   "label": {
    "en": "season number"
   },
   "description": {
    "en": "The season number to which the TelevisionEpisode belongs."
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#nonNegativeInteger",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:scale",
   "property": "http://dbpedia.org/ontology/scale",
   "label": {
    "en": "scale"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:captureDate",
   "property": "http://dbpedia.org/ontology/captureDate",
   "label": {
    "en": "capture date"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#date",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:widthQuote",
   "property": "http://dbpedia.org/ontology/widthQuote",
   "label": {
    "en": "width quote"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:geology",
   "property": "http://dbpedia.org/ontology/geology",
   "label": {
    "en": "geology",
    "el": "γεωλογία",
    "fr": "géologie"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:maximumTemperature",
   "property": "http://dbpedia.org/ontology/maximumTemperature",
   "label": {
    "en": "maximum temperature (K)",
    "el": "μέγιστη θερμοκρασία (K)"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#double",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:names",
   "property": "http://dbpedia.org/ontology/names",
   "label": {
    "en": "names"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:finalFlight",
   "property": "http://dbpedia.org/ontology/finalFlight",
   "label": {
    "en": "final flight"
   },
   "description": {
    "en": "date of final flight"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#date",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:activeYear",
   "property": "http://dbpedia.org/ontology/activeYear",
   "label": {
    "en": "active year"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:otherWins",
   "property": "http://dbpedia.org/ontology/otherWins",
   "label": {
    "en": "other wins",
    "de": "Sonstige Siege"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#nonNegativeInteger",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:subPrefecture",
   "property": "http://dbpedia.org/ontology/subPrefecture",
   "label": {
    "en": "subprefecture"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:scotsName",
   "property": "http://dbpedia.org/ontology/scotsName",
   "label": {
    "en": "scots name"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:tattoo",
   "property": "http://dbpedia.org/ontology/tattoo",
   "label": {
    "en": "tattoo",
    "el": "τατουάζ",
    "de": "Tätowierung",
    "pt": "tatuagem"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:launches",
   "property": "http://dbpedia.org/ontology/launches",
   "label": {
    "en": "launches"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#nonNegativeInteger",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:fansgroup",
   "property": "http://dbpedia.org/ontology/fansgroup",
   "label": {
    "en": "fansgroup"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:war",
   "property": "http://dbpedia.org/ontology/war",
   "label": {
    "en": "wars",
    "el": "πολέμους"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:numberOfSeasons",
   "property": "http://dbpedia.org/ontology/numberOfSeasons",
   "label": {
    "en": "number of seasons"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#nonNegativeInteger",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:neighbourConstellations",
   "property": "http://dbpedia.org/ontology/neighbourConstellations",
   "label": {
    "en": "neighbour constellations"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:prefix",
   "property": "http://dbpedia.org/ontology/prefix",
   "label": {
    "en": "prefix"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:regionType",
   "property": "http://dbpedia.org/ontology/regionType",
   "label": {
    "en": "region type",
    "nl": "regio-type"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:specialist",
   "property": "http://dbpedia.org/ontology/specialist",
   "label": {
    "en": "specialist"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:foundationDate",
   "property": "http://dbpedia.org/ontology/foundationDate",
   "label": {
    "en": "date foundation of a populated place"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#date",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:deliveryDate",
   "property": "http://dbpedia.org/ontology/deliveryDate",
   "label": {
    "en": "delivery date",
    "nl": "leverdatum"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#date",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:purchasingPowerParityYear",
   "property": "http://dbpedia.org/ontology/purchasingPowerParityYear",
   "label": {
    "en": "purchasing power parity year"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:championships",
   "property": "http://dbpedia.org/ontology/championships",
   "label": {
    "en": "championships"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#nonNegativeInteger",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:distanceToCardiff",
   "property": "http://dbpedia.org/ontology/distanceToCardiff",
   "label": {
    "en": "distance to Cardiff (μ)",
    "el": "απόσταση από το Cardiff (μ)"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#double",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:numberOfPlayers",
   "property": "http://dbpedia.org/ontology/numberOfPlayers",
   "label": {
    "en": "number of players",
    "el": "αριθμός παιχτών",
    "fr": "nombre de joueurs",
    "es": "numero de jugadores"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#nonNegativeInteger",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:okatoCode",
   "property": "http://dbpedia.org/ontology/okatoCode",
   "label": {
    "en": "okato code"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:codeNationalMonument",
   "property": "http://dbpedia.org/ontology/codeNationalMonument",
   "label": {
    "en": "monument code (national)",
    "nl": "monumentcode rijksmonumenten"
   },
   "description": {
    "en": "Code is too general. We should be able to distinguish status types since different codes refer to different protection regimes",
    "nl": "Code is te algemeen. We moeten soorten codes kunnen onderscheiden al naar gelang het een rijks-, provinciaal of gemeentelijk monument betreft"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:band",
   "property": "http://dbpedia.org/ontology/band",
   "label": {
    "en": "band",
    "el": "μπάντα"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:blueLongDistancePisteNumber",
   "property": "http://dbpedia.org/ontology/blueLongDistancePisteNumber",
   "label": {
    "en": "blue long distance piste number"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#nonNegativeInteger",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:totalDiscs",
   "property": "http://dbpedia.org/ontology/totalDiscs",
   "label": {
    "en": "total discs"
   },
   "description": {
    "en": "the total number of discs contained in the album"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#integer",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:sharingOutArea",
   "property": "http://dbpedia.org/ontology/sharingOutArea",
   "label": {
    "en": "sharing out area"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:missionDuration",
   "property": "http://dbpedia.org/ontology/missionDuration",
   "label": {
    "en": "mission duration (s)"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#double",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:modelEndYear",
   "property": "http://dbpedia.org/ontology/modelEndYear",
   "label": {
    "en": "model end year"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#gYear",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:wingArea",
   "property": "http://dbpedia.org/ontology/wingArea",
   "label": {
    "en": "wing area (m2)"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#double",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:linkedSpace",
   "property": "http://dbpedia.org/ontology/linkedSpace",
   "label": {
    "en": "linked space"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:depthQuote",
   "property": "http://dbpedia.org/ontology/depthQuote",
   "label": {
    "en": "depth quote"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:ecNumber",
   "property": "http://dbpedia.org/ontology/ecNumber",
   "label": {
    "en": "EC number",
    "ja": "EC番号"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:imageSize",
   "property": "http://dbpedia.org/ontology/imageSize",
   "label": {
    "el": "μέγεθος εικόνας (px1)",
    "fr": "taille de l'image (px)",
    "en": "image size (px)",
    "ja": "イメージサイズ　(px2)",
    "es": "tamaño de la imagen (px)"
   },
   "description": {
    "en": "the image size expressed in pixels"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#integer",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:kindOfRock",
   "property": "http://dbpedia.org/ontology/kindOfRock",
   "label": {
    "en": "kind of rock"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:iataAirlineCode",
   "property": "http://dbpedia.org/ontology/iataAirlineCode",
   "label": {
    "en": "IATA code"
   },
   "description": {
    "en": "IATA designation for airline companies"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:aSide",
   "property": "http://dbpedia.org/ontology/aSide",
   "label": {
    "en": "a side",
    "el": "εξώφυλλο"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:trackNumber",
   "property": "http://dbpedia.org/ontology/trackNumber",
   "label": {
    "en": "track number",
    "el": "νούμερο τραγουδιού"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#positiveInteger",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:disbanded",
   "property": "http://dbpedia.org/ontology/disbanded",
   "label": {
    "en": "disbanded"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#date",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:crewSize",
   "property": "http://dbpedia.org/ontology/crewSize",
   "label": {
    "en": "crew size"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#nonNegativeInteger",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:lcc",
   "property": "http://dbpedia.org/ontology/lcc",
   "label": {
    "en": "LCC"
   },
   "description": {
    "en": "The Library of Congress Classification (LCC) is a system of library classification developed by the Library of Congress."
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:numberOfLines",
   "property": "http://dbpedia.org/ontology/numberOfLines",
   "label": {
    "en": "number of lines",
    "de": "Anzahl der Linien"
   },
   "description": {
    "en": "Number of lines in the transit system."
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#nonNegativeInteger",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:rightAscension",
   "property": "http://dbpedia.org/ontology/rightAscension",
   "label": {
    "en": "right ascension"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#nonNegativeInteger",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:elevatorCount",
   "property": "http://dbpedia.org/ontology/elevatorCount",
   "label": {
    "en": "elevator count",
    "de": "Aufzüge"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#nonNegativeInteger",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:agency",
   "property": "http://dbpedia.org/ontology/agency",
   "label": {
    "en": "agency"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:serviceEndYear",
   "property": "http://dbpedia.org/ontology/serviceEndYear",
   "label": {
    "en": "service end year"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#gYear",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:albedo",
   "property": "http://dbpedia.org/ontology/albedo",
   "label": {
    "en": "albedo",
    "el": "albedo"
   },
   "description": {
    "en": "reflection coefficient",
    "el": "συντελεστής ανάκλασης"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#double",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:retirementDate",
   "property": "http://dbpedia.org/ontology/retirementDate",
   "label": {
    "en": "retirement date",
    "nl": "pensioendatum"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#date",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:iso31661Code",
   "property": "http://dbpedia.org/ontology/iso31661Code",
   "label": {
    "en": "ISO 3166-1 code"
   },
   "description": {
    "en": "defines codes for the names of countries, dependent territories, and special areas of geographical interest"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:fuelType",
   "property": "http://dbpedia.org/ontology/fuelType",
   "label": {
    "en": "fuel type"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://dbpedia.org/datatype/fuelType",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:oldName",
   "property": "http://dbpedia.org/ontology/oldName",
   "label": {
    "en": "old name"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:numberOfGraduateStudents",
   "property": "http://dbpedia.org/ontology/numberOfGraduateStudents",
   "label": {
    "en": "number of graduate students"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#nonNegativeInteger",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:dutchName",
   "property": "http://dbpedia.org/ontology/dutchName",
   "label": {
    "en": "city dutch name"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:floodingDate",
   "property": "http://dbpedia.org/ontology/floodingDate",
   "label": {
    "en": "flooding date"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#date",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:perCapitaIncome",
   "property": "http://dbpedia.org/ontology/perCapitaIncome",
   "label": {
    "en": "per capita income ($)",
    "pt": "renda per capita ($)"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#double",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:annualTemperature",
   "property": "http://dbpedia.org/ontology/annualTemperature",
   "label": {
    "en": "annual temperature (K)",
    "el": "ετήσια θερμοκρασία (K)",
    "nl": "jaartemperatuur (K)"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#double",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:elevationQuote",
   "property": "http://dbpedia.org/ontology/elevationQuote",
   "label": {
    "en": "elevation quote"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:eloRecord",
   "property": "http://dbpedia.org/ontology/eloRecord",
   "label": {
    "en": "maximum ELO rating"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#nonNegativeInteger",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:measurements",
   "property": "http://dbpedia.org/ontology/measurements",
   "label": {
    "en": "measurements",
    "pt": "medidas"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:firstGame",
   "property": "http://dbpedia.org/ontology/firstGame",
   "label": {
    "en": "first game"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:buildingStartDate",
   "property": "http://dbpedia.org/ontology/buildingStartDate",
   "label": {
    "en": "building start date",
    "el": "Ημερομηνία έναρξης κατασκευής"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#date",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:result",
   "property": "http://dbpedia.org/ontology/result",
   "label": {
    "en": "result",
    "el": "αποτέλεσμα"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:frontierLength",
   "property": "http://dbpedia.org/ontology/frontierLength",
   "label": {
    "en": "length of a frontier"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#float",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:originalMaximumBoatBeam",
   "property": "http://dbpedia.org/ontology/originalMaximumBoatBeam",
   "label": {
    "en": "original maximum boat beam (μ)"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#double",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:phonePrefixLabel",
   "property": "http://dbpedia.org/ontology/phonePrefixLabel",
   "label": {
    "en": "phone prefix label of a settlement"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:drugbank",
   "property": "http://dbpedia.org/ontology/drugbank",
   "label": {
    "en": "DrugBank",
    "ja": "DrugBank"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:otherLanguage",
   "property": "http://dbpedia.org/ontology/otherLanguage",
   "label": {
    "en": "other language of a settlement"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:radius_ly",
   "property": "http://dbpedia.org/ontology/radius_ly",
   "label": {
    "en": "Radius_ly"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#integer",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:numberOfVisitors",
   "property": "http://dbpedia.org/ontology/numberOfVisitors",
   "label": {
    "en": "number of visitors",
    "el": "αριθμός επισκεπτών",
    "nl": "bezoekersaantal"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#nonNegativeInteger",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:shipDisplacement",
   "property": "http://dbpedia.org/ontology/shipDisplacement",
   "label": {
    "en": "displacement (g)"
   },
   "description": {
    "en": "A ship's displacement is its mass at any given time."
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#double",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:runwayDesignation",
   "property": "http://dbpedia.org/ontology/runwayDesignation",
   "label": {
    "en": "designation of runway"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:orbitalPeriod",
   "property": "http://dbpedia.org/ontology/orbitalPeriod",
   "label": {
    "en": "orbital period (s)",
    "el": "Περίοδος περιφοράς (s)"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#double",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:fc",
   "property": "http://dbpedia.org/ontology/fc",
   "label": {
    "en": "FC",
    "fr": "FC"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#nonNegativeInteger",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:wingspan",
   "property": "http://dbpedia.org/ontology/wingspan",
   "label": {
    "en": "wingspan (μ)"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#double",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:englishName",
   "property": "http://dbpedia.org/ontology/englishName",
   "label": {
    "en": "English name"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:lawCountry",
   "property": "http://dbpedia.org/ontology/lawCountry",
   "label": {
    "en": "law country"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:numberOfOfficials",
   "property": "http://dbpedia.org/ontology/numberOfOfficials",
   "label": {
    "en": "number of officials"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#nonNegativeInteger",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:callSign",
   "property": "http://dbpedia.org/ontology/callSign",
   "label": {
    "en": "call sign",
    "pt": "indicativo de chamada"
   },
   "description": {
    "en": "A call sign is not the name of a broadcaster! In broadcasting and radio communications, a call sign (also known as a call name or call letters, or abbreviated as a call) is a unique designation for a transmitting station.",
    "pt": "Indicativo de chamada (também chamado de call-sign, call letters ou simplesmente call) é uma designação única de uma estação de transmissão de rádio. Também é conhecido, de forma errônea, como prefixo."
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:serviceStartYear",
   "property": "http://dbpedia.org/ontology/serviceStartYear",
   "label": {
    "en": "service start year"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#gYear",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:internationalPhonePrefixLabel",
   "property": "http://dbpedia.org/ontology/internationalPhonePrefixLabel",
   "label": {
    "en": "international phone prefix label"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:usk",
   "property": "http://dbpedia.org/ontology/usk",
   "label": {
    "en": "approved rating of the Entertainment Software Self-Regulation Body in Germany"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#integer",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:lastFlightEndDate",
   "property": "http://dbpedia.org/ontology/lastFlightEndDate",
   "label": {
    "en": "last flight end date"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#date",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:numberOfNeighbourhood",
   "property": "http://dbpedia.org/ontology/numberOfNeighbourhood",
   "label": {
    "en": "number of neighbourhood"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#nonNegativeInteger",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:overallRecord",
   "property": "http://dbpedia.org/ontology/overallRecord",
   "label": {
    "en": "overall record"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:bird",
   "property": "http://dbpedia.org/ontology/bird",
   "label": {
    "en": "bird"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:geologicPeriod",
   "property": "http://dbpedia.org/ontology/geologicPeriod",
   "label": {
    "en": "geologic period"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:hairs",
   "property": "http://dbpedia.org/ontology/hairs",
   "label": {
    "en": "hairs"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:flower",
   "property": "http://dbpedia.org/ontology/flower",
   "label": {
    "en": "flower"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:productionStartDate",
   "property": "http://dbpedia.org/ontology/productionStartDate",
   "label": {
    "en": "production start date"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#date",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:rank",
   "property": "http://dbpedia.org/ontology/rank",
   "label": {
    "en": "rank",
    "de": "Platzierung"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#nonNegativeInteger",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:numberOfCounties",
   "property": "http://dbpedia.org/ontology/numberOfCounties",
   "label": {
    "en": "number of counties",
    "pt": "número de condados"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#nonNegativeInteger",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:port2UndockingDate",
   "property": "http://dbpedia.org/ontology/port2UndockingDate",
   "label": {
    "en": "port2 undocking date"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#date",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:commonName",
   "property": "http://dbpedia.org/ontology/commonName",
   "label": {
    "en": "common name"
   },
   "description": {
    "en": "The common name of an entity. Frequently, foaf:name is used for all of the different names of a person; this property just defines the most commonly used name."
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:mergerDate",
   "property": "http://dbpedia.org/ontology/mergerDate",
   "label": {
    "en": "merger date"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#date",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:fareZone",
   "property": "http://dbpedia.org/ontology/fareZone",
   "label": {
    "en": "fare zone",
    "de": "Tarifzone"
   },
   "description": {
    "en": "The fare zone in which station is located.",
    "de": "Die Tarifzone zu der die Station gehört."
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:municipalityCode",
   "property": "http://dbpedia.org/ontology/municipalityCode",
   "label": {
    "en": "municipality code",
    "nl": "gemeente-code"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:suppreddedDate",
   "property": "http://dbpedia.org/ontology/suppreddedDate",
   "label": {
    "en": "suppredded date",
    "nl": "oppressie datum"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#date",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:istat",
   "property": "http://dbpedia.org/ontology/istat",
   "label": {
    "en": "code istat"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:extinctionYear",
   "property": "http://dbpedia.org/ontology/extinctionYear",
   "label": {
    "en": "extinction year"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#gYear",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:dateOfAbandonment",
   "property": "http://dbpedia.org/ontology/dateOfAbandonment",
   "label": {
    "en": "date of abandonment"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#date",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:launchDate",
   "property": "http://dbpedia.org/ontology/launchDate",
   "label": {
    "en": "launch date"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#date",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:feastDay",
   "property": "http://dbpedia.org/ontology/feastDay",
   "label": {
    "en": "feast day",
    "nl": "feestdag"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#date",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:functionStartDate",
   "property": "http://dbpedia.org/ontology/functionStartDate",
   "label": {
    "en": "function start date"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#date",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:hraState",
   "property": "http://dbpedia.org/ontology/hraState",
   "label": {
    "en": "hra state"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:governmentElevation",
   "property": "http://dbpedia.org/ontology/governmentElevation",
   "label": {
    "en": "government elevation (μ)"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#double",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:visitorsTotal",
   "property": "http://dbpedia.org/ontology/visitorsTotal",
   "label": {
    "en": "visitors total",
    "el": "επιβατική κίνηση"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#nonNegativeInteger",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:currentSeason",
   "property": "http://dbpedia.org/ontology/currentSeason",
   "label": {
    "en": "current season",
    "el": "Τρέχον Περίοδος"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:otherChannel",
   "property": "http://dbpedia.org/ontology/otherChannel",
   "label": {
    "en": "other channel"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:isPartOfRoute",
   "property": "http://dbpedia.org/ontology/isPartOfRoute",
   "label": {
    "en": "is part of route"
   },
   "description": {
    "en": "Name of another route from which the route is part of. Infobox property values are mostly given as plain text, therefore range is xsd:string."
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:numberOfIslands",
   "property": "http://dbpedia.org/ontology/numberOfIslands",
   "label": {
    "en": "number of islands",
    "el": "αριθμός νησιών",
    "nl": "aantal eilanden"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#nonNegativeInteger",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:refgeo",
   "property": "http://dbpedia.org/ontology/refgeo",
   "label": {
    "en": "reference for geographic data"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:abstract",
   "property": "http://dbpedia.org/ontology/abstract",
   "label": {
    "en": "has abstract",
    "el": "έχει περίληψη"
   },
   "description": {
    "en": "Reserved for DBpedia.",
    "el": "Προορίζεται για την DBpedia."
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:floorArea",
   "property": "http://dbpedia.org/ontology/floorArea",
   "label": {
    "en": "floor area (m2)",
    "nl": "vloeroppervlak (m2)",
    "el": "περιοχή ορόφων (m2)"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#double",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:serviceStartDate",
   "property": "http://dbpedia.org/ontology/serviceStartDate",
   "label": {
    "en": "service start date"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#date",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:apskritis",
   "property": "http://dbpedia.org/ontology/apskritis",
   "label": {
    "en": "apskritis"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:demonym",
   "property": "http://dbpedia.org/ontology/demonym",
   "label": {
    "en": "demonym",
    "el": "τοπονύμιο_πληθυσμού",
    "fr": "démonyme",
    "nl": "naam bevolkingsgroep"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:mapCaption",
   "property": "http://dbpedia.org/ontology/mapCaption",
   "label": {
    "en": "map caption"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:firstLaunch",
   "property": "http://dbpedia.org/ontology/firstLaunch",
   "label": {
    "en": "first launch"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#date",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:maximumInclination",
   "property": "http://dbpedia.org/ontology/maximumInclination",
   "label": {
    "en": "maximum inclination"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#float",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:maximumDischarge",
   "property": "http://dbpedia.org/ontology/maximumDischarge",
   "label": {
    "en": "maximum discharge (m³/s)"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#double",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:allegiance",
   "property": "http://dbpedia.org/ontology/allegiance",
   "label": {
    "en": "allegiance",
    "el": "υποταγή"
   },
   "description": {
    "en": "The country or other power the person served. Multiple countries may be indicated together with the corresponding dates. This field should not be used to indicate a particular service branch, which is better indicated by the branch field."
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:termOfOffice",
   "property": "http://dbpedia.org/ontology/termOfOffice",
   "label": {
    "en": "term of office"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:numberOfVineyards",
   "property": "http://dbpedia.org/ontology/numberOfVineyards",
   "label": {
    "en": "number of vineyards"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#nonNegativeInteger",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:rotationPeriod",
   "property": "http://dbpedia.org/ontology/rotationPeriod",
   "label": {
    "en": "rotation period (s)"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#double",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:activeYearsEndDate",
   "property": "http://dbpedia.org/ontology/activeYearsEndDate",
   "label": {
    "en": "active years end date",
    "el": "ενεργή ημερομηνία λήξης χρόνου",
    "nl": "actieve jaren einddatum"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#date",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:careerPrizeMoney",
   "property": "http://dbpedia.org/ontology/careerPrizeMoney",
   "label": {
    "en": "career prize money ($)",
    "nl": "prijzengeld loopbaan ($)"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#double",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:numberOfCollectionItems",
   "property": "http://dbpedia.org/ontology/numberOfCollectionItems",
   "label": {
    "en": "number of items in collection",
    "nl": "aantal titels/items"
   },
   "description": {
    "en": "Indication as to the size of the collection of this library",
    "nl": "Aanduiding van omvang van de collectie van deze bibliotheek"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#integer",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:signName",
   "property": "http://dbpedia.org/ontology/signName",
   "label": {
    "en": "sign name of a hungarian settlement"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:unlcCode",
   "property": "http://dbpedia.org/ontology/unlcCode",
   "label": {
    "en": "unlc code"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:musicalKey",
   "property": "http://dbpedia.org/ontology/musicalKey",
   "label": {
    "en": "musical key",
    "el": "μουσικό κλειδί",
    "nl": "toonsoort"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:airDate",
   "property": "http://dbpedia.org/ontology/airDate",
   "label": {
    "en": "airdate",
    "el": "ημερομηνία αέρα"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#date",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:activeYearsStartYear",
   "property": "http://dbpedia.org/ontology/activeYearsStartYear",
   "label": {
    "en": "active years start year",
    "el": "ενεργός χρόνος έτος λειτουργίας",
    "nl": "actieve jaren start jaar"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#gYear",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:office",
   "property": "http://dbpedia.org/ontology/office",
   "label": {
    "en": "office",
    "el": "υπηρεσία",
    "de": "Büro"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:numberOfSuites",
   "property": "http://dbpedia.org/ontology/numberOfSuites",
   "label": {
    "en": "number of suites"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#nonNegativeInteger",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:temperature",
   "property": "http://dbpedia.org/ontology/temperature",
   "label": {
    "en": "temperature (K)",
    "el": "θερμοκρασία (K)",
    "fr": "température (K)"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#double",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:information",
   "property": "http://dbpedia.org/ontology/information",
   "label": {
    "en": "information"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:numberOfNewlyIntroducedSports",
   "property": "http://dbpedia.org/ontology/numberOfNewlyIntroducedSports",
   "label": {
    "en": "number of newly introduced sports",
    "fr": "numbre de sports nouvellement ajoutés",
    "es": "numero de deportes nuevamente añadidos"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#nonNegativeInteger",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:originalTitle",
   "property": "http://dbpedia.org/ontology/originalTitle",
   "label": {
    "en": "original title",
    "nl": "oorspronkelijke titel"
   },
   "description": {
    "en": "The original title of the work, most of the time in the original language as well"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:muteCharacterInPlay",
   "property": "http://dbpedia.org/ontology/muteCharacterInPlay",
   "label": {
    "en": "mute character in play"
   },
   "description": {
    "en": "Name of a mute character in play."
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:filmPolskiId",
   "property": "http://dbpedia.org/ontology/filmPolskiId",
   "label": {
    "en": "FilmPolski.pl id"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:campusType",
   "property": "http://dbpedia.org/ontology/campusType",
   "label": {
    "en": "campus type"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:blueSkiPisteNumber",
   "property": "http://dbpedia.org/ontology/blueSkiPisteNumber",
   "label": {
    "en": "blue ski piste number"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#nonNegativeInteger",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:geneLocationStart",
   "property": "http://dbpedia.org/ontology/geneLocationStart",
   "label": {
    "en": "gene location start",
    "ja": "遺伝子座のスタート座標"
   },
   "description": {
    "en": "the start of the gene coordinates"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#integer",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:capitalCoordinates",
   "property": "http://dbpedia.org/ontology/capitalCoordinates",
   "label": {
    "en": "capital coordinates"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:casSupplemental",
   "property": "http://dbpedia.org/ontology/casSupplemental",
   "label": {
    "en": "CAS supplemental"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:canonizedDate",
   "property": "http://dbpedia.org/ontology/canonizedDate",
   "label": {
    "en": "canonized date",
    "nl": "heiligverklaring datum"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#date",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:licenceLetter",
   "property": "http://dbpedia.org/ontology/licenceLetter",
   "label": {
    "en": "licence letter of a german settlement"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:alemmanicName",
   "property": "http://dbpedia.org/ontology/alemmanicName",
   "label": {
    "en": "city allemmanic name"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:latestReleaseVersion",
   "property": "http://dbpedia.org/ontology/latestReleaseVersion",
   "label": {
    "en": "latest release version"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:medlineplus",
   "property": "http://dbpedia.org/ontology/medlineplus",
   "label": {
    "en": "MedlinePlus",
    "nl": "MedlinePlus"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:gagaouze",
   "property": "http://dbpedia.org/ontology/gagaouze",
   "label": {
    "en": "gagaouze"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:espnId",
   "property": "http://dbpedia.org/ontology/espnId",
   "label": {
    "en": "ESPN id"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#integer",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:retired",
   "property": "http://dbpedia.org/ontology/retired",
   "label": {
    "en": "retired",
    "el": "συνταξιούχος"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#date",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:numberOfCapitalDeputies",
   "property": "http://dbpedia.org/ontology/numberOfCapitalDeputies",
   "label": {
    "en": "Number Of Capital Deputies",
    "pt": "numero de deputados distritais"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#nonNegativeInteger",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:areaOfCatchmentQuote",
   "property": "http://dbpedia.org/ontology/areaOfCatchmentQuote",
   "label": {
    "en": "area of catchment quote"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:premiereYear",
   "property": "http://dbpedia.org/ontology/premiereYear",
   "label": {
    "en": "premiere year"
   },
   "description": {
    "en": "Year the play was first performed."
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#gYear",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:mainBuilding",
   "property": "http://dbpedia.org/ontology/mainBuilding",
   "label": {
    "en": "main building",
    "ja": "本殿"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:bowlRecord",
   "property": "http://dbpedia.org/ontology/bowlRecord",
   "label": {
    "en": "bowl record",
    "el": "ρεκόρ μπόουλινγκ"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:height",
   "property": "http://dbpedia.org/ontology/height",
   "label": {
    "el": "ύψος (μ)",
    "fr": "hauteur (μ)",
    "en": "height (μ)",
    "ja": "身長 (μ)",
    "nl": "hoogte (μ)",
    "sl": "višina (μ)",
    "pt": "altura (μ)",
    "de": "Höhe (μ)"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#double",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:flagBorder",
   "property": "http://dbpedia.org/ontology/flagBorder",
   "label": {
    "en": "flag border"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:refseqmrna",
   "property": "http://dbpedia.org/ontology/refseqmrna",
   "label": {
    "en": "refseq mRNA",
    "ja": "refseq mRNA"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:distanceToCapital",
   "property": "http://dbpedia.org/ontology/distanceToCapital",
   "label": {
    "el": "απόσταση από την πρωτεύουσα (μ)",
    "en": "distance to capital (μ)",
    "it": "distanza alla capitale (μ)",
    "pt": "distância até a capital (μ)",
    "de": "entfernung zur hauptstadt (μ)"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#double",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:originalMaximumBoatLength",
   "property": "http://dbpedia.org/ontology/originalMaximumBoatLength",
   "label": {
    "en": "original maximum boat length (μ)"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#double",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:meshNumber",
   "property": "http://dbpedia.org/ontology/meshNumber",
   "label": {
    "en": "MeSH number"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:declination",
   "property": "http://dbpedia.org/ontology/declination",
   "label": {
    "en": "declination"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#nonNegativeInteger",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:forces",
   "property": "http://dbpedia.org/ontology/forces",
   "label": {
    "fr": "forces",
    "en": "forces"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:authorityMandate",
   "property": "http://dbpedia.org/ontology/authorityMandate",
   "label": {
    "en": "authority mandate"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:ruling",
   "property": "http://dbpedia.org/ontology/ruling",
   "label": {
    "en": "ruling",
    "nl": "relevante regelgeving"
   },
   "description": {
    "en": "Ruling referred to in this legal case"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:contractAward",
   "property": "http://dbpedia.org/ontology/contractAward",
   "label": {
    "en": "contract award"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#date",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:budgetYear",
   "property": "http://dbpedia.org/ontology/budgetYear",
   "label": {
    "en": "budget year"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:rgbCoordinateRed",
   "property": "http://dbpedia.org/ontology/rgbCoordinateRed",
   "label": {
    "en": "red coordinate in the RGB space"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#nonNegativeInteger",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:legalArrondissement",
   "property": "http://dbpedia.org/ontology/legalArrondissement",
   "label": {
    "en": "legal arrondissement"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:hallOfFame",
   "property": "http://dbpedia.org/ontology/hallOfFame",
   "label": {
    "en": "hall of fame"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:eurobabeIndexId",
   "property": "http://dbpedia.org/ontology/eurobabeIndexId",
   "label": {
    "en": "eurobabe index id",
    "el": "eurobabeindex id",
    "pt": "código no eurobabeindex"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:millsCodeBE",
   "property": "http://dbpedia.org/ontology/millsCodeBE",
   "label": {
    "en": "mill code BE",
    "nl": "molen code BE"
   },
   "description": {
    "en": "mills code from the Belgian database on mills",
    "nl": "unieke code voor molens in database www.molenechos.org"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:endowment",
   "property": "http://dbpedia.org/ontology/endowment",
   "label": {
    "en": "endowment ($)"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#double",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:totalCargo",
   "property": "http://dbpedia.org/ontology/totalCargo",
   "label": {
    "en": "total cargo (g)"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#double",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:tvComId",
   "property": "http://dbpedia.org/ontology/tvComId",
   "label": {
    "en": "tv.com id"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#integer",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:greenSkiPisteNumber",
   "property": "http://dbpedia.org/ontology/greenSkiPisteNumber",
   "label": {
    "en": "green ski piste number"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#nonNegativeInteger",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:statisticValue",
   "property": "http://dbpedia.org/ontology/statisticValue",
   "label": {
    "en": "statistic value"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#float",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:watershed",
   "property": "http://dbpedia.org/ontology/watershed",
   "label": {
    "en": "watershed (m2)",
    "nl": "waterscheiding (m2)",
    "es": "cuenca hidrográfica (m2)",
    "el": "λεκάνη_απορροής (m2)"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#double",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:credit",
   "property": "http://dbpedia.org/ontology/credit",
   "label": {
    "en": "credit"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:christeningDate",
   "property": "http://dbpedia.org/ontology/christeningDate",
   "label": {
    "en": "date of christening",
    "nl": "doopdatum"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#date",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:numberOfSilverMedalsWon",
   "property": "http://dbpedia.org/ontology/numberOfSilverMedalsWon",
   "label": {
    "en": "number of silver medals won",
    "fr": "nomber de médailles d'argent gagnées",
    "es": "cantidad de medallas de plata ganadas"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#nonNegativeInteger",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:draft",
   "property": "http://dbpedia.org/ontology/draft",
   "label": {
    "en": "draft",
    "de": "Entwurf"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:topSpeed",
   "property": "http://dbpedia.org/ontology/topSpeed",
   "label": {
    "en": "top speed (kmh)",
    "de": "Höchstgeschwindigkeit (kmh)"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#double",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:numberOfTerritories",
   "property": "http://dbpedia.org/ontology/numberOfTerritories",
   "label": {
    "en": "number of territories",
    "pt": "número de territórios"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#positiveInteger",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:year",
   "property": "http://dbpedia.org/ontology/year",
   "label": {
    "el": "έτος",
    "fr": "année",
    "en": "year",
    "it": "anno",
    "nl": "jaar",
    "es": "año",
    "de": "Jahr"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#gYear",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:startYearOfInsertion",
   "property": "http://dbpedia.org/ontology/startYearOfInsertion",
   "label": {
    "en": "start year of insertion"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#gYear",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:procedure",
   "property": "http://dbpedia.org/ontology/procedure",
   "label": {
    "en": "procedure",
    "nl": "procedure"
   },
   "description": {
    "en": "The name designating a formal collection of steps to be taken to complete the case",
    "nl": "De naam die verwijst naar de formele definitie van een verzameling stappen die in de juiste volgorde leiden tot de afronding van de zaak"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:mainIslands",
   "property": "http://dbpedia.org/ontology/mainIslands",
   "label": {
    "en": "main islands"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:periapsis",
   "property": "http://dbpedia.org/ontology/periapsis",
   "label": {
    "en": "periapsis (μ)"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#double",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:europeanUnionEntranceDate",
   "property": "http://dbpedia.org/ontology/europeanUnionEntranceDate",
   "label": {
    "en": "european union entrance date",
    "pt": "data de entrada na uniao europeia"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#date",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:priceMoney",
   "property": "http://dbpedia.org/ontology/priceMoney",
   "label": {
    "en": "price money ($)",
    "de": "Preisgeld ($)"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#double",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:moldavianName",
   "property": "http://dbpedia.org/ontology/moldavianName",
   "label": {
    "en": "moldavian name"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:distanceToDouglas",
   "property": "http://dbpedia.org/ontology/distanceToDouglas",
   "label": {
    "en": "distance to Douglas (μ)",
    "el": "απόσταση από το Douglas (μ)"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#double",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:penaltiesTeamA",
   "property": "http://dbpedia.org/ontology/penaltiesTeamA",
   "label": {
    "en": "Penalties Team A"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:diploma",
   "property": "http://dbpedia.org/ontology/diploma",
   "label": {
    "en": "diploma"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:flora",
   "property": "http://dbpedia.org/ontology/flora",
   "label": {
    "en": "flora"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:signature",
   "property": "http://dbpedia.org/ontology/signature",
   "label": {
    "en": "signature"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:coronationDate",
   "property": "http://dbpedia.org/ontology/coronationDate",
   "label": {
    "en": "coronation date",
    "nl": "kroningsdatum"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#date",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:cosparId",
   "property": "http://dbpedia.org/ontology/cosparId",
   "label": {
    "en": "COSPAR id"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#integer",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:visitorsPerDay",
   "property": "http://dbpedia.org/ontology/visitorsPerDay",
   "label": {
    "en": "visitors per day",
    "de": "Besucher pro Tag"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#nonNegativeInteger",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:alternativeTitle",
   "property": "http://dbpedia.org/ontology/alternativeTitle",
   "label": {
    "en": "alternative title",
    "nl": "alternatieve titel"
   },
   "description": {
    "en": "The alternative title attributed to a work"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:localizationThumbnailCaption",
   "property": "http://dbpedia.org/ontology/localizationThumbnailCaption",
   "label": {
    "en": "legend thumbnail localization"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:presidentGeneralCouncilMandate",
   "property": "http://dbpedia.org/ontology/presidentGeneralCouncilMandate",
   "label": {
    "en": "mandate of the president of the general council"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:gross",
   "property": "http://dbpedia.org/ontology/gross",
   "label": {
    "en": "gross ($)",
    "el": "ακαθάριστα ($)"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#double",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:broadcastTranslator",
   "property": "http://dbpedia.org/ontology/broadcastTranslator",
   "label": {
    "en": "broadcast translator",
    "el": "αναμετάδοση μεταφραστή"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:dateLastUpdated",
   "property": "http://dbpedia.org/ontology/dateLastUpdated",
   "label": {
    "en": "Date Last Updated"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#date",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:runwaySurface",
   "property": "http://dbpedia.org/ontology/runwaySurface",
   "label": {
    "en": "surface of runway"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:birthYear",
   "property": "http://dbpedia.org/ontology/birthYear",
   "label": {
    "el": "έτος γέννησης",
    "en": "birth year",
    "ja": "生年",
    "nl": "geboortejaar",
    "de": "Geburtsjahr"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#gYear",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:council",
   "property": "http://dbpedia.org/ontology/council",
   "label": {
    "en": "council of a liechtenstein settlement"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:headLabel",
   "property": "http://dbpedia.org/ontology/headLabel",
   "label": {
    "en": "head label"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:continentRank",
   "property": "http://dbpedia.org/ontology/continentRank",
   "label": {
    "en": "continent rank",
    "de": "Rang Kontinent"
   },
   "description": {
    "en": "Place of the building in the list of the highest buildings in the continent",
    "de": "Der Platz des Gebäudes in der Liste der höchsten Gebäude des Kontinents"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#nonNegativeInteger",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:hgncid",
   "property": "http://dbpedia.org/ontology/hgncid",
   "label": {
    "en": "HGNCid",
    "ja": "HGNCid"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:lengthQuote",
   "property": "http://dbpedia.org/ontology/lengthQuote",
   "label": {
    "en": "length quote"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:tuition",
   "property": "http://dbpedia.org/ontology/tuition",
   "label": {
    "en": "tuition ($)"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#double",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:numberOfPages",
   "property": "http://dbpedia.org/ontology/numberOfPages",
   "label": {
    "en": "number of pages",
    "nl": "aantal pagina's",
    "de": "Anzahl der Seiten"
   },
   "description": {
    "en": "The books number of pages."
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#positiveInteger",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:zipCode",
   "property": "http://dbpedia.org/ontology/zipCode",
   "label": {
    "en": "zip code",
    "nl": "postcode"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:individualisedPnd",
   "property": "http://dbpedia.org/ontology/individualisedPnd",
   "label": {
    "en": "individualised PND number",
    "de": "Personennamendatei"
   },
   "description": {
    "en": "PND (Personennamendatei) data about a person. PND is published by the German National Library. For each person there is a record with her/his name, birth and occupation connected with a unique identifier, the PND number."
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#nonNegativeInteger",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:notableFeatures",
   "property": "http://dbpedia.org/ontology/notableFeatures",
   "label": {
    "en": "notable features",
    "tr": "notlar"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:militaryGovernment",
   "property": "http://dbpedia.org/ontology/militaryGovernment",
   "label": {
    "en": "military government"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:provinceIsoCode",
   "property": "http://dbpedia.org/ontology/provinceIsoCode",
   "label": {
    "en": "iso code of a province"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:discharge",
   "property": "http://dbpedia.org/ontology/discharge",
   "label": {
    "en": "discharge (m³/s)",
    "el": "εκροή (m³/s)",
    "nl": "uitstoot (m³/s)"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#double",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:regionIsoCode",
   "property": "http://dbpedia.org/ontology/regionIsoCode",
   "label": {
    "en": "iso code of a region"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:suborbitalFlights",
   "property": "http://dbpedia.org/ontology/suborbitalFlights",
   "label": {
    "en": "suborbital flights"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#nonNegativeInteger",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:networth",
   "property": "http://dbpedia.org/ontology/networth",
   "label": {
    "en": "networth ($)"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#double",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:numberOfOrbits",
   "property": "http://dbpedia.org/ontology/numberOfOrbits",
   "label": {
    "en": "number of orbits"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#nonNegativeInteger",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:deathDate",
   "property": "http://dbpedia.org/ontology/deathDate",
   "label": {
    "el": "ημερομηνία_θανάτου",
    "fr": "date de décès",
    "en": "death date",
    "ja": "没年月日",
    "nl": "sterfdatum",
    "de": "Sterbedatum"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#date",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:barPassRate",
   "property": "http://dbpedia.org/ontology/barPassRate",
   "label": {
    "en": "bar pass rate",
    "el": "ποσοστό επιτυχίας"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#float",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:numberOfUndergraduateStudents",
   "property": "http://dbpedia.org/ontology/numberOfUndergraduateStudents",
   "label": {
    "en": "number of undergraduate students"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#nonNegativeInteger",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:strength",
   "property": "http://dbpedia.org/ontology/strength",
   "label": {
    "en": "strength",
    "el": "δύναμη"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:circuitName",
   "property": "http://dbpedia.org/ontology/circuitName",
   "label": {
    "en": "circuit name"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:rankAgreement",
   "property": "http://dbpedia.org/ontology/rankAgreement",
   "label": {
    "en": "rank of an agreement"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#nonNegativeInteger",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:officialSchoolColour",
   "property": "http://dbpedia.org/ontology/officialSchoolColour",
   "label": {
    "en": "official school colour",
    "de": "offizielle Schulfarbe"
   },
   "description": {
    "en": "The official colour of the EducationalInstitution represented by the colour name (e.g.: red or green)."
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:officialName",
   "property": "http://dbpedia.org/ontology/officialName",
   "label": {
    "en": "official name of a switzerland settlement"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:vehicleCode",
   "property": "http://dbpedia.org/ontology/vehicleCode",
   "label": {
    "de": "KFZ-Kennzeichen",
    "en": "vehicle code",
    "nl": "voertuig code"
   },
   "description": {
    "en": "Region related vehicle code on the vehicle plates."
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:ageRange",
   "property": "http://dbpedia.org/ontology/ageRange",
   "label": {
    "en": "age range",
    "el": "εύρος ηλικίας"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#nonNegativeInteger",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:retentionTime",
   "property": "http://dbpedia.org/ontology/retentionTime",
   "label": {
    "en": "relation time"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:fauna",
   "property": "http://dbpedia.org/ontology/fauna",
   "label": {
    "en": "fauna",
    "nl": "fauna"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:fcRuns",
   "property": "http://dbpedia.org/ontology/fcRuns",
   "label": {
    "en": "FC runs"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#nonNegativeInteger",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:fuelCapacity",
   "property": "http://dbpedia.org/ontology/fuelCapacity",
   "label": {
    "en": "fuel capacity (μ³)"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#double",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:layingDown",
   "property": "http://dbpedia.org/ontology/layingDown",
   "label": {
    "en": "laying down"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#date",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:numberOfStateDeputies",
   "property": "http://dbpedia.org/ontology/numberOfStateDeputies",
   "label": {
    "en": "Number Of State Deputies",
    "pt": "numero de deputados estaduais"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#nonNegativeInteger",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:locationIdentifier",
   "property": "http://dbpedia.org/ontology/locationIdentifier",
   "label": {
    "en": "Location Identifier"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:summerTemperature",
   "property": "http://dbpedia.org/ontology/summerTemperature",
   "label": {
    "en": "summer temperature (K)"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#double",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:rocketStages",
   "property": "http://dbpedia.org/ontology/rocketStages",
   "label": {
    "en": "number of rocket stages"
   },
   "description": {
    "en": "number of stages, not including boosters"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#nonNegativeInteger",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:testaverage",
   "property": "http://dbpedia.org/ontology/testaverage",
   "label": {
    "en": "testaverage"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#float",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:supplementalDraftRound",
   "property": "http://dbpedia.org/ontology/supplementalDraftRound",
   "label": {
    "en": "supplemental draft round"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:acquirementDate",
   "property": "http://dbpedia.org/ontology/acquirementDate",
   "label": {
    "en": "date of acquirement",
    "el": "ημερομηνία απόκτησης"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#date",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:dutchMIPCode",
   "property": "http://dbpedia.org/ontology/dutchMIPCode",
   "label": {
    "en": "monument code for the Monuments Inventory Project",
    "nl": "monumentcode voor het Monumenten Inventarisatie Project"
   },
   "description": {
    "en": "The Dutch MIP project was meant to take stock of all kinds of monuments",
    "nl": "Code voor alle soorten monumenten gebezigd door het MI-project"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:giniCoefficient",
   "property": "http://dbpedia.org/ontology/giniCoefficient",
   "label": {
    "en": "gini coefficient",
    "pt": "coeficiente de Gini"
   },
   "description": {
    "en": "is a measure of the inequality of a distribution. It is commonly used as a measure of inequality of income or wealth."
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#float",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:spacewalkBegin",
   "property": "http://dbpedia.org/ontology/spacewalkBegin",
   "label": {
    "en": "spacewalk begin"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#date",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:command",
   "property": "http://dbpedia.org/ontology/command",
   "label": {
    "en": "command"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:nationalTopographicSystemMapNumber",
   "property": "http://dbpedia.org/ontology/nationalTopographicSystemMapNumber",
   "label": {
    "en": "National Topographic System map number"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:freeLabel",
   "property": "http://dbpedia.org/ontology/freeLabel",
   "label": {
    "en": "freeLabel"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:percentageOfAreaWater",
   "property": "http://dbpedia.org/ontology/percentageOfAreaWater",
   "label": {
    "en": "percentage of area water",
    "el": "ποσοστό_υδάτων",
    "nl": "percentage wateroppervlak"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#float",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:totalPopulation",
   "property": "http://dbpedia.org/ontology/totalPopulation",
   "label": {
    "en": "total population"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#nonNegativeInteger",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:latestPreviewVersion",
   "property": "http://dbpedia.org/ontology/latestPreviewVersion",
   "label": {
    "en": "latest preview version"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:numberOfPeopleLicensed",
   "property": "http://dbpedia.org/ontology/numberOfPeopleLicensed",
   "label": {
    "en": "number of licensed",
    "fr": "nombre de licenciés"
   },
   "description": {
    "en": "nombre de personnes ayant une license pour pratiquer cette activité"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#nonNegativeInteger",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:fipsCode",
   "property": "http://dbpedia.org/ontology/fipsCode",
   "label": {
    "en": "fips code"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:port2DockedTime",
   "property": "http://dbpedia.org/ontology/port2DockedTime",
   "label": {
    "en": "port2 docked time (s)"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#double",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:cmykCoordinateMagenta",
   "property": "http://dbpedia.org/ontology/cmykCoordinateMagenta",
   "label": {
    "en": "magenta coordinate in the CMYK space"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#integer",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:tamazightSettlementName",
   "property": "http://dbpedia.org/ontology/tamazightSettlementName",
   "label": {
    "en": "tamazight settlement name"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:distanceTraveled",
   "property": "http://dbpedia.org/ontology/distanceTraveled",
   "label": {
    "en": "distance traveled (μ)",
    "nl": "afgelegde afstand (μ)"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#double",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:totalTravellers",
   "property": "http://dbpedia.org/ontology/totalTravellers",
   "label": {
    "en": "total travellers"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#nonNegativeInteger",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:podiums",
   "property": "http://dbpedia.org/ontology/podiums",
   "label": {
    "en": "podiums"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#nonNegativeInteger",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:seatingCapacity",
   "property": "http://dbpedia.org/ontology/seatingCapacity",
   "label": {
    "en": "seating capacity",
    "nl": "zitplaatsen"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#nonNegativeInteger",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:distanceToLondon",
   "property": "http://dbpedia.org/ontology/distanceToLondon",
   "label": {
    "en": "distance to London (μ)",
    "el": "απόσταση από το Λονδίνο (μ)"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#double",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:age",
   "property": "http://dbpedia.org/ontology/age",
   "label": {
    "en": "age",
    "el": "ηλικία"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#integer",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:amgid",
   "property": "http://dbpedia.org/ontology/amgid",
   "label": {
    "en": "amgId"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:numberOfVehicles",
   "property": "http://dbpedia.org/ontology/numberOfVehicles",
   "label": {
    "en": "number of vehicles",
    "de": "Anzahl der Fahrzeuge"
   },
   "description": {
    "en": "Number of vehicles used in the transit system."
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#nonNegativeInteger",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:foundingDate",
   "property": "http://dbpedia.org/ontology/foundingDate",
   "label": {
    "el": "ημερομηνία ίδρυσης",
    "en": "founding date",
    "ja": "創立日",
    "pl": "data założenia",
    "de": "Gründungsdatum"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#date",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:effectiveRadiatedPower",
   "property": "http://dbpedia.org/ontology/effectiveRadiatedPower",
   "label": {
    "en": "effectiveRadiatedPower (W)"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#double",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:groupCommemorated",
   "property": "http://dbpedia.org/ontology/groupCommemorated",
   "label": {
    "en": "group commemorated",
    "nl": "groep mensen herdacht"
   },
   "description": {
    "en": "Designates the category of people commemorated by a monument",
    "nl": "Aanduiding van de categorie mensen die door dit monument worden herdacht"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:atcSupplemental",
   "property": "http://dbpedia.org/ontology/atcSupplemental",
   "label": {
    "en": "ATC supplemental",
    "el": "ATC συμπληρωματικό"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:mandate",
   "property": "http://dbpedia.org/ontology/mandate",
   "label": {
    "en": "political mandate"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:latestReleaseDate",
   "property": "http://dbpedia.org/ontology/latestReleaseDate",
   "label": {
    "en": "latest release date",
    "fr": "date de dernière version"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#date",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:crews",
   "property": "http://dbpedia.org/ontology/crews",
   "label": {
    "en": "crews"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#nonNegativeInteger",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:totalMass",
   "property": "http://dbpedia.org/ontology/totalMass",
   "label": {
    "en": "total mass (g)"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#double",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:notifyDate",
   "property": "http://dbpedia.org/ontology/notifyDate",
   "label": {
    "en": "notify date"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#date",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:cuisine",
   "property": "http://dbpedia.org/ontology/cuisine",
   "label": {
    "en": "cuisine",
    "nl": "keuken",
    "el": "κουζίνα",
    "fr": "cuisine"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:demographicsAsOf",
   "property": "http://dbpedia.org/ontology/demographicsAsOf",
   "label": {
    "en": "demographics as of",
    "pt": "indicadores demograficos em"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#date",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:editorTitle",
   "property": "http://dbpedia.org/ontology/editorTitle",
   "label": {
    "en": "editor title",
    "el": "τίτλος συντάκτη"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:committee",
   "property": "http://dbpedia.org/ontology/committee",
   "label": {
    "en": "committee"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:unitCost",
   "property": "http://dbpedia.org/ontology/unitCost",
   "label": {
    "en": "unit cost ($)"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#double",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:atcSuffix",
   "property": "http://dbpedia.org/ontology/atcSuffix",
   "label": {
    "en": "ATC suffix",
    "el": "ATC κατάληξη",
    "fr": "suffix ATC"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:managementElevation",
   "property": "http://dbpedia.org/ontology/managementElevation",
   "label": {
    "en": "management elevation (μ)"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#double",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:bustSize",
   "property": "http://dbpedia.org/ontology/bustSize",
   "label": {
    "en": "bust size (μ)",
    "el": "Μέγεθος προτομής (μ)",
    "ja": "バスト (μ)"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#double",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:italianName",
   "property": "http://dbpedia.org/ontology/italianName",
   "label": {
    "en": "city italian name"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:sharingOut",
   "property": "http://dbpedia.org/ontology/sharingOut",
   "label": {
    "en": "sharing out"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:work",
   "property": "http://dbpedia.org/ontology/work",
   "label": {
    "en": "work"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:phonePrefixName",
   "property": "http://dbpedia.org/ontology/phonePrefixName",
   "label": {
    "en": "phone prefix name"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:averageClassSize",
   "property": "http://dbpedia.org/ontology/averageClassSize",
   "label": {
    "en": "average class size",
    "el": "μέσο μέγεθος τάξης"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#float",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:affair",
   "property": "http://dbpedia.org/ontology/affair",
   "label": {
    "en": "affair"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:passengersPerYear",
   "property": "http://dbpedia.org/ontology/passengersPerYear",
   "label": {
    "en": "passengers per year",
    "nl": "passagiers per jaar",
    "de": "Passagiere pro Jahr"
   },
   "description": {
    "en": "Number of passengers per year."
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#nonNegativeInteger",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:routeEndDirection",
   "property": "http://dbpedia.org/ontology/routeEndDirection",
   "label": {
    "en": "road end direction",
    "de": "Himmelsrichtung des Wegendes"
   },
   "description": {
    "en": "End of the route. The opposite of OntologyProperty:routeStartDirection.",
    "de": "Himmelsrichtung des Endes des Verkehrsweges. Der Gegensatz zur OntologyProperty:routeStartDirection."
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:averageDepth",
   "property": "http://dbpedia.org/ontology/averageDepth",
   "label": {
    "en": "average depth"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:alpsSoiusaCode",
   "property": "http://dbpedia.org/ontology/alpsSoiusaCode",
   "label": {
    "en": "Alps SOIUSA code",
    "el": "κώδικας SOIUSA των άλπεων",
    "it": "codice SOIUSA"
   },
   "description": {
    "en": "the Alps SOIUSA code corresponding to the mountain, according to the SOIUSA classification"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:cmykCoordinateYellow",
   "property": "http://dbpedia.org/ontology/cmykCoordinateYellow",
   "label": {
    "en": "yellow coordinate in the CMYK space"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#integer",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:codeProvincialMonument",
   "property": "http://dbpedia.org/ontology/codeProvincialMonument",
   "label": {
    "en": "monument code (provinciall)",
    "nl": "monumentcode provinciale monumenten"
   },
   "description": {
    "en": "Code is too general. We should be able to distinguish status types since different codes refer to different protection regimes",
    "nl": "Code is te algemeen. We moeten soorten codes kunnen onderscheiden al naar gelang het een rijks-, provinciaal of gemeentelijk monument betreft"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:synonym",
   "property": "http://dbpedia.org/ontology/synonym",
   "label": {
    "en": "synonym",
    "el": "συνώνυμο",
    "ja": "シノニム"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:piercing",
   "property": "http://dbpedia.org/ontology/piercing",
   "label": {
    "en": "piercing",
    "pt": "piercing"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:dryCargo",
   "property": "http://dbpedia.org/ontology/dryCargo",
   "label": {
    "en": "dry cargo (g)",
    "nl": "droge last (g)"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#double",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:visitorsPercentageChange",
   "property": "http://dbpedia.org/ontology/visitorsPercentageChange",
   "label": {
    "en": "visitor percentage change",
    "de": "prozentuale Veränderung der Besucherzahl"
   },
   "description": {
    "en": "Percentage increase or decrease."
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#double",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:army",
   "property": "http://dbpedia.org/ontology/army",
   "label": {
    "en": "army"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:port2DockingDate",
   "property": "http://dbpedia.org/ontology/port2DockingDate",
   "label": {
    "en": "port2 docking date"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#date",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:numberOfLaps",
   "property": "http://dbpedia.org/ontology/numberOfLaps",
   "label": {
    "en": "number of laps"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#nonNegativeInteger",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:raceLength",
   "property": "http://dbpedia.org/ontology/raceLength",
   "label": {
    "en": "race length (μ)"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#double",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:geolocDual",
   "property": "http://dbpedia.org/ontology/geolocDual",
   "label": {
    "en": "geolocdual"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:dateBudget",
   "property": "http://dbpedia.org/ontology/dateBudget",
   "label": {
    "en": "date budget"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#date",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:landArea",
   "property": "http://dbpedia.org/ontology/landArea",
   "label": {
    "en": "area of a land (m2)"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#double",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:startYear",
   "property": "http://dbpedia.org/ontology/startYear",
   "label": {
    "en": "start year"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:flagSize",
   "property": "http://dbpedia.org/ontology/flagSize",
   "label": {
    "en": "flagSize"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#integer",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:currentRank",
   "property": "http://dbpedia.org/ontology/currentRank",
   "label": {
    "en": "current rank",
    "de": "aktueller Ranglistenplatz"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#integer",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:arm",
   "property": "http://dbpedia.org/ontology/arm",
   "label": {
    "en": "arm",
    "el": "ώμος"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:municipalityType",
   "property": "http://dbpedia.org/ontology/municipalityType",
   "label": {
    "en": "type of municipality",
    "nl": "type gemeente"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:landtag",
   "property": "http://dbpedia.org/ontology/landtag",
   "label": {
    "en": "austrian land tag"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:neighbourRegion",
   "property": "http://dbpedia.org/ontology/neighbourRegion",
   "label": {
    "en": "neighbour region"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:individualisedGnd",
   "property": "http://dbpedia.org/ontology/individualisedGnd",
   "label": {
    "en": "individualised GND number",
    "de": "Gemeinsame Normdatei"
   },
   "description": {
    "en": "GND (Gemeinsame Normdatei) is an international authority file for the organisation of personal names, subject headings and corporate bodies from catalogues. It is used mainly for documentation in libraries and archives. The GND is managed by the German National Library in cooperation with various library networks. The GND falls under the Creative Commons Zero(CC0) license."
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:sex",
   "property": "http://dbpedia.org/ontology/sex",
   "label": {
    "en": "sex",
    "el": "φύλο",
    "de": "Geschlecht"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:perCapitaIncomeRank",
   "property": "http://dbpedia.org/ontology/perCapitaIncomeRank",
   "label": {
    "en": "per capital income rank"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:satellite",
   "property": "http://dbpedia.org/ontology/satellite",
   "label": {
    "en": "satellite"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:quote",
   "property": "http://dbpedia.org/ontology/quote",
   "label": {
    "en": "quote"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:purpose",
   "property": "http://dbpedia.org/ontology/purpose",
   "label": {
    "en": "purpose",
    "nl": "doel",
    "fr": "objectif"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:mayorArticle",
   "property": "http://dbpedia.org/ontology/mayorArticle",
   "label": {
    "en": "mayor article"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:accessDate",
   "property": "http://dbpedia.org/ontology/accessDate",
   "label": {
    "en": "access date",
    "el": "ημερομηνία πρόσβασης"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#gYear",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:pluviometry",
   "property": "http://dbpedia.org/ontology/pluviometry",
   "label": {
    "en": "pluviometry"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:endYearOfSales",
   "property": "http://dbpedia.org/ontology/endYearOfSales",
   "label": {
    "en": "end year of sales"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#gYear",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:frequencyOfPublication",
   "property": "http://dbpedia.org/ontology/frequencyOfPublication",
   "label": {
    "en": "frequency of publication",
    "nl": "frequentie van publicatie",
    "de": "Erscheinungsweise"
   },
   "description": {
    "en": "The frequency of periodical publication (eg. Weekly, Bimonthly).",
    "de": "Die Häufigkeit der Erscheinungen des Periodikums (z.B. wöchentlich, monatlich)."
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:toll",
   "property": "http://dbpedia.org/ontology/toll",
   "label": {
    "en": "toll ($)",
    "de": "Maut ($)"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#double",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:productionStartYear",
   "property": "http://dbpedia.org/ontology/productionStartYear",
   "label": {
    "en": "production start year",
    "nl": "productie beginjaar"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#gYear",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:pronunciation",
   "property": "http://dbpedia.org/ontology/pronunciation",
   "label": {
    "en": "pronunciation"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:genereviewsid",
   "property": "http://dbpedia.org/ontology/genereviewsid",
   "label": {
    "en": "GeneReviewsID"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:unknownOutcomes",
   "property": "http://dbpedia.org/ontology/unknownOutcomes",
   "label": {
    "en": "unknown outcomes"
   },
   "description": {
    "en": "number of launches with unknown outcomes (or in progress)"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#nonNegativeInteger",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:numberOfIsland",
   "property": "http://dbpedia.org/ontology/numberOfIsland",
   "label": {
    "en": "number of islands"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:numberOfTracks",
   "property": "http://dbpedia.org/ontology/numberOfTracks",
   "label": {
    "en": "number of tracks",
    "de": "Anzahl der Gleise"
   },
   "description": {
    "en": "Number of tracks of a railway or railway station."
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#nonNegativeInteger",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:postalCode",
   "property": "http://dbpedia.org/ontology/postalCode",
   "label": {
    "el": "ταχυδρομικός κώδικας",
    "fr": "code postal",
    "en": "postal code",
    "nl": "postcode",
    "pt": "código postal",
    "de": "Postleitzahl"
   },
   "description": {
    "en": "A postal code (known in various countries as a post code, postcode, or ZIP code) is a series of letters and/or digits appended to a postal address for the purpose of sorting mail."
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:reservations",
   "property": "http://dbpedia.org/ontology/reservations",
   "label": {
    "en": "reservations"
   },
   "description": {
    "en": "Are reservations required for the establishment or event?"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#boolean",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:code",
   "property": "http://dbpedia.org/ontology/code",
   "label": {
    "en": "code",
    "nl": "code"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:slogan",
   "property": "http://dbpedia.org/ontology/slogan",
   "label": {
    "en": "slogan",
    "nl": "slogan",
    "de": "Slogan"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:maidenFlight",
   "property": "http://dbpedia.org/ontology/maidenFlight",
   "label": {
    "en": "maiden flight"
   },
   "description": {
    "en": "date of maiden flight"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#date",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:coden",
   "property": "http://dbpedia.org/ontology/coden",
   "label": {
    "en": "CODEN"
   },
   "description": {
    "en": "CODEN is a six character, alphanumeric bibliographic code, that provides concise, unique and unambiguous identification of the titles of serials and non-serial publications from all subject areas."
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:endYear",
   "property": "http://dbpedia.org/ontology/endYear",
   "label": {
    "en": "end year"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:inseeCode",
   "property": "http://dbpedia.org/ontology/inseeCode",
   "label": {
    "en": "INSEE code",
    "nl": "INSEE-code"
   },
   "description": {
    "en": "numerical indexing code used by the French National Institute for Statistics and Economic Studies (INSEE) to identify various entities"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#nonNegativeInteger",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:lastAirDate",
   "property": "http://dbpedia.org/ontology/lastAirDate",
   "label": {
    "en": "last air date",
    "de": "Sendeschluss"
   },
   "description": {
    "en": "The date on which the broadcaster made its last broadcast."
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#date",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:requirement",
   "property": "http://dbpedia.org/ontology/requirement",
   "label": {
    "en": "requirement"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:delegation",
   "property": "http://dbpedia.org/ontology/delegation",
   "label": {
    "en": "delegation"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:subMunicipalityType",
   "property": "http://dbpedia.org/ontology/subMunicipalityType",
   "label": {
    "en": "type of municipality",
    "nl": "type gemeente"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:isPeerReviewed",
   "property": "http://dbpedia.org/ontology/isPeerReviewed",
   "label": {
    "en": "is peer reviewed"
   },
   "description": {
    "en": "In academia peer review is often used to determine an academic papers suitability for publication."
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#boolean",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:arberishtName",
   "property": "http://dbpedia.org/ontology/arberishtName",
   "label": {
    "en": "city arberisht name"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:netIncome",
   "property": "http://dbpedia.org/ontology/netIncome",
   "label": {
    "en": "net income ($)"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#double",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:volcanicType",
   "property": "http://dbpedia.org/ontology/volcanicType",
   "label": {
    "en": "volcanic type"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:routeDirection",
   "property": "http://dbpedia.org/ontology/routeDirection",
   "label": {
    "en": "route direction",
    "de": "Himmelsrichtung des Verkehrsweges"
   },
   "description": {
    "en": "The general direction of the route (eg. North-South).",
    "de": "Himmelsrichtung des Verkehrsweges (z.B. North-South)."
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:wineYear",
   "property": "http://dbpedia.org/ontology/wineYear",
   "label": {
    "en": "wine year"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#date",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:shoeNumber",
   "property": "http://dbpedia.org/ontology/shoeNumber",
   "label": {
    "en": "shoe number",
    "nl": "schoenmaat",
    "pt": "número do sapato"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#positiveInteger",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:water",
   "property": "http://dbpedia.org/ontology/water",
   "label": {
    "en": "water"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:lifeExpectancy",
   "property": "http://dbpedia.org/ontology/lifeExpectancy",
   "label": {
    "en": "life expectancy",
    "pt": "expectativa de vida"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:filmColourType",
   "property": "http://dbpedia.org/ontology/filmColourType",
   "label": {
    "en": "film colour type"
   },
   "description": {
    "en": "specifies the colour type of the film i.e. 'colour' or 'b/w'"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:pseudonym",
   "property": "http://dbpedia.org/ontology/pseudonym",
   "label": {
    "en": "pseudonym",
    "nl": "pseudoniem",
    "de": "Pseudonym"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:salary",
   "property": "http://dbpedia.org/ontology/salary",
   "label": {
    "en": "salary ($)",
    "el": "μισθός ($)",
    "de": "Gehalt ($)",
    "ja": "給料 ($)"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#double",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:ascentDate",
   "property": "http://dbpedia.org/ontology/ascentDate",
   "label": {
    "en": "access date",
    "el": "ημερομηνία ανάβασης"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#gYear",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:rebuildDate",
   "property": "http://dbpedia.org/ontology/rebuildDate",
   "label": {
    "en": "rebuild date",
    "nl": "herbouw datum"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#date",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:refgen",
   "property": "http://dbpedia.org/ontology/refgen",
   "label": {
    "en": "reference for general data"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:bioavailability",
   "property": "http://dbpedia.org/ontology/bioavailability",
   "label": {
    "en": "Bioavailability"
   },
   "description": {
    "en": "\"The rate and extent to which the active ingredient or active moiety is absorbed from a drug product and becomes available at the site of action. For drug products that are not intended to be absorbed into the bloodstream, bioavailability may be assessed by measurements intended to reflect the rate and extent to which the active ingredient or active moiety becomes available at the site of action (21CFR320.1).\""
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#float",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:deathYear",
   "property": "http://dbpedia.org/ontology/deathYear",
   "label": {
    "en": "death year",
    "nl": "jaar van overlijden",
    "de": "Sterbejahr",
    "ja": "没年"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#gYear",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:dateUnveiled",
   "property": "http://dbpedia.org/ontology/dateUnveiled",
   "label": {
    "en": "date unveiled",
    "nl": "datum onthulling"
   },
   "description": {
    "en": "Designates the unveiling date",
    "nl": "Duidt de datum van onthulling aan"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#date",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:alias",
   "property": "http://dbpedia.org/ontology/alias",
   "label": {
    "el": "ψευδώνυμο",
    "fr": "alias",
    "en": "alias",
    "ja": "別名",
    "nl": "alias"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:grossDomesticProductRank",
   "property": "http://dbpedia.org/ontology/grossDomesticProductRank",
   "label": {
    "en": "gross domestic product rank"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:numberOfMembers",
   "property": "http://dbpedia.org/ontology/numberOfMembers",
   "label": {
    "el": "αριθμός μελών",
    "fr": "nombre de membres",
    "en": "number of members",
    "pt": "número de membros",
    "es": "numero de miembros"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#nonNegativeInteger",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:numberOfTurns",
   "property": "http://dbpedia.org/ontology/numberOfTurns",
   "label": {
    "en": "number of turns",
    "fr": "nombre de virages"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#nonNegativeInteger",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:dissolved",
   "property": "http://dbpedia.org/ontology/dissolved",
   "label": {
    "en": "dissolved"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#date",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:latestPreviewDate",
   "property": "http://dbpedia.org/ontology/latestPreviewDate",
   "label": {
    "en": "latest preview date"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#date",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:lowerEarthOrbitPayload",
   "property": "http://dbpedia.org/ontology/lowerEarthOrbitPayload",
   "label": {
    "en": "lower earth orbit payload (g)"
   },
   "description": {
    "en": "Payload mass in a typical Low Earth orbit"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#double",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:numberOfMatches",
   "property": "http://dbpedia.org/ontology/numberOfMatches",
   "label": {
    "en": "number of matches or caps"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#integer",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:maximumArea",
   "property": "http://dbpedia.org/ontology/maximumArea",
   "label": {
    "en": "maximum area"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:facultySize",
   "property": "http://dbpedia.org/ontology/facultySize",
   "label": {
    "en": "faculty size"
   },
   "description": {
    "en": "number of faculty members"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#nonNegativeInteger",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:flyingHours",
   "property": "http://dbpedia.org/ontology/flyingHours",
   "label": {
    "en": "flying hours (s)"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#double",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:chromosome",
   "property": "http://dbpedia.org/ontology/chromosome",
   "label": {
    "en": "chromosome",
    "el": "χρωμόσωμα",
    "ja": "染色体"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:mapDescription",
   "property": "http://dbpedia.org/ontology/mapDescription",
   "label": {
    "en": "map description",
    "nl": "kaart omschrijving"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:primate",
   "property": "http://dbpedia.org/ontology/primate",
   "label": {
    "en": "Primite"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:symbol",
   "property": "http://dbpedia.org/ontology/symbol",
   "label": {
    "en": "symbol"
   },
   "description": {
    "en": "HUGO Gene Symbol"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:numberOfSpans",
   "property": "http://dbpedia.org/ontology/numberOfSpans",
   "label": {
    "en": "number of spans",
    "de": "Anzahl der Bögen"
   },
   "description": {
    "en": "Number of spans or arches."
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#nonNegativeInteger",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:isoCode",
   "property": "http://dbpedia.org/ontology/isoCode",
   "label": {
    "en": "iso code of a place"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:shipDraft",
   "property": "http://dbpedia.org/ontology/shipDraft",
   "label": {
    "en": "ship draft (μ)"
   },
   "description": {
    "en": "The draft (or draught) of a ship's hull is the vertical distance between the waterline and the bottom of the hull (keel), with the thickness of the hull included; in the case of not being included the draft outline would be obtained."
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#double",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:cornishName",
   "property": "http://dbpedia.org/ontology/cornishName",
   "label": {
    "en": "cornish name",
    "nl": "cornish naam"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:foundation",
   "property": "http://dbpedia.org/ontology/foundation",
   "label": {
    "en": "foundation"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:pistonStroke",
   "property": "http://dbpedia.org/ontology/pistonStroke",
   "label": {
    "en": "piston stroke (μ)"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#double",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:endYearOfInsertion",
   "property": "http://dbpedia.org/ontology/endYearOfInsertion",
   "label": {
    "en": "end year of insertion"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#gYear",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:pdb",
   "property": "http://dbpedia.org/ontology/pdb",
   "label": {
    "en": "PDB",
    "ja": "PDB"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:grossDomesticProductPerPeople",
   "property": "http://dbpedia.org/ontology/grossDomesticProductPerPeople",
   "label": {
    "en": "gross domestic product per people"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:surfaceArea",
   "property": "http://dbpedia.org/ontology/surfaceArea",
   "label": {
    "en": "surface area (m2)",
    "el": "έκταση (m2)"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#double",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:sardinianName",
   "property": "http://dbpedia.org/ontology/sardinianName",
   "label": {
    "en": "city sardinian name"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:governorate",
   "property": "http://dbpedia.org/ontology/governorate",
   "label": {
    "en": "governorate"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:genomeDB",
   "property": "http://dbpedia.org/ontology/genomeDB",
   "label": {
    "en": "Genome DB",
    "ja": "Genome DB"
   },
   "description": {
    "en": "the edition of the database used (i.e. hg19)"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:casualties",
   "property": "http://dbpedia.org/ontology/casualties",
   "label": {
    "fr": "pertes",
    "en": "casualties"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#integer",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:commissioner",
   "property": "http://dbpedia.org/ontology/commissioner",
   "label": {
    "en": "commissioner"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:boilingPoint",
   "property": "http://dbpedia.org/ontology/boilingPoint",
   "label": {
    "el": "σημείο βρασμού (K)",
    "fr": "point d'ébullition (K)",
    "en": "boiling point (K)",
    "ja": "沸点 (K)",
    "nl": "kookpunt (K)",
    "de": "Siedepunkt (K)"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#double",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:block",
   "property": "http://dbpedia.org/ontology/block",
   "label": {
    "en": "block",
    "tr": "blok"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:ceeb",
   "property": "http://dbpedia.org/ontology/ceeb",
   "label": {
    "en": "ceeb"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:numberOfRockets",
   "property": "http://dbpedia.org/ontology/numberOfRockets",
   "label": {
    "en": "number of rockets"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#nonNegativeInteger",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:purchasingPowerParity",
   "property": "http://dbpedia.org/ontology/purchasingPowerParity",
   "label": {
    "en": "purchasing power parity"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:runwayWidth",
   "property": "http://dbpedia.org/ontology/runwayWidth",
   "label": {
    "en": "width of runway (μ)",
    "ja": "滑走路の全幅 (μ)"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#double",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:numberOfFilms",
   "property": "http://dbpedia.org/ontology/numberOfFilms",
   "label": {
    "en": "number of films",
    "el": "αριθμός ταινιών"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#nonNegativeInteger",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:youthYears",
   "property": "http://dbpedia.org/ontology/youthYears",
   "label": {
    "en": "youth years"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#gYear",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:voltageOfElectrification",
   "property": "http://dbpedia.org/ontology/voltageOfElectrification",
   "label": {
    "en": "voltage of electrification (V)",
    "de": "Voltzahl der Elektrifizierung (V)"
   },
   "description": {
    "en": "Voltage of the electrification system."
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#double",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:logo",
   "property": "http://dbpedia.org/ontology/logo",
   "label": {
    "en": "logo",
    "el": "λογότυπο",
    "nl": "logo"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:populationAsOf",
   "property": "http://dbpedia.org/ontology/populationAsOf",
   "label": {
    "en": "population as of",
    "nl": "bevolking vanaf",
    "fr": "population en date de",
    "el": "χρονιά_απογραφής"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#date",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:nutsCode",
   "property": "http://dbpedia.org/ontology/nutsCode",
   "label": {
    "en": "NUTS code",
    "nl": "NUTS-code:"
   },
   "description": {
    "en": "Nomenclature of Territorial Units for Statistics (NUTS) is a geocode  standard for referencing the subdivisions of countries  for statistical purposes. The standard is developed and regulated by the European Union, and thus only covers the member states of the EU in detail."
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:landingDate",
   "property": "http://dbpedia.org/ontology/landingDate",
   "label": {
    "en": "landing date"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#date",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:reopeningDate",
   "property": "http://dbpedia.org/ontology/reopeningDate",
   "label": {
    "en": "reopening date"
   },
   "description": {
    "en": "Date of reopening the architectural structure."
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#date",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:discovered",
   "property": "http://dbpedia.org/ontology/discovered",
   "label": {
    "en": "discovered",
    "pt": "descobridor",
    "el": "Ημερομηνία ανακάλυψης"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#date",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:membershipAsOf",
   "property": "http://dbpedia.org/ontology/membershipAsOf",
   "label": {
    "en": "date membership established",
    "nl": "datum vaststellen ledental"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#date",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:numberOfGoals",
   "property": "http://dbpedia.org/ontology/numberOfGoals",
   "label": {
    "en": "number of goals scored"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:coastLine",
   "property": "http://dbpedia.org/ontology/coastLine",
   "label": {
    "en": "coast line (μ)"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#double",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:trackLength",
   "property": "http://dbpedia.org/ontology/trackLength",
   "label": {
    "en": "track length (μ)",
    "de": "Streckenlänge (μ)"
   },
   "description": {
    "en": "Length of the track. Wikipedians usually do not differentiate between track length and line lenght."
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#double",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:numberOfVisitorsAsOf",
   "property": "http://dbpedia.org/ontology/numberOfVisitorsAsOf",
   "label": {
    "en": "number of visitors as of"
   },
   "description": {
    "en": "The year in which number of visitors occurred."
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#gYear",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:completionDate",
   "property": "http://dbpedia.org/ontology/completionDate",
   "label": {
    "en": "completion date",
    "nl": "datum van oplevering"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#date",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:cableCar",
   "property": "http://dbpedia.org/ontology/cableCar",
   "label": {
    "en": "cable car"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#nonNegativeInteger",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:added",
   "property": "http://dbpedia.org/ontology/added",
   "label": {
    "en": "added",
    "el": "προστιθέμενη"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#date",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:dorlandsPrefix",
   "property": "http://dbpedia.org/ontology/dorlandsPrefix",
   "label": {
    "en": "Dorlands prefix"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:routeTypeAbbreviation",
   "property": "http://dbpedia.org/ontology/routeTypeAbbreviation",
   "label": {
    "en": "route type abbreviation"
   },
   "description": {
    "en": "The route type abbreviation (eg.: I for Interstate, M for Motorway or NJ for New Jersey Route)."
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:ward",
   "property": "http://dbpedia.org/ontology/ward",
   "label": {
    "en": "ward of a liechtenstein settlement"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:minorityLeader",
   "property": "http://dbpedia.org/ontology/minorityLeader",
   "label": {
    "en": "minority leader"
   },
   "description": {
    "en": "number of office holder"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#integer",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:freeFlightTime",
   "property": "http://dbpedia.org/ontology/freeFlightTime",
   "label": {
    "en": "free flight time (s)"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#double",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:birthDate",
   "property": "http://dbpedia.org/ontology/birthDate",
   "label": {
    "el": "ημερομηνία_γέννησης",
    "fr": "date de naissance",
    "en": "birth date",
    "ja": "生年月日",
    "nl": "geboortedatum",
    "bn": "জন্মদিন",
    "de": "Geburtsdatum"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#date",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:eruption",
   "property": "http://dbpedia.org/ontology/eruption",
   "label": {
    "en": "eruption"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:perCapitaIncomeAsOf",
   "property": "http://dbpedia.org/ontology/perCapitaIncomeAsOf",
   "label": {
    "en": "per capita income as of",
    "pt": "renda per capita em"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#date",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:hasNaturalBust",
   "property": "http://dbpedia.org/ontology/hasNaturalBust",
   "label": {
    "en": "has natural bust",
    "pt": "tem busto natural"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:circuitLength",
   "property": "http://dbpedia.org/ontology/circuitLength",
   "label": {
    "en": "circuit length (μ)"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#double",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:numberOfBronzeMedalsWon",
   "property": "http://dbpedia.org/ontology/numberOfBronzeMedalsWon",
   "label": {
    "en": "number of bronze medals won",
    "fr": "nomber de médailles de bronze gagnées",
    "es": "cantidad de medallas de bronce ganadas"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#nonNegativeInteger",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:unitedStatesNationalBridgeId",
   "property": "http://dbpedia.org/ontology/unitedStatesNationalBridgeId",
   "label": {
    "en": "United States National Bridge ID"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:draftYear",
   "property": "http://dbpedia.org/ontology/draftYear",
   "label": {
    "en": "draft year"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#gYear",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:endCareer",
   "property": "http://dbpedia.org/ontology/endCareer",
   "label": {
    "en": "end career"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:id",
   "property": "http://dbpedia.org/ontology/id",
   "label": {
    "en": "id"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:averageDepthQuote",
   "property": "http://dbpedia.org/ontology/averageDepthQuote",
   "label": {
    "en": "average depth quote"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:emedicineTopic",
   "property": "http://dbpedia.org/ontology/emedicineTopic",
   "label": {
    "en": "eMedicine subject",
    "nl": "eMedicine onderwerp"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:landingSite",
   "property": "http://dbpedia.org/ontology/landingSite",
   "label": {
    "en": "landing site"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:capitalElevation",
   "property": "http://dbpedia.org/ontology/capitalElevation",
   "label": {
    "en": "capital elevation (μ)"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#double",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:crownDependency",
   "property": "http://dbpedia.org/ontology/crownDependency",
   "label": {
    "en": "crown dependency"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:prominence",
   "property": "http://dbpedia.org/ontology/prominence",
   "label": {
    "en": "prominence (μ)"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#double",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:chairmanTitle",
   "property": "http://dbpedia.org/ontology/chairmanTitle",
   "label": {
    "en": "chairman title"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:cylinderCount",
   "property": "http://dbpedia.org/ontology/cylinderCount",
   "label": {
    "en": "cylinder count"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#nonNegativeInteger",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:debut",
   "property": "http://dbpedia.org/ontology/debut",
   "label": {
    "en": "debut"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#date",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:callsignMeaning",
   "property": "http://dbpedia.org/ontology/callsignMeaning",
   "label": {
    "en": "call sign meaning"
   },
   "description": {
    "en": "The out written call sign."
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:entrezgene",
   "property": "http://dbpedia.org/ontology/entrezgene",
   "label": {
    "en": "EntrezGene",
    "ja": "EntrezGene"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:peopleName",
   "property": "http://dbpedia.org/ontology/peopleName",
   "label": {
    "en": "peopleName"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:gun",
   "property": "http://dbpedia.org/ontology/gun",
   "label": {
    "en": "aircraft gun",
    "el": "Πολυβόλο"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:dateExtended",
   "property": "http://dbpedia.org/ontology/dateExtended",
   "label": {
    "en": "date extended",
    "el": "επέκταση"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#date",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:ratio",
   "property": "http://dbpedia.org/ontology/ratio",
   "label": {
    "en": "ratio"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:germanName",
   "property": "http://dbpedia.org/ontology/germanName",
   "label": {
    "en": "city german name"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:ra",
   "property": "http://dbpedia.org/ontology/ra",
   "label": {
    "en": "ra"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:minimumElevation",
   "property": "http://dbpedia.org/ontology/minimumElevation",
   "label": {
    "en": "minimum elevation (μ)",
    "el": "βάση (μ)"
   },
   "description": {
    "en": "minimum elevation above the sea level"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#double",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:inclination",
   "property": "http://dbpedia.org/ontology/inclination",
   "label": {
    "en": "inclination"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#float",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:sharingOutPopulation",
   "property": "http://dbpedia.org/ontology/sharingOutPopulation",
   "label": {
    "en": "sharing out population"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#nonNegativeInteger",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:otherFunction",
   "property": "http://dbpedia.org/ontology/otherFunction",
   "label": {
    "en": "other function"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:blackSkiPisteNumber",
   "property": "http://dbpedia.org/ontology/blackSkiPisteNumber",
   "label": {
    "en": "black ski piste number"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#nonNegativeInteger",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:translatedMotto",
   "property": "http://dbpedia.org/ontology/translatedMotto",
   "label": {
    "en": "translated motto"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:shoreLength",
   "property": "http://dbpedia.org/ontology/shoreLength",
   "label": {
    "en": "shore length (μ)",
    "el": "μήκος_όχθης (μ)"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#double",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:elevation",
   "property": "http://dbpedia.org/ontology/elevation",
   "label": {
    "en": "elevation (μ)",
    "nl": "hoogte (μ)",
    "el": "υψόμετρο (μ)",
    "pt": "altitude (μ)"
   },
   "description": {
    "en": "average elevation above the sea level",
    "pt": "altitude média acima do nível do mar"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#double",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:workArea",
   "property": "http://dbpedia.org/ontology/workArea",
   "label": {
    "en": "work area (m2)",
    "de": "Arbeitsplätze (m2)"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#double",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:gnl",
   "property": "http://dbpedia.org/ontology/gnl",
   "label": {
    "en": "gnl"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:numberOfAcademicStaff",
   "property": "http://dbpedia.org/ontology/numberOfAcademicStaff",
   "label": {
    "en": "number of academic staff",
    "el": "αριθμός ακαδημαϊκού προσωπικού"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#nonNegativeInteger",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:gaelicName",
   "property": "http://dbpedia.org/ontology/gaelicName",
   "label": {
    "en": "gaelic name"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:colorChart",
   "property": "http://dbpedia.org/ontology/colorChart",
   "label": {
    "en": "colorChart"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:frioulanName",
   "property": "http://dbpedia.org/ontology/frioulanName",
   "label": {
    "en": "city frioulan name"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:numberOfSportsEvents",
   "property": "http://dbpedia.org/ontology/numberOfSportsEvents",
   "label": {
    "en": "number of sports events",
    "el": "αριθμός αθλητικών γεγονότων",
    "fr": "numbre d'épreuves sportives",
    "es": "numero de dpruebas deportivas"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#nonNegativeInteger",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:distanceToDublin",
   "property": "http://dbpedia.org/ontology/distanceToDublin",
   "label": {
    "en": "distance to Dublin (μ)",
    "el": "απόσταση από το Δουβλίνο (μ)"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#double",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:calabrianName",
   "property": "http://dbpedia.org/ontology/calabrianName",
   "label": {
    "en": "city calabrian name"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:populationUrbanDensity",
   "property": "http://dbpedia.org/ontology/populationUrbanDensity",
   "label": {
    "en": "population urban density (/sqkm)"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#double",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:titleDate",
   "property": "http://dbpedia.org/ontology/titleDate",
   "label": {
    "en": "title date",
    "nl": "titel datum",
    "pt": "data do titulo"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#date",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:closingYear",
   "property": "http://dbpedia.org/ontology/closingYear",
   "label": {
    "en": "closing year",
    "nl": "Sluitingsjaar",
    "de": "Schließungsjahr"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#gYear",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:publicationDate",
   "property": "http://dbpedia.org/ontology/publicationDate",
   "label": {
    "en": "publication date",
    "nl": "publicatiedatum"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#date",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:runwayLength",
   "property": "http://dbpedia.org/ontology/runwayLength",
   "label": {
    "en": "length of runway (μ)",
    "de": "Start- und Landebahnlänge (μ)"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#double",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:phonePrefix",
   "property": "http://dbpedia.org/ontology/phonePrefix",
   "label": {
    "en": "phone prefix"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#nonNegativeInteger",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:updated",
   "property": "http://dbpedia.org/ontology/updated",
   "label": {
    "en": "updated"
   },
   "description": {
    "en": "The last update date of a resource"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#date",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:space",
   "property": "http://dbpedia.org/ontology/space",
   "label": {
    "en": "space",
    "de": "Raum"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#nonNegativeInteger",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:sourceConfluenceElevation",
   "property": "http://dbpedia.org/ontology/sourceConfluenceElevation",
   "label": {
    "en": "source confluence elevation (μ)"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#double",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:interest",
   "property": "http://dbpedia.org/ontology/interest",
   "label": {
    "en": "interest",
    "el": "ενδιαφέρον"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:chorusCharacterInPlay",
   "property": "http://dbpedia.org/ontology/chorusCharacterInPlay",
   "label": {
    "en": "chorus character in play"
   },
   "description": {
    "en": "The name of the (Greek) chorus character in play."
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:shipLaunch",
   "property": "http://dbpedia.org/ontology/shipLaunch",
   "label": {
    "en": "ship launched"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#date",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:productionYears",
   "property": "http://dbpedia.org/ontology/productionYears",
   "label": {
    "en": "production years"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#date",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:cityRank",
   "property": "http://dbpedia.org/ontology/cityRank",
   "label": {
    "en": "city rank",
    "de": "Rang Stadt"
   },
   "description": {
    "en": "Place of the building in the list of the highest buildings in the city",
    "de": "Der Platz des Gebäudes in der Liste der höchsten Gebäude der Stadt"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#nonNegativeInteger",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:lunarModule",
   "property": "http://dbpedia.org/ontology/lunarModule",
   "label": {
    "en": "lunar module"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:cost",
   "property": "http://dbpedia.org/ontology/cost",
   "label": {
    "en": "cost ($)",
    "nl": "kosten ($)",
    "el": "κόστος ($)"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#double",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:episodeNumber",
   "property": "http://dbpedia.org/ontology/episodeNumber",
   "label": {
    "en": "episode number"
   },
   "description": {
    "en": "The episode number of the TelevisionEpisode."
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#nonNegativeInteger",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:partyNumber",
   "property": "http://dbpedia.org/ontology/partyNumber",
   "label": {
    "en": "party number",
    "pt": "número do partido"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#integer",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:date",
   "property": "http://dbpedia.org/ontology/date",
   "label": {
    "en": "date",
    "nl": "datum",
    "el": "ημερομηνία"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#date",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:afdbId",
   "property": "http://dbpedia.org/ontology/afdbId",
   "label": {
    "en": "afdb id",
    "el": "afdb id",
    "pt": "código no afdb"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:escapeVelocity",
   "property": "http://dbpedia.org/ontology/escapeVelocity",
   "label": {
    "en": "escape velocity (kmh)"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#double",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:otherInformation",
   "property": "http://dbpedia.org/ontology/otherInformation",
   "label": {
    "en": "other information of a settlement"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:member",
   "property": "http://dbpedia.org/ontology/member",
   "label": {
    "en": "member",
    "nl": "lid van"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:maximumDepthQuote",
   "property": "http://dbpedia.org/ontology/maximumDepthQuote",
   "label": {
    "en": "maximum depth quote"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:appearancesInLeague",
   "property": "http://dbpedia.org/ontology/appearancesInLeague",
   "label": {
    "en": "appearances in league",
    "el": "εμφανίσεις στο πρωτάθλημα"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#nonNegativeInteger",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:licenceNumber",
   "property": "http://dbpedia.org/ontology/licenceNumber",
   "label": {
    "en": "licence number"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:eyes",
   "property": "http://dbpedia.org/ontology/eyes",
   "label": {
    "en": "eyes",
    "nl": "ogen"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:eTeatrId",
   "property": "http://dbpedia.org/ontology/eTeatrId",
   "label": {
    "en": "e-teatr.pl id"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:areaDate",
   "property": "http://dbpedia.org/ontology/areaDate",
   "label": {
    "en": "area date"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#date",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:representative",
   "property": "http://dbpedia.org/ontology/representative",
   "label": {
    "en": "number of representatives"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#nonNegativeInteger",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:noteOnRestingPlace",
   "property": "http://dbpedia.org/ontology/noteOnRestingPlace",
   "label": {
    "en": "note on resting place"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:frozen",
   "property": "http://dbpedia.org/ontology/frozen",
   "label": {
    "en": "frozen",
    "el": "παγωμένη"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:successfulLaunches",
   "property": "http://dbpedia.org/ontology/successfulLaunches",
   "label": {
    "en": "successful launches"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#nonNegativeInteger",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:belgiumPoliticalSeats",
   "property": "http://dbpedia.org/ontology/belgiumPoliticalSeats",
   "label": {
    "en": "belgium political seats"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#nonNegativeInteger",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:projectEndDate",
   "property": "http://dbpedia.org/ontology/projectEndDate",
   "label": {
    "en": "project end date"
   },
   "description": {
    "en": "The end date of the project."
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#date",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:jstor",
   "property": "http://dbpedia.org/ontology/jstor",
   "label": {
    "en": "JSTOR"
   },
   "description": {
    "en": "JSTOR number (short for Journal Storage) is a United States-based online system number for archiving academic journals."
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:numberOfWineries",
   "property": "http://dbpedia.org/ontology/numberOfWineries",
   "label": {
    "en": "number of wineries"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#nonNegativeInteger",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:landtagMandate",
   "property": "http://dbpedia.org/ontology/landtagMandate",
   "label": {
    "en": "austrian land tag mandate"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:landRegistryCode",
   "property": "http://dbpedia.org/ontology/landRegistryCode",
   "label": {
    "en": "land registry code"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:passengersUsedSystem",
   "property": "http://dbpedia.org/ontology/passengersUsedSystem",
   "label": {
    "en": "passengers used system",
    "de": "benutztes System der Passagiere"
   },
   "description": {
    "en": "System the passengers are using (from which the passenger statistics are)."
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:isCityState",
   "property": "http://dbpedia.org/ontology/isCityState",
   "label": {
    "en": "is a city state"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:satellitesDeployed",
   "property": "http://dbpedia.org/ontology/satellitesDeployed",
   "label": {
    "en": "satellites deployed"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#nonNegativeInteger",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:dateAgreement",
   "property": "http://dbpedia.org/ontology/dateAgreement",
   "label": {
    "en": "date of an agreement"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#date",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:income",
   "property": "http://dbpedia.org/ontology/income",
   "label": {
    "en": "income"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:rating",
   "property": "http://dbpedia.org/ontology/rating",
   "label": {
    "en": "rating",
    "nl": "cijfer"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#float",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:ensembl",
   "property": "http://dbpedia.org/ontology/ensembl",
   "label": {
    "en": "ensemble",
    "ja": "ensemble"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:inchi",
   "property": "http://dbpedia.org/ontology/inchi",
   "label": {
    "en": "The IUPAC International Chemical Identifier",
    "de": "Internationale chemische Bezeichnung der IUPAC"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:dissolutionYear",
   "property": "http://dbpedia.org/ontology/dissolutionYear",
   "label": {
    "en": "dissolution year"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#gYear",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:distanceToBelfast",
   "property": "http://dbpedia.org/ontology/distanceToBelfast",
   "label": {
    "en": "distance to Belfast (μ)"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#double",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:starRating",
   "property": "http://dbpedia.org/ontology/starRating",
   "label": {
    "en": "star rating"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#float",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:worldChampionTitleYear",
   "property": "http://dbpedia.org/ontology/worldChampionTitleYear",
   "label": {
    "en": "year of world champion title",
    "nl": "jaar van wereldkampioen titel",
    "fr": "année d'obtention du titre de champion du monde"
   },
   "description": {
    "en": "can be one or several years",
    "fr": "il peut s'agir d'une ou de plusieurs années"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#gYear",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:modelStartYear",
   "property": "http://dbpedia.org/ontology/modelStartYear",
   "label": {
    "en": "model start year"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#gYear",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:numberOfLiveAlbums",
   "property": "http://dbpedia.org/ontology/numberOfLiveAlbums",
   "label": {
    "en": "number of live albums"
   },
   "description": {
    "en": "the number of live albums released by the musical artist"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#nonNegativeInteger",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:diseasesdb",
   "property": "http://dbpedia.org/ontology/diseasesdb",
   "label": {
    "en": "DiseasesDB",
    "nl": "DiseasesDB",
    "ja": "DiseasesDB"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:timeshiftChannel",
   "property": "http://dbpedia.org/ontology/timeshiftChannel",
   "label": {
    "en": "timeshift channel"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:establishment",
   "property": "http://dbpedia.org/ontology/establishment",
   "label": {
    "en": "Establishment",
    "el": "ίδρυση"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#integer",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:meaning",
   "property": "http://dbpedia.org/ontology/meaning",
   "label": {
    "en": "meaning"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:note",
   "property": "http://dbpedia.org/ontology/note",
   "label": {
    "en": "note"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:bSide",
   "property": "http://dbpedia.org/ontology/bSide",
   "label": {
    "en": "b side"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:projectStartDate",
   "property": "http://dbpedia.org/ontology/projectStartDate",
   "label": {
    "en": "project start date"
   },
   "description": {
    "en": "The start date of the project."
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#date",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:numberOfEmployees",
   "property": "http://dbpedia.org/ontology/numberOfEmployees",
   "label": {
    "el": "αριθμός εργαζομένων",
    "fr": "nombre d'employés",
    "en": "number of employees",
    "nl": "aantal medewerkers",
    "es": "número de empleados"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#nonNegativeInteger",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:majorityLeader",
   "property": "http://dbpedia.org/ontology/majorityLeader",
   "label": {
    "en": "majority leader"
   },
   "description": {
    "en": "number of office holder"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#integer",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:recordDate",
   "property": "http://dbpedia.org/ontology/recordDate",
   "label": {
    "en": "record date",
    "nl": "opname datum",
    "el": "ηχογράφηση"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#date",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:density",
   "property": "http://dbpedia.org/ontology/density",
   "label": {
    "el": "πυκνότητα (μ3)",
    "fr": "densité (μ3)",
    "en": "density (μ3)",
    "ja": "密度 (μ3)",
    "pt": "densidade (μ3)",
    "de": "Dichte (μ3)"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#double",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:iataLocationIdentifier",
   "property": "http://dbpedia.org/ontology/iataLocationIdentifier",
   "label": {
    "en": "IATA Location Identifier",
    "el": "ΙΑΤΑ"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:grindingCapability",
   "property": "http://dbpedia.org/ontology/grindingCapability",
   "label": {
    "en": "grinding capability",
    "nl": "maal capaciteit"
   },
   "description": {
    "en": "grinding capability for Mills"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:compressionRatio",
   "property": "http://dbpedia.org/ontology/compressionRatio",
   "label": {
    "en": "compression ratio"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:egafdId",
   "property": "http://dbpedia.org/ontology/egafdId",
   "label": {
    "en": "egafd id",
    "el": "egafd id",
    "pt": "código no egafd"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:minimumInclination",
   "property": "http://dbpedia.org/ontology/minimumInclination",
   "label": {
    "en": "minimum inclination"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#float",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:fileSize",
   "property": "http://dbpedia.org/ontology/fileSize",
   "label": {
    "en": "size (B)",
    "de": "Dateigröße (B)"
   },
   "description": {
    "en": "size of a file or software"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#double",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:maximumElevation",
   "property": "http://dbpedia.org/ontology/maximumElevation",
   "label": {
    "en": "maximum elevation (μ)",
    "el": "κορυφή (μ)"
   },
   "description": {
    "en": "maximum elevation above the sea level"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#double",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:tournamentRecord",
   "property": "http://dbpedia.org/ontology/tournamentRecord",
   "label": {
    "en": "tournament record"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:hsvCoordinateSaturation",
   "property": "http://dbpedia.org/ontology/hsvCoordinateSaturation",
   "label": {
    "en": "saturation coordinate in the HSV colour space"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#integer",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:supply",
   "property": "http://dbpedia.org/ontology/supply",
   "label": {
    "en": "supply"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:millSpan",
   "property": "http://dbpedia.org/ontology/millSpan",
   "label": {
    "en": "mill span (μ)",
    "nl": "vlucht (μ)",
    "el": "Εκπέτασμα (μ)"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#double",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:eventDate",
   "property": "http://dbpedia.org/ontology/eventDate",
   "label": {
    "en": "event date"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#date",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:giniCoefficientRanking",
   "property": "http://dbpedia.org/ontology/giniCoefficientRanking",
   "label": {
    "en": "gini coefficient ranking",
    "pt": "posição no ranking do coeficiente de Gini"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#positiveInteger",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:range",
   "property": "http://dbpedia.org/ontology/range",
   "label": {
    "en": "range",
    "nl": "bereik"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:cylinderBore",
   "property": "http://dbpedia.org/ontology/cylinderBore",
   "label": {
    "en": "cylinder bore (μ)"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#double",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:illiteracy",
   "property": "http://dbpedia.org/ontology/illiteracy",
   "label": {
    "en": "illiteracy",
    "pt": "analfabetismo"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#float",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:assetUnderManagement",
   "property": "http://dbpedia.org/ontology/assetUnderManagement",
   "label": {
    "en": "asset under management ($)",
    "el": "κεφάλαιο υπό διαχείριση ($)"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#double",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:activeYearsStartDate",
   "property": "http://dbpedia.org/ontology/activeYearsStartDate",
   "label": {
    "en": "active years start date",
    "el": "ενεργά χρόνια ημερομηνία έναρξης",
    "nl": "actieve jaren startdatum",
    "fr": "date de début d'activité"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#date",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:percentageFat",
   "property": "http://dbpedia.org/ontology/percentageFat",
   "label": {
    "en": "percentage of fat",
    "nl": "vetgehalte"
   },
   "description": {
    "en": "how much fat (in relative terms) does this unity of food contain"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#nonNegativeInteger",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:numberOfParkingSpaces",
   "property": "http://dbpedia.org/ontology/numberOfParkingSpaces",
   "label": {
    "en": "number of parking spaces"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#nonNegativeInteger",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:lastElectionDate",
   "property": "http://dbpedia.org/ontology/lastElectionDate",
   "label": {
    "en": "last election date"
   },
   "description": {
    "en": "The last election date for the house."
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#date",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:draftRound",
   "property": "http://dbpedia.org/ontology/draftRound",
   "label": {
    "en": "draft round"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:previousPopulationTotal",
   "property": "http://dbpedia.org/ontology/previousPopulationTotal",
   "label": {
    "en": "previous population total"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#nonNegativeInteger",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:dist_pc",
   "property": "http://dbpedia.org/ontology/dist_pc",
   "label": {
    "en": "dist_pc"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#integer",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:filename",
   "property": "http://dbpedia.org/ontology/filename",
   "label": {
    "en": "filename",
    "nl": "bestandsnaam",
    "de": "dateiname",
    "el": "όνομα αρχείου"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:manxName",
   "property": "http://dbpedia.org/ontology/manxName",
   "label": {
    "en": "manx name"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:numberOfVolumes",
   "property": "http://dbpedia.org/ontology/numberOfVolumes",
   "label": {
    "en": "number of volumes"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#nonNegativeInteger",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:dateConstruction",
   "property": "http://dbpedia.org/ontology/dateConstruction",
   "label": {
    "en": "date construction",
    "el": "έναρξη_κατασκευής"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#date",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:draftPick",
   "property": "http://dbpedia.org/ontology/draftPick",
   "label": {
    "en": "draft pick"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:status",
   "property": "http://dbpedia.org/ontology/status",
   "label": {
    "en": "status",
    "nl": "status",
    "fr": "statut",
    "es": "estatus"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:dressCode",
   "property": "http://dbpedia.org/ontology/dressCode",
   "label": {
    "en": "dress code"
   },
   "description": {
    "en": "The recommended dress code for an establishment or event."
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:appmag_v",
   "property": "http://dbpedia.org/ontology/appmag_v",
   "label": {
    "en": "appmag_v"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#integer",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:absoluteMagnitude",
   "property": "http://dbpedia.org/ontology/absoluteMagnitude",
   "label": {
    "en": "absolute magnitude",
    "el": "απόλυτο μέγεθος",
    "de": "absolute Helligkeit"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#double",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:populationMetroDensity",
   "property": "http://dbpedia.org/ontology/populationMetroDensity",
   "label": {
    "en": "population metro density (/sqkm)",
    "nl": "bevolkingsdichtheid (/sqkm)"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#double",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:numberOfSports",
   "property": "http://dbpedia.org/ontology/numberOfSports",
   "label": {
    "en": "number of sports",
    "fr": "numbre de sports",
    "es": "numero de deportes"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#nonNegativeInteger",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:areaMetro",
   "property": "http://dbpedia.org/ontology/areaMetro",
   "label": {
    "en": "area metro (m2)",
    "el": "περιοχή μετρό (m2)"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#double",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:comment",
   "property": "http://dbpedia.org/ontology/comment",
   "label": {
    "en": "comment"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:agglomerationPopulationYear",
   "property": "http://dbpedia.org/ontology/agglomerationPopulationYear",
   "label": {
    "en": "agglomerationPopulationYear"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:typeCoordinate",
   "property": "http://dbpedia.org/ontology/typeCoordinate",
   "label": {
    "en": "type coordinate"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:projectReferenceID",
   "property": "http://dbpedia.org/ontology/projectReferenceID",
   "label": {
    "en": "project reference ID"
   },
   "description": {
    "en": "The reference identification of the project."
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:isbn",
   "property": "http://dbpedia.org/ontology/isbn",
   "label": {
    "en": "ISBN",
    "nl": "ISBN"
   },
   "description": {
    "en": "The International Standard Book Number (ISBN) is a unique numeric commercial book identifier based upon the 9-digit Standard Book Numbering (SBN) code."
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:visitorStatisticsAsOf",
   "property": "http://dbpedia.org/ontology/visitorStatisticsAsOf",
   "label": {
    "en": "visitor statistics as of"
   },
   "description": {
    "en": "Year visitor information was gathered."
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#gYear",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:schoolNumber",
   "property": "http://dbpedia.org/ontology/schoolNumber",
   "label": {
    "en": "school number"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:meanTemperature",
   "property": "http://dbpedia.org/ontology/meanTemperature",
   "label": {
    "en": "mean temperature (K)",
    "el": "μέση θερμοκρασία (K)"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#double",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:anniversary",
   "property": "http://dbpedia.org/ontology/anniversary",
   "label": {
    "en": "anniversary",
    "el": "επέτειος"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#date",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:revenue",
   "property": "http://dbpedia.org/ontology/revenue",
   "label": {
    "en": "revenue ($)",
    "el": "έσοδα ($)"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#double",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:sublimationPoint",
   "property": "http://dbpedia.org/ontology/sublimationPoint",
   "label": {
    "en": "sublimation point (K)"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#double",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:passengersPerDay",
   "property": "http://dbpedia.org/ontology/passengersPerDay",
   "label": {
    "en": "passengers per day",
    "de": "Passagiere pro Tag"
   },
   "description": {
    "en": "Number of passengers per day."
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#nonNegativeInteger",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:uniprot",
   "property": "http://dbpedia.org/ontology/uniprot",
   "label": {
    "en": "UniProt",
    "ja": "UniProt"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:atcPrefix",
   "property": "http://dbpedia.org/ontology/atcPrefix",
   "label": {
    "en": "ATC prefix",
    "el": "ATC πρόθεμα",
    "fr": "préfix ATC"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:lastPosition",
   "property": "http://dbpedia.org/ontology/lastPosition",
   "label": {
    "en": "last position",
    "el": "τελευταία θέση"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#positiveInteger",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:numberOfCity",
   "property": "http://dbpedia.org/ontology/numberOfCity",
   "label": {
    "en": "number of contries inside en continent"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#nonNegativeInteger",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:areaOfCatchment",
   "property": "http://dbpedia.org/ontology/areaOfCatchment",
   "label": {
    "en": "area of catchment (m2)",
    "el": "λίμνη (m2)"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#double",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:foundingYear",
   "property": "http://dbpedia.org/ontology/foundingYear",
   "label": {
    "el": "έτος ίδρυσης",
    "en": "founding year",
    "nl": "oprichtingsjaar",
    "es": "año de fundación",
    "de": "Gründungsjahr"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#gYear",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:numberOfPeopleAttending",
   "property": "http://dbpedia.org/ontology/numberOfPeopleAttending",
   "label": {
    "en": "number of people attending",
    "pt": "número de participantes",
    "fr": "nombre de participants"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#nonNegativeInteger",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:eruptionYear",
   "property": "http://dbpedia.org/ontology/eruptionYear",
   "label": {
    "en": "eruption date",
    "de": "Jahr des letzten Ausbruchs",
    "nl": "jaar uitbarsting"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#gYear",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:goalsInLeague",
   "property": "http://dbpedia.org/ontology/goalsInLeague",
   "label": {
    "en": "goals in league",
    "nl": "doelpunten in de competitie"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#nonNegativeInteger",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:subdivision",
   "property": "http://dbpedia.org/ontology/subdivision",
   "label": {
    "en": "subdivision"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:mayorFunction",
   "property": "http://dbpedia.org/ontology/mayorFunction",
   "label": {
    "en": "mayor function of a switzerland settlement"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:cyrilliqueName",
   "property": "http://dbpedia.org/ontology/cyrilliqueName",
   "label": {
    "en": "cyrillique name"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:worstDefeat",
   "property": "http://dbpedia.org/ontology/worstDefeat",
   "label": {
    "en": "worst defeat"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:numberOfStudioAlbums",
   "property": "http://dbpedia.org/ontology/numberOfStudioAlbums",
   "label": {
    "en": "number of studio albums"
   },
   "description": {
    "en": "the number of studio albums released by the musical artist"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#nonNegativeInteger",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:fighter",
   "property": "http://dbpedia.org/ontology/fighter",
   "label": {
    "fr": "combattant",
    "en": "fighter"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:feat",
   "property": "http://dbpedia.org/ontology/feat",
   "label": {
    "en": "feat"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:endReign",
   "property": "http://dbpedia.org/ontology/endReign",
   "label": {
    "en": "end reign"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:policeName",
   "property": "http://dbpedia.org/ontology/policeName",
   "label": {
    "en": "police name"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:careerPoints",
   "property": "http://dbpedia.org/ontology/careerPoints",
   "label": {
    "en": "career points"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#integer",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:numberOfProfessionals",
   "property": "http://dbpedia.org/ontology/numberOfProfessionals",
   "label": {
    "en": "number of professionals",
    "fr": "nombre de professionnels",
    "es": "numero de profesionales"
   },
   "description": {
    "en": "number of people who earns his living from a specified activity."
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#nonNegativeInteger",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:volcanoId",
   "property": "http://dbpedia.org/ontology/volcanoId",
   "label": {
    "en": "volcano id"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:allcinemaId",
   "property": "http://dbpedia.org/ontology/allcinemaId",
   "label": {
    "ja": "allcinema id",
    "en": "allcinema id",
    "el": "allcinema id"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:employersCelebration",
   "property": "http://dbpedia.org/ontology/employersCelebration",
   "label": {
    "en": "employer's celebration"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:fees",
   "property": "http://dbpedia.org/ontology/fees",
   "label": {
    "en": "fees ($)",
    "el": "δίδακτρα ($)"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#double",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:numberOfAlbums",
   "property": "http://dbpedia.org/ontology/numberOfAlbums",
   "label": {
    "en": "number of albums"
   },
   "description": {
    "en": "the total number of albums released by the musical artist"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#nonNegativeInteger",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:certification",
   "property": "http://dbpedia.org/ontology/certification",
   "label": {
    "en": "certification",
    "fr": "certification"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:refseq",
   "property": "http://dbpedia.org/ontology/refseq",
   "label": {
    "en": "RefSeq"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:statisticYear",
   "property": "http://dbpedia.org/ontology/statisticYear",
   "label": {
    "en": "statistic year"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#date",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:projectBudgetFunding",
   "property": "http://dbpedia.org/ontology/projectBudgetFunding",
   "label": {
    "en": "project budget funding ($)"
   },
   "description": {
    "en": "The part of the project budget that is funded by the Organistaions given in the \"FundedBy\" property."
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#double",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:highestPointIsland",
   "property": "http://dbpedia.org/ontology/highestPointIsland",
   "label": {
    "en": "highest point of the island"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:numberOfRooms",
   "property": "http://dbpedia.org/ontology/numberOfRooms",
   "label": {
    "en": "number of rooms",
    "el": "αριθμός δωματίων",
    "nl": "aantal kamers"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#nonNegativeInteger",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:mayorMandate",
   "property": "http://dbpedia.org/ontology/mayorMandate",
   "label": {
    "en": "mayorMandate"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:stationVisitDuration",
   "property": "http://dbpedia.org/ontology/stationVisitDuration",
   "label": {
    "en": "station visit duration (s)"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#double",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:firstLaunchDate",
   "property": "http://dbpedia.org/ontology/firstLaunchDate",
   "label": {
    "en": "first launch date"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#date",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:rgbCoordinateGreen",
   "property": "http://dbpedia.org/ontology/rgbCoordinateGreen",
   "label": {
    "en": "green coordinate in the RGB space"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#nonNegativeInteger",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:electionDate",
   "property": "http://dbpedia.org/ontology/electionDate",
   "label": {
    "en": "election date",
    "de": "Wahltermin"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#date",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:railGauge",
   "property": "http://dbpedia.org/ontology/railGauge",
   "label": {
    "en": "rail gauge (μ)",
    "de": "Spurweite Eisenbahn (μ)"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#double",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:foalDate",
   "property": "http://dbpedia.org/ontology/foalDate",
   "label": {
    "en": "foal date"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#date",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:argueDate",
   "property": "http://dbpedia.org/ontology/argueDate",
   "label": {
    "en": "argue date",
    "el": "δημοφιλής ημερομηνία"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#date",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:licenceNumberLabel",
   "property": "http://dbpedia.org/ontology/licenceNumberLabel",
   "label": {
    "en": "licence number label"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:dateCompleted",
   "property": "http://dbpedia.org/ontology/dateCompleted",
   "label": {
    "en": "date completed",
    "el": "ολοκλήρωση"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#date",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:configuration",
   "property": "http://dbpedia.org/ontology/configuration",
   "label": {
    "en": "configuration",
    "fr": "configuration"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://dbpedia.org/datatype/engineConfiguration",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:icd10",
   "property": "http://dbpedia.org/ontology/icd10",
   "label": {
    "en": "ICD10",
    "nl": "ICD10"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:areaTotal",
   "property": "http://dbpedia.org/ontology/areaTotal",
   "label": {
    "el": "έκταση περιοχής (m2)",
    "fr": "superficie (m2)",
    "en": "area total (m2)",
    "nl": "oppervlakte (m2)",
    "de": "Fläche (m2)"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#double",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:issDockings",
   "property": "http://dbpedia.org/ontology/issDockings",
   "label": {
    "en": "iss dockings"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#nonNegativeInteger",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:isil",
   "property": "http://dbpedia.org/ontology/isil",
   "label": {
    "en": "International Standard Identifier for Libraries and Related Organizations (ISIL)"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:redline",
   "property": "http://dbpedia.org/ontology/redline",
   "label": {
    "en": "redline (kmh)"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#double",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:omim",
   "property": "http://dbpedia.org/ontology/omim",
   "label": {
    "en": "OMIM id",
    "nl": "OMIM id",
    "ja": "OMIM id"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#integer",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:cargoFuel",
   "property": "http://dbpedia.org/ontology/cargoFuel",
   "label": {
    "en": "cargo fuel (g)"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#double",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:regionalCouncil",
   "property": "http://dbpedia.org/ontology/regionalCouncil",
   "label": {
    "en": "regional council"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:numberOfCountries",
   "property": "http://dbpedia.org/ontology/numberOfCountries",
   "label": {
    "en": "number of countries",
    "el": "αριθμός χωρών",
    "pt": "número de países"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#positiveInteger",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:programCost",
   "property": "http://dbpedia.org/ontology/programCost",
   "label": {
    "en": "program cost ($)"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#double",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:currencyCode",
   "property": "http://dbpedia.org/ontology/currencyCode",
   "label": {
    "en": "currency code"
   },
   "description": {
    "en": "ISO 4217 currency designators."
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:lengthReference",
   "property": "http://dbpedia.org/ontology/lengthReference",
   "label": {
    "en": "length reference"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:presidentRegionalCouncilMandate",
   "property": "http://dbpedia.org/ontology/presidentRegionalCouncilMandate",
   "label": {
    "en": "mandate of the president council of the regional council"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:populationDate",
   "property": "http://dbpedia.org/ontology/populationDate",
   "label": {
    "en": "population date"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#date",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:episode",
   "property": "http://dbpedia.org/ontology/episode",
   "label": {
    "en": "episode"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:mgiid",
   "property": "http://dbpedia.org/ontology/mgiid",
   "label": {
    "en": "mgiid",
    "ja": "mgiid"
   },
   "description": {
    "en": "Mouse Genomic Informatics ID"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:websiteLabel",
   "property": "http://dbpedia.org/ontology/websiteLabel",
   "label": {
    "en": "label of a website"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:finalPublicationDate",
   "property": "http://dbpedia.org/ontology/finalPublicationDate",
   "label": {
    "en": "final publication date",
    "nl": "laatste publicatiedatum",
    "de": "Datum der finalen Ausgabe"
   },
   "description": {
    "en": "Date of the final publication.",
    "de": "Datum der allerletzten Veröffentlichung des Periodikums."
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#date",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:budget",
   "property": "http://dbpedia.org/ontology/budget",
   "label": {
    "en": "budget ($)",
    "nl": "budget ($)",
    "el": "προϋπολογισμός ($)"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#double",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:numberOfOffices",
   "property": "http://dbpedia.org/ontology/numberOfOffices",
   "label": {
    "en": "number of offices",
    "de": "Anzahl Büros",
    "el": "αριθμός γραφείων"
   },
   "description": {
    "en": "Number of the company's offices.",
    "el": "Αριθμός γραφείων εταιρείας."
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#nonNegativeInteger",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:hsvCoordinateHue",
   "property": "http://dbpedia.org/ontology/hsvCoordinateHue",
   "label": {
    "en": "hue coordinate in the HSV colour space"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#integer",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:inn",
   "property": "http://dbpedia.org/ontology/inn",
   "label": {
    "en": "INN",
    "fr": "DCI"
   },
   "description": {
    "en": "International Nonproprietary Name given to a pharmaceutical substance"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:musicFormat",
   "property": "http://dbpedia.org/ontology/musicFormat",
   "label": {
    "en": "musicFormat",
    "de": "musikFormate"
   },
   "description": {
    "en": "The format of the album: EP, Single etc."
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:flag",
   "property": "http://dbpedia.org/ontology/flag",
   "label": {
    "en": "flag",
    "el": "σημαία",
    "nl": "vlag",
    "tr": "göndere çekmek"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:longDistancePisteKilometre",
   "property": "http://dbpedia.org/ontology/longDistancePisteKilometre",
   "label": {
    "en": "long distance piste kilometre (μ)"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#double",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:mukhtar",
   "property": "http://dbpedia.org/ontology/mukhtar",
   "label": {
    "en": "mukthar of a lebanon settlement"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:definition",
   "property": "http://dbpedia.org/ontology/definition",
   "label": {
    "fr": "définition",
    "en": "definition",
    "tr": "tanımlar"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:rgbCoordinateBlue",
   "property": "http://dbpedia.org/ontology/rgbCoordinateBlue",
   "label": {
    "en": "bluecoordinate in the RGB space"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#nonNegativeInteger",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:squadNumber",
   "property": "http://dbpedia.org/ontology/squadNumber",
   "label": {
    "en": "squad number"
   },
   "description": {
    "en": "The number that an athlete wears in a team sport."
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#nonNegativeInteger",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:commandModule",
   "property": "http://dbpedia.org/ontology/commandModule",
   "label": {
    "en": "command module"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:numberOfMinistries",
   "property": "http://dbpedia.org/ontology/numberOfMinistries",
   "label": {
    "en": "number of ministries",
    "pt": "numero de ministerios"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#nonNegativeInteger",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:elo",
   "property": "http://dbpedia.org/ontology/elo",
   "label": {
    "en": "ELO rating"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#nonNegativeInteger",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:address",
   "property": "http://dbpedia.org/ontology/address",
   "label": {
    "en": "address",
    "fr": "adresse",
    "nl": "adres",
    "el": "διεύθυνση"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:seniunija",
   "property": "http://dbpedia.org/ontology/seniunija",
   "label": {
    "en": "seniunija"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:offeredClasses",
   "property": "http://dbpedia.org/ontology/offeredClasses",
   "label": {
    "en": "offered classes"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:highestBuildingInYear",
   "property": "http://dbpedia.org/ontology/highestBuildingInYear",
   "label": {
    "en": "highest building in year"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#date",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:lunarEvaTime",
   "property": "http://dbpedia.org/ontology/lunarEvaTime",
   "label": {
    "en": "lunar EVA time (s)"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#double",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:combatant",
   "property": "http://dbpedia.org/ontology/combatant",
   "label": {
    "en": "combatant"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:numberOfStudents",
   "property": "http://dbpedia.org/ontology/numberOfStudents",
   "label": {
    "en": "number of students",
    "el": "αριθμός φοιτητών"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#nonNegativeInteger",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:formerChannel",
   "property": "http://dbpedia.org/ontology/formerChannel",
   "label": {
    "en": "former channel"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:populationTotalRanking",
   "property": "http://dbpedia.org/ontology/populationTotalRanking",
   "label": {
    "en": "total population ranking",
    "pt": "posição no ranking do total da populacao"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#positiveInteger",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:legislativePeriodName",
   "property": "http://dbpedia.org/ontology/legislativePeriodName",
   "label": {
    "en": "legislative period name",
    "de": "Name in der Legislaturperiode"
   },
   "description": {
    "en": "The term of the on-going session (e.g.: \"40th Canadian Parliament\")."
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:finnishName",
   "property": "http://dbpedia.org/ontology/finnishName",
   "label": {
    "en": "finnish name of a sweden settlement"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:modelEndDate",
   "property": "http://dbpedia.org/ontology/modelEndDate",
   "label": {
    "en": "model end date"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#date",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:grossDomesticProductAsOf",
   "property": "http://dbpedia.org/ontology/grossDomesticProductAsOf",
   "label": {
    "en": "gross domestic product as of",
    "pt": "produto interno bruto em"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#date",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:numberOfVillages",
   "property": "http://dbpedia.org/ontology/numberOfVillages",
   "label": {
    "en": "number of villages",
    "id": "jumlah desa/kelurahan"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#nonNegativeInteger",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:artificialSnowArea",
   "property": "http://dbpedia.org/ontology/artificialSnowArea",
   "label": {
    "en": "artificial snow area"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#float",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:port1DockingDate",
   "property": "http://dbpedia.org/ontology/port1DockingDate",
   "label": {
    "en": "port1 docking date"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#date",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:reopened",
   "property": "http://dbpedia.org/ontology/reopened",
   "label": {
    "en": "reopened"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#date",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:staff",
   "property": "http://dbpedia.org/ontology/staff",
   "label": {
    "en": "staff",
    "el": "προσωπικό"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#nonNegativeInteger",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:pubchem",
   "property": "http://dbpedia.org/ontology/pubchem",
   "label": {
    "en": "PubChem",
    "fr": "PubChem",
    "ja": "PubChem"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:highestRank",
   "property": "http://dbpedia.org/ontology/highestRank",
   "label": {
    "en": "highest rank",
    "de": "höchster Ranglistenplatz"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#integer",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:popularVote",
   "property": "http://dbpedia.org/ontology/popularVote",
   "label": {
    "en": "Number of votes given to candidate"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#nonNegativeInteger",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:equity",
   "property": "http://dbpedia.org/ontology/equity",
   "label": {
    "en": "equity ($)"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#double",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:diameter",
   "property": "http://dbpedia.org/ontology/diameter",
   "label": {
    "en": "diameter (μ)",
    "nl": "diameter (μ)",
    "fr": "diamètre (μ)",
    "el": "διάμετρος (μ)"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#double",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:position",
   "property": "http://dbpedia.org/ontology/position",
   "label": {
    "en": "position",
    "el": "Θέση",
    "nl": "positie"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:maximumBoatBeam",
   "property": "http://dbpedia.org/ontology/maximumBoatBeam",
   "label": {
    "en": "maximum boat beam (μ)",
    "el": "μέγιστο_πλάτος_πλοίου (μ)"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#double",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:orbitalFlights",
   "property": "http://dbpedia.org/ontology/orbitalFlights",
   "label": {
    "en": "orbital flights"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#nonNegativeInteger",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:teamSize",
   "property": "http://dbpedia.org/ontology/teamSize",
   "label": {
    "en": "team size"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#nonNegativeInteger",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:scotishName",
   "property": "http://dbpedia.org/ontology/scotishName",
   "label": {
    "en": "scotish name"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:codeSettlement",
   "property": "http://dbpedia.org/ontology/codeSettlement",
   "label": {
    "en": "settlement code"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:avifaunaPopulation",
   "property": "http://dbpedia.org/ontology/avifaunaPopulation",
   "label": {
    "en": "avifauna population"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:distanceToCharingCross",
   "property": "http://dbpedia.org/ontology/distanceToCharingCross",
   "label": {
    "en": "distance to Charing Cross (μ)"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#double",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:mozabiteSettlementName",
   "property": "http://dbpedia.org/ontology/mozabiteSettlementName",
   "label": {
    "en": "mozabite settlement name"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:refcul",
   "property": "http://dbpedia.org/ontology/refcul",
   "label": {
    "en": "reference for cultural data"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:extinctionDate",
   "property": "http://dbpedia.org/ontology/extinctionDate",
   "label": {
    "en": "extinction date",
    "nl": "ontbindingsdatum"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#date",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:tree",
   "property": "http://dbpedia.org/ontology/tree",
   "label": {
    "en": "tree"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:seniority",
   "property": "http://dbpedia.org/ontology/seniority",
   "label": {
    "en": "seniority"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:material",
   "property": "http://dbpedia.org/ontology/material",
   "label": {
    "en": "material",
    "fr": "matériel"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:umbrellaTitle",
   "property": "http://dbpedia.org/ontology/umbrellaTitle",
   "label": {
    "en": "umbrella title",
    "nl": "overkoepelende titel"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:depth",
   "property": "http://dbpedia.org/ontology/depth",
   "label": {
    "en": "depth (μ)",
    "nl": "diepte (μ)",
    "el": "βάθος (μ)",
    "fr": "profondeur (μ)"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#double",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:giniCoefficientAsOf",
   "property": "http://dbpedia.org/ontology/giniCoefficientAsOf",
   "label": {
    "en": "gini coefficient as of",
    "pt": "coeficiente de Gini em"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#date",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:established",
   "property": "http://dbpedia.org/ontology/established",
   "label": {
    "en": "Established"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:length",
   "property": "http://dbpedia.org/ontology/length",
   "label": {
    "el": "μήκος (μ)",
    "fr": "longueur (μ)",
    "en": "length (μ)",
    "nl": "lengte (μ)",
    "de": "Länge (μ)"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#double",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:maximumAreaQuote",
   "property": "http://dbpedia.org/ontology/maximumAreaQuote",
   "label": {
    "en": "maximum area quote"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:numberOfTeams",
   "property": "http://dbpedia.org/ontology/numberOfTeams",
   "label": {
    "en": "number of teams",
    "it": "numero di squadre"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#nonNegativeInteger",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:largestWin",
   "property": "http://dbpedia.org/ontology/largestWin",
   "label": {
    "en": "largest win"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:rankArea",
   "property": "http://dbpedia.org/ontology/rankArea",
   "label": {
    "en": "rank of an area"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#nonNegativeInteger",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:statusYear",
   "property": "http://dbpedia.org/ontology/statusYear",
   "label": {
    "en": "status year"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:numberOfParticipatingAthletes",
   "property": "http://dbpedia.org/ontology/numberOfParticipatingAthletes",
   "label": {
    "en": "number of participating athletes",
    "fr": "nombre d'athlètes participant"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#nonNegativeInteger",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:numberOfVolunteers",
   "property": "http://dbpedia.org/ontology/numberOfVolunteers",
   "label": {
    "en": "number of volunteers",
    "el": "αριθμός εθελοντών"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#nonNegativeInteger",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:deme",
   "property": "http://dbpedia.org/ontology/deme",
   "label": {
    "en": "deme"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:settingOfPlay",
   "property": "http://dbpedia.org/ontology/settingOfPlay",
   "label": {
    "en": "setting of play"
   },
   "description": {
    "en": "The places and time where the play takes place."
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:railwayPlatforms",
   "property": "http://dbpedia.org/ontology/railwayPlatforms",
   "label": {
    "en": "railway platforms",
    "nl": "perrons",
    "el": "αποβάθρα"
   },
   "description": {
    "en": "Information on the type of platform(s) at the station."
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:legalArticle",
   "property": "http://dbpedia.org/ontology/legalArticle",
   "label": {
    "en": "legal article",
    "nl": "wetsartikel"
   },
   "description": {
    "en": "article in code book or statute book referred to in this legal case"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:frenchName",
   "property": "http://dbpedia.org/ontology/frenchName",
   "label": {
    "en": "french name of a settlement"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:surfaceFormOccurrenceOffset",
   "property": "http://dbpedia.org/ontology/surfaceFormOccurrenceOffset",
   "label": {
    "en": "position in which a surface occurs in a text"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:notes",
   "property": "http://dbpedia.org/ontology/notes",
   "label": {
    "en": "notes",
    "fr": "notes"
   },
   "description": {
    "en": "additional notes that better describe the entity"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:catholicPercentage",
   "property": "http://dbpedia.org/ontology/catholicPercentage",
   "label": {
    "en": "catholic percentage"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:sizeMap",
   "property": "http://dbpedia.org/ontology/sizeMap",
   "label": {
    "en": "size map"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:deathAge",
   "property": "http://dbpedia.org/ontology/deathAge",
   "label": {
    "en": "death age"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#nonNegativeInteger",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:iucnCategory",
   "property": "http://dbpedia.org/ontology/iucnCategory",
   "label": {
    "en": "iucn category",
    "nl": "IUCN categorie"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:fdaUniiCode",
   "property": "http://dbpedia.org/ontology/fdaUniiCode",
   "label": {
    "en": "FDA UNII code",
    "pt": "código FDA UNII"
   },
   "description": {
    "en": "FDA Unique Ingredient Identifier (UNII) code for a DBpedia Drug"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:iupacName",
   "property": "http://dbpedia.org/ontology/iupacName",
   "label": {
    "en": "IUPAC name",
    "ja": "IUPAC名"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:wikiPageRevisionID",
   "property": "http://dbpedia.org/ontology/wikiPageRevisionID",
   "label": {
    "en": "Wikipage revision ID"
   },
   "description": {
    "en": "Reserved for DBpedia."
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#integer",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:technique",
   "property": "http://dbpedia.org/ontology/technique",
   "label": {
    "en": "technique",
    "el": "τεχνική",
    "es": "técnica"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:weapon",
   "property": "http://dbpedia.org/ontology/weapon",
   "label": {
    "en": "weapon",
    "nl": "wapen"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:classification",
   "property": "http://dbpedia.org/ontology/classification",
   "label": {
    "en": "classification",
    "nl": "categorie"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:shipBeam",
   "property": "http://dbpedia.org/ontology/shipBeam",
   "label": {
    "en": "ship beam (μ)"
   },
   "description": {
    "en": "The beam of a ship is its width at the widest point."
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#double",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:currentlyUsedFor",
   "property": "http://dbpedia.org/ontology/currentlyUsedFor",
   "label": {
    "en": "currently used for",
    "nl": "huidig gebruik",
    "fr": "usage actuel",
    "es": "uso actual"
   },
   "description": {
    "en": "Current use of the architectural structure, if it is currently being used as anything other than its original purpose."
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:frequency",
   "property": "http://dbpedia.org/ontology/frequency",
   "label": {
    "en": "frequency (Hz)",
    "el": "συχνότητα (Hz)",
    "fr": "fréquence (Hz)"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#double",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:topic",
   "property": "http://dbpedia.org/ontology/topic",
   "label": {
    "en": "topic"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:startReign",
   "property": "http://dbpedia.org/ontology/startReign",
   "label": {
    "en": "start reign"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:detectionMethod",
   "property": "http://dbpedia.org/ontology/detectionMethod",
   "label": {
    "en": "Method of discovery"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:skiPisteKilometre",
   "property": "http://dbpedia.org/ontology/skiPisteKilometre",
   "label": {
    "en": "ski piste kilometre (μ)"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#double",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:totalLaunches",
   "property": "http://dbpedia.org/ontology/totalLaunches",
   "label": {
    "en": "total launches"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#nonNegativeInteger",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:firstFlightEndDate",
   "property": "http://dbpedia.org/ontology/firstFlightEndDate",
   "label": {
    "en": "first flight end date"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#date",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:highestBreak",
   "property": "http://dbpedia.org/ontology/highestBreak",
   "label": {
    "en": "highest break",
    "de": "Höchstes Break"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#integer",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:brainInfoType",
   "property": "http://dbpedia.org/ontology/brainInfoType",
   "label": {
    "en": "brain info type",
    "el": "τύπος νοητικής πληροφόρησης"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:route",
   "property": "http://dbpedia.org/ontology/route",
   "label": {
    "en": "route"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:utcOffset",
   "property": "http://dbpedia.org/ontology/utcOffset",
   "label": {
    "en": "UTC offset"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:wavelength",
   "property": "http://dbpedia.org/ontology/wavelength",
   "label": {
    "en": "wavelength (μ)",
    "fr": "longueur d'onde (μ)"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#double",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:onChromosome",
   "property": "http://dbpedia.org/ontology/onChromosome",
   "label": {
    "en": "on chromosome"
   },
   "description": {
    "en": "the number corresponding to the chromosome on which the gene is located"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#integer",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:certificationDate",
   "property": "http://dbpedia.org/ontology/certificationDate",
   "label": {
    "en": "certification date",
    "nl": "datum certificatie"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#date",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:functionEndYear",
   "property": "http://dbpedia.org/ontology/functionEndYear",
   "label": {
    "en": "function end year",
    "nl": "laatste jaar functie"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#gYear",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:systemRequirements",
   "property": "http://dbpedia.org/ontology/systemRequirements",
   "label": {
    "en": "minimum system requirements"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:sourceElevation",
   "property": "http://dbpedia.org/ontology/sourceElevation",
   "label": {
    "en": "source elevation (μ)"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#double",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:stationStructure",
   "property": "http://dbpedia.org/ontology/stationStructure",
   "label": {
    "en": "station structure",
    "nl": "station structuur"
   },
   "description": {
    "en": "Type of station structure (underground, at-grade, or elevated)."
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:regionalPrefecture",
   "property": "http://dbpedia.org/ontology/regionalPrefecture",
   "label": {
    "en": "regional prefecture"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:numberOfPiersInWater",
   "property": "http://dbpedia.org/ontology/numberOfPiersInWater",
   "label": {
    "en": "number of piers in water",
    "de": "Anzahl der Pfeiler in Wasser"
   },
   "description": {
    "en": "Number of piers standing in a river or other water in normal conditions."
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#nonNegativeInteger",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:departmentPosition",
   "property": "http://dbpedia.org/ontology/departmentPosition",
   "label": {
    "en": "geolocDepartment"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:sameName",
   "property": "http://dbpedia.org/ontology/sameName",
   "label": {
    "en": "same name of a sweden settlement"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:ekatteCode",
   "property": "http://dbpedia.org/ontology/ekatteCode",
   "label": {
    "en": "EKATTE code"
   },
   "description": {
    "en": "Indexing code used by the Bulgarian National Statistical Institute to identify populated places",
    "bg": "Единен класификатор на административно-териториалните и териториалните единици"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:refpol",
   "property": "http://dbpedia.org/ontology/refpol",
   "label": {
    "en": "reference for politic data"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:siren",
   "property": "http://dbpedia.org/ontology/siren",
   "label": {
    "en": "siren number"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#nonNegativeInteger",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:rebuildingYear",
   "property": "http://dbpedia.org/ontology/rebuildingYear",
   "label": {
    "en": "rebuilding year",
    "nl": "herbouw jaar"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#gYear",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:meltingPoint",
   "property": "http://dbpedia.org/ontology/meltingPoint",
   "label": {
    "en": "melting point (K)",
    "de": "Schmelzpunkt (K)",
    "fr": "point de fusion (K)",
    "ja": "融点 (K)"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#double",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:minimumAreaQuote",
   "property": "http://dbpedia.org/ontology/minimumAreaQuote",
   "label": {
    "en": "minimum area quote"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:roofHeight",
   "property": "http://dbpedia.org/ontology/roofHeight",
   "label": {
    "en": "roof height",
    "de": "Höhe Dach"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#nonNegativeInteger",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:countryRank",
   "property": "http://dbpedia.org/ontology/countryRank",
   "label": {
    "en": "country rank",
    "de": "Rang Land"
   },
   "description": {
    "en": "Place of the building in the list of the highest buildings in the country",
    "de": "Der Platz des Gebäudes in der Liste der höchsten Gebäude des Landes"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#nonNegativeInteger",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:registration",
   "property": "http://dbpedia.org/ontology/registration",
   "label": {
    "en": "registration"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:numberOfCompetitors",
   "property": "http://dbpedia.org/ontology/numberOfCompetitors",
   "label": {
    "en": "number of competitors"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#nonNegativeInteger",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:emedicineSubject",
   "property": "http://dbpedia.org/ontology/emedicineSubject",
   "label": {
    "en": "eMedicine subject",
    "nl": "eMedicine onderwerp"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:title",
   "property": "http://dbpedia.org/ontology/title",
   "label": {
    "el": "Τίτλος",
    "en": "title",
    "ja": "タイトル",
    "nl": "titel",
    "es": "título",
    "de": "Titel"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:orbits",
   "property": "http://dbpedia.org/ontology/orbits",
   "label": {
    "en": "orbits"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#integer",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:openAccessContent",
   "property": "http://dbpedia.org/ontology/openAccessContent",
   "label": {
    "en": "open access content",
    "de": "frei zugänglicher Inhalten"
   },
   "description": {
    "en": "Availability of open access content.",
    "de": "Verfügbarkeit von frei zugänglichem Inhalten."
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:power",
   "property": "http://dbpedia.org/ontology/power",
   "label": {
    "en": "power"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:distanceToEdinburgh",
   "property": "http://dbpedia.org/ontology/distanceToEdinburgh",
   "label": {
    "en": "distance to Edinburgh (μ)",
    "el": "απόσταση από το Εδιμβούργο (μ)"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#double",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:upperAge",
   "property": "http://dbpedia.org/ontology/upperAge",
   "label": {
    "en": "upper age"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#nonNegativeInteger",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:formerName",
   "property": "http://dbpedia.org/ontology/formerName",
   "label": {
    "en": "former name",
    "el": "προηγούμενο όνομα"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:subsystem",
   "property": "http://dbpedia.org/ontology/subsystem",
   "label": {
    "en": "subsystem"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:output",
   "property": "http://dbpedia.org/ontology/output",
   "label": {
    "en": "output"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#float",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:spike",
   "property": "http://dbpedia.org/ontology/spike",
   "label": {
    "en": "spike",
    "el": "καρφί",
    "tr": "smaç"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:areaWater",
   "property": "http://dbpedia.org/ontology/areaWater",
   "label": {
    "en": "area water (m2)",
    "nl": "oppervlakte water (m2)",
    "el": "έκταση_υδάτων_περιοχής (m2)"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#double",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:subsystemLink",
   "property": "http://dbpedia.org/ontology/subsystemLink",
   "label": {
    "en": "subsystem link"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:skiTow",
   "property": "http://dbpedia.org/ontology/skiTow",
   "label": {
    "en": "ski tow"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#nonNegativeInteger",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:protectionStatus",
   "property": "http://dbpedia.org/ontology/protectionStatus",
   "label": {
    "en": "monument protection status",
    "nl": "monumentStatus"
   },
   "description": {
    "en": "Just 'Status' is too general. We should be able to distinguish status types since different statuses may require different treatment",
    "nl": "Alleen 'Status' is te algemeen. We moeten soorten statussen kunnen onderscheiden omdat een andere status andere consequenties kan hebben"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:floorCount",
   "property": "http://dbpedia.org/ontology/floorCount",
   "label": {
    "en": "floor count",
    "nl": "verdiepingen",
    "el": "αριθμός ορόφων"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#positiveInteger",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:awayColourHexCode",
   "property": "http://dbpedia.org/ontology/awayColourHexCode",
   "label": {
    "en": "colour hex code of away jersey or its parts",
    "de": "Farben Hex Code des Auswärtstrikots oder Teile dieses"
   },
   "description": {
    "en": "A colour represented by its hex code (e.g.: #FF0000 or #40E0D0)."
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:uciCode",
   "property": "http://dbpedia.org/ontology/uciCode",
   "label": {
    "en": "UCI code",
    "it": "codice UCI"
   },
   "description": {
    "en": "Official UCI code for cycling teams"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:dynasty",
   "property": "http://dbpedia.org/ontology/dynasty",
   "label": {
    "en": "dynasty",
    "nl": "dynastie"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:austrianLand",
   "property": "http://dbpedia.org/ontology/austrianLand",
   "label": {
    "en": "austrian land"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:lieutenancy",
   "property": "http://dbpedia.org/ontology/lieutenancy",
   "label": {
    "en": "lieutenancy"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:timeInSpace",
   "property": "http://dbpedia.org/ontology/timeInSpace",
   "label": {
    "en": "time in space (s)"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#double",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:valvetrain",
   "property": "http://dbpedia.org/ontology/valvetrain",
   "label": {
    "en": "valvetrain"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://dbpedia.org/datatype/valvetrain",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:agglomerationPopulation",
   "property": "http://dbpedia.org/ontology/agglomerationPopulation",
   "label": {
    "en": "agglomerationPopulation"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#integer",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:ibdbId",
   "property": "http://dbpedia.org/ontology/ibdbId",
   "label": {
    "en": "IBDB ID"
   },
   "description": {
    "en": "The Internet Broadway Database ID (IBDB ID) from ibdb.com."
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:lineLength",
   "property": "http://dbpedia.org/ontology/lineLength",
   "label": {
    "en": "line length (μ)",
    "de": "Linienlänge (μ)"
   },
   "description": {
    "en": "Length of the line. Wikipedians usually do not differentiate between track length and line lenght."
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#double",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:ladinName",
   "property": "http://dbpedia.org/ontology/ladinName",
   "label": {
    "en": "city ladin name"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:goalsInNationalTeam",
   "property": "http://dbpedia.org/ontology/goalsInNationalTeam",
   "label": {
    "en": "goals in national team",
    "nl": "interland doelpunten"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#nonNegativeInteger",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:numberOfPads",
   "property": "http://dbpedia.org/ontology/numberOfPads",
   "label": {
    "en": "number of pads"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#nonNegativeInteger",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:shareSource",
   "property": "http://dbpedia.org/ontology/shareSource",
   "label": {
    "en": "share source"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:whaDraft",
   "property": "http://dbpedia.org/ontology/whaDraft",
   "label": {
    "en": "wha draft"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:sessionNumber",
   "property": "http://dbpedia.org/ontology/sessionNumber",
   "label": {
    "en": "session number",
    "pt": "número da sessão"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#integer",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:oversight",
   "property": "http://dbpedia.org/ontology/oversight",
   "label": {
    "en": "oversight"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:numberOfDependency",
   "property": "http://dbpedia.org/ontology/numberOfDependency",
   "label": {
    "en": "number of continent dependencies"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#nonNegativeInteger",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:grayPage",
   "property": "http://dbpedia.org/ontology/grayPage",
   "label": {
    "en": "Gray page"
   },
   "description": {
    "en": "Refers to the famous 1918 edition of Gray's Anatomy."
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#positiveInteger",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:skiLift",
   "property": "http://dbpedia.org/ontology/skiLift",
   "label": {
    "en": "ski lift"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#nonNegativeInteger",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:rankingsDoubles",
   "property": "http://dbpedia.org/ontology/rankingsDoubles",
   "label": {
    "en": "doubles rankings"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#nonNegativeInteger",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:ordination",
   "property": "http://dbpedia.org/ontology/ordination",
   "label": {
    "en": "Ordination"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#date",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:kanjiName",
   "property": "http://dbpedia.org/ontology/kanjiName",
   "label": {
    "en": "kanji name"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:mayorTitle",
   "property": "http://dbpedia.org/ontology/mayorTitle",
   "label": {
    "en": "mayor title of a hungarian settlement"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:publiclyAccessible",
   "property": "http://dbpedia.org/ontology/publiclyAccessible",
   "label": {
    "en": "publicly accessible"
   },
   "description": {
    "en": "describes in what way this site is accessible for public"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:managerTitle",
   "property": "http://dbpedia.org/ontology/managerTitle",
   "label": {
    "en": "manager title"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:casNumber",
   "property": "http://dbpedia.org/ontology/casNumber",
   "label": {
    "en": "CAS number",
    "fr": "numéro CAS",
    "ja": "CAS番号"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:orbitalInclination",
   "property": "http://dbpedia.org/ontology/orbitalInclination",
   "label": {
    "en": "orbital inclination"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#float",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:flagCaption",
   "property": "http://dbpedia.org/ontology/flagCaption",
   "label": {
    "en": "flagCaption"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:locality",
   "property": "http://dbpedia.org/ontology/locality",
   "label": {
    "en": "locality of a switzerland settlement"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:appearancesInNationalTeam",
   "property": "http://dbpedia.org/ontology/appearancesInNationalTeam",
   "label": {
    "en": "appearances in national team",
    "el": "εμφανίσεις στην εθνική ομάδα"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#nonNegativeInteger",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:rankInFinalMedalCount",
   "property": "http://dbpedia.org/ontology/rankInFinalMedalCount",
   "label": {
    "en": "rank in final medal count"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#positiveInteger",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:thumbnailCaption",
   "property": "http://dbpedia.org/ontology/thumbnailCaption",
   "label": {
    "en": "thumbnailCaption"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:operatingIncome",
   "property": "http://dbpedia.org/ontology/operatingIncome",
   "label": {
    "en": "operating income ($)"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#double",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:imdbId",
   "property": "http://dbpedia.org/ontology/imdbId",
   "label": {
    "en": "IMDB id",
    "nl": "IMDB id",
    "el": "imdb id",
    "ja": "IMDb id"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:missions",
   "property": "http://dbpedia.org/ontology/missions",
   "label": {
    "en": "missions",
    "el": "αποστολές"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#nonNegativeInteger",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:sharingOutPopulationYear",
   "property": "http://dbpedia.org/ontology/sharingOutPopulationYear",
   "label": {
    "en": "sharing out year"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:hasSurfaceForm",
   "property": "http://dbpedia.org/ontology/hasSurfaceForm",
   "label": {
    "el": "επιφάνεια από"
   },
   "description": {
    "en": "Reserved for DBpedia."
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:facilityId",
   "property": "http://dbpedia.org/ontology/facilityId",
   "label": {
    "en": "facility id"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#integer",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:outskirts",
   "property": "http://dbpedia.org/ontology/outskirts",
   "label": {
    "en": "outskirts"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:dec",
   "property": "http://dbpedia.org/ontology/dec",
   "label": {
    "en": "dec"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:lunarSurfaceTime",
   "property": "http://dbpedia.org/ontology/lunarSurfaceTime",
   "label": {
    "en": "lunar surface time (s)"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#double",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:numberOfClubs",
   "property": "http://dbpedia.org/ontology/numberOfClubs",
   "label": {
    "en": "number of clubs",
    "fr": "nombre de clubs",
    "es": "numero de clubs"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#nonNegativeInteger",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:majorityFloorLeader",
   "property": "http://dbpedia.org/ontology/majorityFloorLeader",
   "label": {
    "en": "majority floor leader"
   },
   "description": {
    "en": "number of office holder"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#integer",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:activity",
   "property": "http://dbpedia.org/ontology/activity",
   "label": {
    "en": "activity"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:numberOfFederalDeputies",
   "property": "http://dbpedia.org/ontology/numberOfFederalDeputies",
   "label": {
    "en": "Number Of Federal Deputies",
    "pt": "numero de deputados federais"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#nonNegativeInteger",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:wikiPageID",
   "property": "http://dbpedia.org/ontology/wikiPageID",
   "label": {
    "en": "Wikipage page ID"
   },
   "description": {
    "en": "Reserved for DBpedia."
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#integer",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:blazonRatio",
   "property": "http://dbpedia.org/ontology/blazonRatio",
   "label": {
    "en": "blazon ratio"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#double",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:homeColourHexCode",
   "property": "http://dbpedia.org/ontology/homeColourHexCode",
   "label": {
    "en": "colour hex code of home jersey or its parts",
    "de": "Farben Hex Code des Heimtrikots oder Teile dieses"
   },
   "description": {
    "en": "A colour represented by its hex code (e.g.: #FF0000 or #40E0D0)."
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:sequenceNumber",
   "property": "http://dbpedia.org/ontology/sequenceNumber",
   "label": {
    "en": "sequence number"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#nonNegativeInteger",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:chaouiSettlementName",
   "property": "http://dbpedia.org/ontology/chaouiSettlementName",
   "label": {
    "en": "chaoui settlement name"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:neighbourhood",
   "property": "http://dbpedia.org/ontology/neighbourhood",
   "label": {
    "en": "neighbourhood of a hungarian settlement"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:sharingOutPopulationName",
   "property": "http://dbpedia.org/ontology/sharingOutPopulationName",
   "label": {
    "en": "sharing out population name"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:stationEvaDuration",
   "property": "http://dbpedia.org/ontology/stationEvaDuration",
   "label": {
    "en": "station EVA duration (s)"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#double",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:parliamentType",
   "property": "http://dbpedia.org/ontology/parliamentType",
   "label": {
    "en": "parliament type"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:mirDockings",
   "property": "http://dbpedia.org/ontology/mirDockings",
   "label": {
    "en": "mir dockings"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#nonNegativeInteger",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:believers",
   "property": "http://dbpedia.org/ontology/believers",
   "label": {
    "en": "Believers"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:humanDevelopmentIndexAsOf",
   "property": "http://dbpedia.org/ontology/humanDevelopmentIndexAsOf",
   "label": {
    "en": "human development index as of",
    "pt": "Índice de desenvolvimento humano em"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#date",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:premiereDate",
   "property": "http://dbpedia.org/ontology/premiereDate",
   "label": {
    "en": "premiere date"
   },
   "description": {
    "en": "Date the play was first performed."
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#date",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:cityLink",
   "property": "http://dbpedia.org/ontology/cityLink",
   "label": {
    "en": "city link"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:yearOfConstruction",
   "property": "http://dbpedia.org/ontology/yearOfConstruction",
   "label": {
    "en": "year of construction",
    "nl": "bouwjaar",
    "de": "Baujahr",
    "el": "έτος κατασκευής"
   },
   "description": {
    "en": "The year in which construction of the Place was finished.",
    "el": "Το έτος στο οποίο ολοκληρώθηκε η κατασκευή ενός μέρους."
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#gYear",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:areaUrban",
   "property": "http://dbpedia.org/ontology/areaUrban",
   "label": {
    "en": "area urban (m2)",
    "el": "αστική περιοχή (m2)"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#double",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:transmission",
   "property": "http://dbpedia.org/ontology/transmission",
   "label": {
    "en": "transmission",
    "el": "μετάδοση"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:personName",
   "property": "http://dbpedia.org/ontology/personName",
   "label": {
    "en": "personName"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:numberOfParticipatingFemaleAthletes",
   "property": "http://dbpedia.org/ontology/numberOfParticipatingFemaleAthletes",
   "label": {
    "en": "number of participating female athletes",
    "fr": "nombre d'athlètes participant féminins"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#nonNegativeInteger",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:routeStartDirection",
   "property": "http://dbpedia.org/ontology/routeStartDirection",
   "label": {
    "en": "road start direction",
    "de": "Himmelsrichtung des Wegstarts"
   },
   "description": {
    "en": "End of the route. For U.S. roads, this should be either \"South\" or \"West\" per the standards set by the U.S. Roads project.",
    "de": "Himmelsrichtung des Anfangs des Verkehrsweges."
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:numberOfEntrances",
   "property": "http://dbpedia.org/ontology/numberOfEntrances",
   "label": {
    "en": "number of entrances",
    "el": "αριθμός εισόδων",
    "nl": "aantal ingangen"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#nonNegativeInteger",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:senior",
   "property": "http://dbpedia.org/ontology/senior",
   "label": {
    "en": "senior"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:hsvCoordinateValue",
   "property": "http://dbpedia.org/ontology/hsvCoordinateValue",
   "label": {
    "en": "value coordinate in the HSV colour space"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#integer",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:welshName",
   "property": "http://dbpedia.org/ontology/welshName",
   "label": {
    "en": "welsh name"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:penaltiesTeamB",
   "property": "http://dbpedia.org/ontology/penaltiesTeamB",
   "label": {
    "en": "Penalties Team B"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:characterInPlay",
   "property": "http://dbpedia.org/ontology/characterInPlay",
   "label": {
    "en": "character in play"
   },
   "description": {
    "en": "Name of a character in play."
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:sizeBlazon",
   "property": "http://dbpedia.org/ontology/sizeBlazon",
   "label": {
    "en": "size blazon"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:waterArea",
   "property": "http://dbpedia.org/ontology/waterArea",
   "label": {
    "en": "area of water (m2)"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#double",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:torqueOutput",
   "property": "http://dbpedia.org/ontology/torqueOutput",
   "label": {
    "en": "torque output (Nm)"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#double",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:greekName",
   "property": "http://dbpedia.org/ontology/greekName",
   "label": {
    "en": "city greek name"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:numberOfEpisodes",
   "property": "http://dbpedia.org/ontology/numberOfEpisodes",
   "label": {
    "en": "number of episodes",
    "el": "αριθμός επειδοδίων"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#nonNegativeInteger",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:cannonNumber",
   "property": "http://dbpedia.org/ontology/cannonNumber",
   "label": {
    "en": "cannon number"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#nonNegativeInteger",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:bgafdId",
   "property": "http://dbpedia.org/ontology/bgafdId",
   "label": {
    "en": "bgafd id",
    "el": "bgafd id",
    "pt": "código no bgafd"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:limit",
   "property": "http://dbpedia.org/ontology/limit",
   "label": {
    "en": "limit"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:populationRural",
   "property": "http://dbpedia.org/ontology/populationRural",
   "label": {
    "en": "population rural"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#nonNegativeInteger",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:startDate",
   "property": "http://dbpedia.org/ontology/startDate",
   "label": {
    "en": "start date",
    "nl": "startdatum",
    "fr": "date de début",
    "es": "fecha de inicio"
   },
   "description": {
    "en": "The start date of the event."
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#date",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:refseqprotein",
   "property": "http://dbpedia.org/ontology/refseqprotein",
   "label": {
    "en": "refseq protein",
    "ja": "refseq protein"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:areaTotalRanking",
   "property": "http://dbpedia.org/ontology/areaTotalRanking",
   "label": {
    "en": "total area ranking",
    "el": "συνολική περιοχή"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#positiveInteger",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:abbreviation",
   "property": "http://dbpedia.org/ontology/abbreviation",
   "label": {
    "el": "συντομογραφία",
    "fr": "abréviation",
    "en": "abbreviation",
    "nl": "afkorting",
    "pl": "skrót",
    "de": "Abkürzung"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:firstAscentYear",
   "property": "http://dbpedia.org/ontology/firstAscentYear",
   "label": {
    "en": "year of first ascent",
    "nl": "jaar van de eerste beklimming"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#gYear",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:routeNumber",
   "property": "http://dbpedia.org/ontology/routeNumber",
   "label": {
    "en": "route number"
   },
   "description": {
    "en": "The number of the route."
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:frequentlyUpdated",
   "property": "http://dbpedia.org/ontology/frequentlyUpdated",
   "label": {
    "en": "frequently updated"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:v_hb",
   "property": "http://dbpedia.org/ontology/v_hb",
   "label": {
    "en": "V_hb"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#integer",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:apoapsis",
   "property": "http://dbpedia.org/ontology/apoapsis",
   "label": {
    "en": "apoapsis (μ)",
    "el": "απόαψης (μ)"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#double",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:width",
   "property": "http://dbpedia.org/ontology/width",
   "label": {
    "en": "width (μ)",
    "nl": "breedte (μ)",
    "de": "Breite (μ)",
    "el": "πλάτος (μ)"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#double",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:minimumDischarge",
   "property": "http://dbpedia.org/ontology/minimumDischarge",
   "label": {
    "en": "minimum discharge (m³/s)"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#double",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:discovery",
   "property": "http://dbpedia.org/ontology/discovery",
   "label": {
    "en": "date when the island has been discovered",
    "nl": "datum waarop het eiland is ontdekt"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:lunarLandingSite",
   "property": "http://dbpedia.org/ontology/lunarLandingSite",
   "label": {
    "en": "lunar landing site"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:rebuildingDate",
   "property": "http://dbpedia.org/ontology/rebuildingDate",
   "label": {
    "en": "rebuilding date"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#date",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:decommissioningDate",
   "property": "http://dbpedia.org/ontology/decommissioningDate",
   "label": {
    "en": "decommissioning date"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#date",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:militaryCommand",
   "property": "http://dbpedia.org/ontology/militaryCommand",
   "label": {
    "en": "military command"
   },
   "description": {
    "en": "For persons who are notable as commanding officers, the units they commanded. Dates should be given if multiple notable commands were held."
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:numberOfSettlement",
   "property": "http://dbpedia.org/ontology/numberOfSettlement",
   "label": {
    "en": "number of settlement inside a department"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#nonNegativeInteger",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:introductionDate",
   "property": "http://dbpedia.org/ontology/introductionDate",
   "label": {
    "en": "introduction date"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#date",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:populationRuralDensity",
   "property": "http://dbpedia.org/ontology/populationRuralDensity",
   "label": {
    "en": "population density rural (/sqkm)"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#double",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:longName",
   "property": "http://dbpedia.org/ontology/longName",
   "label": {
    "en": "longName",
    "nl": "volledige naam"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:marketCapitalisation",
   "property": "http://dbpedia.org/ontology/marketCapitalisation",
   "label": {
    "en": "market capitalisation ($)"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#double",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:topFloorHeight",
   "property": "http://dbpedia.org/ontology/topFloorHeight",
   "label": {
    "en": "tor floor height",
    "de": "Höhe der höchsten Etage"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#nonNegativeInteger",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:ethnicGroupsInYear",
   "property": "http://dbpedia.org/ontology/ethnicGroupsInYear",
   "label": {
    "en": "ethnic groups in year"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#gYear",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:battleHonours",
   "property": "http://dbpedia.org/ontology/battleHonours",
   "label": {
    "en": "battle honours"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:climbUpNumber",
   "property": "http://dbpedia.org/ontology/climbUpNumber",
   "label": {
    "en": "clip up number"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#nonNegativeInteger",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:firstPublicationYear",
   "property": "http://dbpedia.org/ontology/firstPublicationYear",
   "label": {
    "en": "first publication year",
    "de": "Jahr der Erstausgabe",
    "el": "πρώτο έτος δημοσίευσης"
   },
   "description": {
    "en": "Year of the first publication.",
    "de": "Jahr der ersten Veröffentlichung des Periodikums.",
    "el": "Έτος της πρώτης δημοσίευσης."
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#gYear",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:partialFailedLaunches",
   "property": "http://dbpedia.org/ontology/partialFailedLaunches",
   "label": {
    "en": "partial failed launches"
   },
   "description": {
    "en": "total number of launches resulting in partial failure"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#nonNegativeInteger",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:nameDay",
   "property": "http://dbpedia.org/ontology/nameDay",
   "label": {
    "en": "name day",
    "el": "ονομαστική εορτή",
    "pl": "imieniny"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#date",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:millsCodeDutch",
   "property": "http://dbpedia.org/ontology/millsCodeDutch",
   "label": {
    "en": "mill code NL",
    "nl": "molen code NL"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:japanName",
   "property": "http://dbpedia.org/ontology/japanName",
   "label": {
    "en": "japan name"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:geneLocationEnd",
   "property": "http://dbpedia.org/ontology/geneLocationEnd",
   "label": {
    "en": "gene location end",
    "ja": "遺伝子座のエンド座標"
   },
   "description": {
    "en": "the end of the gene"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#integer",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:games",
   "property": "http://dbpedia.org/ontology/games",
   "label": {
    "en": "games",
    "el": "αγώνες"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:wins",
   "property": "http://dbpedia.org/ontology/wins",
   "label": {
    "en": "wins",
    "el": "νίκες",
    "nl": "zeges"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#nonNegativeInteger",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:fuelConsumption",
   "property": "http://dbpedia.org/ontology/fuelConsumption",
   "label": {
    "en": "fuel consumption",
    "nl": "brandstofverbruik"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:longDistancePisteNumber",
   "property": "http://dbpedia.org/ontology/longDistancePisteNumber",
   "label": {
    "en": "long distance piste number"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#nonNegativeInteger",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:mascot",
   "property": "http://dbpedia.org/ontology/mascot",
   "label": {
    "en": "mascot",
    "pt": "mascote",
    "fr": "mascotte"
   },
   "description": {
    "en": "something, especially a person or animal, used to symbolize a sports team, company, organization or other group.",
    "fr": "Animal, poupée, objets divers servant de porte-bonheur ou d’emblème."
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:projectBudgetTotal",
   "property": "http://dbpedia.org/ontology/projectBudgetTotal",
   "label": {
    "en": "project budget total ($)"
   },
   "description": {
    "en": "The total budget of the research project."
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#double",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:shoots",
   "property": "http://dbpedia.org/ontology/shoots",
   "label": {
    "en": "shoots"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:colourName",
   "property": "http://dbpedia.org/ontology/colourName",
   "label": {
    "en": "色名",
    "de": "Farbenname",
    "fr": "nom de couleur"
   },
   "description": {
    "en": "A colour represented by a string holding its name (e.g.: red or green)."
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:startYearOfSales",
   "property": "http://dbpedia.org/ontology/startYearOfSales",
   "label": {
    "en": "start year of sales"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#gYear",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:introduced",
   "property": "http://dbpedia.org/ontology/introduced",
   "label": {
    "en": "introduced"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#date",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:gameModus",
   "property": "http://dbpedia.org/ontology/gameModus",
   "label": {
    "en": "Modus the game can be played in"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:populationQuote",
   "property": "http://dbpedia.org/ontology/populationQuote",
   "label": {
    "en": "population quote"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:initiallyUsedFor",
   "property": "http://dbpedia.org/ontology/initiallyUsedFor",
   "label": {
    "en": "initally used for",
    "fr": "usage initial",
    "es": "uso inicial"
   },
   "description": {
    "en": "Initial use of the architectural structure."
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:day",
   "property": "http://dbpedia.org/ontology/day",
   "label": {
    "en": "day",
    "el": "ημέρα",
    "fr": "jour"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#date",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:otherName",
   "property": "http://dbpedia.org/ontology/otherName",
   "label": {
    "en": "other name"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:commissioningDate",
   "property": "http://dbpedia.org/ontology/commissioningDate",
   "label": {
    "en": "commissioning date"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#date",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:minimumArea",
   "property": "http://dbpedia.org/ontology/minimumArea",
   "label": {
    "en": "minimum area"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:playingTime",
   "property": "http://dbpedia.org/ontology/playingTime",
   "label": {
    "en": "playing time (s)",
    "nl": "speeltijd (s)"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#double",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:functionStartYear",
   "property": "http://dbpedia.org/ontology/functionStartYear",
   "label": {
    "en": "function start year"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#gYear",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:decoration",
   "property": "http://dbpedia.org/ontology/decoration",
   "label": {
    "en": "decoration"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:volume",
   "property": "http://dbpedia.org/ontology/volume",
   "label": {
    "en": "volume (μ³)",
    "nl": "volume (μ³)",
    "el": "όγκος (μ³)",
    "fr": "volume (μ³)"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#double",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:trainerYears",
   "property": "http://dbpedia.org/ontology/trainerYears",
   "label": {
    "en": "trainer years",
    "nl": "trainersjaren"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#gYear",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:productionEndYear",
   "property": "http://dbpedia.org/ontology/productionEndYear",
   "label": {
    "en": "production end year",
    "nl": "productie eindjaar"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#gYear",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:bridgeCarries",
   "property": "http://dbpedia.org/ontology/bridgeCarries",
   "label": {
    "en": "bridge carries",
    "el": "γέφυρα μεταφοράς"
   },
   "description": {
    "en": "Type of vehicles the bridge carries."
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:algerianSettlementName",
   "property": "http://dbpedia.org/ontology/algerianSettlementName",
   "label": {
    "en": "algerian settlement name"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:other",
   "property": "http://dbpedia.org/ontology/other",
   "label": {
    "en": "other"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#integer",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:mayorCouncillor",
   "property": "http://dbpedia.org/ontology/mayorCouncillor",
   "label": {
    "en": "councillor of an austrian mayor"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:skiPisteNumber",
   "property": "http://dbpedia.org/ontology/skiPisteNumber",
   "label": {
    "en": "ski piste number"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#nonNegativeInteger",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:dateOfBurial",
   "property": "http://dbpedia.org/ontology/dateOfBurial",
   "label": {
    "en": "date of burial",
    "nl": "datum begrafenis"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#date",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:icdo",
   "property": "http://dbpedia.org/ontology/icdo",
   "label": {
    "en": "ICDO",
    "nl": "ICDO"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:numberOfLaunches",
   "property": "http://dbpedia.org/ontology/numberOfLaunches",
   "label": {
    "en": "number of launches"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#nonNegativeInteger",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:displacement",
   "property": "http://dbpedia.org/ontology/displacement",
   "label": {
    "en": "displacement (μ³)"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#double",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:projectType",
   "property": "http://dbpedia.org/ontology/projectType",
   "label": {
    "en": "project type"
   },
   "description": {
    "en": "The type of the research project. Mostly used for the funding schemes of the European Union, for instance: Specific Targeted Research Projects (STREP), Network of Excellence (NoE) or Integrated Project."
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:disappearanceDate",
   "property": "http://dbpedia.org/ontology/disappearanceDate",
   "label": {
    "en": "date disappearance of a populated place"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#date",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:irishName",
   "property": "http://dbpedia.org/ontology/irishName",
   "label": {
    "en": "irish name"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:finalPublicationYear",
   "property": "http://dbpedia.org/ontology/finalPublicationYear",
   "label": {
    "en": "final publication year",
    "de": "Jahr der finalen Ausgabe"
   },
   "description": {
    "en": "Year of the final publication.",
    "de": "Jahr der allerletzten Veröffentlichung des Periodikums."
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#gYear",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:distance",
   "property": "http://dbpedia.org/ontology/distance",
   "label": {
    "en": "distance (μ)",
    "de": "Entfernung (μ)"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#double",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:cmykCoordinateBlack",
   "property": "http://dbpedia.org/ontology/cmykCoordinateBlack",
   "label": {
    "en": "black coordinate in the CMYK space"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#integer",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:motto",
   "property": "http://dbpedia.org/ontology/motto",
   "label": {
    "el": "σύνθημα",
    "fr": "devise",
    "en": "motto",
    "nl": "motto",
    "pt": "lema"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:oldcode",
   "property": "http://dbpedia.org/ontology/oldcode",
   "label": {
    "en": "oldcode"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:decay",
   "property": "http://dbpedia.org/ontology/decay",
   "label": {
    "en": "decay",
    "el": "αποσύνθεση"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#date",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:nssdcId",
   "property": "http://dbpedia.org/ontology/nssdcId",
   "label": {
    "en": "NSSDC ID"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:iafdId",
   "property": "http://dbpedia.org/ontology/iafdId",
   "label": {
    "en": "iafd id",
    "el": "iafd id",
    "pt": "código no iafd"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:maoriName",
   "property": "http://dbpedia.org/ontology/maoriName",
   "label": {
    "en": "maori name"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:runtime",
   "property": "http://dbpedia.org/ontology/runtime",
   "label": {
    "en": "runtime (s)",
    "nl": "duur (s)",
    "el": "διάρκεια (s)",
    "fr": "durée (s)"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#double",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:rankingWins",
   "property": "http://dbpedia.org/ontology/rankingWins",
   "label": {
    "en": "ranking wins",
    "de": "Siege in Ranglistenturnieren"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#nonNegativeInteger",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:closingDate",
   "property": "http://dbpedia.org/ontology/closingDate",
   "label": {
    "en": "closing date",
    "el": "ημερομηνία κλεισίματος",
    "fr": "date de fermeture"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#date",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:agglomerationArea",
   "property": "http://dbpedia.org/ontology/agglomerationArea",
   "label": {
    "en": "area of a agglomeration"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:cmykCoordinateCyanic",
   "property": "http://dbpedia.org/ontology/cmykCoordinateCyanic",
   "label": {
    "en": "cyanic coordinate in the CMYK space"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#integer",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:frenchNickname",
   "property": "http://dbpedia.org/ontology/frenchNickname",
   "label": {
    "en": "french nickname for something"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:powerOutput",
   "property": "http://dbpedia.org/ontology/powerOutput",
   "label": {
    "en": "power output (W)"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#double",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:buildingEndYear",
   "property": "http://dbpedia.org/ontology/buildingEndYear",
   "label": {
    "en": "building end year",
    "nl": "bouw eindjaar",
    "el": "έτος λήξης κατασκευής"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#gYear",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:maximumDepth",
   "property": "http://dbpedia.org/ontology/maximumDepth",
   "label": {
    "en": "maximum depth (μ)",
    "el": "μέγιστο_βάθος (μ)"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#double",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:rankPopulation",
   "property": "http://dbpedia.org/ontology/rankPopulation",
   "label": {
    "en": "rank of a population"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#nonNegativeInteger",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:period",
   "property": "http://dbpedia.org/ontology/period",
   "label": {
    "en": "event period",
    "nl": "periode"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:comitat",
   "property": "http://dbpedia.org/ontology/comitat",
   "label": {
    "en": "comitat of a settlement"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:leadership",
   "property": "http://dbpedia.org/ontology/leadership",
   "label": {
    "en": "leadership"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:penaltyScore",
   "property": "http://dbpedia.org/ontology/penaltyScore",
   "label": {
    "en": "penalty score"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#integer",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:areaCode",
   "property": "http://dbpedia.org/ontology/areaCode",
   "label": {
    "de": "Vorwahl",
    "en": "area code",
    "nl": "netnummer",
    "el": "κωδικός_περιοχής"
   },
   "description": {
    "en": "Area code for telephone numbers."
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:free",
   "property": "http://dbpedia.org/ontology/free",
   "label": {
    "en": "free"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:endangeredSince",
   "property": "http://dbpedia.org/ontology/endangeredSince",
   "label": {
    "en": "endangered since",
    "pt": "em perigo desde"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#date",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:watercourse",
   "property": "http://dbpedia.org/ontology/watercourse",
   "label": {
    "en": "watercourse"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:issn",
   "property": "http://dbpedia.org/ontology/issn",
   "label": {
    "en": "issn",
    "nl": "ISSN",
    "el": "issn",
    "de": "ISSN"
   },
   "description": {
    "en": "International Standard Serial Number (ISSN)"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:heightAboveAverageTerrain",
   "property": "http://dbpedia.org/ontology/heightAboveAverageTerrain",
   "label": {
    "en": "height above average terrain (μ)"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#double",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:pisciculturalPopulation",
   "property": "http://dbpedia.org/ontology/pisciculturalPopulation",
   "label": {
    "en": "piscicultural population"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:chEBI",
   "property": "http://dbpedia.org/ontology/chEBI",
   "label": {
    "en": "ChEBI"
   },
   "description": {
    "en": "A unique identifier for the drug in the Chemical Entities of Biological Interest (ChEBI) ontology"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:relief",
   "property": "http://dbpedia.org/ontology/relief",
   "label": {
    "en": "relief"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:digitalChannel",
   "property": "http://dbpedia.org/ontology/digitalChannel",
   "label": {
    "en": "digital channel"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:aircraftType",
   "property": "http://dbpedia.org/ontology/aircraftType",
   "label": {
    "en": "aircraft type",
    "el": "τύπος αεροσκάφους",
    "es": "tipo de avión"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:leaderTitle",
   "property": "http://dbpedia.org/ontology/leaderTitle",
   "label": {
    "en": "leader title",
    "el": "τίτλος_αρχηγού"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:urbanArea",
   "property": "http://dbpedia.org/ontology/urbanArea",
   "label": {
    "en": "urban area"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:prospectLeague",
   "property": "http://dbpedia.org/ontology/prospectLeague",
   "label": {
    "en": "prospect league"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:maidenVoyage",
   "property": "http://dbpedia.org/ontology/maidenVoyage",
   "label": {
    "en": "maiden voyage"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#date",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:month",
   "property": "http://dbpedia.org/ontology/month",
   "label": {
    "en": "month",
    "el": "μήνας",
    "de": "Monat"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:architecturalMovement",
   "property": "http://dbpedia.org/ontology/architecturalMovement",
   "label": {
    "en": "architectural movement"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:destructionDate",
   "property": "http://dbpedia.org/ontology/destructionDate",
   "label": {
    "en": "destruction date",
    "nl": "sloopdatum",
    "el": "ημερομηνία καταστροφής"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#date",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:touaregSettlementName",
   "property": "http://dbpedia.org/ontology/touaregSettlementName",
   "label": {
    "en": "touareg settlement name"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:reopeningYear",
   "property": "http://dbpedia.org/ontology/reopeningYear",
   "label": {
    "en": "reopening year",
    "nl": "heropening jaar"
   },
   "description": {
    "en": "Year of reopening the architectural structure."
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#gYear",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:impactFactorAsOf",
   "property": "http://dbpedia.org/ontology/impactFactorAsOf",
   "label": {
    "en": "impact factor as of",
    "de": "Impact Factor ist von"
   },
   "description": {
    "en": "Census year of the imapct factor.",
    "de": "Erhebungsjahr des Impact Factors."
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#gYear",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:numberOfMembersAsOf",
   "property": "http://dbpedia.org/ontology/numberOfMembersAsOf",
   "label": {
    "en": "number of members as of",
    "pt": "numero de membros em"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#date",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:noteOnPlaceOfBurial",
   "property": "http://dbpedia.org/ontology/noteOnPlaceOfBurial",
   "label": {
    "en": "note on place of burial"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:access",
   "property": "http://dbpedia.org/ontology/access",
   "label": {
    "en": "access",
    "el": "πρόσβαση"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:demolitionDate",
   "property": "http://dbpedia.org/ontology/demolitionDate",
   "label": {
    "en": "demolition date",
    "el": "ημερομηνία κατεδάφισης"
   },
   "description": {
    "en": "The date the building was demolished."
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#date",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:lunarSampleMass",
   "property": "http://dbpedia.org/ontology/lunarSampleMass",
   "label": {
    "en": "lunar sample mass (g)"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#double",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:affiliate",
   "property": "http://dbpedia.org/ontology/affiliate",
   "label": {
    "en": "affiliate"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:occitanName",
   "property": "http://dbpedia.org/ontology/occitanName",
   "label": {
    "en": "city occitan name"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:filmAudioType",
   "property": "http://dbpedia.org/ontology/filmAudioType",
   "label": {
    "en": "film audio type"
   },
   "description": {
    "en": "specifies the audio type of the film i.e. 'sound' or 'silent'"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:longtype",
   "property": "http://dbpedia.org/ontology/longtype",
   "label": {
    "en": "longtype"
   },
   "description": {
    "en": "can be used to include more informations e.g. the name of the artist that a tribute album is in honor of"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:campusSize",
   "property": "http://dbpedia.org/ontology/campusSize",
   "label": {
    "en": "campus size (m2)"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#double",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:areaRural",
   "property": "http://dbpedia.org/ontology/areaRural",
   "label": {
    "en": "area rural (m2)",
    "el": "αγροτική περιοχή (m2)"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#double",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:decideDate",
   "property": "http://dbpedia.org/ontology/decideDate",
   "label": {
    "en": "decide date"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#date",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:quotation",
   "property": "http://dbpedia.org/ontology/quotation",
   "label": {
    "en": "quotation",
    "fr": "citation",
    "es": "cita"
   },
   "description": {
    "en": "A quotation is the repetition of one expression as part of another one, particularly when the quoted expression is well-known or explicitly attributed by citation to its original source.",
    "fr": "Une citation est la reproduction d'un court extrait d'un propos ou d'un écrit antérieur dans la rédaction d'un texte ou dans une forme d'expression orale.",
    "es": "En su acepción más amplia, una cita es un recurso retórico que consiste en reproducir un fragmento de una expresión humana respetando su formulación original."
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:barangays",
   "property": "http://dbpedia.org/ontology/barangays",
   "label": {
    "en": "barangays"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:managerYears",
   "property": "http://dbpedia.org/ontology/managerYears",
   "label": {
    "en": "manager years"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#date",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:mainspan",
   "property": "http://dbpedia.org/ontology/mainspan",
   "label": {
    "en": "mainspan (μ)",
    "fr": "portée principale (μ)",
    "el": "κύρια καμάρα (μ)"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#double",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:numberOfCrew",
   "property": "http://dbpedia.org/ontology/numberOfCrew",
   "label": {
    "en": "number of crew",
    "el": "αριθμός πληρώματος",
    "nl": "aantal bemanningsleden"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#nonNegativeInteger",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:averageSpeed",
   "property": "http://dbpedia.org/ontology/averageSpeed",
   "label": {
    "en": "average speed (kmh)",
    "de": "Durchschnittsgeschwindigkeit (kmh)",
    "el": "μέση ταχύτητα (kmh)"
   },
   "description": {
    "en": "The average speed of a thing.",
    "el": "Η μέση ταχύτητα ενός πράγματος."
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#double",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:currentStatus",
   "property": "http://dbpedia.org/ontology/currentStatus",
   "label": {
    "en": "current status",
    "nl": "huidige status"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:dischargeAverage",
   "property": "http://dbpedia.org/ontology/dischargeAverage",
   "label": {
    "en": "discharge average (m³/s)"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#double",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:capacity",
   "property": "http://dbpedia.org/ontology/capacity",
   "label": {
    "en": "capacity",
    "fr": "capacité"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#nonNegativeInteger",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:aitaCode",
   "property": "http://dbpedia.org/ontology/aitaCode",
   "label": {
    "en": "aita code"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:dateClosed",
   "property": "http://dbpedia.org/ontology/dateClosed",
   "label": {
    "en": "date closed",
    "el": "τερματισμός_λειτουργίας"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://www.w3.org/2001/XMLSchema#date",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:nickname",
   "property": "http://dbpedia.org/ontology/nickname",
   "label": {
    "en": "nickname for something"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:millsCodeNL",
   "property": "http://dbpedia.org/ontology/millsCodeNL",
   "label": {
    "en": "mill code NL",
    "nl": "molen code NL"
   },
   "description": {
    "en": "mills code from the central Dutch database on mills",
    "nl": "unieke code voor molens in www.molendatabase.nl"
   },
   "type": "text",
   "nodetype": "LITERAL",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:Weapon/length",
   "property": "http://dbpedia.org/ontology/Weapon/length",
   "label": {
    "el": "μήκος (mm)",
    "fr": "longueur (mm)",
    "en": "length (mm)",
    "nl": "lengte (mm)",
    "de": "Länge (mm)"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://dbpedia.org/datatype/millimetre",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:Automobile/wheelbase",
   "property": "http://dbpedia.org/ontology/Automobile/wheelbase",
   "label": {
    "en": "wheelbase (mm)"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://dbpedia.org/datatype/millimetre",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:Spacecraft/totalMass",
   "property": "http://dbpedia.org/ontology/Spacecraft/totalMass",
   "label": {
    "en": "total mass (kg)"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://dbpedia.org/datatype/kilogram",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:PopulatedPlace/areaUrban",
   "property": "http://dbpedia.org/ontology/PopulatedPlace/areaUrban",
   "label": {
    "en": "area urban (km2)",
    "el": "αστική περιοχή (km2)"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://dbpedia.org/datatype/squareKilometre",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:SpaceMission/lunarSampleMass",
   "property": "http://dbpedia.org/ontology/SpaceMission/lunarSampleMass",
   "label": {
    "en": "lunar sample mass (kg)"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://dbpedia.org/datatype/kilogram",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:Galaxy/volume",
   "property": "http://dbpedia.org/ontology/Galaxy/volume",
   "label": {
    "en": "volume (km3)",
    "nl": "volume (km3)",
    "el": "όγκος (km3)",
    "fr": "volume (km3)"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://dbpedia.org/datatype/cubicKilometre",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:Lake/volume",
   "property": "http://dbpedia.org/ontology/Lake/volume",
   "label": {
    "en": "volume (μ³)",
    "nl": "volume (μ³)",
    "el": "όγκος (μ³)",
    "fr": "volume (μ³)"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://dbpedia.org/datatype/cubicMetre",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:AutomobileEngine/pistonStroke",
   "property": "http://dbpedia.org/ontology/AutomobileEngine/pistonStroke",
   "label": {
    "en": "piston stroke (mm)"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://dbpedia.org/datatype/millimetre",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:Spacecraft/cargoWater",
   "property": "http://dbpedia.org/ontology/Spacecraft/cargoWater",
   "label": {
    "en": "cargo water (kg)"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://dbpedia.org/datatype/kilogram",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:AutomobileEngine/length",
   "property": "http://dbpedia.org/ontology/AutomobileEngine/length",
   "label": {
    "el": "μήκος (mm)",
    "fr": "longueur (mm)",
    "en": "length (mm)",
    "nl": "lengte (mm)",
    "de": "Länge (mm)"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://dbpedia.org/datatype/millimetre",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:SpaceMission/mass",
   "property": "http://dbpedia.org/ontology/SpaceMission/mass",
   "label": {
    "en": "mass (kg)",
    "el": "μάζα (kg)"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://dbpedia.org/datatype/kilogram",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:Galaxy/periapsis",
   "property": "http://dbpedia.org/ontology/Galaxy/periapsis",
   "label": {
    "en": "periapsis (km)"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://dbpedia.org/datatype/kilometre",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:Spacecraft/dockedTime",
   "property": "http://dbpedia.org/ontology/Spacecraft/dockedTime",
   "label": {
    "en": "docked time (μ)"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://dbpedia.org/datatype/day",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:Galaxy/apoapsis",
   "property": "http://dbpedia.org/ontology/Galaxy/apoapsis",
   "label": {
    "en": "apoapsis (km)",
    "el": "απόαψης (km)"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://dbpedia.org/datatype/kilometre",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:Weapon/diameter",
   "property": "http://dbpedia.org/ontology/Weapon/diameter",
   "label": {
    "en": "diameter (mm)",
    "nl": "diameter (mm)",
    "fr": "diamètre (mm)",
    "el": "διάμετρος (mm)"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://dbpedia.org/datatype/millimetre",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:Canal/originalMaximumBoatLength",
   "property": "http://dbpedia.org/ontology/Canal/originalMaximumBoatLength",
   "label": {
    "en": "original maximum boat length (μ)"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://dbpedia.org/datatype/metre",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:SpaceMission/stationVisitDuration",
   "property": "http://dbpedia.org/ontology/SpaceMission/stationVisitDuration",
   "label": {
    "en": "station visit duration (ω)"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://dbpedia.org/datatype/hour",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:Spacecraft/cargoFuel",
   "property": "http://dbpedia.org/ontology/Spacecraft/cargoFuel",
   "label": {
    "en": "cargo fuel (kg)"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://dbpedia.org/datatype/kilogram",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:Stream/minimumDischarge",
   "property": "http://dbpedia.org/ontology/Stream/minimumDischarge",
   "label": {
    "en": "minimum discharge (m³/s)"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://dbpedia.org/datatype/cubicMetrePerSecond",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:Planet/periapsis",
   "property": "http://dbpedia.org/ontology/Planet/periapsis",
   "label": {
    "en": "periapsis (km)"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://dbpedia.org/datatype/kilometre",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:ChemicalSubstance/boilingPoint",
   "property": "http://dbpedia.org/ontology/ChemicalSubstance/boilingPoint",
   "label": {
    "el": "σημείο βρασμού (K)",
    "fr": "point d'ébullition (K)",
    "en": "boiling point (K)",
    "ja": "沸点 (K)",
    "nl": "kookpunt (K)",
    "de": "Siedepunkt (K)"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://dbpedia.org/datatype/kelvin",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:AutomobileEngine/weight",
   "property": "http://dbpedia.org/ontology/AutomobileEngine/weight",
   "label": {
    "el": "βάρος (kg)",
    "fr": "poids (kg)",
    "en": "weight (kg)",
    "ja": "体重 (kg)",
    "nl": "gewicht (kg)",
    "pt": "peso (kg)",
    "de": "Gewicht (kg)"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://dbpedia.org/datatype/kilogram",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:MeanOfTransportation/width",
   "property": "http://dbpedia.org/ontology/MeanOfTransportation/width",
   "label": {
    "en": "width (mm)",
    "nl": "breedte (mm)",
    "de": "Breite (mm)",
    "el": "πλάτος (mm)"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://dbpedia.org/datatype/millimetre",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:Planet/apoapsis",
   "property": "http://dbpedia.org/ontology/Planet/apoapsis",
   "label": {
    "en": "apoapsis (km)",
    "el": "απόαψης (km)"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://dbpedia.org/datatype/kilometre",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:Stream/watershed",
   "property": "http://dbpedia.org/ontology/Stream/watershed",
   "label": {
    "en": "watershed (km2)",
    "nl": "waterscheiding (km2)",
    "es": "cuenca hidrográfica (km2)",
    "el": "λεκάνη_απορροής (km2)"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://dbpedia.org/datatype/squareKilometre",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:Rocket/mass",
   "property": "http://dbpedia.org/ontology/Rocket/mass",
   "label": {
    "en": "mass (kg)",
    "el": "μάζα (kg)"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://dbpedia.org/datatype/kilogram",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:Canal/maximumBoatLength",
   "property": "http://dbpedia.org/ontology/Canal/maximumBoatLength",
   "label": {
    "en": "maximum boat length (μ)",
    "el": "μέγιστο_μήκος_πλοίου (μ)"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://dbpedia.org/datatype/metre",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:Planet/meanTemperature",
   "property": "http://dbpedia.org/ontology/Planet/meanTemperature",
   "label": {
    "en": "mean temperature (K)",
    "el": "μέση θερμοκρασία (K)"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://dbpedia.org/datatype/kelvin",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:PopulatedPlace/areaMetro",
   "property": "http://dbpedia.org/ontology/PopulatedPlace/areaMetro",
   "label": {
    "en": "area metro (km2)",
    "el": "περιοχή μετρό (km2)"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://dbpedia.org/datatype/squareKilometre",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:Astronaut/timeInSpace",
   "property": "http://dbpedia.org/ontology/Astronaut/timeInSpace",
   "label": {
    "en": "time in space (m)"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://dbpedia.org/datatype/minute",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:Stream/dischargeAverage",
   "property": "http://dbpedia.org/ontology/Stream/dischargeAverage",
   "label": {
    "en": "discharge average (m³/s)"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://dbpedia.org/datatype/cubicMetrePerSecond",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:Weapon/width",
   "property": "http://dbpedia.org/ontology/Weapon/width",
   "label": {
    "en": "width (mm)",
    "nl": "breedte (mm)",
    "de": "Breite (mm)",
    "el": "πλάτος (mm)"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://dbpedia.org/datatype/millimetre",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:Spacecraft/port2DockedTime",
   "property": "http://dbpedia.org/ontology/Spacecraft/port2DockedTime",
   "label": {
    "en": "port2 docked time (μ)"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://dbpedia.org/datatype/day",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:MeanOfTransportation/weight",
   "property": "http://dbpedia.org/ontology/MeanOfTransportation/weight",
   "label": {
    "el": "βάρος (kg)",
    "fr": "poids (kg)",
    "en": "weight (kg)",
    "ja": "体重 (kg)",
    "nl": "gewicht (kg)",
    "pt": "peso (kg)",
    "de": "Gewicht (kg)"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://dbpedia.org/datatype/kilogram",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:PopulatedPlace/populationMetroDensity",
   "property": "http://dbpedia.org/ontology/PopulatedPlace/populationMetroDensity",
   "label": {
    "en": "population metro density (/sqkm)",
    "nl": "bevolkingsdichtheid (/sqkm)"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://dbpedia.org/datatype/inhabitantsPerSquareKilometre",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:MeanOfTransportation/length",
   "property": "http://dbpedia.org/ontology/MeanOfTransportation/length",
   "label": {
    "el": "μήκος (mm)",
    "fr": "longueur (mm)",
    "en": "length (mm)",
    "nl": "lengte (mm)",
    "de": "Länge (mm)"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://dbpedia.org/datatype/millimetre",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:MeanOfTransportation/mass",
   "property": "http://dbpedia.org/ontology/MeanOfTransportation/mass",
   "label": {
    "en": "mass (kg)",
    "el": "μάζα (kg)"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://dbpedia.org/datatype/kilogram",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:SpaceMission/distanceTraveled",
   "property": "http://dbpedia.org/ontology/SpaceMission/distanceTraveled",
   "label": {
    "en": "distance traveled (km)",
    "nl": "afgelegde afstand (km)"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://dbpedia.org/datatype/kilometre",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:GeopoliticalOrganisation/populationDensity",
   "property": "http://dbpedia.org/ontology/GeopoliticalOrganisation/populationDensity",
   "label": {
    "en": "population density (/sqkm)",
    "nl": "bevolkingsdichtheid (/sqkm)",
    "de": "Bevölkerungsdichte (/sqkm)",
    "el": "πυκνότητα_πληθυσμού (/sqkm)"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://dbpedia.org/datatype/inhabitantsPerSquareKilometre",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:Weapon/height",
   "property": "http://dbpedia.org/ontology/Weapon/height",
   "label": {
    "el": "ύψος (mm)",
    "fr": "hauteur (mm)",
    "en": "height (mm)",
    "ja": "身長 (mm)",
    "nl": "hoogte (mm)",
    "sl": "višina (mm)",
    "pt": "altura (mm)",
    "de": "Höhe (mm)"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://dbpedia.org/datatype/millimetre",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:Stream/maximumDischarge",
   "property": "http://dbpedia.org/ontology/Stream/maximumDischarge",
   "label": {
    "en": "maximum discharge (m³/s)"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://dbpedia.org/datatype/cubicMetrePerSecond",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:Galaxy/maximumTemperature",
   "property": "http://dbpedia.org/ontology/Galaxy/maximumTemperature",
   "label": {
    "en": "maximum temperature (K)",
    "el": "μέγιστη θερμοκρασία (K)"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://dbpedia.org/datatype/kelvin",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:Spacecraft/periapsis",
   "property": "http://dbpedia.org/ontology/Spacecraft/periapsis",
   "label": {
    "en": "periapsis (km)"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://dbpedia.org/datatype/kilometre",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:AutomobileEngine/width",
   "property": "http://dbpedia.org/ontology/AutomobileEngine/width",
   "label": {
    "en": "width (mm)",
    "nl": "breedte (mm)",
    "de": "Breite (mm)",
    "el": "πλάτος (mm)"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://dbpedia.org/datatype/millimetre",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:AutomobileEngine/powerOutput",
   "property": "http://dbpedia.org/ontology/AutomobileEngine/powerOutput",
   "label": {
    "en": "power output (kW)"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://dbpedia.org/datatype/kilowatt",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:Spacecraft/totalCargo",
   "property": "http://dbpedia.org/ontology/Spacecraft/totalCargo",
   "label": {
    "en": "total cargo (kg)"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://dbpedia.org/datatype/kilogram",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:Spacecraft/freeFlightTime",
   "property": "http://dbpedia.org/ontology/Spacecraft/freeFlightTime",
   "label": {
    "en": "free flight time (μ)"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://dbpedia.org/datatype/day",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:SpaceShuttle/timeInSpace",
   "property": "http://dbpedia.org/ontology/SpaceShuttle/timeInSpace",
   "label": {
    "en": "time in space (μ)"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://dbpedia.org/datatype/day",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:PopulatedPlace/areaTotal",
   "property": "http://dbpedia.org/ontology/PopulatedPlace/areaTotal",
   "label": {
    "el": "έκταση περιοχής (km2)",
    "fr": "superficie (km2)",
    "en": "area total (km2)",
    "nl": "oppervlakte (km2)",
    "de": "Fläche (km2)"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://dbpedia.org/datatype/squareKilometre",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:Stream/discharge",
   "property": "http://dbpedia.org/ontology/Stream/discharge",
   "label": {
    "en": "discharge (m³/s)",
    "el": "εκροή (m³/s)",
    "nl": "uitstoot (m³/s)"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://dbpedia.org/datatype/cubicMetrePerSecond",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:SpaceMission/lunarSurfaceTime",
   "property": "http://dbpedia.org/ontology/SpaceMission/lunarSurfaceTime",
   "label": {
    "en": "lunar surface time (ω)"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://dbpedia.org/datatype/hour",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:Drug/boilingPoint",
   "property": "http://dbpedia.org/ontology/Drug/boilingPoint",
   "label": {
    "el": "σημείο βρασμού (K)",
    "fr": "point d'ébullition (K)",
    "en": "boiling point (K)",
    "ja": "沸点 (K)",
    "nl": "kookpunt (K)",
    "de": "Siedepunkt (K)"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://dbpedia.org/datatype/kelvin",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:Canal/maximumBoatBeam",
   "property": "http://dbpedia.org/ontology/Canal/maximumBoatBeam",
   "label": {
    "en": "maximum boat beam (μ)",
    "el": "μέγιστο_πλάτος_πλοίου (μ)"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://dbpedia.org/datatype/metre",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:ChemicalSubstance/density",
   "property": "http://dbpedia.org/ontology/ChemicalSubstance/density",
   "label": {
    "el": "πυκνότητα (μ3)",
    "fr": "densité (μ3)",
    "en": "density (μ3)",
    "ja": "密度 (μ3)",
    "pt": "densidade (μ3)",
    "de": "Dichte (μ3)"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://dbpedia.org/datatype/kilogramPerCubicMetre",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:Automobile/fuelCapacity",
   "property": "http://dbpedia.org/ontology/Automobile/fuelCapacity",
   "label": {
    "en": "fuel capacity (l)"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://dbpedia.org/datatype/litre",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:Planet/maximumTemperature",
   "property": "http://dbpedia.org/ontology/Planet/maximumTemperature",
   "label": {
    "en": "maximum temperature (K)",
    "el": "μέγιστη θερμοκρασία (K)"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://dbpedia.org/datatype/kelvin",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:PopulatedPlace/populationDensity",
   "property": "http://dbpedia.org/ontology/PopulatedPlace/populationDensity",
   "label": {
    "en": "population density (/sqkm)",
    "nl": "bevolkingsdichtheid (/sqkm)",
    "de": "Bevölkerungsdichte (/sqkm)",
    "el": "πυκνότητα_πληθυσμού (/sqkm)"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://dbpedia.org/datatype/inhabitantsPerSquareKilometre",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:AutomobileEngine/cylinderBore",
   "property": "http://dbpedia.org/ontology/AutomobileEngine/cylinderBore",
   "label": {
    "en": "cylinder bore (mm)"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://dbpedia.org/datatype/millimetre",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:SpaceMission/lunarOrbitTime",
   "property": "http://dbpedia.org/ontology/SpaceMission/lunarOrbitTime",
   "label": {
    "en": "lunar orbit time (ω)"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://dbpedia.org/datatype/hour",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:Galaxy/density",
   "property": "http://dbpedia.org/ontology/Galaxy/density",
   "label": {
    "el": "πυκνότητα (μ3)",
    "fr": "densité (μ3)",
    "en": "density (μ3)",
    "ja": "密度 (μ3)",
    "pt": "densidade (μ3)",
    "de": "Dichte (μ3)"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://dbpedia.org/datatype/kilogramPerCubicMetre",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:Work/runtime",
   "property": "http://dbpedia.org/ontology/Work/runtime",
   "label": {
    "en": "runtime (m)",
    "nl": "duur (m)",
    "el": "διάρκεια (m)",
    "fr": "durée (m)"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://dbpedia.org/datatype/minute",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:Planet/mass",
   "property": "http://dbpedia.org/ontology/Planet/mass",
   "label": {
    "en": "mass (kg)",
    "el": "μάζα (kg)"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://dbpedia.org/datatype/kilogram",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:MeanOfTransportation/height",
   "property": "http://dbpedia.org/ontology/MeanOfTransportation/height",
   "label": {
    "el": "ύψος (mm)",
    "fr": "hauteur (mm)",
    "en": "height (mm)",
    "ja": "身長 (mm)",
    "nl": "hoogte (mm)",
    "sl": "višina (mm)",
    "pt": "altura (mm)",
    "de": "Höhe (mm)"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://dbpedia.org/datatype/millimetre",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:Galaxy/meanRadius",
   "property": "http://dbpedia.org/ontology/Galaxy/meanRadius",
   "label": {
    "en": "mean radius (km)",
    "el": "μέση ακτίνα (km)"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://dbpedia.org/datatype/kilometre",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:Planet/minimumTemperature",
   "property": "http://dbpedia.org/ontology/Planet/minimumTemperature",
   "label": {
    "en": "minimum temperature (K)",
    "el": "ελάχιστη θερμοκρασία (K)"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://dbpedia.org/datatype/kelvin",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:Spacecraft/cargoGas",
   "property": "http://dbpedia.org/ontology/Spacecraft/cargoGas",
   "label": {
    "en": "cargo gas (kg)"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://dbpedia.org/datatype/kilogram",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:Planet/meanRadius",
   "property": "http://dbpedia.org/ontology/Planet/meanRadius",
   "label": {
    "en": "mean radius (km)",
    "el": "μέση ακτίνα (km)"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://dbpedia.org/datatype/kilometre",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:SpaceStation/volume",
   "property": "http://dbpedia.org/ontology/SpaceStation/volume",
   "label": {
    "en": "volume (μ³)",
    "nl": "volume (μ³)",
    "el": "όγκος (μ³)",
    "fr": "volume (μ³)"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://dbpedia.org/datatype/cubicMetre",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:SpaceMission/cmpEvaDuration",
   "property": "http://dbpedia.org/ontology/SpaceMission/cmpEvaDuration",
   "label": {
    "en": "CMP EVA duration (ω)"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://dbpedia.org/datatype/hour",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:PopulatedPlace/populationUrbanDensity",
   "property": "http://dbpedia.org/ontology/PopulatedPlace/populationUrbanDensity",
   "label": {
    "en": "population urban density (/sqkm)"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://dbpedia.org/datatype/inhabitantsPerSquareKilometre",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:Planet/orbitalPeriod",
   "property": "http://dbpedia.org/ontology/Planet/orbitalPeriod",
   "label": {
    "en": "orbital period (μ)",
    "el": "Περίοδος περιφοράς (μ)"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://dbpedia.org/datatype/day",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:AutomobileEngine/topSpeed",
   "property": "http://dbpedia.org/ontology/AutomobileEngine/topSpeed",
   "label": {
    "en": "top speed (kmh)",
    "de": "Höchstgeschwindigkeit (kmh)"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://dbpedia.org/datatype/kilometrePerHour",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:Drug/meltingPoint",
   "property": "http://dbpedia.org/ontology/Drug/meltingPoint",
   "label": {
    "en": "melting point (K)",
    "de": "Schmelzpunkt (K)",
    "fr": "point de fusion (K)",
    "ja": "融点 (K)"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://dbpedia.org/datatype/kelvin",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:MeanOfTransportation/diameter",
   "property": "http://dbpedia.org/ontology/MeanOfTransportation/diameter",
   "label": {
    "en": "diameter (μ)",
    "nl": "diameter (μ)",
    "fr": "diamètre (μ)",
    "el": "διάμετρος (μ)"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://dbpedia.org/datatype/metre",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:School/campusSize",
   "property": "http://dbpedia.org/ontology/School/campusSize",
   "label": {
    "en": "campus size (km2)"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://dbpedia.org/datatype/squareKilometre",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:Galaxy/minimumTemperature",
   "property": "http://dbpedia.org/ontology/Galaxy/minimumTemperature",
   "label": {
    "en": "minimum temperature (K)",
    "el": "ελάχιστη θερμοκρασία (K)"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://dbpedia.org/datatype/kelvin",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:Canal/originalMaximumBoatBeam",
   "property": "http://dbpedia.org/ontology/Canal/originalMaximumBoatBeam",
   "label": {
    "en": "original maximum boat beam (μ)"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://dbpedia.org/datatype/metre",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:AutomobileEngine/co2Emission",
   "property": "http://dbpedia.org/ontology/AutomobileEngine/co2Emission",
   "label": {
    "en": "CO2 emission (g/km)"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://dbpedia.org/datatype/gramPerKilometre",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:AutomobileEngine/torqueOutput",
   "property": "http://dbpedia.org/ontology/AutomobileEngine/torqueOutput",
   "label": {
    "en": "torque output (Nm)"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://dbpedia.org/datatype/newtonMetre",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:Galaxy/meanTemperature",
   "property": "http://dbpedia.org/ontology/Galaxy/meanTemperature",
   "label": {
    "en": "mean temperature (K)",
    "el": "μέση θερμοκρασία (K)"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://dbpedia.org/datatype/kelvin",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:Rocket/lowerEarthOrbitPayload",
   "property": "http://dbpedia.org/ontology/Rocket/lowerEarthOrbitPayload",
   "label": {
    "en": "lower earth orbit payload (kg)"
   },
   "description": {
    "en": "Payload mass in a typical Low Earth orbit"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://dbpedia.org/datatype/kilogram",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:SpaceMission/lunarEvaTime",
   "property": "http://dbpedia.org/ontology/SpaceMission/lunarEvaTime",
   "label": {
    "en": "lunar EVA time (ω)"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://dbpedia.org/datatype/hour",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:AutomobileEngine/displacement",
   "property": "http://dbpedia.org/ontology/AutomobileEngine/displacement",
   "label": {
    "en": "displacement (cc)"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://dbpedia.org/datatype/cubicCentimetre",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:Galaxy/orbitalPeriod",
   "property": "http://dbpedia.org/ontology/Galaxy/orbitalPeriod",
   "label": {
    "en": "orbital period (μ)",
    "el": "Περίοδος περιφοράς (μ)"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://dbpedia.org/datatype/day",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:Planet/temperature",
   "property": "http://dbpedia.org/ontology/Planet/temperature",
   "label": {
    "en": "temperature (K)",
    "el": "θερμοκρασία (K)",
    "fr": "température (K)"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://dbpedia.org/datatype/kelvin",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:ChemicalSubstance/meltingPoint",
   "property": "http://dbpedia.org/ontology/ChemicalSubstance/meltingPoint",
   "label": {
    "en": "melting point (K)",
    "de": "Schmelzpunkt (K)",
    "fr": "point de fusion (K)",
    "ja": "融点 (K)"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://dbpedia.org/datatype/kelvin",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:Software/fileSize",
   "property": "http://dbpedia.org/ontology/Software/fileSize",
   "label": {
    "en": "size (MB)",
    "de": "Dateigröße (MB)"
   },
   "description": {
    "en": "size of a file or software"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://dbpedia.org/datatype/megabyte",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:GeopoliticalOrganisation/areaMetro",
   "property": "http://dbpedia.org/ontology/GeopoliticalOrganisation/areaMetro",
   "label": {
    "en": "area metro (km2)",
    "el": "περιοχή μετρό (km2)"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://dbpedia.org/datatype/squareKilometre",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:Galaxy/temperature",
   "property": "http://dbpedia.org/ontology/Galaxy/temperature",
   "label": {
    "en": "temperature (K)",
    "el": "θερμοκρασία (K)",
    "fr": "température (K)"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://dbpedia.org/datatype/kelvin",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:GrandPrix/course",
   "property": "http://dbpedia.org/ontology/GrandPrix/course",
   "label": {
    "en": "course (km)"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://dbpedia.org/datatype/kilometre",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:Infrastructure/length",
   "property": "http://dbpedia.org/ontology/Infrastructure/length",
   "label": {
    "el": "μήκος (km)",
    "fr": "longueur (km)",
    "en": "length (km)",
    "nl": "lengte (km)",
    "de": "Länge (km)"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://dbpedia.org/datatype/kilometre",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:Galaxy/surfaceArea",
   "property": "http://dbpedia.org/ontology/Galaxy/surfaceArea",
   "label": {
    "en": "surface area (km2)",
    "el": "έκταση (km2)"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://dbpedia.org/datatype/squareKilometre",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:AutomobileEngine/diameter",
   "property": "http://dbpedia.org/ontology/AutomobileEngine/diameter",
   "label": {
    "en": "diameter (mm)",
    "nl": "diameter (mm)",
    "fr": "diamètre (mm)",
    "el": "διάμετρος (mm)"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://dbpedia.org/datatype/millimetre",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:Galaxy/averageSpeed",
   "property": "http://dbpedia.org/ontology/Galaxy/averageSpeed",
   "label": {
    "en": "average speed (km/s)",
    "de": "Durchschnittsgeschwindigkeit (km/s)",
    "el": "μέση ταχύτητα (km/s)"
   },
   "description": {
    "en": "The average speed of a thing.",
    "el": "Η μέση ταχύτητα ενός πράγματος."
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://dbpedia.org/datatype/kilometrePerSecond",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:AutomobileEngine/height",
   "property": "http://dbpedia.org/ontology/AutomobileEngine/height",
   "label": {
    "el": "ύψος (mm)",
    "fr": "hauteur (mm)",
    "en": "height (mm)",
    "ja": "身長 (mm)",
    "nl": "hoogte (mm)",
    "sl": "višina (mm)",
    "pt": "altura (mm)",
    "de": "Höhe (mm)"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://dbpedia.org/datatype/millimetre",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:Spacecraft/apoapsis",
   "property": "http://dbpedia.org/ontology/Spacecraft/apoapsis",
   "label": {
    "en": "apoapsis (km)",
    "el": "απόαψης (km)"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://dbpedia.org/datatype/kilometre",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:Planet/averageSpeed",
   "property": "http://dbpedia.org/ontology/Planet/averageSpeed",
   "label": {
    "en": "average speed (km/s)",
    "de": "Durchschnittsgeschwindigkeit (km/s)",
    "el": "μέση ταχύτητα (km/s)"
   },
   "description": {
    "en": "The average speed of a thing.",
    "el": "Η μέση ταχύτητα ενός πράγματος."
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://dbpedia.org/datatype/kilometrePerSecond",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:SpaceMission/missionDuration",
   "property": "http://dbpedia.org/ontology/SpaceMission/missionDuration",
   "label": {
    "en": "mission duration (μ)"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://dbpedia.org/datatype/day",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:Person/weight",
   "property": "http://dbpedia.org/ontology/Person/weight",
   "label": {
    "el": "βάρος (kg)",
    "fr": "poids (kg)",
    "en": "weight (kg)",
    "ja": "体重 (kg)",
    "nl": "gewicht (kg)",
    "pt": "peso (kg)",
    "de": "Gewicht (kg)"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://dbpedia.org/datatype/kilogram",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:LunarCrater/diameter",
   "property": "http://dbpedia.org/ontology/LunarCrater/diameter",
   "label": {
    "en": "diameter (km)",
    "nl": "diameter (km)",
    "fr": "diamètre (km)",
    "el": "διάμετρος (km)"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://dbpedia.org/datatype/kilometre",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:Weapon/weight",
   "property": "http://dbpedia.org/ontology/Weapon/weight",
   "label": {
    "el": "βάρος (kg)",
    "fr": "poids (kg)",
    "en": "weight (kg)",
    "ja": "体重 (kg)",
    "nl": "gewicht (kg)",
    "pt": "peso (kg)",
    "de": "Gewicht (kg)"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://dbpedia.org/datatype/kilogram",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:AutomobileEngine/acceleration",
   "property": "http://dbpedia.org/ontology/AutomobileEngine/acceleration",
   "label": {
    "de": "Beschleunigung (s)",
    "en": "acceleration (s)",
    "el": "επιτάχυνση (s)"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://dbpedia.org/datatype/second",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:Planet/surfaceArea",
   "property": "http://dbpedia.org/ontology/Planet/surfaceArea",
   "label": {
    "en": "surface area (km2)",
    "el": "έκταση (km2)"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://dbpedia.org/datatype/squareKilometre",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:Planet/density",
   "property": "http://dbpedia.org/ontology/Planet/density",
   "label": {
    "el": "πυκνότητα (μ3)",
    "fr": "densité (μ3)",
    "en": "density (μ3)",
    "ja": "密度 (μ3)",
    "pt": "densidade (μ3)",
    "de": "Dichte (μ3)"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://dbpedia.org/datatype/kilogramPerCubicMetre",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:Galaxy/mass",
   "property": "http://dbpedia.org/ontology/Galaxy/mass",
   "label": {
    "en": "mass (kg)",
    "el": "μάζα (kg)"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://dbpedia.org/datatype/kilogram",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:SpaceShuttle/distance",
   "property": "http://dbpedia.org/ontology/SpaceShuttle/distance",
   "label": {
    "en": "distance (km)",
    "de": "Entfernung (km)"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://dbpedia.org/datatype/kilometre",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:Person/height",
   "property": "http://dbpedia.org/ontology/Person/height",
   "label": {
    "el": "ύψος (cm)",
    "fr": "hauteur (cm)",
    "en": "height (cm)",
    "ja": "身長 (cm)",
    "nl": "hoogte (cm)",
    "sl": "višina (cm)",
    "pt": "altura (cm)",
    "de": "Höhe (cm)"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://dbpedia.org/datatype/centimetre",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:Lake/shoreLength",
   "property": "http://dbpedia.org/ontology/Lake/shoreLength",
   "label": {
    "en": "shore length (km)",
    "el": "μήκος_όχθης (km)"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://dbpedia.org/datatype/kilometre",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:PopulatedPlace/area",
   "property": "http://dbpedia.org/ontology/PopulatedPlace/area",
   "label": {
    "el": "έκταση (km2)",
    "fr": "superficie (km2)",
    "en": "area (km2)",
    "nl": "oppervlakte (km2)",
    "pt": "área (km2)",
    "de": "Fläche (km2)"
   },
   "description": {
    "en": "The area of a owl:Thing in square metre."
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://dbpedia.org/datatype/squareKilometre",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:Building/floorArea",
   "property": "http://dbpedia.org/ontology/Building/floorArea",
   "label": {
    "en": "floor area (m2)",
    "nl": "vloeroppervlak (m2)",
    "el": "περιοχή ορόφων (m2)"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://dbpedia.org/datatype/squareMetre",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:GrandPrix/distance",
   "property": "http://dbpedia.org/ontology/GrandPrix/distance",
   "label": {
    "en": "distance (km)",
    "de": "Entfernung (km)"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://dbpedia.org/datatype/kilometre",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:Lake/areaOfCatchment",
   "property": "http://dbpedia.org/ontology/Lake/areaOfCatchment",
   "label": {
    "en": "area of catchment (km2)",
    "el": "λίμνη (km2)"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://dbpedia.org/datatype/squareKilometre",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:Spacecraft/dryCargo",
   "property": "http://dbpedia.org/ontology/Spacecraft/dryCargo",
   "label": {
    "en": "dry cargo (kg)",
    "nl": "droge last (kg)"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://dbpedia.org/datatype/kilogram",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:SpaceMission/stationEvaDuration",
   "property": "http://dbpedia.org/ontology/SpaceMission/stationEvaDuration",
   "label": {
    "en": "station EVA duration (ω)"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://dbpedia.org/datatype/hour",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:Planet/volume",
   "property": "http://dbpedia.org/ontology/Planet/volume",
   "label": {
    "en": "volume (km3)",
    "nl": "volume (km3)",
    "el": "όγκος (km3)",
    "fr": "volume (km3)"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://dbpedia.org/datatype/cubicKilometre",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:Spacecraft/port1DockedTime",
   "property": "http://dbpedia.org/ontology/Spacecraft/port1DockedTime",
   "label": {
    "en": "port1 docked time (μ)"
   },
   "type": "text",
   "nodetype": "DATATYPE_LITERAL",
   "datatype": "http://dbpedia.org/datatype/day",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:politicalPartyOfLeader",
   "property": "http://dbpedia.org/ontology/politicalPartyOfLeader",
   "label": {
    "en": "political party of leader",
    "de": "politische Partei des Vorsitzenden"
   },
   "description": {
    "en": "The Political party of leader."
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/PoliticalParty"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:shuttle",
   "property": "http://dbpedia.org/ontology/shuttle",
   "label": {
    "en": "shuttle"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/SpaceShuttle"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:illustrator",
   "property": "http://dbpedia.org/ontology/illustrator",
   "label": {
    "en": "illustrator",
    "nl": "illustrator",
    "fr": "illustrateur"
   },
   "description": {
    "en": "Illustrator (where used throughout and a major feature)"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Person"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:fastestDriver",
   "property": "http://dbpedia.org/ontology/fastestDriver",
   "label": {
    "en": "fastest driver"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Person"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:massif",
   "property": "http://dbpedia.org/ontology/massif",
   "label": {
    "en": "massif"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Place"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:britishComedyAwards",
   "property": "http://dbpedia.org/ontology/britishComedyAwards",
   "label": {
    "en": "British Comedy Awards",
    "el": "Βρετανικά Βραβεία Κωμωδίας"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Award"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:firstLaunchRocket",
   "property": "http://dbpedia.org/ontology/firstLaunchRocket",
   "label": {
    "en": "first launch rocket"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Rocket"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:sourceConfluenceCountry",
   "property": "http://dbpedia.org/ontology/sourceConfluenceCountry",
   "label": {
    "en": "source confluence country"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Country"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:largestMetro",
   "property": "http://dbpedia.org/ontology/largestMetro",
   "label": {
    "en": "largest metro"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/PopulatedPlace"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:firstOwner",
   "property": "http://dbpedia.org/ontology/firstOwner",
   "label": {
    "en": "first owner",
    "fr": "premier propriétaire",
    "es": "primer dueño"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Agent"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:species",
   "property": "http://dbpedia.org/ontology/species",
   "label": {
    "en": "species",
    "nl": "soort",
    "ja": "種_(分類学)"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:managementRegion",
   "property": "http://dbpedia.org/ontology/managementRegion",
   "label": {
    "en": "management region"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/PopulatedPlace"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:winsAtSenEuro",
   "property": "http://dbpedia.org/ontology/winsAtSenEuro",
   "label": {
    "en": "wins at Senior Euro"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:senator",
   "property": "http://dbpedia.org/ontology/senator",
   "label": {
    "en": "senator",
    "pt": "senador"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Person"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:mission",
   "property": "http://dbpedia.org/ontology/mission",
   "label": {
    "en": "mission",
    "el": "αποστολή"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/SpaceMission"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:attorneyGeneral",
   "property": "http://dbpedia.org/ontology/attorneyGeneral",
   "label": {
    "en": "attorney general",
    "nl": "procureur-generaal"
   },
   "description": {
    "en": "Public attorney",
    "nl": "de procureur-generaal"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Person"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:maidenFlightRocket",
   "property": "http://dbpedia.org/ontology/maidenFlightRocket",
   "label": {
    "en": "maiden flight rocket"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Rocket"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:raceTrack",
   "property": "http://dbpedia.org/ontology/raceTrack",
   "label": {
    "en": "race track",
    "fr": "circuit"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/RaceTrack"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:jurisdiction",
   "property": "http://dbpedia.org/ontology/jurisdiction",
   "label": {
    "en": "jurisdiction",
    "de": "Zuständigkeit"
   },
   "description": {
    "en": "Jurisdiction is the practical authority granted to a formally constituted legal body or to a political leader to deal with and make pronouncements on legal matters and, by implication, to administer justice within a defined area of responsibility.",
    "de": "Die Zuständigkeit oder Kompetenz legt im öffentlichen Recht fest, welche Behörde bzw. welches Gericht im Einzelfall rechtlich zu hoheitlichem Handeln ermächtigt und verpflichtet ist."
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:guest",
   "property": "http://dbpedia.org/ontology/guest",
   "label": {
    "en": "guest",
    "el": "επισκέπτης"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Person"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:torchBearer",
   "property": "http://dbpedia.org/ontology/torchBearer",
   "label": {
    "en": "torch bearer"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Person"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:format",
   "property": "http://dbpedia.org/ontology/format",
   "label": {
    "en": "format",
    "nl": "formaat",
    "fr": "format",
    "el": "format"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:mother",
   "property": "http://dbpedia.org/ontology/mother",
   "label": {
    "en": "mother"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Person"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:secondCommander",
   "property": "http://dbpedia.org/ontology/secondCommander",
   "label": {
    "en": "second commander"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Person"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:spokesperson",
   "property": "http://dbpedia.org/ontology/spokesperson",
   "label": {
    "en": "spokesperson",
    "pt": "porta-voz"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Person"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:royalAnthem",
   "property": "http://dbpedia.org/ontology/royalAnthem",
   "label": {
    "en": "royal anthem"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:targetAirport",
   "property": "http://dbpedia.org/ontology/targetAirport",
   "label": {
    "en": "target airport"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Airport"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:sportCountry",
   "property": "http://dbpedia.org/ontology/sportCountry",
   "label": {
    "en": "sport country",
    "de": "Sportnation"
   },
   "description": {
    "en": "The country, for which the athlete is participating in championships",
    "de": "Das Land, für das der Sportler an Wettkämpfen teilnimmt"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Country"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:aircraftPatrol",
   "property": "http://dbpedia.org/ontology/aircraftPatrol",
   "label": {
    "en": "aircraft patrol",
    "el": "περιπολία αεροσκάφους"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/MeanOfTransportation"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:musicFusionGenre",
   "property": "http://dbpedia.org/ontology/musicFusionGenre",
   "label": {
    "en": "music fusion genre"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/MusicGenre"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:network",
   "property": "http://dbpedia.org/ontology/network",
   "label": {
    "en": "network",
    "el": "δίκτυο"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Broadcaster"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:bronzeMedalist",
   "property": "http://dbpedia.org/ontology/bronzeMedalist",
   "label": {
    "en": "bronze medalist",
    "pt": "medalha de bronze",
    "el": "χάλκινο μετάλλιο"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Person"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:school",
   "property": "http://dbpedia.org/ontology/school",
   "label": {
    "el": "σχολείο",
    "fr": "école",
    "en": "school",
    "it": "scuola",
    "nl": "school",
    "de": "schule"
   },
   "description": {
    "en": "school a person goes or went to",
    "el": "σχολείο στο οποίο πηγαίνει ή πήγε κάποιος"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/EducationalInstitution"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:childOrganisation",
   "property": "http://dbpedia.org/ontology/childOrganisation",
   "label": {
    "en": "child organisation",
    "nl": "dochterorganisatie"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Organisation"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:monarch",
   "property": "http://dbpedia.org/ontology/monarch",
   "label": {
    "en": "monarch",
    "nl": "monarch"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Person"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:parent",
   "property": "http://dbpedia.org/ontology/parent",
   "label": {
    "en": "parent",
    "nl": "ouder",
    "fr": "parent",
    "ja": "親"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Person"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:lessPopulousCountry",
   "property": "http://dbpedia.org/ontology/lessPopulousCountry",
   "label": {
    "en": "less populous country",
    "pt": "país menos populoso"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Country"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:alpsSubgroup",
   "property": "http://dbpedia.org/ontology/alpsSubgroup",
   "label": {
    "en": "Alps subgroup",
    "el": "υποομάδα των άλπεων",
    "it": "sottogruppo alpino"
   },
   "description": {
    "en": "the Alps subgroup to which the mountain belongs, according to the SOIUSA classification"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/MountainRange"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:construction",
   "property": "http://dbpedia.org/ontology/construction",
   "label": {
    "en": "construction",
    "de": "Konstruktion"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:notableWork",
   "property": "http://dbpedia.org/ontology/notableWork",
   "label": {
    "en": "notable work",
    "fr": "oeuvre majeure",
    "ja": "代表作",
    "nl": "bekende werken"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Book"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:spurOf",
   "property": "http://dbpedia.org/ontology/spurOf",
   "label": {
    "en": "spur of"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Road"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:administrativeCollectivity",
   "property": "http://dbpedia.org/ontology/administrativeCollectivity",
   "label": {
    "en": "administrative collectivity",
    "nl": "administratieve gemeenschap",
    "el": "διοικητική συλλογικότητα"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/PopulatedPlace"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:chiefEditor",
   "property": "http://dbpedia.org/ontology/chiefEditor",
   "label": {
    "en": "chief editor",
    "nl": "hoofdredacteur"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Person"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:vein",
   "property": "http://dbpedia.org/ontology/vein",
   "label": {
    "en": "vein"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Vein"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:relative",
   "property": "http://dbpedia.org/ontology/relative",
   "label": {
    "en": "relative",
    "el": "συγγενής",
    "de": "Verwandter",
    "ja": "親戚"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Person"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:powerType",
   "property": "http://dbpedia.org/ontology/powerType",
   "label": {
    "en": "power type"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:author",
   "property": "http://dbpedia.org/ontology/author",
   "label": {
    "el": "συγγραφέας",
    "fr": "auteur",
    "en": "author",
    "nl": "auteur",
    "de": "autor"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Person"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:organisation",
   "property": "http://dbpedia.org/ontology/organisation",
   "label": {
    "en": "organisation"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Organisation"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:museumType",
   "property": "http://dbpedia.org/ontology/museumType",
   "label": {
    "en": "museumType",
    "nl": "soort museum"
   },
   "description": {
    "en": "This property has been added  because 'buildingType' is much more about the place, whereas 'museumType' is about the way the place is being (or:was) used",
    "nl": "Nieuw type is nodig omdat Museum eigenlijk geen subklasse van Building is, maar meer te maken heeft met de functie van het gebouw. 'Museumtype' is dan ook meer thema- en collectiegerelateerd"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:hasJunctionWith",
   "property": "http://dbpedia.org/ontology/hasJunctionWith",
   "label": {
    "en": "has junction with",
    "el": "σύνδεση"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Canal"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:opponents",
   "property": "http://dbpedia.org/ontology/opponents",
   "label": {
    "en": "opponents"
   },
   "description": {
    "en": "\"opponent in a military conflict, an organisation, country, or group of countries. \""
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:series",
   "property": "http://dbpedia.org/ontology/series",
   "label": {
    "en": "series",
    "nl": "reeks",
    "el": "σειρά"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:listItemOf",
   "property": "http://dbpedia.org/ontology/listItemOf",
   "label": {
    "en": "list item",
    "nl": "lijst items",
    "el": "αντικείμενο λίστας"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:mentor",
   "property": "http://dbpedia.org/ontology/mentor",
   "label": {
    "en": "mentor",
    "fr": "mentor"
   },
   "description": {
    "en": "A wise and trusted counselor or teacher",
    "fr": "Celui qui sert de guide, de conseiller à quelqu’un."
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Artist"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:city",
   "property": "http://dbpedia.org/ontology/city",
   "label": {
    "el": "πόλη",
    "fr": "ville",
    "en": "city",
    "nl": "stad",
    "de": "Stadt"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/City"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:ruralMunicipality",
   "property": "http://dbpedia.org/ontology/ruralMunicipality",
   "label": {
    "en": "rural municipality"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/PopulatedPlace"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:populationTotalReference",
   "property": "http://dbpedia.org/ontology/populationTotalReference",
   "label": {
    "en": "total population reference",
    "pt": "referencia do total da populacao"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:veneratedIn",
   "property": "http://dbpedia.org/ontology/veneratedIn",
   "label": {
    "en": "venerated in",
    "nl": "vereerd in"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Organisation"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:mediaType",
   "property": "http://dbpedia.org/ontology/mediaType",
   "label": {
    "en": "media type",
    "nl": "mediatype"
   },
   "description": {
    "en": "Print / On-line (then binding types etc. if relevant)"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:geminiAward",
   "property": "http://dbpedia.org/ontology/geminiAward",
   "label": {
    "en": "Gemini Award"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Award"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:formerBroadcastNetwork",
   "property": "http://dbpedia.org/ontology/formerBroadcastNetwork",
   "label": {
    "en": "former broadcast network",
    "de": "ehemalige Sendergruppe",
    "fr": "ancienne chaîne de télévision généraliste"
   },
   "description": {
    "en": "A former parent broadcast network to which the broadcaster once belonged.",
    "de": "Eine ehemalige Sendergruppe zu dem der Rundfunkveranstalter gehört hat."
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/BroadcastNetwork"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:plant",
   "property": "http://dbpedia.org/ontology/plant",
   "label": {
    "en": "plant",
    "el": "φυτό",
    "ja": "植物"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Plant"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:sisterStation",
   "property": "http://dbpedia.org/ontology/sisterStation",
   "label": {
    "en": "sister station"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Broadcaster"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:wikiPageInterLanguageLink",
   "property": "http://dbpedia.org/ontology/wikiPageInterLanguageLink",
   "label": {
    "en": "Link from a Wikipage to a Wikipage in a different language about the same or a related subject."
   },
   "description": {
    "en": "Reserved for DBpedia."
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:wineRegion",
   "property": "http://dbpedia.org/ontology/wineRegion",
   "label": {
    "en": "wine region"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/WineRegion"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:honours",
   "property": "http://dbpedia.org/ontology/honours",
   "label": {
    "en": "honours",
    "el": "διακρίσεις",
    "nl": "eerbewijzen"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:foundedBy",
   "property": "http://dbpedia.org/ontology/foundedBy",
   "label": {
    "en": "founded by",
    "de": "gegründet von",
    "nl": "gesticht door"
   },
   "description": {
    "en": "Identifys the founder of the described entity. This can be a person or a organisation for instance."
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Agent"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:designer",
   "property": "http://dbpedia.org/ontology/designer",
   "label": {
    "en": "designer",
    "el": "σχεδιαστής"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Person"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:lowestPlace",
   "property": "http://dbpedia.org/ontology/lowestPlace",
   "label": {
    "en": "lowest place"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/PopulatedPlace"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:leaderParty",
   "property": "http://dbpedia.org/ontology/leaderParty",
   "label": {
    "el": "κόμμα_αρχηγού",
    "en": "leader party",
    "nl": "regeringspartij",
    "pt": "partido do lider",
    "de": "Regierungspartei"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:trainerClub",
   "property": "http://dbpedia.org/ontology/trainerClub",
   "label": {
    "en": "trainer club"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/SportsTeam"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:literaryGenre",
   "property": "http://dbpedia.org/ontology/literaryGenre",
   "label": {
    "en": "literary genre",
    "nl": "literair genre",
    "de": "literarische Gattung"
   },
   "description": {
    "en": "A literary genre is a category of literary composition. Genres may be determined by literary technique, tone, content, or even (as in the case of fiction) length."
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:lymph",
   "property": "http://dbpedia.org/ontology/lymph",
   "label": {
    "en": "lymph"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Lymph"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:complexion",
   "property": "http://dbpedia.org/ontology/complexion",
   "label": {
    "en": "complexion",
    "pt": "cor da pele"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:mouthRegion",
   "property": "http://dbpedia.org/ontology/mouthRegion",
   "label": {
    "en": "mouth region"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/PopulatedPlace"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:channel",
   "property": "http://dbpedia.org/ontology/channel",
   "label": {
    "en": "channel",
    "el": "κανάλι",
    "nl": "kanaal"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Broadcaster"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:firstDriverCountry",
   "property": "http://dbpedia.org/ontology/firstDriverCountry",
   "label": {
    "en": "first driver country"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Country"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:silverMedalist",
   "property": "http://dbpedia.org/ontology/silverMedalist",
   "label": {
    "en": "siler medalist",
    "pt": "medalha de prata"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Person"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:blockAlloy",
   "property": "http://dbpedia.org/ontology/blockAlloy",
   "label": {
    "en": "block alloy",
    "el": "κράμα μετάλλου"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:homeStadium",
   "property": "http://dbpedia.org/ontology/homeStadium",
   "label": {
    "en": "home stadium"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Stadium"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:causedBy",
   "property": "http://dbpedia.org/ontology/causedBy",
   "label": {
    "en": "caused by",
    "fr": "casus"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:source",
   "property": "http://dbpedia.org/ontology/source",
   "label": {
    "en": "source",
    "de": "Quelle",
    "el": "πηγή"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:typeOfElectrification",
   "property": "http://dbpedia.org/ontology/typeOfElectrification",
   "label": {
    "en": "type of electrification",
    "de": "Art der Elektrifizierung"
   },
   "description": {
    "en": "Electrification system (e.g. Third rail, Overhead catenary)."
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:fourthCommander",
   "property": "http://dbpedia.org/ontology/fourthCommander",
   "label": {
    "en": "fourth commander"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Person"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:architecturalStyle",
   "property": "http://dbpedia.org/ontology/architecturalStyle",
   "label": {
    "en": "architectural style",
    "el": "αρχιτεκτονικό στυλ",
    "nl": "bouwstijl",
    "fr": "style architectural"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:originalStartPoint",
   "property": "http://dbpedia.org/ontology/originalStartPoint",
   "label": {
    "en": "original start point",
    "el": "πρωταρχική_αρχή"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Place"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:targetSpaceStation",
   "property": "http://dbpedia.org/ontology/targetSpaceStation",
   "label": {
    "en": "target space station station"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/SpaceStation"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:founder",
   "property": "http://dbpedia.org/ontology/founder",
   "label": {
    "en": "Founder",
    "el": "Ιδρυτής"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:hairColor",
   "property": "http://dbpedia.org/ontology/hairColor",
   "label": {
    "en": "hair color",
    "de": "Haarfarbe",
    "pt": "cor do cabelo"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:endingTheme",
   "property": "http://dbpedia.org/ontology/endingTheme",
   "label": {
    "en": "ending theme"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Work"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:availableSmartCard",
   "property": "http://dbpedia.org/ontology/availableSmartCard",
   "label": {
    "en": "available smart card",
    "de": "benutzbare Chipkarte",
    "el": "διαθέσιμη έξυπνη κάρτα"
   },
   "description": {
    "en": "Smartcard for fare payment system for public transit systems that are or will be available at the station.",
    "de": "Chipkarte für automatische Bezahlsysteme im Personenverkehr die an diesem Bahnhof benutzt werden kann.",
    "el": "Έξυπνη κάρτα για το σύστημα πληρωμής των ναύλων για τα δημόσια συστήματα μεταφορών που είναι ή θα είναι διαθέσιμα στο σταθμό."
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:vicePrincipal",
   "property": "http://dbpedia.org/ontology/vicePrincipal",
   "label": {
    "en": "vice principal"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Person"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:prefecture",
   "property": "http://dbpedia.org/ontology/prefecture",
   "label": {
    "en": "prefecture"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/PopulatedPlace"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:genre",
   "property": "http://dbpedia.org/ontology/genre",
   "label": {
    "el": "είδος",
    "fr": "genre",
    "en": "genre",
    "ja": "ジャンル",
    "nl": "genre"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:sourceConfluence",
   "property": "http://dbpedia.org/ontology/sourceConfluence",
   "label": {
    "en": "source confluence",
    "es": "lugar de nacimiento",
    "el": "πηγές"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:notableStudent",
   "property": "http://dbpedia.org/ontology/notableStudent",
   "label": {
    "en": "notable student",
    "el": "σημαντικοί_φοιτητές"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Person"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:president",
   "property": "http://dbpedia.org/ontology/president",
   "label": {
    "el": "πρόεδρος",
    "en": "president",
    "nl": "president",
    "pt": "presidente",
    "de": "Präsident"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Person"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:storyEditor",
   "property": "http://dbpedia.org/ontology/storyEditor",
   "label": {
    "en": "story editor"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Person"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:formerChoreographer",
   "property": "http://dbpedia.org/ontology/formerChoreographer",
   "label": {
    "en": "former choreographer"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Person"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:relatedFunctions",
   "property": "http://dbpedia.org/ontology/relatedFunctions",
   "label": {
    "en": "related functions",
    "nl": "soortgelijke functies"
   },
   "description": {
    "en": "This property is to accommodate the list field that contains a list of related personFunctions a person holds or has held",
    "nl": "Deze property is voor de lijst van persoonfuncties die een persoon (bv. een politicus) bekleedt of heeft bekleed"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/List"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:daylightSavingTimeZone",
   "property": "http://dbpedia.org/ontology/daylightSavingTimeZone",
   "label": {
    "en": "daylight saving time zone"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:dam",
   "property": "http://dbpedia.org/ontology/dam",
   "label": {
    "en": "dam"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Animal"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:subsequentInfrastructure",
   "property": "http://dbpedia.org/ontology/subsequentInfrastructure",
   "label": {
    "en": "subsequent infrastructure",
    "nl": "volgende infrastructuur"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Infrastructure"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:photographer",
   "property": "http://dbpedia.org/ontology/photographer",
   "label": {
    "en": "photographer"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Person"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:programmeFormat",
   "property": "http://dbpedia.org/ontology/programmeFormat",
   "label": {
    "en": "programme format"
   },
   "description": {
    "en": "The programming format describes the overall content broadcast on a radio or television station."
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:starring",
   "property": "http://dbpedia.org/ontology/starring",
   "label": {
    "en": "starring",
    "nl": "met in de hoofdrol",
    "el": "ηθοποιοί"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Actor"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:subsidiary",
   "property": "http://dbpedia.org/ontology/subsidiary",
   "label": {
    "en": "subsidiary",
    "pt": "treinador"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Company"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:influenced",
   "property": "http://dbpedia.org/ontology/influenced",
   "label": {
    "en": "influenced",
    "fr": "a influencé",
    "el": "επηρέασε"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Person"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:pictureFormat",
   "property": "http://dbpedia.org/ontology/pictureFormat",
   "label": {
    "en": "picture format",
    "de": "Bildformat"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:show",
   "property": "http://dbpedia.org/ontology/show",
   "label": {
    "en": "show",
    "fr": "spectacle"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/TelevisionShow"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:mostWins",
   "property": "http://dbpedia.org/ontology/mostWins",
   "label": {
    "en": "most wins"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:mainInterest",
   "property": "http://dbpedia.org/ontology/mainInterest",
   "label": {
    "en": "main interest"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:musicians",
   "property": "http://dbpedia.org/ontology/musicians",
   "label": {
    "en": "musicians",
    "el": "μουσικοί"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/MusicalArtist"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:student",
   "property": "http://dbpedia.org/ontology/student",
   "label": {
    "en": "diploma"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Person"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:location",
   "property": "http://dbpedia.org/ontology/location",
   "label": {
    "el": "τοποθεσία",
    "fr": "emplacement",
    "en": "location",
    "nl": "locatie",
    "pt": "localização",
    "de": "Standort"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Place"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:explorer",
   "property": "http://dbpedia.org/ontology/explorer",
   "label": {
    "en": "explorer",
    "tr": "kaşif"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:viceLeaderParty",
   "property": "http://dbpedia.org/ontology/viceLeaderParty",
   "label": {
    "en": "vice leader party",
    "pt": "partido do vicelider"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/PoliticalParty"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:soccerLeagueWinner",
   "property": "http://dbpedia.org/ontology/soccerLeagueWinner",
   "label": {
    "en": "league champion",
    "tr": "şampiyon"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/SportsTeam"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:lastRace",
   "property": "http://dbpedia.org/ontology/lastRace",
   "label": {
    "en": "last race",
    "el": "τελευταίος αγώνας"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/GrandPrix"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:originalLanguage",
   "property": "http://dbpedia.org/ontology/originalLanguage",
   "label": {
    "en": "original language",
    "nl": "oorspronkelijke taal",
    "de": "Originalsprache"
   },
   "description": {
    "en": "The original language of the work."
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Language"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:makeupArtist",
   "property": "http://dbpedia.org/ontology/makeupArtist",
   "label": {
    "en": "makeup artist",
    "it": "truccatore"
   },
   "description": {
    "en": "the person who is responsible for the actors makeup"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Person"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:poleDriverTeam",
   "property": "http://dbpedia.org/ontology/poleDriverTeam",
   "label": {
    "en": "pole driver team"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/SportsTeam"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:branchTo",
   "property": "http://dbpedia.org/ontology/branchTo",
   "label": {
    "en": "branch to",
    "el": "υποκατάστημα"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/AnatomicalStructure"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:alpsSection",
   "property": "http://dbpedia.org/ontology/alpsSection",
   "label": {
    "en": "Alps section",
    "el": "τμήμα των άλπεων",
    "it": "sezione alpina"
   },
   "description": {
    "en": "the Alps section to which the mountain belongs, according to the SOIUSA classification"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/MountainRange"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:relation",
   "property": "http://dbpedia.org/ontology/relation",
   "label": {
    "en": "relation",
    "el": "σχέση",
    "nl": "relatie"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Person"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:laurenceOlivierAward",
   "property": "http://dbpedia.org/ontology/laurenceOlivierAward",
   "label": {
    "en": "Laurence Olivier Award"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Award"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:foundationPlace",
   "property": "http://dbpedia.org/ontology/foundationPlace",
   "label": {
    "en": "foundation place"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/City"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:march",
   "property": "http://dbpedia.org/ontology/march",
   "label": {
    "en": "march",
    "pt": "marcha"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/MusicalWork"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:usedInWar",
   "property": "http://dbpedia.org/ontology/usedInWar",
   "label": {
    "en": "used in war"
   },
   "description": {
    "en": "wars that were typical for the usage of a weapon"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/MilitaryConflict"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:winsAtJLPGA",
   "property": "http://dbpedia.org/ontology/winsAtJLPGA",
   "label": {
    "en": "wins at JLPGA"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:distributingLabel",
   "property": "http://dbpedia.org/ontology/distributingLabel",
   "label": {
    "en": "distributing label"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/RecordLabel"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:championInSingle",
   "property": "http://dbpedia.org/ontology/championInSingle",
   "label": {
    "en": "champion in single",
    "nl": "kampioen enkelspel",
    "fr": "champion en simple",
    "es": "Campeón en simple"
   },
   "description": {
    "en": "winner of a competition in the single session, to distinguish from the double session (as in tennis)"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Athlete"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:aircraftUser",
   "property": "http://dbpedia.org/ontology/aircraftUser",
   "label": {
    "en": "aircraft user",
    "el": "χρήστης αεροσκάφους",
    "es": "usuario del avión"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Organisation"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:animator",
   "property": "http://dbpedia.org/ontology/animator",
   "label": {
    "en": "animator"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Agent"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:ideology",
   "property": "http://dbpedia.org/ontology/ideology",
   "label": {
    "el": "ιδεολογία",
    "en": "ideology",
    "nl": "ideologie",
    "pt": "ideologia",
    "de": "Ideologie"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Ideology"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:mostPopulousCountry",
   "property": "http://dbpedia.org/ontology/mostPopulousCountry",
   "label": {
    "en": "most populous country",
    "pt": "país mais populoso"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Country"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:aircraftBomber",
   "property": "http://dbpedia.org/ontology/aircraftBomber",
   "label": {
    "en": "aircraft bomber",
    "el": "βομβαρδιστικό αεροσκάφος"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/MeanOfTransportation"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:chairLabel",
   "property": "http://dbpedia.org/ontology/chairLabel",
   "label": {
    "en": "chair label"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:voiceType",
   "property": "http://dbpedia.org/ontology/voiceType",
   "label": {
    "en": "voice type",
    "nl": "stemtype"
   },
   "description": {
    "en": "voice type of a singer or an actor"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:varietals",
   "property": "http://dbpedia.org/ontology/varietals",
   "label": {
    "en": "varietals"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:formerPartner",
   "property": "http://dbpedia.org/ontology/formerPartner",
   "label": {
    "en": "former partner"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Person"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:endPoint",
   "property": "http://dbpedia.org/ontology/endPoint",
   "label": {
    "en": "end point",
    "el": "σημείο_τέλους"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Place"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:field",
   "property": "http://dbpedia.org/ontology/field",
   "label": {
    "en": "field"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:enshrinedDeity",
   "property": "http://dbpedia.org/ontology/enshrinedDeity",
   "label": {
    "en": "enshrined deity",
    "ja": "祭神"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Deity"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:relatedMeanOfTransportation",
   "property": "http://dbpedia.org/ontology/relatedMeanOfTransportation",
   "label": {
    "en": "related mean of transportation"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/MeanOfTransportation"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:poleDriver",
   "property": "http://dbpedia.org/ontology/poleDriver",
   "label": {
    "en": "pole driver"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Person"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:lowestRegion",
   "property": "http://dbpedia.org/ontology/lowestRegion",
   "label": {
    "en": "lowest region"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/PopulatedPlace"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:sheading",
   "property": "http://dbpedia.org/ontology/sheading",
   "label": {
    "en": "sheading"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/PopulatedPlace"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:wikiPageRedirects",
   "property": "http://dbpedia.org/ontology/wikiPageRedirects",
   "label": {
    "en": "Wikipage redirect"
   },
   "description": {
    "en": "Reserved for DBpedia."
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:aircraftInterceptor",
   "property": "http://dbpedia.org/ontology/aircraftInterceptor",
   "label": {
    "en": "aircraft interceptor",
    "el": "αναχαίτιση αεροσκάφους"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/MeanOfTransportation"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:border",
   "property": "http://dbpedia.org/ontology/border",
   "label": {
    "en": "border",
    "el": "σύνορα"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/PopulatedPlace"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:unesco",
   "property": "http://dbpedia.org/ontology/unesco",
   "label": {
    "en": "unesco"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/PopulatedPlace"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:lake",
   "property": "http://dbpedia.org/ontology/lake",
   "label": {
    "en": "vastest lake"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/BodyOfWater"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:writer",
   "property": "http://dbpedia.org/ontology/writer",
   "label": {
    "el": "σεναριογράφος",
    "en": "writer",
    "it": "scrittore",
    "nl": "schrijver",
    "de": "schriftsteller"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Person"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:state",
   "property": "http://dbpedia.org/ontology/state",
   "label": {
    "en": "state",
    "nl": "staat",
    "el": "νομός"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/PopulatedPlace"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:anthem",
   "property": "http://dbpedia.org/ontology/anthem",
   "label": {
    "en": "anthem",
    "nl": "volkslied",
    "el": "ύμνος",
    "pt": "hino"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Work"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:doctoralAdvisor",
   "property": "http://dbpedia.org/ontology/doctoralAdvisor",
   "label": {
    "en": "doctoral advisor",
    "el": "διδακτορικός_σύμβουλος"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Person"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:thirdDriverCountry",
   "property": "http://dbpedia.org/ontology/thirdDriverCountry",
   "label": {
    "en": "third driver country"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Country"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:map",
   "property": "http://dbpedia.org/ontology/map",
   "label": {
    "el": "χάρτης",
    "fr": "carte",
    "en": "map",
    "nl": "kaart",
    "pt": "mapa",
    "de": "Landkarte"
   },
   "description": {
    "en": "A map of the place.",
    "el": "Χάρτης μιας περιοχής.",
    "de": "Eine Landkarte des Ortes."
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:belgiumPoliticalMajority",
   "property": "http://dbpedia.org/ontology/belgiumPoliticalMajority",
   "label": {
    "en": "belgium political majority"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/PoliticalParty"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:majorIsland",
   "property": "http://dbpedia.org/ontology/majorIsland",
   "label": {
    "en": "major island",
    "pt": "maior ilha"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Island"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:championInDoubleFemale",
   "property": "http://dbpedia.org/ontology/championInDoubleFemale",
   "label": {
    "en": "champion in double female",
    "fr": "champion en double femmes",
    "es": "Campeón en doble mujeres"
   },
   "description": {
    "en": "winner of a competition in the female double session (as in tennis)"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Athlete"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:regionServed",
   "property": "http://dbpedia.org/ontology/regionServed",
   "label": {
    "en": "region served",
    "nl": "werkgebied"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Place"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:previousEvent",
   "property": "http://dbpedia.org/ontology/previousEvent",
   "label": {
    "en": "previous event",
    "nl": "vorige evenement",
    "pt": "evento anterior"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Event"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:capitalCountry",
   "property": "http://dbpedia.org/ontology/capitalCountry",
   "label": {
    "en": "capital country"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Country"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:athletics",
   "property": "http://dbpedia.org/ontology/athletics",
   "label": {
    "en": "athletics",
    "el": "αθλητισμός"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:affiliation",
   "property": "http://dbpedia.org/ontology/affiliation",
   "label": {
    "en": "affiliation",
    "el": "ιστολόγιο",
    "nl": "Europees lidmaatschap"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Organisation"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:pictureDescription",
   "property": "http://dbpedia.org/ontology/pictureDescription",
   "label": {
    "en": "picture description"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:openingTheme",
   "property": "http://dbpedia.org/ontology/openingTheme",
   "label": {
    "en": "opening theme"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Work"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:diocese",
   "property": "http://dbpedia.org/ontology/diocese",
   "label": {
    "en": "diocese",
    "nl": "bisdom"
   },
   "description": {
    "en": "A religious administrative body above the parish level"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Diocese"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:viceChancellor",
   "property": "http://dbpedia.org/ontology/viceChancellor",
   "label": {
    "en": "vice chancellor",
    "de": "Vizekanzler"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Person"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:winsAtNWIDE",
   "property": "http://dbpedia.org/ontology/winsAtNWIDE",
   "label": {
    "en": "wins at NWIDE"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:principalEngineer",
   "property": "http://dbpedia.org/ontology/principalEngineer",
   "label": {
    "en": "principal engineer",
    "el": "πρώτος_μηχανικός"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Person"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:damsire",
   "property": "http://dbpedia.org/ontology/damsire",
   "label": {
    "en": "damsire"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Animal"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:elementAbove",
   "property": "http://dbpedia.org/ontology/elementAbove",
   "label": {
    "en": "element above",
    "ru": "элемент снизу",
    "nl": "hoger element"
   },
   "description": {
    "en": "element placed above to current element in table of D.I.Mendeleev",
    "ru": "Элемент снизу под текущим элементом в таблице Д.И.Менделеева"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/ChemicalSubstance"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:similar",
   "property": "http://dbpedia.org/ontology/similar",
   "label": {
    "en": "similar",
    "el": "παρόμοιος",
    "pl": "podobny"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:owningOrganisation",
   "property": "http://dbpedia.org/ontology/owningOrganisation",
   "label": {
    "en": "owning organisation",
    "el": "οργανισμός"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Organisation"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:capitalRegion",
   "property": "http://dbpedia.org/ontology/capitalRegion",
   "label": {
    "en": "capital region"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/PopulatedPlace"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:port2",
   "property": "http://dbpedia.org/ontology/port2",
   "label": {
    "en": "port2"
   },
   "description": {
    "en": "second docking port of a spacecraft"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:disciple",
   "property": "http://dbpedia.org/ontology/disciple",
   "label": {
    "en": "disciple",
    "fr": "élève"
   },
   "description": {
    "en": "A person who learns from another, especially one who then teaches others..",
    "fr": "Celui qui apprend d’un maître quelque science ou quelque art libéral."
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Artist"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:thirdTeam",
   "property": "http://dbpedia.org/ontology/thirdTeam",
   "label": {
    "en": "third team",
    "el": "τρίτη ομάδα"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/SportsTeam"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:olivierAward",
   "property": "http://dbpedia.org/ontology/olivierAward",
   "label": {
    "en": "Olivier Award"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Award"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:alpsGroup",
   "property": "http://dbpedia.org/ontology/alpsGroup",
   "label": {
    "en": "Alps group",
    "el": "ομάδα των άλπεων",
    "it": "gruppo alpino"
   },
   "description": {
    "en": "the Alps group to which the mountain belongs, according to the SOIUSA classification"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/MountainRange"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:event",
   "property": "http://dbpedia.org/ontology/event",
   "label": {
    "en": "event",
    "pt": "evento"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Event"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:tenant",
   "property": "http://dbpedia.org/ontology/tenant",
   "label": {
    "en": "tenant",
    "nl": "huurder",
    "el": "ενοικιαστής",
    "fr": "locataire"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Organisation"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:tonyAward",
   "property": "http://dbpedia.org/ontology/tonyAward",
   "label": {
    "en": "Tony Award"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Award"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:sea",
   "property": "http://dbpedia.org/ontology/sea",
   "label": {
    "en": "sea"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Sea"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:currentMember",
   "property": "http://dbpedia.org/ontology/currentMember",
   "label": {
    "en": "current member"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Person"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:languageRegulator",
   "property": "http://dbpedia.org/ontology/languageRegulator",
   "label": {
    "en": "language regulator or academy",
    "nl": "taal instituut"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Language"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:projectCoordinator",
   "property": "http://dbpedia.org/ontology/projectCoordinator",
   "label": {
    "en": "project coordinator"
   },
   "description": {
    "en": "The coordinating organisation of the project."
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Organisation"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:originalEndPoint",
   "property": "http://dbpedia.org/ontology/originalEndPoint",
   "label": {
    "en": "original end point",
    "el": "πρωταρχικό_σημείο_τέλους"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Place"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:militaryBranch",
   "property": "http://dbpedia.org/ontology/militaryBranch",
   "label": {
    "en": "military branch"
   },
   "description": {
    "en": "The service branch (Army, Navy, etc.) a person is part of."
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/MilitaryUnit"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:significantBuilding",
   "property": "http://dbpedia.org/ontology/significantBuilding",
   "label": {
    "en": "significant building"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Building"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:usingCountry",
   "property": "http://dbpedia.org/ontology/usingCountry",
   "label": {
    "en": "using country"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Country"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:runningMate",
   "property": "http://dbpedia.org/ontology/runningMate",
   "label": {
    "en": "running mate"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Person"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:routeJunction",
   "property": "http://dbpedia.org/ontology/routeJunction",
   "label": {
    "en": "route junction",
    "de": "Wegabzweigung"
   },
   "description": {
    "en": "A junction or cross to another route.",
    "de": "Eine Abzweigung oder Kreuzung zu einem anderen Verkehrsweg."
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/RouteOfTransportation"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:provost",
   "property": "http://dbpedia.org/ontology/provost",
   "label": {
    "en": "provost"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Person"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:vehicle",
   "property": "http://dbpedia.org/ontology/vehicle",
   "label": {
    "en": "vehicle",
    "el": "όχημα",
    "de": "Vehikel"
   },
   "description": {
    "en": "vehicle that uses a specific automobile platform",
    "el": "όχημα που χρησιμοποιεί μια συγκεκριμένη πλατφόρμα αυτοκινήτων"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Automobile"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:philosophicalSchool",
   "property": "http://dbpedia.org/ontology/philosophicalSchool",
   "label": {
    "en": "philosophicalSchool"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:aspectRatio",
   "property": "http://dbpedia.org/ontology/aspectRatio",
   "label": {
    "de": "Seitenverhältnis",
    "en": "Aspect Ratio",
    "el": "λόγος"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:governmentMountain",
   "property": "http://dbpedia.org/ontology/governmentMountain",
   "label": {
    "en": "government mountain"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Mountain"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:subregion",
   "property": "http://dbpedia.org/ontology/subregion",
   "label": {
    "en": "subregion"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Place"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:unitaryAuthority",
   "property": "http://dbpedia.org/ontology/unitaryAuthority",
   "label": {
    "en": "unitary authority"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/PopulatedPlace"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:cesarAward",
   "property": "http://dbpedia.org/ontology/cesarAward",
   "label": {
    "en": "Cesar Award"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Award"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:follows",
   "property": "http://dbpedia.org/ontology/follows",
   "label": {
    "en": "follows"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:termPeriod",
   "property": "http://dbpedia.org/ontology/termPeriod",
   "label": {
    "en": "term period",
    "el": "χρονική περίοδος"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/TimePeriod"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:mouthPlace",
   "property": "http://dbpedia.org/ontology/mouthPlace",
   "label": {
    "en": "mouth place"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/PopulatedPlace"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:leaderName",
   "property": "http://dbpedia.org/ontology/leaderName",
   "label": {
    "en": "leader name",
    "nl": "naam leider",
    "fr": "président",
    "el": "όνομα_αρχηγού"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Person"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:musicComposer",
   "property": "http://dbpedia.org/ontology/musicComposer",
   "label": {
    "en": "music composer",
    "de": "komponist",
    "nl": "componist",
    "el": "μουσική"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/MusicalArtist"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:prospectTeam",
   "property": "http://dbpedia.org/ontology/prospectTeam",
   "label": {
    "en": "prospect team"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/HockeyTeam"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:hometown",
   "property": "http://dbpedia.org/ontology/hometown",
   "label": {
    "en": "home town",
    "de": "Heimatort"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Settlement"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:administrativeDistrict",
   "property": "http://dbpedia.org/ontology/administrativeDistrict",
   "label": {
    "en": "administrative district",
    "nl": "provincie",
    "el": "δήμος"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/PopulatedPlace"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:nationalAffiliation",
   "property": "http://dbpedia.org/ontology/nationalAffiliation",
   "label": {
    "en": "national affiliation",
    "pt": "afiliacao nacional"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:soccerLeaguePromoted",
   "property": "http://dbpedia.org/ontology/soccerLeaguePromoted",
   "label": {
    "en": "promoted",
    "tr": "yükselenler"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/SportsTeam"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:uses",
   "property": "http://dbpedia.org/ontology/uses",
   "label": {
    "en": "uses"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:foundingPerson",
   "property": "http://dbpedia.org/ontology/foundingPerson",
   "label": {
    "de": "Gründer",
    "en": "founding person",
    "nl": "stichter",
    "el": "Ιδρυτής"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Person"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:successor",
   "property": "http://dbpedia.org/ontology/successor",
   "label": {
    "en": "successor",
    "nl": "opvolger",
    "de": "Nachfolger",
    "ja": "後任者"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:rightTributary",
   "property": "http://dbpedia.org/ontology/rightTributary",
   "label": {
    "en": "right tributary",
    "el": "δεξιοί_παραπόταμοι"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/River"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:countryWithFirstSpaceflight",
   "property": "http://dbpedia.org/ontology/countryWithFirstSpaceflight",
   "label": {
    "en": "country with first spaceflight"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Country"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:league",
   "property": "http://dbpedia.org/ontology/league",
   "label": {
    "en": "league",
    "de": "Liga",
    "el": "πρωτάθλημα"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/SportsLeague"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:touristicSite",
   "property": "http://dbpedia.org/ontology/touristicSite",
   "label": {
    "en": "touristic site"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Place"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:frazioni",
   "property": "http://dbpedia.org/ontology/frazioni",
   "label": {
    "en": "frazioni"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/PopulatedPlace"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:shipCrew",
   "property": "http://dbpedia.org/ontology/shipCrew",
   "label": {
    "en": "crew"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Person"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:head",
   "property": "http://dbpedia.org/ontology/head",
   "label": {
    "en": "head"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Person"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:commandStructure",
   "property": "http://dbpedia.org/ontology/commandStructure",
   "label": {
    "en": "command structure"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/MilitaryUnit"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:citizenship",
   "property": "http://dbpedia.org/ontology/citizenship",
   "label": {
    "en": "citizenship",
    "nl": "burgerschap",
    "de": "Staatsangehörigkeit",
    "el": "υπηκοότητα"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:routeStartLocation",
   "property": "http://dbpedia.org/ontology/routeStartLocation",
   "label": {
    "en": "route start location",
    "de": "Ort des Weganfangs"
   },
   "description": {
    "en": "The start location of the route.",
    "de": "Der Startort des Verkehrswegs."
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Place"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:olympicOathSwornByAthlete",
   "property": "http://dbpedia.org/ontology/olympicOathSwornByAthlete",
   "label": {
    "en": "olympic oath sworn by athlete"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Person"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:winsAtJapan",
   "property": "http://dbpedia.org/ontology/winsAtJapan",
   "label": {
    "en": "wins at japan"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:jockey",
   "property": "http://dbpedia.org/ontology/jockey",
   "label": {
    "en": "jockey"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Jockey"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:wikiPageExternalLink",
   "property": "http://dbpedia.org/ontology/wikiPageExternalLink",
   "label": {
    "en": "Link from a Wikipage to an external page"
   },
   "description": {
    "en": "Reserved for DBpedia."
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:nextMission",
   "property": "http://dbpedia.org/ontology/nextMission",
   "label": {
    "en": "next mission"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/SpaceMission"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:compiler",
   "property": "http://dbpedia.org/ontology/compiler",
   "label": {
    "en": "compiler"
   },
   "description": {
    "en": "For compilation albums: the person or entity responsible for selecting the album's track listing."
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Person"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:domain",
   "property": "http://dbpedia.org/ontology/domain",
   "label": {
    "en": "domain",
    "nl": "domein",
    "ja": "ドメイン_(分類学)"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:numberOfClassrooms",
   "property": "http://dbpedia.org/ontology/numberOfClassrooms",
   "label": {
    "en": "number of classrooms",
    "el": "αριθμός αιθουσών"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:majorLake",
   "property": "http://dbpedia.org/ontology/majorLake",
   "label": {
    "en": "major lake",
    "pt": "maior lago"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:spouse",
   "property": "http://dbpedia.org/ontology/spouse",
   "label": {
    "en": "spouse",
    "nl": "echtgenoot",
    "ja": "配偶者"
   },
   "description": {
    "en": "the person they are married to"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Person"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:sharingOutName",
   "property": "http://dbpedia.org/ontology/sharingOutName",
   "label": {
    "en": "sharing out name of a settlement"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/PopulatedPlace"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:battle",
   "property": "http://dbpedia.org/ontology/battle",
   "label": {
    "en": "battle",
    "nl": "veldslag",
    "de": "Schlacht"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/MilitaryConflict"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:bodyDiscovered",
   "property": "http://dbpedia.org/ontology/bodyDiscovered",
   "label": {
    "en": "body discovered",
    "el": "ανακάλυψη σώματος",
    "ja": "遺体発見"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:fuelSystem",
   "property": "http://dbpedia.org/ontology/fuelSystem",
   "label": {
    "en": "fuel system"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:launchVehicle",
   "property": "http://dbpedia.org/ontology/launchVehicle",
   "label": {
    "en": "launch vehicle"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:aircraftAttack",
   "property": "http://dbpedia.org/ontology/aircraftAttack",
   "label": {
    "en": "aircraft attack",
    "el": "επίθεση αεροσκάφους"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/MeanOfTransportation"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:institution",
   "property": "http://dbpedia.org/ontology/institution",
   "label": {
    "en": "institution",
    "nl": "institutie"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Organisation"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:club",
   "property": "http://dbpedia.org/ontology/club",
   "label": {
    "en": "club",
    "nl": "club",
    "el": "ομάδα"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/SportsTeam"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:primeMinister",
   "property": "http://dbpedia.org/ontology/primeMinister",
   "label": {
    "en": "prime minister",
    "nl": "minister-president",
    "de": "Premierminister"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Person"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:previousEntity",
   "property": "http://dbpedia.org/ontology/previousEntity",
   "label": {
    "en": "previous entity"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Place"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:features",
   "property": "http://dbpedia.org/ontology/features",
   "label": {
    "en": "features",
    "el": "χαρακτηριστικό",
    "nl": "kenmerk"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Work"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:painter",
   "property": "http://dbpedia.org/ontology/painter",
   "label": {
    "en": "painter",
    "el": "ζωγράφος"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Person"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:militaryUnit",
   "property": "http://dbpedia.org/ontology/militaryUnit",
   "label": {
    "en": "military unit"
   },
   "description": {
    "en": "For persons who are not notable as commanding officers, the unit (company, battalion, regiment, etc.) in which they served."
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/MilitaryUnit"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:commander",
   "property": "http://dbpedia.org/ontology/commander",
   "label": {
    "en": "commander"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Person"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:youthClub",
   "property": "http://dbpedia.org/ontology/youthClub",
   "label": {
    "en": "youth club",
    "nl": "jeugdclub"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/SportsTeam"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:musicalArtist",
   "property": "http://dbpedia.org/ontology/musicalArtist",
   "label": {
    "en": "musical artist"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/MusicalArtist"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:residence",
   "property": "http://dbpedia.org/ontology/residence",
   "label": {
    "en": "residence",
    "nl": "verblijfplaats",
    "el": "κατοικία"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:principalArea",
   "property": "http://dbpedia.org/ontology/principalArea",
   "label": {
    "en": "principal area"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/PopulatedPlace"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:sisterCollege",
   "property": "http://dbpedia.org/ontology/sisterCollege",
   "label": {
    "en": "sister college"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/College"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:assembly",
   "property": "http://dbpedia.org/ontology/assembly",
   "label": {
    "en": "assembly",
    "el": "συνέλευση"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:dean",
   "property": "http://dbpedia.org/ontology/dean",
   "label": {
    "en": "dean",
    "el": "πρύτανης",
    "nl": "decaan"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Person"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:oldProvince",
   "property": "http://dbpedia.org/ontology/oldProvince",
   "label": {
    "en": "old province"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/PopulatedPlace"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:mouthCountry",
   "property": "http://dbpedia.org/ontology/mouthCountry",
   "label": {
    "en": "mouth country",
    "el": "χώρες_λεκάνης"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Country"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:alpsMajorSector",
   "property": "http://dbpedia.org/ontology/alpsMajorSector",
   "label": {
    "en": "Alps major sector",
    "el": "σημαντικότερος τομέας των άλπεων",
    "it": "grande settore alpino"
   },
   "description": {
    "en": "the Alps major sector to which the mountain belongs, according to the SOIUSA classification"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/MountainRange"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:leftChild",
   "property": "http://dbpedia.org/ontology/leftChild",
   "label": {
    "en": "left child"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Island"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:managerClub",
   "property": "http://dbpedia.org/ontology/managerClub",
   "label": {
    "en": "manager club"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/SportsTeam"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:aircraftElectronic",
   "property": "http://dbpedia.org/ontology/aircraftElectronic",
   "label": {
    "en": "aircraft electronic",
    "el": "ηλεκτρονικό αεροσκάφος"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/MeanOfTransportation"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:rebuilder",
   "property": "http://dbpedia.org/ontology/rebuilder",
   "label": {
    "en": "rebuilder"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:restingPlace",
   "property": "http://dbpedia.org/ontology/restingPlace",
   "label": {
    "en": "resting place"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Place"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:largestCity",
   "property": "http://dbpedia.org/ontology/largestCity",
   "label": {
    "en": "largest city"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/PopulatedPlace"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:secondLeader",
   "property": "http://dbpedia.org/ontology/secondLeader",
   "label": {
    "en": "secondLeader",
    "nl": "vice-voorzitter"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Person"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:bandMember",
   "property": "http://dbpedia.org/ontology/bandMember",
   "label": {
    "en": "band member",
    "nl": "bandlid",
    "el": "μέλος μπάντας"
   },
   "description": {
    "en": "A member of the band.",
    "el": "Ένα μέλος της μπάντας."
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Person"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:influencedBy",
   "property": "http://dbpedia.org/ontology/influencedBy",
   "label": {
    "en": "influenced by",
    "fr": "influencé par",
    "el": "επιρροές",
    "nl": "beïnvloed door"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Person"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:winsInEurope",
   "property": "http://dbpedia.org/ontology/winsInEurope",
   "label": {
    "en": "wins in Europe",
    "de": "Siege in Europa"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:artery",
   "property": "http://dbpedia.org/ontology/artery",
   "label": {
    "en": "artery",
    "el": "αρτηρία",
    "nl": "ader"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Artery"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:railwayRollingStock",
   "property": "http://dbpedia.org/ontology/railwayRollingStock",
   "label": {
    "en": "railway rolling stock",
    "de": "Operierende Schienenfahrzeuge"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:governmentType",
   "property": "http://dbpedia.org/ontology/governmentType",
   "label": {
    "de": "Staatsform",
    "en": "government type",
    "nl": "staatsvorm",
    "pt": "tipo de governo"
   },
   "description": {
    "en": "broadly, the type of structure of its government"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/GovernmentType"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:soccerTournamentMostSteady",
   "property": "http://dbpedia.org/ontology/soccerTournamentMostSteady",
   "label": {
    "en": "most steady",
    "tr": "en istikrarlı"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/SoccerClub"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:countryWithFirstAstronaut",
   "property": "http://dbpedia.org/ontology/countryWithFirstAstronaut",
   "label": {
    "en": "country with first astronaut"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Country"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:previousEditor",
   "property": "http://dbpedia.org/ontology/previousEditor",
   "label": {
    "en": "previous editor",
    "el": "πρώην συντάκτης"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Person"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:countryOrigin",
   "property": "http://dbpedia.org/ontology/countryOrigin",
   "label": {
    "en": "country origin"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Country"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:beltwayCity",
   "property": "http://dbpedia.org/ontology/beltwayCity",
   "label": {
    "en": "beltway city"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/City"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:managementMountain",
   "property": "http://dbpedia.org/ontology/managementMountain",
   "label": {
    "en": "management mountain"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Mountain"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:vicePrincipalLabel",
   "property": "http://dbpedia.org/ontology/vicePrincipalLabel",
   "label": {
    "en": "vice principal label"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:nobelLaureates",
   "property": "http://dbpedia.org/ontology/nobelLaureates",
   "label": {
    "en": "nobel laureates"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Person"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:commandant",
   "property": "http://dbpedia.org/ontology/commandant",
   "label": {
    "en": "commandant"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Person"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:mergedIntoParty",
   "property": "http://dbpedia.org/ontology/mergedIntoParty",
   "label": {
    "en": "merged into party",
    "de": "Aufgegangen in Partei"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/PoliticalParty"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:lyrics",
   "property": "http://dbpedia.org/ontology/lyrics",
   "label": {
    "en": "lyrics",
    "el": "στίχοι",
    "fr": "parolier",
    "ja": "歌詞"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Person"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:isoCodeRegion",
   "property": "http://dbpedia.org/ontology/isoCodeRegion",
   "label": {
    "en": "ISO region code",
    "nl": "ISO regiocode"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:countySeat",
   "property": "http://dbpedia.org/ontology/countySeat",
   "label": {
    "en": "county seat",
    "nl": "provincie zetel"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:poorestCountry",
   "property": "http://dbpedia.org/ontology/poorestCountry",
   "label": {
    "en": "poorest country",
    "pt": "país mais pobre"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Country"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:belgiumReffBourgmestre",
   "property": "http://dbpedia.org/ontology/belgiumReffBourgmestre",
   "label": {
    "en": "referent bourgmestre"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Person"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:award",
   "property": "http://dbpedia.org/ontology/award",
   "label": {
    "el": "διακρίσεις",
    "fr": "récompense",
    "en": "award",
    "ja": "受賞",
    "nl": "onderscheiding",
    "de": "Auszeichnung"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Award"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:ethnicGroup",
   "property": "http://dbpedia.org/ontology/ethnicGroup",
   "label": {
    "en": "ethnic group",
    "de": "ethnie",
    "it": "etnia"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/EthnicGroup"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:productionCompany",
   "property": "http://dbpedia.org/ontology/productionCompany",
   "label": {
    "en": "production company",
    "nl": "productiebedrijf"
   },
   "description": {
    "en": "the company that produced the work e.g. Film, MusicalWork, Software"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Company"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:movie",
   "property": "http://dbpedia.org/ontology/movie",
   "label": {
    "en": "movie"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Film"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:currentTeamMember",
   "property": "http://dbpedia.org/ontology/currentTeamMember",
   "label": {
    "en": "current team member"
   },
   "description": {
    "en": "A current member of an athletic team."
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/TeamMember"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:winsAtLET",
   "property": "http://dbpedia.org/ontology/winsAtLET",
   "label": {
    "en": "wins at LET"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:crew",
   "property": "http://dbpedia.org/ontology/crew",
   "label": {
    "de": "Crew",
    "el": "πλήρωμα",
    "en": "crew"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/SpaceMission"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:rector",
   "property": "http://dbpedia.org/ontology/rector",
   "label": {
    "en": "rector"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Person"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:localizationThumbnail",
   "property": "http://dbpedia.org/ontology/localizationThumbnail",
   "label": {
    "en": "thumbnail localization"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:drainsFrom",
   "property": "http://dbpedia.org/ontology/drainsFrom",
   "label": {
    "en": "drains from"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/AnatomicalStructure"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:governmentCountry",
   "property": "http://dbpedia.org/ontology/governmentCountry",
   "label": {
    "en": "government country"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Country"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:developer",
   "property": "http://dbpedia.org/ontology/developer",
   "label": {
    "en": "developer",
    "nl": "ontwikkelaar",
    "de": "Entwickler",
    "fr": "développeur"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Company"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:winsAtProTournaments",
   "property": "http://dbpedia.org/ontology/winsAtProTournaments",
   "label": {
    "en": "wins at pro tournaments"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:canonizedBy",
   "property": "http://dbpedia.org/ontology/canonizedBy",
   "label": {
    "en": "canonized by",
    "nl": "heilig verklaard door"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Person"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:provides",
   "property": "http://dbpedia.org/ontology/provides",
   "label": {
    "en": "provides"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:highestState",
   "property": "http://dbpedia.org/ontology/highestState",
   "label": {
    "en": "highest state"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/PopulatedPlace"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:lowestPosition",
   "property": "http://dbpedia.org/ontology/lowestPosition",
   "label": {
    "en": "lowest position"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://www.w3.org/2003/01/geo/wgs84_pos#SpatialThing"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:aircraftTrainer",
   "property": "http://dbpedia.org/ontology/aircraftTrainer",
   "label": {
    "en": "aircraft trainer"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/MeanOfTransportation"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:river",
   "property": "http://dbpedia.org/ontology/river",
   "label": {
    "en": "river",
    "el": "ποτάμι",
    "fr": "rivière"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/River"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:notableWine",
   "property": "http://dbpedia.org/ontology/notableWine",
   "label": {
    "en": "notable wine"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:administrator",
   "property": "http://dbpedia.org/ontology/administrator",
   "label": {
    "en": "administrator",
    "el": "διαχειριστής"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Person"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:locationCity",
   "property": "http://dbpedia.org/ontology/locationCity",
   "label": {
    "en": "location city",
    "nl": "locatie stad",
    "fr": "ville"
   },
   "description": {
    "en": "City the thing is located."
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/City"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:employer",
   "property": "http://dbpedia.org/ontology/employer",
   "label": {
    "en": "employer",
    "ja": "雇用者",
    "el": "θέσεις_εργασίας"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Organisation"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:presidentGeneralCouncil",
   "property": "http://dbpedia.org/ontology/presidentGeneralCouncil",
   "label": {
    "en": "president of the general council"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Person"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:ingredient",
   "property": "http://dbpedia.org/ontology/ingredient",
   "label": {
    "en": "ingredient",
    "de": "Zutat"
   },
   "description": {
    "en": "An ingredient is a substance that forms part of a mixture (in a general sense). Here it is used in the context of recipes that specify which ingredients are used to prepare a specific dish or drink."
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:aircraftHelicopterCargo",
   "property": "http://dbpedia.org/ontology/aircraftHelicopterCargo",
   "label": {
    "en": "aircraft helicopter cargo",
    "el": "φορτίο ελικοφόρου αεροσκάφους"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/MeanOfTransportation"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:spacecraft",
   "property": "http://dbpedia.org/ontology/spacecraft",
   "label": {
    "en": "spacecraft",
    "el": "διαστημόπλοιο",
    "fr": "véhicule spatial"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Spacecraft"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:previousMission",
   "property": "http://dbpedia.org/ontology/previousMission",
   "label": {
    "en": "previous mission"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/SpaceMission"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:managementPosition",
   "property": "http://dbpedia.org/ontology/managementPosition",
   "label": {
    "en": "management position"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://www.w3.org/2003/01/geo/wgs84_pos#SpatialThing"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:governingBody",
   "property": "http://dbpedia.org/ontology/governingBody",
   "label": {
    "en": "governing body",
    "nl": "bestuursorgaan",
    "de": "Verwaltungsgremium"
   },
   "description": {
    "en": "Body that owns/operates the Place."
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Organisation"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:polishFilmAward",
   "property": "http://dbpedia.org/ontology/polishFilmAward",
   "label": {
    "en": "Polish Film Award",
    "pl": "Polska Nagroda Filmowa (Orzeł)"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Award"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:entourage",
   "property": "http://dbpedia.org/ontology/entourage",
   "label": {
    "en": "entourage"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Species"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:keyPerson",
   "property": "http://dbpedia.org/ontology/keyPerson",
   "label": {
    "en": "key person"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Person"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:lieutenancyArea",
   "property": "http://dbpedia.org/ontology/lieutenancyArea",
   "label": {
    "en": "Lieutenancy area"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/PopulatedPlace"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:voice",
   "property": "http://dbpedia.org/ontology/voice",
   "label": {
    "en": "voice"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Person"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:governmentRegion",
   "property": "http://dbpedia.org/ontology/governmentRegion",
   "label": {
    "en": "government region"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/PopulatedPlace"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:connotation",
   "property": "http://dbpedia.org/ontology/connotation",
   "label": {
    "en": "connotation"
   },
   "description": {
    "en": "A meaning of a word or phrase that is suggested or implied, as opposed to a denotation, or literal meaning."
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:languageCode",
   "property": "http://dbpedia.org/ontology/languageCode",
   "label": {
    "en": "language code",
    "pl": "kod językowy"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:youthWing",
   "property": "http://dbpedia.org/ontology/youthWing",
   "label": {
    "en": "youth wing",
    "pt": "ala jovem"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:currentWorldChampion",
   "property": "http://dbpedia.org/ontology/currentWorldChampion",
   "label": {
    "en": "current world champion",
    "fr": "champion du monde actuel",
    "es": "actual Campeón del mundo",
    "nl": "huidig wereldkampioen"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Agent"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:careerStation",
   "property": "http://dbpedia.org/ontology/careerStation",
   "label": {
    "en": "career station",
    "de": "Karrierestation",
    "nl": "carrièrestap"
   },
   "description": {
    "en": "this property links to a step in the career of a person, e.g. a soccer player, holding information on the time span, matches and goals he or she achieved at a club."
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/CareerStation"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:governmentPosition",
   "property": "http://dbpedia.org/ontology/governmentPosition",
   "label": {
    "en": "government position"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://www.w3.org/2003/01/geo/wgs84_pos#SpatialThing"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:composer",
   "property": "http://dbpedia.org/ontology/composer",
   "label": {
    "el": "συνθέτης",
    "fr": "compositeur",
    "en": "composer",
    "nl": "componist",
    "de": "Komponist"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Person"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:openingFilm",
   "property": "http://dbpedia.org/ontology/openingFilm",
   "label": {
    "en": "opening film"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Film"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:training",
   "property": "http://dbpedia.org/ontology/training",
   "label": {
    "en": "training",
    "el": "προπόνηση"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/EducationalInstitution"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:innervates",
   "property": "http://dbpedia.org/ontology/innervates",
   "label": {
    "en": "innervates"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/AnatomicalStructure"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:soccerTournamentClosingSeason",
   "property": "http://dbpedia.org/ontology/soccerTournamentClosingSeason",
   "label": {
    "en": "closing season",
    "tr": "kapanış sezonu"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/SoccerTournament"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:builder",
   "property": "http://dbpedia.org/ontology/builder",
   "label": {
    "en": "builder",
    "nl": "bouwer",
    "el": "οικοδόμος"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:assistantPrincipal",
   "property": "http://dbpedia.org/ontology/assistantPrincipal",
   "label": {
    "en": "assistant principal",
    "el": "κύριος βοηθός"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:previousWork",
   "property": "http://dbpedia.org/ontology/previousWork",
   "label": {
    "en": "previous work",
    "nl": "vorig werk",
    "el": "προηγούμενη δημιουργία"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Work"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:portrayer",
   "property": "http://dbpedia.org/ontology/portrayer",
   "label": {
    "en": "portrayer"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:humanDevelopmentIndexRankingCategory",
   "property": "http://dbpedia.org/ontology/humanDevelopmentIndexRankingCategory",
   "label": {
    "en": "human development index (HDI) category",
    "pt": "categoria do indice de desenvolvimento humano (IDH)"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:regency",
   "property": "http://dbpedia.org/ontology/regency",
   "label": {
    "en": "regency",
    "id": "kabupaten"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/PopulatedPlace"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:industry",
   "property": "http://dbpedia.org/ontology/industry",
   "label": {
    "en": "industry",
    "fr": "industrie"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:judge",
   "property": "http://dbpedia.org/ontology/judge",
   "label": {
    "en": "judge",
    "nl": "rechter"
   },
   "description": {
    "en": "leading judge"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Judge"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:poleDriverCountry",
   "property": "http://dbpedia.org/ontology/poleDriverCountry",
   "label": {
    "en": "pole driver country"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Country"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:associate",
   "property": "http://dbpedia.org/ontology/associate",
   "label": {
    "en": "associate",
    "el": "συνεργάτης"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Person"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:dfE",
   "property": "http://dbpedia.org/ontology/dfE",
   "label": {
    "en": "DfE"
   },
   "description": {
    "en": "DfE number of a school in England or Wales"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:bigestCity",
   "property": "http://dbpedia.org/ontology/bigestCity",
   "label": {
    "en": "bigest city"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/PopulatedPlace"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:debutTeam",
   "property": "http://dbpedia.org/ontology/debutTeam",
   "label": {
    "en": "debut team"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/SportsTeam"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:musicalBand",
   "property": "http://dbpedia.org/ontology/musicalBand",
   "label": {
    "en": "musical band"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Band"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:politicGovernmentDepartment",
   "property": "http://dbpedia.org/ontology/politicGovernmentDepartment",
   "label": {
    "en": "politic government department",
    "pt": "ministerio do politico"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:mouthMountain",
   "property": "http://dbpedia.org/ontology/mouthMountain",
   "label": {
    "en": "mouth mountain"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Mountain"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:linkedTo",
   "property": "http://dbpedia.org/ontology/linkedTo",
   "label": {
    "en": "linked to"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Place"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:highestRegion",
   "property": "http://dbpedia.org/ontology/highestRegion",
   "label": {
    "en": "highest region",
    "nl": "hoogste regio"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/PopulatedPlace"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:soccerTournamentOpeningSeason",
   "property": "http://dbpedia.org/ontology/soccerTournamentOpeningSeason",
   "label": {
    "en": "opening season",
    "tr": "açılış sezonu"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/SoccerTournament"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:spokenIn",
   "property": "http://dbpedia.org/ontology/spokenIn",
   "label": {
    "en": "spoken in",
    "nl": "gesproken in"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/PopulatedPlace"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:variantOf",
   "property": "http://dbpedia.org/ontology/variantOf",
   "label": {
    "en": "variant or variation",
    "nl": "variant"
   },
   "description": {
    "en": "variant or variation of something, for example the variant of a car"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:stateOfOrigin",
   "property": "http://dbpedia.org/ontology/stateOfOrigin",
   "label": {
    "en": "state of origin"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Country"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:aircraftRecon",
   "property": "http://dbpedia.org/ontology/aircraftRecon",
   "label": {
    "en": "aircraft recon"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/MeanOfTransportation"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:provinceLink",
   "property": "http://dbpedia.org/ontology/provinceLink",
   "label": {
    "en": "province link"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Province"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:associateEditor",
   "property": "http://dbpedia.org/ontology/associateEditor",
   "label": {
    "en": "associate editor",
    "el": "συνεργαζόμενος συντάκτης"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Person"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:managingEditor",
   "property": "http://dbpedia.org/ontology/managingEditor",
   "label": {
    "en": "managing editor"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Person"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:currentPartner",
   "property": "http://dbpedia.org/ontology/currentPartner",
   "label": {
    "en": "current partner"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Person"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:country",
   "property": "http://dbpedia.org/ontology/country",
   "label": {
    "el": "χώρα",
    "fr": "pays",
    "en": "country",
    "nl": "land",
    "pt": "país",
    "es": "país",
    "de": "Land"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Country"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:subprefecture",
   "property": "http://dbpedia.org/ontology/subprefecture",
   "label": {
    "en": "subprefecture"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/PopulatedPlace"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:fastestDriverCountry",
   "property": "http://dbpedia.org/ontology/fastestDriverCountry",
   "label": {
    "en": "fastest driver country"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Country"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:executiveHeadteacher",
   "property": "http://dbpedia.org/ontology/executiveHeadteacher",
   "label": {
    "en": "executive headteacher"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Person"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:twinCity",
   "property": "http://dbpedia.org/ontology/twinCity",
   "label": {
    "en": "twin city",
    "nl": "tweeling stad"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Settlement"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:dubber",
   "property": "http://dbpedia.org/ontology/dubber",
   "label": {
    "en": "dubber"
   },
   "description": {
    "en": "the person who dubs another person e.g. an actor or a fictional character in movies"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Person"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:personFunction",
   "property": "http://dbpedia.org/ontology/personFunction",
   "label": {
    "en": "person function",
    "nl": "persoon functie"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/PersonFunction"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:deathPlace",
   "property": "http://dbpedia.org/ontology/deathPlace",
   "label": {
    "el": "τόπος_θανάτου",
    "fr": "lieu de décès",
    "en": "death place",
    "ja": "死没地",
    "nl": "plaats van overlijden",
    "de": "Sterbeort"
   },
   "description": {
    "en": "the place where they died"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Place"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:nearestCity",
   "property": "http://dbpedia.org/ontology/nearestCity",
   "label": {
    "en": "nearest city",
    "nl": "dichtstbijzijnde stad",
    "el": "πόλη"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/PopulatedPlace"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:mouthPosition",
   "property": "http://dbpedia.org/ontology/mouthPosition",
   "label": {
    "en": "mouth position",
    "es": "lugar de desembocadura"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://www.w3.org/2003/01/geo/wgs84_pos#SpatialThing"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:automobilePlatform",
   "property": "http://dbpedia.org/ontology/automobilePlatform",
   "label": {
    "en": "automobile platform",
    "el": "πλατφόρμα αυτοκινήτων"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Automobile"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:fuel",
   "property": "http://dbpedia.org/ontology/fuel",
   "label": {
    "el": "καύσιμα",
    "fr": "carburant",
    "en": "fuel",
    "nl": "brandstof",
    "de": "Treibstoff"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:leader",
   "property": "http://dbpedia.org/ontology/leader",
   "label": {
    "en": "leader",
    "nl": "leider",
    "el": "ηγέτης",
    "pt": "lider"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Person"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:aircraftHelicopterTransport",
   "property": "http://dbpedia.org/ontology/aircraftHelicopterTransport",
   "label": {
    "en": "aircraft helicopter transport",
    "el": "μεταφορές που πραγματοποιούνται με ελικοφόρο αεροσκάφος"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/MeanOfTransportation"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:sovereignCountry",
   "property": "http://dbpedia.org/ontology/sovereignCountry",
   "label": {
    "en": "sovereignn country"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/PopulatedPlace"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:discoverer",
   "property": "http://dbpedia.org/ontology/discoverer",
   "label": {
    "en": "discoverer",
    "el": "Ανακαλύφθηκε από"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Person"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:magazine",
   "property": "http://dbpedia.org/ontology/magazine",
   "label": {
    "en": "magazine",
    "el": "περιοδικό"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Magazine"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:firstFlight",
   "property": "http://dbpedia.org/ontology/firstFlight",
   "label": {
    "en": "first flight"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/SpaceMission"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:teachingStaff",
   "property": "http://dbpedia.org/ontology/teachingStaff",
   "label": {
    "en": "teaching staff"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:beatifiedBy",
   "property": "http://dbpedia.org/ontology/beatifiedBy",
   "label": {
    "en": "beatified by",
    "nl": "zalig verklaard door"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Person"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:firstDriver",
   "property": "http://dbpedia.org/ontology/firstDriver",
   "label": {
    "en": "first driver"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Person"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:cinematography",
   "property": "http://dbpedia.org/ontology/cinematography",
   "label": {
    "en": "cinematography",
    "nl": "cinematografie"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Person"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:localAuthority",
   "property": "http://dbpedia.org/ontology/localAuthority",
   "label": {
    "en": "local authority"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:geolocDepartment",
   "property": "http://dbpedia.org/ontology/geolocDepartment",
   "label": {
    "en": "geolocDepartment"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/PopulatedPlace"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:oilSystem",
   "property": "http://dbpedia.org/ontology/oilSystem",
   "label": {
    "en": "oil system"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:partner",
   "property": "http://dbpedia.org/ontology/partner",
   "label": {
    "en": "partner",
    "nl": "partner",
    "el": "συνέταιρος",
    "de": "Partner"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Person"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:goldenRaspberryAward",
   "property": "http://dbpedia.org/ontology/goldenRaspberryAward",
   "label": {
    "en": "Golden Raspberry Award"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Award"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:sourceConfluenceState",
   "property": "http://dbpedia.org/ontology/sourceConfluenceState",
   "label": {
    "en": "source confluence state"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/PopulatedPlace"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:nationalOlympicCommittee",
   "property": "http://dbpedia.org/ontology/nationalOlympicCommittee",
   "label": {
    "en": "National Olympic Committee"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:satScore",
   "property": "http://dbpedia.org/ontology/satScore",
   "label": {
    "en": "SAT score"
   },
   "description": {
    "en": "most recent average SAT scores"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:season",
   "property": "http://dbpedia.org/ontology/season",
   "label": {
    "en": "season",
    "el": "σαιζόν"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:headAlloy",
   "property": "http://dbpedia.org/ontology/headAlloy",
   "label": {
    "en": "head alloy"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:computingMedia",
   "property": "http://dbpedia.org/ontology/computingMedia",
   "label": {
    "en": "Computing Media"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:capitalDistrict",
   "property": "http://dbpedia.org/ontology/capitalDistrict",
   "label": {
    "en": "capital district"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/PopulatedPlace"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:followingEvent",
   "property": "http://dbpedia.org/ontology/followingEvent",
   "label": {
    "en": "followingEvent"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Event"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:congressionalDistrict",
   "property": "http://dbpedia.org/ontology/congressionalDistrict",
   "label": {
    "en": "congressional district"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:winsAtChallenges",
   "property": "http://dbpedia.org/ontology/winsAtChallenges",
   "label": {
    "en": "wins at challenges"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:creator",
   "property": "http://dbpedia.org/ontology/creator",
   "label": {
    "en": "creator",
    "nl": "maker"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Person"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:owningCompany",
   "property": "http://dbpedia.org/ontology/owningCompany",
   "label": {
    "en": "owning company"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Company"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:achievement",
   "property": "http://dbpedia.org/ontology/achievement",
   "label": {
    "en": "achievement",
    "el": "κατόρθωμα",
    "fr": "haut fait, accomplissement",
    "es": "logro"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:building",
   "property": "http://dbpedia.org/ontology/building",
   "label": {
    "en": "building",
    "nl": "gebouw",
    "el": "κτίριο"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Building"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:service",
   "property": "http://dbpedia.org/ontology/service",
   "label": {
    "en": "service"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:phylum",
   "property": "http://dbpedia.org/ontology/phylum",
   "label": {
    "en": "門_(分類学)"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:brand",
   "property": "http://dbpedia.org/ontology/brand",
   "label": {
    "en": "brand",
    "el": "μάρκα"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/TelevisionShow"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:comic",
   "property": "http://dbpedia.org/ontology/comic",
   "label": {
    "en": "comic"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Comic"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:governmentPlace",
   "property": "http://dbpedia.org/ontology/governmentPlace",
   "label": {
    "en": "government place"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/PopulatedPlace"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:coachedTeam",
   "property": "http://dbpedia.org/ontology/coachedTeam",
   "label": {
    "en": "coached team"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/SportsTeam"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:kingdom",
   "property": "http://dbpedia.org/ontology/kingdom",
   "label": {
    "el": "βασίλειο",
    "en": "kingdom",
    "it": "regno",
    "ja": "界_(分類学)",
    "nl": "rijk",
    "de": "reich"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:leaderFunction",
   "property": "http://dbpedia.org/ontology/leaderFunction",
   "label": {
    "en": "leaderFunction"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/PersonFunction"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:musicType",
   "property": "http://dbpedia.org/ontology/musicType",
   "label": {
    "en": "musicType",
    "nl": "soort muziekwerk"
   },
   "description": {
    "en": "Type is too general. We should be able to distinguish types of music from types of architecture",
    "nl": "Type is te algemeen. We moeten soorten muziek van soorten gebouwen kunnen onderscheiden"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:wikiPageWikiLink",
   "property": "http://dbpedia.org/ontology/wikiPageWikiLink",
   "label": {
    "en": "Link from a Wikipage to another Wikipage"
   },
   "description": {
    "en": "Reserved for DBpedia."
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:setDesigner",
   "property": "http://dbpedia.org/ontology/setDesigner",
   "label": {
    "en": "set designer",
    "it": "scenografo"
   },
   "description": {
    "en": "the person who is responsible for the film set design"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Person"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:lounge",
   "property": "http://dbpedia.org/ontology/lounge",
   "label": {
    "en": "lounge"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:volumes",
   "property": "http://dbpedia.org/ontology/volumes",
   "label": {
    "en": "volumes",
    "nl": "delen"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/WrittenWork"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:riverBranchOf",
   "property": "http://dbpedia.org/ontology/riverBranchOf",
   "label": {
    "en": "branch of",
    "el": "διακλάδωση_του"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/River"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:handedness",
   "property": "http://dbpedia.org/ontology/handedness",
   "label": {
    "en": "handedness",
    "pt": "habilidade com a mao"
   },
   "description": {
    "en": "an attribute of humans defined by their unequal distribution of fine motor skill between the left and right hands."
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:division",
   "property": "http://dbpedia.org/ontology/division",
   "label": {
    "en": "division",
    "nl": "verdeling"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:pastMember",
   "property": "http://dbpedia.org/ontology/pastMember",
   "label": {
    "en": "past member"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Person"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:iftaAward",
   "property": "http://dbpedia.org/ontology/iftaAward",
   "label": {
    "en": "IFTA Award"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Award"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:associatedMusicalArtist",
   "property": "http://dbpedia.org/ontology/associatedMusicalArtist",
   "label": {
    "en": "associated musical artist",
    "el": "συνεργάτης-μουσικός καλλιτέχνης"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/MusicalArtist"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:soccerLeagueRelegated",
   "property": "http://dbpedia.org/ontology/soccerLeagueRelegated",
   "label": {
    "en": "relegated teams",
    "tr": "düşenler"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/SportsTeam"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:smallestCountry",
   "property": "http://dbpedia.org/ontology/smallestCountry",
   "label": {
    "en": "smallest country",
    "pt": "menor país"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/PopulatedPlace"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:gaudiAward",
   "property": "http://dbpedia.org/ontology/gaudiAward",
   "label": {
    "en": "Gaudí Award",
    "ca": "Premis Gaudí"
   },
   "description": {
    "en": "Awards of the Catalan Academy of Cinema"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Award"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:meetingBuilding",
   "property": "http://dbpedia.org/ontology/meetingBuilding",
   "label": {
    "en": "meeting building"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Building"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:lastAppearance",
   "property": "http://dbpedia.org/ontology/lastAppearance",
   "label": {
    "en": "last appearance"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:patron",
   "property": "http://dbpedia.org/ontology/patron",
   "label": {
    "en": "patron",
    "pt": "patrono"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Person"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:continent",
   "property": "http://dbpedia.org/ontology/continent",
   "label": {
    "en": "continent",
    "it": "continente"
   },
   "description": {
    "en": "links a country to the continent it belongs"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Continent"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:animal",
   "property": "http://dbpedia.org/ontology/animal",
   "label": {
    "el": "ζώο",
    "fr": "animal",
    "en": "animal",
    "ja": "動物",
    "nl": "beest",
    "de": "Tier"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Animal"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:raceHorse",
   "property": "http://dbpedia.org/ontology/raceHorse",
   "label": {
    "en": "race horse"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/RaceHorse"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:highestPosition",
   "property": "http://dbpedia.org/ontology/highestPosition",
   "label": {
    "en": "highest position"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://www.w3.org/2003/01/geo/wgs84_pos#SpatialThing"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:soccerTournamentThisSeason",
   "property": "http://dbpedia.org/ontology/soccerTournamentThisSeason",
   "label": {
    "en": "this season",
    "tr": "bu sezon"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/SoccerTournament"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:legalForm",
   "property": "http://dbpedia.org/ontology/legalForm",
   "label": {
    "en": "legal form",
    "nl": "rechtsvorm",
    "de": "Rechtsform"
   },
   "description": {
    "en": "There are many types of business entity defined in the legal systems of various countries. These include corporations, cooperatives, partnerships, sole traders, limited liability company and other specialized types of organization.",
    "de": "Die Rechtsform definiert die juristischen Rahmenbedingungen einer Organisation bzw. Unternehmens."
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:iso6391Code",
   "property": "http://dbpedia.org/ontology/iso6391Code",
   "label": {
    "en": "ISO 639-1 code",
    "nl": "ISO 639-1 code",
    "pl": "kod ISO 639-1"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:secretaryGeneral",
   "property": "http://dbpedia.org/ontology/secretaryGeneral",
   "label": {
    "en": "secretary",
    "nl": "secretaris",
    "pt": "secretario"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Person"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:lieutenant",
   "property": "http://dbpedia.org/ontology/lieutenant",
   "label": {
    "en": "lieutenant",
    "fr": "lieutenant"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Person"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:lowestState",
   "property": "http://dbpedia.org/ontology/lowestState",
   "label": {
    "en": "lowest state"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/PopulatedPlace"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:headteacher",
   "property": "http://dbpedia.org/ontology/headteacher",
   "label": {
    "en": "head teacher"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Person"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:sourcePosition",
   "property": "http://dbpedia.org/ontology/sourcePosition",
   "label": {
    "en": "source position"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://www.w3.org/2003/01/geo/wgs84_pos#SpatialThing"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:thumbnail",
   "property": "http://dbpedia.org/ontology/thumbnail",
   "label": {
    "en": "thumbnail"
   },
   "description": {
    "en": "Reserved for DBpedia."
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:meetingCity",
   "property": "http://dbpedia.org/ontology/meetingCity",
   "label": {
    "en": "meeting city"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Settlement"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:aircraftHelicopterUtility",
   "property": "http://dbpedia.org/ontology/aircraftHelicopterUtility",
   "label": {
    "en": "aircraft helicopter utility"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/MeanOfTransportation"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:museum",
   "property": "http://dbpedia.org/ontology/museum",
   "label": {
    "en": "museum",
    "el": "μουσείο",
    "de": "museum",
    "ja": "博物館"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Museum"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:emmyAward",
   "property": "http://dbpedia.org/ontology/emmyAward",
   "label": {
    "en": "Emmy Award"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Award"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:inflow",
   "property": "http://dbpedia.org/ontology/inflow",
   "label": {
    "en": "inflow",
    "el": "εισροή"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/River"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:secondTeam",
   "property": "http://dbpedia.org/ontology/secondTeam",
   "label": {
    "en": "second team",
    "el": "δεύτερη ομάδα"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/SportsTeam"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:buriedPlace",
   "property": "http://dbpedia.org/ontology/buriedPlace",
   "label": {
    "en": "buried place",
    "nl": "begraafplaats",
    "el": "τόπος θαψίματος"
   },
   "description": {
    "en": "The place where the person has been buried.",
    "el": "Ο τόπος όπου το πρόσωπο έχει θαφτεί.",
    "nl": "De plaats waar een persoon is begraven."
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Place"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:county",
   "property": "http://dbpedia.org/ontology/county",
   "label": {
    "el": "Επαρχία",
    "ga": "contae",
    "en": "county",
    "nl": "provincie",
    "pl": "hrabstwo",
    "de": "Bezirk"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/PopulatedPlace"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:startPoint",
   "property": "http://dbpedia.org/ontology/startPoint",
   "label": {
    "en": "start point",
    "el": "σημείο_αρχής"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Place"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:firstOlympicEvent",
   "property": "http://dbpedia.org/ontology/firstOlympicEvent",
   "label": {
    "en": "first olympic event",
    "fr": "première épreuve olympique"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/OlympicEvent"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:championInSingleFemale",
   "property": "http://dbpedia.org/ontology/championInSingleFemale",
   "label": {
    "en": "champion in single female",
    "fr": "champion en simple femmes",
    "es": "Campeón en simple mujeres"
   },
   "description": {
    "en": "winner of a competition in the single female session, to distinguish from the double session (as in tennis)"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Athlete"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:locationCountry",
   "property": "http://dbpedia.org/ontology/locationCountry",
   "label": {
    "en": "location country",
    "el": "Χώρα",
    "pt": "país de localização"
   },
   "description": {
    "en": "Country the thing is located."
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Country"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:creatorOfDish",
   "property": "http://dbpedia.org/ontology/creatorOfDish",
   "label": {
    "en": "creator of dish"
   },
   "description": {
    "en": "The person that creates (invents) the food (eg. Caesar Cardini is the creator of the Caesar salad)."
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Person"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:significantProject",
   "property": "http://dbpedia.org/ontology/significantProject",
   "label": {
    "en": "significant project"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:license",
   "property": "http://dbpedia.org/ontology/license",
   "label": {
    "en": "license",
    "nl": "licentie",
    "el": "άδεια",
    "fr": "licence"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:aircraftHelicopterObservation",
   "property": "http://dbpedia.org/ontology/aircraftHelicopterObservation",
   "label": {
    "en": "aircraft helicopter observation",
    "el": "παρατήρηση ελικοφόρου αεροσκάφους"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/MeanOfTransportation"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:child",
   "property": "http://dbpedia.org/ontology/child",
   "label": {
    "el": "παιδί",
    "ar": "طفل",
    "en": "child",
    "ja": "子供",
    "nl": "kind",
    "de": "Kind"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Person"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:company",
   "property": "http://dbpedia.org/ontology/company",
   "label": {
    "en": "company",
    "nl": "organisatie",
    "el": "εταιρεία",
    "ja": "会社"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Organisation"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:intercommunality",
   "property": "http://dbpedia.org/ontology/intercommunality",
   "label": {
    "en": "intercommunality"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/PopulatedPlace"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:thirdCommander",
   "property": "http://dbpedia.org/ontology/thirdCommander",
   "label": {
    "en": "third commander"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Person"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:architectualBureau",
   "property": "http://dbpedia.org/ontology/architectualBureau",
   "label": {
    "en": "architectual bureau",
    "el": "αρχιτεκτονική κατασκευή"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Company"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:almaMater",
   "property": "http://dbpedia.org/ontology/almaMater",
   "label": {
    "en": "alma mater",
    "el": "σπουδές"
   },
   "description": {
    "en": "schools that they attended"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/EducationalInstitution"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:viceLeader",
   "property": "http://dbpedia.org/ontology/viceLeader",
   "label": {
    "en": "vice leader",
    "pt": "vicelider"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Person"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:delegateMayor",
   "property": "http://dbpedia.org/ontology/delegateMayor",
   "label": {
    "en": "delegate mayor"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Person"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:draftTeam",
   "property": "http://dbpedia.org/ontology/draftTeam",
   "label": {
    "en": "draft team"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/SportsTeam"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:department",
   "property": "http://dbpedia.org/ontology/department",
   "label": {
    "en": "department",
    "nl": "afdeling",
    "fr": "département",
    "eu": "eskualdea"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/PopulatedPlace"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:isPartOf",
   "property": "http://dbpedia.org/ontology/isPartOf",
   "label": {
    "en": "is part of",
    "de": "ist ein Teil von"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:operatedBy",
   "property": "http://dbpedia.org/ontology/operatedBy",
   "label": {
    "en": "operated by",
    "de": "betrieben von"
   },
   "description": {
    "en": "Organisation or city who is the operator of the ArchitecturalStructure. Not to confuse with maintainer or the owner."
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:oldDistrict",
   "property": "http://dbpedia.org/ontology/oldDistrict",
   "label": {
    "en": "old district"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/PopulatedPlace"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:cluster",
   "property": "http://dbpedia.org/ontology/cluster",
   "label": {
    "en": "cluster",
    "tr": "birlik"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:addressInRoad",
   "property": "http://dbpedia.org/ontology/addressInRoad",
   "label": {
    "en": "address in road",
    "de": "Adresse in Straße",
    "el": "διεύθυνση στον δρόμο"
   },
   "description": {
    "en": "A building, organisation or other thing that is located in the road.",
    "el": "Ένα κτήριο, οργανισμός ή κάτι άλλο που βρίσκεται στον δρόμο."
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:rocket",
   "property": "http://dbpedia.org/ontology/rocket",
   "label": {
    "en": "rocket",
    "fr": "fusée",
    "el": "ρουκέτα"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Rocket"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:lunarRover",
   "property": "http://dbpedia.org/ontology/lunarRover",
   "label": {
    "en": "lunar rover"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/MeanOfTransportation"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:homeArena",
   "property": "http://dbpedia.org/ontology/homeArena",
   "label": {
    "en": "home arena"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Arena"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:formerCoach",
   "property": "http://dbpedia.org/ontology/formerCoach",
   "label": {
    "en": "former coach"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Person"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:alpsSupergroup",
   "property": "http://dbpedia.org/ontology/alpsSupergroup",
   "label": {
    "en": "Alps supergroup",
    "el": "Alps υπερομάδα",
    "it": "supergruppo alpino"
   },
   "description": {
    "en": "the Alps supergroup to which the mountain belongs, according to the SOIUSA classification"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/MountainRange"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:europeanAffiliation",
   "property": "http://dbpedia.org/ontology/europeanAffiliation",
   "label": {
    "en": "european affiliation",
    "pt": "afiliacao europeia"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:lastFlight",
   "property": "http://dbpedia.org/ontology/lastFlight",
   "label": {
    "en": "last flight"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/SpaceMission"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:rocketFunction",
   "property": "http://dbpedia.org/ontology/rocketFunction",
   "label": {
    "en": "rocket function"
   },
   "description": {
    "en": "purpose of the rocket"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:boiler",
   "property": "http://dbpedia.org/ontology/boiler",
   "label": {
    "en": "boiler",
    "el": "δοχείο βράσης"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:saint",
   "property": "http://dbpedia.org/ontology/saint",
   "label": {
    "en": "saint",
    "el": "άγιος",
    "nl": "heilige",
    "pt": "santo"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Saint"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:operatingSystem",
   "property": "http://dbpedia.org/ontology/operatingSystem",
   "label": {
    "en": "operating system",
    "nl": "besturingssysteem"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:narrator",
   "property": "http://dbpedia.org/ontology/narrator",
   "label": {
    "en": "narrator"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Person"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:programmingLanguage",
   "property": "http://dbpedia.org/ontology/programmingLanguage",
   "label": {
    "en": "programming language"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:secondDriver",
   "property": "http://dbpedia.org/ontology/secondDriver",
   "label": {
    "en": "second driver",
    "el": "δεύτερος οδηγός"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Person"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:placeOfBurial",
   "property": "http://dbpedia.org/ontology/placeOfBurial",
   "label": {
    "en": "place of burial"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/PopulatedPlace"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:currentProduction",
   "property": "http://dbpedia.org/ontology/currentProduction",
   "label": {
    "en": "current production"
   },
   "description": {
    "en": "The current production running in the theatre."
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:editor",
   "property": "http://dbpedia.org/ontology/editor",
   "label": {
    "en": "editor",
    "el": "συντάκτης",
    "de": "Herausgeber",
    "nl": "redacteur"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Agent"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:headquarter",
   "property": "http://dbpedia.org/ontology/headquarter",
   "label": {
    "en": "headquarter",
    "el": "αρχηγείο",
    "de": "Hauptsitz"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/PopulatedPlace"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:richestCountry",
   "property": "http://dbpedia.org/ontology/richestCountry",
   "label": {
    "en": "richest country",
    "el": "πλουσιότερη χώρα",
    "pt": "país mais rico"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Country"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:nonFictionSubject",
   "property": "http://dbpedia.org/ontology/nonFictionSubject",
   "label": {
    "en": "non-fiction subject",
    "nl": "non-fictie onderwerp"
   },
   "description": {
    "en": "The subject of a non-fiction book (e.g.: History, Biography, Cookbook, Climate change, ...)."
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:significantDesign",
   "property": "http://dbpedia.org/ontology/significantDesign",
   "label": {
    "en": "significant design"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:religiousOrder",
   "property": "http://dbpedia.org/ontology/religiousOrder",
   "label": {
    "en": "religious order",
    "nl": "religieuze orde"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/ClericalOrder"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:cultivatedVariety",
   "property": "http://dbpedia.org/ontology/cultivatedVariety",
   "label": {
    "en": "cultivar"
   },
   "description": {
    "en": "Name of the cultivar (cultivated variety)"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/CultivatedVariety"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:branchFrom",
   "property": "http://dbpedia.org/ontology/branchFrom",
   "label": {
    "en": "branch from",
    "el": "παράρτημα από"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/AnatomicalStructure"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:drama",
   "property": "http://dbpedia.org/ontology/drama",
   "label": {
    "en": "drama"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Drama"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:settlementAttached",
   "property": "http://dbpedia.org/ontology/settlementAttached",
   "label": {
    "en": "settlement attached"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Place"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:militaryRank",
   "property": "http://dbpedia.org/ontology/militaryRank",
   "label": {
    "en": "military rank"
   },
   "description": {
    "en": "The highest rank achieved by a person."
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:playerInTeam",
   "property": "http://dbpedia.org/ontology/playerInTeam",
   "label": {
    "en": "player in team",
    "el": "παίχτης σε ομάδα"
   },
   "description": {
    "en": "A person playing for the sports team.",
    "el": "Άτομο που παίζει για αθλητική ομάδα."
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Person"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:garrison",
   "property": "http://dbpedia.org/ontology/garrison",
   "label": {
    "en": "garrison"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/PopulatedPlace"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:firstDriverTeam",
   "property": "http://dbpedia.org/ontology/firstDriverTeam",
   "label": {
    "en": "winning team"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/SportsTeam"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:trainer",
   "property": "http://dbpedia.org/ontology/trainer",
   "label": {
    "en": "trainer",
    "el": "εκπαιδευτής",
    "fr": "entraîneur",
    "nl": "trainer"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Person"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:coach",
   "property": "http://dbpedia.org/ontology/coach",
   "label": {
    "en": "coach",
    "el": "προπονητής"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Person"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:derivative",
   "property": "http://dbpedia.org/ontology/derivative",
   "label": {
    "en": "derivative"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/MusicGenre"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:metropolitanBorough",
   "property": "http://dbpedia.org/ontology/metropolitanBorough",
   "label": {
    "en": "metropolitan borough",
    "nl": "stadswijk"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/PopulatedPlace"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:premierePlace",
   "property": "http://dbpedia.org/ontology/premierePlace",
   "label": {
    "en": "premiere place"
   },
   "description": {
    "en": "The theatre and/or city the play was first performed in."
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:arrondissement",
   "property": "http://dbpedia.org/ontology/arrondissement",
   "label": {
    "en": "arrondissement",
    "nl": "arrondissement",
    "fr": "arrondissement",
    "el": "διαμέρισμα"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/PopulatedPlace"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:academicAdvisor",
   "property": "http://dbpedia.org/ontology/academicAdvisor",
   "label": {
    "en": "academic advisor",
    "nl": "promotor",
    "el": "ακαδημαϊκοί_σύμβουλοι"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Person"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:summerAppearances",
   "property": "http://dbpedia.org/ontology/summerAppearances",
   "label": {
    "en": "summer appearances"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/OlympicResult"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:sport",
   "property": "http://dbpedia.org/ontology/sport",
   "label": {
    "en": "sport",
    "el": "άθλημα",
    "fr": "sport"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Sport"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:genus",
   "property": "http://dbpedia.org/ontology/genus",
   "label": {
    "en": "genus",
    "nl": "geslacht",
    "ja": "属_(分類学)"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:stateDelegate",
   "property": "http://dbpedia.org/ontology/stateDelegate",
   "label": {
    "en": "state delegate"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Person"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:splitFromParty",
   "property": "http://dbpedia.org/ontology/splitFromParty",
   "label": {
    "en": "split from party",
    "de": "Abspaltung von Partei"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/PoliticalParty"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:engineer",
   "property": "http://dbpedia.org/ontology/engineer",
   "label": {
    "en": "engineer",
    "nl": "ingenieur",
    "de": "Ingenieur",
    "el": "μηχανικός"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Person"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:officerInCharge",
   "property": "http://dbpedia.org/ontology/officerInCharge",
   "label": {
    "en": "officer in charge"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Person"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:winsAtAlpg",
   "property": "http://dbpedia.org/ontology/winsAtAlpg",
   "label": {
    "en": "wins at ALPG"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:playRole",
   "property": "http://dbpedia.org/ontology/playRole",
   "label": {
    "en": "play role"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:enemy",
   "property": "http://dbpedia.org/ontology/enemy",
   "label": {
    "en": "enemy"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Species"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:subsequentWork",
   "property": "http://dbpedia.org/ontology/subsequentWork",
   "label": {
    "en": "subsequent work",
    "nl": "vervolg werk",
    "el": "επόμενη δημιουργία"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Work"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:associatedRocket",
   "property": "http://dbpedia.org/ontology/associatedRocket",
   "label": {
    "en": "associated rocket",
    "el": "συνδεόμενος πύραυλος"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Rocket"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:sourceCountry",
   "property": "http://dbpedia.org/ontology/sourceCountry",
   "label": {
    "en": "source country"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Country"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:sourceRegion",
   "property": "http://dbpedia.org/ontology/sourceRegion",
   "label": {
    "en": "source region"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/PopulatedPlace"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:climate",
   "property": "http://dbpedia.org/ontology/climate",
   "label": {
    "en": "climate",
    "pt": "clima",
    "de": "klima",
    "nl": "klimaat"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:winsAtMajors",
   "property": "http://dbpedia.org/ontology/winsAtMajors",
   "label": {
    "en": "wins at majors"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:related",
   "property": "http://dbpedia.org/ontology/related",
   "label": {
    "en": "related",
    "nl": "gerelateerd"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:ceo",
   "property": "http://dbpedia.org/ontology/ceo",
   "label": {
    "en": "chief executive officer",
    "de": "Geschäftsführer"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Person"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:otherAppearances",
   "property": "http://dbpedia.org/ontology/otherAppearances",
   "label": {
    "en": "other appearances"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/OlympicResult"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:presidentRegionalCouncil",
   "property": "http://dbpedia.org/ontology/presidentRegionalCouncil",
   "label": {
    "en": "president of the regional council"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Person"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:port1",
   "property": "http://dbpedia.org/ontology/port1",
   "label": {
    "en": "port1"
   },
   "description": {
    "en": "first docking port of a spacecraft"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:largestCountry",
   "property": "http://dbpedia.org/ontology/largestCountry",
   "label": {
    "en": "largest country",
    "pt": "maior país"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/PopulatedPlace"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:education",
   "property": "http://dbpedia.org/ontology/education",
   "label": {
    "en": "education",
    "nl": "opleiding",
    "fr": "éducation",
    "ja": "教育"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:closingFilm",
   "property": "http://dbpedia.org/ontology/closingFilm",
   "label": {
    "en": "closing film"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Film"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:championInMixedDouble",
   "property": "http://dbpedia.org/ontology/championInMixedDouble",
   "label": {
    "en": "champion in mixed double",
    "nl": "kampioen gemengd dubbelspel",
    "fr": "champion en double mixte",
    "es": "Campeón en doble mixto"
   },
   "description": {
    "en": "winner of a competition in the mixed double session (as in tennis)"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Athlete"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:government",
   "property": "http://dbpedia.org/ontology/government",
   "label": {
    "en": "government",
    "fr": "gouvernement"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:largestSettlement",
   "property": "http://dbpedia.org/ontology/largestSettlement",
   "label": {
    "en": "largest settlement",
    "nl": "grootste plaats"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/PopulatedPlace"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:associatedAct",
   "property": "http://dbpedia.org/ontology/associatedAct",
   "label": {
    "en": "associated act",
    "el": "συνδεδεμένη πράξη"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Artist"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:alpsMainPart",
   "property": "http://dbpedia.org/ontology/alpsMainPart",
   "label": {
    "en": "Alps main part",
    "el": "κύριο μέρος των άλπεων",
    "it": "grande parte alpina"
   },
   "description": {
    "en": "the Alps main part to which the mountain belongs, according to the SOIUSA classification"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/MountainRange"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:language",
   "property": "http://dbpedia.org/ontology/language",
   "label": {
    "el": "γλώσσα",
    "fr": "langue",
    "en": "language",
    "nl": "taal",
    "pt": "língua",
    "de": "Sprache"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Language"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:board",
   "property": "http://dbpedia.org/ontology/board",
   "label": {
    "en": "board",
    "el": "επιβιβάζομαι",
    "nl": "bestuur",
    "ja": "取締役会"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:ground",
   "property": "http://dbpedia.org/ontology/ground",
   "label": {
    "en": "ground"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Place"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:sourceConfluencePosition",
   "property": "http://dbpedia.org/ontology/sourceConfluencePosition",
   "label": {
    "en": "source confluence position"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://www.w3.org/2003/01/geo/wgs84_pos#SpatialThing"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:lastLaunchRocket",
   "property": "http://dbpedia.org/ontology/lastLaunchRocket",
   "label": {
    "en": "last launch rocket"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Rocket"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:fastestDriverTeam",
   "property": "http://dbpedia.org/ontology/fastestDriverTeam",
   "label": {
    "en": "fastest driver team"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/SportsTeam"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:custodian",
   "property": "http://dbpedia.org/ontology/custodian",
   "label": {
    "en": "custodian"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Person"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:foresterDistrict",
   "property": "http://dbpedia.org/ontology/foresterDistrict",
   "label": {
    "en": "foresterDistrict"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:party",
   "property": "http://dbpedia.org/ontology/party",
   "label": {
    "el": "πάρτυ",
    "en": "party",
    "ja": "政党",
    "nl": "partij",
    "de": "Partei"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/PoliticalParty"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:otherParty",
   "property": "http://dbpedia.org/ontology/otherParty",
   "label": {
    "en": "other party"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/PoliticalParty"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:choreographer",
   "property": "http://dbpedia.org/ontology/choreographer",
   "label": {
    "en": "choreographer",
    "nl": "choreograaf"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Person"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:crewMember",
   "property": "http://dbpedia.org/ontology/crewMember",
   "label": {
    "en": "crew member"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Astronaut"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:jointCommunity",
   "property": "http://dbpedia.org/ontology/jointCommunity",
   "label": {
    "en": "joint community"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/PopulatedPlace"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:capital",
   "property": "http://dbpedia.org/ontology/capital",
   "label": {
    "el": "πρωτεύουσα",
    "fr": "capital",
    "en": "capital",
    "nl": "hoofdstad",
    "pt": "capital",
    "de": "Hauptstadt"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/City"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:isPartOfAnatomicalStructure",
   "property": "http://dbpedia.org/ontology/isPartOfAnatomicalStructure",
   "label": {
    "en": "is part of anatomical structure",
    "de": "ist ein Teil von anatomischer Struktur"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/AnatomicalStructure"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:deanery",
   "property": "http://dbpedia.org/ontology/deanery",
   "label": {
    "en": "deanery",
    "nl": "proosdij"
   },
   "description": {
    "en": "Dioceses and parishes should know which deaneries there are"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Deanery"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:sourceDistrict",
   "property": "http://dbpedia.org/ontology/sourceDistrict",
   "label": {
    "en": "source district"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/PopulatedPlace"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:presenter",
   "property": "http://dbpedia.org/ontology/presenter",
   "label": {
    "en": "presenter",
    "el": "παρουσιαστής"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Person"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:grades",
   "property": "http://dbpedia.org/ontology/grades",
   "label": {
    "en": "grades",
    "el": "βαθμοί"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:recordLabel",
   "property": "http://dbpedia.org/ontology/recordLabel",
   "label": {
    "en": "record label",
    "nl": "platenlabel",
    "el": "δισκογραφική"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/RecordLabel"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:homeport",
   "property": "http://dbpedia.org/ontology/homeport",
   "label": {
    "en": "homeport"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:territory",
   "property": "http://dbpedia.org/ontology/territory",
   "label": {
    "en": "territory",
    "es": "territorio"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/PopulatedPlace"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:terytCode",
   "property": "http://dbpedia.org/ontology/terytCode",
   "label": {
    "en": "TERYT code",
    "pl": "kod TERYT"
   },
   "description": {
    "en": "indexing code used by the Polish National Official Register of the Territorial Division of the Country (TERYT) to identify various entities"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:educationSystem",
   "property": "http://dbpedia.org/ontology/educationSystem",
   "label": {
    "en": "education system"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:recentWinner",
   "property": "http://dbpedia.org/ontology/recentWinner",
   "label": {
    "en": "recent winner"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Person"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:majorShrine",
   "property": "http://dbpedia.org/ontology/majorShrine",
   "label": {
    "en": "major shrine",
    "nl": "schrijn"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:mainOrgan",
   "property": "http://dbpedia.org/ontology/mainOrgan",
   "label": {
    "en": "main organ"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:sales",
   "property": "http://dbpedia.org/ontology/sales",
   "label": {
    "en": "sales",
    "el": "πώληση",
    "fr": "vente"
   },
   "description": {
    "en": "This property holds an intermediate node of the type Sales."
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Sales"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:subdivisionName",
   "property": "http://dbpedia.org/ontology/subdivisionName",
   "label": {
    "en": "subdivision name of the island"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Place"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:recordedIn",
   "property": "http://dbpedia.org/ontology/recordedIn",
   "label": {
    "en": "recorded in",
    "nl": "opgenomen in",
    "el": "ηχογράφηση",
    "fr": "enregistré à"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/PopulatedPlace"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:areaOfSearch",
   "property": "http://dbpedia.org/ontology/areaOfSearch",
   "label": {
    "en": "area of search",
    "el": "Περιοχή Αναζήτησης"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/PopulatedPlace"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:specialEffects",
   "property": "http://dbpedia.org/ontology/specialEffects",
   "label": {
    "en": "special effects"
   },
   "description": {
    "en": "the person who is responsible for the film special effects"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Person"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:winsAtLAGT",
   "property": "http://dbpedia.org/ontology/winsAtLAGT",
   "label": {
    "en": "wins at LAGT"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:riverMouth",
   "property": "http://dbpedia.org/ontology/riverMouth",
   "label": {
    "en": "river mouth",
    "nl": "riviermonding",
    "el": "εκβολές"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/BodyOfWater"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:parentOrganisation",
   "property": "http://dbpedia.org/ontology/parentOrganisation",
   "label": {
    "en": "parent organisation",
    "nl": "moederorganisatie"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Organisation"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:patronSaint",
   "property": "http://dbpedia.org/ontology/patronSaint",
   "label": {
    "en": "patron saint"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Person"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:majorVolcano",
   "property": "http://dbpedia.org/ontology/majorVolcano",
   "label": {
    "en": "major volcano",
    "pt": "maior vulcão"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:resolution",
   "property": "http://dbpedia.org/ontology/resolution",
   "label": {
    "en": "resolution",
    "el": "ανάλυση",
    "fr": "résolution"
   },
   "description": {
    "en": "Native Resolution"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:officialLanguage",
   "property": "http://dbpedia.org/ontology/officialLanguage",
   "label": {
    "en": "official language"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Language"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:order",
   "property": "http://dbpedia.org/ontology/order",
   "label": {
    "en": "order",
    "el": "διαταγή",
    "nl": "orde",
    "ja": "目_(分類学)"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:thirdDriver",
   "property": "http://dbpedia.org/ontology/thirdDriver",
   "label": {
    "en": "third driver"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Person"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:orogeny",
   "property": "http://dbpedia.org/ontology/orogeny",
   "label": {
    "en": "orogeny",
    "fr": "orogenèse"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:house",
   "property": "http://dbpedia.org/ontology/house",
   "label": {
    "en": "house",
    "el": "σπίτι"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Legislature"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:lastWin",
   "property": "http://dbpedia.org/ontology/lastWin",
   "label": {
    "en": "last win",
    "el": "τελευταία νίκη"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/GrandPrix"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:rival",
   "property": "http://dbpedia.org/ontology/rival",
   "label": {
    "en": "rival"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/School"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:artist",
   "property": "http://dbpedia.org/ontology/artist",
   "label": {
    "en": "artist",
    "nl": "artiest",
    "de": "Interpret",
    "el": "καλλιτέχνης"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:denomination",
   "property": "http://dbpedia.org/ontology/denomination",
   "label": {
    "en": "denomination"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:grandsire",
   "property": "http://dbpedia.org/ontology/grandsire",
   "label": {
    "en": "grandsire"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Animal"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:promotion",
   "property": "http://dbpedia.org/ontology/promotion",
   "label": {
    "en": "promotion"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:soccerTournamentLastChampion",
   "property": "http://dbpedia.org/ontology/soccerTournamentLastChampion",
   "label": {
    "en": "last champion",
    "tr": "son şampiyon"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/SoccerClub"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:wilaya",
   "property": "http://dbpedia.org/ontology/wilaya",
   "label": {
    "en": "wilaya"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Place"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:rightChild",
   "property": "http://dbpedia.org/ontology/rightChild",
   "label": {
    "en": "right child"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Island"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:manager",
   "property": "http://dbpedia.org/ontology/manager",
   "label": {
    "en": "manager",
    "el": "προπονητής"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Person"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:adjacentSettlement",
   "property": "http://dbpedia.org/ontology/adjacentSettlement",
   "label": {
    "en": "adjacent settlement of a switzerland settlement"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Settlement"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:selection",
   "property": "http://dbpedia.org/ontology/selection",
   "label": {
    "en": "selection"
   },
   "description": {
    "en": "when (or in which project) the person was selected to train as an astronaut"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:operator",
   "property": "http://dbpedia.org/ontology/operator",
   "label": {
    "en": "operator",
    "nl": "exploitant"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Organisation"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:father",
   "property": "http://dbpedia.org/ontology/father",
   "label": {
    "en": "father"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Person"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:clubsRecordGoalscorer",
   "property": "http://dbpedia.org/ontology/clubsRecordGoalscorer",
   "label": {
    "en": "clubs record goalscorer"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Person"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:origin",
   "property": "http://dbpedia.org/ontology/origin",
   "label": {
    "el": "προέλευση",
    "fr": "origine",
    "en": "origin",
    "nl": "oorsprong",
    "pt": "origem",
    "de": "Herkunft"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/PopulatedPlace"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:riverBranch",
   "property": "http://dbpedia.org/ontology/riverBranch",
   "label": {
    "en": "branch",
    "nl": "riviertak",
    "el": "διακλαδώσεις"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/River"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:associateStar",
   "property": "http://dbpedia.org/ontology/associateStar",
   "label": {
    "en": "associateStar",
    "el": "συγγενικός αστέρας",
    "tr": "çevreleyen"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Constellation"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:formerTeam",
   "property": "http://dbpedia.org/ontology/formerTeam",
   "label": {
    "en": "former team",
    "nl": "voormalig team"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/SportsTeam"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:winsAtOtherTournaments",
   "property": "http://dbpedia.org/ontology/winsAtOtherTournaments",
   "label": {
    "en": "wins at other tournaments"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:race",
   "property": "http://dbpedia.org/ontology/race",
   "label": {
    "en": "race"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Race"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:precursor",
   "property": "http://dbpedia.org/ontology/precursor",
   "label": {
    "en": "precursor"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Embryology"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:regionalLanguage",
   "property": "http://dbpedia.org/ontology/regionalLanguage",
   "label": {
    "en": "regional language"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Language"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:silCode",
   "property": "http://dbpedia.org/ontology/silCode",
   "label": {
    "en": "SIL code",
    "nl": "SIL-code",
    "pl": "kod SIL"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:councilArea",
   "property": "http://dbpedia.org/ontology/councilArea",
   "label": {
    "en": "Council area"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/PopulatedPlace"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:publisher",
   "property": "http://dbpedia.org/ontology/publisher",
   "label": {
    "en": "publisher",
    "nl": "uitgever",
    "de": "Herausgeber",
    "el": "εκδότης"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Company"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:winsAtLPGA",
   "property": "http://dbpedia.org/ontology/winsAtLPGA",
   "label": {
    "en": "wins at LPGA"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:colour",
   "property": "http://dbpedia.org/ontology/colour",
   "label": {
    "el": "χρώμα",
    "fr": "couleur",
    "en": "colour",
    "ja": "色",
    "nl": "kleur",
    "de": "Farbe"
   },
   "description": {
    "en": "A colour represented by its entity."
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Colour"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:daira",
   "property": "http://dbpedia.org/ontology/daira",
   "label": {
    "en": "daira"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Place"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:alongside",
   "property": "http://dbpedia.org/ontology/alongside",
   "label": {
    "en": "alongside",
    "el": "δίπλα"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Person"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:countryWithFirstSatelliteLaunched",
   "property": "http://dbpedia.org/ontology/countryWithFirstSatelliteLaunched",
   "label": {
    "en": "country with first satellite launched"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Country"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:highwaySystem",
   "property": "http://dbpedia.org/ontology/highwaySystem",
   "label": {
    "en": "highway system"
   },
   "description": {
    "en": "the highway system that a route is part of"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:managementPlace",
   "property": "http://dbpedia.org/ontology/managementPlace",
   "label": {
    "en": "management place"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/PopulatedPlace"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:director",
   "property": "http://dbpedia.org/ontology/director",
   "label": {
    "el": "σκηνοθέτης",
    "fr": "directeur",
    "en": "director",
    "nl": "regisseur",
    "de": "Regisseur"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Person"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:televisionSeries",
   "property": "http://dbpedia.org/ontology/televisionSeries",
   "label": {
    "en": "television series",
    "el": "τηλεοπτικές σειρές"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/TelevisionShow"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:creativeDirector",
   "property": "http://dbpedia.org/ontology/creativeDirector",
   "label": {
    "en": "creative director"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Person"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:winsAtPGA",
   "property": "http://dbpedia.org/ontology/winsAtPGA",
   "label": {
    "en": "wins at pga"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:superintendent",
   "property": "http://dbpedia.org/ontology/superintendent",
   "label": {
    "en": "superintendent",
    "nl": "opzichter"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Person"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:wineProduced",
   "property": "http://dbpedia.org/ontology/wineProduced",
   "label": {
    "en": "wine produced"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:deFactoLanguage",
   "property": "http://dbpedia.org/ontology/deFactoLanguage",
   "label": {
    "en": "de facto language"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Language"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:computingPlatform",
   "property": "http://dbpedia.org/ontology/computingPlatform",
   "label": {
    "en": "computing platform"
   },
   "description": {
    "en": "some sort of hardware architecture or software framework, that allows this software to run"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:chancellor",
   "property": "http://dbpedia.org/ontology/chancellor",
   "label": {
    "en": "chancellor",
    "de": "Kanzler"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Person"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:europeanParliamentGroup",
   "property": "http://dbpedia.org/ontology/europeanParliamentGroup",
   "label": {
    "en": "european parliament group",
    "pt": "grupo parlamentar europeu"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:nrhpType",
   "property": "http://dbpedia.org/ontology/nrhpType",
   "label": {
    "en": "NRHP type"
   },
   "description": {
    "en": "Type of historic place as defined by the US National Park Service. For instance National Historic Landmark, National Monument or National Battlefield."
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:management",
   "property": "http://dbpedia.org/ontology/management",
   "label": {
    "en": "management",
    "fr": "management"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:produces",
   "property": "http://dbpedia.org/ontology/produces",
   "label": {
    "en": "produces"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:hybrid",
   "property": "http://dbpedia.org/ontology/hybrid",
   "label": {
    "en": "hybrid"
   },
   "description": {
    "en": "Plants from which another plant (or cultivar) has been developed from"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Plant"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:cpu",
   "property": "http://dbpedia.org/ontology/cpu",
   "label": {
    "en": "CPU"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:bourgmestre",
   "property": "http://dbpedia.org/ontology/bourgmestre",
   "label": {
    "en": "bourgmestre"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Person"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:nisCode",
   "property": "http://dbpedia.org/ontology/nisCode",
   "label": {
    "en": "NIS code"
   },
   "description": {
    "en": "Indexing code used by the Belgium National Statistical Institute to identify populated places."
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/PopulatedPlace"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:musicSubgenre",
   "property": "http://dbpedia.org/ontology/musicSubgenre",
   "label": {
    "en": "music subgenre"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/MusicGenre"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:university",
   "property": "http://dbpedia.org/ontology/university",
   "label": {
    "en": "university",
    "ja": "大学"
   },
   "description": {
    "en": "university a person goes or went to"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/EducationalInstitution"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:nextEvent",
   "property": "http://dbpedia.org/ontology/nextEvent",
   "label": {
    "en": "next event",
    "nl": "volgende evenement",
    "el": "επόμενο γεγονός"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Event"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:distributingCompany",
   "property": "http://dbpedia.org/ontology/distributingCompany",
   "label": {
    "en": "distributing company"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Company"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:chaplain",
   "property": "http://dbpedia.org/ontology/chaplain",
   "label": {
    "en": "chaplain"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Person"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:alpsSubsection",
   "property": "http://dbpedia.org/ontology/alpsSubsection",
   "label": {
    "en": "Alps subsection",
    "el": "Alps υποδιαίρεση των άλπεων",
    "it": "sottosezione alpina"
   },
   "description": {
    "en": "the Alps subsection to which the mountain belongs, according to the SOIUSA classification"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/MountainRange"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:collectionSize",
   "property": "http://dbpedia.org/ontology/collectionSize",
   "label": {
    "en": "country",
    "ja": "蔵書数"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:boilerPressure",
   "property": "http://dbpedia.org/ontology/boilerPressure",
   "label": {
    "en": "boiler pressure",
    "el": "πίεση δοχείου βράσης"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:alumni",
   "property": "http://dbpedia.org/ontology/alumni",
   "label": {
    "en": "alumni",
    "el": "απόφοιτοι πανεπιστημίου"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Person"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:religiousHead",
   "property": "http://dbpedia.org/ontology/religiousHead",
   "label": {
    "en": "religious head"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:nationality",
   "property": "http://dbpedia.org/ontology/nationality",
   "label": {
    "el": "εθνικότητα",
    "fr": "nationalité",
    "en": "nationality",
    "ja": "国籍",
    "nl": "nationaliteit",
    "pt": "nacionalidade",
    "de": "Nationalität"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Country"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:waterwayThroughTunnel",
   "property": "http://dbpedia.org/ontology/waterwayThroughTunnel",
   "label": {
    "en": "waterway through tunnel",
    "de": "Wasserweg durch Tunnel"
   },
   "description": {
    "en": "Waterway that goes through the tunnel."
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:team",
   "property": "http://dbpedia.org/ontology/team",
   "label": {
    "en": "team",
    "nl": "team",
    "el": "ομάδα",
    "fr": "équipe"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/SportsTeam"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:aircraftTransport",
   "property": "http://dbpedia.org/ontology/aircraftTransport",
   "label": {
    "en": "aircraft transport",
    "el": "αερομεταφορές"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/MeanOfTransportation"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:systemOfLaw",
   "property": "http://dbpedia.org/ontology/systemOfLaw",
   "label": {
    "en": "system of law",
    "nl": "rechtssysteem"
   },
   "description": {
    "en": "A referral to the relevant system of law"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/SystemOfLaw"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:iso6393Code",
   "property": "http://dbpedia.org/ontology/iso6393Code",
   "label": {
    "en": "ISO 639-3 code",
    "nl": "ISO 639-3 code",
    "pl": "kod ISO 639-3"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:parentMountainPeak",
   "property": "http://dbpedia.org/ontology/parentMountainPeak",
   "label": {
    "en": "parent mountain peak"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Mountain"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:filmFareAward",
   "property": "http://dbpedia.org/ontology/filmFareAward",
   "label": {
    "en": "Film Fare Award"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Award"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:ceremonialCounty",
   "property": "http://dbpedia.org/ontology/ceremonialCounty",
   "label": {
    "en": "Ceremonial County"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/PopulatedPlace"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:goldenGlobeAward",
   "property": "http://dbpedia.org/ontology/goldenGlobeAward",
   "label": {
    "en": "Golden Globe Award"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Award"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:belgiumMergedSettlement",
   "property": "http://dbpedia.org/ontology/belgiumMergedSettlement",
   "label": {
    "en": "belgium merged settlement"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/BelgiumSettlement"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:binomial",
   "property": "http://dbpedia.org/ontology/binomial",
   "label": {
    "en": "binomial",
    "el": "διωνυμικός",
    "ja": "学名"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:principal",
   "property": "http://dbpedia.org/ontology/principal",
   "label": {
    "en": "principal"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Person"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:person",
   "property": "http://dbpedia.org/ontology/person",
   "label": {
    "en": "person",
    "el": "άτομο"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Person"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:winsAtChampionships",
   "property": "http://dbpedia.org/ontology/winsAtChampionships",
   "label": {
    "en": "wins at championships"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:vicePresident",
   "property": "http://dbpedia.org/ontology/vicePresident",
   "label": {
    "en": "vice president",
    "de": "Vizepräsident"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Person"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:projectParticipant",
   "property": "http://dbpedia.org/ontology/projectParticipant",
   "label": {
    "en": "project participant"
   },
   "description": {
    "en": "A participating organisation of the project."
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Organisation"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:sourceConfluenceRegion",
   "property": "http://dbpedia.org/ontology/sourceConfluenceRegion",
   "label": {
    "en": "source confluence region"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Place"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:sportGoverningBody",
   "property": "http://dbpedia.org/ontology/sportGoverningBody",
   "label": {
    "en": "sport governing body"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:province",
   "property": "http://dbpedia.org/ontology/province",
   "label": {
    "en": "province",
    "el": "επαρχία",
    "nl": "provincie"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Province"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:routeEnd",
   "property": "http://dbpedia.org/ontology/routeEnd",
   "label": {
    "en": "route end",
    "de": "Wegende"
   },
   "description": {
    "en": "End of the route. This is where the route ends and, for U.S. roads, is either at the northern terminus or eastern terminus.",
    "de": "Ende des Verkehrswegs."
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/RouteOfTransportation"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:highestMountain",
   "property": "http://dbpedia.org/ontology/highestMountain",
   "label": {
    "en": "highest mountain"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Mountain"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:notableCommander",
   "property": "http://dbpedia.org/ontology/notableCommander",
   "label": {
    "en": "notable commander"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Person"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:officialOpenedBy",
   "property": "http://dbpedia.org/ontology/officialOpenedBy",
   "label": {
    "en": "official opened by"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Person"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:profession",
   "property": "http://dbpedia.org/ontology/profession",
   "label": {
    "en": "profession",
    "el": "επάγγελμα",
    "nl": "beroep"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:alliance",
   "property": "http://dbpedia.org/ontology/alliance",
   "label": {
    "en": "alliance",
    "el": "συμμαχία"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:generalManager",
   "property": "http://dbpedia.org/ontology/generalManager",
   "label": {
    "en": "general manager"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Person"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:coverArtist",
   "property": "http://dbpedia.org/ontology/coverArtist",
   "label": {
    "en": "cover artist",
    "nl": "cover artist"
   },
   "description": {
    "en": "Cover artist"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Person"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:broadcastArea",
   "property": "http://dbpedia.org/ontology/broadcastArea",
   "label": {
    "en": "broadcast area",
    "el": "περιοχή αναμετάδοσης"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/PopulatedPlace"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:heritageRegister",
   "property": "http://dbpedia.org/ontology/heritageRegister",
   "label": {
    "en": "heritage register",
    "fr": "inventaire du patrimoine"
   },
   "description": {
    "en": "registered in a heritage register : inventory of cultural properties, natural and man-made, tangible and intangible, movable and immovable, that are deemed to be of sufficient heritage value to be separately identified and recorded.",
    "fr": "inscrit à un inventaires dédiés à la conservation du patrimoine, naturel ou culturel, existants dans le monde."
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:region",
   "property": "http://dbpedia.org/ontology/region",
   "label": {
    "en": "region",
    "nl": "regio",
    "el": "περιοχή"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Place"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:formerBandMember",
   "property": "http://dbpedia.org/ontology/formerBandMember",
   "label": {
    "en": "former band member",
    "nl": "voormalig bandlid"
   },
   "description": {
    "en": "A former member of the band."
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Person"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:goyaAward",
   "property": "http://dbpedia.org/ontology/goyaAward",
   "label": {
    "en": "Goya Award"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Award"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:routeStart",
   "property": "http://dbpedia.org/ontology/routeStart",
   "label": {
    "en": "route start",
    "de": "Weganfang"
   },
   "description": {
    "en": "Start of the route. This is where the route begins and, for U.S. roads, is either at the southern terminus or western terminus.",
    "de": "Anfang des Verkehrswegs."
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/RouteOfTransportation"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:ethnicity",
   "property": "http://dbpedia.org/ontology/ethnicity",
   "label": {
    "en": "ethnicity",
    "de": "ethnische zugehörigkeit",
    "it": "etnia"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/EthnicGroup"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:winsAtAus",
   "property": "http://dbpedia.org/ontology/winsAtAus",
   "label": {
    "en": "wins at AUS"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:currency",
   "property": "http://dbpedia.org/ontology/currency",
   "label": {
    "fr": "devise",
    "en": "currency",
    "nl": "valuta",
    "pt": "moeda",
    "de": "Währung"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Currency"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:doctoralStudent",
   "property": "http://dbpedia.org/ontology/doctoralStudent",
   "label": {
    "en": "doctoral student",
    "el": "διδακτορικοί_φοιτητές",
    "nl": "doctoraalstudent"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Person"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:populationPlace",
   "property": "http://dbpedia.org/ontology/populationPlace",
   "label": {
    "en": "population place"
   },
   "description": {
    "en": "a place were members of an ethnic group are living"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/PopulatedPlace"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:associationOfLocalGovernment",
   "property": "http://dbpedia.org/ontology/associationOfLocalGovernment",
   "label": {
    "en": "association of local government",
    "nl": "vereniging van lokale overheden",
    "el": "συνεργασία της τοπικής αυτοδιοίκησης"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/PopulatedPlace"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:managementCountry",
   "property": "http://dbpedia.org/ontology/managementCountry",
   "label": {
    "en": "management country"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Country"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:medalist",
   "property": "http://dbpedia.org/ontology/medalist",
   "label": {
    "en": "medalist",
    "pt": "medalhista"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Person"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:distributor",
   "property": "http://dbpedia.org/ontology/distributor",
   "label": {
    "en": "distributor",
    "fr": "allumeur"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Organisation"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:discipline",
   "property": "http://dbpedia.org/ontology/discipline",
   "label": {
    "en": "discipline"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:picture",
   "property": "http://dbpedia.org/ontology/picture",
   "label": {
    "el": "εικόνα",
    "en": "picture",
    "nl": "afbeelding",
    "pt": "figura",
    "de": "Bild"
   },
   "description": {
    "en": "A picture of a thing."
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:contractor",
   "property": "http://dbpedia.org/ontology/contractor",
   "label": {
    "en": "contractor",
    "nl": "aannemer"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Company"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:capitalPosition",
   "property": "http://dbpedia.org/ontology/capitalPosition",
   "label": {
    "en": "capital position"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://www.w3.org/2003/01/geo/wgs84_pos#SpatialThing"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:constellation",
   "property": "http://dbpedia.org/ontology/constellation",
   "label": {
    "en": "constellation",
    "pl": "gwiazdozbiór",
    "tr": "Takımyıldız",
    "nl": "stelsel"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:category",
   "property": "http://dbpedia.org/ontology/category",
   "label": {
    "el": "κατηγορία",
    "fr": "catégorie",
    "en": "category",
    "cs": "Kategorie",
    "de": "Kategorie"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:apcPresident",
   "property": "http://dbpedia.org/ontology/apcPresident",
   "label": {
    "en": "apc president"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Person"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:breeder",
   "property": "http://dbpedia.org/ontology/breeder",
   "label": {
    "en": "breeder",
    "el": "κτηνοτρόφος"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Person"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:billed",
   "property": "http://dbpedia.org/ontology/billed",
   "label": {
    "en": "billed"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/PopulatedPlace"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:artPatron",
   "property": "http://dbpedia.org/ontology/artPatron",
   "label": {
    "en": "patron (art)",
    "fr": "mécène"
   },
   "description": {
    "en": "An influential, wealthy person who supported an artist, craftsman, a scholar or a noble.. See also",
    "fr": "Celui qui encourage par ses libéralités les sciences, les lettres et les arts."
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Artist"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:structuralSystem",
   "property": "http://dbpedia.org/ontology/structuralSystem",
   "label": {
    "en": "structural system",
    "nl": "bouwmethode",
    "el": "κατασκευαστικό σύστημα"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:basedOn",
   "property": "http://dbpedia.org/ontology/basedOn",
   "label": {
    "en": "based on",
    "el": "βασισμένο σε",
    "nl": "op basis van"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Work"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:sisterNewspaper",
   "property": "http://dbpedia.org/ontology/sisterNewspaper",
   "label": {
    "en": "sister newspaper"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Newspaper"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:sourceState",
   "property": "http://dbpedia.org/ontology/sourceState",
   "label": {
    "en": "source state"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/PopulatedPlace"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:winsAtAsia",
   "property": "http://dbpedia.org/ontology/winsAtAsia",
   "label": {
    "en": "wins at ASIA"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:skills",
   "property": "http://dbpedia.org/ontology/skills",
   "label": {
    "en": "skills",
    "fr": "compétences",
    "nl": "bekwaamheden"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:comparable",
   "property": "http://dbpedia.org/ontology/comparable",
   "label": {
    "en": "comparable"
   },
   "description": {
    "en": "similar, unrelated rockets"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Rocket"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:baftaAward",
   "property": "http://dbpedia.org/ontology/baftaAward",
   "label": {
    "en": "BAFTA Award",
    "el": "βραβείο BAFTA"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Award"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:statisticLabel",
   "property": "http://dbpedia.org/ontology/statisticLabel",
   "label": {
    "en": "statistic label"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:routeEndLocation",
   "property": "http://dbpedia.org/ontology/routeEndLocation",
   "label": {
    "en": "route end location",
    "de": "Ort des Wegendes"
   },
   "description": {
    "en": "The end location of the route.",
    "de": "End-Ort des Verkehrswegs."
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Place"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:languageFamily",
   "property": "http://dbpedia.org/ontology/languageFamily",
   "label": {
    "en": "family",
    "nl": "taalfamilie",
    "pl": "rodzina"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:opponent",
   "property": "http://dbpedia.org/ontology/opponent",
   "label": {
    "en": "opponent",
    "ja": "敵対者",
    "de": "Gegner"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Person"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:vicePrimeMinister",
   "property": "http://dbpedia.org/ontology/vicePrimeMinister",
   "label": {
    "en": "vice prime minister",
    "nl": "vice premier"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Person"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:fundedBy",
   "property": "http://dbpedia.org/ontology/fundedBy",
   "label": {
    "en": "funded by"
   },
   "description": {
    "en": "A organisation financing the research project."
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Organisation"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:class",
   "property": "http://dbpedia.org/ontology/class",
   "label": {
    "en": "class",
    "el": "τάξη",
    "nl": "klasse"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:landingVehicle",
   "property": "http://dbpedia.org/ontology/landingVehicle",
   "label": {
    "en": "landing vehicle"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/SpaceMission"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:knownFor",
   "property": "http://dbpedia.org/ontology/knownFor",
   "label": {
    "el": "γνωστός_για",
    "fr": "connu pour",
    "en": "known for",
    "nl": "bekend om",
    "es": "conocido por",
    "de": "bekannt für"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:hubAirport",
   "property": "http://dbpedia.org/ontology/hubAirport",
   "label": {
    "en": "hub airport"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Airport"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:mostPopulatedCountry",
   "property": "http://dbpedia.org/ontology/mostPopulatedCountry",
   "label": {
    "en": "most populated country",
    "pt": "país mais povoado"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Country"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:album",
   "property": "http://dbpedia.org/ontology/album",
   "label": {
    "en": "album",
    "nl": "album",
    "el": "από το άλμπουμ"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Album"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:aircraftHelicopterAttack",
   "property": "http://dbpedia.org/ontology/aircraftHelicopterAttack",
   "label": {
    "en": "aircraft helicopter attack",
    "el": "επίθεση ελικοφόρων αεροσκαφών"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/MeanOfTransportation"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:secondDriverCountry",
   "property": "http://dbpedia.org/ontology/secondDriverCountry",
   "label": {
    "en": "second driver country"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Country"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:iso6392Code",
   "property": "http://dbpedia.org/ontology/iso6392Code",
   "label": {
    "en": "ISO 639-2 code",
    "nl": "ISO 639-2 code",
    "pl": "kod ISO 639-2"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:twinCountry",
   "property": "http://dbpedia.org/ontology/twinCountry",
   "label": {
    "en": "twin country"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Country"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:hasChannel",
   "property": "http://dbpedia.org/ontology/hasChannel",
   "label": {
    "en": "has channel"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:place",
   "property": "http://dbpedia.org/ontology/place",
   "label": {
    "en": "place of military conflict",
    "de": "Ort eines militärischen Konflikts"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/PopulatedPlace"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:solicitorGeneral",
   "property": "http://dbpedia.org/ontology/solicitorGeneral",
   "label": {
    "en": "solicitor general",
    "nl": "advocaat-generaal"
   },
   "description": {
    "en": "high-ranking solicitor",
    "nl": "de advocaat-generaal"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Person"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:sportSpecialty",
   "property": "http://dbpedia.org/ontology/sportSpecialty",
   "label": {
    "en": "sport specialty",
    "nl": "sport specialiteit"
   },
   "description": {
    "en": "the sport specialty the athlete practices, e.g. 'Ring' for a men's artistic gymnastics athlete"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Sport"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:era",
   "property": "http://dbpedia.org/ontology/era",
   "label": {
    "en": "era",
    "el": "εποχή"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:gameArtist",
   "property": "http://dbpedia.org/ontology/gameArtist",
   "label": {
    "en": "game artist",
    "ja": "ゲームデザイナー"
   },
   "description": {
    "en": "A game artist is an artist who creates art for one or more types of games. Game artists are responsible for all of the aspects of game development that call for visual art."
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Person"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:equipment",
   "property": "http://dbpedia.org/ontology/equipment",
   "label": {
    "en": "equipment",
    "el": "εξοπλισμός"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:spurType",
   "property": "http://dbpedia.org/ontology/spurType",
   "label": {
    "en": "spur type"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:grammyAward",
   "property": "http://dbpedia.org/ontology/grammyAward",
   "label": {
    "en": "Grammy Award"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Award"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:academicDiscipline",
   "property": "http://dbpedia.org/ontology/academicDiscipline",
   "label": {
    "en": "academic discipline",
    "de": "wissenschaftliche Disziplin"
   },
   "description": {
    "en": "An academic discipline, or field of study, is a branch of knowledge that is taught and researched at the college or university level. Disciplines are defined (in part), and recognized by the academic journals in which research is published, and the learned societies and academic departments or faculties to which their practitioners belong."
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:booster",
   "property": "http://dbpedia.org/ontology/booster",
   "label": {
    "en": "booster",
    "el": "προωθητής"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Rocket"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:nextEntity",
   "property": "http://dbpedia.org/ontology/nextEntity",
   "label": {
    "en": "next entity"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Place"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:nerve",
   "property": "http://dbpedia.org/ontology/nerve",
   "label": {
    "en": "nerve"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Nerve"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:firstWinner",
   "property": "http://dbpedia.org/ontology/firstWinner",
   "label": {
    "en": "first winner",
    "el": "πρώτος νικητής"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Person"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:commune",
   "property": "http://dbpedia.org/ontology/commune",
   "label": {
    "en": "commune",
    "fr": "commune"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Settlement"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:shape",
   "property": "http://dbpedia.org/ontology/shape",
   "label": {
    "en": "intercommunality shape"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Community"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:outflow",
   "property": "http://dbpedia.org/ontology/outflow",
   "label": {
    "en": "outflow",
    "el": "εκροή"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/River"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:movement",
   "property": "http://dbpedia.org/ontology/movement",
   "label": {
    "en": "movement",
    "nl": "beweging",
    "fr": "mouvement artistique"
   },
   "description": {
    "en": "artistic movement or school with which artist is associated"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:supplies",
   "property": "http://dbpedia.org/ontology/supplies",
   "label": {
    "en": "supplies",
    "el": "παροχές"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/AnatomicalStructure"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:namedAfter",
   "property": "http://dbpedia.org/ontology/namedAfter",
   "label": {
    "en": "named after"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:heir",
   "property": "http://dbpedia.org/ontology/heir",
   "label": {
    "en": "heir",
    "de": "Erbe"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Person"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:highestPoint",
   "property": "http://dbpedia.org/ontology/highestPoint",
   "label": {
    "en": "highest point of a norwegian settlement"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Place"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:champion",
   "property": "http://dbpedia.org/ontology/champion",
   "label": {
    "en": "champion",
    "fr": "champion",
    "es": "Campeón"
   },
   "description": {
    "en": "winner of a competition"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Athlete"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:launchPad",
   "property": "http://dbpedia.org/ontology/launchPad",
   "label": {
    "en": "launch pad"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/LaunchPad"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:gameEngine",
   "property": "http://dbpedia.org/ontology/gameEngine",
   "label": {
    "en": "Game Engine",
    "ja": "ゲームエンジン"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:bodyStyle",
   "property": "http://dbpedia.org/ontology/bodyStyle",
   "label": {
    "en": "body style",
    "el": "τύπος σώματος"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:orthologousGene",
   "property": "http://dbpedia.org/ontology/orthologousGene",
   "label": {
    "en": "Orthologous Gene",
    "ja": "オーソロガス遺伝子"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Gene"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:organisationMember",
   "property": "http://dbpedia.org/ontology/organisationMember",
   "label": {
    "en": "organisation member"
   },
   "description": {
    "en": "Identify the members of an organisation."
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/OrganisationMember"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:sibling",
   "property": "http://dbpedia.org/ontology/sibling",
   "label": {
    "en": "sibling",
    "nl": "broer of zus",
    "fr": "frère ou soeur",
    "de": "Geschwister"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Person"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:owner",
   "property": "http://dbpedia.org/ontology/owner",
   "label": {
    "el": "ιδιοκτήτης",
    "fr": "propriétaire",
    "en": "owner",
    "nl": "eigenaar",
    "es": "dueño",
    "de": "Eigentümer"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Agent"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:stadium",
   "property": "http://dbpedia.org/ontology/stadium",
   "label": {
    "en": "Stadium",
    "el": "στάδιο"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Stadium"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:federalState",
   "property": "http://dbpedia.org/ontology/federalState",
   "label": {
    "de": "Bundesland",
    "en": "federal state",
    "nl": "provincie"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/PopulatedPlace"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:hasVariant",
   "property": "http://dbpedia.org/ontology/hasVariant",
   "label": {
    "en": "variant or variation",
    "nl": "variant of variatie"
   },
   "description": {
    "en": "variant or variation, for example all variations of a color"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:firstPopularVote",
   "property": "http://dbpedia.org/ontology/firstPopularVote",
   "label": {
    "en": "firstPopularVote"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Person"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:competition",
   "property": "http://dbpedia.org/ontology/competition",
   "label": {
    "en": "competition",
    "fr": "competition",
    "es": "competición"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Event"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:astrologicalSign",
   "property": "http://dbpedia.org/ontology/astrologicalSign",
   "label": {
    "en": "astrological sign",
    "el": "αστρολογικό ζώδιο",
    "de": "Sternzeichen",
    "pt": "signo astrológico"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:restingPlacePosition",
   "property": "http://dbpedia.org/ontology/restingPlacePosition",
   "label": {
    "en": "resting place position"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://www.w3.org/2003/01/geo/wgs84_pos#SpatialThing"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:tradeMark",
   "property": "http://dbpedia.org/ontology/tradeMark",
   "label": {
    "en": "TradeMark",
    "es": "Marca"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:firstRace",
   "property": "http://dbpedia.org/ontology/firstRace",
   "label": {
    "en": "first race"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/GrandPrix"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:binomialAuthority",
   "property": "http://dbpedia.org/ontology/binomialAuthority",
   "label": {
    "en": "binomial authority",
    "ja": "（学名命名者）"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:editing",
   "property": "http://dbpedia.org/ontology/editing",
   "label": {
    "en": "editing"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Person"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:committeeInLegislature",
   "property": "http://dbpedia.org/ontology/committeeInLegislature",
   "label": {
    "en": "committee in legislature",
    "de": "Ausschuss in der Legislative"
   },
   "description": {
    "en": "Committee in the legislature (eg.: Committee on Economic and Monetary Affairs of the European Parliament)."
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:championInSingleMale",
   "property": "http://dbpedia.org/ontology/championInSingleMale",
   "label": {
    "en": "champion in single male",
    "fr": "champion en simple homme",
    "es": "Campeón en simple hombres"
   },
   "description": {
    "en": "winner of a competition in the single male session, to distinguish from the double session (as in tennis)"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Athlete"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:part",
   "property": "http://dbpedia.org/ontology/part",
   "label": {
    "en": "part"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Place"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:layout",
   "property": "http://dbpedia.org/ontology/layout",
   "label": {
    "en": "layout"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:neighboringMunicipality",
   "property": "http://dbpedia.org/ontology/neighboringMunicipality",
   "label": {
    "en": "neighboring municipality",
    "nl": "aangrenzende gemeente",
    "pt": "municipío adjacente"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/PopulatedPlace"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:taoiseach",
   "property": "http://dbpedia.org/ontology/taoiseach",
   "label": {
    "en": "taoiseach"
   },
   "description": {
    "en": "head of government of Ireland"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Person"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:firstWin",
   "property": "http://dbpedia.org/ontology/firstWin",
   "label": {
    "en": "first win"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/GrandPrix"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:parentCompany",
   "property": "http://dbpedia.org/ontology/parentCompany",
   "label": {
    "en": "parent company"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Company"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:chiefPlace",
   "property": "http://dbpedia.org/ontology/chiefPlace",
   "label": {
    "en": "chief place"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/PopulatedPlace"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:nationalFilmAward",
   "property": "http://dbpedia.org/ontology/nationalFilmAward",
   "label": {
    "en": "National Film Award"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Award"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:actScore",
   "property": "http://dbpedia.org/ontology/actScore",
   "label": {
    "en": "ACT score",
    "el": "ACT σκορ"
   },
   "description": {
    "en": "most recent average ACT scores",
    "el": "ποιό πρόσφατες μέσες βαθμολογίες ACT"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:mayor",
   "property": "http://dbpedia.org/ontology/mayor",
   "label": {
    "en": "mayor",
    "el": "δήμαρχος",
    "nl": "burgemeester",
    "fr": "maire"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Mayor"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:manufacturer",
   "property": "http://dbpedia.org/ontology/manufacturer",
   "label": {
    "en": "manufacturer",
    "el": "κατασκευαστής"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Organisation"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:academyAward",
   "property": "http://dbpedia.org/ontology/academyAward",
   "label": {
    "en": "Academy Award",
    "el": "Βραβείο ακαδημίας"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Award"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:launchSite",
   "property": "http://dbpedia.org/ontology/launchSite",
   "label": {
    "en": "launch site"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Building"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:computingInput",
   "property": "http://dbpedia.org/ontology/computingInput",
   "label": {
    "en": "Computing input"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:associatedBand",
   "property": "http://dbpedia.org/ontology/associatedBand",
   "label": {
    "en": "associated band",
    "el": "συνεργαζόμενο συγκρότημα"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Band"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:religion",
   "property": "http://dbpedia.org/ontology/religion",
   "label": {
    "el": "θρησκεία",
    "fr": "religion",
    "en": "religion",
    "ja": "宗教",
    "nl": "religie",
    "pt": "religião"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:biome",
   "property": "http://dbpedia.org/ontology/biome",
   "label": {
    "en": "biome",
    "ja": "生物群系"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:naacpImageAward",
   "property": "http://dbpedia.org/ontology/naacpImageAward",
   "label": {
    "en": "NAACP Image Award"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Award"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:aircraftFighter",
   "property": "http://dbpedia.org/ontology/aircraftFighter",
   "label": {
    "en": "aircraft fighter",
    "el": "μαχητικό αεροσκάφος"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/MeanOfTransportation"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:screenActorsGuildAward",
   "property": "http://dbpedia.org/ontology/screenActorsGuildAward",
   "label": {
    "en": "Screen Actors Guild Award"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Award"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:type",
   "property": "http://dbpedia.org/ontology/type",
   "label": {
    "en": "type",
    "el": "τύπος",
    "nl": "type"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:island",
   "property": "http://dbpedia.org/ontology/island",
   "label": {
    "en": "island",
    "el": "νησιά"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Island"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:hasInput",
   "property": "http://dbpedia.org/ontology/hasInput",
   "label": {
    "en": "has input"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:countryWithFirstSatellite",
   "property": "http://dbpedia.org/ontology/countryWithFirstSatellite",
   "label": {
    "en": "country with first satellite"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Country"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:musicBy",
   "property": "http://dbpedia.org/ontology/musicBy",
   "label": {
    "en": "music by"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Person"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:governor",
   "property": "http://dbpedia.org/ontology/governor",
   "label": {
    "en": "governor",
    "el": "κυβερνήτης",
    "fr": "gouverneur"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Person"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:championInDoubleMale",
   "property": "http://dbpedia.org/ontology/championInDoubleMale",
   "label": {
    "en": "champion in double male",
    "fr": "champion en double hommes",
    "es": "Campeón en doble hombres"
   },
   "description": {
    "en": "winner of a competition in the male double session (as in tennis)"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Athlete"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:goldMedalist",
   "property": "http://dbpedia.org/ontology/goldMedalist",
   "label": {
    "en": "gold medalist",
    "pt": "medalha de ouro"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Person"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:incumbent",
   "property": "http://dbpedia.org/ontology/incumbent",
   "label": {
    "en": "incumbent",
    "nl": "plaatsbekleder"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Person"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:district",
   "property": "http://dbpedia.org/ontology/district",
   "label": {
    "el": "περιοχή",
    "en": "district",
    "nl": "streek",
    "pt": "distrito",
    "de": "Bezirk"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/PopulatedPlace"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:olympicOathSwornBy",
   "property": "http://dbpedia.org/ontology/olympicOathSwornBy",
   "label": {
    "en": "olympic oath sworn by",
    "fr": "lecteur du serment olympique"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Person"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:crosses",
   "property": "http://dbpedia.org/ontology/crosses",
   "label": {
    "en": "crosses",
    "el": "διασχίζει"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/River"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:translator",
   "property": "http://dbpedia.org/ontology/translator",
   "label": {
    "en": "translator",
    "nl": "vertaler",
    "el": "μεταφραστής",
    "fr": "traducteur"
   },
   "description": {
    "en": "Translator(s), if original not in English"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Person"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:occupation",
   "property": "http://dbpedia.org/ontology/occupation",
   "label": {
    "fr": "activité",
    "en": "occupation",
    "ja": "職業",
    "nl": "beroep",
    "de": "Beschäftigung"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/PersonFunction"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:birthPlace",
   "property": "http://dbpedia.org/ontology/birthPlace",
   "label": {
    "el": "τόπος_γέννησης",
    "fr": "lieu de naissance",
    "en": "birth place",
    "nl": "geboorteplaats",
    "de": "Geburtsort"
   },
   "description": {
    "en": "where the person was born"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Place"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:municipality",
   "property": "http://dbpedia.org/ontology/municipality",
   "label": {
    "en": "municipality",
    "nl": "plaats",
    "fr": "municipalité"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/PopulatedPlace"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:webcast",
   "property": "http://dbpedia.org/ontology/webcast",
   "label": {
    "en": "webcast",
    "nl": "webcast"
   },
   "description": {
    "en": "The URL to the webcast of the Thing."
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:wikiPageDisambiguates",
   "property": "http://dbpedia.org/ontology/wikiPageDisambiguates",
   "label": {
    "en": "Wikipage disambiguates"
   },
   "description": {
    "en": "Reserved for DBpedia."
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:sourceConfluenceMountain",
   "property": "http://dbpedia.org/ontology/sourceConfluenceMountain",
   "label": {
    "en": "source confluence mountain"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Mountain"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:aircraftHelicopterMultirole",
   "property": "http://dbpedia.org/ontology/aircraftHelicopterMultirole",
   "label": {
    "en": "aircraft helicopter multirole",
    "el": "ελικοφόρο αεροσκάφος πολλαπλών ρόλων"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/MeanOfTransportation"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:organSystem",
   "property": "http://dbpedia.org/ontology/organSystem",
   "label": {
    "en": "organ system"
   },
   "description": {
    "en": "the organ system that a anatomical structure belongs to"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/AnatomicalStructure"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:lowestMountain",
   "property": "http://dbpedia.org/ontology/lowestMountain",
   "label": {
    "en": "lowest mountain",
    "el": "χαμηλώτερο βουνό"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Mountain"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:mouthState",
   "property": "http://dbpedia.org/ontology/mouthState",
   "label": {
    "en": "mouth state"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/PopulatedPlace"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:novel",
   "property": "http://dbpedia.org/ontology/novel",
   "label": {
    "en": "novel"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Novel"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:geneLocation",
   "property": "http://dbpedia.org/ontology/geneLocation",
   "label": {
    "en": "Gene Location",
    "ja": "遺伝子座"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/GeneLocation"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:retiredRocket",
   "property": "http://dbpedia.org/ontology/retiredRocket",
   "label": {
    "en": "retired rocket"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Rocket"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:aircraftHelicopter",
   "property": "http://dbpedia.org/ontology/aircraftHelicopter",
   "label": {
    "en": "aircraft helicopter",
    "el": "ελικοφόρο αεροσκάφος"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/MeanOfTransportation"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:firstAppearance",
   "property": "http://dbpedia.org/ontology/firstAppearance",
   "label": {
    "en": "first appearance"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:chef",
   "property": "http://dbpedia.org/ontology/chef",
   "label": {
    "en": "chef",
    "nl": "sous-chef",
    "el": "chef",
    "fr": "chef cuisinier"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Person"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:soccerLeagueSeason",
   "property": "http://dbpedia.org/ontology/soccerLeagueSeason",
   "label": {
    "en": "season",
    "tr": "sezon"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/SoccerLeagueSeason"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:soccerTournamentTopScorer",
   "property": "http://dbpedia.org/ontology/soccerTournamentTopScorer",
   "label": {
    "en": "top scorer",
    "tr": "en golcü"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/SoccerPlayer"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:giniCoefficientCategory",
   "property": "http://dbpedia.org/ontology/giniCoefficientCategory",
   "label": {
    "en": "gini coefficient category",
    "pt": "categoria do coeficiente de Gini"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:lessPopulatedCountry",
   "property": "http://dbpedia.org/ontology/lessPopulatedCountry",
   "label": {
    "en": "less populated country",
    "pt": "país menos povoado"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Country"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:maintainedBy",
   "property": "http://dbpedia.org/ontology/maintainedBy",
   "label": {
    "en": "maintained by",
    "de": "gewartet von"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:sourceMountain",
   "property": "http://dbpedia.org/ontology/sourceMountain",
   "label": {
    "en": "source mountain"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Mountain"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:memberOfParliament",
   "property": "http://dbpedia.org/ontology/memberOfParliament",
   "label": {
    "en": "Member of Parliament"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Person"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:winterAppearances",
   "property": "http://dbpedia.org/ontology/winterAppearances",
   "label": {
    "en": "winter appearances"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/OlympicResult"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:administrativeCenter",
   "property": "http://dbpedia.org/ontology/administrativeCenter",
   "label": {
    "en": "administrative center"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Place"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:landeshauptmann",
   "property": "http://dbpedia.org/ontology/landeshauptmann",
   "label": {
    "en": "landeshauptmann"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Person"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:curator",
   "property": "http://dbpedia.org/ontology/curator",
   "label": {
    "en": "curator",
    "nl": "conservator"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Person"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:family",
   "property": "http://dbpedia.org/ontology/family",
   "label": {
    "el": "οικογένεια",
    "fr": "famille",
    "en": "family",
    "ja": "科_(分類学)",
    "nl": "familie",
    "pl": "rodzina",
    "de": "familie"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Species"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:executiveProducer",
   "property": "http://dbpedia.org/ontology/executiveProducer",
   "label": {
    "en": "executive producer"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Person"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:meetingRoad",
   "property": "http://dbpedia.org/ontology/meetingRoad",
   "label": {
    "en": "meeting road",
    "de": "zusammentreffende Straße"
   },
   "description": {
    "en": "A road that crosses another road at the junction.",
    "de": "Eine Straße die an der Kreuzung eine andere Straße kreuzt."
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Road"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:sportDiscipline",
   "property": "http://dbpedia.org/ontology/sportDiscipline",
   "label": {
    "en": "sport discipline",
    "fr": "discipline sportive",
    "nl": "tak van sport"
   },
   "description": {
    "en": "the sport discipline the athlete practices, e.g. Diving, or that a board member of a sporting club is focussing at"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Sport"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:winsAtKLPGA",
   "property": "http://dbpedia.org/ontology/winsAtKLPGA",
   "label": {
    "en": "wins at KLPGA"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:highestPlace",
   "property": "http://dbpedia.org/ontology/highestPlace",
   "label": {
    "en": "highest place"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/PopulatedPlace"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:canonizedPlace",
   "property": "http://dbpedia.org/ontology/canonizedPlace",
   "label": {
    "en": "canonized place",
    "nl": "heiligverklaring plaats"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/PopulatedPlace"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:settlement",
   "property": "http://dbpedia.org/ontology/settlement",
   "label": {
    "en": "settlement"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/PopulatedPlace"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:soccerTournamentMostSuccesfull",
   "property": "http://dbpedia.org/ontology/soccerTournamentMostSuccesfull",
   "label": {
    "en": "most successfull",
    "tr": "en başarılı"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/SoccerClub"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:sexualOrientation",
   "property": "http://dbpedia.org/ontology/sexualOrientation",
   "label": {
    "en": "sexual orientation",
    "pt": "orientação sexual"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:internationalAffiliation",
   "property": "http://dbpedia.org/ontology/internationalAffiliation",
   "label": {
    "en": "international affiliation",
    "pt": "afiliacao internacional"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:campus",
   "property": "http://dbpedia.org/ontology/campus",
   "label": {
    "en": "campus"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:engineType",
   "property": "http://dbpedia.org/ontology/engineType",
   "label": {
    "en": "engine type"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:mouthDistrict",
   "property": "http://dbpedia.org/ontology/mouthDistrict",
   "label": {
    "en": "mouth district"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/PopulatedPlace"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:prefect",
   "property": "http://dbpedia.org/ontology/prefect",
   "label": {
    "en": "prefect of a romanian settlement"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Person"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:sourcePlace",
   "property": "http://dbpedia.org/ontology/sourcePlace",
   "label": {
    "en": "source place"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/PopulatedPlace"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:governorGeneral",
   "property": "http://dbpedia.org/ontology/governorGeneral",
   "label": {
    "en": "governor general"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Person"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:formerHighschool",
   "property": "http://dbpedia.org/ontology/formerHighschool",
   "label": {
    "en": "former highschool"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/EducationalInstitution"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:canton",
   "property": "http://dbpedia.org/ontology/canton",
   "label": {
    "en": "canton",
    "nl": "kanton",
    "fr": "canton"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Settlement"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:politicalPartyInLegislature",
   "property": "http://dbpedia.org/ontology/politicalPartyInLegislature",
   "label": {
    "en": "political party in legislature",
    "de": "politische Partei in der Legislative"
   },
   "description": {
    "en": "Political party in the legislature (eg.: European People's Party in the European Parliament)."
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/PoliticalParty"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:arielAward",
   "property": "http://dbpedia.org/ontology/arielAward",
   "label": {
    "en": "Ariel Award",
    "el": "Ariel Award"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Award"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:whaDraftTeam",
   "property": "http://dbpedia.org/ontology/whaDraftTeam",
   "label": {
    "en": "wha draft team"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/HockeyTeam"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:firstAscentPerson",
   "property": "http://dbpedia.org/ontology/firstAscentPerson",
   "label": {
    "en": "person that first ascented a mountain"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Person"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:secondPopularVote",
   "property": "http://dbpedia.org/ontology/secondPopularVote",
   "label": {
    "en": "secondPopularVote"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Person"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:nationalTeam",
   "property": "http://dbpedia.org/ontology/nationalTeam",
   "label": {
    "en": "national team",
    "nl": "nationaal team"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/SportsTeam"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:coExecutiveProducer",
   "property": "http://dbpedia.org/ontology/coExecutiveProducer",
   "label": {
    "en": "co executive producer"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Person"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:chain",
   "property": "http://dbpedia.org/ontology/chain",
   "label": {
    "en": "chain",
    "de": "kette",
    "el": "αλυσίδα"
   },
   "description": {
    "en": "The chain of Hotels this instance is associated with."
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Company"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:servingRailwayLine",
   "property": "http://dbpedia.org/ontology/servingRailwayLine",
   "label": {
    "en": "serving railway line",
    "nl": "spoorlijnen",
    "de": "angebundene Eisenbahnlinie"
   },
   "description": {
    "en": "Railway services that serve the station."
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:architect",
   "property": "http://dbpedia.org/ontology/architect",
   "label": {
    "el": "αρχιτέκτονας",
    "fr": "architecte",
    "en": "architect",
    "nl": "architect",
    "de": "Architekt"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Architect"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:flagBearer",
   "property": "http://dbpedia.org/ontology/flagBearer",
   "label": {
    "en": "flag bearer"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Person"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:capitalPlace",
   "property": "http://dbpedia.org/ontology/capitalPlace",
   "label": {
    "en": "capital place"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/PopulatedPlace"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:deputy",
   "property": "http://dbpedia.org/ontology/deputy",
   "label": {
    "en": "deputy"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Person"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:isPartOfMilitaryConflict",
   "property": "http://dbpedia.org/ontology/isPartOfMilitaryConflict",
   "label": {
    "en": "is part of military conflict"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/MilitaryConflict"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:schoolBoard",
   "property": "http://dbpedia.org/ontology/schoolBoard",
   "label": {
    "en": "school board"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:component",
   "property": "http://dbpedia.org/ontology/component",
   "label": {
    "en": "component"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/AnatomicalStructure"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:broadcastNetwork",
   "property": "http://dbpedia.org/ontology/broadcastNetwork",
   "label": {
    "en": "broadcast network",
    "de": "Sendergruppe",
    "el": "τηλεοπτικό κανάλι",
    "fr": "chaîne de télévision généraliste"
   },
   "description": {
    "en": "The parent broadcast network to which the broadcaster belongs.",
    "de": "Die Sendergruppe zu dem der Rundfunkveranstalter gehört."
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/BroadcastNetwork"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:destination",
   "property": "http://dbpedia.org/ontology/destination",
   "label": {
    "en": "destination",
    "el": "προορισμός"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/PopulatedPlace"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:appointer",
   "property": "http://dbpedia.org/ontology/appointer",
   "label": {
    "en": "appointer"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Person"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:firstLeader",
   "property": "http://dbpedia.org/ontology/firstLeader",
   "label": {
    "en": "firstLeader",
    "el": "πρώτος ηγέτης"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Person"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:chairperson",
   "property": "http://dbpedia.org/ontology/chairperson",
   "label": {
    "en": "chairperson",
    "nl": "voorzitter"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Person"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:eyeColor",
   "property": "http://dbpedia.org/ontology/eyeColor",
   "label": {
    "en": "eye color",
    "de": "Augenfarbe",
    "pt": "cor dos olhos"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:championInDouble",
   "property": "http://dbpedia.org/ontology/championInDouble",
   "label": {
    "en": "champion in double",
    "nl": "kampioen dubbel",
    "fr": "champion en double",
    "es": "Campeón en doble"
   },
   "description": {
    "en": "winner of a competition in the double session (as in tennis)"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Athlete"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:sire",
   "property": "http://dbpedia.org/ontology/sire",
   "label": {
    "en": "sire"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Animal"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:leftTributary",
   "property": "http://dbpedia.org/ontology/leftTributary",
   "label": {
    "en": "left tributary",
    "el": "αριστεροί_παραπόταμοι"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/River"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:autonomy",
   "property": "http://dbpedia.org/ontology/autonomy",
   "label": {
    "en": "autonomy",
    "el": "αυτονομία"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:mostDownPoint",
   "property": "http://dbpedia.org/ontology/mostDownPoint",
   "label": {
    "en": "most down point of a norwegian settlement"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Place"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:film",
   "property": "http://dbpedia.org/ontology/film",
   "label": {
    "el": "ταινία",
    "fr": "film",
    "en": "film",
    "nl": "film",
    "de": "film"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Film"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:goldenCalfAward",
   "property": "http://dbpedia.org/ontology/goldenCalfAward",
   "label": {
    "en": "Golden Calf Award"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Award"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:trustee",
   "property": "http://dbpedia.org/ontology/trustee",
   "label": {
    "en": "trustee"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Person"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:capitalMountain",
   "property": "http://dbpedia.org/ontology/capitalMountain",
   "label": {
    "en": "capital mountain"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Mountain"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:growingGrape",
   "property": "http://dbpedia.org/ontology/growingGrape",
   "label": {
    "en": "growing grape"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Grape"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:instrument",
   "property": "http://dbpedia.org/ontology/instrument",
   "label": {
    "en": "instrument",
    "el": "όργανο",
    "nl": "instrument"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Instrument"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:placeOfWorship",
   "property": "http://dbpedia.org/ontology/placeOfWorship",
   "label": {
    "en": "place of worship",
    "nl": "gebedsplaats"
   },
   "description": {
    "en": "A religious administrative body needs to know which places of worship it",
    "nl": "Een kerkelijke organisatie houdt bij welke gebedshuizen ze heeft"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Church"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:actingHeadteacher",
   "property": "http://dbpedia.org/ontology/actingHeadteacher",
   "label": {
    "en": "acting headteacher",
    "el": "διευθυντής σχολείου"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Person"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:millType",
   "property": "http://dbpedia.org/ontology/millType",
   "label": {
    "el": "τύπος μύλου",
    "en": "mill type",
    "nl": "molen-type"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:peabodyAward",
   "property": "http://dbpedia.org/ontology/peabodyAward",
   "label": {
    "en": "Peabody Award"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Award"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:college",
   "property": "http://dbpedia.org/ontology/college",
   "label": {
    "en": "college",
    "el": "κολλέγιο",
    "fr": "haute école"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/College"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:archipelago",
   "property": "http://dbpedia.org/ontology/archipelago",
   "label": {
    "en": "archipelago",
    "el": "αρχιπέλαγος",
    "nl": "archipel"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:locatedInArea",
   "property": "http://dbpedia.org/ontology/locatedInArea",
   "label": {
    "en": "located in area",
    "nl": "landstreek"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Place"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:constructionMaterial",
   "property": "http://dbpedia.org/ontology/constructionMaterial",
   "label": {
    "en": "construction material",
    "nl": "bouwmateriaal",
    "de": "Baumaterial"
   },
   "description": {
    "en": "Construction material (eg. concrete, steel, iron, stone, brick, wood)."
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:buildingType",
   "property": "http://dbpedia.org/ontology/buildingType",
   "label": {
    "en": "buildingType",
    "el": "Τύπος κτιρίου",
    "nl": "soort gebouw"
   },
   "description": {
    "en": "Type is too general. We should be able to distinguish types of music from types of architecture",
    "nl": "Type is te algemeen. We moeten soorten muziek van soorten gebouwen kunnen onderscheiden",
    "el": "Ο τύπος είναι πολύ γενικό.Θα πρέπει να είναι σε θέση να διακρίνουν τα είδη της μουσικής από τους τύπους της αρχιτεκτονικής"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:mountainRange",
   "property": "http://dbpedia.org/ontology/mountainRange",
   "label": {
    "en": "mountain range",
    "nl": "bergketen"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/MountainRange"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:costumeDesigner",
   "property": "http://dbpedia.org/ontology/costumeDesigner",
   "label": {
    "en": "costume designer",
    "it": "costumista"
   },
   "description": {
    "en": "the person who is responsible for the film costume design"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Person"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:religiousHeadLabel",
   "property": "http://dbpedia.org/ontology/religiousHeadLabel",
   "label": {
    "en": "religious head label"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:footedness",
   "property": "http://dbpedia.org/ontology/footedness",
   "label": {
    "en": "Footedness",
    "pt": "habilidade com o pé"
   },
   "description": {
    "en": "a preference to put one's left or right foot forward in surfing, wakeboarding, skateboarding, wakeskating, snowboarding and mountainboarding. The term is sometimes applied to the foot a footballer uses to kick."
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Person"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:deathCause",
   "property": "http://dbpedia.org/ontology/deathCause",
   "label": {
    "en": "death cause",
    "nl": "doodsoorzaak",
    "de": "Todesursache",
    "el": "αιτία_θανάτου"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:patent",
   "property": "http://dbpedia.org/ontology/patent",
   "label": {
    "en": "patent",
    "pt": "patente"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:predecessor",
   "property": "http://dbpedia.org/ontology/predecessor",
   "label": {
    "en": "predecessor",
    "nl": "voorganger",
    "de": "Vorgänger",
    "ja": "前任者"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:showJudge",
   "property": "http://dbpedia.org/ontology/showJudge",
   "label": {
    "en": "showJudge"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Person"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:timeZone",
   "property": "http://dbpedia.org/ontology/timeZone",
   "label": {
    "el": "ζώνη_ώρας1",
    "fr": "fuseau horaire",
    "en": "time zone",
    "nl": "tijdzone",
    "pt": "fuso horario",
    "pl": "strefa czasowa",
    "es": "huso horario",
    "ca": "zona horària"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:performer",
   "property": "http://dbpedia.org/ontology/performer",
   "label": {
    "en": "performer"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Person"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:borough",
   "property": "http://dbpedia.org/ontology/borough",
   "label": {
    "en": "borough",
    "el": "δήμος",
    "nl": "stadsdeel"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/PopulatedPlace"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:highschool",
   "property": "http://dbpedia.org/ontology/highschool",
   "label": {
    "en": "highschool"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/School"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:winsAtSun",
   "property": "http://dbpedia.org/ontology/winsAtSun",
   "label": {
    "en": "wins at sun"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:notableIdea",
   "property": "http://dbpedia.org/ontology/notableIdea",
   "label": {
    "en": "notableIdea"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:uRN",
   "property": "http://dbpedia.org/ontology/uRN",
   "label": {
    "en": "unique reference number (URN)"
   },
   "description": {
    "en": "DfE unique reference number of a school in England or Wales"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:stylisticOrigin",
   "property": "http://dbpedia.org/ontology/stylisticOrigin",
   "label": {
    "en": "stylistic origin",
    "pt": "origens estilísticas"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/MusicGenre"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:coolingSystem",
   "property": "http://dbpedia.org/ontology/coolingSystem",
   "label": {
    "en": "cooling system"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:pastor",
   "property": "http://dbpedia.org/ontology/pastor",
   "label": {
    "en": "pastor"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Person"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:simcCode",
   "property": "http://dbpedia.org/ontology/simcCode",
   "label": {
    "en": "SIMC code"
   },
   "description": {
    "en": "indexing code used by the Polish National Official Register of the Territorial Division of the Country (TERYT) to identify various entities"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:designCompany",
   "property": "http://dbpedia.org/ontology/designCompany",
   "label": {
    "en": "designer company"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Company"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:engine",
   "property": "http://dbpedia.org/ontology/engine",
   "label": {
    "en": "engine",
    "el": "μηχανή",
    "pt": "motor"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/AutomobileEngine"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:afiAward",
   "property": "http://dbpedia.org/ontology/afiAward",
   "label": {
    "en": "AFI Award",
    "el": "βραβείο AFI"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Award"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:producer",
   "property": "http://dbpedia.org/ontology/producer",
   "label": {
    "en": "producer",
    "nl": "producent",
    "de": "Produzent",
    "el": "παραγωγός"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Person"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:railwayLineUsingTunnel",
   "property": "http://dbpedia.org/ontology/railwayLineUsingTunnel",
   "label": {
    "en": "railway line using tunnel",
    "de": "Tunnel benutzende Eisenbahnlinie"
   },
   "description": {
    "en": "Railway line that is using the tunnel."
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:jureLanguage",
   "property": "http://dbpedia.org/ontology/jureLanguage",
   "label": {
    "en": "jure language"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Language"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:beatifiedPlace",
   "property": "http://dbpedia.org/ontology/beatifiedPlace",
   "label": {
    "en": "beatified place",
    "nl": "zalig verklaard plaats"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/PopulatedPlace"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:nominee",
   "property": "http://dbpedia.org/ontology/nominee",
   "label": {
    "en": "nominee"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Person"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:olympicOathSwornByJudge",
   "property": "http://dbpedia.org/ontology/olympicOathSwornByJudge",
   "label": {
    "en": "olympic oath sworn by judge"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Person"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:chairman",
   "property": "http://dbpedia.org/ontology/chairman",
   "label": {
    "en": "chairman"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Person"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:product",
   "property": "http://dbpedia.org/ontology/product",
   "label": {
    "en": "product",
    "de": "Produkt",
    "el": "προϊόν"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:americanComedyAward",
   "property": "http://dbpedia.org/ontology/americanComedyAward",
   "label": {
    "en": "American Comedy Award",
    "el": "αμερικάνικο βραβείο κωμωδίας"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Award"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:authority",
   "property": "http://dbpedia.org/ontology/authority",
   "label": {
    "en": "authority",
    "nl": "autoriteit",
    "el": "αρχή"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:drainsTo",
   "property": "http://dbpedia.org/ontology/drainsTo",
   "label": {
    "en": "drains to"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/AnatomicalStructure"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:sourceConfluencePlace",
   "property": "http://dbpedia.org/ontology/sourceConfluencePlace",
   "label": {
    "en": "source confluence place"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Place"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:parish",
   "property": "http://dbpedia.org/ontology/parish",
   "label": {
    "en": "parish"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/PopulatedPlace"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:gender",
   "property": "http://dbpedia.org/ontology/gender",
   "label": {
    "en": "gender",
    "el": "φύλο",
    "de": "Geschlecht",
    "nl": "geslacht"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:headChef",
   "property": "http://dbpedia.org/ontology/headChef",
   "label": {
    "en": "head chef",
    "nl": "chef-kok"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Person"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:relatedPlaces",
   "property": "http://dbpedia.org/ontology/relatedPlaces",
   "label": {
    "en": "related places",
    "nl": "soortgelijke plaatsen"
   },
   "description": {
    "en": "This property is to accommodate the list field that contains a list of, e.g., monuments in the same town",
    "nl": "Deze property is voor de lijst van monumenten die horen bij het monument van de infobox"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/List"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:classis",
   "property": "http://dbpedia.org/ontology/classis",
   "label": {
    "en": "classis",
    "nl": "klasse",
    "ja": "綱_(分類学)"
   },
   "description": {
    "en": "the living thing class (from the Latin \"classis\"), according to the biological taxonomy"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:previousInfrastructure",
   "property": "http://dbpedia.org/ontology/previousInfrastructure",
   "label": {
    "en": "previous infrastructure",
    "nl": "vorige infrastructuur"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Infrastructure"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:schoolPatron",
   "property": "http://dbpedia.org/ontology/schoolPatron",
   "label": {
    "en": "school patron"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:coProducer",
   "property": "http://dbpedia.org/ontology/coProducer",
   "label": {
    "en": "co producer"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/Person"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:tvShow",
   "property": "http://dbpedia.org/ontology/tvShow",
   "label": {
    "en": "tvShow"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/TelevisionShow"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  },
  {
   "id": "dbpo:isPartOfWineRegion",
   "property": "http://dbpedia.org/ontology/isPartOfWineRegion",
   "label": {
    "en": "is part of wine region"
   },
   "constraints": {
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": "http://dbpedia.org/ontology/WineRegion"
   },
   "type": "choice",
   "nodetype": "RESOURCE",
   "cardinality": {
    "pref": 1
   }
  }
 ],
 "scope": "dbpo",
 "namespace": "http://dbpedia.org/ontology/"
});