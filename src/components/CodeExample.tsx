"use client";

import { useState } from "react";

interface CodeExampleProps {
  title: string;
  description: string;
  htmlCode?: string;
  cssCode?: string;
  javascriptCode?: string;
  explanation: string;
  accessibilityTips?: string[];
}

export const CodeExample = ({
  title,
  description,
  htmlCode,
  cssCode,
  javascriptCode,
  explanation,
  accessibilityTips = []
}: CodeExampleProps) => {
  // For JavaScript pages, only show JavaScript tab
  const isJavaScriptMode = !!javascriptCode;
  const [activeTab, setActiveTab] = useState<"html" | "css" | "javascript" | "preview">(
    isJavaScriptMode ? "javascript" : (htmlCode ? "html" : "css")
  );
  
  const hasMultipleTabs = htmlCode && cssCode;

  return (
    <div className="bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 overflow-hidden shadow-lg">
      <div className="border-b border-slate-200 dark:border-slate-700 p-4">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
          {title}
        </h3>
        <p className="text-slate-600 dark:text-slate-300">
          {description}
        </p>
      </div>

      {/* Tab Navigation */}
      {!isJavaScriptMode && (
        <div className="border-b border-slate-200 dark:border-slate-700">
          <nav className="flex">
            {htmlCode && (
              <button
                onClick={() => setActiveTab("html")}
                className={`px-6 py-3 text-sm font-medium border-b-2 transition-colors ${
                  activeTab === "html"
                    ? "border-blue-500 text-blue-600 dark:text-blue-400"
                    : "border-transparent text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-300"
                }`}
              >
                HTML Code
              </button>
            )}
            {cssCode && (
              <button
                onClick={() => setActiveTab("css")}
                className={`px-6 py-3 text-sm font-medium border-b-2 transition-colors ${
                  activeTab === "css"
                    ? "border-blue-500 text-blue-600 dark:text-blue-400"
                    : "border-transparent text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-300"
                }`}
              >
                CSS Code
              </button>
            )}
            <button
              onClick={() => setActiveTab("preview")}
              className={`px-6 py-3 text-sm font-medium border-b-2 transition-colors ${
                activeTab === "preview"
                  ? "border-blue-500 text-blue-600 dark:text-blue-400"
                  : "border-transparent text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-300"
              }`}
            >
              Preview
            </button>
          </nav>
        </div>
      )}
      
      {/* JavaScript Tab Navigation (single tab, no preview) */}
      {isJavaScriptMode && (
        <div className="border-b border-slate-200 dark:border-slate-700">
          <nav className="flex">
            <button
              onClick={() => setActiveTab("javascript")}
              className="px-6 py-3 text-sm font-medium border-b-2 border-blue-500 text-blue-600 dark:text-blue-400"
            >
              JavaScript Code
            </button>
          </nav>
        </div>
      )}

      {/* Content */}
      <div className="p-4">
        {/* JavaScript Code Display - Always visible in JavaScript mode */}
        {isJavaScriptMode && (
          <div>
            <pre className="bg-slate-900 text-slate-100 p-4 rounded-md overflow-x-auto text-sm">
              <code>{javascriptCode}</code>
            </pre>
            <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-md">
              <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Explanation:</h4>
              <p className="text-slate-700 dark:text-slate-300">{explanation}</p>
            </div>
            {accessibilityTips.length > 0 && (
              <div className="mt-4 p-4 bg-green-50 dark:bg-green-900/20 rounded-md">
                <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Best Practices:</h4>
                <ul className="list-disc list-inside space-y-1 text-slate-700 dark:text-slate-300">
                  {accessibilityTips.map((tip, index) => (
                    <li key={index}>{tip}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
        
        {/* HTML/CSS Code Display */}
        {!isJavaScriptMode && (activeTab === "html" || activeTab === "css") && (
          <div>
            <pre className="bg-slate-900 text-slate-100 p-4 rounded-md overflow-x-auto text-sm">
              <code>{activeTab === "html" ? htmlCode : cssCode}</code>
            </pre>
            <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-md">
              <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Explanation:</h4>
              <p className="text-slate-700 dark:text-slate-300">{explanation}</p>
            </div>
            {accessibilityTips.length > 0 && (
              <div className="mt-4 p-4 bg-green-50 dark:bg-green-900/20 rounded-md">
                <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Accessibility Tips:</h4>
                <ul className="list-disc list-inside space-y-1 text-slate-700 dark:text-slate-300">
                  {accessibilityTips.map((tip, index) => (
                    <li key={index}>{tip}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
        
        {/* Preview Tab (only for HTML/CSS mode) */}
        {!isJavaScriptMode && activeTab === "preview" && (
          <div className="border border-slate-200 dark:border-slate-600 rounded-md p-4 bg-slate-50 dark:bg-slate-900">
            {htmlCode ? (
              <div 
                className="prose dark:prose-invert max-w-none"
                dangerouslySetInnerHTML={{ __html: htmlCode }}
              />
            ) : (
              <div className="text-center py-8 text-slate-500 dark:text-slate-400">
                <p>CSS code preview is not available.</p>
                <p className="text-sm mt-2">View the code tabs to see the CSS implementation.</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
