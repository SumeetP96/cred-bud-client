import { useContext } from 'react';
import { DialogContext } from './DialogProvider';

export default function useDialog() {
  const context = useContext(DialogContext);

  if (!context) {
    throw new Error('useDialog must be used within a DialogProvider');
  }

  return context;
}
