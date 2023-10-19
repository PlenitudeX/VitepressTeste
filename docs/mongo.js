import axios from "axios";

const apiKey = 'ePYExNrjYIelZMMPOxTxqaB42saDaaqizfGIoX8nv0koqkQRlb81sOZNz2nLRh6I';

export async function mongoFind(email) {
    const body = {
      "collection": "Mecanico",
      "database": "Modelospx",
      "dataSource": "ClusterPx",
      "projection": { "_id": false },
        "filter": {
            "email": {
                "$eq": email
            }
        },
    };
    try {
        const response = await axios.post(
            'https://sa-east-1.aws.data.mongodb-api.com/app/data-cujkc/endpoint/data/v1/action/find',
            body,
            {
              headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`
              }
            }
          );

          return response.data.documents;

    } catch (error) {
        return error;
    }

}
