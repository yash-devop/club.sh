export function getInitialsCharacters(name: string) {
    if (!name) return '';
    const words = name.trim().split(" ");
    

    const initials = words
        .filter(word => word.length > 0)
        .map(word => word[0])
        .join("");
    
    return initials.toUpperCase();
}
