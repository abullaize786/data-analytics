
const districtData = {
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
const templeData = {
  meenakshi: {
    name: "Madurai Meenakshi Amman Temple",
    crowd: "14,250",
    dharma: "120 Mins",
    special: "30 Mins",
    security: "Green (Fast)",
    status: "Normal Crowd",
    badgeClass: "success",
    chart: [3200, 5800, 8500, 14250, 11500, 7500]
  },
  srirangam: {
    name: "Srirangam Ranganathaswamy Temple",
    crowd: "18,900",
    dharma: "180 Mins",
    special: "45 Mins",
    security: "Orange (Moderate)",
    status: "High Crowds",
    badgeClass: "warning",
    chart: [5200, 8500, 12000, 18900, 14000, 9500]
  },
  palani: {
    name: "Palani Dhandayuthapani Temple",
    crowd: "26,400",
    dharma: "240 Mins",
    special: "60 Mins",
    security: "Red (Slow)",
    status: "Peak Festivals",
    badgeClass: "pending",
    chart: [9000, 15000, 21000, 26400, 18000, 11000]
  },
  brihadeeswarar: {
    name: "Thanjavur Brihadeeswarar Temple",
    crowd: "5,800",
    dharma: "20 Mins",
    special: "5 Mins",
    security: "Green (Excellent)",
    status: "Low Crowd",
    badgeClass: "success",
    chart: [1200, 2800, 4200, 5800, 3900, 2100]
  }
};
const daData = {
  coimbatore: { taName: 'கோயம்புத்தூர்', pop: '34.45 Lakh', area: '4,722 sq.km', den: '729 /sq.km', lit: '81.98%', dev: '0.76', devStat: 'High', grow: '1.35%', growStat: 'Positive', safe: '0.65', safeStat: 'Medium', env: '0.68', envStat: 'Good' },
  chennai: { taName: 'சென்னை', pop: '70.88 Lakh', area: '426 sq.km', den: '26,553 /sq.km', lit: '90.18%', dev: '0.88', devStat: 'High', grow: '2.10%', growStat: 'Positive', safe: '0.58', safeStat: 'Medium', env: '0.45', envStat: 'Poor' },
  madurai: { taName: 'மதுரை', pop: '30.38 Lakh', area: '3,741 sq.km', den: '811 /sq.km', lit: '83.45%', dev: '0.68', devStat: 'Medium', grow: '1.15%', growStat: 'Positive', safe: '0.70', safeStat: 'High', env: '0.60', envStat: 'Good' },
  trichy: { taName: 'திருச்சிராப்பள்ளி', pop: '27.22 Lakh', area: '4,404 sq.km', den: '602 /sq.km', lit: '83.23%', dev: '0.72', devStat: 'High', grow: '1.20%', growStat: 'Positive', safe: '0.75', safeStat: 'High', env: '0.65', envStat: 'Good' },
  salem: { taName: 'சேலம்', pop: '34.82 Lakh', area: '5,245 sq.km', den: '663 /sq.km', lit: '72.86%', dev: '0.65', devStat: 'Medium', grow: '1.05%', growStat: 'Positive', safe: '0.68', safeStat: 'Medium', env: '0.55', envStat: 'Medium' },
  tirunelveli: { taName: 'திருநெல்வேலி', pop: '30.77 Lakh', area: '6,823 sq.km', den: '453 /sq.km', lit: '82.50%', dev: '0.62', devStat: 'Medium', grow: '0.90%', growStat: 'Positive', safe: '0.78', safeStat: 'High', env: '0.70', envStat: 'Good' },
  vellore: { taName: 'வேலூர்', pop: '39.36 Lakh', area: '6,075 sq.km', den: '648 /sq.km', lit: '79.17%', dev: '0.66', devStat: 'Medium', grow: '1.10%', growStat: 'Positive', safe: '0.62', safeStat: 'Medium', env: '0.58', envStat: 'Medium' },
  thanjavur: { taName: 'தஞ்சாவூர்', pop: '24.05 Lakh', area: '3,396 sq.km', den: '691 /sq.km', lit: '82.64%', dev: '0.64', devStat: 'Medium', grow: '0.85%', growStat: 'Positive', safe: '0.80', safeStat: 'High', env: '0.72', envStat: 'Good' }
};

module.exports = { districtData, templeData, daData };
