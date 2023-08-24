export type profileType = {
    id: Number;
    firstName: String;
    lastName: String;
    about: String;
    location: String;
    status: String;
    profession: String;
    description: String;
    gender: String;
    dob: String;
    profileImage: String;
    backgroundImage: String;
    skills: Array<Number>;
    followers: { count: Number; visibility: Boolean};
    following: {count: Number; visibility: Boolean};
    streak: Number;
    notificationCount: Number;
    stats: {visibility: Boolean; xpPoints: Number; karmaPoints: Number};
    links: { github: String; linkedin: String; facebook: String; instagram: String; dribbble: String; behance: String; youtube: String};
    projects: {visibility: Boolean; data: Array<{id: Number; title: String; timeStamp: Number; techUsed: Array<Number>; bhimage: String; visibility: Boolean }>};
    playgrounds: {visibility: Boolean; data: Array<{id: Number; title: String; techUsed: Array<Number>; timeStamp: Number; sharedWith: Array<String>; visibility: Boolean}>};
    certificates: {visibility: Boolean; data: Array<{id: Number; title: String; techUsed: Number; dateIssued: String; certiUrl: String; visibility: Boolean}>};
    workExperience: {visibility: Boolean; data: Array<{id: Number; companyName: String; companyLogo: String; startDate: String; endDate: String; position: String; location: String; description: String; visibility: Boolean}>};
    education: {visibility: Boolean; data: Array<{id: Number; collegeName: String; collegeLogo: String; degree: String; major: String; location: String; startDate: String; endDate: String; visibility: Boolean}>};
    interests: {visibility: Boolean; data: Array<{id: Number; name: String}>};
    languages: {visibility: Boolean; data: Array<{id: Number; name: String}>};
}