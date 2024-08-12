// pages/campaigns.js
import ProtectedRoute from '../components/ProtectedRoute';
import CampaignsTable from '../components/CampaignsTable';
import { Button } from '@mui/material';
import { useRouter } from 'next/router';

const CampaignsPage = () => {
  const router = useRouter();

  const createCampaignHandler = () => {
    router.push("/campaign/create");
  }

  return (
    <ProtectedRoute>
      <Button onClick={createCampaignHandler} type='primary'>Create Campaign</Button>
      <CampaignsTable />
    </ProtectedRoute>
  );
};

export default CampaignsPage;
