const formatDate = (dateString, monthFormat = 'long') => {
  const date = new Date(dateString);
  return date.toLocaleDateString('default', { year: 'numeric', month: monthFormat, day: 'numeric' });
}

export default formatDate;