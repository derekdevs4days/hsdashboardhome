import React from 'react';
import { LogOutIcon } from 'lucide-react';
interface HeaderProps {
  user: {
    name: string;
    role: string;
    location: string;
    avatar: string;
  };
}
export function Header({
  user
}: HeaderProps) {
  return <header className="bg-white border-b border-gray-300 shadow-sm sticky top-0 z-10">
      <div className="container mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center">
          <img src="/hs_logo.png" alt="Hello Sugar Logo" className="h-11" />
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="flex items-center">
              <p className="text-sm font-medium text-gray-700">{user.name}</p>
            </div>
            <div className="h-9 w-9 rounded-full bg-[#E13F4E] text-white flex items-center justify-center text-sm font-medium">
              {user.avatar}
            </div>
          </div>
          <button className="text-gray-500 hover:text-gray-700 transition-colors">
            <LogOutIcon className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>;
}