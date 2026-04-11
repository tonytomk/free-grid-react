import { default as React } from 'react';
import { GridTheme } from '../types';
type ThemePreset = {
    gridColor: string;
    gridTextColor: string;
    gridMutedColor: string;
    gridBorderColor: string;
    gridHoverColor: string;
    gridSelectedColor: string;
};
export declare const themePresets: Record<string, ThemePreset>;
export type ActiveTheme = ThemePreset;
export interface ResolvedTheme {
    themeSurfaceStyle: React.CSSProperties;
    activeTheme: ThemePreset;
}
export declare function resolveTheme(theme: GridTheme, gridColor?: string, gridTextColor?: string): ResolvedTheme;
export {};
