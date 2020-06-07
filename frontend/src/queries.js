import { gql } from 'apollo-boost';

export const GET_GIT_LIST = gql 
`
    {
        githublist{
            name,
            html_url,
            description
        }
    }
`;

export const GET_INSTAGRAM_LIST = gql
`
    {
        instagramlist{
            id,
            media_url
        }
    }
`;

export const SEND_MESSAGE = gql
`
    mutation SendMessage($fullname: String!, $category: String!, $email: String!, $subject: String!, $description: String!){
        sendMessage(fullname: $fullname, category: $category, email: $email, subject: $subject, description: $description)
    }
`;