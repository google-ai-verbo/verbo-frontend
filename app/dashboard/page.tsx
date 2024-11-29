'use client';

import Link from 'next/link';
import { Button, Card, CardHeader, CardContent, Typography, Divider, Grid, Box } from '@mui/material';
import { UserNav } from './user-nav';
import { UpcomingInterviews } from './upcoming-interviews';
import { RecentPractice } from './recent-practice';
import { useUser, useAuth } from '@clerk/nextjs';

export default function DashboardPage() {
    const { user } = useUser();
    const { signOut } = useAuth();

    return (
        <Box sx={{ minHeight: '100vh', backgroundColor: 'grey.100' }}>
            {/* Header */}
            <Box sx={{ backgroundColor: 'white', boxShadow: 1 }}>
                <Box sx={{ maxWidth: 1200, mx: 'auto', px: 2, py: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            style={{ height: 24, width: 24, color: '#1E88E5' }}
                        >
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                        </svg>
                        <Typography variant="h6" fontWeight="bold" color="primary">
                            Verbo
                        </Typography>
                    </Box>
                    <UserNav />
                </Box>
            </Box>

            {/* Main Content */}
            <Box sx={{ maxWidth: 1200, mx: 'auto', px: 2, py: 4 }}>
                <Typography variant="h4" fontWeight="bold" mb={4} color="text.primary">
                    Welcome back, {user?.fullName || 'User'}
                </Typography>

                {/* Summary Cards */}
                <Grid container spacing={3} mb={4}>
                    {[
                        { title: 'Practice Sessions', value: 12, subtitle: 'Total sessions completed' },
                        { title: 'AI Feedback', value: '85%', subtitle: 'Average performance score' },
                        { title: 'Upcoming Interviews', value: 3, subtitle: 'Scheduled in the next 7 days' },
                    ].map((item, index) => (
                        <Grid item xs={12} md={4} key={index}>
                            <Card sx={{ p: 2, boxShadow: 1 }}>
                                <CardHeader
                                    title={
                                        <Typography variant="h6" color="text.primary" fontWeight="bold">
                                            {item.title}
                                        </Typography>
                                    }
                                />
                                <Divider sx={{ my: 2 }} />
                                <CardContent>
                                    <Typography variant="h3" color="primary" fontWeight="bold">
                                        {item.value}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {item.subtitle}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>

                {/* Sections */}
                <Grid container spacing={4}>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h5" fontWeight="bold" mb={2} color="text.primary">
                            Upcoming Interviews
                        </Typography>
                        <UpcomingInterviews />
                        <Button
                            variant="contained"
                            color="primary"
                            fullWidth
                            sx={{ mt: 2 }}
                            component={Link}
                            href="/schedule"
                        >
                            Schedule New Interview
                        </Button>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h5" fontWeight="bold" mb={2} color="text.primary">
                            Recent Practice
                        </Typography>
                        <RecentPractice />
                        <Button
                            variant="contained"
                            color="primary"
                            fullWidth
                            sx={{ mt: 2 }}
                            component={Link}
                            href="/practice"
                        >
                            Start New Practice Session
                        </Button>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
}
