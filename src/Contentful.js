import { createClient } from 'contentful';

export default createClient ({

    space: process.env.REACT_APP_API_SPACE,
    accessToken: process.env.REACT_APP_ACCESS_TOKEN
    // This is the space ID. A space is like a project folder in Contentful terms
    // space: "pearew5466uv",
    // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
    // accessToken: "k3KF8FttWymTMxcDizFMJ_BtaX-l4YIg6YOBFn0MHeQ"
    
});
