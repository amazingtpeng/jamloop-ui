// components/CampaignForm.js
import { useForm } from 'react-hook-form';
import { TextField, Button } from '@mui/material';
import { useEffect } from 'react';

const CampaignForm = ({ onSubmit, defaultValues }) => {
  const { register, handleSubmit, reset } = useForm({ defaultValues });

  useEffect(() => {
    reset(defaultValues)
  }, [defaultValues])

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField {...register('name')} label="Campaign Name" fullWidth margin="normal" />
      <TextField {...register('budget')} label="Budget" type="number" fullWidth margin="normal" />
      <TextField {...register('start')} label="Start Date" fullWidth margin="normal" />
      <TextField {...register('end')} label="End Date" fullWidth margin="normal" />
      <TextField {...register('demographic')} label="Demographic(Gender)" fullWidth margin="normal" />
      <TextField {...register('country')} label="Country" fullWidth margin="normal" />
      <TextField {...register('state')} label="State" fullWidth margin="normal" />
      <TextField {...register('city')} label="City" fullWidth margin="normal" />
      <TextField {...register('zipCode')} label="ZipCode" fullWidth margin="normal" />
      {/* Add more fields as needed */}
      <Button type="submit" variant="contained" color="primary">Save Campaign</Button>
    </form>
  );
};

export default CampaignForm;
