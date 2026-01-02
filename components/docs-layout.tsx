"use client"

import * as React from "react"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"
import { TopNavigation, type NavItem } from "@/components/top-navigation"
import { cn } from "@/lib/utils"

interface DocsLayoutProps {
  navigation: NavItem[]
  children: React.ReactNode
  title?: string
}

export function DocsLayout({ navigation, children, title }: DocsLayoutProps) {
  const [activeSection, setActiveSection] = React.useState<string>("")
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(true)

  // Get the active navigation item with sub-items
  const activeSectionData = React.useMemo(() => {
    return navigation.find(item => item.title === activeSection && item.items)
  }, [navigation, activeSection])

  // Reset sidebar when activeSection changes
  React.useEffect(() => {
    if (activeSectionData) {
      setIsSidebarOpen(true)
    }
  }, [activeSectionData])

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-background">
      {/* Top Navigation */}
      <TopNavigation
        navigation={navigation}
        title={title}
        activeSection={activeSection}
        onSectionChange={setActiveSection}
      />

      <div className="flex">
        {/* Left Sidebar - Only shown when there's an active section with items */}
        {activeSectionData && activeSectionData.items && (
          <>
            {/* Desktop Sidebar */}
            <aside
              className={cn(
                "hidden lg:block sticky top-16 h-[calc(100vh-4rem)] w-64 border-r bg-white dark:bg-background transition-all",
                isSidebarOpen ? "translate-x-0" : "-translate-x-full"
              )}
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-base font-semibold text-[#635bff]">
                    {activeSectionData.title}
                  </h3>
                  <button
                    onClick={() => setIsSidebarOpen(false)}
                    className="p-1 hover:bg-slate-100 dark:hover:bg-slate-800 rounded"
                    aria-label="Close sidebar"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </button>
                </div>
                <nav className="space-y-1">
                  {activeSectionData.items.map((item) => (
                    <Link
                      key={item.title}
                      href={item.href}
                      className="block px-3 py-2 text-sm text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-md transition-colors"
                    >
                      {item.title}
                    </Link>
                  ))}
                </nav>
              </div>
            </aside>

            {/* Sidebar toggle button when closed */}
            {!isSidebarOpen && (
              <button
                onClick={() => setIsSidebarOpen(true)}
                className="hidden lg:block fixed left-0 top-20 p-2 bg-white dark:bg-slate-800 border border-l-0 rounded-r-md shadow-md z-40"
                aria-label="Open sidebar"
              >
                <ChevronLeft className="h-4 w-4 rotate-180" />
              </button>
            )}
          </>
        )}

        {/* Main content area */}
        <main className="flex-1 overflow-y-auto">
          <div className="container mx-auto max-w-5xl px-6 py-8 lg:px-8 lg:py-12">
            <div className="prose prose-slate dark:prose-invert max-w-none">
              {children}
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
