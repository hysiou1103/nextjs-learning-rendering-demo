'use client';
import { useTheme } from '@/components/theme-provider';
import { clientSideFunction } from '@/utils/client-utils';

export default function ClientRoutePage() {
  console.log('Client route rendered');
  const theme = useTheme();
  const result = clientSideFunction();
  return (
    <>
      <h1 style={{ color: theme.colors.secondary }}>ClientRoutePage</h1>
      <p>{result}</p>
    </>
  );
}
