// components/CardGrid.tsx

import React, { useEffect, useState } from 'react';
import { Grid, Card, CardContent, CardMedia, Typography, Button } from '@mui/material';
import { useRouter } from 'next/router';
import axios from 'axios';

interface CardData {
    courseImage: string;
    title: string;
    description: string;
    modules: JSON;
    link: string; // Link to the study material or detailed page
}

const CardGrid = () => {
    const router = useRouter();
    const [cardData, setCardData] = useState<CardData[]>([]);

    useEffect(() => {
        axios.get('http://localhost:3001/course/getAll')
            .then((response) => {
                console.log(response);
                setCardData(response.data);
            })
            .catch((error) => {
                console.log(error);

            });
    }, []);

    const handleButtonClick = (link: string) => {
        router.push(link);
    };

    return (
        <Grid container spacing={4}>
            {cardData?.map((card, index) => (
                <Grid item xs={12} md={4} key={index}>
                    <Card sx={{ height: '100%' }}>
                        <CardMedia
                            component="img"
                            height="140"
                            image={card.courseImage}
                            alt={card.title}
                        />
                        <CardContent>
                            <Typography variant="h5" component="div">
                                {card.title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {card.title}
                            </Typography>
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={() => handleButtonClick(card.link)}
                                sx={{ mt: 2 }}
                            >
                                View Study Material
                            </Button>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
};

export default CardGrid;
