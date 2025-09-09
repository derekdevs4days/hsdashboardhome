import React from 'react';
import { DashboardCard } from './DashboardCard';
import { BarChartIcon, UsersIcon, LineChartIcon, PieChartIcon, CalendarIcon, BadgePercentIcon, StarIcon, TrendingUpIcon, BuildingIcon, ShieldIcon, DollarSignIcon, AwardIcon, ClockIcon, TargetIcon, MegaphoneIcon } from 'lucide-react';
export function DashboardGrid() {
  const marketingDashboards = [{
    id: 'meta-ads',
    title: 'Meta Ads Dashboard',
    description: 'Track Facebook and Instagram ad performance',
    icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>,
    color: 'bg-blue-500',
    metrics: [{
      label: 'Impressions',
      value: '245K',
      change: '8%'
    }, {
      label: 'Conversion',
      value: '3.2%',
      change: '0.5%'
    }]
  }, {
    id: 'google-ads',
    title: 'Google Ads Dashboard',
    description: 'Monitor Google ad campaigns and performance',
    icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 8v8" />
          <path d="M8 12h8" />
        </svg>,
    color: 'bg-red-500',
    metrics: [{
      label: 'Clicks',
      value: '12.5K',
      change: '4%'
    }, {
      label: 'CPC',
      value: '$1.25',
      change: '10%',
      isNegative: true
    }]
  }, {
    id: 'google-ads-nb',
    title: 'Google Ads NB Dashboard',
    description: 'New business acquisition through Google ads',
    icon: <TargetIcon />,
    color: 'bg-green-500',
    metrics: [{
      label: 'New Leads',
      value: '128',
      change: '12%'
    }, {
      label: 'Cost/Lead',
      value: '$32',
      change: '5%',
      isNegative: true
    }]
  }, {
    id: 'reviews',
    title: 'Reviews Dashboard',
    description: 'Customer reviews and satisfaction metrics',
    icon: <StarIcon />,
    color: 'bg-amber-500',
    metrics: [{
      label: 'Rating',
      value: '4.8/5',
      change: '0.2'
    }, {
      label: 'Reviews',
      value: '342',
      change: '15%'
    }]
  }];
  const staffDashboards = [{
    id: 'staff',
    title: 'Staff Dashboard',
    description: 'Employee management and scheduling',
    icon: <UsersIcon />,
    color: 'bg-purple-500',
    metrics: [{
      label: 'Staff',
      value: '12'
    }, {
      label: 'Hours',
      value: '240',
      change: '5%'
    }]
  }, {
    id: 'commission',
    title: 'Commission Tiers Dashboard',
    description: 'Staff commission structure and earnings',
    icon: <DollarSignIcon />,
    color: 'bg-indigo-500',
    metrics: [{
      label: 'Avg. Rate',
      value: '15%',
      change: '2%'
    }, {
      label: 'Total Paid',
      value: '$4,250',
      change: '8%'
    }]
  }, {
    id: 'esthetician',
    title: 'Esthetician Performance',
    description: 'Performance metrics and recertification',
    icon: <AwardIcon />,
    color: 'bg-teal-500',
    metrics: [{
      label: 'Top Performer',
      value: 'Amy S.'
    }, {
      label: 'Satisfaction',
      value: '4.8/5',
      change: '0.2'
    }]
  }, {
    id: 'prospect',
    title: 'Prospect Allocation Dashboard',
    description: 'Lead tracking and conversion metrics',
    icon: <PieChartIcon />,
    color: 'bg-rose-500',
    metrics: [{
      label: 'Prospects',
      value: '86',
      change: '12%'
    }, {
      label: 'Conversion',
      value: '32%',
      change: '4%'
    }]
  }];
  const businessDashboards = [{
    id: 'owners',
    title: 'Owners Dashboard',
    description: 'Revenue, profits, and business overview',
    icon: <BarChartIcon />,
    color: 'bg-blue-600',
    metrics: [{
      label: 'Revenue',
      value: '$24,500',
      change: '12%'
    }, {
      label: 'Customers',
      value: '1,245',
      change: '5%'
    }]
  }, {
    id: 'mom-comparison',
    title: 'Month over Month Comparison',
    description: 'Compare salon performance across months',
    icon: <TrendingUpIcon />,
    color: 'bg-emerald-500',
    metrics: [{
      label: 'Growth',
      value: '8.5%',
      change: '1.2%'
    }, {
      label: 'Retention',
      value: '76%',
      change: '3%'
    }]
  }, {
    id: 'cancellations',
    title: 'Cancellations Dashboard',
    description: 'Appointment cancellations and analysis',
    icon: <ClockIcon />,
    color: 'bg-orange-500',
    metrics: [{
      label: 'Rate',
      value: '4.2%',
      change: '1.5%',
      isNegative: true
    }, {
      label: 'No-shows',
      value: '18',
      change: '20%',
      isNegative: true
    }]
  }, {
    id: 'location',
    title: 'Location Dashboard',
    description: 'Store performance and location analytics',
    icon: <BuildingIcon />,
    color: 'bg-violet-500',
    metrics: [{
      label: 'Foot Traffic',
      value: '2,450',
      change: '8%'
    }, {
      label: 'Avg. Wait',
      value: '12 min',
      change: '3%',
      isNegative: true
    }]
  }];
  return <div>
      <div className="mb-8 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-1">
          Welcome to Your Dashboards
        </h1>
        <button className="flex items-center gap-2 bg-[#E13F4E] hover:bg-[#D03545] text-white px-4 py-2 rounded-md transition-colors text-sm font-medium">
          <ShieldIcon className="h-4 w-4" />
          Manage Access
        </button>
      </div>
      <div className="mb-12">
        <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center pb-2 border-b border-gray-100">
          <MegaphoneIcon className="h-6 w-6 mr-3 text-[#E13F4E]" />
          Marketing
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {marketingDashboards.map(dashboard => <DashboardCard key={dashboard.id} dashboard={dashboard} />)}
        </div>
      </div>
      <div className="mb-12">
        <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center pb-2 border-b border-gray-100">
          <BuildingIcon className="h-6 w-6 mr-3 text-[#E13F4E]" />
          Business Operations
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {businessDashboards.map(dashboard => <DashboardCard key={dashboard.id} dashboard={dashboard} />)}
        </div>
      </div>
      <div className="mb-12">
        <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center pb-2 border-b border-gray-100">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-[#E13F4E]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
          </svg>
          Staff & Performance
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {staffDashboards.map(dashboard => <DashboardCard key={dashboard.id} dashboard={dashboard} />)}
        </div>
      </div>
    </div>;
}