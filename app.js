/* ==========================================================================
   TN SMART DATA - APPLICATION LOGIC
   ========================================================================== */

// API BASE URL - points to our Express backend
const API_BASE = 'http://localhost:3000';

// 1. TAMIL NADU DISTRICT DATA ENGINE (loaded from backend)
let districtData = {
  coimbatore: {
    name: "Coimbatore",
    population: {
      val: "34.45 Lakh",
      trend: "+1.2%",
      isPositive: true,
      stats: {
        "Total Population": "3,445,291",
        "Growth Rate": "1.2% (Annual)",
        "Sex Ratio": "1001 F / 1000 M",
        "Literate Population": "2,987,120",
        "Density": "748 / km²"
      },
      chart: {
        type: 'line',
        label: 'Population Trend (Millions)',
        labels: ["2022", "2023", "2024", "2025", "2026"],
        data: [3.28, 3.32, 3.36, 3.40, 3.44],
        color: '#8b5cf6'
      }
    },
    agriculture: {
      val: "4.82 Lakh Ac",
      trend: "-0.5%",
      isPositive: false,
      stats: {
        "Net Sown Area": "482,100 Acres",
        "Major Crop": "Coconut & Groundnut",
        "Irrigated Area": "62%",
        "Soil Fertility Index": "High",
        "Organic Farming": "18.2%"
      },
      chart: {
        type: 'bar',
        label: 'Crop Distribution (%)',
        labels: ["Coconut", "Groundnut", "Paddy", "Sugarcane", "Millets"],
        data: [45, 25, 15, 10, 5],
        color: '#10b981'
      }
    },
    water: {
      val: "78.4 % Avg",
      trend: "+14.8%",
      isPositive: true,
      stats: {
        "Siruvani Reservoir": "82.5% Capacity",
        "Pilloor Reservoir": "84.2% Capacity",
        "Groundwater Level": "12.4m Below GL",
        "Daily Supply": "240 MLD",
        "Water Quality Index": "88 (Excellent)"
      },
      chart: {
        type: 'bar',
        label: 'Reservoir Capacity (%)',
        labels: ["Siruvani", "Pilloor", "Aliyar", "Sholayar"],
        data: [82.5, 84.2, 72.0, 75.0],
        color: '#0284c7'
      }
    },
    rainfall: {
      val: "742 mm",
      trend: "+5.6%",
      isPositive: true,
      stats: {
        "Annual Rainfall": "742 mm",
        "Deficit/Surplus": "+5.6% Surplus",
        "Rainy Days": "54 Days",
        "Heavy Rainfall Alerts": "3 issued",
        "Recharge Volume": "184 Million m³"
      },
      chart: {
        type: 'line',
        label: 'Monthly Rainfall (mm)',
        labels: ["Jun", "Jul", "Aug", "Sep", "Oct", "Nov"],
        data: [45, 62, 85, 120, 240, 190],
        color: '#06b6d4'
      }
    },
    traffic: {
      val: "72.4k Peak",
      trend: "+8.3%",
      isPositive: false, // Traffic increase is negative
      stats: {
        "Registered Vehicles": "1,450,290",
        "Peak Traffic Vol": "72,400 vph",
        "Congestion Index": "6.2/10",
        "Average Speed": "22.4 km/h",
        "Active Signals": "142 units"
      },
      chart: {
        type: 'line',
        label: 'Peak Hour Congestion (Index)',
        labels: ["08:00", "12:00", "16:00", "18:00", "20:00"],
        data: [6.5, 4.5, 5.2, 7.8, 5.8],
        color: '#f43f5e'
      }
    },
    employment: {
      val: "4.2% Unemp",
      trend: "-0.8%",
      isPositive: true, // Unemployment decrease is positive
      stats: {
        "Labor Force": "1,820,000",
        "Unemployment Rate": "4.2%",
        "IT & Tech Sector": "48,000 jobs",
        "Manufacturing Sector": "320,000 jobs",
        "Skill Index": "72/100"
      },
      chart: {
        type: 'doughnut',
        label: 'Sector Breakdown (%)',
        labels: ["Mfg", "Services/IT", "Agri", "Textiles", "Others"],
        data: [32, 28, 15, 18, 7],
        color: '#3b82f6'
      }
    },
    health: {
      val: "94.2 Score",
      trend: "+2.1%",
      isPositive: true,
      stats: {
        "Hospitals & Clinics": "382",
        "Total Bed Capacity": "12,450 beds",
        "Avg Response Time": "11.4 mins",
        "Health Scheme Coverage": "88.4%",
        "Maternal Mortality": "0.04%"
      },
      chart: {
        type: 'bar',
        label: 'Bed Capacity by Specialty',
        labels: ["General", "Pediatric", "Maternity", "Cardiac", "Specialty"],
        data: [4000, 2000, 1500, 1200, 3750],
        color: '#ec4899'
      }
    },
    education: {
      val: "89.23 % Lit",
      trend: "+0.7%",
      isPositive: true,
      stats: {
        "Literacy Rate": "89.23%",
        "Primary Schools": "642",
        "Higher Sec Schools": "218",
        "Colleges & Univ": "84",
        "Pupil Teacher Ratio": "24:1"
      },
      chart: {
        type: 'line',
        label: 'Literacy Trend (%)',
        labels: ["2022", "2023", "2024", "2025", "2026"],
        data: [87.5, 88.0, 88.4, 88.9, 89.23],
        color: '#f59e0b'
      }
    }
  },
  chennai: {
    name: "Chennai",
    population: {
      val: "89.10 Lakh",
      trend: "+2.4%",
      isPositive: true,
      stats: {
        "Total Population": "8,910,240",
        "Growth Rate": "2.4% (Annual)",
        "Sex Ratio": "989 F / 1000 M",
        "Literate Population": "8,020,400",
        "Density": "26,553 / km²"
      },
      chart: {
        type: 'line',
        label: 'Population Trend (Millions)',
        labels: ["2022", "2023", "2024", "2025", "2026"],
        data: [8.10, 8.32, 8.51, 8.72, 8.91],
        color: '#8b5cf6'
      }
    },
    agriculture: {
      val: "0.12 Lakh Ac",
      trend: "-12.4%",
      isPositive: false,
      stats: {
        "Net Sown Area": "12,000 Acres",
        "Major Crop": "Paddy & Vegetables",
        "Irrigated Area": "95%",
        "Soil Fertility Index": "Medium",
        "Organic Farming": "2.1%"
      },
      chart: {
        type: 'bar',
        label: 'Crop Distribution (%)',
        labels: ["Paddy", "Vegetables", "Flowers", "Millets", "Fodder"],
        data: [60, 20, 10, 5, 5],
        color: '#10b981'
      }
    },
    water: {
      val: "62.1 % Avg",
      trend: "+2.1%",
      isPositive: true,
      stats: {
        "Chembarambakkam": "68.2% Capacity",
        "Red Hills": "61.5% Capacity",
        "Poondi Reservoir": "58.4% Capacity",
        "Daily Supply": "850 MLD",
        "Water Quality Index": "72 (Fair)"
      },
      chart: {
        type: 'bar',
        label: 'Reservoir Capacity (%)',
        labels: ["Chembaram.", "Red Hills", "Poondi", "Cholavaram"],
        data: [68.2, 61.5, 58.4, 48.0],
        color: '#0284c7'
      }
    },
    rainfall: {
      val: "1320 mm",
      trend: "+12.2%",
      isPositive: true,
      stats: {
        "Annual Rainfall": "1,320 mm",
        "Deficit/Surplus": "+12.2% Surplus",
        "Rainy Days": "68 Days",
        "Heavy Rainfall Alerts": "12 issued",
        "Recharge Volume": "310 Million m³"
      },
      chart: {
        type: 'line',
        label: 'Monthly Rainfall (mm)',
        labels: ["Jun", "Jul", "Aug", "Sep", "Oct", "Nov"],
        data: [60, 85, 110, 180, 420, 465],
        color: '#06b6d4'
      }
    },
    traffic: {
      val: "148.5k Peak",
      trend: "+11.4%",
      isPositive: false,
      stats: {
        "Registered Vehicles": "4,210,000",
        "Peak Traffic Vol": "148,500 vph",
        "Congestion Index": "8.8/10",
        "Average Speed": "14.2 km/h",
        "Active Signals": "412 units"
      },
      chart: {
        type: 'line',
        label: 'Peak Hour Congestion (Index)',
        labels: ["08:00", "12:00", "16:00", "18:00", "20:00"],
        data: [9.1, 7.2, 7.8, 9.4, 8.2],
        color: '#f43f5e'
      }
    },
    employment: {
      val: "5.8% Unemp",
      trend: "-0.2%",
      isPositive: true,
      stats: {
        "Labor Force": "4,120,000",
        "Unemployment Rate": "5.8%",
        "IT & Tech Sector": "580,000 jobs",
        "Manufacturing Sector": "420,000 jobs",
        "Skill Index": "84/100"
      },
      chart: {
        type: 'doughnut',
        label: 'Sector Breakdown (%)',
        labels: ["IT/ITeS", "Manufacturing", "Automobile", "Retail", "Others"],
        data: [38, 22, 18, 12, 10],
        color: '#3b82f6'
      }
    },
    health: {
      val: "96.8 Score",
      trend: "+1.8%",
      isPositive: true,
      stats: {
        "Hospitals & Clinics": "1,240",
        "Total Bed Capacity": "42,800 beds",
        "Avg Response Time": "8.2 mins",
        "Health Scheme Coverage": "92.1%",
        "Maternal Mortality": "0.02%"
      },
      chart: {
        type: 'bar',
        label: 'Bed Capacity by Specialty',
        labels: ["General", "Pediatric", "Maternity", "Cardiac", "Specialty"],
        data: [15000, 8000, 6000, 5000, 8800],
        color: '#ec4899'
      }
    },
    education: {
      val: "90.18 % Lit",
      trend: "+0.4%",
      isPositive: true,
      stats: {
        "Literacy Rate": "90.18%",
        "Primary Schools": "1,420",
        "Higher Sec Schools": "480",
        "Colleges & Univ": "240",
        "Pupil Teacher Ratio": "20:1"
      },
      chart: {
        type: 'line',
        label: 'Literacy Trend (%)',
        labels: ["2022", "2023", "2024", "2025", "2026"],
        data: [89.1, 89.5, 89.8, 90.0, 90.18],
        color: '#f59e0b'
      }
    }
  },
  madurai: {
    name: "Madurai",
    population: {
      val: "28.10 Lakh",
      trend: "+0.8%",
      isPositive: true,
      stats: {
        "Total Population": "2,810,400",
        "Growth Rate": "0.8% (Annual)",
        "Sex Ratio": "996 F / 1000 M",
        "Literate Population": "2,280,000",
        "Density": "820 / km²"
      },
      chart: {
        type: 'line',
        label: 'Population Trend (Millions)',
        labels: ["2022", "2023", "2024", "2025", "2026"],
        data: [2.71, 2.73, 2.76, 2.78, 2.81],
        color: '#8b5cf6'
      }
    },
    agriculture: {
      val: "3.20 Lakh Ac",
      trend: "+1.1%",
      isPositive: true,
      stats: {
        "Net Sown Area": "320,000 Acres",
        "Major Crop": "Paddy & Jasmine",
        "Irrigated Area": "72%",
        "Soil Fertility Index": "High",
        "Organic Farming": "8.5%"
      },
      chart: {
        type: 'bar',
        label: 'Crop Distribution (%)',
        labels: ["Paddy", "Jasmine", "Sugarcane", "Pulses", "Fruits"],
        data: [50, 20, 15, 10, 5],
        color: '#10b981'
      }
    },
    water: {
      val: "68.2 % Avg",
      trend: "+8.4%",
      isPositive: true,
      stats: {
        "Vaigai Dam": "71.2% Capacity",
        "Sathiyar Reservoir": "65.2% Capacity",
        "Groundwater Level": "14.2m Below GL",
        "Daily Supply": "180 MLD",
        "Water Quality Index": "79 (Good)"
      },
      chart: {
        type: 'bar',
        label: 'Reservoir Capacity (%)',
        labels: ["Vaigai", "Sathiyar", "Groundwater"],
        data: [71.2, 65.2, 55.0],
        color: '#0284c7'
      }
    },
    rainfall: {
      val: "860 mm",
      trend: "+2.4%",
      isPositive: true,
      stats: {
        "Annual Rainfall": "860 mm",
        "Deficit/Surplus": "+2.4% Surplus",
        "Rainy Days": "48 Days",
        "Heavy Rainfall Alerts": "1 issued",
        "Recharge Volume": "112 Million m³"
      },
      chart: {
        type: 'line',
        label: 'Monthly Rainfall (mm)',
        labels: ["Jun", "Jul", "Aug", "Sep", "Oct", "Nov"],
        data: [35, 48, 70, 110, 310, 287],
        color: '#06b6d4'
      }
    },
    traffic: {
      val: "58.2k Peak",
      trend: "+5.1%",
      isPositive: false,
      stats: {
        "Registered Vehicles": "980,000",
        "Peak Traffic Vol": "58,200 vph",
        "Congestion Index": "5.8/10",
        "Average Speed": "24.2 km/h",
        "Active Signals": "96 units"
      },
      chart: {
        type: 'line',
        label: 'Peak Hour Congestion (Index)',
        labels: ["08:00", "12:00", "16:00", "18:00", "20:00"],
        data: [5.8, 4.1, 4.8, 6.9, 5.2],
        color: '#f43f5e'
      }
    },
    employment: {
      val: "4.8% Unemp",
      trend: "-0.5%",
      isPositive: true,
      stats: {
        "Labor Force": "1,410,000",
        "Unemployment Rate": "4.8%",
        "IT & Services": "12,000 jobs",
        "Trade & Commerce": "340,000 jobs",
        "Skill Index": "68/100"
      },
      chart: {
        type: 'doughnut',
        label: 'Sector Breakdown (%)',
        labels: ["Agriculture", "Trade", "Services", "Handicrafts", "Others"],
        data: [30, 28, 14, 18, 10],
        color: '#3b82f6'
      }
    },
    health: {
      val: "91.4 Score",
      trend: "+1.2%",
      isPositive: true,
      stats: {
        "Hospitals & Clinics": "294",
        "Total Bed Capacity": "9,800 beds",
        "Avg Response Time": "13.2 mins",
        "Health Scheme Coverage": "84.2%",
        "Maternal Mortality": "0.06%"
      },
      chart: {
        type: 'bar',
        label: 'Bed Capacity by Specialty',
        labels: ["General", "Pediatric", "Maternity", "Cardiac", "Specialty"],
        data: [3200, 1600, 1200, 800, 3000],
        color: '#ec4899'
      }
    },
    education: {
      val: "83.10 % Lit",
      trend: "+0.5%",
      isPositive: true,
      stats: {
        "Literacy Rate": "83.10%",
        "Primary Schools": "540",
        "Higher Sec Schools": "180",
        "Colleges & Univ": "52",
        "Pupil Teacher Ratio": "26:1"
      },
      chart: {
        type: 'line',
        label: 'Literacy Trend (%)',
        labels: ["2022", "2023", "2024", "2025", "2026"],
        data: [81.5, 82.0, 82.4, 82.8, 83.1],
        color: '#f59e0b'
      }
    }
  },
  trichy: {
    name: "Tiruchirappalli",
    population: {
      val: "27.22 Lakh",
      trend: "+0.9%",
      isPositive: true,
      stats: {
        "Total Population": "2,722,290",
        "Growth Rate": "0.9% (Annual)",
        "Sex Ratio": "1013 F / 1000 M",
        "Literate Population": "2,310,000",
        "Density": "620 / km²"
      },
      chart: {
        type: 'line',
        label: 'Population Trend (Millions)',
        labels: ["2022", "2023", "2024", "2025", "2026"],
        data: [2.62, 2.65, 2.67, 2.70, 2.72],
        color: '#8b5cf6'
      }
    },
    agriculture: {
      val: "4.10 Lakh Ac",
      trend: "+2.1%",
      isPositive: true,
      stats: {
        "Net Sown Area": "410,000 Acres",
        "Major Crop": "Banana & Paddy",
        "Irrigated Area": "84% (Cauvery Canal)",
        "Soil Fertility Index": "Very High",
        "Organic Farming": "14.2%"
      },
      chart: {
        type: 'bar',
        label: 'Crop Distribution (%)',
        labels: ["Paddy", "Banana", "Sugarcane", "Coconut", "Vegetables"],
        data: [48, 22, 16, 9, 5],
        color: '#10b981'
      }
    },
    water: {
      val: "82.1 % Avg",
      trend: "+16.2%",
      isPositive: true,
      stats: {
        "Mettur Dam inflow": "78.2% Capacity",
        "Grand Anicut flow": "84.5% Capacity",
        "Groundwater Level": "9.8m Below GL",
        "Daily Supply": "210 MLD",
        "Water Quality Index": "86 (Good)"
      },
      chart: {
        type: 'bar',
        label: 'Reservoir Capacity (%)',
        labels: ["Mettur Flow", "Grand Anicut", "Kollidam flow"],
        data: [78.2, 84.5, 83.6],
        color: '#0284c7'
      }
    },
    rainfall: {
      val: "910 mm",
      trend: "+4.1%",
      isPositive: true,
      stats: {
        "Annual Rainfall": "910 mm",
        "Deficit/Surplus": "+4.1% Surplus",
        "Rainy Days": "50 Days",
        "Heavy Rainfall Alerts": "2 issued",
        "Recharge Volume": "142 Million m³"
      },
      chart: {
        type: 'line',
        label: 'Monthly Rainfall (mm)',
        labels: ["Jun", "Jul", "Aug", "Sep", "Oct", "Nov"],
        data: [38, 52, 75, 125, 330, 290],
        color: '#06b6d4'
      }
    },
    traffic: {
      val: "51.4k Peak",
      trend: "+4.8%",
      isPositive: false,
      stats: {
        "Registered Vehicles": "840,000",
        "Peak Traffic Vol": "51,400 vph",
        "Congestion Index": "5.1/10",
        "Average Speed": "26.8 km/h",
        "Active Signals": "82 units"
      },
      chart: {
        type: 'line',
        label: 'Peak Hour Congestion (Index)',
        labels: ["08:00", "12:00", "16:00", "18:00", "20:00"],
        data: [5.2, 3.8, 4.2, 6.2, 4.8],
        color: '#f43f5e'
      }
    },
    employment: {
      val: "4.5% Unemp",
      trend: "-0.6%",
      isPositive: true,
      stats: {
        "Labor Force": "1,320,000",
        "Unemployment Rate": "4.5%",
        "Heavy Industries": "110,000 jobs",
        "Trading & Services": "280,000 jobs",
        "Skill Index": "74/100"
      },
      chart: {
        type: 'doughnut',
        label: 'Sector Breakdown (%)',
        labels: ["Heavy Industry", "Agriculture", "Services", "Textiles", "Others"],
        data: [26, 24, 22, 18, 10],
        color: '#3b82f6'
      }
    },
    health: {
      val: "93.8 Score",
      trend: "+2.0%",
      isPositive: true,
      stats: {
        "Hospitals & Clinics": "270",
        "Total Bed Capacity": "10,200 beds",
        "Avg Response Time": "12.0 mins",
        "Health Scheme Coverage": "86.8%",
        "Maternal Mortality": "0.03%"
      },
      chart: {
        type: 'bar',
        label: 'Bed Capacity by Specialty',
        labels: ["General", "Pediatric", "Maternity", "Cardiac", "Specialty"],
        data: [3500, 1800, 1400, 900, 2600],
        color: '#ec4899'
      }
    },
    education: {
      val: "91.37 % Lit",
      trend: "+0.8%",
      isPositive: true,
      stats: {
        "Literacy Rate": "91.37%",
        "Primary Schools": "590",
        "Higher Sec Schools": "194",
        "Colleges & Univ": "68",
        "Pupil Teacher Ratio": "22:1"
      },
      chart: {
        type: 'line',
        label: 'Literacy Trend (%)',
        labels: ["2022", "2023", "2024", "2025", "2026"],
        data: [89.2, 89.8, 90.3, 90.9, 91.37],
        color: '#f59e0b'
      }
    }
  },
  salem: {
    name: "Salem",
    population: {
      val: "35.20 Lakh",
      trend: "+1.0%",
      isPositive: true,
      stats: {
        "Total Population": "3,520,120",
        "Growth Rate": "1.0% (Annual)",
        "Sex Ratio": "954 F / 1000 M",
        "Literate Population": "2,710,000",
        "Density": "670 / km²"
      },
      chart: {
        type: 'line',
        label: 'Population Trend (Millions)',
        labels: ["2022", "2023", "2024", "2025", "2026"],
        data: [3.38, 3.41, 3.45, 3.48, 3.52],
        color: '#8b5cf6'
      }
    },
    agriculture: {
      val: "5.42 Lakh Ac",
      trend: "+1.5%",
      isPositive: true,
      stats: {
        "Net Sown Area": "542,000 Acres",
        "Major Crop": "Tapioca & Mango",
        "Irrigated Area": "58%",
        "Soil Fertility Index": "High",
        "Organic Farming": "9.8%"
      },
      chart: {
        type: 'bar',
        label: 'Crop Distribution (%)',
        labels: ["Tapioca", "Mango", "Paddy", "Cotton", "Sugarcane"],
        data: [38, 28, 16, 10, 8],
        color: '#10b981'
      }
    },
    water: {
      val: "86.4 % Avg",
      trend: "+18.2%",
      isPositive: true,
      stats: {
        "Mettur Stanley Reservoir": "89.2% Capacity",
        "Kariyakoil Dam": "83.6% Capacity",
        "Groundwater Level": "13.6m Below GL",
        "Daily Supply": "190 MLD",
        "Water Quality Index": "82 (Good)"
      },
      chart: {
        type: 'bar',
        label: 'Reservoir Capacity (%)',
        labels: ["Stanley", "Kariyakoil", "Groundwater"],
        data: [89.2, 83.6, 60.0],
        color: '#0284c7'
      }
    },
    rainfall: {
      val: "980 mm",
      trend: "+7.8%",
      isPositive: true,
      stats: {
        "Annual Rainfall": "980 mm",
        "Deficit/Surplus": "+7.8% Surplus",
        "Rainy Days": "52 Days",
        "Heavy Rainfall Alerts": "4 issued",
        "Recharge Volume": "172 Million m³"
      },
      chart: {
        type: 'line',
        label: 'Monthly Rainfall (mm)',
        labels: ["Jun", "Jul", "Aug", "Sep", "Oct", "Nov"],
        data: [42, 60, 89, 138, 350, 301],
        color: '#06b6d4'
      }
    },
    traffic: {
      val: "60.2k Peak",
      trend: "+6.1%",
      isPositive: false,
      stats: {
        "Registered Vehicles": "1,120,000",
        "Peak Traffic Vol": "60,200 vph",
        "Congestion Index": "5.9/10",
        "Average Speed": "23.4 km/h",
        "Active Signals": "104 units"
      },
      chart: {
        type: 'line',
        label: 'Peak Hour Congestion (Index)',
        labels: ["08:00", "12:00", "16:00", "18:00", "20:00"],
        data: [6.1, 4.2, 4.9, 7.1, 5.4],
        color: '#f43f5e'
      }
    },
    employment: {
      val: "5.1% Unemp",
      trend: "-0.4%",
      isPositive: true,
      stats: {
        "Labor Force": "1,740,000",
        "Unemployment Rate": "5.1%",
        "Steel & Steel Alloys": "85,000 jobs",
        "Weaving & Textiles": "210,000 jobs",
        "Skill Index": "69/100"
      },
      chart: {
        type: 'doughnut',
        label: 'Sector Breakdown (%)',
        labels: ["Steel/Heavy", "Weaving", "Agriculture", "Services", "Others"],
        data: [25, 28, 22, 15, 10],
        color: '#3b82f6'
      }
    },
    health: {
      val: "90.8 Score",
      trend: "+1.4%",
      isPositive: true,
      stats: {
        "Hospitals & Clinics": "310",
        "Total Bed Capacity": "9,200 beds",
        "Avg Response Time": "14.2 mins",
        "Health Scheme Coverage": "82.4%",
        "Maternal Mortality": "0.05%"
      },
      chart: {
        type: 'bar',
        label: 'Bed Capacity by Specialty',
        labels: ["General", "Pediatric", "Maternity", "Cardiac", "Specialty"],
        data: [3000, 1500, 1200, 700, 2800],
        color: '#ec4899'
      }
    },
    education: {
      val: "73.23 % Lit",
      trend: "+1.1%",
      isPositive: true,
      stats: {
        "Literacy Rate": "73.23%",
        "Primary Schools": "680",
        "Higher Sec Schools": "172",
        "Colleges & Univ": "48",
        "Pupil Teacher Ratio": "28:1"
      },
      chart: {
        type: 'line',
        label: 'Literacy Trend (%)',
        labels: ["2022", "2023", "2024", "2025", "2026"],
        data: [71.1, 71.8, 72.3, 72.8, 73.23],
        color: '#f59e0b'
      }
    }
  },
  tirunelveli: {
    name: "Tirunelveli",
    population: {
      val: "16.80 Lakh",
      trend: "+0.5%",
      isPositive: true,
      stats: {
        "Total Population": "1,680,420",
        "Growth Rate": "0.5% (Annual)",
        "Sex Ratio": "1023 F / 1000 M",
        "Literate Population": "1,410,000",
        "Density": "420 / km²"
      },
      chart: {
        type: 'line',
        label: 'Population Trend (Millions)',
        labels: ["2022", "2023", "2024", "2025", "2026"],
        data: [1.64, 1.65, 1.66, 1.67, 1.68],
        color: '#8b5cf6'
      }
    },
    agriculture: {
      val: "3.85 Lakh Ac",
      trend: "+0.4%",
      isPositive: true,
      stats: {
        "Net Sown Area": "385,000 Acres",
        "Major Crop": "Paddy & Banana",
        "Irrigated Area": "78%",
        "Soil Fertility Index": "High",
        "Organic Farming": "11.2%"
      },
      chart: {
        type: 'bar',
        label: 'Crop Distribution (%)',
        labels: ["Paddy", "Banana", "Pulses", "Spices", "Oilseeds"],
        data: [42, 28, 15, 10, 5],
        color: '#10b981'
      }
    },
    water: {
      val: "84.2 % Avg",
      trend: "+11.2%",
      isPositive: true,
      stats: {
        "Manimuthar Dam": "88.2% Capacity",
        "Papanasam Dam": "85.4% Capacity",
        "Servalar Reservoir": "79.0% Capacity",
        "Daily Supply": "110 MLD",
        "Water Quality Index": "91 (Excellent)"
      },
      chart: {
        type: 'bar',
        label: 'Reservoir Capacity (%)',
        labels: ["Manimuthar", "Papanasam", "Servalar"],
        data: [88.2, 85.4, 79.0],
        color: '#0284c7'
      }
    },
    rainfall: {
      val: "820 mm",
      trend: "+3.2%",
      isPositive: true,
      stats: {
        "Annual Rainfall": "820 mm",
        "Deficit/Surplus": "+3.2% Surplus",
        "Rainy Days": "46 Days",
        "Heavy Rainfall Alerts": "1 issued",
        "Recharge Volume": "98 Million m³"
      },
      chart: {
        type: 'line',
        label: 'Monthly Rainfall (mm)',
        labels: ["Jun", "Jul", "Aug", "Sep", "Oct", "Nov"],
        data: [32, 45, 68, 102, 290, 283],
        color: '#06b6d4'
      }
    },
    traffic: {
      val: "32.4k Peak",
      trend: "+2.1%",
      isPositive: false,
      stats: {
        "Registered Vehicles": "510,000",
        "Peak Traffic Vol": "32,400 vph",
        "Congestion Index": "3.8/10",
        "Average Speed": "31.2 km/h",
        "Active Signals": "48 units"
      },
      chart: {
        type: 'line',
        label: 'Peak Hour Congestion (Index)',
        labels: ["08:00", "12:00", "16:00", "18:00", "20:00"],
        data: [3.9, 2.5, 3.1, 4.2, 3.2],
        color: '#f43f5e'
      }
    },
    employment: {
      val: "3.9% Unemp",
      trend: "-0.5%",
      isPositive: true,
      stats: {
        "Labor Force": "780,000",
        "Unemployment Rate": "3.9%",
        "Beedi Rollers": "140,000 jobs",
        "Agriculture & Agro": "320,000 jobs",
        "Skill Index": "64/100"
      },
      chart: {
        type: 'doughnut',
        label: 'Sector Breakdown (%)',
        labels: ["Agri/Agro", "Cottage Ind", "Retail", "Education", "Others"],
        data: [41, 24, 15, 12, 8],
        color: '#3b82f6'
      }
    },
    health: {
      val: "89.2 Score",
      trend: "+1.1%",
      isPositive: true,
      stats: {
        "Hospitals & Clinics": "182",
        "Total Bed Capacity": "5,400 beds",
        "Avg Response Time": "15.4 mins",
        "Health Scheme Coverage": "81.2%",
        "Maternal Mortality": "0.06%"
      },
      chart: {
        type: 'bar',
        label: 'Bed Capacity by Specialty',
        labels: ["General", "Pediatric", "Maternity", "Cardiac", "Specialty"],
        data: [1800, 900, 700, 400, 1600],
        color: '#ec4899'
      }
    },
    education: {
      val: "82.50 % Lit",
      trend: "+0.6%",
      isPositive: true,
      stats: {
        "Literacy Rate": "82.50%",
        "Primary Schools": "380",
        "Higher Sec Schools": "112",
        "Colleges & Univ": "34",
        "Pupil Teacher Ratio": "25:1"
      },
      chart: {
        type: 'line',
        label: 'Literacy Trend (%)',
        labels: ["2022", "2023", "2024", "2025", "2026"],
        data: [81.1, 81.5, 81.9, 82.2, 82.50],
        color: '#f59e0b'
      }
    }
  },
  vellore: {
    name: "Vellore",
    population: {
      val: "16.14 Lakh",
      trend: "+0.8%",
      isPositive: true,
      stats: {
        "Total Population": "1,614,240",
        "Growth Rate": "0.8% (Annual)",
        "Sex Ratio": "1007 F / 1000 M",
        "Literate Population": "1,290,000",
        "Density": "540 / km²"
      },
      chart: {
        type: 'line',
        label: 'Population Trend (Millions)',
        labels: ["2022", "2023", "2024", "2025", "2026"],
        data: [1.57, 1.58, 1.60, 1.61, 1.614],
        color: '#8b5cf6'
      }
    },
    agriculture: {
      val: "2.10 Lakh Ac",
      trend: "-1.2%",
      isPositive: false,
      stats: {
        "Net Sown Area": "210,000 Acres",
        "Major Crop": "Groundnut & Sugarcane",
        "Irrigated Area": "45%",
        "Soil Fertility Index": "Medium",
        "Organic Farming": "5.4%"
      },
      chart: {
        type: 'bar',
        label: 'Crop Distribution (%)',
        labels: ["Groundnut", "Sugarcane", "Paddy", "Pulses", "Millets"],
        data: [35, 25, 20, 12, 8],
        color: '#10b981'
      }
    },
    water: {
      val: "54.2 % Avg",
      trend: "-2.1%",
      isPositive: false,
      stats: {
        "Palar River flow": "Dry (Seasonal)",
        "Mordhana Dam": "58.2% Capacity",
        "Groundwater Level": "18.4m Below GL",
        "Daily Supply": "120 MLD",
        "Water Quality Index": "68 (Fair)"
      },
      chart: {
        type: 'bar',
        label: 'Reservoir Capacity (%)',
        labels: ["Mordhana Dam", "Palar Flow", "Groundwater"],
        data: [58.2, 10.0, 42.0],
        color: '#0284c7'
      }
    },
    rainfall: {
      val: "790 mm",
      trend: "-4.2%",
      isPositive: false,
      stats: {
        "Annual Rainfall": "790 mm",
        "Deficit/Surplus": "-4.2% Deficit",
        "Rainy Days": "42 Days",
        "Heavy Rainfall Alerts": "0 issued",
        "Recharge Volume": "72 Million m³"
      },
      chart: {
        type: 'line',
        label: 'Monthly Rainfall (mm)',
        labels: ["Jun", "Jul", "Aug", "Sep", "Oct", "Nov"],
        data: [28, 39, 58, 92, 260, 210],
        color: '#06b6d4'
      }
    },
    traffic: {
      val: "41.2k Peak",
      trend: "+4.2%",
      isPositive: false,
      stats: {
        "Registered Vehicles": "580,000",
        "Peak Traffic Vol": "41,200 vph",
        "Congestion Index": "4.8/10",
        "Average Speed": "28.4 km/h",
        "Active Signals": "62 units"
      },
      chart: {
        type: 'line',
        label: 'Peak Hour Congestion (Index)',
        labels: ["08:00", "12:00", "16:00", "18:00", "20:00"],
        data: [4.9, 3.2, 3.8, 5.8, 4.1],
        color: '#f43f5e'
      }
    },
    employment: {
      val: "4.6% Unemp",
      trend: "-0.3%",
      isPositive: true,
      stats: {
        "Labor Force": "740,000",
        "Unemployment Rate": "4.6%",
        "Leather & Tannery": "140,000 jobs",
        "Medical Services": "45,000 jobs",
        "Skill Index": "71/100"
      },
      chart: {
        type: 'doughnut',
        label: 'Sector Breakdown (%)',
        labels: ["Leather/Mfg", "Healthcare", "Agriculture", "Education", "Others"],
        data: [35, 20, 18, 15, 12],
        color: '#3b82f6'
      }
    },
    health: {
      val: "95.6 Score",
      trend: "+2.4%",
      isPositive: true,
      stats: {
        "Hospitals & Clinics": "240 (incl. CMC)",
        "Total Bed Capacity": "8,900 beds",
        "Avg Response Time": "9.4 mins",
        "Health Scheme Coverage": "89.2%",
        "Maternal Mortality": "0.03%"
      },
      chart: {
        type: 'bar',
        label: 'Bed Capacity by Specialty',
        labels: ["General", "Pediatric", "Maternity", "Cardiac", "Specialty"],
        data: [2500, 1400, 1000, 1200, 2800],
        color: '#ec4899'
      }
    },
    education: {
      val: "79.16 % Lit",
      trend: "+0.4%",
      isPositive: true,
      stats: {
        "Literacy Rate": "79.16%",
        "Primary Schools": "342",
        "Higher Sec Schools": "98",
        "Colleges & Univ": "24 (VIT/CMC)",
        "Pupil Teacher Ratio": "24:1"
      },
      chart: {
        type: 'line',
        label: 'Literacy Trend (%)',
        labels: ["2022", "2023", "2024", "2025", "2026"],
        data: [77.9, 78.2, 78.5, 78.9, 79.16],
        color: '#f59e0b'
      }
    }
  },
  thanjavur: {
    name: "Thanjavur",
    population: {
      val: "24.05 Lakh",
      trend: "+0.6%",
      isPositive: true,
      stats: {
        "Total Population": "2,405,890",
        "Growth Rate": "0.6% (Annual)",
        "Sex Ratio": "1021 F / 1000 M",
        "Literate Population": "1,980,000",
        "Density": "708 / km²"
      },
      chart: {
        type: 'line',
        label: 'Population Trend (Millions)',
        labels: ["2022", "2023", "2024", "2025", "2026"],
        data: [2.35, 2.36, 2.38, 2.39, 2.405],
        color: '#8b5cf6'
      }
    },
    agriculture: {
      val: "6.80 Lakh Ac",
      trend: "+3.2%",
      isPositive: true,
      stats: {
        "Net Sown Area": "680,000 Acres",
        "Major Crop": "Paddy (Rice Bowl)",
        "Irrigated Area": "92% (Cauvery Canal)",
        "Soil Fertility Index": "Extremely High",
        "Organic Farming": "16.4%"
      },
      chart: {
        type: 'bar',
        label: 'Crop Distribution (%)',
        labels: ["Paddy", "Sugarcane", "Pulses", "Coconut", "Banana"],
        data: [65, 12, 10, 8, 5],
        color: '#10b981'
      }
    },
    water: {
      val: "86.1 % Avg",
      trend: "+12.1%",
      isPositive: true,
      stats: {
        "Grand Anicut flow": "88.2% Capacity",
        "Vadavar Canal flow": "82.4% Capacity",
        "Groundwater Level": "8.4m Below GL",
        "Daily Supply": "150 MLD",
        "Water Quality Index": "84 (Good)"
      },
      chart: {
        type: 'bar',
        label: 'Reservoir Capacity (%)',
        labels: ["Grand Anicut", "Vadavar Canal", "Groundwater"],
        data: [88.2, 82.4, 70.0],
        color: '#0284c7'
      }
    },
    rainfall: {
      val: "940 mm",
      trend: "+3.1%",
      isPositive: true,
      stats: {
        "Annual Rainfall": "940 mm",
        "Deficit/Surplus": "+3.1% Surplus",
        "Rainy Days": "48 Days",
        "Heavy Rainfall Alerts": "2 issued",
        "Recharge Volume": "130 Million m³"
      },
      chart: {
        type: 'line',
        label: 'Monthly Rainfall (mm)',
        labels: ["Jun", "Jul", "Aug", "Sep", "Oct", "Nov"],
        data: [35, 49, 72, 118, 320, 280],
        color: '#06b6d4'
      }
    },
    traffic: {
      val: "28.5k Peak",
      trend: "+1.2%",
      isPositive: false,
      stats: {
        "Registered Vehicles": "410,000",
        "Peak Traffic Vol": "28,500 vph",
        "Congestion Index": "3.1/10",
        "Average Speed": "34.5 km/h",
        "Active Signals": "32 units"
      },
      chart: {
        type: 'line',
        label: 'Peak Hour Congestion (Index)',
        labels: ["08:00", "12:00", "16:00", "18:00", "20:00"],
        data: [3.4, 2.1, 2.8, 3.9, 2.7],
        color: '#f43f5e'
      }
    },
    employment: {
      val: "4.1% Unemp",
      trend: "-0.8%",
      isPositive: true,
      stats: {
        "Labor Force": "1,100,000",
        "Unemployment Rate": "4.1%",
        "Agro-Processing": "240,000 jobs",
        "Artisanal Crafts": "35,000 jobs",
        "Skill Index": "66/100"
      },
      chart: {
        type: 'doughnut',
        label: 'Sector Breakdown (%)',
        labels: ["Agriculture", "Agro-Processing", "Handicrafts/Art", "Tourism", "Others"],
        data: [42, 28, 12, 10, 8],
        color: '#3b82f6'
      }
    },
    health: {
      val: "88.4 Score",
      trend: "+1.0%",
      isPositive: true,
      stats: {
        "Hospitals & Clinics": "198",
        "Total Bed Capacity": "5,100 beds",
        "Avg Response Time": "16.2 mins",
        "Health Scheme Coverage": "82.1%",
        "Maternal Mortality": "0.05%"
      },
      chart: {
        type: 'bar',
        label: 'Bed Capacity by Specialty',
        labels: ["General", "Pediatric", "Maternity", "Cardiac", "Specialty"],
        data: [1800, 800, 700, 500, 1300],
        color: '#ec4899'
      }
    },
    education: {
      val: "82.72 % Lit",
      trend: "+0.5%",
      isPositive: true,
      stats: {
        "Literacy Rate": "82.72%",
        "Primary Schools": "480",
        "Higher Sec Schools": "142",
        "Colleges & Univ": "38",
        "Pupil Teacher Ratio": "24:1"
      },
      chart: {
        type: 'line',
        label: 'Literacy Trend (%)',
        labels: ["2022", "2023", "2024", "2025", "2026"],
        data: [80.9, 81.5, 81.9, 82.4, 82.72],
        color: '#f59e0b'
      }
    }
  }
,
  ariyalur: {
    name: "Ariyalur",
    population: {
      val: "13.64 Lakh",
      trend: "+1.2%",
      isPositive: true,
      stats: {
        "Total Population": "3,445,291",
        "Growth Rate": "1.2% (Annual)",
        "Sex Ratio": "1001 F / 1000 M",
        "Literate Population": "2,987,120",
        "Density": "748 / km²"
      },
      chart: {
        type: 'line',
        label: 'Population Trend (Millions)',
        labels: ["2022", "2023", "2024", "2025", "2026"],
        data: [3.28, 3.32, 3.36, 3.40, 3.44],
        color: '#8b5cf6'
      }
    },
    agriculture: {
      val: "4.82 Lakh Ac",
      trend: "-0.5%",
      isPositive: false,
      stats: {
        "Net Sown Area": "482,100 Acres",
        "Major Crop": "Coconut & Groundnut",
        "Irrigated Area": "62%",
        "Soil Fertility Index": "High",
        "Organic Farming": "18.2%"
      },
      chart: {
        type: 'bar',
        label: 'Crop Distribution (%)',
        labels: ["Coconut", "Groundnut", "Paddy", "Sugarcane", "Millets"],
        data: [45, 25, 15, 10, 5],
        color: '#10b981'
      }
    },
    water: {
      val: "78.4 % Avg",
      trend: "+14.8%",
      isPositive: true,
      stats: {
        "Siruvani Reservoir": "82.5% Capacity",
        "Pilloor Reservoir": "84.2% Capacity",
        "Groundwater Level": "12.4m Below GL",
        "Daily Supply": "240 MLD",
        "Water Quality Index": "88 (Excellent)"
      },
      chart: {
        type: 'bar',
        label: 'Reservoir Capacity (%)',
        labels: ["Siruvani", "Pilloor", "Aliyar", "Sholayar"],
        data: [82.5, 84.2, 72.0, 75.0],
        color: '#0284c7'
      }
    },
    rainfall: {
      val: "742 mm",
      trend: "+5.6%",
      isPositive: true,
      stats: {
        "Annual Rainfall": "742 mm",
        "Deficit/Surplus": "+5.6% Surplus",
        "Rainy Days": "54 Days",
        "Heavy Rainfall Alerts": "3 issued",
        "Recharge Volume": "184 Million m³"
      },
      chart: {
        type: 'line',
        label: 'Monthly Rainfall (mm)',
        labels: ["Jun", "Jul", "Aug", "Sep", "Oct", "Nov"],
        data: [45, 62, 85, 120, 240, 190],
        color: '#06b6d4'
      }
    },
    traffic: {
      val: "72.4k Peak",
      trend: "+8.3%",
      isPositive: false, // Traffic increase is negative
      stats: {
        "Registered Vehicles": "1,450,290",
        "Peak Traffic Vol": "72,400 vph",
        "Congestion Index": "6.2/10",
        "Average Speed": "22.4 km/h",
        "Active Signals": "142 units"
      },
      chart: {
        type: 'line',
        label: 'Peak Hour Congestion (Index)',
        labels: ["08:00", "12:00", "16:00", "18:00", "20:00"],
        data: [6.5, 4.5, 5.2, 7.8, 5.8],
        color: '#f43f5e'
      }
    },
    employment: {
      val: "4.2% Unemp",
      trend: "-0.8%",
      isPositive: true, // Unemployment decrease is positive
      stats: {
        "Labor Force": "1,820,000",
        "Unemployment Rate": "4.2%",
        "IT & Tech Sector": "48,000 jobs",
        "Manufacturing Sector": "320,000 jobs",
        "Skill Index": "72/100"
      },
      chart: {
        type: 'doughnut',
        label: 'Sector Breakdown (%)',
        labels: ["Mfg", "Services/IT", "Agri", "Textiles", "Others"],
        data: [32, 28, 15, 18, 7],
        color: '#3b82f6'
      }
    },
    health: {
      val: "94.2 Score",
      trend: "+2.1%",
      isPositive: true,
      stats: {
        "Hospitals & Clinics": "382",
        "Total Bed Capacity": "12,450 beds",
        "Avg Response Time": "11.4 mins",
        "Health Scheme Coverage": "88.4%",
        "Maternal Mortality": "0.04%"
      },
      chart: {
        type: 'bar',
        label: 'Bed Capacity by Specialty',
        labels: ["General", "Pediatric", "Maternity", "Cardiac", "Specialty"],
        data: [4000, 2000, 1500, 1200, 3750],
        color: '#ec4899'
      }
    },
    education: {
      val: "89.23 % Lit",
      trend: "+0.7%",
      isPositive: true,
      stats: {
        "Literacy Rate": "89.23%",
        "Primary Schools": "642",
        "Higher Sec Schools": "218",
        "Colleges & Univ": "84",
        "Pupil Teacher Ratio": "24:1"
      },
      chart: {
        type: 'line',
        label: 'Literacy Trend (%)',
        labels: ["2022", "2023", "2024", "2025", "2026"],
        data: [87.5, 88.0, 88.4, 88.9, 89.23],
        color: '#f59e0b'
      }
    }
  },
  chengalpattu: {
    name: "Chengalpattu",
    population: {
      val: "26.50 Lakh",
      trend: "+1.2%",
      isPositive: true,
      stats: {
        "Total Population": "3,445,291",
        "Growth Rate": "1.2% (Annual)",
        "Sex Ratio": "1001 F / 1000 M",
        "Literate Population": "2,987,120",
        "Density": "748 / km²"
      },
      chart: {
        type: 'line',
        label: 'Population Trend (Millions)',
        labels: ["2022", "2023", "2024", "2025", "2026"],
        data: [3.28, 3.32, 3.36, 3.40, 3.44],
        color: '#8b5cf6'
      }
    },
    agriculture: {
      val: "4.82 Lakh Ac",
      trend: "-0.5%",
      isPositive: false,
      stats: {
        "Net Sown Area": "482,100 Acres",
        "Major Crop": "Coconut & Groundnut",
        "Irrigated Area": "62%",
        "Soil Fertility Index": "High",
        "Organic Farming": "18.2%"
      },
      chart: {
        type: 'bar',
        label: 'Crop Distribution (%)',
        labels: ["Coconut", "Groundnut", "Paddy", "Sugarcane", "Millets"],
        data: [45, 25, 15, 10, 5],
        color: '#10b981'
      }
    },
    water: {
      val: "78.4 % Avg",
      trend: "+14.8%",
      isPositive: true,
      stats: {
        "Siruvani Reservoir": "82.5% Capacity",
        "Pilloor Reservoir": "84.2% Capacity",
        "Groundwater Level": "12.4m Below GL",
        "Daily Supply": "240 MLD",
        "Water Quality Index": "88 (Excellent)"
      },
      chart: {
        type: 'bar',
        label: 'Reservoir Capacity (%)',
        labels: ["Siruvani", "Pilloor", "Aliyar", "Sholayar"],
        data: [82.5, 84.2, 72.0, 75.0],
        color: '#0284c7'
      }
    },
    rainfall: {
      val: "742 mm",
      trend: "+5.6%",
      isPositive: true,
      stats: {
        "Annual Rainfall": "742 mm",
        "Deficit/Surplus": "+5.6% Surplus",
        "Rainy Days": "54 Days",
        "Heavy Rainfall Alerts": "3 issued",
        "Recharge Volume": "184 Million m³"
      },
      chart: {
        type: 'line',
        label: 'Monthly Rainfall (mm)',
        labels: ["Jun", "Jul", "Aug", "Sep", "Oct", "Nov"],
        data: [45, 62, 85, 120, 240, 190],
        color: '#06b6d4'
      }
    },
    traffic: {
      val: "72.4k Peak",
      trend: "+8.3%",
      isPositive: false, // Traffic increase is negative
      stats: {
        "Registered Vehicles": "1,450,290",
        "Peak Traffic Vol": "72,400 vph",
        "Congestion Index": "6.2/10",
        "Average Speed": "22.4 km/h",
        "Active Signals": "142 units"
      },
      chart: {
        type: 'line',
        label: 'Peak Hour Congestion (Index)',
        labels: ["08:00", "12:00", "16:00", "18:00", "20:00"],
        data: [6.5, 4.5, 5.2, 7.8, 5.8],
        color: '#f43f5e'
      }
    },
    employment: {
      val: "4.2% Unemp",
      trend: "-0.8%",
      isPositive: true, // Unemployment decrease is positive
      stats: {
        "Labor Force": "1,820,000",
        "Unemployment Rate": "4.2%",
        "IT & Tech Sector": "48,000 jobs",
        "Manufacturing Sector": "320,000 jobs",
        "Skill Index": "72/100"
      },
      chart: {
        type: 'doughnut',
        label: 'Sector Breakdown (%)',
        labels: ["Mfg", "Services/IT", "Agri", "Textiles", "Others"],
        data: [32, 28, 15, 18, 7],
        color: '#3b82f6'
      }
    },
    health: {
      val: "94.2 Score",
      trend: "+2.1%",
      isPositive: true,
      stats: {
        "Hospitals & Clinics": "382",
        "Total Bed Capacity": "12,450 beds",
        "Avg Response Time": "11.4 mins",
        "Health Scheme Coverage": "88.4%",
        "Maternal Mortality": "0.04%"
      },
      chart: {
        type: 'bar',
        label: 'Bed Capacity by Specialty',
        labels: ["General", "Pediatric", "Maternity", "Cardiac", "Specialty"],
        data: [4000, 2000, 1500, 1200, 3750],
        color: '#ec4899'
      }
    },
    education: {
      val: "89.23 % Lit",
      trend: "+0.7%",
      isPositive: true,
      stats: {
        "Literacy Rate": "89.23%",
        "Primary Schools": "642",
        "Higher Sec Schools": "218",
        "Colleges & Univ": "84",
        "Pupil Teacher Ratio": "24:1"
      },
      chart: {
        type: 'line',
        label: 'Literacy Trend (%)',
        labels: ["2022", "2023", "2024", "2025", "2026"],
        data: [87.5, 88.0, 88.4, 88.9, 89.23],
        color: '#f59e0b'
      }
    }
  },
  cuddalore: {
    name: "Cuddalore",
    population: {
      val: "21.41 Lakh",
      trend: "+1.2%",
      isPositive: true,
      stats: {
        "Total Population": "3,445,291",
        "Growth Rate": "1.2% (Annual)",
        "Sex Ratio": "1001 F / 1000 M",
        "Literate Population": "2,987,120",
        "Density": "748 / km²"
      },
      chart: {
        type: 'line',
        label: 'Population Trend (Millions)',
        labels: ["2022", "2023", "2024", "2025", "2026"],
        data: [3.28, 3.32, 3.36, 3.40, 3.44],
        color: '#8b5cf6'
      }
    },
    agriculture: {
      val: "4.82 Lakh Ac",
      trend: "-0.5%",
      isPositive: false,
      stats: {
        "Net Sown Area": "482,100 Acres",
        "Major Crop": "Coconut & Groundnut",
        "Irrigated Area": "62%",
        "Soil Fertility Index": "High",
        "Organic Farming": "18.2%"
      },
      chart: {
        type: 'bar',
        label: 'Crop Distribution (%)',
        labels: ["Coconut", "Groundnut", "Paddy", "Sugarcane", "Millets"],
        data: [45, 25, 15, 10, 5],
        color: '#10b981'
      }
    },
    water: {
      val: "78.4 % Avg",
      trend: "+14.8%",
      isPositive: true,
      stats: {
        "Siruvani Reservoir": "82.5% Capacity",
        "Pilloor Reservoir": "84.2% Capacity",
        "Groundwater Level": "12.4m Below GL",
        "Daily Supply": "240 MLD",
        "Water Quality Index": "88 (Excellent)"
      },
      chart: {
        type: 'bar',
        label: 'Reservoir Capacity (%)',
        labels: ["Siruvani", "Pilloor", "Aliyar", "Sholayar"],
        data: [82.5, 84.2, 72.0, 75.0],
        color: '#0284c7'
      }
    },
    rainfall: {
      val: "742 mm",
      trend: "+5.6%",
      isPositive: true,
      stats: {
        "Annual Rainfall": "742 mm",
        "Deficit/Surplus": "+5.6% Surplus",
        "Rainy Days": "54 Days",
        "Heavy Rainfall Alerts": "3 issued",
        "Recharge Volume": "184 Million m³"
      },
      chart: {
        type: 'line',
        label: 'Monthly Rainfall (mm)',
        labels: ["Jun", "Jul", "Aug", "Sep", "Oct", "Nov"],
        data: [45, 62, 85, 120, 240, 190],
        color: '#06b6d4'
      }
    },
    traffic: {
      val: "72.4k Peak",
      trend: "+8.3%",
      isPositive: false, // Traffic increase is negative
      stats: {
        "Registered Vehicles": "1,450,290",
        "Peak Traffic Vol": "72,400 vph",
        "Congestion Index": "6.2/10",
        "Average Speed": "22.4 km/h",
        "Active Signals": "142 units"
      },
      chart: {
        type: 'line',
        label: 'Peak Hour Congestion (Index)',
        labels: ["08:00", "12:00", "16:00", "18:00", "20:00"],
        data: [6.5, 4.5, 5.2, 7.8, 5.8],
        color: '#f43f5e'
      }
    },
    employment: {
      val: "4.2% Unemp",
      trend: "-0.8%",
      isPositive: true, // Unemployment decrease is positive
      stats: {
        "Labor Force": "1,820,000",
        "Unemployment Rate": "4.2%",
        "IT & Tech Sector": "48,000 jobs",
        "Manufacturing Sector": "320,000 jobs",
        "Skill Index": "72/100"
      },
      chart: {
        type: 'doughnut',
        label: 'Sector Breakdown (%)',
        labels: ["Mfg", "Services/IT", "Agri", "Textiles", "Others"],
        data: [32, 28, 15, 18, 7],
        color: '#3b82f6'
      }
    },
    health: {
      val: "94.2 Score",
      trend: "+2.1%",
      isPositive: true,
      stats: {
        "Hospitals & Clinics": "382",
        "Total Bed Capacity": "12,450 beds",
        "Avg Response Time": "11.4 mins",
        "Health Scheme Coverage": "88.4%",
        "Maternal Mortality": "0.04%"
      },
      chart: {
        type: 'bar',
        label: 'Bed Capacity by Specialty',
        labels: ["General", "Pediatric", "Maternity", "Cardiac", "Specialty"],
        data: [4000, 2000, 1500, 1200, 3750],
        color: '#ec4899'
      }
    },
    education: {
      val: "89.23 % Lit",
      trend: "+0.7%",
      isPositive: true,
      stats: {
        "Literacy Rate": "89.23%",
        "Primary Schools": "642",
        "Higher Sec Schools": "218",
        "Colleges & Univ": "84",
        "Pupil Teacher Ratio": "24:1"
      },
      chart: {
        type: 'line',
        label: 'Literacy Trend (%)',
        labels: ["2022", "2023", "2024", "2025", "2026"],
        data: [87.5, 88.0, 88.4, 88.9, 89.23],
        color: '#f59e0b'
      }
    }
  },
  dharmapuri: {
    name: "Dharmapuri",
    population: {
      val: "25.60 Lakh",
      trend: "+1.2%",
      isPositive: true,
      stats: {
        "Total Population": "3,445,291",
        "Growth Rate": "1.2% (Annual)",
        "Sex Ratio": "1001 F / 1000 M",
        "Literate Population": "2,987,120",
        "Density": "748 / km²"
      },
      chart: {
        type: 'line',
        label: 'Population Trend (Millions)',
        labels: ["2022", "2023", "2024", "2025", "2026"],
        data: [3.28, 3.32, 3.36, 3.40, 3.44],
        color: '#8b5cf6'
      }
    },
    agriculture: {
      val: "4.82 Lakh Ac",
      trend: "-0.5%",
      isPositive: false,
      stats: {
        "Net Sown Area": "482,100 Acres",
        "Major Crop": "Coconut & Groundnut",
        "Irrigated Area": "62%",
        "Soil Fertility Index": "High",
        "Organic Farming": "18.2%"
      },
      chart: {
        type: 'bar',
        label: 'Crop Distribution (%)',
        labels: ["Coconut", "Groundnut", "Paddy", "Sugarcane", "Millets"],
        data: [45, 25, 15, 10, 5],
        color: '#10b981'
      }
    },
    water: {
      val: "78.4 % Avg",
      trend: "+14.8%",
      isPositive: true,
      stats: {
        "Siruvani Reservoir": "82.5% Capacity",
        "Pilloor Reservoir": "84.2% Capacity",
        "Groundwater Level": "12.4m Below GL",
        "Daily Supply": "240 MLD",
        "Water Quality Index": "88 (Excellent)"
      },
      chart: {
        type: 'bar',
        label: 'Reservoir Capacity (%)',
        labels: ["Siruvani", "Pilloor", "Aliyar", "Sholayar"],
        data: [82.5, 84.2, 72.0, 75.0],
        color: '#0284c7'
      }
    },
    rainfall: {
      val: "742 mm",
      trend: "+5.6%",
      isPositive: true,
      stats: {
        "Annual Rainfall": "742 mm",
        "Deficit/Surplus": "+5.6% Surplus",
        "Rainy Days": "54 Days",
        "Heavy Rainfall Alerts": "3 issued",
        "Recharge Volume": "184 Million m³"
      },
      chart: {
        type: 'line',
        label: 'Monthly Rainfall (mm)',
        labels: ["Jun", "Jul", "Aug", "Sep", "Oct", "Nov"],
        data: [45, 62, 85, 120, 240, 190],
        color: '#06b6d4'
      }
    },
    traffic: {
      val: "72.4k Peak",
      trend: "+8.3%",
      isPositive: false, // Traffic increase is negative
      stats: {
        "Registered Vehicles": "1,450,290",
        "Peak Traffic Vol": "72,400 vph",
        "Congestion Index": "6.2/10",
        "Average Speed": "22.4 km/h",
        "Active Signals": "142 units"
      },
      chart: {
        type: 'line',
        label: 'Peak Hour Congestion (Index)',
        labels: ["08:00", "12:00", "16:00", "18:00", "20:00"],
        data: [6.5, 4.5, 5.2, 7.8, 5.8],
        color: '#f43f5e'
      }
    },
    employment: {
      val: "4.2% Unemp",
      trend: "-0.8%",
      isPositive: true, // Unemployment decrease is positive
      stats: {
        "Labor Force": "1,820,000",
        "Unemployment Rate": "4.2%",
        "IT & Tech Sector": "48,000 jobs",
        "Manufacturing Sector": "320,000 jobs",
        "Skill Index": "72/100"
      },
      chart: {
        type: 'doughnut',
        label: 'Sector Breakdown (%)',
        labels: ["Mfg", "Services/IT", "Agri", "Textiles", "Others"],
        data: [32, 28, 15, 18, 7],
        color: '#3b82f6'
      }
    },
    health: {
      val: "94.2 Score",
      trend: "+2.1%",
      isPositive: true,
      stats: {
        "Hospitals & Clinics": "382",
        "Total Bed Capacity": "12,450 beds",
        "Avg Response Time": "11.4 mins",
        "Health Scheme Coverage": "88.4%",
        "Maternal Mortality": "0.04%"
      },
      chart: {
        type: 'bar',
        label: 'Bed Capacity by Specialty',
        labels: ["General", "Pediatric", "Maternity", "Cardiac", "Specialty"],
        data: [4000, 2000, 1500, 1200, 3750],
        color: '#ec4899'
      }
    },
    education: {
      val: "89.23 % Lit",
      trend: "+0.7%",
      isPositive: true,
      stats: {
        "Literacy Rate": "89.23%",
        "Primary Schools": "642",
        "Higher Sec Schools": "218",
        "Colleges & Univ": "84",
        "Pupil Teacher Ratio": "24:1"
      },
      chart: {
        type: 'line',
        label: 'Literacy Trend (%)',
        labels: ["2022", "2023", "2024", "2025", "2026"],
        data: [87.5, 88.0, 88.4, 88.9, 89.23],
        color: '#f59e0b'
      }
    }
  },
  dindigul: {
    name: "Dindigul",
    population: {
      val: "25.52 Lakh",
      trend: "+1.2%",
      isPositive: true,
      stats: {
        "Total Population": "3,445,291",
        "Growth Rate": "1.2% (Annual)",
        "Sex Ratio": "1001 F / 1000 M",
        "Literate Population": "2,987,120",
        "Density": "748 / km²"
      },
      chart: {
        type: 'line',
        label: 'Population Trend (Millions)',
        labels: ["2022", "2023", "2024", "2025", "2026"],
        data: [3.28, 3.32, 3.36, 3.40, 3.44],
        color: '#8b5cf6'
      }
    },
    agriculture: {
      val: "4.82 Lakh Ac",
      trend: "-0.5%",
      isPositive: false,
      stats: {
        "Net Sown Area": "482,100 Acres",
        "Major Crop": "Coconut & Groundnut",
        "Irrigated Area": "62%",
        "Soil Fertility Index": "High",
        "Organic Farming": "18.2%"
      },
      chart: {
        type: 'bar',
        label: 'Crop Distribution (%)',
        labels: ["Coconut", "Groundnut", "Paddy", "Sugarcane", "Millets"],
        data: [45, 25, 15, 10, 5],
        color: '#10b981'
      }
    },
    water: {
      val: "78.4 % Avg",
      trend: "+14.8%",
      isPositive: true,
      stats: {
        "Siruvani Reservoir": "82.5% Capacity",
        "Pilloor Reservoir": "84.2% Capacity",
        "Groundwater Level": "12.4m Below GL",
        "Daily Supply": "240 MLD",
        "Water Quality Index": "88 (Excellent)"
      },
      chart: {
        type: 'bar',
        label: 'Reservoir Capacity (%)',
        labels: ["Siruvani", "Pilloor", "Aliyar", "Sholayar"],
        data: [82.5, 84.2, 72.0, 75.0],
        color: '#0284c7'
      }
    },
    rainfall: {
      val: "742 mm",
      trend: "+5.6%",
      isPositive: true,
      stats: {
        "Annual Rainfall": "742 mm",
        "Deficit/Surplus": "+5.6% Surplus",
        "Rainy Days": "54 Days",
        "Heavy Rainfall Alerts": "3 issued",
        "Recharge Volume": "184 Million m³"
      },
      chart: {
        type: 'line',
        label: 'Monthly Rainfall (mm)',
        labels: ["Jun", "Jul", "Aug", "Sep", "Oct", "Nov"],
        data: [45, 62, 85, 120, 240, 190],
        color: '#06b6d4'
      }
    },
    traffic: {
      val: "72.4k Peak",
      trend: "+8.3%",
      isPositive: false, // Traffic increase is negative
      stats: {
        "Registered Vehicles": "1,450,290",
        "Peak Traffic Vol": "72,400 vph",
        "Congestion Index": "6.2/10",
        "Average Speed": "22.4 km/h",
        "Active Signals": "142 units"
      },
      chart: {
        type: 'line',
        label: 'Peak Hour Congestion (Index)',
        labels: ["08:00", "12:00", "16:00", "18:00", "20:00"],
        data: [6.5, 4.5, 5.2, 7.8, 5.8],
        color: '#f43f5e'
      }
    },
    employment: {
      val: "4.2% Unemp",
      trend: "-0.8%",
      isPositive: true, // Unemployment decrease is positive
      stats: {
        "Labor Force": "1,820,000",
        "Unemployment Rate": "4.2%",
        "IT & Tech Sector": "48,000 jobs",
        "Manufacturing Sector": "320,000 jobs",
        "Skill Index": "72/100"
      },
      chart: {
        type: 'doughnut',
        label: 'Sector Breakdown (%)',
        labels: ["Mfg", "Services/IT", "Agri", "Textiles", "Others"],
        data: [32, 28, 15, 18, 7],
        color: '#3b82f6'
      }
    },
    health: {
      val: "94.2 Score",
      trend: "+2.1%",
      isPositive: true,
      stats: {
        "Hospitals & Clinics": "382",
        "Total Bed Capacity": "12,450 beds",
        "Avg Response Time": "11.4 mins",
        "Health Scheme Coverage": "88.4%",
        "Maternal Mortality": "0.04%"
      },
      chart: {
        type: 'bar',
        label: 'Bed Capacity by Specialty',
        labels: ["General", "Pediatric", "Maternity", "Cardiac", "Specialty"],
        data: [4000, 2000, 1500, 1200, 3750],
        color: '#ec4899'
      }
    },
    education: {
      val: "89.23 % Lit",
      trend: "+0.7%",
      isPositive: true,
      stats: {
        "Literacy Rate": "89.23%",
        "Primary Schools": "642",
        "Higher Sec Schools": "218",
        "Colleges & Univ": "84",
        "Pupil Teacher Ratio": "24:1"
      },
      chart: {
        type: 'line',
        label: 'Literacy Trend (%)',
        labels: ["2022", "2023", "2024", "2025", "2026"],
        data: [87.5, 88.0, 88.4, 88.9, 89.23],
        color: '#f59e0b'
      }
    }
  },
  erode: {
    name: "Erode",
    population: {
      val: "25.08 Lakh",
      trend: "+1.2%",
      isPositive: true,
      stats: {
        "Total Population": "3,445,291",
        "Growth Rate": "1.2% (Annual)",
        "Sex Ratio": "1001 F / 1000 M",
        "Literate Population": "2,987,120",
        "Density": "748 / km²"
      },
      chart: {
        type: 'line',
        label: 'Population Trend (Millions)',
        labels: ["2022", "2023", "2024", "2025", "2026"],
        data: [3.28, 3.32, 3.36, 3.40, 3.44],
        color: '#8b5cf6'
      }
    },
    agriculture: {
      val: "4.82 Lakh Ac",
      trend: "-0.5%",
      isPositive: false,
      stats: {
        "Net Sown Area": "482,100 Acres",
        "Major Crop": "Coconut & Groundnut",
        "Irrigated Area": "62%",
        "Soil Fertility Index": "High",
        "Organic Farming": "18.2%"
      },
      chart: {
        type: 'bar',
        label: 'Crop Distribution (%)',
        labels: ["Coconut", "Groundnut", "Paddy", "Sugarcane", "Millets"],
        data: [45, 25, 15, 10, 5],
        color: '#10b981'
      }
    },
    water: {
      val: "78.4 % Avg",
      trend: "+14.8%",
      isPositive: true,
      stats: {
        "Siruvani Reservoir": "82.5% Capacity",
        "Pilloor Reservoir": "84.2% Capacity",
        "Groundwater Level": "12.4m Below GL",
        "Daily Supply": "240 MLD",
        "Water Quality Index": "88 (Excellent)"
      },
      chart: {
        type: 'bar',
        label: 'Reservoir Capacity (%)',
        labels: ["Siruvani", "Pilloor", "Aliyar", "Sholayar"],
        data: [82.5, 84.2, 72.0, 75.0],
        color: '#0284c7'
      }
    },
    rainfall: {
      val: "742 mm",
      trend: "+5.6%",
      isPositive: true,
      stats: {
        "Annual Rainfall": "742 mm",
        "Deficit/Surplus": "+5.6% Surplus",
        "Rainy Days": "54 Days",
        "Heavy Rainfall Alerts": "3 issued",
        "Recharge Volume": "184 Million m³"
      },
      chart: {
        type: 'line',
        label: 'Monthly Rainfall (mm)',
        labels: ["Jun", "Jul", "Aug", "Sep", "Oct", "Nov"],
        data: [45, 62, 85, 120, 240, 190],
        color: '#06b6d4'
      }
    },
    traffic: {
      val: "72.4k Peak",
      trend: "+8.3%",
      isPositive: false, // Traffic increase is negative
      stats: {
        "Registered Vehicles": "1,450,290",
        "Peak Traffic Vol": "72,400 vph",
        "Congestion Index": "6.2/10",
        "Average Speed": "22.4 km/h",
        "Active Signals": "142 units"
      },
      chart: {
        type: 'line',
        label: 'Peak Hour Congestion (Index)',
        labels: ["08:00", "12:00", "16:00", "18:00", "20:00"],
        data: [6.5, 4.5, 5.2, 7.8, 5.8],
        color: '#f43f5e'
      }
    },
    employment: {
      val: "4.2% Unemp",
      trend: "-0.8%",
      isPositive: true, // Unemployment decrease is positive
      stats: {
        "Labor Force": "1,820,000",
        "Unemployment Rate": "4.2%",
        "IT & Tech Sector": "48,000 jobs",
        "Manufacturing Sector": "320,000 jobs",
        "Skill Index": "72/100"
      },
      chart: {
        type: 'doughnut',
        label: 'Sector Breakdown (%)',
        labels: ["Mfg", "Services/IT", "Agri", "Textiles", "Others"],
        data: [32, 28, 15, 18, 7],
        color: '#3b82f6'
      }
    },
    health: {
      val: "94.2 Score",
      trend: "+2.1%",
      isPositive: true,
      stats: {
        "Hospitals & Clinics": "382",
        "Total Bed Capacity": "12,450 beds",
        "Avg Response Time": "11.4 mins",
        "Health Scheme Coverage": "88.4%",
        "Maternal Mortality": "0.04%"
      },
      chart: {
        type: 'bar',
        label: 'Bed Capacity by Specialty',
        labels: ["General", "Pediatric", "Maternity", "Cardiac", "Specialty"],
        data: [4000, 2000, 1500, 1200, 3750],
        color: '#ec4899'
      }
    },
    education: {
      val: "89.23 % Lit",
      trend: "+0.7%",
      isPositive: true,
      stats: {
        "Literacy Rate": "89.23%",
        "Primary Schools": "642",
        "Higher Sec Schools": "218",
        "Colleges & Univ": "84",
        "Pupil Teacher Ratio": "24:1"
      },
      chart: {
        type: 'line',
        label: 'Literacy Trend (%)',
        labels: ["2022", "2023", "2024", "2025", "2026"],
        data: [87.5, 88.0, 88.4, 88.9, 89.23],
        color: '#f59e0b'
      }
    }
  },
  kallakurichi: {
    name: "Kallakurichi",
    population: {
      val: "25.00 Lakh",
      trend: "+1.2%",
      isPositive: true,
      stats: {
        "Total Population": "3,445,291",
        "Growth Rate": "1.2% (Annual)",
        "Sex Ratio": "1001 F / 1000 M",
        "Literate Population": "2,987,120",
        "Density": "748 / km²"
      },
      chart: {
        type: 'line',
        label: 'Population Trend (Millions)',
        labels: ["2022", "2023", "2024", "2025", "2026"],
        data: [3.28, 3.32, 3.36, 3.40, 3.44],
        color: '#8b5cf6'
      }
    },
    agriculture: {
      val: "4.82 Lakh Ac",
      trend: "-0.5%",
      isPositive: false,
      stats: {
        "Net Sown Area": "482,100 Acres",
        "Major Crop": "Coconut & Groundnut",
        "Irrigated Area": "62%",
        "Soil Fertility Index": "High",
        "Organic Farming": "18.2%"
      },
      chart: {
        type: 'bar',
        label: 'Crop Distribution (%)',
        labels: ["Coconut", "Groundnut", "Paddy", "Sugarcane", "Millets"],
        data: [45, 25, 15, 10, 5],
        color: '#10b981'
      }
    },
    water: {
      val: "78.4 % Avg",
      trend: "+14.8%",
      isPositive: true,
      stats: {
        "Siruvani Reservoir": "82.5% Capacity",
        "Pilloor Reservoir": "84.2% Capacity",
        "Groundwater Level": "12.4m Below GL",
        "Daily Supply": "240 MLD",
        "Water Quality Index": "88 (Excellent)"
      },
      chart: {
        type: 'bar',
        label: 'Reservoir Capacity (%)',
        labels: ["Siruvani", "Pilloor", "Aliyar", "Sholayar"],
        data: [82.5, 84.2, 72.0, 75.0],
        color: '#0284c7'
      }
    },
    rainfall: {
      val: "742 mm",
      trend: "+5.6%",
      isPositive: true,
      stats: {
        "Annual Rainfall": "742 mm",
        "Deficit/Surplus": "+5.6% Surplus",
        "Rainy Days": "54 Days",
        "Heavy Rainfall Alerts": "3 issued",
        "Recharge Volume": "184 Million m³"
      },
      chart: {
        type: 'line',
        label: 'Monthly Rainfall (mm)',
        labels: ["Jun", "Jul", "Aug", "Sep", "Oct", "Nov"],
        data: [45, 62, 85, 120, 240, 190],
        color: '#06b6d4'
      }
    },
    traffic: {
      val: "72.4k Peak",
      trend: "+8.3%",
      isPositive: false, // Traffic increase is negative
      stats: {
        "Registered Vehicles": "1,450,290",
        "Peak Traffic Vol": "72,400 vph",
        "Congestion Index": "6.2/10",
        "Average Speed": "22.4 km/h",
        "Active Signals": "142 units"
      },
      chart: {
        type: 'line',
        label: 'Peak Hour Congestion (Index)',
        labels: ["08:00", "12:00", "16:00", "18:00", "20:00"],
        data: [6.5, 4.5, 5.2, 7.8, 5.8],
        color: '#f43f5e'
      }
    },
    employment: {
      val: "4.2% Unemp",
      trend: "-0.8%",
      isPositive: true, // Unemployment decrease is positive
      stats: {
        "Labor Force": "1,820,000",
        "Unemployment Rate": "4.2%",
        "IT & Tech Sector": "48,000 jobs",
        "Manufacturing Sector": "320,000 jobs",
        "Skill Index": "72/100"
      },
      chart: {
        type: 'doughnut',
        label: 'Sector Breakdown (%)',
        labels: ["Mfg", "Services/IT", "Agri", "Textiles", "Others"],
        data: [32, 28, 15, 18, 7],
        color: '#3b82f6'
      }
    },
    health: {
      val: "94.2 Score",
      trend: "+2.1%",
      isPositive: true,
      stats: {
        "Hospitals & Clinics": "382",
        "Total Bed Capacity": "12,450 beds",
        "Avg Response Time": "11.4 mins",
        "Health Scheme Coverage": "88.4%",
        "Maternal Mortality": "0.04%"
      },
      chart: {
        type: 'bar',
        label: 'Bed Capacity by Specialty',
        labels: ["General", "Pediatric", "Maternity", "Cardiac", "Specialty"],
        data: [4000, 2000, 1500, 1200, 3750],
        color: '#ec4899'
      }
    },
    education: {
      val: "89.23 % Lit",
      trend: "+0.7%",
      isPositive: true,
      stats: {
        "Literacy Rate": "89.23%",
        "Primary Schools": "642",
        "Higher Sec Schools": "218",
        "Colleges & Univ": "84",
        "Pupil Teacher Ratio": "24:1"
      },
      chart: {
        type: 'line',
        label: 'Literacy Trend (%)',
        labels: ["2022", "2023", "2024", "2025", "2026"],
        data: [87.5, 88.0, 88.4, 88.9, 89.23],
        color: '#f59e0b'
      }
    }
  },
  kanchipuram: {
    name: "Kanchipuram",
    population: {
      val: "12.25 Lakh",
      trend: "+1.2%",
      isPositive: true,
      stats: {
        "Total Population": "3,445,291",
        "Growth Rate": "1.2% (Annual)",
        "Sex Ratio": "1001 F / 1000 M",
        "Literate Population": "2,987,120",
        "Density": "748 / km²"
      },
      chart: {
        type: 'line',
        label: 'Population Trend (Millions)',
        labels: ["2022", "2023", "2024", "2025", "2026"],
        data: [3.28, 3.32, 3.36, 3.40, 3.44],
        color: '#8b5cf6'
      }
    },
    agriculture: {
      val: "4.82 Lakh Ac",
      trend: "-0.5%",
      isPositive: false,
      stats: {
        "Net Sown Area": "482,100 Acres",
        "Major Crop": "Coconut & Groundnut",
        "Irrigated Area": "62%",
        "Soil Fertility Index": "High",
        "Organic Farming": "18.2%"
      },
      chart: {
        type: 'bar',
        label: 'Crop Distribution (%)',
        labels: ["Coconut", "Groundnut", "Paddy", "Sugarcane", "Millets"],
        data: [45, 25, 15, 10, 5],
        color: '#10b981'
      }
    },
    water: {
      val: "78.4 % Avg",
      trend: "+14.8%",
      isPositive: true,
      stats: {
        "Siruvani Reservoir": "82.5% Capacity",
        "Pilloor Reservoir": "84.2% Capacity",
        "Groundwater Level": "12.4m Below GL",
        "Daily Supply": "240 MLD",
        "Water Quality Index": "88 (Excellent)"
      },
      chart: {
        type: 'bar',
        label: 'Reservoir Capacity (%)',
        labels: ["Siruvani", "Pilloor", "Aliyar", "Sholayar"],
        data: [82.5, 84.2, 72.0, 75.0],
        color: '#0284c7'
      }
    },
    rainfall: {
      val: "742 mm",
      trend: "+5.6%",
      isPositive: true,
      stats: {
        "Annual Rainfall": "742 mm",
        "Deficit/Surplus": "+5.6% Surplus",
        "Rainy Days": "54 Days",
        "Heavy Rainfall Alerts": "3 issued",
        "Recharge Volume": "184 Million m³"
      },
      chart: {
        type: 'line',
        label: 'Monthly Rainfall (mm)',
        labels: ["Jun", "Jul", "Aug", "Sep", "Oct", "Nov"],
        data: [45, 62, 85, 120, 240, 190],
        color: '#06b6d4'
      }
    },
    traffic: {
      val: "72.4k Peak",
      trend: "+8.3%",
      isPositive: false, // Traffic increase is negative
      stats: {
        "Registered Vehicles": "1,450,290",
        "Peak Traffic Vol": "72,400 vph",
        "Congestion Index": "6.2/10",
        "Average Speed": "22.4 km/h",
        "Active Signals": "142 units"
      },
      chart: {
        type: 'line',
        label: 'Peak Hour Congestion (Index)',
        labels: ["08:00", "12:00", "16:00", "18:00", "20:00"],
        data: [6.5, 4.5, 5.2, 7.8, 5.8],
        color: '#f43f5e'
      }
    },
    employment: {
      val: "4.2% Unemp",
      trend: "-0.8%",
      isPositive: true, // Unemployment decrease is positive
      stats: {
        "Labor Force": "1,820,000",
        "Unemployment Rate": "4.2%",
        "IT & Tech Sector": "48,000 jobs",
        "Manufacturing Sector": "320,000 jobs",
        "Skill Index": "72/100"
      },
      chart: {
        type: 'doughnut',
        label: 'Sector Breakdown (%)',
        labels: ["Mfg", "Services/IT", "Agri", "Textiles", "Others"],
        data: [32, 28, 15, 18, 7],
        color: '#3b82f6'
      }
    },
    health: {
      val: "94.2 Score",
      trend: "+2.1%",
      isPositive: true,
      stats: {
        "Hospitals & Clinics": "382",
        "Total Bed Capacity": "12,450 beds",
        "Avg Response Time": "11.4 mins",
        "Health Scheme Coverage": "88.4%",
        "Maternal Mortality": "0.04%"
      },
      chart: {
        type: 'bar',
        label: 'Bed Capacity by Specialty',
        labels: ["General", "Pediatric", "Maternity", "Cardiac", "Specialty"],
        data: [4000, 2000, 1500, 1200, 3750],
        color: '#ec4899'
      }
    },
    education: {
      val: "89.23 % Lit",
      trend: "+0.7%",
      isPositive: true,
      stats: {
        "Literacy Rate": "89.23%",
        "Primary Schools": "642",
        "Higher Sec Schools": "218",
        "Colleges & Univ": "84",
        "Pupil Teacher Ratio": "24:1"
      },
      chart: {
        type: 'line',
        label: 'Literacy Trend (%)',
        labels: ["2022", "2023", "2024", "2025", "2026"],
        data: [87.5, 88.0, 88.4, 88.9, 89.23],
        color: '#f59e0b'
      }
    }
  },
  kanyakumari: {
    name: "Kanyakumari",
    population: {
      val: "15.77 Lakh",
      trend: "+1.2%",
      isPositive: true,
      stats: {
        "Total Population": "3,445,291",
        "Growth Rate": "1.2% (Annual)",
        "Sex Ratio": "1001 F / 1000 M",
        "Literate Population": "2,987,120",
        "Density": "748 / km²"
      },
      chart: {
        type: 'line',
        label: 'Population Trend (Millions)',
        labels: ["2022", "2023", "2024", "2025", "2026"],
        data: [3.28, 3.32, 3.36, 3.40, 3.44],
        color: '#8b5cf6'
      }
    },
    agriculture: {
      val: "4.82 Lakh Ac",
      trend: "-0.5%",
      isPositive: false,
      stats: {
        "Net Sown Area": "482,100 Acres",
        "Major Crop": "Coconut & Groundnut",
        "Irrigated Area": "62%",
        "Soil Fertility Index": "High",
        "Organic Farming": "18.2%"
      },
      chart: {
        type: 'bar',
        label: 'Crop Distribution (%)',
        labels: ["Coconut", "Groundnut", "Paddy", "Sugarcane", "Millets"],
        data: [45, 25, 15, 10, 5],
        color: '#10b981'
      }
    },
    water: {
      val: "78.4 % Avg",
      trend: "+14.8%",
      isPositive: true,
      stats: {
        "Siruvani Reservoir": "82.5% Capacity",
        "Pilloor Reservoir": "84.2% Capacity",
        "Groundwater Level": "12.4m Below GL",
        "Daily Supply": "240 MLD",
        "Water Quality Index": "88 (Excellent)"
      },
      chart: {
        type: 'bar',
        label: 'Reservoir Capacity (%)',
        labels: ["Siruvani", "Pilloor", "Aliyar", "Sholayar"],
        data: [82.5, 84.2, 72.0, 75.0],
        color: '#0284c7'
      }
    },
    rainfall: {
      val: "742 mm",
      trend: "+5.6%",
      isPositive: true,
      stats: {
        "Annual Rainfall": "742 mm",
        "Deficit/Surplus": "+5.6% Surplus",
        "Rainy Days": "54 Days",
        "Heavy Rainfall Alerts": "3 issued",
        "Recharge Volume": "184 Million m³"
      },
      chart: {
        type: 'line',
        label: 'Monthly Rainfall (mm)',
        labels: ["Jun", "Jul", "Aug", "Sep", "Oct", "Nov"],
        data: [45, 62, 85, 120, 240, 190],
        color: '#06b6d4'
      }
    },
    traffic: {
      val: "72.4k Peak",
      trend: "+8.3%",
      isPositive: false, // Traffic increase is negative
      stats: {
        "Registered Vehicles": "1,450,290",
        "Peak Traffic Vol": "72,400 vph",
        "Congestion Index": "6.2/10",
        "Average Speed": "22.4 km/h",
        "Active Signals": "142 units"
      },
      chart: {
        type: 'line',
        label: 'Peak Hour Congestion (Index)',
        labels: ["08:00", "12:00", "16:00", "18:00", "20:00"],
        data: [6.5, 4.5, 5.2, 7.8, 5.8],
        color: '#f43f5e'
      }
    },
    employment: {
      val: "4.2% Unemp",
      trend: "-0.8%",
      isPositive: true, // Unemployment decrease is positive
      stats: {
        "Labor Force": "1,820,000",
        "Unemployment Rate": "4.2%",
        "IT & Tech Sector": "48,000 jobs",
        "Manufacturing Sector": "320,000 jobs",
        "Skill Index": "72/100"
      },
      chart: {
        type: 'doughnut',
        label: 'Sector Breakdown (%)',
        labels: ["Mfg", "Services/IT", "Agri", "Textiles", "Others"],
        data: [32, 28, 15, 18, 7],
        color: '#3b82f6'
      }
    },
    health: {
      val: "94.2 Score",
      trend: "+2.1%",
      isPositive: true,
      stats: {
        "Hospitals & Clinics": "382",
        "Total Bed Capacity": "12,450 beds",
        "Avg Response Time": "11.4 mins",
        "Health Scheme Coverage": "88.4%",
        "Maternal Mortality": "0.04%"
      },
      chart: {
        type: 'bar',
        label: 'Bed Capacity by Specialty',
        labels: ["General", "Pediatric", "Maternity", "Cardiac", "Specialty"],
        data: [4000, 2000, 1500, 1200, 3750],
        color: '#ec4899'
      }
    },
    education: {
      val: "89.23 % Lit",
      trend: "+0.7%",
      isPositive: true,
      stats: {
        "Literacy Rate": "89.23%",
        "Primary Schools": "642",
        "Higher Sec Schools": "218",
        "Colleges & Univ": "84",
        "Pupil Teacher Ratio": "24:1"
      },
      chart: {
        type: 'line',
        label: 'Literacy Trend (%)',
        labels: ["2022", "2023", "2024", "2025", "2026"],
        data: [87.5, 88.0, 88.4, 88.9, 89.23],
        color: '#f59e0b'
      }
    }
  },
  karur: {
    name: "Karur",
    population: {
      val: "27.26 Lakh",
      trend: "+1.2%",
      isPositive: true,
      stats: {
        "Total Population": "3,445,291",
        "Growth Rate": "1.2% (Annual)",
        "Sex Ratio": "1001 F / 1000 M",
        "Literate Population": "2,987,120",
        "Density": "748 / km²"
      },
      chart: {
        type: 'line',
        label: 'Population Trend (Millions)',
        labels: ["2022", "2023", "2024", "2025", "2026"],
        data: [3.28, 3.32, 3.36, 3.40, 3.44],
        color: '#8b5cf6'
      }
    },
    agriculture: {
      val: "4.82 Lakh Ac",
      trend: "-0.5%",
      isPositive: false,
      stats: {
        "Net Sown Area": "482,100 Acres",
        "Major Crop": "Coconut & Groundnut",
        "Irrigated Area": "62%",
        "Soil Fertility Index": "High",
        "Organic Farming": "18.2%"
      },
      chart: {
        type: 'bar',
        label: 'Crop Distribution (%)',
        labels: ["Coconut", "Groundnut", "Paddy", "Sugarcane", "Millets"],
        data: [45, 25, 15, 10, 5],
        color: '#10b981'
      }
    },
    water: {
      val: "78.4 % Avg",
      trend: "+14.8%",
      isPositive: true,
      stats: {
        "Siruvani Reservoir": "82.5% Capacity",
        "Pilloor Reservoir": "84.2% Capacity",
        "Groundwater Level": "12.4m Below GL",
        "Daily Supply": "240 MLD",
        "Water Quality Index": "88 (Excellent)"
      },
      chart: {
        type: 'bar',
        label: 'Reservoir Capacity (%)',
        labels: ["Siruvani", "Pilloor", "Aliyar", "Sholayar"],
        data: [82.5, 84.2, 72.0, 75.0],
        color: '#0284c7'
      }
    },
    rainfall: {
      val: "742 mm",
      trend: "+5.6%",
      isPositive: true,
      stats: {
        "Annual Rainfall": "742 mm",
        "Deficit/Surplus": "+5.6% Surplus",
        "Rainy Days": "54 Days",
        "Heavy Rainfall Alerts": "3 issued",
        "Recharge Volume": "184 Million m³"
      },
      chart: {
        type: 'line',
        label: 'Monthly Rainfall (mm)',
        labels: ["Jun", "Jul", "Aug", "Sep", "Oct", "Nov"],
        data: [45, 62, 85, 120, 240, 190],
        color: '#06b6d4'
      }
    },
    traffic: {
      val: "72.4k Peak",
      trend: "+8.3%",
      isPositive: false, // Traffic increase is negative
      stats: {
        "Registered Vehicles": "1,450,290",
        "Peak Traffic Vol": "72,400 vph",
        "Congestion Index": "6.2/10",
        "Average Speed": "22.4 km/h",
        "Active Signals": "142 units"
      },
      chart: {
        type: 'line',
        label: 'Peak Hour Congestion (Index)',
        labels: ["08:00", "12:00", "16:00", "18:00", "20:00"],
        data: [6.5, 4.5, 5.2, 7.8, 5.8],
        color: '#f43f5e'
      }
    },
    employment: {
      val: "4.2% Unemp",
      trend: "-0.8%",
      isPositive: true, // Unemployment decrease is positive
      stats: {
        "Labor Force": "1,820,000",
        "Unemployment Rate": "4.2%",
        "IT & Tech Sector": "48,000 jobs",
        "Manufacturing Sector": "320,000 jobs",
        "Skill Index": "72/100"
      },
      chart: {
        type: 'doughnut',
        label: 'Sector Breakdown (%)',
        labels: ["Mfg", "Services/IT", "Agri", "Textiles", "Others"],
        data: [32, 28, 15, 18, 7],
        color: '#3b82f6'
      }
    },
    health: {
      val: "94.2 Score",
      trend: "+2.1%",
      isPositive: true,
      stats: {
        "Hospitals & Clinics": "382",
        "Total Bed Capacity": "12,450 beds",
        "Avg Response Time": "11.4 mins",
        "Health Scheme Coverage": "88.4%",
        "Maternal Mortality": "0.04%"
      },
      chart: {
        type: 'bar',
        label: 'Bed Capacity by Specialty',
        labels: ["General", "Pediatric", "Maternity", "Cardiac", "Specialty"],
        data: [4000, 2000, 1500, 1200, 3750],
        color: '#ec4899'
      }
    },
    education: {
      val: "89.23 % Lit",
      trend: "+0.7%",
      isPositive: true,
      stats: {
        "Literacy Rate": "89.23%",
        "Primary Schools": "642",
        "Higher Sec Schools": "218",
        "Colleges & Univ": "84",
        "Pupil Teacher Ratio": "24:1"
      },
      chart: {
        type: 'line',
        label: 'Literacy Trend (%)',
        labels: ["2022", "2023", "2024", "2025", "2026"],
        data: [87.5, 88.0, 88.4, 88.9, 89.23],
        color: '#f59e0b'
      }
    }
  },
  krishnagiri: {
    name: "Krishnagiri",
    population: {
      val: "23.63 Lakh",
      trend: "+1.2%",
      isPositive: true,
      stats: {
        "Total Population": "3,445,291",
        "Growth Rate": "1.2% (Annual)",
        "Sex Ratio": "1001 F / 1000 M",
        "Literate Population": "2,987,120",
        "Density": "748 / km²"
      },
      chart: {
        type: 'line',
        label: 'Population Trend (Millions)',
        labels: ["2022", "2023", "2024", "2025", "2026"],
        data: [3.28, 3.32, 3.36, 3.40, 3.44],
        color: '#8b5cf6'
      }
    },
    agriculture: {
      val: "4.82 Lakh Ac",
      trend: "-0.5%",
      isPositive: false,
      stats: {
        "Net Sown Area": "482,100 Acres",
        "Major Crop": "Coconut & Groundnut",
        "Irrigated Area": "62%",
        "Soil Fertility Index": "High",
        "Organic Farming": "18.2%"
      },
      chart: {
        type: 'bar',
        label: 'Crop Distribution (%)',
        labels: ["Coconut", "Groundnut", "Paddy", "Sugarcane", "Millets"],
        data: [45, 25, 15, 10, 5],
        color: '#10b981'
      }
    },
    water: {
      val: "78.4 % Avg",
      trend: "+14.8%",
      isPositive: true,
      stats: {
        "Siruvani Reservoir": "82.5% Capacity",
        "Pilloor Reservoir": "84.2% Capacity",
        "Groundwater Level": "12.4m Below GL",
        "Daily Supply": "240 MLD",
        "Water Quality Index": "88 (Excellent)"
      },
      chart: {
        type: 'bar',
        label: 'Reservoir Capacity (%)',
        labels: ["Siruvani", "Pilloor", "Aliyar", "Sholayar"],
        data: [82.5, 84.2, 72.0, 75.0],
        color: '#0284c7'
      }
    },
    rainfall: {
      val: "742 mm",
      trend: "+5.6%",
      isPositive: true,
      stats: {
        "Annual Rainfall": "742 mm",
        "Deficit/Surplus": "+5.6% Surplus",
        "Rainy Days": "54 Days",
        "Heavy Rainfall Alerts": "3 issued",
        "Recharge Volume": "184 Million m³"
      },
      chart: {
        type: 'line',
        label: 'Monthly Rainfall (mm)',
        labels: ["Jun", "Jul", "Aug", "Sep", "Oct", "Nov"],
        data: [45, 62, 85, 120, 240, 190],
        color: '#06b6d4'
      }
    },
    traffic: {
      val: "72.4k Peak",
      trend: "+8.3%",
      isPositive: false, // Traffic increase is negative
      stats: {
        "Registered Vehicles": "1,450,290",
        "Peak Traffic Vol": "72,400 vph",
        "Congestion Index": "6.2/10",
        "Average Speed": "22.4 km/h",
        "Active Signals": "142 units"
      },
      chart: {
        type: 'line',
        label: 'Peak Hour Congestion (Index)',
        labels: ["08:00", "12:00", "16:00", "18:00", "20:00"],
        data: [6.5, 4.5, 5.2, 7.8, 5.8],
        color: '#f43f5e'
      }
    },
    employment: {
      val: "4.2% Unemp",
      trend: "-0.8%",
      isPositive: true, // Unemployment decrease is positive
      stats: {
        "Labor Force": "1,820,000",
        "Unemployment Rate": "4.2%",
        "IT & Tech Sector": "48,000 jobs",
        "Manufacturing Sector": "320,000 jobs",
        "Skill Index": "72/100"
      },
      chart: {
        type: 'doughnut',
        label: 'Sector Breakdown (%)',
        labels: ["Mfg", "Services/IT", "Agri", "Textiles", "Others"],
        data: [32, 28, 15, 18, 7],
        color: '#3b82f6'
      }
    },
    health: {
      val: "94.2 Score",
      trend: "+2.1%",
      isPositive: true,
      stats: {
        "Hospitals & Clinics": "382",
        "Total Bed Capacity": "12,450 beds",
        "Avg Response Time": "11.4 mins",
        "Health Scheme Coverage": "88.4%",
        "Maternal Mortality": "0.04%"
      },
      chart: {
        type: 'bar',
        label: 'Bed Capacity by Specialty',
        labels: ["General", "Pediatric", "Maternity", "Cardiac", "Specialty"],
        data: [4000, 2000, 1500, 1200, 3750],
        color: '#ec4899'
      }
    },
    education: {
      val: "89.23 % Lit",
      trend: "+0.7%",
      isPositive: true,
      stats: {
        "Literacy Rate": "89.23%",
        "Primary Schools": "642",
        "Higher Sec Schools": "218",
        "Colleges & Univ": "84",
        "Pupil Teacher Ratio": "24:1"
      },
      chart: {
        type: 'line',
        label: 'Literacy Trend (%)',
        labels: ["2022", "2023", "2024", "2025", "2026"],
        data: [87.5, 88.0, 88.4, 88.9, 89.23],
        color: '#f59e0b'
      }
    }
  },
  mayiladuthurai: {
    name: "Mayiladuthurai",
    population: {
      val: "19.72 Lakh",
      trend: "+1.2%",
      isPositive: true,
      stats: {
        "Total Population": "3,445,291",
        "Growth Rate": "1.2% (Annual)",
        "Sex Ratio": "1001 F / 1000 M",
        "Literate Population": "2,987,120",
        "Density": "748 / km²"
      },
      chart: {
        type: 'line',
        label: 'Population Trend (Millions)',
        labels: ["2022", "2023", "2024", "2025", "2026"],
        data: [3.28, 3.32, 3.36, 3.40, 3.44],
        color: '#8b5cf6'
      }
    },
    agriculture: {
      val: "4.82 Lakh Ac",
      trend: "-0.5%",
      isPositive: false,
      stats: {
        "Net Sown Area": "482,100 Acres",
        "Major Crop": "Coconut & Groundnut",
        "Irrigated Area": "62%",
        "Soil Fertility Index": "High",
        "Organic Farming": "18.2%"
      },
      chart: {
        type: 'bar',
        label: 'Crop Distribution (%)',
        labels: ["Coconut", "Groundnut", "Paddy", "Sugarcane", "Millets"],
        data: [45, 25, 15, 10, 5],
        color: '#10b981'
      }
    },
    water: {
      val: "78.4 % Avg",
      trend: "+14.8%",
      isPositive: true,
      stats: {
        "Siruvani Reservoir": "82.5% Capacity",
        "Pilloor Reservoir": "84.2% Capacity",
        "Groundwater Level": "12.4m Below GL",
        "Daily Supply": "240 MLD",
        "Water Quality Index": "88 (Excellent)"
      },
      chart: {
        type: 'bar',
        label: 'Reservoir Capacity (%)',
        labels: ["Siruvani", "Pilloor", "Aliyar", "Sholayar"],
        data: [82.5, 84.2, 72.0, 75.0],
        color: '#0284c7'
      }
    },
    rainfall: {
      val: "742 mm",
      trend: "+5.6%",
      isPositive: true,
      stats: {
        "Annual Rainfall": "742 mm",
        "Deficit/Surplus": "+5.6% Surplus",
        "Rainy Days": "54 Days",
        "Heavy Rainfall Alerts": "3 issued",
        "Recharge Volume": "184 Million m³"
      },
      chart: {
        type: 'line',
        label: 'Monthly Rainfall (mm)',
        labels: ["Jun", "Jul", "Aug", "Sep", "Oct", "Nov"],
        data: [45, 62, 85, 120, 240, 190],
        color: '#06b6d4'
      }
    },
    traffic: {
      val: "72.4k Peak",
      trend: "+8.3%",
      isPositive: false, // Traffic increase is negative
      stats: {
        "Registered Vehicles": "1,450,290",
        "Peak Traffic Vol": "72,400 vph",
        "Congestion Index": "6.2/10",
        "Average Speed": "22.4 km/h",
        "Active Signals": "142 units"
      },
      chart: {
        type: 'line',
        label: 'Peak Hour Congestion (Index)',
        labels: ["08:00", "12:00", "16:00", "18:00", "20:00"],
        data: [6.5, 4.5, 5.2, 7.8, 5.8],
        color: '#f43f5e'
      }
    },
    employment: {
      val: "4.2% Unemp",
      trend: "-0.8%",
      isPositive: true, // Unemployment decrease is positive
      stats: {
        "Labor Force": "1,820,000",
        "Unemployment Rate": "4.2%",
        "IT & Tech Sector": "48,000 jobs",
        "Manufacturing Sector": "320,000 jobs",
        "Skill Index": "72/100"
      },
      chart: {
        type: 'doughnut',
        label: 'Sector Breakdown (%)',
        labels: ["Mfg", "Services/IT", "Agri", "Textiles", "Others"],
        data: [32, 28, 15, 18, 7],
        color: '#3b82f6'
      }
    },
    health: {
      val: "94.2 Score",
      trend: "+2.1%",
      isPositive: true,
      stats: {
        "Hospitals & Clinics": "382",
        "Total Bed Capacity": "12,450 beds",
        "Avg Response Time": "11.4 mins",
        "Health Scheme Coverage": "88.4%",
        "Maternal Mortality": "0.04%"
      },
      chart: {
        type: 'bar',
        label: 'Bed Capacity by Specialty',
        labels: ["General", "Pediatric", "Maternity", "Cardiac", "Specialty"],
        data: [4000, 2000, 1500, 1200, 3750],
        color: '#ec4899'
      }
    },
    education: {
      val: "89.23 % Lit",
      trend: "+0.7%",
      isPositive: true,
      stats: {
        "Literacy Rate": "89.23%",
        "Primary Schools": "642",
        "Higher Sec Schools": "218",
        "Colleges & Univ": "84",
        "Pupil Teacher Ratio": "24:1"
      },
      chart: {
        type: 'line',
        label: 'Literacy Trend (%)',
        labels: ["2022", "2023", "2024", "2025", "2026"],
        data: [87.5, 88.0, 88.4, 88.9, 89.23],
        color: '#f59e0b'
      }
    }
  },
  nagapattinam: {
    name: "Nagapattinam",
    population: {
      val: "10.77 Lakh",
      trend: "+1.2%",
      isPositive: true,
      stats: {
        "Total Population": "3,445,291",
        "Growth Rate": "1.2% (Annual)",
        "Sex Ratio": "1001 F / 1000 M",
        "Literate Population": "2,987,120",
        "Density": "748 / km²"
      },
      chart: {
        type: 'line',
        label: 'Population Trend (Millions)',
        labels: ["2022", "2023", "2024", "2025", "2026"],
        data: [3.28, 3.32, 3.36, 3.40, 3.44],
        color: '#8b5cf6'
      }
    },
    agriculture: {
      val: "4.82 Lakh Ac",
      trend: "-0.5%",
      isPositive: false,
      stats: {
        "Net Sown Area": "482,100 Acres",
        "Major Crop": "Coconut & Groundnut",
        "Irrigated Area": "62%",
        "Soil Fertility Index": "High",
        "Organic Farming": "18.2%"
      },
      chart: {
        type: 'bar',
        label: 'Crop Distribution (%)',
        labels: ["Coconut", "Groundnut", "Paddy", "Sugarcane", "Millets"],
        data: [45, 25, 15, 10, 5],
        color: '#10b981'
      }
    },
    water: {
      val: "78.4 % Avg",
      trend: "+14.8%",
      isPositive: true,
      stats: {
        "Siruvani Reservoir": "82.5% Capacity",
        "Pilloor Reservoir": "84.2% Capacity",
        "Groundwater Level": "12.4m Below GL",
        "Daily Supply": "240 MLD",
        "Water Quality Index": "88 (Excellent)"
      },
      chart: {
        type: 'bar',
        label: 'Reservoir Capacity (%)',
        labels: ["Siruvani", "Pilloor", "Aliyar", "Sholayar"],
        data: [82.5, 84.2, 72.0, 75.0],
        color: '#0284c7'
      }
    },
    rainfall: {
      val: "742 mm",
      trend: "+5.6%",
      isPositive: true,
      stats: {
        "Annual Rainfall": "742 mm",
        "Deficit/Surplus": "+5.6% Surplus",
        "Rainy Days": "54 Days",
        "Heavy Rainfall Alerts": "3 issued",
        "Recharge Volume": "184 Million m³"
      },
      chart: {
        type: 'line',
        label: 'Monthly Rainfall (mm)',
        labels: ["Jun", "Jul", "Aug", "Sep", "Oct", "Nov"],
        data: [45, 62, 85, 120, 240, 190],
        color: '#06b6d4'
      }
    },
    traffic: {
      val: "72.4k Peak",
      trend: "+8.3%",
      isPositive: false, // Traffic increase is negative
      stats: {
        "Registered Vehicles": "1,450,290",
        "Peak Traffic Vol": "72,400 vph",
        "Congestion Index": "6.2/10",
        "Average Speed": "22.4 km/h",
        "Active Signals": "142 units"
      },
      chart: {
        type: 'line',
        label: 'Peak Hour Congestion (Index)',
        labels: ["08:00", "12:00", "16:00", "18:00", "20:00"],
        data: [6.5, 4.5, 5.2, 7.8, 5.8],
        color: '#f43f5e'
      }
    },
    employment: {
      val: "4.2% Unemp",
      trend: "-0.8%",
      isPositive: true, // Unemployment decrease is positive
      stats: {
        "Labor Force": "1,820,000",
        "Unemployment Rate": "4.2%",
        "IT & Tech Sector": "48,000 jobs",
        "Manufacturing Sector": "320,000 jobs",
        "Skill Index": "72/100"
      },
      chart: {
        type: 'doughnut',
        label: 'Sector Breakdown (%)',
        labels: ["Mfg", "Services/IT", "Agri", "Textiles", "Others"],
        data: [32, 28, 15, 18, 7],
        color: '#3b82f6'
      }
    },
    health: {
      val: "94.2 Score",
      trend: "+2.1%",
      isPositive: true,
      stats: {
        "Hospitals & Clinics": "382",
        "Total Bed Capacity": "12,450 beds",
        "Avg Response Time": "11.4 mins",
        "Health Scheme Coverage": "88.4%",
        "Maternal Mortality": "0.04%"
      },
      chart: {
        type: 'bar',
        label: 'Bed Capacity by Specialty',
        labels: ["General", "Pediatric", "Maternity", "Cardiac", "Specialty"],
        data: [4000, 2000, 1500, 1200, 3750],
        color: '#ec4899'
      }
    },
    education: {
      val: "89.23 % Lit",
      trend: "+0.7%",
      isPositive: true,
      stats: {
        "Literacy Rate": "89.23%",
        "Primary Schools": "642",
        "Higher Sec Schools": "218",
        "Colleges & Univ": "84",
        "Pupil Teacher Ratio": "24:1"
      },
      chart: {
        type: 'line',
        label: 'Literacy Trend (%)',
        labels: ["2022", "2023", "2024", "2025", "2026"],
        data: [87.5, 88.0, 88.4, 88.9, 89.23],
        color: '#f59e0b'
      }
    }
  },
  namakkal: {
    name: "Namakkal",
    population: {
      val: "25.77 Lakh",
      trend: "+1.2%",
      isPositive: true,
      stats: {
        "Total Population": "3,445,291",
        "Growth Rate": "1.2% (Annual)",
        "Sex Ratio": "1001 F / 1000 M",
        "Literate Population": "2,987,120",
        "Density": "748 / km²"
      },
      chart: {
        type: 'line',
        label: 'Population Trend (Millions)',
        labels: ["2022", "2023", "2024", "2025", "2026"],
        data: [3.28, 3.32, 3.36, 3.40, 3.44],
        color: '#8b5cf6'
      }
    },
    agriculture: {
      val: "4.82 Lakh Ac",
      trend: "-0.5%",
      isPositive: false,
      stats: {
        "Net Sown Area": "482,100 Acres",
        "Major Crop": "Coconut & Groundnut",
        "Irrigated Area": "62%",
        "Soil Fertility Index": "High",
        "Organic Farming": "18.2%"
      },
      chart: {
        type: 'bar',
        label: 'Crop Distribution (%)',
        labels: ["Coconut", "Groundnut", "Paddy", "Sugarcane", "Millets"],
        data: [45, 25, 15, 10, 5],
        color: '#10b981'
      }
    },
    water: {
      val: "78.4 % Avg",
      trend: "+14.8%",
      isPositive: true,
      stats: {
        "Siruvani Reservoir": "82.5% Capacity",
        "Pilloor Reservoir": "84.2% Capacity",
        "Groundwater Level": "12.4m Below GL",
        "Daily Supply": "240 MLD",
        "Water Quality Index": "88 (Excellent)"
      },
      chart: {
        type: 'bar',
        label: 'Reservoir Capacity (%)',
        labels: ["Siruvani", "Pilloor", "Aliyar", "Sholayar"],
        data: [82.5, 84.2, 72.0, 75.0],
        color: '#0284c7'
      }
    },
    rainfall: {
      val: "742 mm",
      trend: "+5.6%",
      isPositive: true,
      stats: {
        "Annual Rainfall": "742 mm",
        "Deficit/Surplus": "+5.6% Surplus",
        "Rainy Days": "54 Days",
        "Heavy Rainfall Alerts": "3 issued",
        "Recharge Volume": "184 Million m³"
      },
      chart: {
        type: 'line',
        label: 'Monthly Rainfall (mm)',
        labels: ["Jun", "Jul", "Aug", "Sep", "Oct", "Nov"],
        data: [45, 62, 85, 120, 240, 190],
        color: '#06b6d4'
      }
    },
    traffic: {
      val: "72.4k Peak",
      trend: "+8.3%",
      isPositive: false, // Traffic increase is negative
      stats: {
        "Registered Vehicles": "1,450,290",
        "Peak Traffic Vol": "72,400 vph",
        "Congestion Index": "6.2/10",
        "Average Speed": "22.4 km/h",
        "Active Signals": "142 units"
      },
      chart: {
        type: 'line',
        label: 'Peak Hour Congestion (Index)',
        labels: ["08:00", "12:00", "16:00", "18:00", "20:00"],
        data: [6.5, 4.5, 5.2, 7.8, 5.8],
        color: '#f43f5e'
      }
    },
    employment: {
      val: "4.2% Unemp",
      trend: "-0.8%",
      isPositive: true, // Unemployment decrease is positive
      stats: {
        "Labor Force": "1,820,000",
        "Unemployment Rate": "4.2%",
        "IT & Tech Sector": "48,000 jobs",
        "Manufacturing Sector": "320,000 jobs",
        "Skill Index": "72/100"
      },
      chart: {
        type: 'doughnut',
        label: 'Sector Breakdown (%)',
        labels: ["Mfg", "Services/IT", "Agri", "Textiles", "Others"],
        data: [32, 28, 15, 18, 7],
        color: '#3b82f6'
      }
    },
    health: {
      val: "94.2 Score",
      trend: "+2.1%",
      isPositive: true,
      stats: {
        "Hospitals & Clinics": "382",
        "Total Bed Capacity": "12,450 beds",
        "Avg Response Time": "11.4 mins",
        "Health Scheme Coverage": "88.4%",
        "Maternal Mortality": "0.04%"
      },
      chart: {
        type: 'bar',
        label: 'Bed Capacity by Specialty',
        labels: ["General", "Pediatric", "Maternity", "Cardiac", "Specialty"],
        data: [4000, 2000, 1500, 1200, 3750],
        color: '#ec4899'
      }
    },
    education: {
      val: "89.23 % Lit",
      trend: "+0.7%",
      isPositive: true,
      stats: {
        "Literacy Rate": "89.23%",
        "Primary Schools": "642",
        "Higher Sec Schools": "218",
        "Colleges & Univ": "84",
        "Pupil Teacher Ratio": "24:1"
      },
      chart: {
        type: 'line',
        label: 'Literacy Trend (%)',
        labels: ["2022", "2023", "2024", "2025", "2026"],
        data: [87.5, 88.0, 88.4, 88.9, 89.23],
        color: '#f59e0b'
      }
    }
  },
  nilgiris: {
    name: "Nilgiris",
    population: {
      val: "15.92 Lakh",
      trend: "+1.2%",
      isPositive: true,
      stats: {
        "Total Population": "3,445,291",
        "Growth Rate": "1.2% (Annual)",
        "Sex Ratio": "1001 F / 1000 M",
        "Literate Population": "2,987,120",
        "Density": "748 / km²"
      },
      chart: {
        type: 'line',
        label: 'Population Trend (Millions)',
        labels: ["2022", "2023", "2024", "2025", "2026"],
        data: [3.28, 3.32, 3.36, 3.40, 3.44],
        color: '#8b5cf6'
      }
    },
    agriculture: {
      val: "4.82 Lakh Ac",
      trend: "-0.5%",
      isPositive: false,
      stats: {
        "Net Sown Area": "482,100 Acres",
        "Major Crop": "Coconut & Groundnut",
        "Irrigated Area": "62%",
        "Soil Fertility Index": "High",
        "Organic Farming": "18.2%"
      },
      chart: {
        type: 'bar',
        label: 'Crop Distribution (%)',
        labels: ["Coconut", "Groundnut", "Paddy", "Sugarcane", "Millets"],
        data: [45, 25, 15, 10, 5],
        color: '#10b981'
      }
    },
    water: {
      val: "78.4 % Avg",
      trend: "+14.8%",
      isPositive: true,
      stats: {
        "Siruvani Reservoir": "82.5% Capacity",
        "Pilloor Reservoir": "84.2% Capacity",
        "Groundwater Level": "12.4m Below GL",
        "Daily Supply": "240 MLD",
        "Water Quality Index": "88 (Excellent)"
      },
      chart: {
        type: 'bar',
        label: 'Reservoir Capacity (%)',
        labels: ["Siruvani", "Pilloor", "Aliyar", "Sholayar"],
        data: [82.5, 84.2, 72.0, 75.0],
        color: '#0284c7'
      }
    },
    rainfall: {
      val: "742 mm",
      trend: "+5.6%",
      isPositive: true,
      stats: {
        "Annual Rainfall": "742 mm",
        "Deficit/Surplus": "+5.6% Surplus",
        "Rainy Days": "54 Days",
        "Heavy Rainfall Alerts": "3 issued",
        "Recharge Volume": "184 Million m³"
      },
      chart: {
        type: 'line',
        label: 'Monthly Rainfall (mm)',
        labels: ["Jun", "Jul", "Aug", "Sep", "Oct", "Nov"],
        data: [45, 62, 85, 120, 240, 190],
        color: '#06b6d4'
      }
    },
    traffic: {
      val: "72.4k Peak",
      trend: "+8.3%",
      isPositive: false, // Traffic increase is negative
      stats: {
        "Registered Vehicles": "1,450,290",
        "Peak Traffic Vol": "72,400 vph",
        "Congestion Index": "6.2/10",
        "Average Speed": "22.4 km/h",
        "Active Signals": "142 units"
      },
      chart: {
        type: 'line',
        label: 'Peak Hour Congestion (Index)',
        labels: ["08:00", "12:00", "16:00", "18:00", "20:00"],
        data: [6.5, 4.5, 5.2, 7.8, 5.8],
        color: '#f43f5e'
      }
    },
    employment: {
      val: "4.2% Unemp",
      trend: "-0.8%",
      isPositive: true, // Unemployment decrease is positive
      stats: {
        "Labor Force": "1,820,000",
        "Unemployment Rate": "4.2%",
        "IT & Tech Sector": "48,000 jobs",
        "Manufacturing Sector": "320,000 jobs",
        "Skill Index": "72/100"
      },
      chart: {
        type: 'doughnut',
        label: 'Sector Breakdown (%)',
        labels: ["Mfg", "Services/IT", "Agri", "Textiles", "Others"],
        data: [32, 28, 15, 18, 7],
        color: '#3b82f6'
      }
    },
    health: {
      val: "94.2 Score",
      trend: "+2.1%",
      isPositive: true,
      stats: {
        "Hospitals & Clinics": "382",
        "Total Bed Capacity": "12,450 beds",
        "Avg Response Time": "11.4 mins",
        "Health Scheme Coverage": "88.4%",
        "Maternal Mortality": "0.04%"
      },
      chart: {
        type: 'bar',
        label: 'Bed Capacity by Specialty',
        labels: ["General", "Pediatric", "Maternity", "Cardiac", "Specialty"],
        data: [4000, 2000, 1500, 1200, 3750],
        color: '#ec4899'
      }
    },
    education: {
      val: "89.23 % Lit",
      trend: "+0.7%",
      isPositive: true,
      stats: {
        "Literacy Rate": "89.23%",
        "Primary Schools": "642",
        "Higher Sec Schools": "218",
        "Colleges & Univ": "84",
        "Pupil Teacher Ratio": "24:1"
      },
      chart: {
        type: 'line',
        label: 'Literacy Trend (%)',
        labels: ["2022", "2023", "2024", "2025", "2026"],
        data: [87.5, 88.0, 88.4, 88.9, 89.23],
        color: '#f59e0b'
      }
    }
  },
  perambalur: {
    name: "Perambalur",
    population: {
      val: "25.84 Lakh",
      trend: "+1.2%",
      isPositive: true,
      stats: {
        "Total Population": "3,445,291",
        "Growth Rate": "1.2% (Annual)",
        "Sex Ratio": "1001 F / 1000 M",
        "Literate Population": "2,987,120",
        "Density": "748 / km²"
      },
      chart: {
        type: 'line',
        label: 'Population Trend (Millions)',
        labels: ["2022", "2023", "2024", "2025", "2026"],
        data: [3.28, 3.32, 3.36, 3.40, 3.44],
        color: '#8b5cf6'
      }
    },
    agriculture: {
      val: "4.82 Lakh Ac",
      trend: "-0.5%",
      isPositive: false,
      stats: {
        "Net Sown Area": "482,100 Acres",
        "Major Crop": "Coconut & Groundnut",
        "Irrigated Area": "62%",
        "Soil Fertility Index": "High",
        "Organic Farming": "18.2%"
      },
      chart: {
        type: 'bar',
        label: 'Crop Distribution (%)',
        labels: ["Coconut", "Groundnut", "Paddy", "Sugarcane", "Millets"],
        data: [45, 25, 15, 10, 5],
        color: '#10b981'
      }
    },
    water: {
      val: "78.4 % Avg",
      trend: "+14.8%",
      isPositive: true,
      stats: {
        "Siruvani Reservoir": "82.5% Capacity",
        "Pilloor Reservoir": "84.2% Capacity",
        "Groundwater Level": "12.4m Below GL",
        "Daily Supply": "240 MLD",
        "Water Quality Index": "88 (Excellent)"
      },
      chart: {
        type: 'bar',
        label: 'Reservoir Capacity (%)',
        labels: ["Siruvani", "Pilloor", "Aliyar", "Sholayar"],
        data: [82.5, 84.2, 72.0, 75.0],
        color: '#0284c7'
      }
    },
    rainfall: {
      val: "742 mm",
      trend: "+5.6%",
      isPositive: true,
      stats: {
        "Annual Rainfall": "742 mm",
        "Deficit/Surplus": "+5.6% Surplus",
        "Rainy Days": "54 Days",
        "Heavy Rainfall Alerts": "3 issued",
        "Recharge Volume": "184 Million m³"
      },
      chart: {
        type: 'line',
        label: 'Monthly Rainfall (mm)',
        labels: ["Jun", "Jul", "Aug", "Sep", "Oct", "Nov"],
        data: [45, 62, 85, 120, 240, 190],
        color: '#06b6d4'
      }
    },
    traffic: {
      val: "72.4k Peak",
      trend: "+8.3%",
      isPositive: false, // Traffic increase is negative
      stats: {
        "Registered Vehicles": "1,450,290",
        "Peak Traffic Vol": "72,400 vph",
        "Congestion Index": "6.2/10",
        "Average Speed": "22.4 km/h",
        "Active Signals": "142 units"
      },
      chart: {
        type: 'line',
        label: 'Peak Hour Congestion (Index)',
        labels: ["08:00", "12:00", "16:00", "18:00", "20:00"],
        data: [6.5, 4.5, 5.2, 7.8, 5.8],
        color: '#f43f5e'
      }
    },
    employment: {
      val: "4.2% Unemp",
      trend: "-0.8%",
      isPositive: true, // Unemployment decrease is positive
      stats: {
        "Labor Force": "1,820,000",
        "Unemployment Rate": "4.2%",
        "IT & Tech Sector": "48,000 jobs",
        "Manufacturing Sector": "320,000 jobs",
        "Skill Index": "72/100"
      },
      chart: {
        type: 'doughnut',
        label: 'Sector Breakdown (%)',
        labels: ["Mfg", "Services/IT", "Agri", "Textiles", "Others"],
        data: [32, 28, 15, 18, 7],
        color: '#3b82f6'
      }
    },
    health: {
      val: "94.2 Score",
      trend: "+2.1%",
      isPositive: true,
      stats: {
        "Hospitals & Clinics": "382",
        "Total Bed Capacity": "12,450 beds",
        "Avg Response Time": "11.4 mins",
        "Health Scheme Coverage": "88.4%",
        "Maternal Mortality": "0.04%"
      },
      chart: {
        type: 'bar',
        label: 'Bed Capacity by Specialty',
        labels: ["General", "Pediatric", "Maternity", "Cardiac", "Specialty"],
        data: [4000, 2000, 1500, 1200, 3750],
        color: '#ec4899'
      }
    },
    education: {
      val: "89.23 % Lit",
      trend: "+0.7%",
      isPositive: true,
      stats: {
        "Literacy Rate": "89.23%",
        "Primary Schools": "642",
        "Higher Sec Schools": "218",
        "Colleges & Univ": "84",
        "Pupil Teacher Ratio": "24:1"
      },
      chart: {
        type: 'line',
        label: 'Literacy Trend (%)',
        labels: ["2022", "2023", "2024", "2025", "2026"],
        data: [87.5, 88.0, 88.4, 88.9, 89.23],
        color: '#f59e0b'
      }
    }
  },
  pudukkottai: {
    name: "Pudukkottai",
    population: {
      val: "19.53 Lakh",
      trend: "+1.2%",
      isPositive: true,
      stats: {
        "Total Population": "3,445,291",
        "Growth Rate": "1.2% (Annual)",
        "Sex Ratio": "1001 F / 1000 M",
        "Literate Population": "2,987,120",
        "Density": "748 / km²"
      },
      chart: {
        type: 'line',
        label: 'Population Trend (Millions)',
        labels: ["2022", "2023", "2024", "2025", "2026"],
        data: [3.28, 3.32, 3.36, 3.40, 3.44],
        color: '#8b5cf6'
      }
    },
    agriculture: {
      val: "4.82 Lakh Ac",
      trend: "-0.5%",
      isPositive: false,
      stats: {
        "Net Sown Area": "482,100 Acres",
        "Major Crop": "Coconut & Groundnut",
        "Irrigated Area": "62%",
        "Soil Fertility Index": "High",
        "Organic Farming": "18.2%"
      },
      chart: {
        type: 'bar',
        label: 'Crop Distribution (%)',
        labels: ["Coconut", "Groundnut", "Paddy", "Sugarcane", "Millets"],
        data: [45, 25, 15, 10, 5],
        color: '#10b981'
      }
    },
    water: {
      val: "78.4 % Avg",
      trend: "+14.8%",
      isPositive: true,
      stats: {
        "Siruvani Reservoir": "82.5% Capacity",
        "Pilloor Reservoir": "84.2% Capacity",
        "Groundwater Level": "12.4m Below GL",
        "Daily Supply": "240 MLD",
        "Water Quality Index": "88 (Excellent)"
      },
      chart: {
        type: 'bar',
        label: 'Reservoir Capacity (%)',
        labels: ["Siruvani", "Pilloor", "Aliyar", "Sholayar"],
        data: [82.5, 84.2, 72.0, 75.0],
        color: '#0284c7'
      }
    },
    rainfall: {
      val: "742 mm",
      trend: "+5.6%",
      isPositive: true,
      stats: {
        "Annual Rainfall": "742 mm",
        "Deficit/Surplus": "+5.6% Surplus",
        "Rainy Days": "54 Days",
        "Heavy Rainfall Alerts": "3 issued",
        "Recharge Volume": "184 Million m³"
      },
      chart: {
        type: 'line',
        label: 'Monthly Rainfall (mm)',
        labels: ["Jun", "Jul", "Aug", "Sep", "Oct", "Nov"],
        data: [45, 62, 85, 120, 240, 190],
        color: '#06b6d4'
      }
    },
    traffic: {
      val: "72.4k Peak",
      trend: "+8.3%",
      isPositive: false, // Traffic increase is negative
      stats: {
        "Registered Vehicles": "1,450,290",
        "Peak Traffic Vol": "72,400 vph",
        "Congestion Index": "6.2/10",
        "Average Speed": "22.4 km/h",
        "Active Signals": "142 units"
      },
      chart: {
        type: 'line',
        label: 'Peak Hour Congestion (Index)',
        labels: ["08:00", "12:00", "16:00", "18:00", "20:00"],
        data: [6.5, 4.5, 5.2, 7.8, 5.8],
        color: '#f43f5e'
      }
    },
    employment: {
      val: "4.2% Unemp",
      trend: "-0.8%",
      isPositive: true, // Unemployment decrease is positive
      stats: {
        "Labor Force": "1,820,000",
        "Unemployment Rate": "4.2%",
        "IT & Tech Sector": "48,000 jobs",
        "Manufacturing Sector": "320,000 jobs",
        "Skill Index": "72/100"
      },
      chart: {
        type: 'doughnut',
        label: 'Sector Breakdown (%)',
        labels: ["Mfg", "Services/IT", "Agri", "Textiles", "Others"],
        data: [32, 28, 15, 18, 7],
        color: '#3b82f6'
      }
    },
    health: {
      val: "94.2 Score",
      trend: "+2.1%",
      isPositive: true,
      stats: {
        "Hospitals & Clinics": "382",
        "Total Bed Capacity": "12,450 beds",
        "Avg Response Time": "11.4 mins",
        "Health Scheme Coverage": "88.4%",
        "Maternal Mortality": "0.04%"
      },
      chart: {
        type: 'bar',
        label: 'Bed Capacity by Specialty',
        labels: ["General", "Pediatric", "Maternity", "Cardiac", "Specialty"],
        data: [4000, 2000, 1500, 1200, 3750],
        color: '#ec4899'
      }
    },
    education: {
      val: "89.23 % Lit",
      trend: "+0.7%",
      isPositive: true,
      stats: {
        "Literacy Rate": "89.23%",
        "Primary Schools": "642",
        "Higher Sec Schools": "218",
        "Colleges & Univ": "84",
        "Pupil Teacher Ratio": "24:1"
      },
      chart: {
        type: 'line',
        label: 'Literacy Trend (%)',
        labels: ["2022", "2023", "2024", "2025", "2026"],
        data: [87.5, 88.0, 88.4, 88.9, 89.23],
        color: '#f59e0b'
      }
    }
  },
  ramanathapuram: {
    name: "Ramanathapuram",
    population: {
      val: "18.04 Lakh",
      trend: "+1.2%",
      isPositive: true,
      stats: {
        "Total Population": "3,445,291",
        "Growth Rate": "1.2% (Annual)",
        "Sex Ratio": "1001 F / 1000 M",
        "Literate Population": "2,987,120",
        "Density": "748 / km²"
      },
      chart: {
        type: 'line',
        label: 'Population Trend (Millions)',
        labels: ["2022", "2023", "2024", "2025", "2026"],
        data: [3.28, 3.32, 3.36, 3.40, 3.44],
        color: '#8b5cf6'
      }
    },
    agriculture: {
      val: "4.82 Lakh Ac",
      trend: "-0.5%",
      isPositive: false,
      stats: {
        "Net Sown Area": "482,100 Acres",
        "Major Crop": "Coconut & Groundnut",
        "Irrigated Area": "62%",
        "Soil Fertility Index": "High",
        "Organic Farming": "18.2%"
      },
      chart: {
        type: 'bar',
        label: 'Crop Distribution (%)',
        labels: ["Coconut", "Groundnut", "Paddy", "Sugarcane", "Millets"],
        data: [45, 25, 15, 10, 5],
        color: '#10b981'
      }
    },
    water: {
      val: "78.4 % Avg",
      trend: "+14.8%",
      isPositive: true,
      stats: {
        "Siruvani Reservoir": "82.5% Capacity",
        "Pilloor Reservoir": "84.2% Capacity",
        "Groundwater Level": "12.4m Below GL",
        "Daily Supply": "240 MLD",
        "Water Quality Index": "88 (Excellent)"
      },
      chart: {
        type: 'bar',
        label: 'Reservoir Capacity (%)',
        labels: ["Siruvani", "Pilloor", "Aliyar", "Sholayar"],
        data: [82.5, 84.2, 72.0, 75.0],
        color: '#0284c7'
      }
    },
    rainfall: {
      val: "742 mm",
      trend: "+5.6%",
      isPositive: true,
      stats: {
        "Annual Rainfall": "742 mm",
        "Deficit/Surplus": "+5.6% Surplus",
        "Rainy Days": "54 Days",
        "Heavy Rainfall Alerts": "3 issued",
        "Recharge Volume": "184 Million m³"
      },
      chart: {
        type: 'line',
        label: 'Monthly Rainfall (mm)',
        labels: ["Jun", "Jul", "Aug", "Sep", "Oct", "Nov"],
        data: [45, 62, 85, 120, 240, 190],
        color: '#06b6d4'
      }
    },
    traffic: {
      val: "72.4k Peak",
      trend: "+8.3%",
      isPositive: false, // Traffic increase is negative
      stats: {
        "Registered Vehicles": "1,450,290",
        "Peak Traffic Vol": "72,400 vph",
        "Congestion Index": "6.2/10",
        "Average Speed": "22.4 km/h",
        "Active Signals": "142 units"
      },
      chart: {
        type: 'line',
        label: 'Peak Hour Congestion (Index)',
        labels: ["08:00", "12:00", "16:00", "18:00", "20:00"],
        data: [6.5, 4.5, 5.2, 7.8, 5.8],
        color: '#f43f5e'
      }
    },
    employment: {
      val: "4.2% Unemp",
      trend: "-0.8%",
      isPositive: true, // Unemployment decrease is positive
      stats: {
        "Labor Force": "1,820,000",
        "Unemployment Rate": "4.2%",
        "IT & Tech Sector": "48,000 jobs",
        "Manufacturing Sector": "320,000 jobs",
        "Skill Index": "72/100"
      },
      chart: {
        type: 'doughnut',
        label: 'Sector Breakdown (%)',
        labels: ["Mfg", "Services/IT", "Agri", "Textiles", "Others"],
        data: [32, 28, 15, 18, 7],
        color: '#3b82f6'
      }
    },
    health: {
      val: "94.2 Score",
      trend: "+2.1%",
      isPositive: true,
      stats: {
        "Hospitals & Clinics": "382",
        "Total Bed Capacity": "12,450 beds",
        "Avg Response Time": "11.4 mins",
        "Health Scheme Coverage": "88.4%",
        "Maternal Mortality": "0.04%"
      },
      chart: {
        type: 'bar',
        label: 'Bed Capacity by Specialty',
        labels: ["General", "Pediatric", "Maternity", "Cardiac", "Specialty"],
        data: [4000, 2000, 1500, 1200, 3750],
        color: '#ec4899'
      }
    },
    education: {
      val: "89.23 % Lit",
      trend: "+0.7%",
      isPositive: true,
      stats: {
        "Literacy Rate": "89.23%",
        "Primary Schools": "642",
        "Higher Sec Schools": "218",
        "Colleges & Univ": "84",
        "Pupil Teacher Ratio": "24:1"
      },
      chart: {
        type: 'line',
        label: 'Literacy Trend (%)',
        labels: ["2022", "2023", "2024", "2025", "2026"],
        data: [87.5, 88.0, 88.4, 88.9, 89.23],
        color: '#f59e0b'
      }
    }
  },
  ranipet: {
    name: "Ranipet",
    population: {
      val: "17.36 Lakh",
      trend: "+1.2%",
      isPositive: true,
      stats: {
        "Total Population": "3,445,291",
        "Growth Rate": "1.2% (Annual)",
        "Sex Ratio": "1001 F / 1000 M",
        "Literate Population": "2,987,120",
        "Density": "748 / km²"
      },
      chart: {
        type: 'line',
        label: 'Population Trend (Millions)',
        labels: ["2022", "2023", "2024", "2025", "2026"],
        data: [3.28, 3.32, 3.36, 3.40, 3.44],
        color: '#8b5cf6'
      }
    },
    agriculture: {
      val: "4.82 Lakh Ac",
      trend: "-0.5%",
      isPositive: false,
      stats: {
        "Net Sown Area": "482,100 Acres",
        "Major Crop": "Coconut & Groundnut",
        "Irrigated Area": "62%",
        "Soil Fertility Index": "High",
        "Organic Farming": "18.2%"
      },
      chart: {
        type: 'bar',
        label: 'Crop Distribution (%)',
        labels: ["Coconut", "Groundnut", "Paddy", "Sugarcane", "Millets"],
        data: [45, 25, 15, 10, 5],
        color: '#10b981'
      }
    },
    water: {
      val: "78.4 % Avg",
      trend: "+14.8%",
      isPositive: true,
      stats: {
        "Siruvani Reservoir": "82.5% Capacity",
        "Pilloor Reservoir": "84.2% Capacity",
        "Groundwater Level": "12.4m Below GL",
        "Daily Supply": "240 MLD",
        "Water Quality Index": "88 (Excellent)"
      },
      chart: {
        type: 'bar',
        label: 'Reservoir Capacity (%)',
        labels: ["Siruvani", "Pilloor", "Aliyar", "Sholayar"],
        data: [82.5, 84.2, 72.0, 75.0],
        color: '#0284c7'
      }
    },
    rainfall: {
      val: "742 mm",
      trend: "+5.6%",
      isPositive: true,
      stats: {
        "Annual Rainfall": "742 mm",
        "Deficit/Surplus": "+5.6% Surplus",
        "Rainy Days": "54 Days",
        "Heavy Rainfall Alerts": "3 issued",
        "Recharge Volume": "184 Million m³"
      },
      chart: {
        type: 'line',
        label: 'Monthly Rainfall (mm)',
        labels: ["Jun", "Jul", "Aug", "Sep", "Oct", "Nov"],
        data: [45, 62, 85, 120, 240, 190],
        color: '#06b6d4'
      }
    },
    traffic: {
      val: "72.4k Peak",
      trend: "+8.3%",
      isPositive: false, // Traffic increase is negative
      stats: {
        "Registered Vehicles": "1,450,290",
        "Peak Traffic Vol": "72,400 vph",
        "Congestion Index": "6.2/10",
        "Average Speed": "22.4 km/h",
        "Active Signals": "142 units"
      },
      chart: {
        type: 'line',
        label: 'Peak Hour Congestion (Index)',
        labels: ["08:00", "12:00", "16:00", "18:00", "20:00"],
        data: [6.5, 4.5, 5.2, 7.8, 5.8],
        color: '#f43f5e'
      }
    },
    employment: {
      val: "4.2% Unemp",
      trend: "-0.8%",
      isPositive: true, // Unemployment decrease is positive
      stats: {
        "Labor Force": "1,820,000",
        "Unemployment Rate": "4.2%",
        "IT & Tech Sector": "48,000 jobs",
        "Manufacturing Sector": "320,000 jobs",
        "Skill Index": "72/100"
      },
      chart: {
        type: 'doughnut',
        label: 'Sector Breakdown (%)',
        labels: ["Mfg", "Services/IT", "Agri", "Textiles", "Others"],
        data: [32, 28, 15, 18, 7],
        color: '#3b82f6'
      }
    },
    health: {
      val: "94.2 Score",
      trend: "+2.1%",
      isPositive: true,
      stats: {
        "Hospitals & Clinics": "382",
        "Total Bed Capacity": "12,450 beds",
        "Avg Response Time": "11.4 mins",
        "Health Scheme Coverage": "88.4%",
        "Maternal Mortality": "0.04%"
      },
      chart: {
        type: 'bar',
        label: 'Bed Capacity by Specialty',
        labels: ["General", "Pediatric", "Maternity", "Cardiac", "Specialty"],
        data: [4000, 2000, 1500, 1200, 3750],
        color: '#ec4899'
      }
    },
    education: {
      val: "89.23 % Lit",
      trend: "+0.7%",
      isPositive: true,
      stats: {
        "Literacy Rate": "89.23%",
        "Primary Schools": "642",
        "Higher Sec Schools": "218",
        "Colleges & Univ": "84",
        "Pupil Teacher Ratio": "24:1"
      },
      chart: {
        type: 'line',
        label: 'Literacy Trend (%)',
        labels: ["2022", "2023", "2024", "2025", "2026"],
        data: [87.5, 88.0, 88.4, 88.9, 89.23],
        color: '#f59e0b'
      }
    }
  },
  sivaganga: {
    name: "Sivaganga",
    population: {
      val: "13.02 Lakh",
      trend: "+1.2%",
      isPositive: true,
      stats: {
        "Total Population": "3,445,291",
        "Growth Rate": "1.2% (Annual)",
        "Sex Ratio": "1001 F / 1000 M",
        "Literate Population": "2,987,120",
        "Density": "748 / km²"
      },
      chart: {
        type: 'line',
        label: 'Population Trend (Millions)',
        labels: ["2022", "2023", "2024", "2025", "2026"],
        data: [3.28, 3.32, 3.36, 3.40, 3.44],
        color: '#8b5cf6'
      }
    },
    agriculture: {
      val: "4.82 Lakh Ac",
      trend: "-0.5%",
      isPositive: false,
      stats: {
        "Net Sown Area": "482,100 Acres",
        "Major Crop": "Coconut & Groundnut",
        "Irrigated Area": "62%",
        "Soil Fertility Index": "High",
        "Organic Farming": "18.2%"
      },
      chart: {
        type: 'bar',
        label: 'Crop Distribution (%)',
        labels: ["Coconut", "Groundnut", "Paddy", "Sugarcane", "Millets"],
        data: [45, 25, 15, 10, 5],
        color: '#10b981'
      }
    },
    water: {
      val: "78.4 % Avg",
      trend: "+14.8%",
      isPositive: true,
      stats: {
        "Siruvani Reservoir": "82.5% Capacity",
        "Pilloor Reservoir": "84.2% Capacity",
        "Groundwater Level": "12.4m Below GL",
        "Daily Supply": "240 MLD",
        "Water Quality Index": "88 (Excellent)"
      },
      chart: {
        type: 'bar',
        label: 'Reservoir Capacity (%)',
        labels: ["Siruvani", "Pilloor", "Aliyar", "Sholayar"],
        data: [82.5, 84.2, 72.0, 75.0],
        color: '#0284c7'
      }
    },
    rainfall: {
      val: "742 mm",
      trend: "+5.6%",
      isPositive: true,
      stats: {
        "Annual Rainfall": "742 mm",
        "Deficit/Surplus": "+5.6% Surplus",
        "Rainy Days": "54 Days",
        "Heavy Rainfall Alerts": "3 issued",
        "Recharge Volume": "184 Million m³"
      },
      chart: {
        type: 'line',
        label: 'Monthly Rainfall (mm)',
        labels: ["Jun", "Jul", "Aug", "Sep", "Oct", "Nov"],
        data: [45, 62, 85, 120, 240, 190],
        color: '#06b6d4'
      }
    },
    traffic: {
      val: "72.4k Peak",
      trend: "+8.3%",
      isPositive: false, // Traffic increase is negative
      stats: {
        "Registered Vehicles": "1,450,290",
        "Peak Traffic Vol": "72,400 vph",
        "Congestion Index": "6.2/10",
        "Average Speed": "22.4 km/h",
        "Active Signals": "142 units"
      },
      chart: {
        type: 'line',
        label: 'Peak Hour Congestion (Index)',
        labels: ["08:00", "12:00", "16:00", "18:00", "20:00"],
        data: [6.5, 4.5, 5.2, 7.8, 5.8],
        color: '#f43f5e'
      }
    },
    employment: {
      val: "4.2% Unemp",
      trend: "-0.8%",
      isPositive: true, // Unemployment decrease is positive
      stats: {
        "Labor Force": "1,820,000",
        "Unemployment Rate": "4.2%",
        "IT & Tech Sector": "48,000 jobs",
        "Manufacturing Sector": "320,000 jobs",
        "Skill Index": "72/100"
      },
      chart: {
        type: 'doughnut',
        label: 'Sector Breakdown (%)',
        labels: ["Mfg", "Services/IT", "Agri", "Textiles", "Others"],
        data: [32, 28, 15, 18, 7],
        color: '#3b82f6'
      }
    },
    health: {
      val: "94.2 Score",
      trend: "+2.1%",
      isPositive: true,
      stats: {
        "Hospitals & Clinics": "382",
        "Total Bed Capacity": "12,450 beds",
        "Avg Response Time": "11.4 mins",
        "Health Scheme Coverage": "88.4%",
        "Maternal Mortality": "0.04%"
      },
      chart: {
        type: 'bar',
        label: 'Bed Capacity by Specialty',
        labels: ["General", "Pediatric", "Maternity", "Cardiac", "Specialty"],
        data: [4000, 2000, 1500, 1200, 3750],
        color: '#ec4899'
      }
    },
    education: {
      val: "89.23 % Lit",
      trend: "+0.7%",
      isPositive: true,
      stats: {
        "Literacy Rate": "89.23%",
        "Primary Schools": "642",
        "Higher Sec Schools": "218",
        "Colleges & Univ": "84",
        "Pupil Teacher Ratio": "24:1"
      },
      chart: {
        type: 'line',
        label: 'Literacy Trend (%)',
        labels: ["2022", "2023", "2024", "2025", "2026"],
        data: [87.5, 88.0, 88.4, 88.9, 89.23],
        color: '#f59e0b'
      }
    }
  },
  tenkasi: {
    name: "Tenkasi",
    population: {
      val: "21.06 Lakh",
      trend: "+1.2%",
      isPositive: true,
      stats: {
        "Total Population": "3,445,291",
        "Growth Rate": "1.2% (Annual)",
        "Sex Ratio": "1001 F / 1000 M",
        "Literate Population": "2,987,120",
        "Density": "748 / km²"
      },
      chart: {
        type: 'line',
        label: 'Population Trend (Millions)',
        labels: ["2022", "2023", "2024", "2025", "2026"],
        data: [3.28, 3.32, 3.36, 3.40, 3.44],
        color: '#8b5cf6'
      }
    },
    agriculture: {
      val: "4.82 Lakh Ac",
      trend: "-0.5%",
      isPositive: false,
      stats: {
        "Net Sown Area": "482,100 Acres",
        "Major Crop": "Coconut & Groundnut",
        "Irrigated Area": "62%",
        "Soil Fertility Index": "High",
        "Organic Farming": "18.2%"
      },
      chart: {
        type: 'bar',
        label: 'Crop Distribution (%)',
        labels: ["Coconut", "Groundnut", "Paddy", "Sugarcane", "Millets"],
        data: [45, 25, 15, 10, 5],
        color: '#10b981'
      }
    },
    water: {
      val: "78.4 % Avg",
      trend: "+14.8%",
      isPositive: true,
      stats: {
        "Siruvani Reservoir": "82.5% Capacity",
        "Pilloor Reservoir": "84.2% Capacity",
        "Groundwater Level": "12.4m Below GL",
        "Daily Supply": "240 MLD",
        "Water Quality Index": "88 (Excellent)"
      },
      chart: {
        type: 'bar',
        label: 'Reservoir Capacity (%)',
        labels: ["Siruvani", "Pilloor", "Aliyar", "Sholayar"],
        data: [82.5, 84.2, 72.0, 75.0],
        color: '#0284c7'
      }
    },
    rainfall: {
      val: "742 mm",
      trend: "+5.6%",
      isPositive: true,
      stats: {
        "Annual Rainfall": "742 mm",
        "Deficit/Surplus": "+5.6% Surplus",
        "Rainy Days": "54 Days",
        "Heavy Rainfall Alerts": "3 issued",
        "Recharge Volume": "184 Million m³"
      },
      chart: {
        type: 'line',
        label: 'Monthly Rainfall (mm)',
        labels: ["Jun", "Jul", "Aug", "Sep", "Oct", "Nov"],
        data: [45, 62, 85, 120, 240, 190],
        color: '#06b6d4'
      }
    },
    traffic: {
      val: "72.4k Peak",
      trend: "+8.3%",
      isPositive: false, // Traffic increase is negative
      stats: {
        "Registered Vehicles": "1,450,290",
        "Peak Traffic Vol": "72,400 vph",
        "Congestion Index": "6.2/10",
        "Average Speed": "22.4 km/h",
        "Active Signals": "142 units"
      },
      chart: {
        type: 'line',
        label: 'Peak Hour Congestion (Index)',
        labels: ["08:00", "12:00", "16:00", "18:00", "20:00"],
        data: [6.5, 4.5, 5.2, 7.8, 5.8],
        color: '#f43f5e'
      }
    },
    employment: {
      val: "4.2% Unemp",
      trend: "-0.8%",
      isPositive: true, // Unemployment decrease is positive
      stats: {
        "Labor Force": "1,820,000",
        "Unemployment Rate": "4.2%",
        "IT & Tech Sector": "48,000 jobs",
        "Manufacturing Sector": "320,000 jobs",
        "Skill Index": "72/100"
      },
      chart: {
        type: 'doughnut',
        label: 'Sector Breakdown (%)',
        labels: ["Mfg", "Services/IT", "Agri", "Textiles", "Others"],
        data: [32, 28, 15, 18, 7],
        color: '#3b82f6'
      }
    },
    health: {
      val: "94.2 Score",
      trend: "+2.1%",
      isPositive: true,
      stats: {
        "Hospitals & Clinics": "382",
        "Total Bed Capacity": "12,450 beds",
        "Avg Response Time": "11.4 mins",
        "Health Scheme Coverage": "88.4%",
        "Maternal Mortality": "0.04%"
      },
      chart: {
        type: 'bar',
        label: 'Bed Capacity by Specialty',
        labels: ["General", "Pediatric", "Maternity", "Cardiac", "Specialty"],
        data: [4000, 2000, 1500, 1200, 3750],
        color: '#ec4899'
      }
    },
    education: {
      val: "89.23 % Lit",
      trend: "+0.7%",
      isPositive: true,
      stats: {
        "Literacy Rate": "89.23%",
        "Primary Schools": "642",
        "Higher Sec Schools": "218",
        "Colleges & Univ": "84",
        "Pupil Teacher Ratio": "24:1"
      },
      chart: {
        type: 'line',
        label: 'Literacy Trend (%)',
        labels: ["2022", "2023", "2024", "2025", "2026"],
        data: [87.5, 88.0, 88.4, 88.9, 89.23],
        color: '#f59e0b'
      }
    }
  },
  theni: {
    name: "Theni",
    population: {
      val: "16.43 Lakh",
      trend: "+1.2%",
      isPositive: true,
      stats: {
        "Total Population": "3,445,291",
        "Growth Rate": "1.2% (Annual)",
        "Sex Ratio": "1001 F / 1000 M",
        "Literate Population": "2,987,120",
        "Density": "748 / km²"
      },
      chart: {
        type: 'line',
        label: 'Population Trend (Millions)',
        labels: ["2022", "2023", "2024", "2025", "2026"],
        data: [3.28, 3.32, 3.36, 3.40, 3.44],
        color: '#8b5cf6'
      }
    },
    agriculture: {
      val: "4.82 Lakh Ac",
      trend: "-0.5%",
      isPositive: false,
      stats: {
        "Net Sown Area": "482,100 Acres",
        "Major Crop": "Coconut & Groundnut",
        "Irrigated Area": "62%",
        "Soil Fertility Index": "High",
        "Organic Farming": "18.2%"
      },
      chart: {
        type: 'bar',
        label: 'Crop Distribution (%)',
        labels: ["Coconut", "Groundnut", "Paddy", "Sugarcane", "Millets"],
        data: [45, 25, 15, 10, 5],
        color: '#10b981'
      }
    },
    water: {
      val: "78.4 % Avg",
      trend: "+14.8%",
      isPositive: true,
      stats: {
        "Siruvani Reservoir": "82.5% Capacity",
        "Pilloor Reservoir": "84.2% Capacity",
        "Groundwater Level": "12.4m Below GL",
        "Daily Supply": "240 MLD",
        "Water Quality Index": "88 (Excellent)"
      },
      chart: {
        type: 'bar',
        label: 'Reservoir Capacity (%)',
        labels: ["Siruvani", "Pilloor", "Aliyar", "Sholayar"],
        data: [82.5, 84.2, 72.0, 75.0],
        color: '#0284c7'
      }
    },
    rainfall: {
      val: "742 mm",
      trend: "+5.6%",
      isPositive: true,
      stats: {
        "Annual Rainfall": "742 mm",
        "Deficit/Surplus": "+5.6% Surplus",
        "Rainy Days": "54 Days",
        "Heavy Rainfall Alerts": "3 issued",
        "Recharge Volume": "184 Million m³"
      },
      chart: {
        type: 'line',
        label: 'Monthly Rainfall (mm)',
        labels: ["Jun", "Jul", "Aug", "Sep", "Oct", "Nov"],
        data: [45, 62, 85, 120, 240, 190],
        color: '#06b6d4'
      }
    },
    traffic: {
      val: "72.4k Peak",
      trend: "+8.3%",
      isPositive: false, // Traffic increase is negative
      stats: {
        "Registered Vehicles": "1,450,290",
        "Peak Traffic Vol": "72,400 vph",
        "Congestion Index": "6.2/10",
        "Average Speed": "22.4 km/h",
        "Active Signals": "142 units"
      },
      chart: {
        type: 'line',
        label: 'Peak Hour Congestion (Index)',
        labels: ["08:00", "12:00", "16:00", "18:00", "20:00"],
        data: [6.5, 4.5, 5.2, 7.8, 5.8],
        color: '#f43f5e'
      }
    },
    employment: {
      val: "4.2% Unemp",
      trend: "-0.8%",
      isPositive: true, // Unemployment decrease is positive
      stats: {
        "Labor Force": "1,820,000",
        "Unemployment Rate": "4.2%",
        "IT & Tech Sector": "48,000 jobs",
        "Manufacturing Sector": "320,000 jobs",
        "Skill Index": "72/100"
      },
      chart: {
        type: 'doughnut',
        label: 'Sector Breakdown (%)',
        labels: ["Mfg", "Services/IT", "Agri", "Textiles", "Others"],
        data: [32, 28, 15, 18, 7],
        color: '#3b82f6'
      }
    },
    health: {
      val: "94.2 Score",
      trend: "+2.1%",
      isPositive: true,
      stats: {
        "Hospitals & Clinics": "382",
        "Total Bed Capacity": "12,450 beds",
        "Avg Response Time": "11.4 mins",
        "Health Scheme Coverage": "88.4%",
        "Maternal Mortality": "0.04%"
      },
      chart: {
        type: 'bar',
        label: 'Bed Capacity by Specialty',
        labels: ["General", "Pediatric", "Maternity", "Cardiac", "Specialty"],
        data: [4000, 2000, 1500, 1200, 3750],
        color: '#ec4899'
      }
    },
    education: {
      val: "89.23 % Lit",
      trend: "+0.7%",
      isPositive: true,
      stats: {
        "Literacy Rate": "89.23%",
        "Primary Schools": "642",
        "Higher Sec Schools": "218",
        "Colleges & Univ": "84",
        "Pupil Teacher Ratio": "24:1"
      },
      chart: {
        type: 'line',
        label: 'Literacy Trend (%)',
        labels: ["2022", "2023", "2024", "2025", "2026"],
        data: [87.5, 88.0, 88.4, 88.9, 89.23],
        color: '#f59e0b'
      }
    }
  },
  thoothukudi: {
    name: "Thoothukudi",
    population: {
      val: "18.48 Lakh",
      trend: "+1.2%",
      isPositive: true,
      stats: {
        "Total Population": "3,445,291",
        "Growth Rate": "1.2% (Annual)",
        "Sex Ratio": "1001 F / 1000 M",
        "Literate Population": "2,987,120",
        "Density": "748 / km²"
      },
      chart: {
        type: 'line',
        label: 'Population Trend (Millions)',
        labels: ["2022", "2023", "2024", "2025", "2026"],
        data: [3.28, 3.32, 3.36, 3.40, 3.44],
        color: '#8b5cf6'
      }
    },
    agriculture: {
      val: "4.82 Lakh Ac",
      trend: "-0.5%",
      isPositive: false,
      stats: {
        "Net Sown Area": "482,100 Acres",
        "Major Crop": "Coconut & Groundnut",
        "Irrigated Area": "62%",
        "Soil Fertility Index": "High",
        "Organic Farming": "18.2%"
      },
      chart: {
        type: 'bar',
        label: 'Crop Distribution (%)',
        labels: ["Coconut", "Groundnut", "Paddy", "Sugarcane", "Millets"],
        data: [45, 25, 15, 10, 5],
        color: '#10b981'
      }
    },
    water: {
      val: "78.4 % Avg",
      trend: "+14.8%",
      isPositive: true,
      stats: {
        "Siruvani Reservoir": "82.5% Capacity",
        "Pilloor Reservoir": "84.2% Capacity",
        "Groundwater Level": "12.4m Below GL",
        "Daily Supply": "240 MLD",
        "Water Quality Index": "88 (Excellent)"
      },
      chart: {
        type: 'bar',
        label: 'Reservoir Capacity (%)',
        labels: ["Siruvani", "Pilloor", "Aliyar", "Sholayar"],
        data: [82.5, 84.2, 72.0, 75.0],
        color: '#0284c7'
      }
    },
    rainfall: {
      val: "742 mm",
      trend: "+5.6%",
      isPositive: true,
      stats: {
        "Annual Rainfall": "742 mm",
        "Deficit/Surplus": "+5.6% Surplus",
        "Rainy Days": "54 Days",
        "Heavy Rainfall Alerts": "3 issued",
        "Recharge Volume": "184 Million m³"
      },
      chart: {
        type: 'line',
        label: 'Monthly Rainfall (mm)',
        labels: ["Jun", "Jul", "Aug", "Sep", "Oct", "Nov"],
        data: [45, 62, 85, 120, 240, 190],
        color: '#06b6d4'
      }
    },
    traffic: {
      val: "72.4k Peak",
      trend: "+8.3%",
      isPositive: false, // Traffic increase is negative
      stats: {
        "Registered Vehicles": "1,450,290",
        "Peak Traffic Vol": "72,400 vph",
        "Congestion Index": "6.2/10",
        "Average Speed": "22.4 km/h",
        "Active Signals": "142 units"
      },
      chart: {
        type: 'line',
        label: 'Peak Hour Congestion (Index)',
        labels: ["08:00", "12:00", "16:00", "18:00", "20:00"],
        data: [6.5, 4.5, 5.2, 7.8, 5.8],
        color: '#f43f5e'
      }
    },
    employment: {
      val: "4.2% Unemp",
      trend: "-0.8%",
      isPositive: true, // Unemployment decrease is positive
      stats: {
        "Labor Force": "1,820,000",
        "Unemployment Rate": "4.2%",
        "IT & Tech Sector": "48,000 jobs",
        "Manufacturing Sector": "320,000 jobs",
        "Skill Index": "72/100"
      },
      chart: {
        type: 'doughnut',
        label: 'Sector Breakdown (%)',
        labels: ["Mfg", "Services/IT", "Agri", "Textiles", "Others"],
        data: [32, 28, 15, 18, 7],
        color: '#3b82f6'
      }
    },
    health: {
      val: "94.2 Score",
      trend: "+2.1%",
      isPositive: true,
      stats: {
        "Hospitals & Clinics": "382",
        "Total Bed Capacity": "12,450 beds",
        "Avg Response Time": "11.4 mins",
        "Health Scheme Coverage": "88.4%",
        "Maternal Mortality": "0.04%"
      },
      chart: {
        type: 'bar',
        label: 'Bed Capacity by Specialty',
        labels: ["General", "Pediatric", "Maternity", "Cardiac", "Specialty"],
        data: [4000, 2000, 1500, 1200, 3750],
        color: '#ec4899'
      }
    },
    education: {
      val: "89.23 % Lit",
      trend: "+0.7%",
      isPositive: true,
      stats: {
        "Literacy Rate": "89.23%",
        "Primary Schools": "642",
        "Higher Sec Schools": "218",
        "Colleges & Univ": "84",
        "Pupil Teacher Ratio": "24:1"
      },
      chart: {
        type: 'line',
        label: 'Literacy Trend (%)',
        labels: ["2022", "2023", "2024", "2025", "2026"],
        data: [87.5, 88.0, 88.4, 88.9, 89.23],
        color: '#f59e0b'
      }
    }
  },
  tirupattur: {
    name: "Tirupattur",
    population: {
      val: "18.41 Lakh",
      trend: "+1.2%",
      isPositive: true,
      stats: {
        "Total Population": "3,445,291",
        "Growth Rate": "1.2% (Annual)",
        "Sex Ratio": "1001 F / 1000 M",
        "Literate Population": "2,987,120",
        "Density": "748 / km²"
      },
      chart: {
        type: 'line',
        label: 'Population Trend (Millions)',
        labels: ["2022", "2023", "2024", "2025", "2026"],
        data: [3.28, 3.32, 3.36, 3.40, 3.44],
        color: '#8b5cf6'
      }
    },
    agriculture: {
      val: "4.82 Lakh Ac",
      trend: "-0.5%",
      isPositive: false,
      stats: {
        "Net Sown Area": "482,100 Acres",
        "Major Crop": "Coconut & Groundnut",
        "Irrigated Area": "62%",
        "Soil Fertility Index": "High",
        "Organic Farming": "18.2%"
      },
      chart: {
        type: 'bar',
        label: 'Crop Distribution (%)',
        labels: ["Coconut", "Groundnut", "Paddy", "Sugarcane", "Millets"],
        data: [45, 25, 15, 10, 5],
        color: '#10b981'
      }
    },
    water: {
      val: "78.4 % Avg",
      trend: "+14.8%",
      isPositive: true,
      stats: {
        "Siruvani Reservoir": "82.5% Capacity",
        "Pilloor Reservoir": "84.2% Capacity",
        "Groundwater Level": "12.4m Below GL",
        "Daily Supply": "240 MLD",
        "Water Quality Index": "88 (Excellent)"
      },
      chart: {
        type: 'bar',
        label: 'Reservoir Capacity (%)',
        labels: ["Siruvani", "Pilloor", "Aliyar", "Sholayar"],
        data: [82.5, 84.2, 72.0, 75.0],
        color: '#0284c7'
      }
    },
    rainfall: {
      val: "742 mm",
      trend: "+5.6%",
      isPositive: true,
      stats: {
        "Annual Rainfall": "742 mm",
        "Deficit/Surplus": "+5.6% Surplus",
        "Rainy Days": "54 Days",
        "Heavy Rainfall Alerts": "3 issued",
        "Recharge Volume": "184 Million m³"
      },
      chart: {
        type: 'line',
        label: 'Monthly Rainfall (mm)',
        labels: ["Jun", "Jul", "Aug", "Sep", "Oct", "Nov"],
        data: [45, 62, 85, 120, 240, 190],
        color: '#06b6d4'
      }
    },
    traffic: {
      val: "72.4k Peak",
      trend: "+8.3%",
      isPositive: false, // Traffic increase is negative
      stats: {
        "Registered Vehicles": "1,450,290",
        "Peak Traffic Vol": "72,400 vph",
        "Congestion Index": "6.2/10",
        "Average Speed": "22.4 km/h",
        "Active Signals": "142 units"
      },
      chart: {
        type: 'line',
        label: 'Peak Hour Congestion (Index)',
        labels: ["08:00", "12:00", "16:00", "18:00", "20:00"],
        data: [6.5, 4.5, 5.2, 7.8, 5.8],
        color: '#f43f5e'
      }
    },
    employment: {
      val: "4.2% Unemp",
      trend: "-0.8%",
      isPositive: true, // Unemployment decrease is positive
      stats: {
        "Labor Force": "1,820,000",
        "Unemployment Rate": "4.2%",
        "IT & Tech Sector": "48,000 jobs",
        "Manufacturing Sector": "320,000 jobs",
        "Skill Index": "72/100"
      },
      chart: {
        type: 'doughnut',
        label: 'Sector Breakdown (%)',
        labels: ["Mfg", "Services/IT", "Agri", "Textiles", "Others"],
        data: [32, 28, 15, 18, 7],
        color: '#3b82f6'
      }
    },
    health: {
      val: "94.2 Score",
      trend: "+2.1%",
      isPositive: true,
      stats: {
        "Hospitals & Clinics": "382",
        "Total Bed Capacity": "12,450 beds",
        "Avg Response Time": "11.4 mins",
        "Health Scheme Coverage": "88.4%",
        "Maternal Mortality": "0.04%"
      },
      chart: {
        type: 'bar',
        label: 'Bed Capacity by Specialty',
        labels: ["General", "Pediatric", "Maternity", "Cardiac", "Specialty"],
        data: [4000, 2000, 1500, 1200, 3750],
        color: '#ec4899'
      }
    },
    education: {
      val: "89.23 % Lit",
      trend: "+0.7%",
      isPositive: true,
      stats: {
        "Literacy Rate": "89.23%",
        "Primary Schools": "642",
        "Higher Sec Schools": "218",
        "Colleges & Univ": "84",
        "Pupil Teacher Ratio": "24:1"
      },
      chart: {
        type: 'line',
        label: 'Literacy Trend (%)',
        labels: ["2022", "2023", "2024", "2025", "2026"],
        data: [87.5, 88.0, 88.4, 88.9, 89.23],
        color: '#f59e0b'
      }
    }
  },
  tiruppur: {
    name: "Tiruppur",
    population: {
      val: "24.71 Lakh",
      trend: "+1.2%",
      isPositive: true,
      stats: {
        "Total Population": "3,445,291",
        "Growth Rate": "1.2% (Annual)",
        "Sex Ratio": "1001 F / 1000 M",
        "Literate Population": "2,987,120",
        "Density": "748 / km²"
      },
      chart: {
        type: 'line',
        label: 'Population Trend (Millions)',
        labels: ["2022", "2023", "2024", "2025", "2026"],
        data: [3.28, 3.32, 3.36, 3.40, 3.44],
        color: '#8b5cf6'
      }
    },
    agriculture: {
      val: "4.82 Lakh Ac",
      trend: "-0.5%",
      isPositive: false,
      stats: {
        "Net Sown Area": "482,100 Acres",
        "Major Crop": "Coconut & Groundnut",
        "Irrigated Area": "62%",
        "Soil Fertility Index": "High",
        "Organic Farming": "18.2%"
      },
      chart: {
        type: 'bar',
        label: 'Crop Distribution (%)',
        labels: ["Coconut", "Groundnut", "Paddy", "Sugarcane", "Millets"],
        data: [45, 25, 15, 10, 5],
        color: '#10b981'
      }
    },
    water: {
      val: "78.4 % Avg",
      trend: "+14.8%",
      isPositive: true,
      stats: {
        "Siruvani Reservoir": "82.5% Capacity",
        "Pilloor Reservoir": "84.2% Capacity",
        "Groundwater Level": "12.4m Below GL",
        "Daily Supply": "240 MLD",
        "Water Quality Index": "88 (Excellent)"
      },
      chart: {
        type: 'bar',
        label: 'Reservoir Capacity (%)',
        labels: ["Siruvani", "Pilloor", "Aliyar", "Sholayar"],
        data: [82.5, 84.2, 72.0, 75.0],
        color: '#0284c7'
      }
    },
    rainfall: {
      val: "742 mm",
      trend: "+5.6%",
      isPositive: true,
      stats: {
        "Annual Rainfall": "742 mm",
        "Deficit/Surplus": "+5.6% Surplus",
        "Rainy Days": "54 Days",
        "Heavy Rainfall Alerts": "3 issued",
        "Recharge Volume": "184 Million m³"
      },
      chart: {
        type: 'line',
        label: 'Monthly Rainfall (mm)',
        labels: ["Jun", "Jul", "Aug", "Sep", "Oct", "Nov"],
        data: [45, 62, 85, 120, 240, 190],
        color: '#06b6d4'
      }
    },
    traffic: {
      val: "72.4k Peak",
      trend: "+8.3%",
      isPositive: false, // Traffic increase is negative
      stats: {
        "Registered Vehicles": "1,450,290",
        "Peak Traffic Vol": "72,400 vph",
        "Congestion Index": "6.2/10",
        "Average Speed": "22.4 km/h",
        "Active Signals": "142 units"
      },
      chart: {
        type: 'line',
        label: 'Peak Hour Congestion (Index)',
        labels: ["08:00", "12:00", "16:00", "18:00", "20:00"],
        data: [6.5, 4.5, 5.2, 7.8, 5.8],
        color: '#f43f5e'
      }
    },
    employment: {
      val: "4.2% Unemp",
      trend: "-0.8%",
      isPositive: true, // Unemployment decrease is positive
      stats: {
        "Labor Force": "1,820,000",
        "Unemployment Rate": "4.2%",
        "IT & Tech Sector": "48,000 jobs",
        "Manufacturing Sector": "320,000 jobs",
        "Skill Index": "72/100"
      },
      chart: {
        type: 'doughnut',
        label: 'Sector Breakdown (%)',
        labels: ["Mfg", "Services/IT", "Agri", "Textiles", "Others"],
        data: [32, 28, 15, 18, 7],
        color: '#3b82f6'
      }
    },
    health: {
      val: "94.2 Score",
      trend: "+2.1%",
      isPositive: true,
      stats: {
        "Hospitals & Clinics": "382",
        "Total Bed Capacity": "12,450 beds",
        "Avg Response Time": "11.4 mins",
        "Health Scheme Coverage": "88.4%",
        "Maternal Mortality": "0.04%"
      },
      chart: {
        type: 'bar',
        label: 'Bed Capacity by Specialty',
        labels: ["General", "Pediatric", "Maternity", "Cardiac", "Specialty"],
        data: [4000, 2000, 1500, 1200, 3750],
        color: '#ec4899'
      }
    },
    education: {
      val: "89.23 % Lit",
      trend: "+0.7%",
      isPositive: true,
      stats: {
        "Literacy Rate": "89.23%",
        "Primary Schools": "642",
        "Higher Sec Schools": "218",
        "Colleges & Univ": "84",
        "Pupil Teacher Ratio": "24:1"
      },
      chart: {
        type: 'line',
        label: 'Literacy Trend (%)',
        labels: ["2022", "2023", "2024", "2025", "2026"],
        data: [87.5, 88.0, 88.4, 88.9, 89.23],
        color: '#f59e0b'
      }
    }
  },
  tiruvallur: {
    name: "Tiruvallur",
    population: {
      val: "17.88 Lakh",
      trend: "+1.2%",
      isPositive: true,
      stats: {
        "Total Population": "3,445,291",
        "Growth Rate": "1.2% (Annual)",
        "Sex Ratio": "1001 F / 1000 M",
        "Literate Population": "2,987,120",
        "Density": "748 / km²"
      },
      chart: {
        type: 'line',
        label: 'Population Trend (Millions)',
        labels: ["2022", "2023", "2024", "2025", "2026"],
        data: [3.28, 3.32, 3.36, 3.40, 3.44],
        color: '#8b5cf6'
      }
    },
    agriculture: {
      val: "4.82 Lakh Ac",
      trend: "-0.5%",
      isPositive: false,
      stats: {
        "Net Sown Area": "482,100 Acres",
        "Major Crop": "Coconut & Groundnut",
        "Irrigated Area": "62%",
        "Soil Fertility Index": "High",
        "Organic Farming": "18.2%"
      },
      chart: {
        type: 'bar',
        label: 'Crop Distribution (%)',
        labels: ["Coconut", "Groundnut", "Paddy", "Sugarcane", "Millets"],
        data: [45, 25, 15, 10, 5],
        color: '#10b981'
      }
    },
    water: {
      val: "78.4 % Avg",
      trend: "+14.8%",
      isPositive: true,
      stats: {
        "Siruvani Reservoir": "82.5% Capacity",
        "Pilloor Reservoir": "84.2% Capacity",
        "Groundwater Level": "12.4m Below GL",
        "Daily Supply": "240 MLD",
        "Water Quality Index": "88 (Excellent)"
      },
      chart: {
        type: 'bar',
        label: 'Reservoir Capacity (%)',
        labels: ["Siruvani", "Pilloor", "Aliyar", "Sholayar"],
        data: [82.5, 84.2, 72.0, 75.0],
        color: '#0284c7'
      }
    },
    rainfall: {
      val: "742 mm",
      trend: "+5.6%",
      isPositive: true,
      stats: {
        "Annual Rainfall": "742 mm",
        "Deficit/Surplus": "+5.6% Surplus",
        "Rainy Days": "54 Days",
        "Heavy Rainfall Alerts": "3 issued",
        "Recharge Volume": "184 Million m³"
      },
      chart: {
        type: 'line',
        label: 'Monthly Rainfall (mm)',
        labels: ["Jun", "Jul", "Aug", "Sep", "Oct", "Nov"],
        data: [45, 62, 85, 120, 240, 190],
        color: '#06b6d4'
      }
    },
    traffic: {
      val: "72.4k Peak",
      trend: "+8.3%",
      isPositive: false, // Traffic increase is negative
      stats: {
        "Registered Vehicles": "1,450,290",
        "Peak Traffic Vol": "72,400 vph",
        "Congestion Index": "6.2/10",
        "Average Speed": "22.4 km/h",
        "Active Signals": "142 units"
      },
      chart: {
        type: 'line',
        label: 'Peak Hour Congestion (Index)',
        labels: ["08:00", "12:00", "16:00", "18:00", "20:00"],
        data: [6.5, 4.5, 5.2, 7.8, 5.8],
        color: '#f43f5e'
      }
    },
    employment: {
      val: "4.2% Unemp",
      trend: "-0.8%",
      isPositive: true, // Unemployment decrease is positive
      stats: {
        "Labor Force": "1,820,000",
        "Unemployment Rate": "4.2%",
        "IT & Tech Sector": "48,000 jobs",
        "Manufacturing Sector": "320,000 jobs",
        "Skill Index": "72/100"
      },
      chart: {
        type: 'doughnut',
        label: 'Sector Breakdown (%)',
        labels: ["Mfg", "Services/IT", "Agri", "Textiles", "Others"],
        data: [32, 28, 15, 18, 7],
        color: '#3b82f6'
      }
    },
    health: {
      val: "94.2 Score",
      trend: "+2.1%",
      isPositive: true,
      stats: {
        "Hospitals & Clinics": "382",
        "Total Bed Capacity": "12,450 beds",
        "Avg Response Time": "11.4 mins",
        "Health Scheme Coverage": "88.4%",
        "Maternal Mortality": "0.04%"
      },
      chart: {
        type: 'bar',
        label: 'Bed Capacity by Specialty',
        labels: ["General", "Pediatric", "Maternity", "Cardiac", "Specialty"],
        data: [4000, 2000, 1500, 1200, 3750],
        color: '#ec4899'
      }
    },
    education: {
      val: "89.23 % Lit",
      trend: "+0.7%",
      isPositive: true,
      stats: {
        "Literacy Rate": "89.23%",
        "Primary Schools": "642",
        "Higher Sec Schools": "218",
        "Colleges & Univ": "84",
        "Pupil Teacher Ratio": "24:1"
      },
      chart: {
        type: 'line',
        label: 'Literacy Trend (%)',
        labels: ["2022", "2023", "2024", "2025", "2026"],
        data: [87.5, 88.0, 88.4, 88.9, 89.23],
        color: '#f59e0b'
      }
    }
  },
  tiruvannamalai: {
    name: "Tiruvannamalai",
    population: {
      val: "23.57 Lakh",
      trend: "+1.2%",
      isPositive: true,
      stats: {
        "Total Population": "3,445,291",
        "Growth Rate": "1.2% (Annual)",
        "Sex Ratio": "1001 F / 1000 M",
        "Literate Population": "2,987,120",
        "Density": "748 / km²"
      },
      chart: {
        type: 'line',
        label: 'Population Trend (Millions)',
        labels: ["2022", "2023", "2024", "2025", "2026"],
        data: [3.28, 3.32, 3.36, 3.40, 3.44],
        color: '#8b5cf6'
      }
    },
    agriculture: {
      val: "4.82 Lakh Ac",
      trend: "-0.5%",
      isPositive: false,
      stats: {
        "Net Sown Area": "482,100 Acres",
        "Major Crop": "Coconut & Groundnut",
        "Irrigated Area": "62%",
        "Soil Fertility Index": "High",
        "Organic Farming": "18.2%"
      },
      chart: {
        type: 'bar',
        label: 'Crop Distribution (%)',
        labels: ["Coconut", "Groundnut", "Paddy", "Sugarcane", "Millets"],
        data: [45, 25, 15, 10, 5],
        color: '#10b981'
      }
    },
    water: {
      val: "78.4 % Avg",
      trend: "+14.8%",
      isPositive: true,
      stats: {
        "Siruvani Reservoir": "82.5% Capacity",
        "Pilloor Reservoir": "84.2% Capacity",
        "Groundwater Level": "12.4m Below GL",
        "Daily Supply": "240 MLD",
        "Water Quality Index": "88 (Excellent)"
      },
      chart: {
        type: 'bar',
        label: 'Reservoir Capacity (%)',
        labels: ["Siruvani", "Pilloor", "Aliyar", "Sholayar"],
        data: [82.5, 84.2, 72.0, 75.0],
        color: '#0284c7'
      }
    },
    rainfall: {
      val: "742 mm",
      trend: "+5.6%",
      isPositive: true,
      stats: {
        "Annual Rainfall": "742 mm",
        "Deficit/Surplus": "+5.6% Surplus",
        "Rainy Days": "54 Days",
        "Heavy Rainfall Alerts": "3 issued",
        "Recharge Volume": "184 Million m³"
      },
      chart: {
        type: 'line',
        label: 'Monthly Rainfall (mm)',
        labels: ["Jun", "Jul", "Aug", "Sep", "Oct", "Nov"],
        data: [45, 62, 85, 120, 240, 190],
        color: '#06b6d4'
      }
    },
    traffic: {
      val: "72.4k Peak",
      trend: "+8.3%",
      isPositive: false, // Traffic increase is negative
      stats: {
        "Registered Vehicles": "1,450,290",
        "Peak Traffic Vol": "72,400 vph",
        "Congestion Index": "6.2/10",
        "Average Speed": "22.4 km/h",
        "Active Signals": "142 units"
      },
      chart: {
        type: 'line',
        label: 'Peak Hour Congestion (Index)',
        labels: ["08:00", "12:00", "16:00", "18:00", "20:00"],
        data: [6.5, 4.5, 5.2, 7.8, 5.8],
        color: '#f43f5e'
      }
    },
    employment: {
      val: "4.2% Unemp",
      trend: "-0.8%",
      isPositive: true, // Unemployment decrease is positive
      stats: {
        "Labor Force": "1,820,000",
        "Unemployment Rate": "4.2%",
        "IT & Tech Sector": "48,000 jobs",
        "Manufacturing Sector": "320,000 jobs",
        "Skill Index": "72/100"
      },
      chart: {
        type: 'doughnut',
        label: 'Sector Breakdown (%)',
        labels: ["Mfg", "Services/IT", "Agri", "Textiles", "Others"],
        data: [32, 28, 15, 18, 7],
        color: '#3b82f6'
      }
    },
    health: {
      val: "94.2 Score",
      trend: "+2.1%",
      isPositive: true,
      stats: {
        "Hospitals & Clinics": "382",
        "Total Bed Capacity": "12,450 beds",
        "Avg Response Time": "11.4 mins",
        "Health Scheme Coverage": "88.4%",
        "Maternal Mortality": "0.04%"
      },
      chart: {
        type: 'bar',
        label: 'Bed Capacity by Specialty',
        labels: ["General", "Pediatric", "Maternity", "Cardiac", "Specialty"],
        data: [4000, 2000, 1500, 1200, 3750],
        color: '#ec4899'
      }
    },
    education: {
      val: "89.23 % Lit",
      trend: "+0.7%",
      isPositive: true,
      stats: {
        "Literacy Rate": "89.23%",
        "Primary Schools": "642",
        "Higher Sec Schools": "218",
        "Colleges & Univ": "84",
        "Pupil Teacher Ratio": "24:1"
      },
      chart: {
        type: 'line',
        label: 'Literacy Trend (%)',
        labels: ["2022", "2023", "2024", "2025", "2026"],
        data: [87.5, 88.0, 88.4, 88.9, 89.23],
        color: '#f59e0b'
      }
    }
  },
  tiruvarur: {
    name: "Tiruvarur",
    population: {
      val: "23.23 Lakh",
      trend: "+1.2%",
      isPositive: true,
      stats: {
        "Total Population": "3,445,291",
        "Growth Rate": "1.2% (Annual)",
        "Sex Ratio": "1001 F / 1000 M",
        "Literate Population": "2,987,120",
        "Density": "748 / km²"
      },
      chart: {
        type: 'line',
        label: 'Population Trend (Millions)',
        labels: ["2022", "2023", "2024", "2025", "2026"],
        data: [3.28, 3.32, 3.36, 3.40, 3.44],
        color: '#8b5cf6'
      }
    },
    agriculture: {
      val: "4.82 Lakh Ac",
      trend: "-0.5%",
      isPositive: false,
      stats: {
        "Net Sown Area": "482,100 Acres",
        "Major Crop": "Coconut & Groundnut",
        "Irrigated Area": "62%",
        "Soil Fertility Index": "High",
        "Organic Farming": "18.2%"
      },
      chart: {
        type: 'bar',
        label: 'Crop Distribution (%)',
        labels: ["Coconut", "Groundnut", "Paddy", "Sugarcane", "Millets"],
        data: [45, 25, 15, 10, 5],
        color: '#10b981'
      }
    },
    water: {
      val: "78.4 % Avg",
      trend: "+14.8%",
      isPositive: true,
      stats: {
        "Siruvani Reservoir": "82.5% Capacity",
        "Pilloor Reservoir": "84.2% Capacity",
        "Groundwater Level": "12.4m Below GL",
        "Daily Supply": "240 MLD",
        "Water Quality Index": "88 (Excellent)"
      },
      chart: {
        type: 'bar',
        label: 'Reservoir Capacity (%)',
        labels: ["Siruvani", "Pilloor", "Aliyar", "Sholayar"],
        data: [82.5, 84.2, 72.0, 75.0],
        color: '#0284c7'
      }
    },
    rainfall: {
      val: "742 mm",
      trend: "+5.6%",
      isPositive: true,
      stats: {
        "Annual Rainfall": "742 mm",
        "Deficit/Surplus": "+5.6% Surplus",
        "Rainy Days": "54 Days",
        "Heavy Rainfall Alerts": "3 issued",
        "Recharge Volume": "184 Million m³"
      },
      chart: {
        type: 'line',
        label: 'Monthly Rainfall (mm)',
        labels: ["Jun", "Jul", "Aug", "Sep", "Oct", "Nov"],
        data: [45, 62, 85, 120, 240, 190],
        color: '#06b6d4'
      }
    },
    traffic: {
      val: "72.4k Peak",
      trend: "+8.3%",
      isPositive: false, // Traffic increase is negative
      stats: {
        "Registered Vehicles": "1,450,290",
        "Peak Traffic Vol": "72,400 vph",
        "Congestion Index": "6.2/10",
        "Average Speed": "22.4 km/h",
        "Active Signals": "142 units"
      },
      chart: {
        type: 'line',
        label: 'Peak Hour Congestion (Index)',
        labels: ["08:00", "12:00", "16:00", "18:00", "20:00"],
        data: [6.5, 4.5, 5.2, 7.8, 5.8],
        color: '#f43f5e'
      }
    },
    employment: {
      val: "4.2% Unemp",
      trend: "-0.8%",
      isPositive: true, // Unemployment decrease is positive
      stats: {
        "Labor Force": "1,820,000",
        "Unemployment Rate": "4.2%",
        "IT & Tech Sector": "48,000 jobs",
        "Manufacturing Sector": "320,000 jobs",
        "Skill Index": "72/100"
      },
      chart: {
        type: 'doughnut',
        label: 'Sector Breakdown (%)',
        labels: ["Mfg", "Services/IT", "Agri", "Textiles", "Others"],
        data: [32, 28, 15, 18, 7],
        color: '#3b82f6'
      }
    },
    health: {
      val: "94.2 Score",
      trend: "+2.1%",
      isPositive: true,
      stats: {
        "Hospitals & Clinics": "382",
        "Total Bed Capacity": "12,450 beds",
        "Avg Response Time": "11.4 mins",
        "Health Scheme Coverage": "88.4%",
        "Maternal Mortality": "0.04%"
      },
      chart: {
        type: 'bar',
        label: 'Bed Capacity by Specialty',
        labels: ["General", "Pediatric", "Maternity", "Cardiac", "Specialty"],
        data: [4000, 2000, 1500, 1200, 3750],
        color: '#ec4899'
      }
    },
    education: {
      val: "89.23 % Lit",
      trend: "+0.7%",
      isPositive: true,
      stats: {
        "Literacy Rate": "89.23%",
        "Primary Schools": "642",
        "Higher Sec Schools": "218",
        "Colleges & Univ": "84",
        "Pupil Teacher Ratio": "24:1"
      },
      chart: {
        type: 'line',
        label: 'Literacy Trend (%)',
        labels: ["2022", "2023", "2024", "2025", "2026"],
        data: [87.5, 88.0, 88.4, 88.9, 89.23],
        color: '#f59e0b'
      }
    }
  },
  viluppuram: {
    name: "Viluppuram",
    population: {
      val: "22.68 Lakh",
      trend: "+1.2%",
      isPositive: true,
      stats: {
        "Total Population": "3,445,291",
        "Growth Rate": "1.2% (Annual)",
        "Sex Ratio": "1001 F / 1000 M",
        "Literate Population": "2,987,120",
        "Density": "748 / km²"
      },
      chart: {
        type: 'line',
        label: 'Population Trend (Millions)',
        labels: ["2022", "2023", "2024", "2025", "2026"],
        data: [3.28, 3.32, 3.36, 3.40, 3.44],
        color: '#8b5cf6'
      }
    },
    agriculture: {
      val: "4.82 Lakh Ac",
      trend: "-0.5%",
      isPositive: false,
      stats: {
        "Net Sown Area": "482,100 Acres",
        "Major Crop": "Coconut & Groundnut",
        "Irrigated Area": "62%",
        "Soil Fertility Index": "High",
        "Organic Farming": "18.2%"
      },
      chart: {
        type: 'bar',
        label: 'Crop Distribution (%)',
        labels: ["Coconut", "Groundnut", "Paddy", "Sugarcane", "Millets"],
        data: [45, 25, 15, 10, 5],
        color: '#10b981'
      }
    },
    water: {
      val: "78.4 % Avg",
      trend: "+14.8%",
      isPositive: true,
      stats: {
        "Siruvani Reservoir": "82.5% Capacity",
        "Pilloor Reservoir": "84.2% Capacity",
        "Groundwater Level": "12.4m Below GL",
        "Daily Supply": "240 MLD",
        "Water Quality Index": "88 (Excellent)"
      },
      chart: {
        type: 'bar',
        label: 'Reservoir Capacity (%)',
        labels: ["Siruvani", "Pilloor", "Aliyar", "Sholayar"],
        data: [82.5, 84.2, 72.0, 75.0],
        color: '#0284c7'
      }
    },
    rainfall: {
      val: "742 mm",
      trend: "+5.6%",
      isPositive: true,
      stats: {
        "Annual Rainfall": "742 mm",
        "Deficit/Surplus": "+5.6% Surplus",
        "Rainy Days": "54 Days",
        "Heavy Rainfall Alerts": "3 issued",
        "Recharge Volume": "184 Million m³"
      },
      chart: {
        type: 'line',
        label: 'Monthly Rainfall (mm)',
        labels: ["Jun", "Jul", "Aug", "Sep", "Oct", "Nov"],
        data: [45, 62, 85, 120, 240, 190],
        color: '#06b6d4'
      }
    },
    traffic: {
      val: "72.4k Peak",
      trend: "+8.3%",
      isPositive: false, // Traffic increase is negative
      stats: {
        "Registered Vehicles": "1,450,290",
        "Peak Traffic Vol": "72,400 vph",
        "Congestion Index": "6.2/10",
        "Average Speed": "22.4 km/h",
        "Active Signals": "142 units"
      },
      chart: {
        type: 'line',
        label: 'Peak Hour Congestion (Index)',
        labels: ["08:00", "12:00", "16:00", "18:00", "20:00"],
        data: [6.5, 4.5, 5.2, 7.8, 5.8],
        color: '#f43f5e'
      }
    },
    employment: {
      val: "4.2% Unemp",
      trend: "-0.8%",
      isPositive: true, // Unemployment decrease is positive
      stats: {
        "Labor Force": "1,820,000",
        "Unemployment Rate": "4.2%",
        "IT & Tech Sector": "48,000 jobs",
        "Manufacturing Sector": "320,000 jobs",
        "Skill Index": "72/100"
      },
      chart: {
        type: 'doughnut',
        label: 'Sector Breakdown (%)',
        labels: ["Mfg", "Services/IT", "Agri", "Textiles", "Others"],
        data: [32, 28, 15, 18, 7],
        color: '#3b82f6'
      }
    },
    health: {
      val: "94.2 Score",
      trend: "+2.1%",
      isPositive: true,
      stats: {
        "Hospitals & Clinics": "382",
        "Total Bed Capacity": "12,450 beds",
        "Avg Response Time": "11.4 mins",
        "Health Scheme Coverage": "88.4%",
        "Maternal Mortality": "0.04%"
      },
      chart: {
        type: 'bar',
        label: 'Bed Capacity by Specialty',
        labels: ["General", "Pediatric", "Maternity", "Cardiac", "Specialty"],
        data: [4000, 2000, 1500, 1200, 3750],
        color: '#ec4899'
      }
    },
    education: {
      val: "89.23 % Lit",
      trend: "+0.7%",
      isPositive: true,
      stats: {
        "Literacy Rate": "89.23%",
        "Primary Schools": "642",
        "Higher Sec Schools": "218",
        "Colleges & Univ": "84",
        "Pupil Teacher Ratio": "24:1"
      },
      chart: {
        type: 'line',
        label: 'Literacy Trend (%)',
        labels: ["2022", "2023", "2024", "2025", "2026"],
        data: [87.5, 88.0, 88.4, 88.9, 89.23],
        color: '#f59e0b'
      }
    }
  },
  virudhunagar: {
    name: "Virudhunagar",
    population: {
      val: "13.06 Lakh",
      trend: "+1.2%",
      isPositive: true,
      stats: {
        "Total Population": "3,445,291",
        "Growth Rate": "1.2% (Annual)",
        "Sex Ratio": "1001 F / 1000 M",
        "Literate Population": "2,987,120",
        "Density": "748 / km²"
      },
      chart: {
        type: 'line',
        label: 'Population Trend (Millions)',
        labels: ["2022", "2023", "2024", "2025", "2026"],
        data: [3.28, 3.32, 3.36, 3.40, 3.44],
        color: '#8b5cf6'
      }
    },
    agriculture: {
      val: "4.82 Lakh Ac",
      trend: "-0.5%",
      isPositive: false,
      stats: {
        "Net Sown Area": "482,100 Acres",
        "Major Crop": "Coconut & Groundnut",
        "Irrigated Area": "62%",
        "Soil Fertility Index": "High",
        "Organic Farming": "18.2%"
      },
      chart: {
        type: 'bar',
        label: 'Crop Distribution (%)',
        labels: ["Coconut", "Groundnut", "Paddy", "Sugarcane", "Millets"],
        data: [45, 25, 15, 10, 5],
        color: '#10b981'
      }
    },
    water: {
      val: "78.4 % Avg",
      trend: "+14.8%",
      isPositive: true,
      stats: {
        "Siruvani Reservoir": "82.5% Capacity",
        "Pilloor Reservoir": "84.2% Capacity",
        "Groundwater Level": "12.4m Below GL",
        "Daily Supply": "240 MLD",
        "Water Quality Index": "88 (Excellent)"
      },
      chart: {
        type: 'bar',
        label: 'Reservoir Capacity (%)',
        labels: ["Siruvani", "Pilloor", "Aliyar", "Sholayar"],
        data: [82.5, 84.2, 72.0, 75.0],
        color: '#0284c7'
      }
    },
    rainfall: {
      val: "742 mm",
      trend: "+5.6%",
      isPositive: true,
      stats: {
        "Annual Rainfall": "742 mm",
        "Deficit/Surplus": "+5.6% Surplus",
        "Rainy Days": "54 Days",
        "Heavy Rainfall Alerts": "3 issued",
        "Recharge Volume": "184 Million m³"
      },
      chart: {
        type: 'line',
        label: 'Monthly Rainfall (mm)',
        labels: ["Jun", "Jul", "Aug", "Sep", "Oct", "Nov"],
        data: [45, 62, 85, 120, 240, 190],
        color: '#06b6d4'
      }
    },
    traffic: {
      val: "72.4k Peak",
      trend: "+8.3%",
      isPositive: false, // Traffic increase is negative
      stats: {
        "Registered Vehicles": "1,450,290",
        "Peak Traffic Vol": "72,400 vph",
        "Congestion Index": "6.2/10",
        "Average Speed": "22.4 km/h",
        "Active Signals": "142 units"
      },
      chart: {
        type: 'line',
        label: 'Peak Hour Congestion (Index)',
        labels: ["08:00", "12:00", "16:00", "18:00", "20:00"],
        data: [6.5, 4.5, 5.2, 7.8, 5.8],
        color: '#f43f5e'
      }
    },
    employment: {
      val: "4.2% Unemp",
      trend: "-0.8%",
      isPositive: true, // Unemployment decrease is positive
      stats: {
        "Labor Force": "1,820,000",
        "Unemployment Rate": "4.2%",
        "IT & Tech Sector": "48,000 jobs",
        "Manufacturing Sector": "320,000 jobs",
        "Skill Index": "72/100"
      },
      chart: {
        type: 'doughnut',
        label: 'Sector Breakdown (%)',
        labels: ["Mfg", "Services/IT", "Agri", "Textiles", "Others"],
        data: [32, 28, 15, 18, 7],
        color: '#3b82f6'
      }
    },
    health: {
      val: "94.2 Score",
      trend: "+2.1%",
      isPositive: true,
      stats: {
        "Hospitals & Clinics": "382",
        "Total Bed Capacity": "12,450 beds",
        "Avg Response Time": "11.4 mins",
        "Health Scheme Coverage": "88.4%",
        "Maternal Mortality": "0.04%"
      },
      chart: {
        type: 'bar',
        label: 'Bed Capacity by Specialty',
        labels: ["General", "Pediatric", "Maternity", "Cardiac", "Specialty"],
        data: [4000, 2000, 1500, 1200, 3750],
        color: '#ec4899'
      }
    },
    education: {
      val: "89.23 % Lit",
      trend: "+0.7%",
      isPositive: true,
      stats: {
        "Literacy Rate": "89.23%",
        "Primary Schools": "642",
        "Higher Sec Schools": "218",
        "Colleges & Univ": "84",
        "Pupil Teacher Ratio": "24:1"
      },
      chart: {
        type: 'line',
        label: 'Literacy Trend (%)',
        labels: ["2022", "2023", "2024", "2025", "2026"],
        data: [87.5, 88.0, 88.4, 88.9, 89.23],
        color: '#f59e0b'
      }
    }
  }

};

// 2. STATE MANAGEMENT VARIABLES
let activeDistrict = "coimbatore";
let activeCategory = "population";
let activeTab = "home";
let mainChartInstance = null;
let dataLoaded = false;
let forecastChartInstance = null;

// 3. CORE DOM SELECTIONS
const districtSelect = document.getElementById("districtSelect");
const categoryCards = document.querySelectorAll(".category-card");
const navItems = document.querySelectorAll(".sidebar-menu .nav-item");
const navBtns = document.querySelectorAll(".bottom-nav .nav-btn");
const tabPanes = document.querySelectorAll(".tab-pane");
const statsList = document.getElementById("statsList");
const analyticsTitle = document.getElementById("analyticsTitle");
const analyticsSubtitle = document.getElementById("analyticsSubtitle");
const analyticsBadge = document.getElementById("analyticsBadge");

// Theme management
const themeToggleBtn = document.getElementById("themeToggleBtn");
const darkModeToggle = document.getElementById("darkModeToggle");

// Notifications elements
const notificationBtn = document.getElementById("notificationBtn");
const notificationDropdown = document.getElementById("notificationDropdown");

// Mobile Drawer
const menuToggleBtn = document.getElementById("menuToggleBtn");
const sidebar = document.querySelector(".sidebar");

// Districts Compare elements
const districtSearchInput = document.getElementById("districtSearchInput");
const compareMetricSelect = document.getElementById("compareMetricSelect");
const comparisonCardsGrid = document.getElementById("comparisonCardsGrid");

// AI Predict elements
const rangeRain = document.getElementById("param-rain");
const valRain = document.getElementById("val-rain");
const rangeIndustrial = document.getElementById("param-industrial");
const valIndustrial = document.getElementById("val-industrial");
const rangeTrees = document.getElementById("param-trees");
const valTrees = document.getElementById("val-trees");
const runSimBtn = document.getElementById("runSimulationBtn");

const predGroundwater = document.getElementById("pred-groundwater");
const predCropYield = document.getElementById("pred-cropyield");
const predAqi = document.getElementById("pred-aqi");
const changeGroundwater = document.getElementById("change-groundwater");
const changeCropYield = document.getElementById("change-cropyield");
const changeAqi = document.getElementById("change-aqi");

// Reports Page Elements
const reportDistrictSelect = document.getElementById("reportDistrictSelect");
const reportTypeSelect = document.getElementById("reportTypeSelect");
const generateReportBtn = document.getElementById("generateReportBtn");
const reportTableBody = document.querySelector("#reportTable tbody");

// 4. CHART RENDERING ENGINE
function updateMainChart(chartData) {
  const ctx = document.getElementById("analyticsChart").getContext("2d");
  
  if (mainChartInstance) {
    mainChartInstance.destroy();
  }

  // Adjust theme compatibility for chart text
  const isDark = document.body.classList.contains("dark-theme");
  const textColor = isDark ? "#94a3b8" : "#64748b";
  const gridColor = isDark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.04)";

  // Format dataset with nice gradient if applicable
  let backgroundFill = chartData.color;
  let borderFill = chartData.color;

  if (chartData.type === 'line') {
    const gradient = ctx.createLinearGradient(0, 0, 0, 200);
    gradient.addColorStop(0, hexToRgba(chartData.color, 0.4));
    gradient.addColorStop(1, hexToRgba(chartData.color, 0.01));
    backgroundFill = gradient;
  } else if (chartData.type === 'doughnut') {
    backgroundFill = [
      chartData.color,
      adjustColorBrightness(chartData.color, 20),
      adjustColorBrightness(chartData.color, 40),
      adjustColorBrightness(chartData.color, 60),
      '#94a3b8'
    ];
    borderFill = isDark ? '#14f1c' : '#ffffff';
  }

  const config = {
    type: chartData.type,
    data: {
      labels: chartData.labels,
      datasets: [{
        label: chartData.label,
        data: chartData.data,
        backgroundColor: backgroundFill,
        borderColor: borderFill,
        borderWidth: chartData.type === 'line' ? 3 : 1,
        tension: 0.35,
        fill: chartData.type === 'line',
        pointBackgroundColor: chartData.color,
        pointHoverRadius: 6
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: chartData.type === 'doughnut',
          labels: { color: textColor, font: { family: 'Outfit', size: 12 } }
        },
        tooltip: {
          padding: 10,
          titleFont: { family: 'Outfit', size: 13, weight: 'bold' },
          bodyFont: { family: 'Outfit', size: 12 }
        }
      },
      scales: chartData.type !== 'doughnut' ? {
        x: {
          grid: { color: gridColor },
          ticks: { color: textColor, font: { family: 'Outfit' } }
        },
        y: {
          grid: { color: gridColor },
          ticks: { color: textColor, font: { family: 'Outfit' } }
        }
      } : {}
    }
  };

  mainChartInstance = new Chart(ctx, config);
}

// 5. UPDATE VIEW ON DATA CHANGE
function renderDashboard() {
  updateDistrictAnalytics(activeDistrict);
  const district = districtData[activeDistrict];
  const catData = district[activeCategory];
  if (!catData) return;

  // Update Overview Row
  const primaryTitle = document.querySelector("#overview-card-primary .overview-title");
  const primaryVal = document.getElementById("overview-val-1");
  const primaryTrend = document.getElementById("overview-trend-1");

  const secondaryTitle = document.querySelector("#overview-card-secondary .overview-title");
  const secondaryVal = document.getElementById("overview-val-2");
  const secondaryTrend = document.getElementById("overview-trend-2");

  // Determine overview cards based on active category
  let primaryCat = activeCategory;
  let secondaryCat = activeCategory === 'rainfall' ? 'water' : 'rainfall';

  const pData = district[primaryCat];
  const sData = district[secondaryCat];

  // Update card UI values
  if (primaryTitle) primaryTitle.textContent = capitalizeFirstLetter(primaryCat);
  if (primaryVal) primaryVal.textContent = pData ? pData.val : '';
  if (primaryTrend && pData) {
    primaryTrend.innerHTML = `<i data-lucide="${pData.isPositive ? 'trending-up' : 'trending-down'}"></i> ${pData.trend}`;
    primaryTrend.className = `overview-trend ${pData.isPositive ? 'positive' : 'negative'}`;
  }

  if (secondaryTitle) secondaryTitle.textContent = capitalizeFirstLetter(secondaryCat);
  if (secondaryVal) secondaryVal.textContent = sData ? sData.val : '';
  if (secondaryTrend && sData) {
    secondaryTrend.innerHTML = `<i data-lucide="${sData.isPositive ? 'trending-up' : 'trending-down'}"></i> ${sData.trend}`;
    secondaryTrend.className = `overview-trend ${sData.isPositive ? 'positive' : 'negative'}`;
  }

  secondaryTitle.textContent = capitalizeFirstLetter(secondaryCat);
  secondaryVal.textContent = sData.val;
  secondaryTrend.innerHTML = `<i data-lucide="${sData.isPositive ? 'trending-up' : 'trending-down'}"></i> ${sData.trend}`;
  secondaryTrend.className = `overview-trend ${sData.isPositive ? 'positive' : 'negative'}`;

  // Update Details Panel Headers
  if (analyticsTitle) analyticsTitle.textContent = `${capitalizeFirstLetter(activeCategory)} Analysis`;
  if (analyticsSubtitle) analyticsSubtitle.textContent = `Insights and metric trends for ${district.name} District`;
  if (analyticsBadge) analyticsBadge.textContent = getCategoryCategoryBadge(activeCategory);

  // Update Stats list
  if (statsList) {
    statsList.innerHTML = "";
    for (const [key, value] of Object.entries(catData.stats)) {
      const item = document.createElement("div");
      item.className = "stat-row-item";
      item.innerHTML = `
        <span class="stat-row-label">${key}</span>
        <span class="stat-row-value">${value}</span>
      `;
      statsList.appendChild(item);
    }
  }

  // Redraw main chart
  if (catData.chart) {
    updateMainChart(catData.chart);
  }

  // Trigger lucide icon update
  lucide.createIcons();
}




// ==========================================
// TN MAP INTERACTION LOGIC
// ==========================================

function switchMapLang(lang) {
  const labels = document.querySelectorAll('.map-label');
  labels.forEach(label => {
    const text = label.getAttribute(`data-${lang}`);
    if (text) {
      label.textContent = text;
    }
  });

  const enBtn = document.getElementById('lang-en-btn');
  const taBtn = document.getElementById('lang-ta-btn');
  
  if (lang === 'en') {
    if (enBtn) {
      enBtn.style.background = '#064e3b';
      enBtn.style.color = 'white';
    }
    if (taBtn) {
      taBtn.style.background = 'white';
      taBtn.style.color = '#0f172a';
    }
  } else {
    if (taBtn) {
      taBtn.style.background = '#064e3b';
      taBtn.style.color = 'white';
    }
    if (enBtn) {
      enBtn.style.background = 'white';
      enBtn.style.color = '#0f172a';
    }
  }
}

// Display-friendly names for all 38 Tamil Nadu districts
const districtDisplayNames = {
  chennai: "Chennai", tiruvallur: "Thiruvallur", kanchipuram: "Kancheepuram",
  chengalpattu: "Chengalpattu", ranipet: "Ranipet", vellore: "Vellore",
  tirupattur: "Tirupattur", tiruvannamalai: "Tiruvannamalai", krishnagiri: "Krishnagiri",
  dharmapuri: "Dharmapuri", salem: "Salem", namakkal: "Namakkal",
  erode: "Erode", tiruppur: "Tiruppur", coimbatore: "Coimbatore",
  nilgiris: "Nilgiris", viluppuram: "Villupuram", kallakurichi: "Kallakurichi",
  cuddalore: "Cuddalore", perambalur: "Perambalur", ariyalur: "Ariyalur",
  karur: "Karur", trichy: "Tiruchirappalli", mayiladuthurai: "Mayiladuthurai",
  thanjavur: "Thanjavur", nagapattinam: "Nagapattinam", tiruvarur: "Tiruvarur",
  dindigul: "Dindigul", pudukkottai: "Pudukkottai", sivaganga: "Sivaganga",
  madurai: "Madurai", theni: "Theni", virudhunagar: "Virudhunagar",
  ramanathapuram: "Ramanathapuram", tenkasi: "Tenkasi", tirunelveli: "Tirunelveli",
  thoothukudi: "Thoothukudi", kanyakumari: "Kanyakumari"
};

// Helper to get proper display name for a district key
function getDistrictName(key) {
  return districtDisplayNames[key] || capitalizeFirstLetter(key);
}


const districtValues = {
  chennai:         { population: 8910240, density: 26553, popStr: "89.10 Lakh", densityStr: "26,553 / km²" },
  tiruvallur:     { population: 3728104, density: 1049,  popStr: "37.28 Lakh", densityStr: "1,049 / km²" },
  kanchipuram:    { population: 1166401, density: 583,   popStr: "11.66 Lakh", densityStr: "583 / km²" },
  chengalpattu:    { population: 2556244, density: 1205,  popStr: "25.56 Lakh", densityStr: "1,205 / km²" },
  ranipet:         { population: 1210277, density: 508,   popStr: "12.10 Lakh", densityStr: "508 / km²" },
  vellore:         { population: 1614242, density: 540,   popStr: "16.14 Lakh", densityStr: "540 / km²" },
  tirupattur:      { population: 1111812, density: 343,   popStr: "11.12 Lakh", densityStr: "343 / km²" },
  tiruvannamalai:  { population: 2464875, density: 401,   popStr: "24.65 Lakh", densityStr: "401 / km²" },
  krishnagiri:     { population: 1879809, density: 360,   popStr: "18.80 Lakh", densityStr: "360 / km²" },
  dharmapuri:      { population: 1506843, density: 319,   popStr: "15.07 Lakh", densityStr: "319 / km²" },
  salem:           { population: 3520120, density: 670,   popStr: "35.20 Lakh", densityStr: "670 / km²" },
  namakkal:        { population: 1726601, density: 559,   popStr: "17.27 Lakh", densityStr: "559 / km²" },
  erode:           { population: 2251744, density: 406,   popStr: "22.52 Lakh", densityStr: "406 / km²" },
  tiruppur:        { population: 2479052, density: 563,   popStr: "24.79 Lakh", densityStr: "563 / km²" },
  coimbatore:      { population: 3445291, density: 748,   popStr: "34.45 Lakh", densityStr: "748 / km²" },
  nilgiris:        { population: 735394,  density: 293,   popStr: "7.35 Lakh",  densityStr: "293 / km²" },
  viluppuram:      { population: 2093003, density: 392,   popStr: "20.93 Lakh", densityStr: "392 / km²" },
  kallakurichi:    { population: 1370281, density: 444,   popStr: "13.70 Lakh", densityStr: "444 / km²" },
  cuddalore:       { population: 2605914, density: 696,   popStr: "26.06 Lakh", densityStr: "696 / km²" },
  perambalur:      { population: 565223,  density: 328,   popStr: "5.65 Lakh",  densityStr: "328 / km²" },
  ariyalur:        { population: 754894,  density: 433,   popStr: "7.55 Lakh",  densityStr: "433 / km²" },
  karur:           { population: 1064493, density: 405,   popStr: "10.64 Lakh", densityStr: "405 / km²" },
  trichy:          { population: 2722290, density: 620,   popStr: "27.22 Lakh", densityStr: "620 / km²" },
  mayiladuthurai:  { population: 918356,  density: 567,   popStr: "9.18 Lakh",  densityStr: "567 / km²" },
  thanjavur:       { population: 2405890, density: 708,   popStr: "24.06 Lakh", densityStr: "708 / km²" },
  nagapattinam:    { population: 1616450, density: 617,   popStr: "16.16 Lakh", densityStr: "617 / km²" },
  tiruvarur:       { population: 1264277, density: 546,   popStr: "12.64 Lakh", densityStr: "546 / km²" },
  dindigul:        { population: 2159775, density: 339,   popStr: "21.60 Lakh", densityStr: "339 / km²" },
  pudukkottai:     { population: 1618345, density: 378,   popStr: "16.18 Lakh", densityStr: "378 / km²" },
  sivaganga:       { population: 1339101, density: 307,   popStr: "13.39 Lakh", densityStr: "307 / km²" },
  madurai:         { population: 2810400, density: 820,   popStr: "28.10 Lakh", densityStr: "820 / km²" },
  theni:           { population: 1245899, density: 398,   popStr: "12.46 Lakh", densityStr: "398 / km²" },
  virudhunagar:    { population: 1942288, density: 437,   popStr: "19.42 Lakh", densityStr: "437 / km²" },
  ramanathapuram:  { population: 1353445, density: 331,   popStr: "13.53 Lakh", densityStr: "331 / km²" },
  tenkasi:         { population: 1407627, density: 476,   popStr: "14.08 Lakh", densityStr: "476 / km²" },
  tirunelveli:     { population: 1680420, density: 420,   popStr: "16.80 Lakh", densityStr: "420 / km²" },
  thoothukudi:     { population: 1750176, density: 384,   popStr: "17.50 Lakh", densityStr: "384 / km²" },
  kanyakumari:     { population: 1870374, density: 1106,  popStr: "18.70 Lakh", densityStr: "1,106 / km²" }
};

// Map Heatmap/Choropleth Color Engine
function colorTNMap() {
  const mapPaths = document.querySelectorAll('.map-district-path');
  const indicator = document.getElementById('mapIndicatorSelect')?.value || 'population';

  // Find min and max values to normalize colors
  const values = Object.keys(districtValues).map(k => districtValues[k][indicator]);
  const min = Math.min(...values);
  const max = Math.max(...values);

  mapPaths.forEach(path => {
    const distName = path.getAttribute('data-district');
    const data = districtValues[distName];
    if (data) {
      const val = data[indicator];
      let pct = 0;
      if (max > min) {
        if (indicator === 'density') {
          // Logarithmic scale to handle Chennai density outlier smoothly
          pct = (Math.log(val) - Math.log(min)) / (Math.log(max) - Math.log(min));
        } else {
          pct = (val - min) / (max - min);
        }
      }

      // Interpolate color from light mint green (#a7f3d0) to deep forest green (#064e3b)
      // Light color RGB: 167, 243, 208
      // Dark color RGB: 6, 78, 59
      const r = Math.round(167 - (167 - 6) * pct);
      const g = Math.round(243 - (243 - 78) * pct);
      const b = Math.round(208 - (208 - 59) * pct);

      const fillColor = `rgb(${r}, ${g}, ${b})`;
      path.setAttribute('data-base-color', fillColor);

      if (!path.classList.contains('active')) {
        path.style.fill = fillColor;
      }
    }
  });
}

// Map Click and Hover Interaction Setup
document.addEventListener('DOMContentLoaded', () => {
  const mapPaths = document.querySelectorAll('.map-district-path');
  const resultCard = document.getElementById('mapSelectionResultCard');
  const selectionPrompt = document.getElementById('mapSelectionPrompt');
  const selectedNameEl = document.getElementById('selectedDistrictName');
  const selectedLabelEl = document.getElementById('selectedIndicatorLabel');
  const selectedValEl = document.getElementById('selectedDistrictVal');
  const viewFullBtn = document.getElementById('viewFullAnalyticsBtn');
  const indicatorSelect = document.getElementById('mapIndicatorSelect');

  // Handle indicator selector changes
  if (indicatorSelect) {
    indicatorSelect.addEventListener('change', () => {
      colorTNMap();
      // Refresh current active district selection values
      const activePath = document.querySelector('.map-district-path.active');
      if (activePath) {
        activePath.dispatchEvent(new Event('click'));
      }
    });
  }

  // Handle district path events
  mapPaths.forEach(path => {
    // Click interaction: Highlight district & load population / density stats
    path.addEventListener('click', () => {
      const distName = path.getAttribute('data-district');
      activeDistrict = distName;

      // Update highlight styles
      mapPaths.forEach(p => {
        p.classList.remove('active');
        p.style.stroke = '';
        p.style.strokeWidth = '';
        const baseColor = p.getAttribute('data-base-color');
        p.style.fill = baseColor || '';
      });

      path.classList.add('active');
      path.style.stroke = '#ffffff';
      path.style.strokeWidth = '3px';

      // Load data to result card
      const indicator = indicatorSelect?.value || 'population';
      const data = districtValues[distName];
      if (data) {
        const valStr = indicator === 'density' ? data.densityStr : data.popStr;
        const labelStr = indicator === 'density' ? 'Population Density' : 'Population';

        if (selectedNameEl) selectedNameEl.textContent = capitalizeFirstLetter(distName);
        if (selectedLabelEl) selectedLabelEl.textContent = labelStr;
        if (selectedValEl) selectedValEl.textContent = valStr;

        if (selectionPrompt) selectionPrompt.style.display = 'none';
        if (resultCard) {
          resultCard.style.display = 'block';
          resultCard.style.transform = 'translateY(0)';
        }
      }
    });

    // Hover tooltip interaction
    path.addEventListener('mousemove', (e) => {
      const tooltip = document.getElementById('mapTooltip');
      if (tooltip) {
        const distName = path.getAttribute('data-district');
        const indicator = indicatorSelect?.value || 'population';
        const data = districtValues[distName];
        if (data) {
          const valStr = indicator === 'density' ? data.densityStr : data.popStr;
          tooltip.textContent = `${capitalizeFirstLetter(distName)}: ${valStr}`;
        } else {
          tooltip.textContent = capitalizeFirstLetter(distName);
        }

        const wrapper = document.querySelector('.svg-map-wrapper');
        if (wrapper) {
          const rect = wrapper.getBoundingClientRect();
          const x = e.clientX - rect.left + 15;
          const y = e.clientY - rect.top - 15;
          tooltip.style.left = `${x}px`;
          tooltip.style.top = `${y}px`;
        }
        tooltip.style.opacity = '1';
      }
    });

    path.addEventListener('mouseleave', () => {
      const tooltip = document.getElementById('mapTooltip');
      if (tooltip) {
        tooltip.style.opacity = '0';
      }
    });
  });

  // Wire up the full analysis button
  if (viewFullBtn) {
    viewFullBtn.addEventListener('click', () => {
      switchTab('districts');
      if (typeof renderDashboard === 'function') {
        renderDashboard();
      }
    });
  }
});

window.colorTNMap = colorTNMap;

window.switchMapLang = switchMapLang;

// ==========================================
// LOGIN LOGIC
// ==========================================

function handleLogin(event) {
  event.preventDefault();
  
  const loginOverlay = document.getElementById('loginOverlay');
  const appContainer = document.getElementById('appContainer');
  const spinner = document.getElementById('loginSpinner');
  const btnText = document.querySelector('.login-btn-text');
  const loginError = document.getElementById('loginError');
  
  // Hide any previous error
  if (loginError) loginError.style.display = 'none';
  
  // Show spinner
  if (spinner) spinner.style.display = 'inline-block';
  if (btnText) btnText.style.display = 'none';

  // Simulate network request
  setTimeout(() => {
    transitionToApp(loginOverlay, appContainer);
  }, 800);
}

function transitionToApp(loginOverlay, appContainer) {
  if (loginOverlay) {
    loginOverlay.classList.add('login-exit');
    loginOverlay.addEventListener('animationend', function onEnd() {
      loginOverlay.removeEventListener('animationend', onEnd);
      loginOverlay.style.display = 'none';
      if (appContainer) {
        appContainer.style.display = 'flex';
        // Re-initialize lucide icons for the dashboard
        if (typeof lucide !== 'undefined') {
          lucide.createIcons();
        }
        // Initialize dashboard
        if (typeof renderDashboard === 'function') {
          renderDashboard();
        }
      }
    });
  }
}

function toggleLoginPassword(btn) {
  const input = document.getElementById('loginPassword');
  const eyeOpen = btn.querySelector('.eye-open');
  const eyeClosed = btn.querySelector('.eye-closed');
  
  if (input.type === 'password') {
    input.type = 'text';
    if(eyeOpen) eyeOpen.style.display = 'none';
    if(eyeClosed) eyeClosed.style.display = 'block';
  } else {
    input.type = 'password';
    if(eyeOpen) eyeOpen.style.display = 'block';
    if(eyeClosed) eyeClosed.style.display = 'none';
  }
}

// Ensure the function is available globally
window.handleLogin = handleLogin;
window.toggleLoginPassword = toggleLoginPassword;

// Initialize icons and dashboard on page load
document.addEventListener('DOMContentLoaded', () => {
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }
  
  // If app container is already visible (e.g. bypassing login during dev)
  const appContainer = document.getElementById('appContainer');
  if (appContainer && appContainer.style.display !== 'none') {
    if (typeof renderDashboard === 'function') {
      renderDashboard();
    }
  }
});

// ==========================================
// TABS & UI INTERACTION LOGIC
// ==========================================

function switchTab(tabId) {
  document.querySelectorAll('.nav-btn, .nav-item').forEach(btn => {
    btn.classList.remove('active');
    if (btn.getAttribute('data-tab') === tabId) {
      btn.classList.add('active');
    }
  });

  document.querySelectorAll('.tab-pane').forEach(pane => {
    pane.classList.remove('active');
  });
  
  const targetPane = document.getElementById('tab-' + tabId);
  if (targetPane) {
    targetPane.classList.add('active');
  }

  if (tabId === 'tnmap') {
    if (typeof colorTNMap === 'function') {
      colorTNMap();
    }
  }
}

function renderRainfallDashboard() {
  const district = districtData[activeDistrict];
  if (!district || !district.rainfall) return;
  const rData = district.rainfall;

  const currentValEl = document.getElementById('rainfallCurrentVal');
  if (currentValEl) currentValEl.textContent = parseFloat(rData.val);

  const trendEl = document.getElementById('rainfallTrendVal');
  if (trendEl) {
    trendEl.innerHTML = `${rData.trend} from last month`;
  }

  const chartData = rData.chart.data;
  if (chartData && chartData.length > 0) {
    const maxValEl = document.getElementById('rainfallMaxVal');
    if (maxValEl) maxValEl.textContent = Math.max(...chartData).toFixed(1);

    const avgValEl = document.getElementById('rainfallAvgVal');
    if (avgValEl) avgValEl.textContent = (chartData.reduce((a, b) => a + b, 0) / chartData.length).toFixed(1);
  }

  const ctxEl = document.getElementById('rainfallBarChart');
  if (ctxEl) {
    const ctx = ctxEl.getContext('2d');
    if (window.rainfallChartInstance) {
      window.rainfallChartInstance.destroy();
    }
    window.rainfallChartInstance = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: rData.chart.labels,
        datasets: [{
          label: 'Monthly Rainfall (mm)',
          data: rData.chart.data,
          backgroundColor: '#0ea5e9',
          borderRadius: 4
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false }
        },
        scales: {
          y: { beginAtZero: true, grid: { color: 'rgba(0,0,0,0.05)' } },
          x: { grid: { display: false } }
        }
      }
    });
  }
}

// ==========================================
// AGRICULTURE MARKET DATA & LOGIC
// ==========================================

// Base commodity data with categories
const agriBaseData = {
  vegetables: [
    { name: 'Tomato',        emoji: '🍅', unit: '/ Kg',    basePrice: 18.00, change: -0.8 },
    { name: 'Onion',         emoji: '🧅', unit: '/ Kg',    basePrice: 25.00, change: +1.1 },
    { name: 'Potato',        emoji: '🥔', unit: '/ Kg',    basePrice: 22.00, change: +2.3 },
    { name: 'Brinjal',       emoji: '🍆', unit: '/ Kg',    basePrice: 30.00, change: -1.5 },
    { name: 'Carrot',        emoji: '🥕', unit: '/ Kg',    basePrice: 45.00, change: +3.2 },
    { name: 'Beans',         emoji: '🫘', unit: '/ Kg',    basePrice: 55.00, change: -2.1 },
    { name: 'Cabbage',       emoji: '🥬', unit: '/ Kg',    basePrice: 20.00, change: +0.9 },
    { name: 'Turmeric',      emoji: '🟡', unit: '/ Kg',    basePrice: 128.00, change: +3.6 },
    { name: 'Drumstick',     emoji: '🌿', unit: '/ Kg',    basePrice: 60.00, change: +1.4 },
    { name: 'Ladies Finger', emoji: '🫑', unit: '/ Kg',    basePrice: 35.00, change: -0.5 },
    { name: 'Cauliflower',   emoji: '🥦', unit: '/ Kg',    basePrice: 32.00, change: +2.8 },
    { name: 'Green Chilli',  emoji: '🌶️', unit: '/ Kg',    basePrice: 40.00, change: -3.4 },
    { name: 'Bitter Gourd',  emoji: '🥒', unit: '/ Kg',    basePrice: 38.00, change: +1.6 },
    { name: 'Ridge Gourd',   emoji: '🟢', unit: '/ Kg',    basePrice: 28.00, change: -0.9 },
    { name: 'Bottle Gourd',  emoji: '🫛', unit: '/ Kg',    basePrice: 24.00, change: +0.5 },
    { name: 'Snake Gourd',   emoji: '🥒', unit: '/ Kg',    basePrice: 26.00, change: -1.2 },
    { name: 'Pumpkin',       emoji: '🎃', unit: '/ Kg',    basePrice: 18.00, change: +2.1 },
    { name: 'Radish',        emoji: '🔴', unit: '/ Kg',    basePrice: 22.00, change: -0.7 },
    { name: 'Beetroot',      emoji: '🟣', unit: '/ Kg',    basePrice: 30.00, change: +1.9 },
    { name: 'Cucumber',      emoji: '🥒', unit: '/ Kg',    basePrice: 20.00, change: -1.0 },
    { name: 'Sweet Potato',  emoji: '🍠', unit: '/ Kg',    basePrice: 35.00, change: +0.8 },
    { name: 'Tapioca',       emoji: '🥔', unit: '/ Kg',    basePrice: 28.00, change: +1.3 },
    { name: 'Coriander',     emoji: '🌱', unit: '/ Bundle',basePrice: 10.00, change: -4.2 },
    { name: 'Curry Leaves',  emoji: '🍃', unit: '/ Bundle',basePrice: 8.00,  change: +2.5 },
    { name: 'Mint',          emoji: '🌿', unit: '/ Bundle',basePrice: 12.00, change: -1.8 },
  ],
  fruits: [
    { name: 'Banana',        emoji: '🍌', unit: '/ Kg',    basePrice: 22.00, change: -1.2 },
    { name: 'Mango',         emoji: '🥭', unit: '/ Kg',    basePrice: 80.00, change: +5.4 },
    { name: 'Coconut',       emoji: '🥥', unit: '/ Piece', basePrice: 27.50, change: +2.5 },
    { name: 'Papaya',        emoji: '🍈', unit: '/ Kg',    basePrice: 25.00, change: -0.6 },
    { name: 'Guava',         emoji: '🍐', unit: '/ Kg',    basePrice: 40.00, change: +1.8 },
    { name: 'Grapes',        emoji: '🍇', unit: '/ Kg',    basePrice: 70.00, change: +3.1 },
    { name: 'Watermelon',    emoji: '🍉', unit: '/ Kg',    basePrice: 15.00, change: -2.3 },
    { name: 'Pineapple',     emoji: '🍍', unit: '/ Kg',    basePrice: 35.00, change: +0.7 },
    { name: 'Pomegranate',   emoji: '🔴', unit: '/ Kg',    basePrice: 120.00, change: +4.2 },
    { name: 'Apple',         emoji: '🍎', unit: '/ Kg',    basePrice: 150.00, change: +1.5 },
    { name: 'Orange',        emoji: '🍊', unit: '/ Kg',    basePrice: 60.00, change: -0.9 },
    { name: 'Sweet Lime',    emoji: '🍋', unit: '/ Kg',    basePrice: 45.00, change: +2.0 },
    { name: 'Lemon',         emoji: '🍋', unit: '/ Kg',    basePrice: 55.00, change: -3.8 },
    { name: 'Sapota',        emoji: '🟤', unit: '/ Kg',    basePrice: 50.00, change: +1.3 },
    { name: 'Jackfruit',     emoji: '🟡', unit: '/ Kg',    basePrice: 30.00, change: +0.6 },
    { name: 'Custard Apple', emoji: '🟢', unit: '/ Kg',    basePrice: 90.00, change: +2.7 },
    { name: 'Fig',           emoji: '🟣', unit: '/ Kg',    basePrice: 180.00, change: +5.1 },
    { name: 'Dragon Fruit',  emoji: '🩷', unit: '/ Kg',    basePrice: 200.00, change: +3.9 },
    { name: 'Tender Coconut',emoji: '🥥', unit: '/ Piece', basePrice: 35.00, change: +1.0 },
    { name: 'Amla',          emoji: '🟢', unit: '/ Kg',    basePrice: 42.00, change: -2.4 },
  ]
};

// Price multipliers per district (simulate market variation)
const districtPriceMultiplier = {
  ariyalur: 0.95, chengalpattu: 1.08, chennai: 1.15, coimbatore: 1.00,
  cuddalore: 0.97, dharmapuri: 0.92, dindigul: 0.98, erode: 1.02,
  kallakurichi: 0.93, kanchipuram: 1.06, kanyakumari: 1.10, karur: 0.96,
  krishnagiri: 0.91, madurai: 1.05, mayiladuthurai: 0.98, nagapattinam: 1.01,
  namakkal: 0.99, nilgiris: 1.12, perambalur: 0.94, pudukkottai: 0.97,
  ramanathapuram: 1.03, ranipet: 1.04, salem: 1.00, sivaganga: 0.96,
  tenkasi: 0.95, thanjavur: 1.03, theni: 0.99, thoothukudi: 1.07,
  tiruchirappalli: 1.04, tirunelveli: 1.06, tirupathur: 0.98, tiruppur: 1.02,
  tiruvallur: 1.09, tiruvannamalai: 0.97, tiruvarur: 1.00, vellore: 1.05,
  viluppuram: 0.96, virudhunagar: 1.01
};

// Period multipliers
const periodMultipliers = { today: 1.0, week: 0.97, month: 0.92 };

let agriPeriod = 'today';
let agriSearchOpen = false;

function getAgriItems(category) {
  const district = document.getElementById('agriMarketSelect')?.value || 'coimbatore';
  const distMult = districtPriceMultiplier[district] || 1.0;
  const periodMult = periodMultipliers[agriPeriod] || 1.0;
  return agriBaseData[category].map(item => ({
    ...item,
    price: +(item.basePrice * distMult * periodMult).toFixed(2),
    change: +(item.change + (distMult - 1) * 10).toFixed(1)
  }));
}

function buildCommodityCard(item) {
  const isUp = item.change >= 0;
  const changeColor = isUp ? '#16a34a' : '#ef4444';
  const changeBg = isUp ? '#dcfce7' : '#fee2e2';
  const arrow = isUp ? '▲' : '▼';
  return `
    <div style="background:white; border-radius:14px; padding:0.85rem 1rem; display:flex; align-items:center; gap:0.9rem; box-shadow:0 1px 4px rgba(0,0,0,0.06);">
      <div style="font-size:1.8rem; width:44px; height:44px; display:flex; align-items:center; justify-content:center; background:#f0fdf4; border-radius:10px; flex-shrink:0;">${item.emoji}</div>
      <div style="flex:1;">
        <div style="font-weight:700; font-size:0.95rem; color:#0f172a; margin-bottom:0.1rem;">${item.name}</div>
        <div style="color:#64748b; font-size:0.8rem;">₹ ${item.price.toFixed(2)} <span style="color:#94a3b8;">${item.unit}</span></div>
      </div>
      <div style="background:${changeBg}; color:${changeColor}; padding:0.25rem 0.65rem; border-radius:20px; font-size:0.78rem; font-weight:700; white-space:nowrap;">
        ${arrow} ${Math.abs(item.change).toFixed(1)}%
      </div>
    </div>`;
}

function setAgriPeriod(period) {
  agriPeriod = period;
  ['today', 'week', 'month'].forEach(p => {
    const b = document.getElementById('agriTab-' + p);
    if (b) {
      b.style.background = p === period ? '#16a34a' : 'transparent';
      b.style.color = p === period ? 'white' : '#64748b';
      b.style.fontWeight = p === period ? '700' : '600';
    }
  });
  renderAgriMarket();
}

function renderAgriMarket() {
  const vegesList = document.getElementById('agriVegesList');
  const fruitsList = document.getElementById('agriFruitsList');
  if (vegesList) vegesList.innerHTML = getAgriItems('vegetables').map(buildCommodityCard).join('');
  if (fruitsList) fruitsList.innerHTML = getAgriItems('fruits').map(buildCommodityCard).join('');
  // Re-render search if open
  if (agriSearchOpen) filterAgriList();
  if (typeof lucide !== 'undefined') lucide.createIcons();
}

function openAgriSearch() {
  agriSearchOpen = true;
  const bar = document.getElementById('agriSearchBar');
  if (bar) { bar.style.display = 'block'; }
  document.getElementById('agriVegesSection').style.display = 'none';
  document.getElementById('agriFruitsSection').style.display = 'none';
  document.getElementById('agriSearchResults').style.display = 'flex';
  setTimeout(() => document.getElementById('agriSearchInput')?.focus(), 100);
  if (typeof lucide !== 'undefined') lucide.createIcons();
}

function closeAgriSearch() {
  agriSearchOpen = false;
  const bar = document.getElementById('agriSearchBar');
  if (bar) { bar.style.display = 'none'; }
  const inp = document.getElementById('agriSearchInput');
  if (inp) inp.value = '';
  document.getElementById('agriVegesSection').style.display = 'block';
  document.getElementById('agriFruitsSection').style.display = 'block';
  document.getElementById('agriSearchResults').style.display = 'none';
}

function filterAgriList() {
  const query = (document.getElementById('agriSearchInput')?.value || '').toLowerCase().trim();
  const resultsEl = document.getElementById('agriSearchResults');
  if (!resultsEl) return;
  const allItems = [...getAgriItems('vegetables'), ...getAgriItems('fruits')];
  const filtered = query ? allItems.filter(i => i.name.toLowerCase().includes(query)) : allItems;
  if (filtered.length === 0) {
    resultsEl.innerHTML = `<div style="text-align:center;padding:2rem;color:#94a3b8;font-size:0.95rem;">No results for "<strong>${query}</strong>"</div>`;
  } else {
    resultsEl.innerHTML = filtered.map(buildCommodityCard).join('');
  }
}

function openAgriReport() {
  const modal = document.getElementById('agriReportModal');
  const content = document.getElementById('agriReportContent');
  if (!modal || !content) return;
  const district = document.getElementById('agriMarketSelect')?.options[document.getElementById('agriMarketSelect').selectedIndex]?.text || 'Market';
  const periodLabel = { today: 'Today', week: 'This Week', month: 'This Month' }[agriPeriod];
  const veges = getAgriItems('vegetables');
  const fruits = getAgriItems('fruits');

  const buildTable = (items, title, emoji) => `
    <div style="margin-bottom:1.5rem;">
      <div style="display:flex;align-items:center;gap:0.5rem;margin-bottom:0.8rem;">
        <span style="font-size:1.2rem;">${emoji}</span>
        <h3 style="font-size:1rem;font-weight:700;color:#0f172a;margin:0;font-family:'Outfit',sans-serif;">${title}</h3>
      </div>
      <table style="width:100%;border-collapse:collapse;font-family:'Outfit',sans-serif;font-size:0.88rem;">
        <thead>
          <tr style="background:#f0fdf4;">
            <th style="padding:0.6rem 0.8rem;text-align:left;color:#15803d;font-weight:700;border-bottom:2px solid #bbf7d0;">Commodity</th>
            <th style="padding:0.6rem 0.8rem;text-align:right;color:#15803d;font-weight:700;border-bottom:2px solid #bbf7d0;">Price</th>
            <th style="padding:0.6rem 0.8rem;text-align:right;color:#15803d;font-weight:700;border-bottom:2px solid #bbf7d0;">Change</th>
          </tr>
        </thead>
        <tbody>
          ${items.map((item, i) => {
            const isUp = item.change >= 0;
            const clr = isUp ? '#16a34a' : '#ef4444';
            const arrow = isUp ? '▲' : '▼';
            return `<tr style="background:${i%2===0?'white':'#f8fafc'};">
              <td style="padding:0.6rem 0.8rem;display:flex;align-items:center;gap:0.5rem;">${item.emoji} ${item.name}</td>
              <td style="padding:0.6rem 0.8rem;text-align:right;font-weight:600;">₹${item.price.toFixed(2)} <span style="color:#94a3b8;font-size:0.78rem;">${item.unit}</span></td>
              <td style="padding:0.6rem 0.8rem;text-align:right;color:${clr};font-weight:700;">${arrow} ${Math.abs(item.change).toFixed(1)}%</td>
            </tr>`;
          }).join('')}
        </tbody>
      </table>
    </div>`;

  content.innerHTML = `
    <p style="color:#64748b;font-size:0.85rem;margin-bottom:1.2rem;font-family:'Outfit',sans-serif;">
      <strong>${district}</strong> &nbsp;·&nbsp; ${periodLabel} &nbsp;·&nbsp; ${new Date().toLocaleDateString('en-IN', {day:'numeric',month:'short',year:'numeric'})}
    </p>
    ${buildTable(veges, 'Vegetables', '🥬')}
    ${buildTable(fruits, 'Fruits', '🍎')}`;

  modal.style.display = 'block';
}

function closeAgriReport() {
  const modal = document.getElementById('agriReportModal');
  if (modal) modal.style.display = 'none';
}

// Attach listeners to category cards
document.querySelectorAll('.category-card').forEach(card => {
  card.addEventListener('click', () => {
    document.querySelectorAll('.category-card').forEach(c => c.classList.remove('active'));
    card.classList.add('active');

    const category = card.getAttribute('data-category');
    if (category === 'rainfall') {
      switchTab('rainfall');
      renderRainfallDashboard();
    } else if (category === 'agriculture') {
      switchTab('agriculture');
      if (typeof lucide !== 'undefined') lucide.createIcons();
      renderAgriMarket();
    } else if (category === 'traffic') {
      switchTab('traffic');
      if (typeof renderTrafficDashboard === 'function') {
        renderTrafficDashboard();
      }
    } else if (category === 'population') {
      switchTab('tnmap');
    } else {
      activeCategory = category;
      switchTab('districts');
      if (typeof renderDashboard === 'function') {
        renderDashboard();
      }
    }
  });
});

function renderTrafficDashboard() {
  const districtSelect = document.getElementById('trafficDistrictSelect');
  if (districtSelect) {
    if (districtData[activeDistrict]) {
      // Find matching option or add it
      let found = Array.from(districtSelect.options).some(opt => opt.value === activeDistrict);
      if (!found) {
        const opt = document.createElement('option');
        opt.value = activeDistrict;
        opt.text = capitalizeFirstLetter(activeDistrict);
        districtSelect.appendChild(opt);
      }
      districtSelect.value = activeDistrict;
    }
  }

  const dData = districtData[activeDistrict];
  if (!dData || !dData.traffic) return;
  const tData = dData.traffic;

  // Extract congestion index from stats e.g., "3.1/10" -> 3.1
  let congestionStr = tData.stats["Congestion Index"] || "3.0/10";
  let congestionVal = parseFloat(congestionStr.split('/')[0]);
  if (isNaN(congestionVal)) congestionVal = 3.0;

  // Calculate score out of 100
  let score = Math.round(congestionVal * 10);
  if (score > 100) score = 100;
  
  // Determine status
  let status = "Low";
  let statusColor = "#10b981"; // green
  if (score >= 35) {
    status = "Moderate";
    statusColor = "#f59e0b"; // yellow
  }
  if (score >= 60) {
    status = "High";
    statusColor = "#ef4444"; // red
  }

  const statusTextEl = document.getElementById('trafficStatusText');
  if (statusTextEl) {
    statusTextEl.textContent = status;
    statusTextEl.style.color = statusColor;
  }
  
  const scoreTextEl = document.getElementById('trafficScoreText');
  if (scoreTextEl) {
    scoreTextEl.textContent = score;
  }

  // Update congested areas list (mock dynamic data based on district)
  const congestedListEl = document.getElementById('trafficCongestedList');
  if (congestedListEl) {
    const areas = {
      chennai: ["Anna Salai", "OMR IT Corridor", "Guindy Kathipara"],
      coimbatore: ["Avinashi Road", "Ukkadam", "Gandhipuram"],
      madurai: ["Goripalayam", "Kalavasal", "Arapalayam"],
      tiruchirappalli: ["Chatram Bus Stand", "Cantonment", "Thillai Nagar"],
      salem: ["New Bus Stand", "Five Roads", "Omalur Main Road"]
    };
    
    const districtAreas = areas[activeDistrict] || [`${capitalizeFirstLetter(activeDistrict)} Main Road`, `${capitalizeFirstLetter(activeDistrict)} Junction`, "Bypass Road"];
    
    let html = '';
    districtAreas.forEach((area, index) => {
      // Generate mock delay and severity based on base congestion
      let areaScore = score - (index * 15) + (Math.random() * 10 - 5);
      let areaDelay = Math.max(5, Math.round((areaScore / 100) * 90));
      let areaStatus = "Low";
      let areaColor = "#10b981";
      if (areaScore >= 35) { areaStatus = "Moderate"; areaColor = "#f59e0b"; }
      if (areaScore >= 60) { areaStatus = "High"; areaColor = "#ef4444"; }

      html += `
        <div style="background: white; border-radius: 12px; padding: 1rem; display: flex; justify-content: space-between; align-items: center; box-shadow: 0 1px 4px rgba(0,0,0,0.02); border: 1px solid rgba(0,0,0,0.02);">
          <span style="font-family: 'Outfit', sans-serif; font-size: 0.95rem; font-weight: 700; color: #0f172a;">${area}</span>
          <div style="display: flex; gap: 1rem; align-items: center;">
            <span style="font-family: 'Outfit', sans-serif; font-size: 0.8rem; color: ${areaColor}; font-weight: 600;">${areaStatus}</span>
            <span style="font-family: 'Outfit', sans-serif; font-size: 0.8rem; color: #64748b;">${areaDelay} min delay</span>
          </div>
        </div>
      `;
    });
    congestedListEl.innerHTML = html;
  }
}
window.renderTrafficDashboard = renderTrafficDashboard;

// Routing UI Functions
function useCurrentLocation() {
  const input = document.getElementById('trafficCurrentLocation');
  if (input) {
    input.value = "Detecting...";
    setTimeout(() => {
      input.value = "My Current Location";
    }, 600);
  }
}
window.useCurrentLocation = useCurrentLocation;

function calculateTrafficRoute() {
  const startInput = document.getElementById('trafficCurrentLocation');
  const dropInput = document.getElementById('trafficDropLocation');
  const statsBox = document.getElementById('routeStatsBox');

  if (!startInput.value || !dropInput.value) {
    alert("Please enter both starting point and destination.");
    return;
  }

  // Simulate calculating route
  const btn = document.querySelector('button[onclick="calculateTrafficRoute()"]');
  const originalHtml = btn.innerHTML;
  btn.innerHTML = `<i data-lucide="loader-2" class="spin" style="width: 18px; height: 18px;"></i> Calculating...`;
  if (typeof lucide !== 'undefined') lucide.createIcons();

  setTimeout(() => {
    btn.innerHTML = originalHtml;
    if (typeof lucide !== 'undefined') lucide.createIcons();
    
    if (statsBox) {
      statsBox.style.display = 'block';
    }
  }, 1000);
}
window.calculateTrafficRoute = calculateTrafficRoute;

// Attach listener to Rainfall district select
const rainfallDistrictSelect = document.getElementById('rainfallDistrictSelect');
if (rainfallDistrictSelect) {
  rainfallDistrictSelect.addEventListener('change', (e) => {
    activeDistrict = e.target.value;
    const mainSelect = document.getElementById('districtSelect');
    if (mainSelect) mainSelect.value = activeDistrict;
    renderRainfallDashboard();
  });
}

// ==========================================
// TRANSLATION LOGIC
// ==========================================
const i18n = {
  en: {
    welcome: "Welcome to TN Smart Data",
    loginMobilePlaceholder: "Mobile Number",
    loginPasswordPlaceholder: "Password",
    forgot: "Forgot Password?",
    loginBtn: "Login",
    orContinue: "or continue with",
    newUser: "New User?",
    registerHere: "Register Here",
    titleTa: "Hello!",
    subtitleTa: "Welcome!"
  },
  ta: {
    welcome: "TN Smart Data-க்கு உங்களை வரவேற்கிறோம்",
    loginMobilePlaceholder: "மொபைல் எண் / Mobile Number",
    loginPasswordPlaceholder: "கடவுச்சொல் / Password",
    forgot: "கடவுச்சொல்லை மறந்துவிட்டீர்களா?",
    loginBtn: "உள்நுழையவும்",
    orContinue: "அல்லது இதன் மூலம் தொடரவும்",
    newUser: "புதிய பயனர்?",
    registerHere: "இங்கே பதிவு செய்க",
    titleTa: "வணக்கம்!",
    subtitleTa: "Vanakkam!"
  }
};

function setLang(lang) {
  // Update toggle buttons
  document.getElementById('langTamil').classList.toggle('active', lang === 'ta');
  document.getElementById('langEnglish').classList.toggle('active', lang === 'en');
  
  // Update data-lang-key elements
  document.querySelectorAll('[data-lang-key]').forEach(el => {
    const key = el.getAttribute('data-lang-key');
    if (i18n[lang] && i18n[lang][key]) {
      el.textContent = i18n[lang][key];
    }
  });

  // Update specific elements
  const titleTa = document.querySelector('.login-title-ta');
  if (titleTa) titleTa.textContent = i18n[lang].titleTa;
  
  const subtitleTa = document.querySelector('.login-subtitle-ta');
  if (subtitleTa) subtitleTa.textContent = i18n[lang].subtitleTa;
  
  const loginMobile = document.getElementById('loginMobile');
  if (loginMobile) loginMobile.placeholder = i18n[lang].loginMobilePlaceholder;
  
  const loginPassword = document.getElementById('loginPassword');
  if (loginPassword) loginPassword.placeholder = i18n[lang].loginPasswordPlaceholder;
}
window.setLang = setLang;
window.switchTab = switchTab;
window.setAgriPeriod = setAgriPeriod;
window.renderAgriMarket = renderAgriMarket;
window.openAgriSearch = openAgriSearch;
window.closeAgriSearch = closeAgriSearch;
window.filterAgriList = filterAgriList;
window.openAgriReport = openAgriReport;
window.closeAgriReport = closeAgriReport;

// ==========================================
// SOCIAL LOGIN LOGIC
// ==========================================
function socialLogin(provider) {
  const loginOverlay = document.getElementById('loginOverlay');
  const appContainer = document.getElementById('appContainer');
  const spinner = document.getElementById('loginSpinner');
  const btnText = document.querySelector('.login-btn-text');
  
  // Show spinner on the login button
  if (spinner) spinner.style.display = 'inline-block';
  if (btnText) btnText.style.display = 'none';

  console.log('Logging in with', provider);

  // Simulate network request then transition
  setTimeout(() => {
    transitionToApp(loginOverlay, appContainer);
  }, 800);
}
window.socialLogin = socialLogin;

// ==========================================
// ADDITIONAL UTILITY FUNCTIONS & EVENT LISTENERS
// ==========================================

function capitalizeFirstLetter(string) {
  if (!string) return '';
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function getCategoryCategoryBadge(category) {
  const badges = {
    population: 'Demographics',
    education: 'Education',
    health: 'Healthcare',
    employment: 'Employment',
    water: 'Hydrology',
    rainfall: 'Climate',
    traffic: 'Mobility',
    agriculture: 'Agriculture'
  };
  return badges[category] || capitalizeFirstLetter(category);
}

function hexToRgba(hex, alpha = 1) {
  hex = hex.replace('#', '');
  if (hex.length === 3) {
    hex = hex.split('').map(char => char + char).join('');
  }
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

function adjustColorBrightness(hex, percent) {
  hex = hex.replace('#', '');
  if (hex.length === 3) {
    hex = hex.split('').map(char => char + char).join('');
  }
  let r = parseInt(hex.substring(0, 2), 16);
  let g = parseInt(hex.substring(2, 4), 16);
  let b = parseInt(hex.substring(4, 6), 16);

  r = Math.min(255, Math.max(0, r + (r * percent) / 100));
  g = Math.min(255, Math.max(0, g + (g * percent) / 100));
  b = Math.min(255, Math.max(0, b + (b * percent) / 100));

  const rHex = Math.round(r).toString(16).padStart(2, '0');
  const gHex = Math.round(g).toString(16).padStart(2, '0');
  const bHex = Math.round(b).toString(16).padStart(2, '0');

  return `#${rHex}${gHex}${bHex}`;
}

// Hook up event listeners after DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  // Sidebar & Bottom Navigation
  document.querySelectorAll('.sidebar-menu .nav-item, .bottom-nav .nav-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const tabId = btn.getAttribute('data-tab');
      if (tabId) {
        switchTab(tabId);
      }
    });
  });

  // District Selector Update
  const districtSelect = document.getElementById('districtSelect');
  if (districtSelect) {
    districtSelect.addEventListener('change', (e) => {
      activeDistrict = e.target.value;
      if (typeof renderDashboard === 'function') {
        renderDashboard();
      }
      // Sync with rainfall district select if visible
      const rainSelect = document.getElementById('rainfallDistrictSelect');
      if (rainSelect) rainSelect.value = activeDistrict;
    });
  }

  // Theme Toggle (Dark / Light Mode)
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      document.body.classList.toggle('dark-theme');
      const isDark = document.body.classList.contains('dark-theme');
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
      if (typeof renderDashboard === 'function') {
        renderDashboard();
      }
    });
  }

  // Load saved theme on boot
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-theme');
  }

  // Notification Toggle
  const notificationBtn = document.getElementById('notificationBtn');
  const notificationDropdown = document.getElementById('notificationDropdown');
  if (notificationBtn && notificationDropdown) {
    notificationBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      notificationDropdown.classList.toggle('show');
    });
    document.addEventListener('click', () => {
      notificationDropdown.classList.remove('show');
    });
  }

  // Modal option cards in Tamil Nadu Special Modules modal
  document.querySelectorAll('.modal-option-card').forEach(card => {
    card.addEventListener('click', () => {
      const tabLink = card.getAttribute('data-tab-link');
      if (tabLink) {
        switchTab(tabLink);
        const modal = document.getElementById('moreOptionsModal');
        if (modal) modal.style.display = 'none';
      }
    });
  });
});

// ============================================================
//  ROUTE PLANNER & NAVIGATION FLOW
// ============================================================

/**
 * Called when user clicks "Get Directions".
 * Validates inputs then shows the Location Services modal.
 */
function calculateTrafficRoute() {
  const start = (document.getElementById('trafficCurrentLocation')?.value || '').trim();
  const dest  = (document.getElementById('trafficDropLocation')?.value  || '').trim();

  if (!start || !dest) {
    if (!start) {
      const el = document.getElementById('trafficCurrentLocation');
      if (el) { el.style.borderColor = '#ef4444'; setTimeout(() => el.style.borderColor = '#e2e8f0', 2000); }
    }
    if (!dest) {
      const el = document.getElementById('trafficDropLocation');
      if (el) { el.style.borderColor = '#ef4444'; setTimeout(() => el.style.borderColor = '#e2e8f0', 2000); }
    }
    return;
  }

  // Store route info for the navigation screen
  window._navRoute = { start, dest };

  // Show the Location Services bottom-sheet modal
  const modal = document.getElementById('locationServicesModal');
  if (modal) modal.style.display = 'flex';
}

/**
 * Fills the "Starting Point" input with GPS or simulated location.
 */
function useCurrentLocation() {
  const input = document.getElementById('trafficCurrentLocation');
  if (!input) return;

  if (navigator.geolocation) {
    input.value = 'Locating\u2026';
    input.style.color = '#94a3b8';
    navigator.geolocation.getCurrentPosition(
      () => { input.value = 'My Current Location'; input.style.color = '#0f172a'; },
      () => { input.value = 'Chennai, Tamil Nadu'; input.style.color = '#0f172a'; },
      { timeout: 5000 }
    );
  } else {
    input.value = 'Chennai, Tamil Nadu';
  }
}

/**
 * Closes the Location Services bottom-sheet modal.
 */
function closeLocationModal() {
  const modal = document.getElementById('locationServicesModal');
  if (modal) modal.style.display = 'none';
}

/**
 * Called when user allows location access.
 * Hides location modal and opens the full-screen Navigation screen.
 */
function enableLocationAndNavigate() {
  closeLocationModal();

  const route = window._navRoute || { start: 'Current Location', dest: 'Destination' };

  // Update labels inside navigation screen
  const destLabel = document.getElementById('navDestinationLabel');
  if (destLabel) destLabel.textContent = route.dest;

  const startLabel = document.getElementById('navStartLabel');
  if (startLabel) startLabel.textContent = route.start.length > 15 ? route.start.substring(0, 14) + '\u2026' : route.start;

  const endLabel = document.getElementById('navEndLabel');
  if (endLabel) endLabel.textContent = route.dest.length > 12 ? route.dest.substring(0, 11) + '\u2026' : route.dest;

  // Randomise ETA/distance for realism
  const eta   = Math.floor(Math.random() * 20) + 18;
  const dist  = (Math.random() * 10 + 8).toFixed(1);

  const etaEl = document.getElementById('navEtaTime');
  if (etaEl) etaEl.textContent = `${eta} min`;

  const routeEl = document.getElementById('navRouteInfo');
  if (routeEl) routeEl.textContent = `${dist} km \u2022 Fastest route`;

  // Show navigation screen
  const navScreen = document.getElementById('navigationScreen');
  if (navScreen) {
    navScreen.style.display = 'flex';
    if (typeof lucide !== 'undefined' && lucide.createIcons) lucide.createIcons();
  }
}

/**
 * Closes the full-screen Navigation screen.
 */
function closeNavigationScreen() {
  const navScreen = document.getElementById('navigationScreen');
  if (navScreen) navScreen.style.display = 'none';
}

