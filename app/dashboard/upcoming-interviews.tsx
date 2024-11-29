import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { useUser, useAuth } from '@clerk/nextjs';

export function UpcomingInterviews() {
  const interviews = [
    { company: "Tech Corp", role: "Frontend Developer", date: "2024-03-15" },
    { company: "Startup Inc", role: "Full Stack Engineer", date: "2024-03-18" },
    { company: "Big Data Co", role: "Data Scientist", date: "2024-03-20" },
  ];

  return (
    <div className="space-y-4">
      {interviews.map((interview, index) => (
        <Card key={index} sx={{ boxShadow: 2 }}>
          <CardHeader
            title={interview.company}
            titleTypographyProps={{ variant: 'h6', color: 'primary' }}
          />
          <Divider />
          <CardContent>
            <Typography variant="body2" color="textSecondary">
              {interview.role}
            </Typography>
            <Typography variant="body2" fontWeight="bold">
              {interview.date}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
