// components/CampaignsTable.js
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';
import { useRouter } from 'next/router';
import { Table, TableHead, TableRow, TableCell, TableBody, Button } from '@mui/material';

const CampaignsTable = () => {
  const [campaigns, setCampaigns] = useState([]);
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    axios.get(`https://campaign.free.beeceptor.com/api/campaigns/`)
      .then(res => setCampaigns(res.data.filter(item => item.accountId === user.username)))
      .catch(err => console.error(err));
  }, [user]);

  const handleEdit = (id) => {
    router.push(`/campaign/${id}`);
  };

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Name</TableCell>
          <TableCell>Budget</TableCell>
          <TableCell>Start Date</TableCell>
          <TableCell>End Date</TableCell>
          <TableCell>Demographic</TableCell>
          <TableCell>Country</TableCell>
          <TableCell>State</TableCell>
          <TableCell>City</TableCell>
          <TableCell>ZipCode</TableCell>
          <TableCell>Action</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {campaigns.map(campaign => (
          <TableRow key={campaign.id}>
            <TableCell>{campaign.name}</TableCell>
            <TableCell>{campaign.budget}</TableCell>
            <TableCell>{campaign.start}</TableCell>
            <TableCell>{campaign.end}</TableCell>
            <TableCell>{campaign.demographic}</TableCell>
            <TableCell>{campaign.country}</TableCell>
            <TableCell>{campaign.state}</TableCell>
            <TableCell>{campaign.city}</TableCell>
            <TableCell>{campaign.zipCode}</TableCell>
            <TableCell>
              <Button onClick={() => handleEdit(campaign.id)}>Edit</Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default CampaignsTable;
