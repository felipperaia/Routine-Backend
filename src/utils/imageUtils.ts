export const encodeBase64 = (buffer: Buffer): string => buffer.toString('base64');
export const decodeBase64 = (data: string): Buffer => Buffer.from(data, 'base64');