import { ThemeProvider } from "@/providers/theme-provider";

const layout = ({children}: {children: React.ReactNode}) => {
    return (
        <div className='flex items-center justify-center h-screen'>
            <ThemeProvider
                attribute="class"
                defaultTheme="dark"
                // enableSystem
                disableTransitionOnChange
            >
                {children}
            </ThemeProvider>
        </div>
    )
}

export default layout;