export default function toLocalDate(date) {
  return new Date(date).toLocaleDateString('en-GB',{day:'numeric',month:"long",year:"numeric"});
}
