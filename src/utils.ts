export const dateStringToDate = (dateSting: string): Date => {
  const dataParts = dateSting.split("/").map((value) => parseInt(value));
  return new Date(dataParts[2], dataParts[1] - 1, dataParts[0]);
};
