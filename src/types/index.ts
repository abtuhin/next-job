export interface JobField {
    name: string;
    shortDescription: string;
    title: string;
    department: any;
    descriptions: any;
    employee: any;
    levels: any;
    locations: any;
    sortDate: string;
    type: any;
    types: any;
    sys: any;
    branch: any;
}

export interface JobDepartment {
    title: string;
    sys: any;
}

export interface JobLevel {
    title: string;
    sys: any;
}

export interface JobType {
    title: string;
    sys: any;
}

export interface JobLocation {
    name: string;
    city: string;
    email: string;
    phone: string;
    recipient: string;
    sortDate: string;
    street: string;
    zip: string;
    sys: any;
    coordinates: {
        lon: number;
        lat: number;
    };
}

export interface Job {
    fields: JobField;
    descriptions: any;
    jobDepartment: JobDepartment;
    jobLevel: JobLevel;
    jobType: JobType;
    jobLocation: JobLocation;
    metadata: any;
    sys: any;
}

export interface Jobs {
    jobs: Job[];
}

export interface ApiResponse {
    fields: any;
    metadata: any;
    sys: any;
}