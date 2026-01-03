export function withBasePath(path: string): string {
  const baseUrl = import.meta.env.BASE_URL ?? '/'
  const base = baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`
  const cleanedPath = path.startsWith('/') ? path.slice(1) : path
  return `${base}${cleanedPath}`
}

export function pdfUrl(pdfPath: string, options?: { page?: number }): string {
  const page = options?.page ?? 1
  return `${withBasePath(pdfPath)}#page=${page}&view=FitH`
}

