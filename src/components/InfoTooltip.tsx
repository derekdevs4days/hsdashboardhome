import React, { useState, cloneElement } from 'react';
import { InfoIcon } from 'lucide-react';
import { Modal } from './Modal';
interface DashboardData {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  metrics?: {
    label: string;
    value: string | number;
    change?: string;
    isNegative?: boolean;
  }[];
}
interface InfoTooltipProps {
  dashboard: DashboardData;
}
export function InfoTooltip({
  dashboard
}: InfoTooltipProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return <>
      <button onClick={() => setIsModalOpen(true)} className="text-gray-400 hover:text-gray-600 transition-colors" aria-label="More information">
        <InfoIcon className="h-4 w-4" />
      </button>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title={dashboard.title} icon={<div className={`p-2 rounded-md ${dashboard.color} text-white`}>
            {cloneElement(dashboard.icon as React.ReactElement, {
        className: 'h-5 w-5'
      })}
          </div>}>
        <p className="text-gray-700">
          {dashboard.description}. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </Modal>
    </>;
}