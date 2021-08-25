export const getUniqueId = () => {
  return (Math.random() * 10).toString(16).replaceAll('.', '');
};