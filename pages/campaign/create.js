// pages/campaigns/[id].js
import { useRouter } from 'next/router';
import { useState } from 'react';
import axios from 'axios';
import CampaignForm from '../../components/CampaignForm';
import { useAuth } from '@/context/AuthContext';

const CampaignCreatePage = () => {
  const { user } = useAuth();
  const router = useRouter();
  const [campaign, setCampaign] = useState({
    name: '',
    budgetGoal: '',
    startDate: '',
    endDate: '',
    demographic: '',
    country: '',
    state: '',
    city: '',
    zip: ''
  });

  const handleSubmit = (data) => {
    const accountAddedData = { ...data, accountId: user.username };
    axios.post(`https://campaign.free.beeceptor.com/api/campaigns`, accountAddedData)
    .then(() => router.push('/campaigns'))
    .catch(err => console.error(err));
  };

  return (
    <div>
      <h1>Create Campaign</h1>
      <CampaignForm onSubmit={handleSubmit} defaultValues={campaign} />
    </div>
  );
};

export default CampaignCreatePage;
