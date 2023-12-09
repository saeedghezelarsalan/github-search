export const formatDate = (timestamp: string | Date) => {
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const date = new Date(timestamp);
  const formattedDate = `Updated on ${months[date.getMonth()]} ${date.getDate()}`;
  return formattedDate;
}