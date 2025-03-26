
// Mock data representing real land records in India
export interface LandRecord {
  id: string;
  plotNumber: string;
  location: {
    state: string;
    district: string;
    village: string;
    lat: number;
    lng: number;
  };
  area: {
    value: number;
    unit: 'acres' | 'hectares' | 'sqft' | 'sqm';
  };
  owner: {
    name: string;
    aadhaarLinked: boolean;
    contactNumber?: string;
  };
  status: 'legal' | 'illegal' | 'govt' | 'no-registry';
  riskScore: number; // 0-100
  history: {
    previousOwners: string[];
    transferDates: string[];
  };
  documents: {
    type: string;
    verified: boolean;
    uploadDate: string;
  }[];
  disputes?: {
    type: string;
    filedBy: string;
    filedDate: string;
    status: 'active' | 'resolved' | 'pending';
    description: string;
  }[];
  encumbrances?: {
    type: 'mortgage' | 'lien' | 'easement';
    institution?: string;
    amount?: number;
    startDate: string;
    endDate?: string;
  }[];
  marketValue: number; // in INR
  lastUpdated: string;
}

// Indian states with districts
export const indianStates = [
  {
    name: 'Uttar Pradesh',
    districts: ['Lucknow', 'Kanpur', 'Varanasi', 'Agra', 'Noida', 'Ghaziabad']
  },
  {
    name: 'Maharashtra',
    districts: ['Mumbai', 'Pune', 'Nagpur', 'Thane', 'Nashik', 'Aurangabad']
  },
  {
    name: 'Karnataka',
    districts: ['Bangalore', 'Mysore', 'Hubli', 'Mangalore', 'Belgaum', 'Gulbarga']
  },
  {
    name: 'Tamil Nadu',
    districts: ['Chennai', 'Coimbatore', 'Madurai', 'Salem', 'Trichy', 'Tirunelveli']
  },
  {
    name: 'Gujarat',
    districts: ['Ahmedabad', 'Surat', 'Vadodara', 'Rajkot', 'Gandhinagar', 'Bhavnagar']
  }
];

// Function to calculate risk level based on score
export function getRiskLevel(score: number): 'Low' | 'Medium' | 'High' {
  if (score < 30) return 'Low';
  if (score < 70) return 'Medium';
  return 'High';
}

// Function to get text color class based on risk level
export function getRiskColorClass(level: 'Low' | 'Medium' | 'High'): string {
  switch (level) {
    case 'Low': return 'text-risk-low';
    case 'Medium': return 'text-risk-medium';
    case 'High': return 'text-risk-high';
    default: return 'text-gray-600';
  }
}

// Generate realistic land records for India
export const landRecords: LandRecord[] = [
  {
    id: 'KA2023001',
    plotNumber: 'BLR-1234-5678',
    location: {
      state: 'Karnataka',
      district: 'Bangalore',
      village: 'Whitefield',
      lat: 12.9716,
      lng: 77.5946
    },
    area: {
      value: 2.5,
      unit: 'acres'
    },
    owner: {
      name: 'Rajesh Kumar',
      aadhaarLinked: true,
      contactNumber: '9845012345'
    },
    status: 'legal',
    riskScore: 15,
    history: {
      previousOwners: ['Suresh Patel', 'Karnataka Housing Board'],
      transferDates: ['2005-07-12', '2015-03-25']
    },
    documents: [
      {
        type: 'Title Deed',
        verified: true,
        uploadDate: '2022-05-15'
      },
      {
        type: 'Property Tax Receipt',
        verified: true,
        uploadDate: '2023-01-10'
      }
    ],
    marketValue: 25000000,
    lastUpdated: '2023-06-15'
  },
  {
    id: 'MH2023002',
    plotNumber: 'MUM-7856-1234',
    location: {
      state: 'Maharashtra',
      district: 'Mumbai',
      village: 'Andheri',
      lat: 19.0760,
      lng: 72.8777
    },
    area: {
      value: 1200,
      unit: 'sqft'
    },
    owner: {
      name: 'Priya Sharma',
      aadhaarLinked: true
    },
    status: 'no-registry',
    riskScore: 55,
    history: {
      previousOwners: ['Mumbai Development Authority'],
      transferDates: ['2010-11-30']
    },
    documents: [
      {
        type: 'Agreement to Sell',
        verified: true,
        uploadDate: '2020-03-21'
      },
      {
        type: 'Property Tax Receipt',
        verified: false,
        uploadDate: '2023-02-05'
      }
    ],
    disputes: [
      {
        type: 'Boundary Dispute',
        filedBy: 'Neighboring Owner',
        filedDate: '2022-11-15',
        status: 'pending',
        description: 'Dispute regarding the western boundary of the property'
      }
    ],
    marketValue: 15000000,
    lastUpdated: '2023-05-20'
  },
  {
    id: 'UP2023003',
    plotNumber: 'NOI-4567-8901',
    location: {
      state: 'Uttar Pradesh',
      district: 'Noida',
      village: 'Sector 62',
      lat: 28.5355,
      lng: 77.3910
    },
    area: {
      value: 0.75,
      unit: 'acres'
    },
    owner: {
      name: 'Government of Uttar Pradesh',
      aadhaarLinked: false
    },
    status: 'govt',
    riskScore: 5,
    history: {
      previousOwners: ['UP State Industrial Development Corporation'],
      transferDates: ['2000-01-15']
    },
    documents: [
      {
        type: 'Government Record',
        verified: true,
        uploadDate: '2020-12-10'
      }
    ],
    marketValue: 50000000,
    lastUpdated: '2023-01-30'
  },
  {
    id: 'GJ2023004',
    plotNumber: 'AHM-9012-3456',
    location: {
      state: 'Gujarat',
      district: 'Ahmedabad',
      village: 'Satellite',
      lat: 23.0225,
      lng: 72.5714
    },
    area: {
      value: 1800,
      unit: 'sqft'
    },
    owner: {
      name: 'Mehul Patel',
      aadhaarLinked: false
    },
    status: 'illegal',
    riskScore: 85,
    history: {
      previousOwners: ['Disputed'],
      transferDates: ['Unknown']
    },
    documents: [
      {
        type: 'Purported Deed',
        verified: false,
        uploadDate: '2021-08-25'
      }
    ],
    disputes: [
      {
        type: 'Ownership Dispute',
        filedBy: 'Multiple Claimants',
        filedDate: '2020-05-12',
        status: 'active',
        description: 'Multiple parties claiming ownership with conflicting documentation'
      },
      {
        type: 'Illegal Construction',
        filedBy: 'Municipal Corporation',
        filedDate: '2022-03-20',
        status: 'active',
        description: 'Construction without proper approvals'
      }
    ],
    encumbrances: [
      {
        type: 'lien',
        institution: 'State Bank of India',
        amount: 5000000,
        startDate: '2019-10-15'
      }
    ],
    marketValue: 9000000,
    lastUpdated: '2023-04-10'
  },
  {
    id: 'TN2023005',
    plotNumber: 'CHE-2345-6789',
    location: {
      state: 'Tamil Nadu',
      district: 'Chennai',
      village: 'Adyar',
      lat: 13.0067,
      lng: 80.2206
    },
    area: {
      value: 1.2,
      unit: 'acres'
    },
    owner: {
      name: 'Lakshmi Narayanan',
      aadhaarLinked: true,
      contactNumber: '9876543210'
    },
    status: 'legal',
    riskScore: 12,
    history: {
      previousOwners: ['Ramesh Chandran', 'Tamil Nadu Housing Board'],
      transferDates: ['1998-05-23', '2008-12-10']
    },
    documents: [
      {
        type: 'Title Deed',
        verified: true,
        uploadDate: '2021-07-18'
      },
      {
        type: 'Property Tax Receipt',
        verified: true,
        uploadDate: '2023-02-28'
      },
      {
        type: 'Encumbrance Certificate',
        verified: true,
        uploadDate: '2023-01-15'
      }
    ],
    encumbrances: [
      {
        type: 'mortgage',
        institution: 'HDFC Bank',
        amount: 10000000,
        startDate: '2018-06-20',
        endDate: '2033-06-20'
      }
    ],
    marketValue: 35000000,
    lastUpdated: '2023-03-12'
  },
  {
    id: 'MH2023006',
    plotNumber: 'PUN-3456-7890',
    location: {
      state: 'Maharashtra',
      district: 'Pune',
      village: 'Hinjewadi',
      lat: 18.5904,
      lng: 73.7397
    },
    area: {
      value: 2000,
      unit: 'sqft'
    },
    owner: {
      name: 'Amit Deshmukh',
      aadhaarLinked: true,
      contactNumber: '8765432109'
    },
    status: 'legal',
    riskScore: 25,
    history: {
      previousOwners: ['Maharashtra Industrial Development Corporation'],
      transferDates: ['2012-09-18']
    },
    documents: [
      {
        type: 'Sale Deed',
        verified: true,
        uploadDate: '2020-11-05'
      },
      {
        type: 'Property Tax Receipt',
        verified: true,
        uploadDate: '2023-03-10'
      },
      {
        type: '7/12 Extract',
        verified: true,
        uploadDate: '2022-12-15'
      }
    ],
    marketValue: 18000000,
    lastUpdated: '2023-04-05'
  },
  {
    id: 'KA2023007',
    plotNumber: 'MYS-4567-8901',
    location: {
      state: 'Karnataka',
      district: 'Mysore',
      village: 'Hebbal',
      lat: 12.3052,
      lng: 76.6376
    },
    area: {
      value: 1.5,
      unit: 'acres'
    },
    owner: {
      name: 'Karnataka State Government',
      aadhaarLinked: false
    },
    status: 'govt',
    riskScore: 8,
    history: {
      previousOwners: ['Mysore Urban Development Authority'],
      transferDates: ['2005-03-12']
    },
    documents: [
      {
        type: 'Government Notification',
        verified: true,
        uploadDate: '2019-08-22'
      }
    ],
    marketValue: 22000000,
    lastUpdated: '2022-11-30'
  },
  {
    id: 'UP2023008',
    plotNumber: 'LKO-5678-9012',
    location: {
      state: 'Uttar Pradesh',
      district: 'Lucknow',
      village: 'Gomti Nagar',
      lat: 26.8467,
      lng: 80.9462
    },
    area: {
      value: 2200,
      unit: 'sqft'
    },
    owner: {
      name: 'Rahul Srivastava',
      aadhaarLinked: true
    },
    status: 'no-registry',
    riskScore: 60,
    history: {
      previousOwners: ['Uttar Pradesh Housing Board', 'Vijay Malhotra'],
      transferDates: ['2003-06-25', '2018-02-10']
    },
    documents: [
      {
        type: 'Agreement to Sell',
        verified: true,
        uploadDate: '2021-04-15'
      },
      {
        type: 'Power of Attorney',
        verified: false,
        uploadDate: '2021-04-16'
      }
    ],
    disputes: [
      {
        type: 'Documentation Dispute',
        filedBy: 'Previous Owner',
        filedDate: '2022-01-18',
        status: 'pending',
        description: 'Dispute regarding the validity of the power of attorney'
      }
    ],
    marketValue: 12000000,
    lastUpdated: '2023-02-18'
  },
  {
    id: 'GJ2023009',
    plotNumber: 'SUR-6789-0123',
    location: {
      state: 'Gujarat',
      district: 'Surat',
      village: 'Vesu',
      lat: 21.1702,
      lng: 72.8311
    },
    area: {
      value: 1.8,
      unit: 'acres'
    },
    owner: {
      name: 'Prakash Patel',
      aadhaarLinked: true,
      contactNumber: '7654321098'
    },
    status: 'legal',
    riskScore: 18,
    history: {
      previousOwners: ['Gujarat Housing Board', 'Hitesh Shah'],
      transferDates: ['2000-11-20', '2010-08-15']
    },
    documents: [
      {
        type: 'Sale Deed',
        verified: true,
        uploadDate: '2020-05-10'
      },
      {
        type: 'Property Tax Receipt',
        verified: true,
        uploadDate: '2023-01-25'
      },
      {
        type: 'Non-Agricultural Permission',
        verified: true,
        uploadDate: '2020-06-12'
      }
    ],
    encumbrances: [
      {
        type: 'mortgage',
        institution: 'Bank of Baroda',
        amount: 15000000,
        startDate: '2020-09-15',
        endDate: '2035-09-15'
      }
    ],
    marketValue: 45000000,
    lastUpdated: '2023-02-05'
  },
  {
    id: 'MH2023010',
    plotNumber: 'NGP-7890-1234',
    location: {
      state: 'Maharashtra',
      district: 'Nagpur',
      village: 'Civil Lines',
      lat: 21.1458,
      lng: 79.0882
    },
    area: {
      value: 3000,
      unit: 'sqft'
    },
    owner: {
      name: 'Unknown',
      aadhaarLinked: false
    },
    status: 'illegal',
    riskScore: 90,
    history: {
      previousOwners: ['Disputed'],
      transferDates: ['Unknown']
    },
    documents: [
      {
        type: 'Unverified Documents',
        verified: false,
        uploadDate: '2021-10-30'
      }
    ],
    disputes: [
      {
        type: 'Ownership Dispute',
        filedBy: 'Multiple Claimants',
        filedDate: '2019-12-05',
        status: 'active',
        description: 'Three different parties claiming ownership with conflicting documentation'
      },
      {
        type: 'Land Use Violation',
        filedBy: 'Municipal Corporation',
        filedDate: '2021-07-22',
        status: 'active',
        description: 'Unauthorized commercial use in residential zone'
      }
    ],
    encumbrances: [
      {
        type: 'lien',
        institution: 'ICICI Bank',
        amount: 8000000,
        startDate: '2018-03-10'
      },
      {
        type: 'lien',
        institution: 'Private Lender',
        amount: 5000000,
        startDate: '2019-11-05'
      }
    ],
    marketValue: 20000000,
    lastUpdated: '2023-01-15'
  }
];

// Function to format currency in Indian format
export function formatIndianCurrency(amount: number): string {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(amount);
}

// Function to get risk level description
export function getRiskLevelDescription(score: number): string {
  if (score < 30) {
    return "Low risk properties have clear legal titles, proper registration, and no history of disputes.";
  } else if (score < 70) {
    return "Medium risk properties may have minor documentation issues, pending registry status, or past disputes that have been resolved.";
  } else {
    return "High risk properties have serious legal issues, unclear ownership, active disputes, or illegal construction status.";
  }
}

// Function to search land records based on various filters
export function searchLandRecords(
  query: string, 
  filters: {
    state?: string,
    district?: string,
    status?: string,
    riskLevel?: 'Low' | 'Medium' | 'High'
  } = {}
): LandRecord[] {
  // Normalize the query
  const normalizedQuery = query.toLowerCase().trim();
  
  return landRecords.filter(record => {
    // Apply text search
    const matchesQuery = normalizedQuery === '' || 
      record.plotNumber.toLowerCase().includes(normalizedQuery) ||
      record.owner.name.toLowerCase().includes(normalizedQuery) ||
      record.location.village.toLowerCase().includes(normalizedQuery) ||
      record.id.toLowerCase().includes(normalizedQuery);
    
    // Apply filters
    const matchesState = !filters.state || record.location.state === filters.state;
    const matchesDistrict = !filters.district || record.location.district === filters.district;
    const matchesStatus = !filters.status || record.status === filters.status;
    
    const recordRiskLevel = getRiskLevel(record.riskScore);
    const matchesRiskLevel = !filters.riskLevel || recordRiskLevel === filters.riskLevel;
    
    return matchesQuery && matchesState && matchesDistrict && matchesStatus && matchesRiskLevel;
  });
}

// Recent verifications
export const recentVerifications = [
  {
    id: 'V20230615001',
    landId: 'KA2023001',
    verifiedBy: 'Bank of Baroda',
    verificationDate: '2023-06-15T10:30:00',
    purpose: 'Mortgage Application'
  },
  {
    id: 'V20230610002',
    landId: 'MH2023006',
    verifiedBy: 'HDFC Bank',
    verificationDate: '2023-06-10T14:45:00',
    purpose: 'Property Purchase'
  },
  {
    id: 'V20230605003',
    landId: 'TN2023005',
    verifiedBy: 'State Bank of India',
    verificationDate: '2023-06-05T09:15:00',
    purpose: 'Loan Application'
  },
  {
    id: 'V20230601004',
    landId: 'GJ2023009',
    verifiedBy: 'ICICI Bank',
    verificationDate: '2023-06-01T16:20:00',
    purpose: 'Property Valuation'
  },
  {
    id: 'V20230528005',
    landId: 'KA2023001',
    verifiedBy: 'Canara Bank',
    verificationDate: '2023-05-28T11:10:00',
    purpose: 'Refinance Application'
  }
];

// Upcomming auctions
export const upcomingAuctions = [
  {
    id: 'A20230720001',
    plotNumber: 'BLR-AUCTION-001',
    location: 'Bangalore, Karnataka',
    auctionDate: '2023-07-20T10:00:00',
    basePrice: 30000000,
    auctionType: 'Government',
    description: 'Commercial plot in prime location',
    area: {
      value: 2.0,
      unit: 'acres'
    }
  },
  {
    id: 'A20230725002',
    plotNumber: 'MUM-AUCTION-002',
    location: 'Mumbai, Maharashtra',
    auctionDate: '2023-07-25T11:00:00',
    basePrice: 50000000,
    auctionType: 'Bank',
    description: 'Residential plot with sea view',
    area: {
      value: 5000,
      unit: 'sqft'
    }
  },
  {
    id: 'A20230802003',
    plotNumber: 'DEL-AUCTION-003',
    location: 'Delhi NCR',
    auctionDate: '2023-08-02T14:00:00',
    basePrice: 40000000,
    auctionType: 'Government',
    description: 'Mixed-use development land',
    area: {
      value: 1.5,
      unit: 'acres'
    }
  }
];
