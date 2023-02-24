import { APIGatewayEvent } from 'aws-lambda'

export const handler = async (event: APIGatewayEvent) => {
  return {
    statusCode: 200,
    body: JSON.stringify({message: "api home 4"})
  }
}

export const hello = async (event: APIGatewayEvent) => {
  return {
    statusCode: 200,
    body: JSON.stringify({message: "hello method"})
  }
}


export const world = async (event: APIGatewayEvent) => {
  return {
    statusCode: 200,
    body: JSON.stringify({message: "post method"})
  }
}