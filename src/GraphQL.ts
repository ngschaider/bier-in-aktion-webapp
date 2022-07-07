import { gql } from '@apollo/client';

export const GET_PRODUCTS = gql`
    query {
        getProducts {
            id
            brand
            name
            originalPrice
            discountPrice
            description
            market {
                name
                imageUrl
                type
            }
            startDate
            endDate
            additionalInfo
        }
    }
`;