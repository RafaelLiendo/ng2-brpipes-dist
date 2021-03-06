export function isString(value) {
    return typeof value === 'string';
}
export function hasLength(value) {
    return value.toString().trim().length > 0;
}
export function removeNonDigits(value) {
    return value.replace(/\D/g, '');
}
export function formatCnpj(value) {
    return value.substr(0, 2) + "." + value.substr(2, 3) + "." + value.substr(5, 3) + "/" + value.substr(8, 4) + "-" + value.substr(12, 2);
}
export function formatCpf(value) {
    return value.substr(0, 3) + "." + value.substr(3, 3) + "." + value.substr(6, 3) + "-" + value.substr(9, 2);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZzItYnJwaXBlcy8iLCJzb3VyY2VzIjpbImxpYi91dGlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNLFVBQVUsUUFBUSxDQUFDLEtBQVU7SUFFL0IsT0FBTyxPQUFPLEtBQUssS0FBSyxRQUFRLENBQUM7QUFDckMsQ0FBQztBQUVELE1BQU0sVUFBVSxTQUFTLENBQUMsS0FBVTtJQUVoQyxPQUFPLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0FBQzlDLENBQUM7QUFFRCxNQUFNLFVBQVUsZUFBZSxDQUFDLEtBQWE7SUFDekMsT0FBTyxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBQyxFQUFFLENBQUMsQ0FBQztBQUNuQyxDQUFDO0FBRUQsTUFBTSxVQUFVLFVBQVUsQ0FBQyxLQUFhO0lBRXBDLE9BQVUsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLFNBQUksS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLFNBQUksS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLFNBQUksS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLFNBQUksS0FBSyxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFHLENBQUM7QUFDNUgsQ0FBQztBQUVELE1BQU0sVUFBVSxTQUFTLENBQUMsS0FBYTtJQUVuQyxPQUFVLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxTQUFJLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxTQUFJLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxTQUFJLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBRyxDQUFDO0FBQ3JHLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gaXNTdHJpbmcodmFsdWU6IGFueSk6IGJvb2xlYW4ge1xyXG5cclxuICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaGFzTGVuZ3RoKHZhbHVlOiBhbnkpOiBib29sZWFuIHtcclxuXHJcbiAgICByZXR1cm4gdmFsdWUudG9TdHJpbmcoKS50cmltKCkubGVuZ3RoID4gMDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZU5vbkRpZ2l0cyh2YWx1ZTogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB2YWx1ZS5yZXBsYWNlKC9cXEQvZywnJyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRDbnBqKHZhbHVlOiBzdHJpbmcpOiBzdHJpbmcge1xyXG5cclxuICAgIHJldHVybiBgJHt2YWx1ZS5zdWJzdHIoMCwgMil9LiR7dmFsdWUuc3Vic3RyKDIsIDMpfS4ke3ZhbHVlLnN1YnN0cig1LCAzKX0vJHt2YWx1ZS5zdWJzdHIoOCwgNCl9LSR7dmFsdWUuc3Vic3RyKDEyLCAyKX1gO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0Q3BmKHZhbHVlOiBzdHJpbmcpOiBzdHJpbmcge1xyXG5cclxuICAgIHJldHVybiBgJHt2YWx1ZS5zdWJzdHIoMCwgMyl9LiR7dmFsdWUuc3Vic3RyKDMsIDMpfS4ke3ZhbHVlLnN1YnN0cig2LCAzKX0tJHt2YWx1ZS5zdWJzdHIoOSwgMil9YDtcclxufVxyXG4iXX0=