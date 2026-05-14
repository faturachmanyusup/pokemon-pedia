export const catching = (): 'success' | 'failed' => {
  return Math.floor(Math.random() * 2) ? 'success' : 'failed';
};
