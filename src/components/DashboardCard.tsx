import React, { cloneElement } from 'react';
import { ArrowRightIcon } from 'lucide-react';
import { InfoTooltip } from './InfoTooltip';
interface MetricData {
  label: string;
  value: string | number;
  change?: string;
  isNegative?: boolean;
}
interface DashboardProps {
  dashboard: {
    id: string;
    title: string;
    description: string;
    icon: React.ReactNode;
    color: string;
    metrics?: MetricData[];
  };
}
export function DashboardCard({
  dashboard
}: DashboardProps) {
  return <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-200 border border-gray-100 overflow-hidden group h-full flex flex-col">
      <div className="p-5 flex flex-col h-full">
        <div className="flex items-center mb-3">
          <div className="p-2 rounded-md bg-[#E13F4E] text-white mr-3">
            {cloneElement(dashboard.icon as React.ReactElement, {
            className: 'h-5 w-5'
          })}
          </div>
          <h3 className="font-semibold text-gray-800 flex-1">
            {dashboard.title}
          </h3>
          <InfoTooltip dashboard={dashboard} />
        </div>
        <p className="text-sm text-gray-500 mb-6 flex-grow">
          {dashboard.description}
        </p>
        <button className="w-full flex items-center justify-center text-sm text-[#E13F4E] hover:text-[#D03545] py-2 font-medium transition-colors group-hover:underline mt-auto">
          View Dashboard
          <ArrowRightIcon className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-0.5" />
        </button>
      </div>
    </div>;
}