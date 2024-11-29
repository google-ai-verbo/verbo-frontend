import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

export function RecentPractice() {
  const practices = [
    { topic: "Behavioral Questions", score: 85, date: "2024-03-10" },
    { topic: "Technical Interview", score: 78, date: "2024-03-08" },
    { topic: "System Design", score: 92, date: "2024-03-05" },
  ];

  return (
    <div className="space-y-4">
      {practices.map((practice, index) => (
        <Card key={index} sx={{ boxShadow: 2 }}>
          <CardHeader
            title={practice.topic}
            titleTypographyProps={{ variant: 'h6', color: 'primary' }}
          />
          <Divider />
          <CardContent>
            <Typography variant="body2" color="textSecondary">
              Score: {practice.score}%
            </Typography>
            <Typography variant="body2" fontWeight="bold">
              {practice.date}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
