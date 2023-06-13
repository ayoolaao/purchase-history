const formatCurrency = (value, locale = 'en-US', currency = 'USD') => {
  const formatter = new Intl.NumberFormat(locale, { style: 'currency', currency});
  return formatter.format(value);
}

export default formatCurrency;