export function normalizeError(error, fallbackMessage = 'Request failed') {
  const status = error?.response?.status ?? null;
  const payload = error?.response?.data ?? null;

  return {
    message:
      payload?.message ||
      payload?.error ||
      error?.message ||
      fallbackMessage,
    status,
    details: payload,
    isApiError: true, // marker you can check in catch()
  };
}
