export function shortenTONAddress(address: string): string {
    const prefixLength: number = 6; 
    const suffixLength: number = 8; 
    
    // Extract the prefix and suffix
    const prefix: string = address.slice(0, prefixLength);
    const suffix: string = address.slice(-suffixLength);
    
    // Construct the shortened address
    const shortenedAddress: string = `${prefix}......${suffix}`;
    
    return shortenedAddress;
}