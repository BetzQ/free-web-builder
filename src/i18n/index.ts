import { useMemo } from 'react';
import { useStudioStore } from '@/store/useStudioStore';
import { getTranslation } from './translations';

export function useTranslation() {
  const { locale } = useStudioStore();
  const t = useMemo(() => getTranslation(locale), [locale]);
  return { t, locale };
}