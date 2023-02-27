export const getCurrency = (int) => {
  const formatter = new Intl.NumberFormat('id-ID', {
    maximumFractionDigits: 0, 
    minimumFractionDigits: 0, 
    style: 'currency',
    currency: 'IDR'
  });
  return formatter.format(int)
}