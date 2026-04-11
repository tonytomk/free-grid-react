import React from 'react';
import { GridTheme } from '../types';

type ThemePreset = {
  gridColor: string;
  gridTextColor: string;
  gridMutedColor: string;
  gridBorderColor: string;
  gridHoverColor: string;
  gridSelectedColor: string;
};

export const themePresets: Record<string, ThemePreset> = {
  light: {
    gridColor: '#ffffff',
    gridTextColor: 'rgba(0, 0, 0, 0.87)',
    gridMutedColor: 'rgba(0, 0, 0, 0.54)',
    gridBorderColor: '#e0e0e0',
    gridHoverColor: 'rgba(0, 0, 0, 0.04)',
    gridSelectedColor: 'rgba(25, 118, 210, 0.08)',
  },
  dark: {
    gridColor: '#0f172a',
    gridTextColor: '#ffffff',
    gridMutedColor: 'rgba(255, 255, 255, 0.72)',
    gridBorderColor: 'rgba(255, 255, 255, 0.18)',
    gridHoverColor: 'rgba(255, 255, 255, 0.08)',
    gridSelectedColor: 'rgba(255, 255, 255, 0.12)',
  },
  blue: {
    gridColor: '#1d4ed8',
    gridTextColor: '#ffffff',
    gridMutedColor: 'rgba(255, 255, 255, 0.72)',
    gridBorderColor: 'rgba(255, 255, 255, 0.18)',
    gridHoverColor: 'rgba(255, 255, 255, 0.08)',
    gridSelectedColor: 'rgba(255, 255, 255, 0.12)',
  },
};

export type ActiveTheme = ThemePreset;

export interface ResolvedTheme {
  themeSurfaceStyle: React.CSSProperties;
  activeTheme: ThemePreset;
}

export function resolveTheme(
  theme: GridTheme,
  gridColor?: string,
  gridTextColor?: string,
): ResolvedTheme {
  const activeTheme = themePresets[theme] ?? themePresets.light;
  const useCustomSurfacePalette = theme === 'light' && !!gridColor;

  const resolvedGridColor = gridColor ?? activeTheme.gridColor;
  const resolvedGridTextColor =
    gridTextColor ?? (useCustomSurfacePalette ? '#ffffff' : activeTheme.gridTextColor);
  const resolvedGridMutedColor =
    gridTextColor ?? (useCustomSurfacePalette ? 'rgba(255, 255, 255, 0.72)' : activeTheme.gridMutedColor);
  const resolvedGridBorderColor = useCustomSurfacePalette
    ? 'rgba(255, 255, 255, 0.18)'
    : activeTheme.gridBorderColor;
  const resolvedGridHoverColor = useCustomSurfacePalette
    ? 'rgba(255, 255, 255, 0.08)'
    : activeTheme.gridHoverColor;
  const resolvedGridSelectedColor = useCustomSurfacePalette
    ? 'rgba(255, 255, 255, 0.12)'
    : activeTheme.gridSelectedColor;

  const themeSurfaceStyle = {
    '--fg-grid-surface': resolvedGridColor,
    '--fg-grid-surface-text': resolvedGridTextColor,
    '--fg-grid-surface-muted': resolvedGridMutedColor,
    '--fg-grid-surface-border': resolvedGridBorderColor,
    '--fg-grid-surface-hover': resolvedGridHoverColor,
    '--fg-grid-surface-selected': resolvedGridSelectedColor,
  } as React.CSSProperties;

  return { themeSurfaceStyle, activeTheme };
}
