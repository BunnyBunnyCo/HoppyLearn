export function idToNum(id: string | undefined): number {
    if (id === undefined) {
      return NaN;
    }
    return parseInt(id, 10);
}