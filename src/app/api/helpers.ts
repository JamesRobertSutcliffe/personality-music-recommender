function getEmailFromRequest(request: Request): string | null {
  const url = new URL(request.url);
  const params = new URLSearchParams(url.search);
  return params.get("user_email");
}

async function getBodyFromRequest(request: Request): Promise<any> {
  return await request.json();
}

function constructErrorResponse(errorMessage: string, statusCode: number): Response {
  return new Response(JSON.stringify({ error: errorMessage }), { status: statusCode });
}

function constructSuccessResponse(successMessage: string, statusCode: number): Response {
  return new Response(JSON.stringify({ message: successMessage }), { status: statusCode });
}

export {
  getEmailFromRequest,
  getBodyFromRequest,
  constructErrorResponse,
  constructSuccessResponse
};
