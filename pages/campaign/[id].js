// pages/campaigns/[id].js
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import axios from 'axios';
import CampaignForm from '../../components/CampaignForm';
import { useAuth } from '@/context/AuthContext';

const CampaignEditPage = () => {
  const { user } = useAuth();
  const router = useRouter();
  const { id } = router.query;
  const [campaign, setCampaign] = useState({
    name: '',
    buget: '',
    start: '',
    end: '',
    demographic: '',
    country: '',
    state: '',
    city: '',
    zipCode: ''
  });

  useEffect(() => {
    if (id) {
      axios.get(`https://jamloop.free.beeceptor.com/api/campaigns/${id}`)
        .then(res => setCampaign(res.data))
        .catch(err => console.error(err));
    }
  }, [id]);

  const handleSubmit = (data) => {
    if (id) {
      const accountAddedData = { ...data, accountId: user.username };
      axios.put(`https://jamloop.free.beeceptor.com/api/campaigns/${id}`, accountAddedData)
        .then(() => router.push('/campaigns'))
        .catch(err => console.error(err));
    }
  };

  return (
    <div>
      <h1>Edit Campaign</h1>
      <CampaignForm onSubmit={handleSubmit} defaultValues={campaign} />
    </div>
  );
};

export default CampaignEditPage;
