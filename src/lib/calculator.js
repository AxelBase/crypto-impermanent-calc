export function calculateIL(entryRatio, exitRatio) {
  if (isNaN(entryRatio) || isNaN(exitRatio) || entryRatio <= 0 || exitRatio <= 0) {
    return { il: null, hodlChange: null, error: 'Invalid input. Ratios must be positive numbers.' };
  }

  const k = exitRatio / entryRatio;
  const il = (2 * Math.sqrt(k) / (1 + k) - 1) * 100;
  const hodlChange = ((1 + k) / 2 - 1) * 100;

  return {
    il: il.toFixed(2),
    hodlChange: hodlChange.toFixed(2),
    error: null
  };
}