'use client';

import { ThemeProvider } from 'next-themes';
import { ReactNode } from 'react';

type AllProvidersProps = {
	children: ReactNode;
};

const AllProviders = ({ children }: AllProvidersProps) => <ThemeProvider attribute="class" defaultTheme='light' enableSystem={false}>{children}</ThemeProvider>;

export default AllProviders;
